
namespace Serene.Membership.Pages
{
    using Serenity;
    using System.Web.Mvc;
    using Serenity.CodeGeneration;
    using System.Text;
    using System.Globalization;
    using System.Collections.Generic;
    using System;

    [RoutePrefix("Test"), Route("{action=index}")]
    public partial class TestController : Controller
    {
        public ActionResult Index()
        {
            var path = Server.MapPath("~/scripts/site/Serene.Typed.ts");
            var input = System.IO.File.ReadAllText(path);
            var parser = new TypescriptParser();

            StringBuilder sb = new StringBuilder();

            parser.ReportToken += (token =>
            {
                //if (token.Type != TokenType.WhiteSpace &&
                //    token.Type != TokenType.EndOfLine)
                //{
                //    sb.AppendLine("Namespace: " + parser.NamespaceStack.Peek().Name);
                //    sb.AppendLine("Class: " + (parser.TypeStack.Count > 0 ? parser.TypeStack.Peek().ToString() : ""));
                //    sb.AppendLine(token.Type.GetText());
                //    sb.AppendLine(JSON.StringifyIndented(token));
                //    sb.AppendLine("----------------------");
                //}
            });

            parser.ReportType += (type =>
            {
                sb.AppendLine(type.ToString());
            });

            parser.Parse(input);

            return new ContentResult { Content = sb.ToString(), ContentType = "text/plain" };
        }
    }

    public class TypescriptParser
    {
        static LexerSettings tsSettings = new LexerSettings
        {
            InlineComments = new string[] { "//" },
            StringEscapeChar = '\\',
            CultureInfo = CultureInfo.InvariantCulture,
            CompareInfo = CultureInfo.InvariantCulture.CompareInfo,
            DecimalSeparator = ".",
            Options = LexerOptions.StringEscaping,
            StringQuotes = new char[] { '\"', '\'' },
            CommentBegin = "/*",
            CommentEnd = "*/"
        };

        private Token token;
        private Lexer lexer;
        private TokenType type;
        private string text;
        private Stack<NamespaceInfo> namespaceStack = new Stack<NamespaceInfo>();
        private Stack<TypeInfo> typeStack = new Stack<TypeInfo>();
        private Stack<string> braceStack = new Stack<string>();
        private Stack<string> modifiers = new Stack<string>();

        public TypescriptParser()
        {
        }

        public void Parse(string input)
        {
            modifiers.Clear();
            namespaceStack.Clear();
            typeStack.Clear();
            namespaceStack.Push(new NamespaceInfo { Name = "", Imports = new Dictionary<string, string>() });
            lexer = new Lexer(input, tsSettings);
            while (Next() && Parse());
        }

        public Stack<NamespaceInfo> NamespaceStack { get { return namespaceStack; } }
        public Stack<TypeInfo> TypeStack { get { return typeStack; } }

        private Token Peek()
        {
            return lexer.PeekNextToken();
        }

        private bool NextCharIf(string c)
        {
            return NextIf(TokenType.Char, c);
        }

        private bool NextIf(TokenType type)
        {
            var peek = Peek();
            if (peek.Type == type)
            {
                Next();
                return true;
            }

            return false;
        }

        private bool Is(TokenType type, string text)
        {
            return this.type == type && this.text == text;
        }

        private bool NextIf(TokenType type, string text)
        {
            var peek = Peek();
            if (peek.Type == type && peek.Text == text)
            {
                Next();
                return true;
            }

            return false;
        }

        private bool NextIf(Func<Token, bool> check)
        {
            var peek = Peek();
            if (peek.Type != TokenType.End && check(peek))
            {
                Next();
                return true;
            }

            return false;
        }

        private bool Next()
        {
            token = lexer.GetNextToken();
            type = token.Type;
            text = token.Text;

            if (ReportToken != null)
                ReportToken(token);

            return token.Type != TokenType.End;
        }

        public Action<Token> ReportToken;
        public Action<TypeInfo> ReportType;

        public bool SkipWhitespace()
        {
            var result = false;

            while (Next() && (type == TokenType.WhiteSpace ||
                    type == TokenType.EndOfLine))
            {
                result = true;
            }

            return result;
        }

        public bool IsWhitespace()
        {
            return type == TokenType.WhiteSpace ||
                type == TokenType.EndOfLine;
        }

        public string ParseDottedIdentifier()
        {
            string key = "";
            do
            {
                switch (type)
                {
                    case TokenType.Identifier:
                        if (key == "" ||
                            key.EndsWith("."))
                            key += text;
                        else
                            return null;

                        break;

                    case TokenType.Char:
                        if (text != ".")
                        {
                            if (key.Length == 0 ||
                                key.EndsWith("."))
                                return null;
                        }

                        if (key.EndsWith("."))
                            return null;

                        key += ".";

                        break;

                    default:
                        if (key.Length == 0 ||
                            key.EndsWith("."))
                            return null;

                        return key;
                }
            }
            while (Next());

            return key;
        }

        public string ParseBaseTypeIdentifier()
        {
            string key = "";
            do
            {
                switch (type)
                {
                    case TokenType.Identifier:
                        string ident;
                        if (key != "" || !namespaceStack.Peek().Imports.TryGetValue(text, out ident))
                            ident = text;

                        if (key == "" ||
                            key.EndsWith("."))
                            key += ident;
                        else
                            return null;

                        break;

                    case TokenType.Char:
                        if (text == "<")
                        {
                            if (key == "" || key.EndsWith("."))
                                return null;

                            key += "<";

                            while (true)
                            {
                                SkipWhitespace();

                                var part = ParseBaseTypeIdentifier();
                                if (part == null)
                                    return null;

                                key += part;

                                if (IsWhitespace())
                                    SkipWhitespace();

                                if (type == TokenType.Char &&
                                    text == ">")
                                    break;

                                if (type == TokenType.Char &&
                                    text == ",")
                                {
                                    key += ", ";
                                    continue;
                                }

                                return null;
                            }

                            if (key == "<" || key.EndsWith(", "))
                                return null;

                            key += ">";
                            Next();
                            return key;
                        }
                        else if (text != ".")
                        {
                            if (key.Length == 0 ||
                                key.EndsWith("."))
                                return null;

                            return key;
                        }

                        if (key.EndsWith("."))
                            return null;

                        key += ".";
                        break;

                    default:
                        if (key.Length == 0 ||
                            key.EndsWith("."))
                            return null;

                        return key;
                }
            }
            while (Next());

            return key;
        }

        private bool ParseNamespace()
        {
            if (!SkipWhitespace())
                return false;

            var ns = ParseDottedIdentifier();
            if (ns == null)
                return false;

            if (IsWhitespace())
                SkipWhitespace();

            if (!Is(TokenType.Char, "{"))
            {
                return false;
            }

            var parent = namespaceStack.Peek();
            if (parent.Name.Length > 0)
                ns = parent.Name + "." + ns;

            namespaceStack.Push(new NamespaceInfo
            {
                Name = ns,
                Imports = new Dictionary<string, string>(parent.Imports)
            });

            braceStack.Push("{namespace");
            return true;
        }

        private void Dump()
        {

        }

        private bool ParseType()
        {
            bool isInterface = text == "interface";

            if (!SkipWhitespace())
                return false;

            if (type != TokenType.Identifier)
                return false;

            var className = text;

            typeStack.Push(new TypeInfo
            {
                Modifiers = new List<string>(modifiers),
                Namespace = namespaceStack.Peek(),
                Name = className,
                IsInterface = isInterface
            });

            SkipWhitespace();

            if (Is(TokenType.Identifier, "extends"))
            {
                if (!SkipWhitespace())
                    return false;

                var baseType = ParseBaseTypeIdentifier();
                if (baseType == null)
                    return false;

                typeStack.Peek().Extends = baseType;
            }

            if (Is(TokenType.Identifier, "implements"))
            {
                if (!SkipWhitespace())
                    return false;

                var baseClass = ParseBaseTypeIdentifier();
                if (baseClass == null)
                    return false;

                typeStack.Peek().Implements = baseClass;
            }

            if (IsWhitespace())
                SkipWhitespace();

            if (!ParseChar() || text != "{")
                return false;

            braceStack.Push("{class");

            return true;
        }

        private bool ParseImport()
        {
            if (!SkipWhitespace())
                return false;

            if (type != TokenType.Identifier)
                return false;

            var alias = text;

            SkipWhitespace();

            if (type != TokenType.Char ||
                text != "=")
            {
                // not interested with other imports, only aliases
                return Parse();
            }

            SkipWhitespace();
            var identifier = ParseBaseTypeIdentifier();
            if (identifier == null)
                return false;

            namespaceStack.Peek().Imports[alias] = identifier;
            SkipWhitespace();

            if (type == TokenType.Char ||
                text == ";")
                Next();

            return true;
        }

        private bool ParseIdentifier()
        {
            switch (text)
            {
                case "namespace":
                    return ParseNamespace();

                case "export":
                    modifiers.Push(text);
                    return true;

                case "import":
                    return ParseImport();

                case "class":
                case "interface":
                    return ParseType();
            }

            return true;
        }

        private bool Parse()
        {
            switch (type)
            {
                case TokenType.Identifier:
                    if (!ParseIdentifier())
                        return false;

                    break;

                case TokenType.Char:
                    if (!ParseChar())
                        return false;
                    break;
            }

            return true;
        }

        private bool ParseChar()
        {
            string s;
            switch (text)
            {
                case "}":
                    if (braceStack.Count == 0 ||
                        !braceStack.Peek().StartsWith("{"))
                    {
                        return false;
                    }

                    s = braceStack.Pop();
                    if (s == "{namespace")
                    {
                        if (namespaceStack.Count <= 1)
                            return false;

                        namespaceStack.Pop();
                    }
                    else if (s == "{class")
                    {
                        if (typeStack.Count == 0)
                            return false;

                        var type = typeStack.Pop();
                        ReportType(type);
                    }

                    modifiers.Clear();

                    return true;

                case ")":
                    if (braceStack.Count == 0 ||
                        !braceStack.Peek().StartsWith("("))
                    {
                        return false;
                    }

                    s = braceStack.Pop();
                    return true;

                case "]":
                    if (braceStack.Count == 0 ||
                        !braceStack.Peek().StartsWith("("))
                    {
                        return false;
                    }

                    s = braceStack.Pop();
                    return true;

                case "{":
                    braceStack.Push("{");
                    modifiers.Clear();
                    return true;

                case "(":
                    braceStack.Push("(");
                    return true;

                case "[":
                    braceStack.Push("(");
                    return true;
            }

            return true;
        }

        public class TypeInfo
        {
            public NamespaceInfo Namespace;
            public bool IsInterface;
            public string Name;
            public string Extends;
            public string Implements;
            public List<string> Modifiers;

            public override string ToString()
            {
                return (Modifiers.Count > 0 ?
                    (String.Join(" ", Modifiers) + " ") : "") +
                    (IsInterface ? "interface " : "class ") + 
                    (Namespace.Name.Length > 0 ? (Namespace.Name + ".") : "") + 
                    Name +
                    (!Extends.IsEmptyOrNull() ? (" extends " + String.Join(", ", Extends)) : "") +
                    (!Implements.IsEmptyOrNull() ? (" implements " + String.Join(", ", Implements)) : "");
            }
        }

        public class NamespaceInfo
        {
            public string Name;
            public Dictionary<string, string> Imports;
        }
    }
}