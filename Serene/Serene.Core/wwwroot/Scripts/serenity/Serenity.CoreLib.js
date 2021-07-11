(function (exports, jquery) {
    'use strict';

    /**
     * Tests if any of array elements matches given predicate
     */
    function any(array, predicate) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var x = array_1[_i];
            if (predicate(x))
                return true;
        }
        return false;
    }
    /**
     * Counts number of array elements that matches a given predicate
     */
    function count(array, predicate) {
        var count = 0;
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var x = array_2[_i];
            if (predicate(x))
                count++;
        }
        return count;
    }
    /**
     * Gets first element in an array that matches given predicate.
     * Throws an error if no match is found.
     */
    function first(array, predicate) {
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var x = array_3[_i];
            if (predicate(x))
                return x;
        }
        throw new Error("first:No element satisfies the condition.!");
    }
    /**
     * Gets index of first element in an array that matches given predicate
     */
    function indexOf(array, predicate) {
        for (var i = 0; i < array.length; i++)
            if (predicate(array[i]))
                return i;
        return -1;
    }
    /**
     * Inserts an item to the array at specified index
     */
    function insert(obj, index, item) {
        if (obj.insert)
            obj.insert(index, item);
        else if (Object.prototype.toString.call(obj) === '[object Array]')
            obj.splice(index, 0, item);
        else
            throw new Error("Object does not support insert!");
    }
    /**
     * Determines if the object is an array
     */
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    /**
    * Gets first element in an array that matches given predicate.
    * Throws an error if no matches is found, or there are multiple matches.
    */
    function single(array, predicate) {
        var match;
        var found = false;
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var x = array_4[_i];
            if (predicate(x)) {
                if (found)
                    throw new Error("single:sequence contains more than one element.");
                found = true;
                match = x;
            }
        }
        if (!found)
            throw new Error("single:No element satisfies the condition.");
        return match;
    }
    /**
     * Maps an array into a dictionary with keys determined by specified getKey() callback,
     * and values that are arrays containing elements for a particular key.
     */
    function toGrouping(items, getKey) {
        var lookup = {};
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var x = items_1[_i];
            var key = getKey(x) || "";
            var d = lookup[key];
            if (!d) {
                d = lookup[key] = [];
            }
            d.push(x);
        }
        return lookup;
    }
    /**
     * Groups an array with keys determined by specified getKey() callback.
     * Resulting object contains group objects in order and a dictionary to access by key.
     */
    function groupBy(items, getKey) {
        var _a;
        var result = {
            byKey: Object.create(null),
            inOrder: []
        };
        for (var index = 0; index < items.length; index++) {
            var item = items[index];
            var key = (_a = getKey(item)) !== null && _a !== void 0 ? _a : "";
            var group = result.byKey[key];
            if (group === undefined) {
                group = {
                    order: result.inOrder.length,
                    key: key,
                    items: [item],
                    start: index
                };
                result.byKey[key] = group;
                result.inOrder.push(group);
            }
            else {
                group.items.push(item);
            }
        }
        return result;
    }
    /**
     * Gets first element in an array that matches given predicate.
     * Returns null if no match is found.
     */
    function tryFirst(array, predicate) {
        for (var _i = 0, array_5 = array; _i < array_5.length; _i++) {
            var x = array_5[_i];
            if (predicate(x))
                return x;
        }
    }

    function endsWith(s, suffix) {
        if (String.prototype.endsWith)
            return s.endsWith(suffix);
        if (suffix == null)
            return false;
        if (!suffix.length)
            return true;
        if (suffix.length > s.length)
            return false;
        return (s.substr(s.length - suffix.length) == suffix);
    }
    function isEmptyOrNull(s) {
        return s == null || s.length === 0;
    }
    function isTrimmedEmpty(s) {
        return trimToNull(s) == null;
    }
    function padLeft(s, len, ch) {
        if (ch === void 0) { ch = ' '; }
        if (s.padStart)
            return s.padStart(len, ch);
        s = s.toString();
        while (s.length < len)
            s = ch + s;
        return s;
    }
    function startsWith(s, prefix) {
        if (String.prototype.startsWith)
            return s.startsWith(prefix);
        if (prefix == null)
            return false;
        if (!prefix.length)
            return true;
        if (prefix.length > s.length)
            return false;
        return (s.substr(0, prefix.length) === prefix);
    }
    function toSingleLine(str) {
        return replaceAll(replaceAll(trimToEmpty(str), '\r\n', ' '), '\n', ' ').trim();
    }
    var trimEnd = function (s) {
        return s.replace(/\s*$/, '');
    };
    var trimStart = function (s) {
        return s.replace(/^\s*/, '');
    };
    function trim(s) {
        if (s == null)
            return '';
        return s.replace(new RegExp('^\\s+|\\s+$', 'g'), '');
    }
    function trimToEmpty(s) {
        if (s == null || s.length === 0)
            return '';
        return trim(s);
    }
    function trimToNull(s) {
        s = trim(s);
        if (s.length === 0)
            return null;
        return s;
    }
    function replaceAll(s, f, r) {
        s = s || '';
        return s.split(f).join(r);
    }
    function zeroPad(n, digits) {
        var s = n.toString();
        while (s.length < digits)
            s = "0" + s;
        return s;
    }

    function text(key) {
        var t = LT.$table[key];
        if (t == null) {
            t = key || '';
        }
        return t;
    }
    function dbText(prefix) {
        return function (key) {
            return text("Db." + prefix + "." + key);
        };
    }
    function prefixedText(prefix) {
        return function (text, key) {
            if (text != null && !startsWith(text, '`')) {
                var local = tryGetText(text);
                if (local != null) {
                    return local;
                }
            }
            if (text != null && startsWith(text, '`')) {
                text = text.substr(1);
            }
            if (!isEmptyOrNull(prefix)) {
                var textKey = typeof (key) == "function" ? key(prefix) : (prefix + key);
                var localText = tryGetText(textKey);
                if (localText != null) {
                    return localText;
                }
            }
            return text;
        };
    }
    function tryGetText(key) {
        return LT.$table[key];
    }
    function dbTryText(prefix) {
        return function (key) {
            return text("Db." + prefix + "." + key);
        };
    }
    function proxyTexts(o, p, t) {
        if (typeof window != 'undefined' && window['Proxy']) {
            return new window['Proxy'](o, {
                get: function (x, y) {
                    var tv = t[y];
                    if (tv == null)
                        return;
                    if (typeof tv == 'number')
                        return text(p + y);
                    else {
                        var z = o[y];
                        if (z != null)
                            return z;
                        o[y] = z = proxyTexts({}, p + y + '.', tv);
                        return z;
                    }
                },
                ownKeys: function (x) { return Object.keys(t); }
            });
        }
        else {
            for (var _i = 0, _a = Object.keys(t); _i < _a.length; _i++) {
                var k = _a[_i];
                if (typeof t[k] == 'number')
                    Object.defineProperty(o, k, {
                        get: function () { return text(p + k); }
                    });
                else
                    o[k] = proxyTexts({}, p + k + '.', t[k]);
            }
            return o;
        }
    }
    var LT = /** @class */ (function () {
        function LT(key) {
            this.key = key;
        }
        LT.add = function (obj, pre) {
            if (!obj) {
                return;
            }
            pre = pre || '';
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var k = _a[_i];
                var actual = pre + k;
                var o = obj[k];
                if (typeof (o) === 'object') {
                    LT.add(o, actual + '.');
                }
                else {
                    LT.$table[actual] = o;
                }
            }
        };
        LT.prototype.get = function () {
            var t = LT.$table[this.key];
            if (t == null) {
                t = this.key || '';
            }
            return t;
        };
        LT.prototype.toString = function () {
            var t = LT.$table[this.key];
            if (t == null) {
                t = this.key || '';
            }
            return t;
        };
        LT.$table = {};
        LT.empty = new LT('');
        LT.initializeTextClass = function (type, prefix) {
            var $t1 = Object.keys(type).slice();
            for (var $t2 = 0; $t2 < $t1.length; $t2++) {
                var member = $t1[$t2];
                var value = type[member];
                if (value instanceof LT) {
                    var lt = value;
                    var key = prefix + member;
                    LT.$table[key] = lt.key;
                    type[member] = new LT(key);
                }
            }
        };
        LT.getDefault = function (key, defaultText) {
            var t = LT.$table[key];
            if (t == null) {
                t = defaultText;
                if (t == null) {
                    t = key || '';
                }
            }
            return t;
        };
        return LT;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    exports.__assign = function() {
        exports.__assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return exports.__assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function coalesce(a, b) {
        return a != null ? a : b;
    }
    function isValue(a) {
        return a != null;
    }
    var today = function () {
        var d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    function extend(a, b) {
        for (var key in b)
            if (Object.prototype.hasOwnProperty.call(b, key))
                a[key] = b[key];
        return a;
    }
    function deepClone(a, a2, a3) {
        // for backward compatibility
        if (a2 != null || a3 != null) {
            return extend(extend(deepClone(a || {}), deepClone(a2 || {})), deepClone(a3 || {}));
        }
        if (!a)
            return a;
        var v;
        var b = Array.isArray(a) ? [] : {};
        for (var k in a) {
            v = a[k];
            b[k] = (typeof v === "object") ? deepClone(v) : v;
        }
        return b;
    }
    // @ts-ignore check for global
    var globalObj = typeof (global) !== "undefined" ? global : (typeof (window) !== "undefined" ? window : (typeof (self) !== "undefined" ? self : null));
    var types = {};
    function getNested(from, name) {
        var a = name.split('.');
        for (var i = 0; i < a.length; i++) {
            from = from[a[i]];
            if (from == null)
                return null;
        }
        return from;
    }
    function getType(name, target) {
        var type;
        if (target == null) {
            type = types[name];
            if (type != null || globalObj == null || name === "Object")
                return type;
            target = globalObj;
        }
        type = getNested(target, name);
        if (typeof type !== 'function')
            return null;
        return type;
    }
    function getTypeFullName(type) {
        return type.__typeName || type.name ||
            (type.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || 'Object';
    }
    function getTypeName(type) {
        var fullName = getTypeFullName(type);
        var bIndex = fullName.indexOf('[');
        var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
        return nsIndex > 0 ? fullName.substr(nsIndex + 1) : fullName;
    }
    function getInstanceType(instance) {
        if (instance == null)
            throw new NullReferenceException('Cannot get type of null');
        // Have to catch as constructor cannot be looked up on native COM objects
        try {
            return instance.constructor;
        }
        catch (ex) {
            return Object;
        }
    }
    function isAssignableFrom(target, type) {
        if (target === type || type.prototype instanceof target)
            return true;
        if (typeof target.__isAssignableFrom === 'function')
            return target.__isAssignableFrom(type);
        return false;
    }
    function isInstanceOfType(instance, type) {
        if (instance == null)
            return false;
        if (typeof type.__isInstanceOfType === 'function')
            return type.__isInstanceOfType(instance);
        return isAssignableFrom(type, getInstanceType(instance));
    }
    function safeCast(instance, type) {
        return isInstanceOfType(instance, type) ? instance : null;
    }
    function cast(instance, type) {
        if (instance == null)
            return instance;
        else if (isInstanceOfType(instance, type))
            return instance;
        throw new InvalidCastException('Cannot cast object to type ' + getTypeFullName(type));
    }
    function getBaseType(type) {
        if (type === Object ||
            !type.prototype ||
            type.__interface === true) {
            return null;
        }
        else if (Object.getPrototypeOf) {
            return Object.getPrototypeOf(type.prototype).constructor;
        }
        else {
            var p = type.prototype;
            if (Object.prototype.hasOwnProperty.call(p, 'constructor')) {
                try {
                    var ownValue = p.constructor;
                    delete p.constructor;
                    return p.constructor;
                }
                finally {
                    p.constructor = ownValue;
                }
            }
            return p.constructor;
        }
    }
    function getAttributes(type, attrType, inherit) {
        var _a;
        var result = [];
        if (inherit) {
            var b = getBaseType(type);
            if (b) {
                var a = getAttributes(b, attrType, true);
                for (var i = 0; i < a.length; i++) {
                    var t = getInstanceType(a[i]);
                    result.push(a[i]);
                }
            }
        }
        var attr = (_a = type.__metadata) === null || _a === void 0 ? void 0 : _a.attr;
        if (attr != null) {
            for (var i = 0; i < attr.length; i++) {
                var a = attr[i];
                if (attrType == null || isInstanceOfType(a, attrType)) {
                    var t = getInstanceType(a);
                    for (var j = result.length - 1; j >= 0; j--) {
                        if (isInstanceOfType(result[j], t))
                            result.splice(j, 1);
                    }
                    result.push(a);
                }
            }
        }
        return result;
    }
    function getMembers(type, memberTypes) {
        var _a;
        var result = [];
        var b = getBaseType(type);
        if (b)
            result = getMembers(b, memberTypes & ~1);
        var members = (_a = type.__metadata) === null || _a === void 0 ? void 0 : _a.members;
        if (members != null) {
            for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
                var m = members_1[_i];
                if (memberTypes & m.type)
                    result.push(m);
            }
        }
        return result;
    }
    function addTypeMember(type, member) {
        var name = member.name;
        var md = ensureMetadata(type);
        md.members = md.members || [];
        var existing;
        for (var _i = 0, _a = md.members; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.name == name) {
                existing = m;
                break;
            }
        }
        if (existing) {
            if (member.type != null)
                existing.type = member.type;
            if (member.attr != null)
                existing.attr = merge(existing.attr, member.attr);
            if (member.getter != null)
                existing.getter = member.getter;
            if (member.setter != null)
                existing.setter = member.setter;
            return existing;
        }
        else {
            md.members.push(member);
            return member;
        }
    }
    function getTypes(from) {
        var result = [];
        if (!from) {
            for (var t in types) {
                if (Object.prototype.hasOwnProperty.call(types, t))
                    result.push(types[t]);
            }
        }
        else {
            var traverse = function (s, n) {
                for (var c in s) {
                    if (Object.prototype.hasOwnProperty.call(s, c))
                        traverse(s[c], c);
                }
                if (typeof (s) === 'function' &&
                    n.charAt(0).toUpperCase() === n.charAt(0) &&
                    n.charAt(0).toLowerCase() !== n.charAt(0))
                    result.push(s);
            };
            traverse(from, '');
        }
        return result;
    }
    function clearKeys(d) {
        for (var n in d) {
            if (Object.prototype.hasOwnProperty.call(d, n))
                delete d[n];
        }
    }
    function delegateCombine(delegate1, delegate2) {
        if (!delegate1) {
            if (!delegate2._targets) {
                return delegate2;
            }
            return delegate2;
        }
        if (!delegate2) {
            if (!delegate1._targets) {
                return delegate1;
            }
            return delegate1;
        }
        var targets1 = delegate1._targets ? delegate1._targets : [null, delegate1];
        var targets2 = delegate2._targets ? delegate2._targets : [null, delegate2];
        return _mkdel(targets1.concat(targets2));
    }
    var Enum;
    (function (Enum) {
        Enum.toString = function (enumType, value) {
            var _a;
            var values = enumType;
            if (value === 0 || !((_a = enumType.__metadata) === null || _a === void 0 ? void 0 : _a.enumFlags)) {
                for (var i in values) {
                    if (values[i] === value) {
                        return i;
                    }
                }
                return value == null ? "" : value.toString();
            }
            else {
                var parts = [];
                for (var i in values) {
                    if (values[i] & value) {
                        parts.push(i);
                    }
                    else
                        parts.push(value == null ? "" : value.toString());
                }
                return parts.join(' | ');
            }
        };
        Enum.getValues = function (enumType) {
            var parts = [];
            var values = enumType;
            for (var i in values) {
                if (Object.prototype.hasOwnProperty.call(values, i) &&
                    typeof values[i] === "number")
                    parts.push(values[i]);
            }
            return parts;
        };
    })(Enum || (Enum = {}));
    function delegateContains(targets, object, method) {
        for (var i = 0; i < targets.length; i += 2) {
            if (targets[i] === object && targets[i + 1] === method) {
                return true;
            }
        }
        return false;
    }
    var _mkdel = function (targets) {
        var delegate = function () {
            if (targets.length === 2) {
                return targets[1].apply(targets[0], arguments);
            }
            else {
                var clone = targets.slice();
                for (var i = 0; i < clone.length; i += 2) {
                    if (delegateContains(targets, clone[i], clone[i + 1])) {
                        clone[i + 1].apply(clone[i], arguments);
                    }
                }
                return null;
            }
        };
        delegate._targets = targets;
        return delegate;
    };
    var delegateRemove = function (delegate1, delegate2) {
        if (!delegate1 || (delegate1 === delegate2)) {
            return null;
        }
        if (!delegate2) {
            return delegate1;
        }
        var targets = delegate1._targets;
        var object = null;
        var method;
        if (delegate2._targets) {
            object = delegate2._targets[0];
            method = delegate2._targets[1];
        }
        else {
            method = delegate2;
        }
        for (var i = 0; i < targets.length; i += 2) {
            if ((targets[i] === object) && (targets[i + 1] === method)) {
                if (targets.length === 2) {
                    return null;
                }
                var t = targets.slice();
                t.splice(i, 2);
                return _mkdel(t);
            }
        }
        return delegate1;
    };
    var isEnum = function (type) {
        return typeof type !== "function" &&
            type.__interface === null;
    };
    function initFormType(typ, nameWidgetPairs) {
        for (var i = 0; i < nameWidgetPairs.length - 1; i += 2) {
            (function (name, widget) {
                Object.defineProperty(typ.prototype, name, {
                    get: function () {
                        return this.w(name, widget);
                    },
                    enumerable: true,
                    configurable: true
                });
            })(nameWidgetPairs[i], nameWidgetPairs[i + 1]);
        }
    }
    function prop(type, name, getter, setter) {
        getter = getter || "get_" + name;
        setter = setter || "set_" + name;
        Object.defineProperty(type.prototype, name, {
            get: function () {
                return this[getter]();
            },
            set: function (value) {
                return this[setter](value);
            },
            configurable: true,
            enumerable: true
        });
    }
    function ensureMetadata(target) {
        if (!Object.hasOwnProperty.call(target, '__metadata')) {
            Object.defineProperty(target, '__metadata', {
                get: function () { return Object.prototype.hasOwnProperty.call(this, '__metadata$') ? this.__metadata$ : void 0; },
                set: function (v) { this.__metadata$ = v; }
            });
        }
        if (!target.__metadata) {
            target.__metadata = Object.create(null);
        }
        return target.__metadata;
    }
    function distinct(arr) {
        return arr.filter(function (item, pos) { return arr.indexOf(item) === pos; });
    }
    function merge(arr1, arr2) {
        if (!arr1 || !arr2)
            return (arr1 || arr2 || []).slice();
        return distinct(arr1.concat(arr2));
    }
    function interfaceIsAssignableFrom(from) {
        return from != null && from.__interfaces != null && from.__interfaces.indexOf(this) >= 0;
    }
    function registerType(type, name, intf) {
        if (name && name.length) {
            setTypeName(type, name);
            types[name] = type;
        }
        else if (type.__typeName && type.__typeName.length)
            types[type.__typeName] = type;
        if (intf != null && intf.length)
            type.__interfaces = merge(type.__interfaces, intf);
    }
    function registerClass(type, name, intf) {
        registerType(type, name, intf);
        type.__interface = false;
    }
    function registerEnum(type, name) {
        registerType(type, name, undefined);
        type.__interface = null; // mark as enum
    }
    function registerInterface(type, name, intf) {
        registerType(type, name, intf);
        type.__interface = true;
        type.__isAssignableFrom = interfaceIsAssignableFrom;
    }
    function addAttribute(type, attr) {
        var md = ensureMetadata(type);
        md.attr = md.attr || [];
        md.attr.push(attr);
    }
    function setTypeName(target, value) {
        if (!Object.hasOwnProperty.call(target, '__typeName')) {
            Object.defineProperty(target, '__typeName', {
                get: function () { return Object.prototype.hasOwnProperty.call(this, '__typeName$') ? this.__typeName$ : void 0; },
                set: function (v) { this.__typeName$ = v; }
            });
        }
        target.__typeName = value;
    }
    var ISlickFormatter = /** @class */ (function () {
        function ISlickFormatter() {
        }
        return ISlickFormatter;
    }());
    registerInterface(ISlickFormatter, 'Serenity.ISlickFormatter');
    function initializeTypes(root, pre, limit) {
        if (!root)
            return;
        for (var _i = 0, _a = Object.keys(root); _i < _a.length; _i++) {
            var k = _a[_i];
            if (k.charAt(0) < 'A' || k.charAt(0) > 'Z')
                continue;
            if (k.indexOf('$') >= 0)
                continue;
            if (k === "prototype")
                continue;
            if (!Object.prototype.hasOwnProperty.call(root, k))
                continue;
            var obj = root[k];
            if ($.isArray(obj) ||
                root instanceof Date)
                continue;
            var t = typeof (obj);
            if (t === "string" || t === "number")
                continue;
            if (!obj.__typeName &&
                ((typeof obj === "function" && obj.nodeType !== "number") ||
                    (obj.__interface !== undefined))) {
                if (!obj.__interfaces &&
                    obj.prototype &&
                    obj.prototype.format &&
                    k.substr(-9) === "Formatter") {
                    if (obj.__interface === undefined)
                        obj.__interface = false;
                    obj.__interfaces = [ISlickFormatter];
                }
                if (obj.__interface === undefined) {
                    var baseType = getBaseType(obj);
                    if (baseType && baseType.__interface === false) {
                        obj.__interface = false;
                    }
                }
                if (obj.__interface !== undefined) {
                    setTypeName(obj, pre + k);
                    types[pre + k] = obj;
                }
            }
            if (limit > 0)
                initializeTypes(obj, pre + k + ".", limit - 1);
        }
    }
    var Exception = /** @class */ (function (_super) {
        __extends(Exception, _super);
        function Exception(message) {
            var _this = _super.call(this, message) || this;
            _this.name = "Exception";
            return _this;
        }
        return Exception;
    }(Error));
    var NullReferenceException = /** @class */ (function (_super) {
        __extends(NullReferenceException, _super);
        function NullReferenceException(message) {
            var _this = _super.call(this, message || 'Object is null.') || this;
            _this.name = "NullReferenceException";
            return _this;
        }
        return NullReferenceException;
    }(Exception));
    var ArgumentNullException = /** @class */ (function (_super) {
        __extends(ArgumentNullException, _super);
        function ArgumentNullException(paramName, message) {
            var _this = _super.call(this, (message || 'Value cannot be null.') + '\nParameter name: ' + paramName) || this;
            _this.name = "ArgumentNullException";
            return _this;
        }
        return ArgumentNullException;
    }(Exception));
    var ArgumentOutOfRangeException = /** @class */ (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(paramName, message) {
            var _this = _super.call(this, (message !== null && message !== void 0 ? message : 'Value is out of range.') +
                (paramName ? ('\nParameter name: ' + paramName) : "")) || this;
            _this.name = "ArgumentNullException";
            return _this;
        }
        return ArgumentOutOfRangeException;
    }(Exception));
    var InvalidCastException = /** @class */ (function (_super) {
        __extends(InvalidCastException, _super);
        function InvalidCastException(message) {
            var _this = _super.call(this, message) || this;
            _this.name = "InvalidCastException";
            return _this;
        }
        return InvalidCastException;
    }(Exception));

    var defaultNotifyOptions = {
        timeOut: 3000,
        showDuration: 250,
        hideDuration: 500,
        extendedTimeOut: 500,
        positionClass: 'position-toast toast-top-full-width'
    };
    function getToastrOptions(options) {
        options = extend(extend({}, defaultNotifyOptions), options);
        positionToastContainer(true, options);
        return options;
    }
    function notifyWarning(message, title, options) {
        toastr.warning(message, title, getToastrOptions(options));
    }
    function notifySuccess(message, title, options) {
        toastr.success(message, title, getToastrOptions(options));
    }
    function notifyInfo(message, title, options) {
        toastr.info(message, title, getToastrOptions(options));
    }
    function notifyError(message, title, options) {
        toastr.error(message, title, getToastrOptions(options));
    }
    function positionToastContainer(create, options) {
        if (typeof toastr === 'undefined') {
            return;
        }
        var container = toastr.getContainer(options, create);
        if (!container.length || !container.hasClass('position-toast'))
            return;
        var dialog = $(window.document.body).children('.ui-dialog:visible, .modal.in, .modal.show').last();
        if (dialog.length > 0) {
            var position = dialog.position();
            container.addClass('positioned-toast');
            container.css({ position: 'absolute', top: position.top + 28 + 'px', left: position.left + 6 + 'px', width: dialog.width() - 12 + 'px' });
        }
        else {
            if (container.hasClass('positioned-toast')) {
                container.removeClass('positioned-toast');
                container.css({ position: '', top: '', left: '', width: '' });
            }
        }
    }

    var Config = {
        /**
         * This is the root path of your application. If your application resides under http://localhost/mysite/,
         * your root path is "mysite/". This variable is automatically initialized by reading from a <link> element
         * with ID "ApplicationPath" from current page, which is usually located in your _LayoutHead.cshtml file
         */
        applicationPath: '/',
        /**
         * Email validation by default only allows ASCII characters. Set this to true if you want to allow unicode.
         */
        emailAllowOnlyAscii: true,
        /**
         * Set this to true, to enable responsive dialogs by default, without having to add Decorators.responsive()"
         * on dialog classes manually. It's false by default for backward compatibility.
         */
        responsiveDialogs: false,
        /**
         * Set this to true, to prefer bootstrap dialogs over jQuery UI dialogs by default for message dialogs
         */
        bootstrapMessages: false,
        /**
         * This is the list of root namespaces that may be searched for types. For example, if you specify an editor type
         * of "MyEditor", first a class with name "MyEditor" will be searched, if not found, search will be followed by
         * "Serenity.MyEditor" and "MyApp.MyEditor" if you added "MyApp" to the list of root namespaces.
         *
         * You should usually add your application root namespace to this list in ScriptInitialization.ts file.
         */
        rootNamespaces: ['Serenity'],
        /**
         * This is an optional method for handling when user is not logged in. If a users session is expired
         * and when a NotAuthorized response is received from a service call, Serenity will call this handler, so
         * you may intercept it and notify user about this situation and ask if she wants to login again...
         */
        notLoggedInHandler: null
    };
    if (typeof document !== 'undefined') {
        var pathLink = document.querySelector('link#ApplicationPath');
        if (pathLink != null) {
            Config.applicationPath = pathLink.getAttribute('href');
        }
    }

    function addOption(select, key, text) {
        $('<option/>').val(key).text(text).appendTo(select);
    }
    function addEmptyOption(select) {
        addOption(select, '', text("Controls.SelectEditor.EmptyItemText"));
    }
    function clearOptions(select) {
        select.html('');
    }
    function findElementWithRelativeId(element, relativeId) {
        var elementId = element.attr('id');
        if (isEmptyOrNull(elementId)) {
            return $('#' + relativeId);
        }
        var result = $('#' + elementId + relativeId);
        if (result.length > 0) {
            return result;
        }
        result = $('#' + elementId + '_' + relativeId);
        if (result.length > 0) {
            return result;
        }
        while (true) {
            var idx = elementId.lastIndexOf('_');
            if (idx <= 0) {
                return $('#' + relativeId);
            }
            elementId = elementId.substr(0, idx);
            result = $('#' + elementId + '_' + relativeId);
            if (result.length > 0) {
                return result;
            }
        }
    }
    function attrEncoder(a) {
        switch (a) {
            case '&': return '&amp;';
            case '>': return '&gt;';
            case '<': return '&lt;';
            case '\'': return '&apos;';
            case '\"': return '&quot;';
        }
        return a;
    }
    var attrRegex = /[><&'"]/g;
    /**
     * Html attribute encodes a string (encodes quotes in addition to &, > and <)
     * @param s String to be HTML attribute encoded
     */
    function attrEncode(s) {
        var text = (s == null ? '' : s.toString());
        if (attrRegex.test(text)) {
            return text.replace(attrRegex, attrEncoder);
        }
        return text;
    }
    function htmlEncoder(a) {
        switch (a) {
            case '&': return '&amp;';
            case '>': return '&gt;';
            case '<': return '&lt;';
        }
        return a;
    }
    /**
     * Html encodes a string
     * @param s String to be HTML encoded
     */
    function htmlEncode(s) {
        var text = (s == null ? '' : s.toString());
        if ((new RegExp('[><&]', 'g')).test(text)) {
            return text.replace(new RegExp('[><&]', 'g'), htmlEncoder);
        }
        return text;
    }
    function jsRender(markup, data) {
        if (!markup || markup.indexOf('{{') < 0) {
            return markup;
        }
        if (!$.templates || !$.views) {
            throw new Exception('Please make sure that jsrender.js is included in the page!');
        }
        data = data || {};
        var template = $.templates(markup);
        $.views.converters({
            text: text
        }, template);
        return template.render(data);
    }
    function log(m) {
        if (typeof console !== "undefined" && console.log)
            console.log(m);
    }
    function newBodyDiv() {
        return $('<div/>').appendTo(document.body);
    }
    function outerHtml(element) {
        return $('<i/>').append(element.eq(0).clone()).html();
    }

    // if both jQuery UI and bootstrap button exists, prefer jQuery UI button as UI dialog needs them
    if (typeof $ !== "undefined" && $.fn && $.fn.button && $.ui && $.ui.button && $.fn.button.noConflict) {
        $.fn.btn = $.fn.button.noConflict();
    }
    function toIconClass(icon) {
        if (!icon)
            return null;
        if (startsWith(icon, 'fa-'))
            return 'fa ' + icon;
        if (startsWith(icon, 'glyphicon-'))
            return 'glyphicon ' + icon;
        return icon;
    }
    function uiDialogMessage(options, message, dialogClass) {
        var opt = extend({
            modal: true,
            width: '40%',
            maxWidth: 450,
            minWidth: 180,
            resizable: false,
            open: function () {
                if (options.onOpen)
                    options.onOpen.call(this);
            },
            close: function () {
                $(this).dialog('destroy');
                if (options.onClose)
                    options.onClose.call(this, options.result);
            }
        }, options);
        opt.dialogClass = 's-MessageDialog' + (dialogClass ? (' ' + dialogClass) : '');
        if (options.buttons) {
            opt.buttons = options.buttons.map(function (x) {
                var btn = dialogButtonToUI(x);
                btn.click = function (e) {
                    options.result = x.result;
                    $(this).dialog('close');
                    x.click && x.click.call(this, e);
                };
                return btn;
            });
        }
        return $('<div>' + message + '</div>').dialog(opt);
    }
    var _isBS3;
    function isBS3() {
        if (_isBS3 != null)
            return _isBS3;
        // @ts-ignore
        return (_isBS3 = !!($.fn.modal && $.fn.modal.Constructor && $.fn.modal.Constructor.VERSION && ($.fn.modal.Constructor.VERSION + "").charAt(0) == '3'));
    }
    var defaultTxt = {
        AlertTitle: 'Alert',
        InformationTitle: 'Information',
        WarningTitle: 'Warning',
        ConfirmationTitle: 'Confirm',
        OkButton: 'OK',
        YesButton: 'Yes',
        NoButton: 'No',
        CancelButton: 'Cancel',
        CloseButton: 'Close'
    };
    function txt(k) {
        var _a;
        return (_a = tryGetText("Dialogs." + k)) !== null && _a !== void 0 ? _a : defaultTxt[k];
    }
    function bsModalMarkup(title, body, modalClass) {
        var closeButton = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"" + txt('CloseButton') + "\">" +
            "<span aria-hidden=\"true\">&times;</span></button>";
        return ("<div class=\"modal " + modalClass + "\" tabindex=\"-1\" role=\"dialog\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            " + (isBS3() ? closeButton : "") + "<h5 class=\"modal-title\">" + title + "</h5>" + (isBS3() ? "" : closeButton) + "\n        </div>\n        <div class=\"modal-body\">" + body + "</div>\n        <div class=\"modal-footer\"></div>\n    </div>\n</div>\n</div>");
    }
    function dialogButtonToBS(x) {
        var text = x.htmlEncode == null || x.htmlEncode ? htmlEncode(x.text) : x.text;
        var iconClass = toIconClass(x.icon);
        if (iconClass != null)
            text = '<i class="' + iconClass + "><i>" + (text ? (" " + text) : "");
        return "<button class=\"btn " + (x.cssClass ? x.cssClass : '') + "\"" + (x.hint ? (' title="' + attrEncode(x.hint) + '"') : '') + ">" + text + "</button>";
    }
    function dialogButtonToUI(x) {
        var text = x.htmlEncode == null || x.htmlEncode ? htmlEncode(x.text) : x.text;
        var iconClass = toIconClass(x.icon);
        if (iconClass != null)
            text = '<i class="' + iconClass + "><i> ";
        return {
            text: text,
            attr: !x.cssClass ? undefined : {
                "class": x.cssClass
            },
            click: x.click
        };
    }
    function bsModalMessage(options, message, modalClass) {
        var markup = bsModalMarkup(options.title, message, "s-MessageModal" + (modalClass ? (" " + modalClass) : ""));
        var div = $(markup).eq(0).appendTo(document.body);
        if (options.onOpen)
            div.one('shown.bs.modal', options.onOpen);
        if (options.onClose)
            div.one('hidden.bs.modal', function (e) { return options.onClose(options.result); });
        var footer = div.find('.modal-footer');
        function createButton(x) {
            var _this = this;
            return $(dialogButtonToBS(x))
                .appendTo(footer)
                .click(function (e) {
                options.result = x.result;
                div.modal('hide');
                x.click && x.click.call(_this, e);
            });
        }
        if (options.buttons)
            for (var _i = 0, _a = options.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                createButton(button);
            }
        div.modal({
            backdrop: false,
            show: true
        });
    }
    var _useBrowserDialogs;
    function useBrowserDialogs() {
        if (_useBrowserDialogs == null) {
            _useBrowserDialogs = typeof $ === 'undefined' || ((!$.ui || !$.ui.dialog) && (!$.fn || !$.fn.modal));
        }
        return _useBrowserDialogs;
    }
    function useBSModal(options) {
        return !!((!$.ui || !$.ui.dialog) || Config.bootstrapMessages || (options && options.bootstrap));
    }
    function messageHtml(message, options) {
        var encode = options == null || options.htmlEncode == null || options.htmlEncode;
        if (encode)
            message = htmlEncode(message);
        var preWrap = options == null || (options.preWrap == null && encode) || options.preWrap;
        return '<div class="message"' + (preWrap ? ' style="white-space: pre-wrap">' : '>') + message + '</div>';
    }
    function alert$1(message, options) {
        var _a, _b;
        if (useBrowserDialogs()) {
            window.alert(message);
            return;
        }
        var useBS = useBSModal(options);
        options = extend({
            htmlEncode: true,
            okButton: txt('OkButton'),
            title: txt('AlertTitle')
        }, options);
        if (options.buttons == null) {
            options.buttons = [];
            if (options.okButton == null || options.okButton) {
                options.buttons.push({
                    text: typeof options.okButton == "boolean" ? txt('OkButton') : options.okButton,
                    cssClass: useBS ? 'btn-default' : undefined,
                    result: 'ok'
                });
            }
        }
        message = messageHtml(message, options);
        if (useBS)
            bsModalMessage(options, message, (_a = options.modalClass) !== null && _a !== void 0 ? _a : "s-AlertModal");
        else
            uiDialogMessage(options, message, (_b = options.dialogClass) !== null && _b !== void 0 ? _b : "s-AlertDialog");
    }
    function confirm(message, onYes, options) {
        var _a, _b;
        if (useBrowserDialogs()) {
            if (window.confirm(message))
                onYes && onYes();
            return;
        }
        var useBS = useBSModal(options);
        options = extend({
            htmlEncode: true,
            yesButton: txt('YesButton'),
            noButton: txt('NoButton'),
            title: txt('ConfirmationTitle')
        }, options);
        if (options.buttons == null) {
            options.buttons = [];
            if (options.yesButton == null || options.yesButton) {
                options.buttons.push({
                    text: typeof options.yesButton == "boolean" ? txt('YesButton') : options.yesButton,
                    cssClass: useBS ? 'btn-primary' : undefined,
                    result: 'yes',
                    click: onYes
                });
            }
            if (options.noButton == null || options.noButton) {
                options.buttons.push({
                    text: typeof options.noButton == "boolean" ? txt('NoButton') : options.noButton,
                    cssClass: useBS ? 'btn-default' : undefined,
                    result: 'no',
                    click: options.onNo
                });
            }
            if (options.cancelButton) {
                options.buttons.push({
                    text: typeof options.cancelButton == "boolean" ? txt('CancelButton') : options.cancelButton,
                    cssClass: useBS ? 'btn-default' : undefined,
                    result: 'cancel',
                    click: options.onCancel
                });
            }
        }
        message = messageHtml(message, options);
        if (useBS)
            bsModalMessage(options, message, (_a = options.modalClass) !== null && _a !== void 0 ? _a : "s-ConfirmModal");
        else
            uiDialogMessage(options, message, (_b = options.dialogClass) !== null && _b !== void 0 ? _b : "s-ConfirmDialog");
    }
    function iframeDialog(options) {
        if (useBrowserDialogs()) {
            window.alert(options.html);
            return;
        }
        if (useBSModal(options)) {
            bsModalMessage({
                title: txt('AlertTitle'),
                modalClass: 'modal-lg',
                onOpen: function () {
                    doc = ($(this).find('iframe').css({
                        border: 'none',
                        width: '100%',
                        height: '100%'
                    })[0]).contentDocument;
                    doc.open();
                    doc.write(settings.html);
                    doc.close();
                }
            }, '<div style="overflow: hidden"><iframe></iframe></div>', 's-IFrameModal');
            return;
        }
        var doc;
        var e = $('<div style="overflow: hidden"><iframe></iframe></div>');
        var settings = extend({
            autoOpen: true,
            modal: true,
            width: '60%',
            height: '400',
            title: txt('AlertTitle'),
            open: function () {
                doc = (e.find('iframe').css({
                    border: 'none',
                    width: '100%',
                    height: '100%'
                })[0]).contentDocument;
                doc.open();
                doc.write(settings.html);
                doc.close();
            },
            close: function () {
                doc.open();
                doc.write('');
                doc.close();
                e.dialog('destroy').html('');
            }
        }, options);
        e.dialog(settings);
    }
    function information(message, onOk, options) {
        if (useBrowserDialogs()) {
            window.alert(message);
            onOk && onOk();
            return;
        }
        confirm(message, onOk, extend({
            title: txt("InformationTitle"),
            dialogClass: "s-InformationDialog",
            modalClass: "s-InformationModal",
            yesButton: txt("OkButton"),
            noButton: false,
        }, options));
    }
    function warning(message, options) {
        alert$1(message, extend({
            title: txt("WarningTitle"),
            dialogClass: "s-WarningDialog",
            modalClass: "s-WarningModal"
        }, options));
    }
    function closePanel(element, e) {
        if (!element.hasClass('s-Panel') || element.hasClass('hidden'))
            return;
        var query = $.Event(e);
        query.type = 'panelbeforeclose';
        query.target = element[0];
        element.trigger(query);
        if (query.isDefaultPrevented())
            return;
        element.addClass('hidden');
        var uniqueName = element.data('paneluniquename') || new Date().getTime();
        var klass = 'panel-hidden-' + uniqueName;
        $('.' + klass).removeClass(klass).removeClass('panel-hidden');
        $(window).triggerHandler('resize');
        $('.require-layout:visible').triggerHandler('layout');
        var e = $.Event(e);
        e.type = 'panelclose';
        e.target = element[0];
        element.trigger(e);
    }

    var ErrorHandling;
    (function (ErrorHandling) {
        function showServiceError(error) {
            var msg;
            if (error == null) {
                msg = '??ERROR??';
            }
            else {
                msg = error.Message;
                if (msg == null) {
                    msg = error.Code;
                }
            }
            alert$1(msg);
        }
        ErrorHandling.showServiceError = showServiceError;
        function runtimeErrorHandler(message, filename, lineno, colno, error) {
            try {
                var host = (window.location.host || "").toLowerCase();
                if (host.indexOf("localhost") < 0 &&
                    host.indexOf("127.0.0.1") < 0)
                    return;
                if (!window['toastr'])
                    return;
                var errorInfo = JSON.stringify(error || {});
                message =
                    '<p></p><p>Message: ' + htmlEncode(message) +
                        '</p><p>File: ' + htmlEncode(filename) +
                        ', Line: ' + lineno + ', Column: ' + colno +
                        (errorInfo != "{}" ? '</p><p>Error: ' : "") + '</p>';
                window.setTimeout(function () {
                    try {
                        notifyError(message, "SCRIPT ERROR! See browser console (F12) for details.", {
                            escapeHtml: false,
                            timeOut: 15000
                        });
                    }
                    catch (_a) {
                    }
                });
            }
            catch (_a) {
            }
        }
        ErrorHandling.runtimeErrorHandler = runtimeErrorHandler;
    })(ErrorHandling || (ErrorHandling = {}));

    var blockUICount = 0;
    function blockUIWithCheck(opt) {
        if (blockUICount > 0) {
            blockUICount++;
            return;
        }
        if ($.blockUI) {
            $.blockUI(opt);
        }
        else {
            $('<div class="blockUI blockOverlay" style="z-index: 2000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0; cursor: wait; position: fixed;"></div>')
                .appendTo(document.body);
        }
        blockUICount++;
    }
    /**
     * Uses jQuery BlockUI plugin to block access to whole page (default) or
     * a part of it, by using a transparent overlay covering the whole area.
     * @param options Parameters for the BlockUI plugin
     * @remarks If options are not specified, this function blocks
     * whole page with a transparent overlay. Default z-order of the overlay
     * div is 2000, so a higher z-order shouldn't be used in page.
     */
    function blockUI(options) {
        options = extend({
            baseZ: 2000,
            message: '',
            overlayCSS: {
                opacity: '0.0',
                zIndex: 2000,
                cursor: 'wait'
            }, fadeOut: 0
        }, options);
        if (options.useTimeout) {
            window.setTimeout(function () {
                blockUIWithCheck(options);
            }, 0);
        }
        else {
            blockUIWithCheck(options);
        }
    }
    function blockUndo() {
        if (blockUICount > 1) {
            blockUICount--;
            return;
        }
        blockUICount--;
        if ($.unblockUI)
            $.unblockUI({ fadeOut: 0 });
        else
            $(document.body).children('.blockUI.blockOverlay').remove();
    }

    function getCookie(name) {
        if ($.cookie)
            return $.cookie(name);
        name += '=';
        for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
            if (!ca[i].indexOf(name))
                return ca[i].replace(name, '');
    }
    typeof $ != 'undefined' && $.ajaxSetup && $.ajaxSetup({
        beforeSend: function (xhr) {
            var token = getCookie('CSRF-TOKEN');
            if (token)
                xhr.setRequestHeader('X-CSRF-TOKEN', token);
        }
    });
    function serviceCall(options) {
        var handleError = function (response) {
            if (Config.notLoggedInHandler != null &&
                response &&
                response.Error &&
                response.Error.Code == 'NotLoggedIn' &&
                Config.notLoggedInHandler(options, response)) {
                return;
            }
            if (options.onError != null) {
                options.onError(response);
                return;
            }
            ErrorHandling.showServiceError(response.Error);
        };
        var url = options.service;
        if (url && url.length && url.charAt(0) != '~' && url.charAt(0) != '/' && url.indexOf('://') < 0)
            url = resolveUrl("~/services/") + url;
        options = extend({
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST',
            cache: false,
            blockUI: true,
            url: url,
            data: JSON.stringify(options.request),
            success: function (data, textStatus, request) {
                try {
                    if (!data.Error && options.onSuccess) {
                        options.onSuccess(data);
                    }
                }
                finally {
                    if (options.blockUI) {
                        blockUndo();
                    }
                    options.onCleanup && options.onCleanup();
                }
            },
            error: function (xhr, status, ev) {
                try {
                    if (xhr.status === 403) {
                        var l = null;
                        try {
                            l = xhr.getResponseHeader('Location');
                        }
                        catch ($t1) {
                            l = null;
                        }
                        if (l) {
                            window.top.location.href = l;
                            return;
                        }
                    }
                    if ((xhr.getResponseHeader('content-type') || '')
                        .toLowerCase().indexOf('application/json') >= 0) {
                        var json = $.parseJSON(xhr.responseText);
                        if (json && json.Error) {
                            handleError(json);
                            return;
                        }
                    }
                    var html = xhr.responseText;
                    if (!html) {
                        if (!xhr.status) {
                            if (xhr.statusText != "abort")
                                alert$1("An unknown AJAX connection error occurred! Check browser console for details.");
                        }
                        else if (xhr.status == 500)
                            alert$1("HTTP 500: Connection refused! Check browser console for details.");
                        else
                            alert$1("HTTP " + xhr.status + ' error! Check browser console for details.');
                    }
                    else
                        iframeDialog({ html: html });
                }
                finally {
                    if (options.blockUI) {
                        blockUndo();
                    }
                    options.onCleanup && options.onCleanup();
                }
            }
        }, options);
        if (options.blockUI) {
            blockUI(null);
        }
        return $.ajax(options);
    }
    function serviceRequest(service, request, onSuccess, options) {
        return serviceCall(extend({
            service: service,
            request: request,
            onSuccess: onSuccess
        }, options));
    }
    function setEquality(request, field, value) {
        if (request.EqualityFilter == null) {
            request.EqualityFilter = {};
        }
        request.EqualityFilter[field] = value;
    }
    function parseQueryString(s) {
        var qs;
        if (s === undefined)
            qs = location.search.substring(1, location.search.length);
        else
            qs = s || '';
        var result = {};
        var parts = qs.split('&');
        for (var i = 0; i < parts.length; i++) {
            var pair = parts[i].split('=');
            var name_1 = decodeURIComponent(pair[0]);
            result[name_1] = (pair.length >= 2 ? decodeURIComponent(pair[1]) : name_1);
        }
        return result;
    }
    function postToService(options) {
        var form = $('<form/>')
            .attr('method', 'POST')
            .attr('action', options.url ? (resolveUrl(options.url)) : resolveUrl('~/services/' + options.service))
            .appendTo(document.body);
        if (options.target)
            form.attr('target', options.target);
        var div = $('<div/>').appendTo(form);
        $('<input/>').attr('type', 'hidden').attr('name', 'request')
            .val($['toJSON'](options.request))
            .appendTo(div);
        var csrfToken = getCookie('CSRF-TOKEN');
        if (csrfToken) {
            $('<input/>').attr('type', 'hidden').attr('name', '__RequestVerificationToken')
                .appendTo(div).val(csrfToken);
        }
        $('<input/>').attr('type', 'submit')
            .appendTo(div);
        form.submit();
        window.setTimeout(function () { form.remove(); }, 0);
    }
    function postToUrl(options) {
        var form = $('<form/>')
            .attr('method', 'POST')
            .attr('action', resolveUrl(options.url))
            .appendTo(document.body);
        if (options.target)
            form.attr('target', options.target);
        var div = $('<div/>').appendTo(form);
        if (options.params != null) {
            for (var k in options.params) {
                $('<input/>').attr('type', 'hidden').attr('name', k)
                    .val(options.params[k])
                    .appendTo(div);
            }
        }
        var csrfToken = getCookie('CSRF-TOKEN');
        if (csrfToken) {
            $('<input/>').attr('type', 'hidden').attr('name', '__RequestVerificationToken')
                .appendTo(div).val(csrfToken);
        }
        $('<input/>').attr('type', 'submit')
            .appendTo(div);
        form.submit();
        window.setTimeout(function () { form.remove(); }, 0);
    }
    function resolveUrl(url) {
        if (url && url.substr(0, 2) === '~/') {
            return Config.applicationPath + url.substr(2);
        }
        return url;
    }

    var Invariant = {
        decimalSeparator: '.',
        groupSeparator: ',',
        decimalDigits: 2,
        negativeSign: '-',
        positiveSign: '+',
        percentSymbol: '%',
        currencySymbol: '$',
        dateSeparator: '/',
        dateOrder: 'mdy',
        dateFormat: 'MM/dd/yyyy',
        dateTimeFormat: 'MM/dd/yyyy HH:mm:ss',
        amDesignator: 'AM',
        pmDesignator: 'PM',
        timeSeparator: ':',
        firstDayOfWeek: 0,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        minimizedDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
        shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
        stringCompare: function (a, b) { return a < b ? -1 : (a > b ? 1 : 0); }
    };
    function compareStringFactory(order) {
        var o = {};
        for (var z = 0; z < order.length; z++) {
            o[order.charAt(z)] = z + 1;
        }
        return function (a, b) {
            a = a || "";
            b = b || "";
            if (a == b)
                return 0;
            for (var i = 0, _len = Math.min(a.length, b.length); i < _len; i++) {
                var x = a.charAt(i), y = b.charAt(i);
                if (x === y)
                    continue;
                var ix = o[x], iy = o[y];
                if (ix != null && iy != null)
                    return ix < iy ? -1 : 1;
                var c = x.localeCompare(y);
                if (c == 0)
                    continue;
                return c;
            }
            return a.localeCompare(b);
        };
    }
    var Culture = {
        decimalSeparator: '.',
        groupSeparator: ',',
        dateSeparator: '/',
        dateOrder: 'dmy',
        dateFormat: 'dd/MM/yyyy',
        dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
        stringCompare: compareStringFactory("AaBbCcÇçFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpRrSsŞşTtUuÜüVvYyZz")
    };
    (function () {
        var k;
        for (k in Invariant)
            if (Culture[k] === undefined && Object.prototype.hasOwnProperty.call(Invariant, k))
                Culture[k] = Invariant[k];
        if (typeof $ != "undefined" && (k = trimToNull($('script#ScriptCulture').html())) != null) {
            var sc = $.parseJSON(k);
            if (sc.DecimalSeparator != null)
                Culture.decimalSeparator = sc.DecimalSeparator;
            if (sc.GroupSeparator != null && sc.GroupSeparator != Culture.decimalSeparator)
                Culture.groupSeparator = sc.GroupSeparator;
            else if (Culture.groupSeparator == Culture.decimalSeparator)
                Culture.groupSeparator = Culture.decimalSeparator == '.' ? ',' : '.';
            delete sc.groupSeparator;
            delete sc.decimal;
            for (k in sc) {
                if (Culture[k] === undefined && Object.prototype.hasOwnProperty.call(sc, k))
                    Culture[k.charAt(0).toLowerCase() + k.substr(1)] = sc[k];
            }
        }
    })();
    // for backwards compatibility
    function turkishLocaleToUpper(a) {
        if (!a)
            return a;
        return a.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
    }
    // for backwards compatibility
    var turkishLocaleCompare = Culture.stringCompare;
    function insertGroupSeperator(num, dec, grp, neg) {
        var decPart = null;
        var decIndex = num.indexOf(dec);
        if (decIndex > 0) {
            decPart = num.substr(decIndex);
            num = num.substr(0, decIndex);
        }
        var negative = startsWith(num, neg);
        if (negative) {
            num = num.substr(1);
        }
        var groupSize = 3;
        if (num.length < groupSize) {
            return (negative ? neg : '') + (decPart ? num + decPart : num);
        }
        var index = num.length;
        var s = '';
        var done = false;
        while (!done) {
            var length = groupSize;
            var startIndex = index - length;
            if (startIndex < 0) {
                groupSize += startIndex;
                length += startIndex;
                startIndex = 0;
                done = true;
            }
            if (!length)
                break;
            var part = num.substr(startIndex, length);
            if (s.length)
                s = part + grp + s;
            else
                s = part;
            index -= length;
        }
        if (negative)
            s = '-' + s;
        return decPart ? s + decPart : s;
    }
    var _formatRE = /\{\{|\}\}|\{[^\}\{]+\}/g;
    function _formatString(format, l, values, from) {
        return format.replace(_formatRE, function (m) {
            if (m === '{{' || m === '}}')
                return m.charAt(0);
            var index = parseInt(m.substr(1), 10);
            var value = values[index + from];
            if (value == null) {
                return '';
            }
            var type = getInstanceType(value);
            if (type == Number || type == Date) {
                var formatSpec = null;
                var formatIndex = m.indexOf(':');
                if (formatIndex > 0) {
                    formatSpec = m.substring(formatIndex + 1, m.length - 1);
                }
                return _formatObject(value, formatSpec, l);
            }
            else {
                return value.toString();
            }
        });
    }
    function format(format) {
        var prm = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            prm[_i - 1] = arguments[_i];
        }
        return _formatString(format, Culture, arguments, 1);
    }
    function localeFormat(format, l) {
        var prm = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            prm[_i - 2] = arguments[_i];
        }
        return _formatString(format, l, arguments, 2);
    }
    function _formatObject(obj, format, fmt) {
        if (typeof (obj) === 'number')
            return formatNumber(obj, format, fmt);
        else if (Object.prototype.toString.call(obj) === '[object Date]')
            return formatDate(obj, format, fmt);
        else
            return obj.format(format);
    }
    var round = function (n, d, rounding) {
        var m = Math.pow(10, d || 0);
        n *= m;
        var sign = (n > 0) | -(n < 0);
        if (n % 1 === 0.5 * sign) {
            var f = Math.floor(n);
            return (f + (rounding ? (sign > 0) : (f % 2 * sign))) / m;
        }
        return Math.round(n) / m;
    };
    var trunc = function (n) { return n != null ? (n > 0 ? Math.floor(n) : Math.ceil(n)) : null; };
    function formatNumber(num, format, decOrLoc, grp) {
        var _a, _b, _c, _d, _e, _f;
        if (num == null)
            return "";
        var fmt = typeof decOrLoc !== "string" ? (decOrLoc !== null && decOrLoc !== void 0 ? decOrLoc : Culture) : {
            decimalSeparator: decOrLoc,
            groupSeparator: grp !== null && grp !== void 0 ? grp : (decOrLoc == "," ? "." : ",")
        };
        if (isNaN(num)) {
            return (_a = fmt.nanSymbol) !== null && _a !== void 0 ? _a : Culture.nanSymbol;
        }
        if (format == null || (format.length == 0) || (format == 'i')) {
            return num.toString();
        }
        var dec = (_b = fmt.decimalSeparator) !== null && _b !== void 0 ? _b : Culture.decimalSeparator;
        grp = (_c = grp !== null && grp !== void 0 ? grp : fmt.groupSeparator) !== null && _c !== void 0 ? _c : Culture.groupSeparator;
        var neg = (_d = fmt.negativeSign) !== null && _d !== void 0 ? _d : Culture.negativeSign;
        var s = '';
        var precision = -1;
        if (format.length > 1) {
            precision = parseInt(format.substr(1), 10);
        }
        var fs = format.charAt(0);
        switch (fs) {
            case 'd':
            case 'D':
                s = parseInt(Math.abs(num)).toString();
                if (precision != -1)
                    s = padLeft(s, precision, '0');
                if (num < 0)
                    s = neg + s;
                break;
            case 'x':
            case 'X':
                s = parseInt(Math.abs(num)).toString(16);
                if (fs == 'X')
                    s = s.toUpperCase();
                if (precision != -1)
                    s = padLeft(s, precision, '0');
                break;
            case 'e':
            case 'E':
                if (precision == -1)
                    s = num.toExponential();
                else
                    s = num.toExponential(precision);
                if (fs == 'E')
                    s = s.toUpperCase();
                break;
            case 'f':
            case 'F':
            case 'n':
            case 'N':
                if (precision == -1) {
                    precision = (_e = fmt.decimalDigits) !== null && _e !== void 0 ? _e : Culture.decimalDigits;
                }
                s = num.toFixed(precision).toString();
                if (precision && (dec != '.')) {
                    var index = s.indexOf('.');
                    s = s.substr(0, index) + dec + s.substr(index + 1);
                }
                if ((fs == 'n') || (fs == 'N')) {
                    s = insertGroupSeperator(s, dec, grp, neg);
                }
                break;
            case 'c':
            case 'C':
            case 'p':
            case 'P':
                if (precision == -1) {
                    precision = (_f = fmt.decimalDigits) !== null && _f !== void 0 ? _f : Culture.decimalDigits;
                }
                if (fs === 'p' || fs == 'P')
                    num *= 100;
                s = Math.abs(num).toFixed(precision).toString();
                if (precision && (dec != '.')) {
                    var index = s.indexOf('.');
                    s = s.substr(0, index) + dec + s.substr(index + 1);
                }
                s = insertGroupSeperator(s, dec, grp, neg);
                s = localeFormat("0", fmt, s);
                break;
            default:
                var prefix = '';
                var mid = '';
                var suffix = '';
                var endPrefix = false;
                var inQuote = false;
                for (var i = 0; i < format.length; i++) {
                    var c = format.charAt(i);
                    if (c == "'") {
                        inQuote = !inQuote;
                        continue;
                    }
                    else if (!inQuote) {
                        if (c == '\\') {
                            var c = (format.charAt(i + 1) || '');
                            i++;
                        }
                        else if (c == '#' || c == ',' || c == '.' || c == '0') {
                            endPrefix = true;
                            mid += c;
                            continue;
                        }
                    }
                    endPrefix ? (suffix += c) : (prefix += c);
                }
                format = mid;
                var r = "";
                if (format.indexOf(".") > -1) {
                    var dp = dec;
                    var df = format.substring(format.lastIndexOf(".") + 1);
                    num = roundNumber(num, df.length);
                    var dv = num % 1;
                    var ds = new String(dv.toFixed(df.length));
                    ds = ds.substring(ds.lastIndexOf(".") + 1);
                    for (var i_1 = 0; i_1 < df.length; i_1++) {
                        if (df.charAt(i_1) == '#' && ds.charAt(i_1) != '0') {
                            dp += ds.charAt(i_1);
                            continue;
                        }
                        else if (df.charAt(i_1) == '#' && ds.charAt(i_1) == '0') {
                            var notParsed = ds.substring(i_1);
                            if (notParsed.match('[1-9]')) {
                                dp += ds.charAt(i_1);
                                continue;
                            }
                            else
                                break;
                        }
                        else if (df.charAt(i_1) == "0")
                            dp += ds.charAt(i_1);
                        else
                            dp += df.charAt(i_1);
                    }
                    r += dp;
                }
                else
                    num = Math.round(num);
                var ones = Math.floor(num);
                if (num < 0)
                    ones = Math.ceil(num);
                var of = "";
                if (format.indexOf(".") == -1)
                    of = format;
                else
                    of = format.substring(0, format.indexOf("."));
                var op = "";
                if (!(ones == 0 && of.substr(of.length - 1) == '#')) {
                    // find how many digits are in the group
                    var oneText = new String(Math.abs(ones));
                    var gl = 9999;
                    if (of.lastIndexOf(",") != -1)
                        gl = of.length - of.lastIndexOf(",") - 1;
                    var gc = 0;
                    for (var i_2 = oneText.length - 1; i_2 > -1; i_2--) {
                        op = oneText.charAt(i_2) + op;
                        gc++;
                        if (gc == gl && i_2 != 0) {
                            op = grp + op;
                            gc = 0;
                        }
                    }
                    // account for any pre-data padding
                    if (of.length > op.length) {
                        var padStart = of.indexOf('0');
                        if (padStart != -1) {
                            var padLen = of.length - padStart;
                            // pad to left with 0's or group char
                            var pos = of.length - op.length - 1;
                            while (op.length < padLen) {
                                var pc = of.charAt(pos);
                                // replace with real group char if needed
                                if (pc == ',')
                                    pc = grp;
                                op = pc + op;
                                pos--;
                            }
                        }
                    }
                }
                if (!op && of.indexOf('0', of.length - 1) !== -1)
                    op = '0';
                r = op + r;
                if (num < 0)
                    r = neg + r;
                if (r.lastIndexOf(dec) == r.length - 1) {
                    r = r.substring(0, r.length - 1);
                }
                return prefix + r + suffix;
        }
        return s;
    }
    function parseInteger(s) {
        s = trim(s.toString());
        var ts = Culture.groupSeparator;
        if (s && s.length && s.indexOf(ts) > 0) {
            s = s.replace(new RegExp("(\\b\\d{1,3})\\" + ts + "(?=\\d{3}(\\D|$))", "g"), '$1');
        }
        if (!(/^[-\+]?\d+$/.test(s)))
            return NaN;
        return parseInt(s, 10);
    }
    function parseDecimal(s) {
        if (s == null)
            return null;
        s = trim(s.toString());
        if (s.length == 0)
            return null;
        var ts = Culture.groupSeparator;
        if (s && s.length && s.indexOf(ts) > 0) {
            s = s.replace(new RegExp("(\\b\\d{1,3})\\" + ts + "(?=\\d{3}(\\D|$))", "g"), '$1');
        }
        if (!(new RegExp("^\\s*([-\\+])?(\\d*)\\" + Culture.decimalSeparator + "?(\\d*)\\s*$").test(s)))
            return NaN;
        return parseFloat(s.toString().replace(Culture.decimalSeparator, '.'));
    }
    function roundNumber(n, dec) {
        var power = Math.pow(10, dec || 0);
        var value = (Math.round(n * power) / power).toString();
        // ensure the decimal places are there
        if (dec > 0) {
            var dp = value.indexOf(".");
            if (dp == -1) {
                value += '.';
                dp = 0;
            }
            else {
                dp = value.length - (dp + 1);
            }
            while (dp < dec) {
                value += '0';
                dp++;
            }
        }
        return parseFloat(value);
    }
    function toId(id) {
        if (id == null)
            return null;
        if (typeof id == "number")
            return id;
        id = $.trim(id);
        if (id == null || !id.length)
            return null;
        if (id.length >= 15 || !(/^-?\d+$/.test(id)))
            return id;
        var v = parseInt(id, 10);
        if (isNaN(v))
            return id;
        return v;
    }
    var _dateFormatRE = /'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|\//g;
    function formatDate(d, format, locale) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (!d)
            return '';
        var date;
        if (typeof d == "string") {
            var res = parseDate(d, locale == null ? null : locale.dateOrder);
            if (!res)
                return d;
            date = res;
        }
        else
            date = d;
        if (format == 'i')
            return date.toString();
        if (format == 'id')
            return date.toDateString();
        if (format == 'it')
            return date.toTimeString();
        if (locale == null)
            locale = Culture;
        if (format == null || format == "d")
            format = (_a = locale.dateFormat) !== null && _a !== void 0 ? _a : Culture.dateFormat;
        else if (format.length == 1) {
            switch (format) {
                case "g":
                    format = ((_b = locale.dateTimeFormat) !== null && _b !== void 0 ? _b : Culture.dateTimeFormat).replace(":ss", "");
                    break;
                case "G":
                    format = ((_c = locale.dateTimeFormat) !== null && _c !== void 0 ? _c : Culture.dateTimeFormat);
                    break;
                case "s":
                    format = "yyyy-MM-ddTHH:mm:ss";
                    break;
                case 'd': format = ((_d = locale.dateFormat) !== null && _d !== void 0 ? _d : Culture.dateFormat);
                case 't':
                    format = (locale.dateTimeFormat && locale.dateFormat) ? locale.dateTimeFormat.replace(locale.dateFormat + " ", "") : "HH:mm";
                    break;
                case 'u':
                case 'U':
                    format = format == 'u' ? 'yyyy-MM-ddTHH:mm:ss.fffZ' : (_e = locale.dateTimeFormat) !== null && _e !== void 0 ? _e : Culture.dateTimeFormat;
                    date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                    break;
            }
        }
        if (format.charAt(0) == '%') {
            format = format.substr(1);
        }
        var re = _dateFormatRE;
        var sb = [];
        re.lastIndex = 0;
        while (true) {
            var index = re.lastIndex;
            var match = re.exec(format);
            sb.push(format.slice(index, match ? match.index : format.length));
            if (!match) {
                break;
            }
            var fs = match[0];
            var part = fs;
            switch (fs) {
                case '/':
                    part = (_f = locale.dateSeparator) !== null && _f !== void 0 ? _f : Culture.dateSeparator;
                    break;
                case 'dddd':
                    part = ((_g = locale.dayNames) !== null && _g !== void 0 ? _g : Culture.dayNames)[date.getDay()];
                    break;
                case 'ddd':
                    part = ((_h = locale.shortDayNames) !== null && _h !== void 0 ? _h : Culture.shortDayNames)[date.getDay()];
                    break;
                case 'dd':
                    part = padLeft(date.getDate().toString(), 2, '0');
                    break;
                case 'd':
                    part = date.getDate();
                    break;
                case 'MMMM':
                    part = ((_j = locale.monthNames) !== null && _j !== void 0 ? _j : Culture.monthNames)[date.getMonth()];
                    break;
                case 'MMM':
                    part = ((_k = locale.shortMonthNames) !== null && _k !== void 0 ? _k : Culture.shortMonthNames)[date.getMonth()];
                    break;
                case 'MM':
                    part = padLeft(date.getMonth() + 1, 2, '0');
                    break;
                case 'M':
                    part = (date.getMonth() + 1);
                    break;
                case 'yyyy':
                    part = padLeft(date.getFullYear(), 4, '0');
                    break;
                case 'yy':
                    part = padLeft(date.getFullYear() % 100, 2, '0');
                    break;
                case 'y':
                    part = date.getFullYear() % 100;
                    break;
                case 'h':
                case 'hh':
                    part = date.getHours() % 12;
                    if (!part) {
                        part = '12';
                    }
                    else if (fs == 'hh') {
                        part = padLeft(part, 2, '0');
                    }
                    break;
                case 'HH':
                    part = padLeft(date.getHours(), 2, '0');
                    break;
                case 'H':
                    part = date.getHours();
                    break;
                case 'mm':
                    part = padLeft(date.getMinutes(), 2, '0');
                    break;
                case 'm':
                    part = date.getMinutes();
                    break;
                case 'ss':
                    part = padLeft(date.getSeconds().toString(), 2, '0');
                    break;
                case 's':
                    part = date.getSeconds();
                    break;
                case 't':
                case 'tt':
                    part = (date.getHours() < 12) ? ((_l = locale.amDesignator) !== null && _l !== void 0 ? _l : Culture.amDesignator) : ((_m = locale.pmDesignator) !== null && _m !== void 0 ? _m : Culture.pmDesignator);
                    if (fs == 't') {
                        part = part.charAt(0);
                    }
                    break;
                case 'fff':
                    part = padLeft(date.getMilliseconds(), 3, '0');
                    break;
                case 'ff':
                    part = padLeft(date.getMilliseconds(), 3).substr(0, 2);
                    break;
                case 'f':
                    part = padLeft(date.getMilliseconds(), 3).charAt(0);
                    break;
                case 'z':
                case 'Z':
                    part = date.getTimezoneOffset() / 60;
                    part = ((part >= 0) ? '-' : '+') + Math.floor(Math.abs(part));
                    break;
                case 'zz':
                case 'zzz':
                    part = date.getTimezoneOffset() / 60;
                    part = ((part >= 0) ? '-' : '+') +
                        Math.floor(padLeft(Math.abs(part), 2, '0'));
                    if (fs == 'zzz') {
                        part += ((_o = locale.timeSeparator) !== null && _o !== void 0 ? _o : Culture.timeSeparator) +
                            Math.abs(padLeft(date.getTimezoneOffset() % 60, 2, '0'));
                    }
                    break;
                default:
                    if (part.charAt(0) == '\'') {
                        part = part.substr(1, part.length - 2).replace(/\\'/g, '\'');
                    }
                    break;
            }
            sb.push(part);
        }
        return sb.join('');
    }
    function formatDayHourAndMin(n) {
        if (n === 0)
            return '0';
        else if (!n)
            return '';
        var days = Math.floor(n / 24 / 60);
        var txt = "";
        if (days > 0) {
            txt += days.toString();
        }
        var mins = zeroPad(Math.floor((n % (24 * 60)) / (60)), 2) + ':' + zeroPad(n % 60, 2);
        if (mins != '00:00') {
            if (days > 0)
                txt += ".";
            txt += mins;
        }
        return txt;
    }
    function formatISODateTimeUTC(d) {
        if (d == null)
            return "";
        var zeropad = function (num) { return ((num < 10) ? '0' : '') + num; };
        var str = d.getUTCFullYear() + "-" +
            zeropad(d.getUTCMonth() + 1) + "-" +
            zeropad(d.getUTCDate()) + "T" +
            zeropad(d.getUTCHours()) + ":" +
            zeropad(d.getUTCMinutes());
        var secs = Number(d.getUTCSeconds() + "." +
            ((d.getUTCMilliseconds() < 100) ? '0' : '') +
            zeropad(d.getUTCMilliseconds()));
        str += ":" + zeropad(secs) + "Z";
        return str;
    }
    var isoRegexp = /(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
    function parseISODateTime(s) {
        if (!s || !s.length)
            return null;
        s = s + "";
        if (typeof (s) != "string" || s.length === 0)
            return null;
        var res = s.match(isoRegexp);
        if (typeof (res) == "undefined" || res === null)
            return null;
        return new Date(s + (s.length == 10 ? "T00:00:00" : ""));
    }
    function parseHourAndMin(value) {
        var v = trim(value);
        if (v.length < 4 || v.length > 5)
            return NaN;
        var h, m;
        if (v.charAt(1) == ':') {
            h = parseInteger(v.substr(0, 1));
            m = parseInteger(v.substr(2, 2));
        }
        else {
            if (v.charAt(2) != ':')
                return NaN;
            h = parseInteger(v.substr(0, 2));
            m = parseInteger(v.substr(3, 2));
        }
        if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59)
            return NaN;
        return h * 60 + m;
    }
    function parseDayHourAndMin(s) {
        var days;
        var v = trim(s);
        if (!v)
            return NaN;
        var p = v.split('.');
        if (p.length == 0 || p.length > 2)
            return NaN;
        if (p.length == 1) {
            days = parseInteger(p[0]);
            if (!isNaN(days))
                return days * 24 * 60;
            return parseHourAndMin(p[0]);
        }
        else {
            days = parseInteger(p[0]);
            var hm = parseHourAndMin(p[1]);
            if (isNaN(days) || isNaN(hm))
                return NaN;
            return days * 24 * 60 + hm;
        }
    }
    function parseDate(s, dateOrder) {
        if (!s || !s.length)
            return null;
        if (s.length >= 10 && s.charAt(4) === '-' && s.charAt(7) === '-' &&
            (s.length === 10 || (s.length > 10 && s.charAt(10) === 'T'))) {
            var res = parseISODateTime(s);
            if (res == null)
                return false;
            return res;
        }
        s = trim(s);
        if (s.indexOf(' ') > 0 && s.indexOf(':') > s.indexOf(' ') + 1) {
            var datePart = parseDate(s.substr(0, s.indexOf(' ')));
            if (!datePart)
                return false;
            return parseISODateTime(formatDate(datePart, 'yyyy-MM-dd') + 'T' + trim(s.substr(s.indexOf(' ' + 1))));
        }
        var dateVal;
        var dArray;
        var d, m, y;
        dArray = splitDateString(s);
        if (!dArray)
            return false;
        if (dArray.length == 3) {
            dateOrder = dateOrder || Culture.dateOrder;
            switch (dateOrder) {
                case "dmy":
                    d = parseInt(dArray[0], 10);
                    m = parseInt(dArray[1], 10) - 1;
                    y = parseInt(dArray[2], 10);
                    break;
                case "ymd":
                    d = parseInt(dArray[2], 10);
                    m = parseInt(dArray[1], 10) - 1;
                    y = parseInt(dArray[0], 10);
                    break;
                case "mdy":
                default:
                    d = parseInt(dArray[1], 10);
                    m = parseInt(dArray[0], 10) - 1;
                    y = parseInt(dArray[2], 10);
                    break;
            }
            if (isNaN(d) || isNaN(m) || isNaN(y) || d < 1 || d > 31 || m < 0 || m > 11 || y > 9999 || y < 0)
                return false;
            if (y < 100) {
                var fullYear = new Date().getFullYear();
                var shortYearCutoff = (fullYear % 100) + 10;
                y += fullYear - fullYear % 100 + (y <= shortYearCutoff ? 0 : -100);
            }
            try {
                dateVal = new Date(y, m, d);
                if (isNaN(dateVal.getFullYear()))
                    return false;
            }
            catch (e) {
                return false;
            }
        }
        else if (dArray.length == 1) {
            try {
                dateVal = new Date(dArray[0]);
                if (isNaN(dateVal.getFullYear()))
                    return false;
            }
            catch (e) {
                return false;
            }
        }
        return dateVal;
    }
    function splitDateString(s) {
        s = trim(s);
        if (!s.length)
            return;
        if (s.indexOf("/") >= 0)
            return s.split("/");
        else if (s.indexOf(".") >= 0)
            return s.split(".");
        else if (s.indexOf("-") >= 0)
            return s.split("-");
        else if (s.indexOf("\\") >= 0)
            return s.split("\\");
        else
            return [s];
    }

    var ScriptData;
    (function (ScriptData) {
        var registered = {};
        var loadedData = {};
        function bindToChange(name, regClass, onChange) {
            $(document.body).bind('scriptdatachange.' + regClass, function (e, s) {
                if (s == name) {
                    onChange();
                }
            });
        }
        ScriptData.bindToChange = bindToChange;
        function triggerChange(name) {
            $(document.body).triggerHandler('scriptdatachange', [name]);
        }
        ScriptData.triggerChange = triggerChange;
        function unbindFromChange(regClass) {
            $(document.body).unbind('scriptdatachange.' + regClass);
        }
        ScriptData.unbindFromChange = unbindFromChange;
        function loadOptions(name, async) {
            return {
                async: async,
                cache: true,
                type: 'GET',
                url: resolveUrl('~/DynJS.axd/') + name + '.js?' + registered[name],
                data: null,
                dataType: 'text',
                converters: {
                    "text script": function (text) {
                        return text;
                    }
                },
                success: function (data, textStatus, jqXHR) {
                    $.globalEval(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    var isLookup = startsWith(name, "Lookup.");
                    if (xhr.status == 403 && isLookup) {
                        notifyError('<p>Access denied while trying to load the lookup: "<b>' +
                            name.substr(7) + '</b>". Please check if current user has required permissions for this lookup.</p> ' +
                            '<p><em>Lookups use the ReadPermission of their row by default. You may override that for the lookup ' +
                            'like [LookupScript("Some.Lookup", Permission = "?")] to grant all ' +
                            'authenticated users to read it (or use "*" for public).</em></p>' +
                            '<p><em>Note that this might be a security risk if the lookup contains sensitive data, ' +
                            'so it could be better to set a separate permission for lookups, like "MyModule:Lookups".</em></p>', null, {
                            timeOut: 10000,
                            escapeHtml: false
                        });
                        return;
                    }
                    notifyError("An error occurred while trying to load " +
                        (isLookup ? ' the lookup: "' + name.substr(7) :
                            ' dynamic script: "' + name) +
                        '"!. Please check the error message displayed in the dialog below for more info.');
                    var html = xhr.responseText;
                    if (!html) {
                        if (!xhr.status)
                            alert$1("An unknown connection error occurred! Check browser console for details.");
                        else if (xhr.status == 500)
                            alert$1("HTTP 500: Connection refused! Check browser console for details.");
                        else
                            alert$1("HTTP " + xhr.status + ' error! Check browser console for details.');
                    }
                    else
                        iframeDialog({ html: html });
                }
            };
        }
        function loadScriptAsync(name) {
            return Promise.resolve().then(function () {
                blockUI(null);
                return Promise.resolve($.ajax(loadOptions(name, true))
                    .always(function () {
                    blockUndo();
                }));
            }, null);
        }
        function loadScriptData(name) {
            if (registered[name] == null) {
                throw new Error(format('Script data {0} is not found in registered script list!', name));
            }
            $.ajax(loadOptions(name, false));
        }
        function loadScriptDataAsync(name) {
            return Promise.resolve().then(function () {
                if (registered[name] == null) {
                    throw new Error(format('Script data {0} is not found in registered script list!', name));
                }
                return loadScriptAsync(name);
            }, null);
        }
        function ensure(name) {
            var data = loadedData[name];
            if (data == null) {
                loadScriptData(name);
            }
            data = loadedData[name];
            if (data == null)
                throw new Error(format("Can't load script data: {0}!", name));
            return data;
        }
        ScriptData.ensure = ensure;
        function ensureAsync(name) {
            return Promise.resolve().then(function () {
                var data = loadedData[name];
                if (data != null) {
                    return Promise.resolve(data);
                }
                return loadScriptDataAsync(name).then(function () {
                    data = loadedData[name];
                    if (data == null) {
                        throw new Error(format("Can't load script data: {0}!", name));
                    }
                    return data;
                }, null);
            }, null);
        }
        ScriptData.ensureAsync = ensureAsync;
        function reload(name) {
            if (registered[name] == null) {
                throw new Error(format('Script data {0} is not found in registered script list!', name));
            }
            registered[name] = (new Date()).getTime().toString();
            loadScriptData(name);
            var data = loadedData[name];
            return data;
        }
        ScriptData.reload = reload;
        function reloadAsync(name) {
            return Promise.resolve().then(function () {
                if (registered[name] == null) {
                    throw new Error(format('Script data {0} is not found in registered script list!', name));
                }
                registered[name] = (new Date()).getTime().toString();
                return loadScriptDataAsync(name).then(function () {
                    return loadedData[name];
                }, null);
            }, null);
        }
        ScriptData.reloadAsync = reloadAsync;
        function canLoad(name) {
            return (loadedData[name] != null || registered[name] != null);
        }
        ScriptData.canLoad = canLoad;
        function setRegisteredScripts(scripts) {
            registered = {};
            var t = new Date().getTime();
            for (var k in scripts) {
                registered[k] = scripts[k] || t;
            }
        }
        ScriptData.setRegisteredScripts = setRegisteredScripts;
        function set(name, value) {
            loadedData[name] = value;
            triggerChange(name);
        }
        ScriptData.set = set;
    })(ScriptData || (ScriptData = {}));
    function getRemoteData(key) {
        return ScriptData.ensure('RemoteData.' + key);
    }
    function getRemoteDataAsync(key) {
        return ScriptData.ensureAsync('RemoteData.' + key);
    }
    function getLookup(key) {
        var name = 'Lookup.' + key;
        if (!ScriptData.canLoad(name)) {
            var message = 'No lookup with key "' + key + '" is registered. Please make sure you have a' +
                ' [LookupScript("' + key + '")] attribute in server side code on top of a row / custom lookup and ' +
                ' its key is exactly the same.';
            notifyError(message);
            throw new Error(message);
        }
        return ScriptData.ensure('Lookup.' + key);
    }
    function getLookupAsync(key) {
        return ScriptData.ensureAsync('Lookup.' + key);
    }
    function reloadLookup(key) {
        ScriptData.reload('Lookup.' + key);
    }
    function reloadLookupAsync(key) {
        return ScriptData.reloadAsync('Lookup.' + key);
    }
    function getColumns(key) {
        return ScriptData.ensure('Columns.' + key);
    }
    function getColumnsAsync(key) {
        return ScriptData.ensureAsync('Columns.' + key);
    }
    function getForm(key) {
        return ScriptData.ensure('Form.' + key);
    }
    function getFormAsync(key) {
        return ScriptData.ensureAsync('Form.' + key);
    }
    function getTemplate(key) {
        return ScriptData.ensure('Template.' + key);
    }
    function getTemplateAsync(key) {
        return ScriptData.ensureAsync('Template.' + key);
    }
    function canLoadScriptData(name) {
        return ScriptData.canLoad(name);
    }

    var Authorization;
    (function (Authorization) {
        function hasPermission(permission) {
            if (permission == null)
                return false;
            if (permission == "*")
                return true;
            if (permission == "" || permission == "?")
                return Authorization.isLoggedIn;
            var ud = Authorization.userDefinition;
            if (ud && ud.IsAdmin)
                return true;
            if (ud && ud.Permissions) {
                var p = ud.Permissions;
                if (p[permission])
                    return true;
                var orParts = permission.split('|');
                for (var _i = 0, orParts_1 = orParts; _i < orParts_1.length; _i++) {
                    var r = orParts_1[_i];
                    if (!r)
                        continue;
                    var andParts = r.split('&');
                    if (!andParts.length)
                        continue;
                    var fail = false;
                    for (var _a = 0, andParts_1 = andParts; _a < andParts_1.length; _a++) {
                        var n = andParts_1[_a];
                        if (!p[n]) {
                            fail = true;
                            break;
                        }
                    }
                    if (!fail)
                        return true;
                }
            }
            return false;
        }
        Authorization.hasPermission = hasPermission;
        function validatePermission(permission) {
            if (!hasPermission(permission)) {
                notifyError(text("Authorization.AccessDenied"));
                throw new Error(text("Authorization.AccessDenied"));
            }
        }
        Authorization.validatePermission = validatePermission;
    })(Authorization || (Authorization = {}));
    Object.defineProperty(Authorization, "userDefinition", {
        get: function () {
            return getRemoteData("UserData");
        }
    });
    Object.defineProperty(Authorization, "isLoggedIn", {
        get: function () {
            var ud = Authorization.userDefinition;
            return ud && !!ud.Username;
        }
    });
    Object.defineProperty(Authorization, "username", {
        get: function () {
            var ud = Authorization.userDefinition;
            if (ud)
                return ud.Username;
            return null;
        }
    });

    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing. The function also has a property 'clear'
     * that is a function which will clear the timer to prevent previously scheduled executions.
     *
     * @source underscore.js
     */
    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        if (null == wait)
            wait = 100;
        function later() {
            var last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        }
        var debounced = function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            var callNow = immediate && !timeout;
            if (!timeout)
                timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
        debounced.clear = function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
        debounced.flush = function () {
            if (timeout) {
                result = func.apply(context, args);
                context = args = null;
                clearTimeout(timeout);
                timeout = null;
            }
        };
        return debounced;
    }

    var LayoutTimer;
    (function (LayoutTimer) {
        var timeout;
        var nextKey = 0;
        var regCount = 0;
        var regs = {};
        function startTimer() {
            if (timeout == null && regCount > 0) {
                timeout = window.setTimeout(onTimeout, 100);
            }
        }
        function clearTimer() {
            if (timeout != null) {
                window.clearTimeout(timeout);
                timeout = null;
            }
        }
        function onTimeout() {
            for (var key in regs) {
                var reg = regs[key];
                try {
                    var el = reg.element();
                    if (!el)
                        continue;
                    var w = el.offsetWidth;
                    var h = el.offsetHeight;
                    try {
                        if ((reg.width && reg.storedWidth !== w) ||
                            (reg.height && reg.storedHeight !== h) ||
                            (!reg.width && !reg.height && (!w !== !reg.storedWidth || !h !== !reg.storedHeight))) {
                            if (w > 0 && h > 0) {
                                try {
                                    reg.handler();
                                }
                                finally {
                                    w = el.offsetWidth;
                                    h = el.offsetHeight;
                                }
                            }
                        }
                    }
                    finally {
                        reg.storedWidth = w;
                        reg.storedHeight = h;
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            clearTimer();
            startTimer();
        }
        function store(key) {
            var reg = regs[key];
            if (!reg)
                return;
            var el = reg.element();
            if (!el)
                return;
            reg.storedWidth = el.offsetWidth;
            reg.storedHeight = el.offsetHeight;
        }
        LayoutTimer.store = store;
        function trigger(key) {
            var reg = regs[key];
            if (!reg)
                return;
            store(key);
            if (reg.storedWidth >= 0 &&
                reg.storedHeight >= 0) {
                reg.handler();
            }
            store(key);
        }
        LayoutTimer.trigger = trigger;
        function onSizeChange(element, handler, width, height) {
            if (handler == null)
                throw "Layout handler can't be null!";
            regs[++nextKey] = {
                element: element,
                handler: handler,
                width: width !== false,
                height: height !== false
            };
            regCount++;
            store(nextKey);
            startTimer();
            return nextKey;
        }
        LayoutTimer.onSizeChange = onSizeChange;
        function onWidthChange(element, handler) {
            return onSizeChange(element, handler, true, false);
        }
        LayoutTimer.onWidthChange = onWidthChange;
        function onHeightChange(element, handler) {
            return onSizeChange(element, handler, false, true);
        }
        LayoutTimer.onHeightChange = onHeightChange;
        function onShown(element, handler) {
            return onSizeChange(element, handler, false, false);
        }
        LayoutTimer.onShown = onShown;
        function off(key) {
            var reg = regs[key];
            if (!reg)
                return 0;
            delete regs[key];
            regCount--;
            if (regCount <= 0)
                clearTimer();
            return 0;
        }
        LayoutTimer.off = off;
    })(LayoutTimer || (LayoutTimer = {}));

    var Lookup = /** @class */ (function () {
        function Lookup(options, items) {
            this.items = [];
            this.itemById = {};
            options = options || {};
            this.textFormatter = options.textFormatter;
            this.idField = options.idField;
            this.parentIdField = options.parentIdField;
            this.textField = options.textField;
            this.textFormatter = options.textFormatter;
            if (items != null)
                this.update(items);
        }
        Lookup.prototype.update = function (value) {
            this.items = [];
            this.itemById = {};
            if (value) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var k = value_1[_i];
                    this.items.push(k);
                }
            }
            var idField = this.idField;
            if (idField) {
                for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
                    var r = _b[_a];
                    var v = r[idField];
                    if (v != null) {
                        this.itemById[v] = r;
                    }
                }
            }
        };
        Lookup.prototype.get_idField = function () {
            return this.idField;
        };
        Lookup.prototype.get_parentIdField = function () {
            return this.parentIdField;
        };
        Lookup.prototype.get_textField = function () {
            return this.textField;
        };
        Lookup.prototype.get_textFormatter = function () {
            return this.textFormatter;
        };
        Lookup.prototype.get_itemById = function () {
            return this.itemById;
        };
        Lookup.prototype.get_items = function () {
            return this.items;
        };
        return Lookup;
    }());

    if (typeof $ !== "undefined" && $.validator && $.validator.methods && $.validator.addMethod) {
        $.validator.addMethod('customValidate', function (value, element) {
            var result = this.optional(element);
            if (element == null || !!result) {
                return result;
            }
            var events = $._data(element, 'events');
            if (!events) {
                return true;
            }
            var handlers = events.customValidate;
            if (handlers == null || handlers.length === 0) {
                return true;
            }
            var el = $(element);
            for (var i = 0; !!(i < handlers.length); i++) {
                if ($.isFunction(handlers[i].handler)) {
                    var message = handlers[i].handler(el);
                    if (message != null) {
                        el.data('customValidationMessage', message);
                        return false;
                    }
                }
            }
            return true;
        }, function (o, e) {
            return $(e).data('customValidationMessage');
        });
        $.validator.addMethod("dateQ", function (value, element) {
            var o = this.optional(element);
            if (o)
                return o;
            var d = parseDate(value);
            if (!d)
                return false;
            var z = new Date(d);
            z.setHours(0, 0, 0, 0);
            return z.getTime() === d.getTime();
        });
        $.validator.addMethod("dateTimeQ", function (value, element) {
            var o = this.optional(element);
            if (o)
                return o;
            var d = parseDate(value);
            return !!d;
        });
        $.validator.addMethod("hourAndMin", function (value, element) {
            return this.optional(element) || !isNaN(parseHourAndMin(value));
        });
        $.validator.addMethod("dayHourAndMin", function (value, element) {
            return this.optional(element) || !isNaN(parseDayHourAndMin(value));
        });
        $.validator.addMethod("decimalQ", function (value, element) {
            return this.optional(element) || !isNaN(parseDecimal(value));
        });
        $.validator.addMethod("integerQ", function (value, element) {
            return this.optional(element) || !isNaN(parseInteger(value));
        });
        var oldEmail_1 = $.validator.methods['email'];
        var emailRegex_1 = null;
        $.validator.addMethod("email", function (value, element) {
            if (Config.emailAllowOnlyAscii)
                return oldEmail_1.call(this, value, element);
            if (emailRegex_1 == null)
                emailRegex_1 = new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|" +
                    "[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|" +
                    "((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|" +
                    "\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])" +
                    "([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)" +
                    "+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$", "i");
            return emailRegex_1.test(value);
        });
        var addMsg = function (m, k) {
            var txt = tryGetText("Validation." + k);
            if (txt)
                $.validator.messages[m] = txt;
            else if (!$.validator.messages[m])
                $.validator.messages[m] = k + "?";
        };
        addMsg("required", "Required");
        addMsg("email", "Email");
        addMsg("minlength", "MinLength");
        addMsg("maxlength", "MaxLength");
        addMsg("digits", "Digits");
        addMsg("range", "Range");
        addMsg("xss", "Xss");
        addMsg("dateQ", "DateInvalid");
        addMsg("decimalQ", "Decimal");
        addMsg("integerQ", "Integer");
        addMsg("url", "Url");
    }
    function setTooltip(el, val) {
        if (isBS3())
            el.attr('data-original-title', val || '').tooltip('fixTitle');
        else
            el.attr('title', val || '').tooltip('_fixTitle');
        return el;
    }
    function getHighlightTarget(el) {
        var hl = el.dataset.vxHighlight;
        if (hl)
            return document.getElementById(hl);
        else if (el.classList.contains("select2-offscreen") && el.id)
            return document.getElementById('s2id_' + el.id);
    }
    function baseValidateOptions() {
        return {
            errorClass: 'error',
            ignore: ':hidden, .no-validate',
            ignoreTitle: true,
            normalizer: function (value) {
                return $.trim(value);
            },
            highlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                }
                else {
                    element.classList.add(errorClass);
                    element.classList.remove(validClass);
                    var hl = getHighlightTarget(element);
                    if (hl && hl.classList) {
                        hl.classList.add(errorClass);
                        hl.classList.remove(validClass);
                    }
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                }
                else {
                    element.classList.remove(errorClass);
                    element.classList.add(validClass);
                    var hl = getHighlightTarget(element);
                    if (hl && hl.classList) {
                        hl.classList.remove(errorClass);
                        hl.classList.add(validClass);
                    }
                }
            },
            showErrors: function () {
                if ($.fn.tooltip) {
                    var i, elements, error, $el, hl;
                    for (i = 0; this.errorList[i]; i++) {
                        error = this.errorList[i];
                        hl = getHighlightTarget(error.element);
                        if (hl != null)
                            $el = $(hl);
                        else
                            $el = $(error.element);
                        if (i != 0)
                            setTooltip($el, '').tooltip('hide');
                        else
                            setTooltip($el, error.message).tooltip('show');
                    }
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        hl = getHighlightTarget(error.element);
                        if (hl != null)
                            $el = $(hl);
                        else
                            $el = $(error.element);
                        setTooltip($el, '').tooltip('hide');
                    }
                }
                $.validator["prototype"].defaultShowErrors.call(this);
            }
        };
    }
    function validateForm(form, opt) {
        return form.validate(extend(baseValidateOptions(), opt));
    }
    function addValidationRule(element, eventClass, rule) {
        if (!element.length)
            return element;
        if (rule == null)
            throw new Exception('rule is null!');
        element.addClass('customValidate').bind('customValidate.' + eventClass, rule);
        return element;
    }
    function removeValidationRule(element, eventClass) {
        element.unbind('customValidate.' + eventClass);
        return element;
    }

    var oldShowLabel;
    function validateShowLabel(element, message) {
        oldShowLabel.call(this, element, message);
        this.errorsFor(element).each(function (i, e) {
            var $e = $(e);
            if ($e.parent('.vx').length) {
                $e.attr('title', $e.text());
                if (message && $e.hasClass('error'))
                    $e.removeClass('checked');
            }
        });
    }
    function jQueryValidationInitialization() {
        var p = $.validator;
        p = p.prototype;
        oldShowLabel = p.showLabel;
        p.showLabel = validateShowLabel;
        p.oldfocusInvalid = p.focusInvalid;
        p.focusInvalid = function () {
            if (this.settings.abortHandler)
                this.settings.abortHandler(this);
            this.oldfocusInvalid.call(this);
        };
        p.oldstopRequest = p.focusInvalid;
        p.stopRequest = function (element, valid) {
            var formSubmitted = this.formSubmitted;
            this.oldfocusInvalid.call(this, [element, valid]);
            if (!valid && this.pendingRequest == 0 && formSubmitted && this.settings.abortHandler) {
                this.settings.abortHandler(this);
            }
        };
        p.resetAll = function () {
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            this.elements().removeClass(this.settings.errorClass);
        };
    }
    function validatorAbortHandler(validator) {
        validator.settings.abortHandler = null;
        validator.settings.submitHandler = function () {
            return false;
        };
    }
    function validateOptions(options) {
        var opt = baseValidateOptions();
        delete opt.showErrors;
        return extend(extend(opt, {
            meta: 'v',
            errorPlacement: function (error, element) {
                var field = null;
                var vx = element.attr('data-vx-id');
                if (vx) {
                    field = $('#' + vx);
                    if (!field.length)
                        field = null;
                    else
                        field = field[0];
                }
                if (field == null) {
                    field = element.parents('div.field');
                    if (field.length) {
                        var inner = $('div.vx', field[0]);
                        if (inner.length)
                            field = inner[0];
                    }
                    else
                        field = element.parent();
                }
                error.appendTo(field);
            },
            submitHandler: function () {
                return false;
            },
            invalidHandler: function (event, validator) {
                notifyError(text("Validation.InvalidFormMessage"));
                $(validator.errorList.map(function (x) { return x.element; }))
                    .closest('.category.collapsed')
                    .children('.category-title')
                    .each(function (i, x) {
                    $(x).click();
                    return true;
                });
                if (validator.errorList.length) {
                    var el = validator.errorList[0].element;
                    if (el) {
                        var bsPane = $(el).closest('.tab-pane');
                        if (!bsPane.hasClass("active") &&
                            bsPane.parent().hasClass('tab-content')) {
                            var bsPaneId = bsPane.attr('id');
                            if (bsPaneId) {
                                $('a[href="#' + bsPaneId + '"]').click();
                            }
                        }
                        if ($.fn.tooltip) {
                            var $el;
                            var hl = getHighlightTarget(el);
                            if (hl)
                                $el = $(hl);
                            else
                                $el = $(el);
                            $.fn.tooltip && $el.tooltip({
                                title: validator.errorList[0].message,
                                trigger: 'manual'
                            }).tooltip('show');
                            window.setTimeout(function () {
                                $el.tooltip(isBS3() ? 'destroy' : 'dispose');
                            }, 1500);
                        }
                    }
                }
            },
            success: function (label) {
                label.addClass('checked');
            }
        }), options);
    }
    if ($.validator)
        jQueryValidationInitialization();
    else
        $(function () {
            $.validator && jQueryValidationInitialization();
        });

    var Router;
    (function (Router) {
        var oldURL;
        var resolving = 0;
        var autoinc = 0;
        var ignoreHash = 0;
        var ignoreTime = 0;
        Router.enabled = true;
        function isEqual(url1, url2) {
            return url1 == url2 || url1 == url2 + '#' || url2 == url1 + '#';
        }
        function navigate(hash, tryBack, silent) {
            if (!Router.enabled || resolving > 0)
                return;
            hash = hash || '';
            hash = hash.replace(/^#/, '');
            hash = (!hash ? "" : '#' + hash);
            var newURL = window.location.href.replace(/#$/, '')
                .replace(/#.*$/, '') + hash;
            if (newURL != window.location.href) {
                if (tryBack && oldURL != null && isEqual(oldURL, newURL)) {
                    if (silent)
                        ignoreChange();
                    oldURL = null;
                    window.history.back();
                    return;
                }
                if (silent)
                    ignoreChange();
                oldURL = window.location.href;
                window.location.hash = hash;
            }
        }
        Router.navigate = navigate;
        function replace(hash, tryBack) {
            navigate(hash, tryBack, true);
        }
        Router.replace = replace;
        function replaceLast(hash, tryBack) {
            if (!Router.enabled)
                return;
            var current = window.location.hash || '';
            if (current.charAt(0) == '#')
                current = current.substr(1, current.length - 1);
            var parts = current.split('/+/');
            if (parts.length > 1) {
                if (hash && hash.length) {
                    parts[parts.length - 1] = hash;
                    hash = parts.join("/+/");
                }
                else {
                    parts.splice(parts.length - 1, 1);
                    hash = parts.join("/+/");
                }
            }
            replace(hash, tryBack);
        }
        Router.replaceLast = replaceLast;
        function visibleDialogs() {
            return $('.ui-dialog-content:visible, .ui-dialog.panel-hidden>.ui-dialog-content, .s-Panel').toArray().sort(function (a, b) {
                return ($(a).data('qrouterorder') || 0) - ($(b).data('qrouterorder') || 0);
            });
        }
        function dialogOpen(owner, element, hash) {
            var route = [];
            var isDialog = owner.hasClass(".ui-dialog-content") || owner.hasClass('.s-Panel');
            var dialog = isDialog ? owner :
                owner.closest('.ui-dialog-content, .s-Panel');
            var value = hash();
            var idPrefix;
            if (dialog.length) {
                var dialogs = visibleDialogs();
                var index = dialogs.indexOf(dialog[0]);
                for (var i = 0; i <= index; i++) {
                    var q = $(dialogs[i]).data("qroute");
                    if (q && q.length)
                        route.push(q);
                }
                if (!isDialog) {
                    idPrefix = dialog.attr("id");
                    if (idPrefix) {
                        idPrefix += "_";
                        var id = owner.attr("id");
                        if (id && startsWith(id, idPrefix))
                            value = id.substr(idPrefix.length) + '@' + value;
                    }
                }
            }
            else {
                var id = owner.attr("id");
                if (id && (!owner.hasClass("route-handler") ||
                    $('.route-handler').first().attr("id") != id))
                    value = id + "@" + value;
            }
            route.push(value);
            element.data("qroute", value);
            replace(route.join("/+/"));
            element.bind("dialogclose.qrouter panelclose.qrouter", function (e) {
                element.data("qroute", null);
                element.unbind(".qrouter");
                var prhash = element.data("qprhash");
                var tryBack = $(e.target).closest('.s-MessageDialog').length > 0 || (e && e.originalEvent &&
                    ((e.originalEvent.type == "keydown" && e.originalEvent.keyCode == 27) ||
                        $(e.originalEvent.target).hasClass("ui-dialog-titlebar-close") ||
                        $(e.originalEvent.target).hasClass("panel-titlebar-close")));
                if (prhash != null)
                    replace(prhash, tryBack);
                else
                    replaceLast('', tryBack);
            });
        }
        function dialog(owner, element, hash) {
            if (!Router.enabled)
                return;
            element.on("dialogopen.qrouter panelopen.qrouter", function (e) {
                dialogOpen(owner, element, hash);
            });
        }
        Router.dialog = dialog;
        function resolve(hash) {
            var _a;
            if (!Router.enabled)
                return;
            resolving++;
            try {
                hash = (_a = hash !== null && hash !== void 0 ? hash : window.location.hash) !== null && _a !== void 0 ? _a : '';
                if (hash.charAt(0) == '#')
                    hash = hash.substr(1, hash.length - 1);
                var dialogs = visibleDialogs();
                var newParts = hash.split("/+/");
                var oldParts = dialogs.map(function (el) { return $(el).data('qroute'); });
                var same = 0;
                while (same < dialogs.length &&
                    same < newParts.length &&
                    oldParts[same] == newParts[same]) {
                    same++;
                }
                for (var i = same; i < dialogs.length; i++) {
                    var d = $(dialogs[i]);
                    if (d.hasClass('ui-dialog-content'))
                        d.dialog('close');
                    else if (d.hasClass('s-Panel'))
                        closePanel(d);
                }
                for (var i = same; i < newParts.length; i++) {
                    var route = newParts[i];
                    var routeParts = route.split('@');
                    var handler;
                    if (routeParts.length == 2) {
                        var dialog = i > 0 ? $(dialogs[i - 1]) : $([]);
                        if (dialog.length) {
                            var idPrefix = dialog.attr("id");
                            if (idPrefix) {
                                handler = $('#' + idPrefix + "_" + routeParts[0]);
                                if (handler.length) {
                                    route = routeParts[1];
                                }
                            }
                        }
                        if (!handler || !handler.length) {
                            handler = $('#' + routeParts[0]);
                            if (handler.length) {
                                route = routeParts[1];
                            }
                        }
                    }
                    if (!handler || !handler.length) {
                        handler = i > 0 ? $(dialogs[i - 1]) :
                            $('.route-handler').first();
                    }
                    handler.triggerHandler("handleroute", {
                        handled: false,
                        route: route,
                        parts: newParts,
                        index: i
                    });
                }
            }
            finally {
                resolving--;
            }
        }
        Router.resolve = resolve;
        function hashChange(e, o) {
            if (ignoreHash > 0) {
                if (new Date().getTime() - ignoreTime > 1000) {
                    ignoreHash = 0;
                }
                else {
                    ignoreHash--;
                    return;
                }
            }
            resolve();
        }
        function ignoreChange() {
            ignoreHash++;
            ignoreTime = new Date().getTime();
        }
        window.addEventListener("hashchange", hashChange, false);
        var routerOrder = 1;
        $(document).on("dialogopen panelopen", ".ui-dialog-content, .s-Panel", function (event, ui) {
            if (!Router.enabled)
                return;
            var dlg = $(event.target);
            dlg.data("qrouterorder", routerOrder++);
            if (dlg.data("qroute"))
                return;
            dlg.data("qprhash", window.location.hash);
            var owner = $(visibleDialogs).not(dlg).last();
            if (!owner.length)
                owner = $('html');
            dialogOpen(owner, dlg, function () {
                return "!" + (++autoinc).toString(36);
            });
        });
    })(Router || (Router = {}));

    var LazyLoadHelper;
    (function (LazyLoadHelper) {
        function executeOnceWhenShown(element, callback) {
            var el = element && element[0];
            if (!el)
                return;
            if (el.offsetWidth > 0 && el.offsetHeight > 0) {
                callback();
                return;
            }
            var timer = LayoutTimer.onShown(function () { return el; }, function () {
                LayoutTimer.off(timer);
                callback();
            });
        }
        LazyLoadHelper.executeOnceWhenShown = executeOnceWhenShown;
        function executeEverytimeWhenShown(element, callback, callNowIfVisible) {
            var el = element && element[0];
            if (!el)
                return;
            if (callNowIfVisible && el.offsetWidth > 0 && el.offsetHeight > 0) {
                callback();
            }
            LayoutTimer.onShown(function () { return el; }, function () {
                callback();
            });
        }
        LazyLoadHelper.executeEverytimeWhenShown = executeEverytimeWhenShown;
    })(LazyLoadHelper || (LazyLoadHelper = {}));

    function autoFullHeight(element) {
        element.css('height', '100%');
        triggerLayoutOnShow(element);
    }
    function initFullHeightGridPage(gridDiv) {
        $('body').addClass('full-height-page');
        gridDiv.addClass('responsive-height');
        var layout = function () {
            var inPageContent = gridDiv.parent().hasClass('page-content') ||
                gridDiv.parent().is('section.content');
            if (inPageContent) {
                gridDiv.css('height', '1px').css('overflow', 'hidden');
            }
            layoutFillHeight(gridDiv);
            if (inPageContent) {
                gridDiv.css('overflow', '');
            }
            gridDiv.triggerHandler('layout');
        };
        if ($('body').hasClass('has-layout-event')) {
            $('body').bind('layout', layout);
        }
        else if (window.Metronic) {
            window.Metronic.addResizeHandler(layout);
        }
        else {
            $(window).resize(layout);
        }
        layout();
        gridDiv.one('remove', function () {
            $(window).off('layout', layout);
            $('body').off('layout', layout);
        });
        // ugly, but to it is to make old pages work without having to add this
        typeof Router != "undefined" && Router.resolve && Router.resolve();
    }
    function layoutFillHeightValue(element) {
        var h = 0;
        element.parent().children().not(element).each(function (i, e) {
            var q = $(e);
            if (q.is(':visible')) {
                h += q.outerHeight(true);
            }
        });
        h = element.parent().height() - h;
        if (element.css('box-sizing') !== 'border-box') {
            h = h - (element.outerHeight(true) - element.height());
        }
        return h;
    }
    function layoutFillHeight(element) {
        var h = layoutFillHeightValue(element);
        var n = Math.round(h) + 'px';
        if (element.css('height') != n) {
            element.css('height', n);
        }
    }
    function setMobileDeviceMode() {
        var isMobile = navigator.userAgent.indexOf('Mobi') >= 0 ||
            (window.matchMedia && window.matchMedia('(max-width: 767px)').matches);
        var body = $(document.body);
        if (body.hasClass('mobile-device')) {
            if (!isMobile) {
                body.removeClass('mobile-device');
            }
        }
        else if (isMobile) {
            body.addClass('mobile-device');
        }
    }
    // @ts-ignore check for global
    var globalObj$1 = typeof (global) !== "undefined" ? global : (typeof (window) !== "undefined" ? window : (typeof (self) !== "undefined" ? self : null));
    setMobileDeviceMode();
    $(function () {
        if (globalObj$1 && Config.rootNamespaces) {
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var ns = _a[_i];
                var obj = getNested(globalObj$1, ns);
                if (obj != null)
                    initializeTypes(obj, ns + ".", 3);
            }
        }
        globalObj$1 && $(globalObj$1).bind('resize', function () {
            setMobileDeviceMode();
        });
    });
    function triggerLayoutOnShow(element) {
        LazyLoadHelper.executeEverytimeWhenShown(element, function () {
            element.triggerHandler('layout');
        }, true);
    }
    function centerDialog(el) {
        if (!el.hasClass("ui-dialog"))
            el = el.closest(".ui-dialog");
        el.position({ at: 'center center', of: window });
        var pos = el.position();
        if (pos.left < 0)
            el.css("left", "0px");
        if (pos.top < 0)
            el.css("top", "0px");
    }

    var indexAll = {
        __proto__: null,
        any: any,
        count: count,
        first: first,
        indexOf: indexOf,
        insert: insert,
        isArray: isArray,
        single: single,
        toGrouping: toGrouping,
        groupBy: groupBy,
        tryFirst: tryFirst,
        get Authorization () { return Authorization; },
        blockUI: blockUI,
        blockUndo: blockUndo,
        Config: Config,
        debounce: debounce,
        isBS3: isBS3,
        bsModalMarkup: bsModalMarkup,
        dialogButtonToBS: dialogButtonToBS,
        dialogButtonToUI: dialogButtonToUI,
        alert: alert$1,
        confirm: confirm,
        iframeDialog: iframeDialog,
        information: information,
        warning: warning,
        closePanel: closePanel,
        get ErrorHandling () { return ErrorHandling; },
        Invariant: Invariant,
        compareStringFactory: compareStringFactory,
        Culture: Culture,
        turkishLocaleToUpper: turkishLocaleToUpper,
        turkishLocaleCompare: turkishLocaleCompare,
        format: format,
        localeFormat: localeFormat,
        round: round,
        trunc: trunc,
        formatNumber: formatNumber,
        parseInteger: parseInteger,
        parseDecimal: parseDecimal,
        toId: toId,
        formatDate: formatDate,
        formatDayHourAndMin: formatDayHourAndMin,
        formatISODateTimeUTC: formatISODateTimeUTC,
        parseISODateTime: parseISODateTime,
        parseHourAndMin: parseHourAndMin,
        parseDayHourAndMin: parseDayHourAndMin,
        parseDate: parseDate,
        splitDateString: splitDateString,
        addOption: addOption,
        addEmptyOption: addEmptyOption,
        clearOptions: clearOptions,
        findElementWithRelativeId: findElementWithRelativeId,
        attrEncode: attrEncode,
        htmlEncode: htmlEncode,
        jsRender: jsRender,
        log: log,
        newBodyDiv: newBodyDiv,
        outerHtml: outerHtml,
        get LayoutTimer () { return LayoutTimer; },
        text: text,
        dbText: dbText,
        prefixedText: prefixedText,
        tryGetText: tryGetText,
        dbTryText: dbTryText,
        proxyTexts: proxyTexts,
        LT: LT,
        Lookup: Lookup,
        defaultNotifyOptions: defaultNotifyOptions,
        notifyWarning: notifyWarning,
        notifySuccess: notifySuccess,
        notifyInfo: notifyInfo,
        notifyError: notifyError,
        positionToastContainer: positionToastContainer,
        get ScriptData () { return ScriptData; },
        getRemoteData: getRemoteData,
        getRemoteDataAsync: getRemoteDataAsync,
        getLookup: getLookup,
        getLookupAsync: getLookupAsync,
        reloadLookup: reloadLookup,
        reloadLookupAsync: reloadLookupAsync,
        getColumns: getColumns,
        getColumnsAsync: getColumnsAsync,
        getForm: getForm,
        getFormAsync: getFormAsync,
        getTemplate: getTemplate,
        getTemplateAsync: getTemplateAsync,
        canLoadScriptData: canLoadScriptData,
        getCookie: getCookie,
        serviceCall: serviceCall,
        serviceRequest: serviceRequest,
        setEquality: setEquality,
        parseQueryString: parseQueryString,
        postToService: postToService,
        postToUrl: postToUrl,
        resolveUrl: resolveUrl,
        endsWith: endsWith,
        isEmptyOrNull: isEmptyOrNull,
        isTrimmedEmpty: isTrimmedEmpty,
        padLeft: padLeft,
        startsWith: startsWith,
        toSingleLine: toSingleLine,
        trimEnd: trimEnd,
        trimStart: trimStart,
        trim: trim,
        trimToEmpty: trimToEmpty,
        trimToNull: trimToNull,
        replaceAll: replaceAll,
        zeroPad: zeroPad,
        coalesce: coalesce,
        isValue: isValue,
        today: today,
        extend: extend,
        deepClone: deepClone,
        getNested: getNested,
        getType: getType,
        getTypeFullName: getTypeFullName,
        getTypeName: getTypeName,
        getInstanceType: getInstanceType,
        isAssignableFrom: isAssignableFrom,
        isInstanceOfType: isInstanceOfType,
        safeCast: safeCast,
        cast: cast,
        getBaseType: getBaseType,
        getAttributes: getAttributes,
        getMembers: getMembers,
        addTypeMember: addTypeMember,
        getTypes: getTypes,
        clearKeys: clearKeys,
        delegateCombine: delegateCombine,
        get Enum () { return Enum; },
        delegateRemove: delegateRemove,
        isEnum: isEnum,
        initFormType: initFormType,
        prop: prop,
        registerClass: registerClass,
        registerEnum: registerEnum,
        registerInterface: registerInterface,
        addAttribute: addAttribute,
        setTypeName: setTypeName,
        ISlickFormatter: ISlickFormatter,
        initializeTypes: initializeTypes,
        Exception: Exception,
        NullReferenceException: NullReferenceException,
        ArgumentNullException: ArgumentNullException,
        ArgumentOutOfRangeException: ArgumentOutOfRangeException,
        InvalidCastException: InvalidCastException,
        validatorAbortHandler: validatorAbortHandler,
        validateOptions: validateOptions,
        getHighlightTarget: getHighlightTarget,
        baseValidateOptions: baseValidateOptions,
        validateForm: validateForm,
        addValidationRule: addValidationRule,
        removeValidationRule: removeValidationRule,
        autoFullHeight: autoFullHeight,
        initFullHeightGridPage: initFullHeightGridPage,
        layoutFillHeightValue: layoutFillHeightValue,
        layoutFillHeight: layoutFillHeight,
        setMobileDeviceMode: setMobileDeviceMode,
        triggerLayoutOnShow: triggerLayoutOnShow,
        centerDialog: centerDialog,
        get Router () { return Router; }
    };

    function Attr(name) {
        return function (target) {
            return registerClass(target, 'Serenity.' + name + 'Attribute');
        };
    }
    var EnumKeyAttribute = /** @class */ (function () {
        function EnumKeyAttribute(value) {
            this.value = value;
        }
        EnumKeyAttribute = __decorate([
            Attr('EnumKey')
        ], EnumKeyAttribute);
        return EnumKeyAttribute;
    }());
    var DisplayNameAttribute = /** @class */ (function () {
        function DisplayNameAttribute(displayName) {
            this.displayName = displayName;
        }
        DisplayNameAttribute = __decorate([
            Attr('DisplayName')
        ], DisplayNameAttribute);
        return DisplayNameAttribute;
    }());
    var CategoryAttribute = /** @class */ (function () {
        function CategoryAttribute(category) {
            this.category = category;
        }
        CategoryAttribute = __decorate([
            Attr('Category')
        ], CategoryAttribute);
        return CategoryAttribute;
    }());
    var ColumnsKeyAttribute = /** @class */ (function () {
        function ColumnsKeyAttribute(value) {
            this.value = value;
        }
        ColumnsKeyAttribute = __decorate([
            Attr('ColumnsKey')
        ], ColumnsKeyAttribute);
        return ColumnsKeyAttribute;
    }());
    var CssClassAttribute = /** @class */ (function () {
        function CssClassAttribute(cssClass) {
            this.cssClass = cssClass;
        }
        CssClassAttribute = __decorate([
            Attr('CssClass')
        ], CssClassAttribute);
        return CssClassAttribute;
    }());
    var DefaultValueAttribute = /** @class */ (function () {
        function DefaultValueAttribute(value) {
            this.value = value;
        }
        DefaultValueAttribute = __decorate([
            Attr('DefaultValue')
        ], DefaultValueAttribute);
        return DefaultValueAttribute;
    }());
    var DialogTypeAttribute = /** @class */ (function () {
        function DialogTypeAttribute(value) {
            this.value = value;
        }
        DialogTypeAttribute = __decorate([
            Attr('DialogType')
        ], DialogTypeAttribute);
        return DialogTypeAttribute;
    }());
    var EditorAttribute = /** @class */ (function () {
        function EditorAttribute() {
        }
        EditorAttribute = __decorate([
            Attr('Editor')
        ], EditorAttribute);
        return EditorAttribute;
    }());
    var EditorOptionAttribute = /** @class */ (function () {
        function EditorOptionAttribute(key, value) {
            this.key = key;
            this.value = value;
        }
        EditorOptionAttribute = __decorate([
            Attr('EditorOption')
        ], EditorOptionAttribute);
        return EditorOptionAttribute;
    }());
    var EditorTypeAttributeBase = /** @class */ (function () {
        function EditorTypeAttributeBase(editorType) {
            this.editorType = editorType;
        }
        EditorTypeAttributeBase.prototype.setParams = function (editorParams) {
        };
        return EditorTypeAttributeBase;
    }());
    registerClass(EditorTypeAttributeBase, 'Serenity.EditorTypeAttributeBase');
    var EditorTypeAttribute = /** @class */ (function (_super) {
        __extends(EditorTypeAttribute, _super);
        function EditorTypeAttribute(editorType) {
            return _super.call(this, editorType) || this;
        }
        EditorTypeAttribute = __decorate([
            Attr('EditorType')
        ], EditorTypeAttribute);
        return EditorTypeAttribute;
    }(EditorTypeAttributeBase));
    var ElementAttribute = /** @class */ (function () {
        function ElementAttribute(value) {
            this.value = value;
        }
        ElementAttribute = __decorate([
            Attr('Element')
        ], ElementAttribute);
        return ElementAttribute;
    }());
    var EntityTypeAttribute = /** @class */ (function () {
        function EntityTypeAttribute(value) {
            this.value = value;
        }
        EntityTypeAttribute = __decorate([
            Attr('EntityType')
        ], EntityTypeAttribute);
        return EntityTypeAttribute;
    }());
    var FilterableAttribute = /** @class */ (function () {
        function FilterableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        FilterableAttribute = __decorate([
            Attr('Filterable')
        ], FilterableAttribute);
        return FilterableAttribute;
    }());
    var FlexifyAttribute = /** @class */ (function () {
        function FlexifyAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        FlexifyAttribute = __decorate([
            Attr('Flexify')
        ], FlexifyAttribute);
        return FlexifyAttribute;
    }());
    var FormKeyAttribute = /** @class */ (function () {
        function FormKeyAttribute(value) {
            this.value = value;
        }
        FormKeyAttribute = __decorate([
            Attr('FormKey')
        ], FormKeyAttribute);
        return FormKeyAttribute;
    }());
    var GeneratedCodeAttribute = /** @class */ (function () {
        function GeneratedCodeAttribute(origin) {
            this.origin = origin;
        }
        GeneratedCodeAttribute = __decorate([
            Attr('GeneratedCode')
        ], GeneratedCodeAttribute);
        return GeneratedCodeAttribute;
    }());
    var HiddenAttribute = /** @class */ (function () {
        function HiddenAttribute() {
        }
        HiddenAttribute = __decorate([
            Attr('Hidden')
        ], HiddenAttribute);
        return HiddenAttribute;
    }());
    var HintAttribute = /** @class */ (function () {
        function HintAttribute(hint) {
            this.hint = hint;
        }
        HintAttribute = __decorate([
            Attr('Hint')
        ], HintAttribute);
        return HintAttribute;
    }());
    var IdPropertyAttribute = /** @class */ (function () {
        function IdPropertyAttribute(value) {
            this.value = value;
        }
        IdPropertyAttribute = __decorate([
            Attr('IdProperty')
        ], IdPropertyAttribute);
        return IdPropertyAttribute;
    }());
    var InsertableAttribute = /** @class */ (function () {
        function InsertableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        InsertableAttribute = __decorate([
            Attr('Insertable')
        ], InsertableAttribute);
        return InsertableAttribute;
    }());
    var IsActivePropertyAttribute = /** @class */ (function () {
        function IsActivePropertyAttribute(value) {
            this.value = value;
        }
        IsActivePropertyAttribute = __decorate([
            Attr('IsActiveProperty')
        ], IsActivePropertyAttribute);
        return IsActivePropertyAttribute;
    }());
    var ItemNameAttribute = /** @class */ (function () {
        function ItemNameAttribute(value) {
            this.value = value;
        }
        ItemNameAttribute = __decorate([
            Attr('ItemName')
        ], ItemNameAttribute);
        return ItemNameAttribute;
    }());
    var LocalTextPrefixAttribute = /** @class */ (function () {
        function LocalTextPrefixAttribute(value) {
            this.value = value;
        }
        LocalTextPrefixAttribute = __decorate([
            Attr('LocalTextPrefix')
        ], LocalTextPrefixAttribute);
        return LocalTextPrefixAttribute;
    }());
    var MaximizableAttribute = /** @class */ (function () {
        function MaximizableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        MaximizableAttribute = __decorate([
            Attr('Maximizable')
        ], MaximizableAttribute);
        return MaximizableAttribute;
    }());
    var MaxLengthAttribute = /** @class */ (function () {
        function MaxLengthAttribute(maxLength) {
            this.maxLength = maxLength;
        }
        MaxLengthAttribute = __decorate([
            Attr('MaxLength')
        ], MaxLengthAttribute);
        return MaxLengthAttribute;
    }());
    var NamePropertyAttribute = /** @class */ (function () {
        function NamePropertyAttribute(value) {
            this.value = value;
        }
        NamePropertyAttribute = __decorate([
            Attr('NameProperty')
        ], NamePropertyAttribute);
        return NamePropertyAttribute;
    }());
    var OneWayAttribute = /** @class */ (function () {
        function OneWayAttribute() {
        }
        OneWayAttribute = __decorate([
            Attr('OneWay')
        ], OneWayAttribute);
        return OneWayAttribute;
    }());
    var OptionAttribute = /** @class */ (function () {
        function OptionAttribute() {
        }
        OptionAttribute = __decorate([
            Attr('Option')
        ], OptionAttribute);
        return OptionAttribute;
    }());
    var OptionsTypeAttribute = /** @class */ (function () {
        function OptionsTypeAttribute(value) {
            this.value = value;
        }
        OptionsTypeAttribute = __decorate([
            Attr('OptionsType')
        ], OptionsTypeAttribute);
        return OptionsTypeAttribute;
    }());
    var PanelAttribute = /** @class */ (function () {
        function PanelAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        PanelAttribute = __decorate([
            Attr('Panel')
        ], PanelAttribute);
        return PanelAttribute;
    }());
    var PlaceholderAttribute = /** @class */ (function () {
        function PlaceholderAttribute(value) {
            this.value = value;
        }
        PlaceholderAttribute = __decorate([
            Attr('Placeholder')
        ], PlaceholderAttribute);
        return PlaceholderAttribute;
    }());
    var ReadOnlyAttribute = /** @class */ (function () {
        function ReadOnlyAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ReadOnlyAttribute = __decorate([
            Attr('ReadOnly')
        ], ReadOnlyAttribute);
        return ReadOnlyAttribute;
    }());
    var RequiredAttribute = /** @class */ (function () {
        function RequiredAttribute(isRequired) {
            if (isRequired === void 0) { isRequired = true; }
            this.isRequired = isRequired;
        }
        RequiredAttribute = __decorate([
            Attr('Required')
        ], RequiredAttribute);
        return RequiredAttribute;
    }());
    var ResizableAttribute = /** @class */ (function () {
        function ResizableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ResizableAttribute = __decorate([
            Attr('Resizable')
        ], ResizableAttribute);
        return ResizableAttribute;
    }());
    var ResponsiveAttribute = /** @class */ (function () {
        function ResponsiveAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ResponsiveAttribute = __decorate([
            Attr('Responsive')
        ], ResponsiveAttribute);
        return ResponsiveAttribute;
    }());
    var ServiceAttribute = /** @class */ (function () {
        function ServiceAttribute(value) {
            this.value = value;
        }
        ServiceAttribute = __decorate([
            Attr('Service')
        ], ServiceAttribute);
        return ServiceAttribute;
    }());
    var UpdatableAttribute = /** @class */ (function () {
        function UpdatableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        UpdatableAttribute = __decorate([
            Attr('Updatable')
        ], UpdatableAttribute);
        return UpdatableAttribute;
    }());
    var Decorators;
    (function (Decorators) {
        function registerClass$1(nameOrIntf, intf2) {
            return function (target) {
                if (typeof nameOrIntf == "string")
                    registerClass(target, nameOrIntf, intf2);
                else
                    registerClass(target, null, nameOrIntf);
            };
        }
        Decorators.registerClass = registerClass$1;
        function registerInterface$1(nameOrIntf, intf2) {
            return function (target) {
                if (typeof nameOrIntf == "string")
                    registerInterface(target, nameOrIntf, intf2);
                else
                    registerInterface(target, null, nameOrIntf);
            };
        }
        Decorators.registerInterface = registerInterface$1;
        function registerEditor(nameOrIntf, intf2) {
            return registerClass$1(nameOrIntf, intf2);
        }
        Decorators.registerEditor = registerEditor;
        function registerEnum$1(target, enumKey, name) {
            registerEnum(target, name);
            if (enumKey)
                addAttribute(target, new EnumKeyAttribute(enumKey));
        }
        Decorators.registerEnum = registerEnum$1;
        function registerEnumType(target, name, enumKey) {
            registerEnum$1(target, enumKey !== null && enumKey !== void 0 ? enumKey : name, name);
        }
        Decorators.registerEnumType = registerEnumType;
        function registerFormatter(nameOrIntf, intf2) {
            if (nameOrIntf === void 0) { nameOrIntf = [ISlickFormatter]; }
            if (intf2 === void 0) { intf2 = [ISlickFormatter]; }
            return registerClass$1(nameOrIntf, intf2);
        }
        Decorators.registerFormatter = registerFormatter;
        function enumKey(value) {
            return function (target) {
                addAttribute(target, new EnumKeyAttribute(value));
            };
        }
        Decorators.enumKey = enumKey;
        var SummaryType;
        (function (SummaryType) {
            SummaryType[SummaryType["Disabled"] = -1] = "Disabled";
            SummaryType[SummaryType["None"] = 0] = "None";
            SummaryType[SummaryType["Sum"] = 1] = "Sum";
            SummaryType[SummaryType["Avg"] = 2] = "Avg";
            SummaryType[SummaryType["Min"] = 3] = "Min";
            SummaryType[SummaryType["Max"] = 4] = "Max";
        })(SummaryType || (SummaryType = {}));
        registerEnum$1(SummaryType, 'Serenity.SummaryType');
        function option() {
            return function (target, propertyKey) {
                var isGetSet = startsWith(propertyKey, 'get_') || startsWith(propertyKey, 'set_');
                var memberName = isGetSet ? propertyKey.substr(4) : propertyKey;
                addTypeMember(target.constructor, {
                    name: memberName,
                    attr: [new OptionAttribute()],
                    type: isGetSet ? 16 /* property */ : 4 /* field */,
                    getter: isGetSet ? ('get_' + memberName) : null,
                    setter: isGetSet ? ('set_' + memberName) : null
                });
            };
        }
        Decorators.option = option;
        function dialogType(value) {
            return function (target) {
                addAttribute(target, new DialogTypeAttribute(value));
            };
        }
        Decorators.dialogType = dialogType;
        function editor(key) {
            return function (target) {
                var attr = new EditorAttribute();
                if (key !== undefined)
                    attr.key = key;
                addAttribute(target, attr);
            };
        }
        Decorators.editor = editor;
        function element(value) {
            return function (target) {
                addAttribute(target, new ElementAttribute(value));
            };
        }
        Decorators.element = element;
        function filterable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new FilterableAttribute(value));
            };
        }
        Decorators.filterable = filterable;
        function flexify(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new FlexifyAttribute(value));
            };
        }
        Decorators.flexify = flexify;
        function itemName(value) {
            return function (target) {
                addAttribute(target, new ItemNameAttribute(value));
            };
        }
        Decorators.itemName = itemName;
        function maximizable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new MaximizableAttribute(value));
            };
        }
        Decorators.maximizable = maximizable;
        function optionsType(value) {
            return function (target) {
                addAttribute(target, new OptionsTypeAttribute(value));
            };
        }
        Decorators.optionsType = optionsType;
        function panel(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new PanelAttribute(value));
            };
        }
        Decorators.panel = panel;
        function resizable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new ResizableAttribute(value));
            };
        }
        Decorators.resizable = resizable;
        function responsive(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new ResponsiveAttribute(value));
            };
        }
        Decorators.responsive = responsive;
        function service(value) {
            return function (target) {
                addAttribute(target, new ServiceAttribute(value));
            };
        }
        Decorators.service = service;
    })(Decorators || (Decorators = {}));

    var IBooleanValue = /** @class */ (function () {
        function IBooleanValue() {
        }
        IBooleanValue = __decorate([
            Decorators.registerInterface()
        ], IBooleanValue);
        return IBooleanValue;
    }());

    var IDoubleValue = /** @class */ (function () {
        function IDoubleValue() {
        }
        IDoubleValue = __decorate([
            Decorators.registerInterface()
        ], IDoubleValue);
        return IDoubleValue;
    }());

    var IDialog = /** @class */ (function () {
        function IDialog() {
        }
        IDialog = __decorate([
            Decorators.registerInterface('Serenity.IDialog')
        ], IDialog);
        return IDialog;
    }());

    var IEditDialog = /** @class */ (function () {
        function IEditDialog() {
        }
        IEditDialog = __decorate([
            Decorators.registerInterface('Serenity.IEditDialog')
        ], IEditDialog);
        return IEditDialog;
    }());

    var IGetEditValue = /** @class */ (function () {
        function IGetEditValue() {
        }
        IGetEditValue = __decorate([
            Decorators.registerInterface()
        ], IGetEditValue);
        return IGetEditValue;
    }());

    var IReadOnly = /** @class */ (function () {
        function IReadOnly() {
        }
        IReadOnly = __decorate([
            Decorators.registerInterface('Serenity.IReadOnly')
        ], IReadOnly);
        return IReadOnly;
    }());

    var ISetEditValue = /** @class */ (function () {
        function ISetEditValue() {
        }
        ISetEditValue = __decorate([
            Decorators.registerInterface()
        ], ISetEditValue);
        return ISetEditValue;
    }());

    var IStringValue = /** @class */ (function () {
        function IStringValue() {
        }
        IStringValue = __decorate([
            Decorators.registerInterface()
        ], IStringValue);
        return IStringValue;
    }());

    var IValidateRequired = /** @class */ (function () {
        function IValidateRequired() {
        }
        IValidateRequired = __decorate([
            Decorators.registerInterface('Serenity.IValidateRequired')
        ], IValidateRequired);
        return IValidateRequired;
    }());

    function Criteria(field) {
        return [field];
    }
    (function (Criteria) {
        var C = Criteria;
        function isEmpty(c) {
            return c == null ||
                c.length === 0 ||
                (c.length === 1 &&
                    typeof c[0] == "string" &&
                    c[0].length === 0);
        }
        Criteria.isEmpty = isEmpty;
        function join(c1, op, c2) {
            if (C.isEmpty(c1))
                return c2;
            if (C.isEmpty(c2))
                return c1;
            return [c1, op, c2];
        }
        Criteria.join = join;
        function paren(c) {
            return C.isEmpty(c) ? c : ['()', c];
        }
        Criteria.paren = paren;
        function and(c1, c2) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var result = join(c1, 'and', c2);
            if (rest) {
                for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
                    var k = rest_1[_a];
                    result = join(result, 'and', k);
                }
            }
            return result;
        }
        Criteria.and = and;
        function or(c1, c2) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var result = join(c1, 'or', c2);
            if (rest) {
                for (var _a = 0, rest_2 = rest; _a < rest_2.length; _a++) {
                    var k = rest_2[_a];
                    result = join(result, 'or', k);
                }
            }
            return result;
        }
        Criteria.or = or;
    })(Criteria || (Criteria = {}));

    var ReflectionUtils;
    (function (ReflectionUtils) {
        function getPropertyValue(o, property) {
            var d = o;
            var getter = d['get_' + property];
            if (!!!(typeof (getter) === 'undefined')) {
                return getter.apply(o);
            }
            var camelCase = makeCamelCase(property);
            getter = d['get_' + camelCase];
            if (!!!(typeof (getter) === 'undefined')) {
                return getter.apply(o);
            }
            return d[camelCase];
        }
        ReflectionUtils.getPropertyValue = getPropertyValue;
        function setPropertyValue(o, property, value) {
            var d = o;
            var setter = d['set_' + property];
            if (!!!(typeof (setter) === 'undefined')) {
                setter.apply(o, [value]);
                return;
            }
            var camelCase = makeCamelCase(property);
            setter = d['set_' + camelCase];
            if (!!!(typeof (setter) === 'undefined')) {
                setter.apply(o, [value]);
                return;
            }
            d[camelCase] = value;
        }
        ReflectionUtils.setPropertyValue = setPropertyValue;
        function makeCamelCase(s) {
            if (isEmptyOrNull(s)) {
                return s;
            }
            if (s === 'ID') {
                return 'id';
            }
            var hasNonUppercase = false;
            var numUppercaseChars = 0;
            for (var index = 0; index < s.length; index++) {
                if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
                    numUppercaseChars++;
                }
                else {
                    hasNonUppercase = true;
                    break;
                }
            }
            if (!hasNonUppercase && s.length !== 1 || numUppercaseChars === 0) {
                return s;
            }
            else if (numUppercaseChars > 1) {
                return s.substr(0, numUppercaseChars - 1).toLowerCase() + s.substr(numUppercaseChars - 1);
            }
            else if (s.length === 1) {
                return s.toLowerCase();
            }
            else {
                return s.substr(0, 1).toLowerCase() + s.substr(1);
            }
        }
        ReflectionUtils.makeCamelCase = makeCamelCase;
    })(ReflectionUtils || (ReflectionUtils = {}));

    var DialogTypeRegistry;
    (function (DialogTypeRegistry) {
        function search(typeName) {
            var dialogType = getType(typeName);
            if (dialogType != null && isAssignableFrom(IDialog, dialogType)) {
                return dialogType;
            }
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var ns = _a[_i];
                dialogType = getType(ns + '.' + typeName);
                if (dialogType != null && isAssignableFrom(IDialog, dialogType)) {
                    return dialogType;
                }
            }
            return null;
        }
        var knownTypes = {};
        function tryGet(key) {
            if (knownTypes[key] == null) {
                var typeName = key;
                var dialogType = search(typeName);
                if (dialogType == null && !endsWith(key, 'Dialog')) {
                    typeName = key + 'Dialog';
                    dialogType = search(typeName);
                }
                if (dialogType == null) {
                    return null;
                }
                knownTypes[key] = dialogType;
                return dialogType;
            }
            return knownTypes[key];
        }
        DialogTypeRegistry.tryGet = tryGet;
        function get(key) {
            var type = tryGet(key);
            if (type == null) {
                var message = key + ' dialog class is not found! Make sure there is a dialog class with this name, ' +
                    'it is under your project root namespace, and your namespace parts start with capital letters, ' +
                    'e.g. MyProject.Pascal.Cased namespace. If you got this error from an editor with InplaceAdd option ' +
                    'check that lookup key and dialog type name matches (case sensitive, excluding Dialog suffix). ' +
                    "You need to change lookup key or specify DialogType property in LookupEditor attribute if that's not the case.";
                notifyError(message, '', null);
                throw new Exception(message);
            }
            return type;
        }
        DialogTypeRegistry.get = get;
    })(DialogTypeRegistry || (DialogTypeRegistry = {}));

    // @ts-ignore
    var globalObj$2 = typeof (global) !== "undefined" ? global : (typeof (window) !== "undefined" ? window : (typeof (self) !== "undefined" ? self : null));
    var knownTypes;
    var EditorTypeRegistry;
    (function (EditorTypeRegistry) {
        function get(key) {
            var _a;
            if (isEmptyOrNull(key)) {
                throw new ArgumentNullException('key');
            }
            initialize();
            var editorType = knownTypes[key.toLowerCase()];
            if (editorType == null) {
                var type = (_a = getType(key)) !== null && _a !== void 0 ? _a : getType(key, globalObj$2);
                if (type != null) {
                    knownTypes[key.toLowerCase()] = type;
                    return type;
                }
                throw new Exception(format("Can't find {0} editor type!", key));
            }
            return editorType;
        }
        EditorTypeRegistry.get = get;
        function initialize() {
            if (knownTypes != null)
                return;
            knownTypes = {};
            for (var _i = 0, _a = getTypes(); _i < _a.length; _i++) {
                var type = _a[_i];
                var fullName = getTypeFullName(type).toLowerCase();
                knownTypes[fullName] = type;
                var editorAttr = getAttributes(type, EditorAttribute, false);
                if (editorAttr != null && editorAttr.length > 0) {
                    var attrKey = editorAttr[0].key;
                    if (!isEmptyOrNull(attrKey)) {
                        knownTypes[attrKey.toLowerCase()] = type;
                    }
                }
                for (var _b = 0, _c = Config.rootNamespaces; _b < _c.length; _b++) {
                    var k = _c[_b];
                    if (startsWith(fullName, k.toLowerCase() + '.')) {
                        var kx = fullName.substr(k.length + 1).toLowerCase();
                        if (knownTypes[kx] == null) {
                            knownTypes[kx] = type;
                        }
                    }
                }
            }
            setTypeKeysWithoutEditorSuffix();
        }
        function reset() {
            knownTypes = null;
        }
        EditorTypeRegistry.reset = reset;
        function setTypeKeysWithoutEditorSuffix() {
            var keys = Object.keys(knownTypes);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                setWithoutSuffix(k, knownTypes[k]);
            }
        }
        function setWithoutSuffix(key, t) {
            var suffix = 'editor';
            if (!endsWith(key, suffix))
                return;
            var p = key.substr(0, key.length - suffix.length);
            if (isEmptyOrNull(p))
                return;
            if (knownTypes[p] != null)
                return;
            knownTypes[p] = knownTypes[key];
        }
    })(EditorTypeRegistry || (EditorTypeRegistry = {}));

    var EnumTypeRegistry;
    (function (EnumTypeRegistry) {
        var knownTypes;
        function tryGet(key) {
            if (knownTypes == null) {
                knownTypes = {};
                for (var _i = 0, _a = getTypes(); _i < _a.length; _i++) {
                    var type = _a[_i];
                    if (isEnum(type)) {
                        var fullName = getTypeFullName(type);
                        knownTypes[fullName] = type;
                        var enumKeyAttr = getAttributes(type, EnumKeyAttribute, false);
                        if (enumKeyAttr != null && enumKeyAttr.length > 0) {
                            knownTypes[enumKeyAttr[0].value] = type;
                        }
                        for (var _b = 0, _c = Config.rootNamespaces; _b < _c.length; _b++) {
                            var k = _c[_b];
                            if (startsWith(fullName, k + '.')) {
                                knownTypes[fullName.substr(k.length + 1)] = type;
                            }
                        }
                    }
                }
            }
            if (knownTypes[key] == null)
                return null;
            return knownTypes[key];
        }
        EnumTypeRegistry.tryGet = tryGet;
        function get(key) {
            var type = EnumTypeRegistry.tryGet(key);
            if (type == null) {
                var message = format("Can't find {0} enum type! If you have recently defined this enum type " +
                    "in server side code, make sure your project builds successfully and transform T4 templates. " +
                    "Also make sure that enum is under your project root namespace, and your namespace parts starts " +
                    "with capital letters, e.g.MyProject.Pascal.Cased namespace", key);
                notifyError(message, '', null);
                throw new Exception(message);
            }
            return type;
        }
        EnumTypeRegistry.get = get;
    })(EnumTypeRegistry || (EnumTypeRegistry = {}));

    var PrefixedContext = /** @class */ (function () {
        function PrefixedContext(idPrefix) {
            this.idPrefix = idPrefix;
        }
        PrefixedContext.prototype.byId = function (id) {
            return $('#' + this.idPrefix + id);
        };
        PrefixedContext.prototype.w = function (id, type) {
            return $('#' + this.idPrefix + id).getWidget(type);
        };
        return PrefixedContext;
    }());

    /// <reference types="react" />
    function reactPatch() {
        var _a, _b;
        // @ts-ignore check for global
        var globalObj = typeof (global) !== "undefined" ? global : (typeof (window) !== "undefined" ? window : (typeof (self) !== "undefined" ? self : null));
        // @ts-ignore
        if (typeof React === "undefined" && typeof globalObj !== "undefined") {
            if (globalObj['preact'] != null) {
                globalObj['React'] = globalObj['ReactDOM'] = globalObj['preact'];
                // @ts-ignore
                React.Fragment = (_a = React.Fragment) !== null && _a !== void 0 ? _a : "x-fragment";
            }
            else if (globalObj['Nerv'] != null) {
                globalObj['React'] = globalObj['ReactDOM'] = globalObj['Nerv'];
                // @ts-ignore
                React.Fragment = (_b = React.Fragment) !== null && _b !== void 0 ? _b : "x-fragment";
            }
            else {
                globalObj['React'] = {
                    Component: function () { },
                    Fragment: "x-fragment",
                    createElement: function () { return { _reactNotLoaded: true }; }
                };
                globalObj['ReactDOM'] = {
                    render: function () { throw Error("To use React, it should be included before Serenity.CoreLib.js"); }
                };
            }
        }
    }
    reactPatch();
    var Widget = /** @class */ (function (_super) {
        __extends(Widget, _super);
        function Widget(element, options) {
            var _this = _super.call(this, options) || this;
            _this.element = element;
            _this.options = options || {};
            _this.widgetName = Widget_1.getWidgetName(getInstanceType(_this));
            _this.uniqueName = _this.widgetName + (Widget_1.nextWidgetNumber++).toString();
            if (element.data(_this.widgetName)) {
                throw new Exception(format("The element already has widget '{0}'!", _this.widgetName));
            }
            element.on('remove.' + _this.widgetName, function (e) {
                if (e.bubbles || e.cancelable) {
                    return;
                }
                _this.destroy();
            }).data(_this.widgetName, _this);
            _this.addCssClass();
            return _this;
        }
        Widget_1 = Widget;
        Widget.prototype.destroy = function () {
            if (this.element) {
                this.element.removeClass('s-' + getTypeName(getInstanceType(this)));
                this.element.off('.' + this.widgetName).off('.' + this.uniqueName).removeData(this.widgetName);
                this.element = null;
            }
        };
        Widget.prototype.addCssClass = function () {
            this.element.addClass(this.getCssClass());
        };
        Widget.prototype.getCssClass = function () {
            var type = getInstanceType(this);
            var classList = [];
            var fullClass = replaceAll(getTypeFullName(type), '.', '-');
            classList.push(fullClass);
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var k = _a[_i];
                if (startsWith(fullClass, k + '-')) {
                    classList.push(fullClass.substr(k.length + 1));
                    break;
                }
            }
            classList.push(getTypeName(type));
            return classList
                .filter(function (v, i, a) { return a.indexOf(v) === i; })
                .map(function (s) { return 's-' + s; })
                .join(" ");
        };
        Widget.getWidgetName = function (type) {
            return replaceAll(getTypeFullName(type), '.', '_');
        };
        Widget.elementFor = function (editorType) {
            var elementAttr = getAttributes(editorType, ElementAttribute, true);
            var elementHtml = ((elementAttr.length > 0) ? elementAttr[0].value : '<input/>');
            return $(elementHtml);
        };
        Widget.prototype.addValidationRule = function (eventClass, rule) {
            return addValidationRule(this.element, eventClass, rule);
        };
        Widget.prototype.getGridField = function () {
            return this.element.closest('.field');
        };
        Widget.prototype.change = function (handler) {
            this.element.on('change.' + this.uniqueName, handler);
        };
        Widget.prototype.changeSelect2 = function (handler) {
            this.element.on('change.' + this.uniqueName, function (e, valueSet) {
                if (valueSet !== true)
                    handler(e);
            });
        };
        Widget.create = function (params) {
            var widget;
            if (isAssignableFrom(IDialog, params.type)) {
                widget = new params.type(params.options);
                if (params.container)
                    widget.element.appendTo(params.container);
                params.element && params.element(widget.element);
            }
            else {
                var e = Widget_1.elementFor(params.type);
                if (params.container)
                    e.appendTo(params.container);
                params.element && params.element(e);
                widget = new params.type(e, params.options);
            }
            widget.init(null);
            params.init && params.init(widget);
            return widget;
        };
        Widget.prototype.initialize = function () {
        };
        Widget.prototype.init = function (action) {
            action && action(this);
            return this;
        };
        var Widget_1;
        Widget.nextWidgetNumber = 0;
        Widget.__isWidgetType = true;
        Widget = Widget_1 = __decorate([
            Decorators.registerClass()
            // @ts-ignore
        ], Widget);
        return Widget;
    }(React.Component));
    if (typeof $ !== "undefined" && $.fn) {
        $.fn.tryGetWidget = function (type) {
            var element = this;
            var w;
            if (isAssignableFrom(Widget, type)) {
                var widgetName = Widget.getWidgetName(type);
                w = element.data(widgetName);
                if (w != null && !isAssignableFrom(type, getInstanceType(w))) {
                    w = null;
                }
                if (w != null) {
                    return w;
                }
            }
            var data = element.data();
            if (data == null) {
                return null;
            }
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                w = data[key];
                if (w != null && isAssignableFrom(type, getInstanceType(w))) {
                    return w;
                }
            }
            return null;
        };
        $.fn.getWidget = function (type) {
            if (this == null) {
                throw new ArgumentNullException('element');
            }
            if (this.length === 0) {
                throw new Exception(format("Searching for widget of type '{0}' on a non-existent element! ({1})", getTypeFullName(type), this.selector));
            }
            var w = this.tryGetWidget(type);
            if (w == null) {
                var message = format("Element has no widget of type '{0}'! If you have recently changed " +
                    "editor type of a property in a form class, or changed data type in row (which also changes " +
                    "editor type) your script side Form definition might be out of date. Make sure your project " +
                    "builds successfully and transform T4 templates", getTypeFullName(type));
                notifyError(message, '', null);
                throw new Exception(message);
            }
            return w;
        };
    }

    var TemplatedWidget = /** @class */ (function (_super) {
        __extends(TemplatedWidget, _super);
        function TemplatedWidget(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.idPrefix = _this.uniqueName + '_';
            var widgetMarkup = _this.getTemplate().replace(new RegExp('~_', 'g'), _this.idPrefix);
            // for compatibility with older templates based on JsRender
            var end = 0;
            while (true) {
                var idx = widgetMarkup.indexOf('{{text:"', end);
                if (idx < 0)
                    break;
                var end = widgetMarkup.indexOf('"}}', idx);
                if (end < 0)
                    break;
                var key = widgetMarkup.substr(idx + 8, end - idx - 8);
                var txt = text(key);
                widgetMarkup = widgetMarkup.substr(0, idx) + txt + widgetMarkup.substr(end + 3);
                end = idx + txt.length;
            }
            _this.element.html(widgetMarkup);
            return _this;
        }
        TemplatedWidget_1 = TemplatedWidget;
        TemplatedWidget.prototype.byId = function (id) {
            return $('#' + this.idPrefix + id);
        };
        TemplatedWidget.prototype.byID = function (id, type) {
            return this.byId(id).getWidget(type);
        };
        TemplatedWidget.noGeneric = function (s) {
            var dollar = s.indexOf('$');
            if (dollar >= 0) {
                return s.substr(0, dollar);
            }
            return s;
        };
        TemplatedWidget.prototype.getDefaultTemplateName = function () {
            return TemplatedWidget_1.noGeneric(getTypeName(getInstanceType(this)));
        };
        TemplatedWidget.prototype.getTemplateName = function () {
            var type = getInstanceType(this);
            var fullName = getTypeFullName(type);
            var templateNames = TemplatedWidget_1.templateNames;
            var cachedName = TemplatedWidget_1.templateNames[fullName];
            if (cachedName != null) {
                return cachedName;
            }
            while (type && type !== Widget) {
                var name = TemplatedWidget_1.noGeneric(getTypeFullName(type));
                for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                    var k = _a[_i];
                    if (startsWith(name, k + '.')) {
                        name = name.substr(k.length + 1);
                        break;
                    }
                }
                if (canLoadScriptData('Template.' + name)) {
                    templateNames[fullName] = name;
                    return name;
                }
                name = replaceAll(name, '.', '_');
                if (canLoadScriptData('Template.' + name) ||
                    $('script#Template_' + name).length > 0) {
                    templateNames[fullName] = name;
                    return name;
                }
                name = TemplatedWidget_1.noGeneric(getTypeName(type));
                if (canLoadScriptData('Template.' + name) ||
                    $('script#Template_' + name).length > 0) {
                    TemplatedWidget_1.templateNames[fullName] = name;
                    return name;
                }
                type = getBaseType(type);
            }
            templateNames[fullName] = cachedName = this.getDefaultTemplateName();
            return cachedName;
        };
        TemplatedWidget.prototype.getFallbackTemplate = function () {
            return null;
        };
        TemplatedWidget.prototype.getTemplate = function () {
            var templateName = this.getTemplateName();
            var script = $('script#Template_' + templateName);
            if (script.length > 0) {
                return script.html();
            }
            var template;
            if (!canLoadScriptData('Template.' + templateName) &&
                this.getDefaultTemplateName() == templateName) {
                template = this.getFallbackTemplate();
                if (template != null)
                    return template;
            }
            template = getTemplate(templateName);
            if (template == null) {
                throw new Error(format("Can't locate template for widget '{0}' with name '{1}'!", getTypeName(getInstanceType(this)), templateName));
            }
            return template;
        };
        var TemplatedWidget_1;
        TemplatedWidget.templateNames = {};
        TemplatedWidget = TemplatedWidget_1 = __decorate([
            Decorators.registerClass("Serenity.TemplatedWidget")
        ], TemplatedWidget);
        return TemplatedWidget;
    }(Widget));

    var SubDialogHelper;
    (function (SubDialogHelper) {
        function bindToDataChange(dialog, owner, dataChange, useTimeout) {
            var widgetName = owner.widgetName;
            dialog.element.bind('ondatachange.' + widgetName, function (e, dci) {
                if (useTimeout) {
                    window.setTimeout(function () {
                        dataChange(e, dci);
                    }, 0);
                }
                else {
                    dataChange(e, dci);
                }
            }).bind('remove.' + widgetName, function () {
                dialog.element.unbind('ondatachange.' + widgetName);
            });
            return dialog;
        }
        SubDialogHelper.bindToDataChange = bindToDataChange;
        function triggerDataChange(dialog) {
            dialog.element.triggerHandler('ondatachange');
            return dialog;
        }
        SubDialogHelper.triggerDataChange = triggerDataChange;
        function triggerDataChanged(element) {
            element.triggerHandler('ondatachange');
            return element;
        }
        SubDialogHelper.triggerDataChanged = triggerDataChanged;
        function bubbleDataChange(dialog, owner, useTimeout) {
            return bindToDataChange(dialog, owner, function (e, dci) {
                owner.element.triggerHandler('ondatachange');
            }, useTimeout);
        }
        SubDialogHelper.bubbleDataChange = bubbleDataChange;
        function cascade(cascadedDialog, ofElement) {
            cascadedDialog.element.one('dialogopen', function (e) {
                cascadedDialog.element.dialog().dialog('option', 'position', cascadedDialogOffset(ofElement));
            });
            return cascadedDialog;
        }
        SubDialogHelper.cascade = cascade;
        function cascadedDialogOffset(element) {
            return { my: 'left top', at: 'left+20 top+20', of: element[0] };
        }
        SubDialogHelper.cascadedDialogOffset = cascadedDialogOffset;
    })(SubDialogHelper || (SubDialogHelper = {}));

    var UploadHelper;
    (function (UploadHelper) {
        function addUploadInput(options) {
            options.container.addClass('fileinput-button');
            var uploadInput = $('<input/>').attr('type', 'file')
                .attr('name', options.inputName + '[]')
                .attr('data-url', resolveUrl('~/File/TemporaryUpload'))
                .attr('multiple', 'multiple').appendTo(options.container);
            if (options.allowMultiple) {
                uploadInput.attr('multiple', 'multiple');
            }
            uploadInput.fileupload({
                dataType: 'json',
                dropZone: options.zone,
                pasteZone: options.zone,
                done: function (e, data) {
                    var response = data.result;
                    if (response.Error) {
                        notifyError(response.Error.Message);
                        return;
                    }
                    if (options.fileDone != null) {
                        options.fileDone(response, data.files[0].name, data);
                    }
                },
                fail: function (e, opt) {
                    var _a;
                    var xhr = (_a = opt === null || opt === void 0 ? void 0 : opt._response) === null || _a === void 0 ? void 0 : _a.jqXHR;
                    if (!xhr) {
                        notifyError('An error occured during file upload.');
                        return;
                    }
                    if ((xhr.getResponseHeader('content-type') || '')
                        .toLowerCase().indexOf('application/json') >= 0) {
                        var json = $.parseJSON(xhr.responseText);
                        if (json && json.Error && json.Error.Message) {
                            notifyError(json.Error.Message);
                            return;
                        }
                    }
                    var html = xhr.responseText;
                    if (html) {
                        iframeDialog({ html: html });
                        return;
                    }
                    if (!xhr.status) {
                        if (xhr.statusText != "abort")
                            notifyError("An unknown connection error occurred! Check browser console for details.");
                        return;
                    }
                    if (xhr.status == 500) {
                        notifyError("HTTP 500: Connection refused! Check browser console for details.");
                        return;
                    }
                    notifyError("HTTP " + xhr.status + ' error! Check browser console for details.');
                },
                start: function () {
                    blockUI(null);
                    if (options.progress != null) {
                        options.progress.show();
                    }
                },
                stop: function () {
                    blockUndo();
                    if (options.progress != null) {
                        options.progress.hide();
                    }
                },
                progress: function (e1, data1) {
                    if (options.progress != null) {
                        var percent = data1.loaded / data1.total * 100;
                        options.progress.children().css('width', percent.toString() + '%');
                    }
                }
            });
            return uploadInput;
        }
        UploadHelper.addUploadInput = addUploadInput;
        function checkImageConstraints(file, opt) {
            if (!file.IsImage && !opt.allowNonImage) {
                alert(text('Controls.ImageUpload.NotAnImageFile'));
                return false;
            }
            if (opt.minSize > 0 && file.Size < opt.minSize) {
                alert(format(text('Controls.ImageUpload.UploadFileTooSmall'), fileSizeDisplay(opt.minSize)));
                return false;
            }
            if (opt.maxSize > 0 && file.Size > opt.maxSize) {
                alert(format(text('Controls.ImageUpload.UploadFileTooBig'), fileSizeDisplay(opt.maxSize)));
                return false;
            }
            if (!file.IsImage) {
                return true;
            }
            if (opt.minWidth > 0 && file.Width < opt.minWidth) {
                alert(format(text('Controls.ImageUpload.MinWidth'), opt.minWidth));
                return false;
            }
            if (opt.maxWidth > 0 && file.Width > opt.maxWidth) {
                alert(format(text('Controls.ImageUpload.MaxWidth'), opt.maxWidth));
                return false;
            }
            if (opt.minHeight > 0 && file.Height < opt.minHeight) {
                alert(format(text('Controls.ImageUpload.MinHeight'), opt.minHeight));
                return false;
            }
            if (opt.maxHeight > 0 && file.Height > opt.maxHeight) {
                alert(format(text('Controls.ImageUpload.MaxHeight'), opt.maxHeight));
                return false;
            }
            return true;
        }
        UploadHelper.checkImageConstraints = checkImageConstraints;
        function fileNameSizeDisplay(name, bytes) {
            return name + ' (' + fileSizeDisplay(bytes) + ')';
        }
        UploadHelper.fileNameSizeDisplay = fileNameSizeDisplay;
        function fileSizeDisplay(bytes) {
            var byteSize = round(bytes * 100 / 1024) * 0.01;
            var suffix = 'KB';
            if (byteSize >= 1024) {
                byteSize = round(byteSize * 100 / 1024) * 0.01;
                suffix = 'MB';
            }
            var sizeParts = byteSize.toString().split(String.fromCharCode(46));
            var value;
            if (sizeParts.length > 1) {
                value = sizeParts[0] + '.' + sizeParts[1].substr(0, 2);
            }
            else {
                value = sizeParts[0];
            }
            return value + ' ' + suffix;
        }
        UploadHelper.fileSizeDisplay = fileSizeDisplay;
        function hasImageExtension(filename) {
            if (isEmptyOrNull(filename)) {
                return false;
            }
            filename = filename.toLowerCase();
            return endsWith(filename, '.jpg') || endsWith(filename, '.jpeg') ||
                endsWith(filename, '.gif') || endsWith(filename, '.png');
        }
        UploadHelper.hasImageExtension = hasImageExtension;
        function thumbFileName(filename) {
            filename = filename !== null && filename !== void 0 ? filename : '';
            var idx = filename.lastIndexOf('.');
            if (idx >= 0) {
                filename = filename.substr(0, idx);
            }
            return filename + '_t.jpg';
        }
        UploadHelper.thumbFileName = thumbFileName;
        function dbFileUrl(filename) {
            filename = replaceAll(filename !== null && filename !== void 0 ? filename : '', '\\', '/');
            return resolveUrl('~/upload/') + filename;
        }
        UploadHelper.dbFileUrl = dbFileUrl;
        function colorBox(link, options) {
            link.colorbox({
                current: text('Controls.ImageUpload.ColorboxCurrent'),
                previous: text('Controls.ImageUpload.ColorboxPrior'),
                next: text('Controls.ImageUpload.ColorboxNext'),
                close: text('Controls.ImageUpload.ColorboxClose')
            });
        }
        UploadHelper.colorBox = colorBox;
        function populateFileSymbols(container, items, displayOriginalName, urlPrefix) {
            var _a;
            items = items || [];
            container.html('');
            for (var index = 0; index < items.length; index++) {
                var item = items[index];
                var li = $('<li/>').addClass('file-item').data('index', index);
                var isImage = hasImageExtension(item.Filename);
                if (isImage) {
                    li.addClass('file-image');
                }
                else {
                    li.addClass('file-binary');
                }
                var thumb = $('<a/>').addClass('thumb').appendTo(li);
                var originalName = (_a = item.OriginalName) !== null && _a !== void 0 ? _a : '';
                var fileName = item.Filename;
                if (urlPrefix != null && fileName != null &&
                    !startsWith(fileName, 'temporary/')) {
                    fileName = urlPrefix + fileName;
                }
                thumb.attr('href', dbFileUrl(fileName));
                thumb.attr('target', '_blank');
                if (!isEmptyOrNull(originalName)) {
                    thumb.attr('title', originalName);
                }
                if (isImage) {
                    thumb.css('backgroundImage', "url('" + dbFileUrl(thumbFileName(item.Filename)) + "')");
                    colorBox(thumb);
                }
                if (displayOriginalName) {
                    $('<div/>').addClass('filename').text(originalName)
                        .attr('title', originalName).appendTo(li);
                }
                li.appendTo(container);
            }
        }
        UploadHelper.populateFileSymbols = populateFileSymbols;
    })(UploadHelper || (UploadHelper = {}));

    var PopupMenuButton = /** @class */ (function (_super) {
        __extends(PopupMenuButton, _super);
        function PopupMenuButton(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-PopupMenuButton');
            div.click(function (e) {
                var _a, _b;
                e.preventDefault();
                e.stopPropagation();
                if (_this.options.onPopup != null) {
                    _this.options.onPopup();
                }
                var menu = _this.options.menu;
                menu.show().position({
                    my: (_a = _this.options.positionMy) !== null && _a !== void 0 ? _a : 'left top',
                    at: (_b = _this.options.positionAt) !== null && _b !== void 0 ? _b : 'left bottom',
                    of: _this.element
                });
                var uq = _this.uniqueName;
                $(document).one('click.' + uq, function (x) {
                    menu.hide();
                });
            });
            _this.options.menu.hide().appendTo(document.body)
                .addClass('s-PopupMenu').menu();
            return _this;
        }
        PopupMenuButton.prototype.destroy = function () {
            if (this.options.menu != null) {
                this.options.menu.remove();
                this.options.menu = null;
            }
            _super.prototype.destroy.call(this);
        };
        PopupMenuButton = __decorate([
            Decorators.registerEditor('Serenity.PopupMenuButton')
        ], PopupMenuButton);
        return PopupMenuButton;
    }(Widget));
    var PopupToolButton = /** @class */ (function (_super) {
        __extends(PopupToolButton, _super);
        function PopupToolButton(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-PopupToolButton');
            $('<b/>').appendTo(div.children('.button-outer').children('span'));
            return _this;
        }
        PopupToolButton = __decorate([
            Decorators.registerEditor('Serenity.PopupToolButton')
        ], PopupToolButton);
        return PopupToolButton;
    }(PopupMenuButton));
    var Toolbar = /** @class */ (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar(div, options) {
            var _this = _super.call(this, div, options) || this;
            _this.element.addClass('s-Toolbar clearfix')
                .html('<div class="tool-buttons"><div class="buttons-outer">' +
                '<div class="buttons-inner"></div></div></div>');
            var container = $('div.buttons-inner', _this.element);
            var buttons = _this.options.buttons;
            for (var i = 0; i < buttons.length; i++) {
                _this.createButton(container, buttons[i]);
            }
            return _this;
        }
        Toolbar.prototype.destroy = function () {
            this.element.find('div.tool-button').unbind('click');
            if (this.mouseTrap) {
                if (!!this.mouseTrap.destroy) {
                    this.mouseTrap.destroy();
                }
                else {
                    this.mouseTrap.reset();
                }
                this.mouseTrap = null;
            }
            _super.prototype.destroy.call(this);
        };
        Toolbar.prototype.createButton = function (container, b) {
            var _a;
            var cssClass = (_a = b.cssClass) !== null && _a !== void 0 ? _a : '';
            if (b.separator === true || b.separator === 'left' || b.separator === 'both') {
                $('<div class="separator"></div>').appendTo(container);
            }
            var btn = $('<div class="tool-button"><div class="button-outer">' +
                '<span class="button-inner"></span></div></div>')
                .appendTo(container);
            if (b.separator === 'right' || b.separator === 'both') {
                $('<div class="separator"></div>').appendTo(container);
            }
            if (cssClass.length > 0) {
                btn.addClass(cssClass);
            }
            if (!isEmptyOrNull(b.hint)) {
                btn.attr('title', b.hint);
            }
            btn.click(function (e) {
                if (btn.hasClass('disabled')) {
                    return;
                }
                b.onClick(e);
            });
            var text = b.title;
            if (b.htmlEncode !== false) {
                text = htmlEncode(b.title);
            }
            if (!isEmptyOrNull(b.icon)) {
                btn.addClass('icon-tool-button');
                var klass = b.icon;
                if (startsWith(klass, 'fa-')) {
                    klass = 'fa ' + klass;
                }
                else if (startsWith(klass, 'glyphicon-')) {
                    klass = 'glyphicon ' + klass;
                }
                text = "<i class='" + klass + "'></i> " + text;
            }
            if (text == null || text.length === 0) {
                btn.addClass('no-text');
            }
            else {
                btn.find('span').html(text);
            }
            if (b.visible === false)
                btn.hide();
            if (b.disabled != null && typeof b.disabled !== "function")
                btn.toggleClass('disabled', !!b.disabled);
            if (typeof b.visible === "function" || typeof b.disabled == "function") {
                btn.on('updateInterface', function () {
                    if (typeof b.visible === "function")
                        btn.toggle(!!b.visible());
                    if (typeof b.disabled === "function")
                        btn.toggleClass("disabled", !!b.disabled());
                });
            }
            if (!!(!isEmptyOrNull(b.hotkey) && window['Mousetrap'] != null)) {
                this.mouseTrap = this.mouseTrap || window['Mousetrap'](b.hotkeyContext || this.options.hotkeyContext || window.document.documentElement);
                this.mouseTrap.bind(b.hotkey, function (e1, action) {
                    if (btn.is(':visible')) {
                        btn.triggerHandler('click');
                    }
                    return b.hotkeyAllowDefault;
                });
            }
        };
        Toolbar.prototype.findButton = function (className) {
            if (className != null && startsWith(className, '.')) {
                className = className.substr(1);
            }
            return $('div.tool-button.' + className, this.element);
        };
        Toolbar.prototype.updateInterface = function () {
            this.element.find('.tool-button').each(function (i, el) {
                $(el).triggerHandler('updateInterface');
            });
        };
        Toolbar = __decorate([
            Decorators.registerClass('Serenity.Toolbar')
        ], Toolbar);
        return Toolbar;
    }(Widget));

    var EditorUtils;
    (function (EditorUtils) {
        function getDisplayText(editor) {
            var _a, _b, _c;
            var select2 = editor.element.data('select2');
            if (select2 != null) {
                var data = editor.element.select2('data');
                if (data == null)
                    return '';
                return (_a = data.text) !== null && _a !== void 0 ? _a : '';
            }
            var value = getValue(editor);
            if (value == null) {
                return '';
            }
            if (typeof value === "string")
                return value;
            if (value instanceof Boolean)
                return (!!value ? ((_b = tryGetText('Controls.FilterPanel.OperatorNames.true')) !== null && _b !== void 0 ? _b : 'True') :
                    ((_c = tryGetText('Controls.FilterPanel.OperatorNames.true')) !== null && _c !== void 0 ? _c : 'False'));
            return value.toString();
        }
        EditorUtils.getDisplayText = getDisplayText;
        var dummy = { name: '_' };
        function getValue(editor) {
            var target = {};
            saveValue(editor, dummy, target);
            return target['_'];
        }
        EditorUtils.getValue = getValue;
        function saveValue(editor, item, target) {
            var getEditValue = safeCast(editor, IGetEditValue);
            if (getEditValue != null) {
                getEditValue.getEditValue(item, target);
                return;
            }
            var stringValue = safeCast(editor, IStringValue);
            if (stringValue != null) {
                target[item.name] = stringValue.get_value();
                return;
            }
            var booleanValue = safeCast(editor, IBooleanValue);
            if (booleanValue != null) {
                target[item.name] = booleanValue.get_value();
                return;
            }
            var doubleValue = safeCast(editor, IDoubleValue);
            if (doubleValue != null) {
                var value = doubleValue.get_value();
                target[item.name] = (isNaN(value) ? null : value);
                return;
            }
            if (editor.getEditValue != null) {
                editor.getEditValue(item, target);
                return;
            }
            if (editor.element.is(':input')) {
                target[item.name] = editor.element.val();
                return;
            }
        }
        EditorUtils.saveValue = saveValue;
        function setValue(editor, value) {
            var source = { _: value };
            loadValue(editor, dummy, source);
        }
        EditorUtils.setValue = setValue;
        function loadValue(editor, item, source) {
            var setEditValue = safeCast(editor, ISetEditValue);
            if (setEditValue != null) {
                setEditValue.setEditValue(source, item);
                return;
            }
            var stringValue = safeCast(editor, IStringValue);
            if (stringValue != null) {
                var value = source[item.name];
                if (value != null) {
                    value = value.toString();
                }
                stringValue.set_value(cast(value, String));
                return;
            }
            var booleanValue = safeCast(editor, IBooleanValue);
            if (booleanValue != null) {
                var value1 = source[item.name];
                if (typeof (value1) === 'number') {
                    booleanValue.set_value(value1 > 0);
                }
                else {
                    booleanValue.set_value(!!value1);
                }
                return;
            }
            var doubleValue = safeCast(editor, IDoubleValue);
            if (doubleValue != null) {
                var d = source[item.name];
                if (!!(d == null || isInstanceOfType(d, String) && isTrimmedEmpty(cast(d, String)))) {
                    doubleValue.set_value(null);
                }
                else if (isInstanceOfType(d, String)) {
                    doubleValue.set_value(cast(parseDecimal(cast(d, String)), Number));
                }
                else if (isInstanceOfType(d, Boolean)) {
                    doubleValue.set_value((!!d ? 1 : 0));
                }
                else {
                    doubleValue.set_value(cast(d, Number));
                }
                return;
            }
            if (editor.setEditValue != null) {
                editor.setEditValue(source, item);
                return;
            }
            if (editor.element.is(':input')) {
                var v = source[item.name];
                if (v == null) {
                    editor.element.val('');
                }
                else {
                    editor.element.val(v);
                }
                return;
            }
        }
        EditorUtils.loadValue = loadValue;
        function setReadonly(elements, isReadOnly) {
            elements.each(function (index, el) {
                var elx = $(el);
                var type = elx.attr('type');
                if (elx.is('select') || type === 'radio' || type === 'checkbox') {
                    if (isReadOnly) {
                        elx.addClass('readonly').attr('disabled', 'disabled');
                    }
                    else {
                        elx.removeClass('readonly').removeAttr('disabled');
                    }
                }
                else if (isReadOnly) {
                    elx.addClass('readonly').attr('readonly', 'readonly');
                }
                else {
                    elx.removeClass('readonly').removeAttr('readonly');
                }
                return true;
            });
            return elements;
        }
        EditorUtils.setReadonly = setReadonly;
        function setReadOnly(widget, isReadOnly) {
            var readOnly = safeCast(widget, IReadOnly);
            if (readOnly != null) {
                readOnly.set_readOnly(isReadOnly);
            }
            else if (widget.element.is(':input')) {
                setReadonly(widget.element, isReadOnly);
            }
        }
        EditorUtils.setReadOnly = setReadOnly;
        function setRequired(widget, isRequired) {
            var req = safeCast(widget, IValidateRequired);
            if (req != null) {
                req.set_required(isRequired);
            }
            else if (widget.element.is(':input')) {
                widget.element.toggleClass('required', !!isRequired);
            }
            var gridField = widget.element.closest('.field');
            var hasSupItem = gridField.find('sup').get().length > 0;
            if (isRequired && !hasSupItem) {
                $('<sup>*</sup>').attr('title', text('Controls.PropertyGrid.RequiredHint'))
                    .prependTo(gridField.find('.caption')[0]);
            }
            else if (!isRequired && hasSupItem) {
                $(gridField.find('sup')[0]).remove();
            }
        }
        EditorUtils.setRequired = setRequired;
        function setContainerReadOnly(container, readOnly) {
            if (!readOnly) {
                if (!container.hasClass('readonly-container'))
                    return;
                container.removeClass('readonly-container').find(".editor.container-readonly")
                    .removeClass('container-readonly').each(function (i, e) {
                    var w = $(e).tryGetWidget(Widget);
                    if (w != null)
                        EditorUtils.setReadOnly(w, false);
                    else
                        EditorUtils.setReadonly($(e), false);
                });
                return;
            }
            container.addClass('readonly-container').find(".editor")
                .not('.container-readonly')
                .each(function (i, e) {
                var w = $(e).tryGetWidget(Widget);
                if (w != null) {
                    if (w['get_readOnly']) {
                        if (w['get_readOnly']())
                            return;
                    }
                    else if ($(e).is('[readonly]') || $(e).is('[disabled]') || $(e).is('.readonly') || $(e).is('.disabled'))
                        return;
                    $(e).addClass('container-readonly');
                    EditorUtils.setReadOnly(w, true);
                }
                else {
                    if ($(e).is('[readonly]') || $(e).is('[disabled]') || $(e).is('.readonly') || $(e).is('.disabled'))
                        return;
                    EditorUtils.setReadonly($(e).addClass('container-readonly'), true);
                }
            });
        }
        EditorUtils.setContainerReadOnly = setContainerReadOnly;
    })(EditorUtils || (EditorUtils = {}));

    var CascadedWidgetLink = /** @class */ (function () {
        function CascadedWidgetLink(parentType, widget, parentChange) {
            var _this = this;
            this.parentType = parentType;
            this.widget = widget;
            this.parentChange = parentChange;
            this.bind();
            this.widget.element.bind('remove.' + widget.uniqueName + 'cwh', function (e) {
                _this.unbind();
                _this.widget = null;
                _this.parentChange = null;
            });
        }
        CascadedWidgetLink.prototype.bind = function () {
            var _this = this;
            if (isEmptyOrNull(this._parentID)) {
                return null;
            }
            var parent = findElementWithRelativeId(this.widget.element, this._parentID)
                .tryGetWidget(this.parentType);
            if (parent != null) {
                parent.element.bind('change.' + this.widget.uniqueName, function () {
                    _this.parentChange(parent);
                });
                return parent;
            }
            else {
                notifyError("Can't find cascaded parent element with ID: " + this._parentID + '!', '', null);
                return null;
            }
        };
        CascadedWidgetLink.prototype.unbind = function () {
            if (isEmptyOrNull(this._parentID)) {
                return null;
            }
            var parent = findElementWithRelativeId(this.widget.element, this._parentID).tryGetWidget(this.parentType);
            if (parent != null) {
                parent.element.unbind('.' + this.widget.uniqueName);
            }
            return parent;
        };
        CascadedWidgetLink.prototype.get_parentID = function () {
            return this._parentID;
        };
        CascadedWidgetLink.prototype.set_parentID = function (value) {
            if (this._parentID !== value) {
                this.unbind();
                this._parentID = value;
                this.bind();
            }
        };
        CascadedWidgetLink = __decorate([
            Decorators.registerClass('Serenity.CascadedWidgetLink')
        ], CascadedWidgetLink);
        return CascadedWidgetLink;
    }());

    var ValidationHelper;
    (function (ValidationHelper) {
        function asyncSubmit(form, validateBeforeSave, submitHandler) {
            var validator = form.validate();
            var valSettings = validator.settings;
            if (valSettings.abortHandler) {
                return false;
            }
            if (validateBeforeSave != null && validateBeforeSave() === false) {
                return false;
            }
            valSettings['abortHandler'] = validatorAbortHandler;
            valSettings['submitHandler'] = function () {
                if (submitHandler != null) {
                    submitHandler();
                }
                return false;
            };
            form.trigger('submit');
            return true;
        }
        ValidationHelper.asyncSubmit = asyncSubmit;
        function submit(form, validateBeforeSave, submitHandler) {
            var validator = form.validate();
            var valSettings = validator.settings;
            if (valSettings.abortHandler != null) {
                return false;
            }
            if (validateBeforeSave != null && validateBeforeSave() === false) {
                return false;
            }
            if (!validator.form()) {
                return false;
            }
            if (submitHandler != null) {
                submitHandler();
            }
            return true;
        }
        ValidationHelper.submit = submit;
        function getValidator(element) {
            var form = element.closest('form');
            if (form.length === 0) {
                return null;
            }
            return form.data('validator');
        }
        ValidationHelper.getValidator = getValidator;
    })(ValidationHelper || (ValidationHelper = {}));
    var VX;
    (function (VX) {
        function addValidationRule(element, eventClass, rule) {
            if (!element.length)
                return element;
            if (rule == null)
                throw new Exception('rule is null!');
            element.addClass('customValidate').bind('customValidate.' + eventClass, rule);
            return element;
        }
        VX.addValidationRule = addValidationRule;
        function removeValidationRule(element, eventClass) {
            element.unbind('customValidate.' + eventClass);
            return element;
        }
        VX.removeValidationRule = removeValidationRule;
        function validateElement(validator, widget) {
            return validator.element(widget.element[0]);
        }
        VX.validateElement = validateElement;
    })(VX || (VX = {}));

    var TemplatedPanel = /** @class */ (function (_super) {
        __extends(TemplatedPanel, _super);
        function TemplatedPanel(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.initValidator();
            _this.initTabs();
            _this.initToolbar();
            return _this;
        }
        TemplatedPanel.prototype.destroy = function () {
            if (this.tabs) {
                this.tabs.tabs('destroy');
                this.tabs = null;
            }
            if (this.toolbar) {
                this.toolbar.destroy();
                this.toolbar = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        TemplatedPanel.prototype.arrange = function () {
            this.element.find('.require-layout').filter(':visible').each(function (i, e) {
                $(e).triggerHandler('layout');
            });
        };
        TemplatedPanel.prototype.getToolbarButtons = function () {
            return [];
        };
        TemplatedPanel.prototype.getValidatorOptions = function () {
            return {};
        };
        TemplatedPanel.prototype.initTabs = function () {
            var tabsDiv = this.byId('Tabs');
            if (tabsDiv.length === 0) {
                return;
            }
            this.tabs = tabsDiv.tabs({});
        };
        TemplatedPanel.prototype.initToolbar = function () {
            var toolbarDiv = this.byId('Toolbar');
            if (toolbarDiv.length === 0) {
                return;
            }
            var opt = { buttons: this.getToolbarButtons() };
            this.toolbar = new Toolbar(toolbarDiv, opt);
        };
        TemplatedPanel.prototype.initValidator = function () {
            var form = this.byId('Form');
            if (form.length > 0) {
                var valOptions = this.getValidatorOptions();
                this.validator = form.validate(validateOptions(valOptions));
            }
        };
        TemplatedPanel.prototype.resetValidation = function () {
            if (this.validator) {
                this.validator.resetAll();
            }
        };
        TemplatedPanel.prototype.validateForm = function () {
            return this.validator == null || !!this.validator.form();
        };
        return TemplatedPanel;
    }(TemplatedWidget));

    var TabsExtensions;
    (function (TabsExtensions) {
        function setDisabled(tabs, tabKey, isDisabled) {
            if (!tabs)
                return;
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (isDisabled && index === tabs.tabs('option', 'active')) {
                tabs.tabs('option', 'active', 0);
            }
            tabs.tabs(isDisabled ? 'disable' : 'enable', index);
        }
        TabsExtensions.setDisabled = setDisabled;
        function toggle(tabs, tabKey, visible) {
            if (!tabs)
                return;
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (!visible && index === tabs.tabs('option', 'active')) {
                tabs.tabs('option', 'active', 0);
            }
            tabs.children('ul').children('li').eq(index).toggle(visible);
        }
        TabsExtensions.toggle = toggle;
        function activeTabKey(tabs) {
            var href = tabs.children('ul')
                .children('li')
                .eq(tabs.tabs('option', 'active'))
                .children('a')
                .attr('href')
                .toString();
            var prefix = '_Tab';
            var lastIndex = href.lastIndexOf(prefix);
            if (lastIndex >= 0) {
                href = href.substr(lastIndex + prefix.length);
            }
            return href;
        }
        TabsExtensions.activeTabKey = activeTabKey;
        function indexByKey(tabs) {
            var indexByKey = tabs.data('indexByKey');
            if (!indexByKey) {
                indexByKey = {};
                tabs.children('ul').children('li').children('a').each(function (index, el) {
                    var href = el.getAttribute('href').toString();
                    var prefix = '_Tab';
                    var lastIndex = href.lastIndexOf(prefix);
                    if (lastIndex >= 0) {
                        href = href.substr(lastIndex + prefix.length);
                    }
                    indexByKey[href] = index;
                });
                tabs.data('indexByKey', indexByKey);
            }
            return indexByKey;
        }
        TabsExtensions.indexByKey = indexByKey;
        function selectTab(tabs, tabKey) {
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (index !== tabs.tabs('option', 'active')) {
                tabs.tabs('option', 'active', index);
            }
        }
        TabsExtensions.selectTab = selectTab;
    })(TabsExtensions || (TabsExtensions = {}));

    var ReflectionOptionsSetter;
    (function (ReflectionOptionsSetter) {
        function set(target, options) {
            if (options == null) {
                return;
            }
            var type = getInstanceType(target);
            if (type === Object) {
                return;
            }
            var propByName = type.__propByName;
            var fieldByName = type.__fieldByName;
            if (propByName == null) {
                var props = getMembers(type, 16 /* property */);
                var propList = props.filter(function (x) {
                    return !!x.setter && ((x.attr || []).filter(function (a) {
                        return isInstanceOfType(a, OptionAttribute);
                    }).length > 0 || (x.attr || []).filter(function (a) {
                        return isInstanceOfType(a, DisplayNameAttribute);
                    }).length > 0);
                });
                propByName = {};
                for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
                    var k = propList_1[_i];
                    propByName[ReflectionUtils.makeCamelCase(k.name)] = k;
                }
                type.__propByName = propByName;
            }
            if (fieldByName == null) {
                var fields = getMembers(type, 4 /* field */);
                var fieldList = fields.filter(function (x1) {
                    return (x1.attr || []).filter(function (a) {
                        return isInstanceOfType(a, OptionAttribute);
                    }).length > 0 || (x1.attr || []).filter(function (a) {
                        return isInstanceOfType(a, DisplayNameAttribute);
                    }).length > 0;
                });
                fieldByName = {};
                for (var $t2 = 0; $t2 < fieldList.length; $t2++) {
                    var k1 = fieldList[$t2];
                    fieldByName[ReflectionUtils.makeCamelCase(k1.name)] = k1;
                }
                type.__fieldByName = fieldByName;
            }
            var keys = Object.keys(options);
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var k2 = keys_1[_a];
                var v = options[k2];
                var cc = ReflectionUtils.makeCamelCase(k2);
                var p = propByName[cc] || propByName[k2];
                if (p != null) {
                    var func = target[p.setter];
                    func && func.call(target, v);
                }
                else {
                    var f = fieldByName[cc] || fieldByName[k2];
                    f && (target[f.name] = v);
                }
            }
        }
        ReflectionOptionsSetter.set = set;
    })(ReflectionOptionsSetter || (ReflectionOptionsSetter = {}));

    var PropertyGrid = /** @class */ (function (_super) {
        __extends(PropertyGrid, _super);
        function PropertyGrid(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.categoryLinkClick = function (e) {
                e.preventDefault();
                var title = $('a[name=' + e.target.getAttribute('href')
                    .toString().substr(1) + ']');
                if (title.closest('.category').hasClass('collapsed'))
                    title.closest('.category').children('.category-title').click();
                var animate = function () {
                    title.fadeTo(100, 0.5, function () {
                        title.fadeTo(100, 1, function () {
                        });
                    });
                };
                var intoView = title.closest('.category');
                if (intoView.closest(':scrollable(both)').length === 0)
                    animate();
                else {
                    intoView.scrollintoview({
                        duration: 'fast',
                        direction: 'y',
                        complete: animate
                    });
                }
            };
            if (opt.mode == null)
                opt.mode = 1;
            div.addClass('s-PropertyGrid');
            _this.editors = [];
            var items = _this.options.items || [];
            _this.items = [];
            var useTabs = any(items, function (x) {
                return !isEmptyOrNull(x.tab);
            });
            if (useTabs) {
                var itemsWithoutTab = items.filter(function (f) { return isEmptyOrNull(f.tab); });
                if (itemsWithoutTab.length > 0) {
                    _this.createItems(_this.element, itemsWithoutTab);
                    $("<div class='pad'></div>").appendTo(_this.element);
                }
                var itemsWithTab = items.filter(function (f) { return !isEmptyOrNull(f.tab); });
                var ul = $("<ul class='nav nav-tabs property-tabs' role='tablist'></ul>")
                    .appendTo(_this.element);
                var tc = $("<div class='tab-content property-panes'></div>")
                    .appendTo(_this.element);
                var tabIndex = 0;
                var i = 0;
                while (i < itemsWithTab.length) {
                    var tab = { $: trimToEmpty(itemsWithTab[i].tab) };
                    var tabItems = [];
                    var j = i;
                    do {
                        tabItems.push(itemsWithTab[j]);
                    } while (++j < itemsWithTab.length &&
                        trimToEmpty(itemsWithTab[j].tab) === tab.$);
                    i = j;
                    var li = $(isBS3() ? '<li><a data-toggle="tab" role="tab"></a></li>' :
                        '<li class="nav-item"><a class="nav-link" data-toggle="tab" role="tab"></a></li>')
                        .appendTo(ul);
                    if (tabIndex === 0) {
                        if (isBS3())
                            li.addClass('active');
                        else
                            li.children('a').addClass('active');
                    }
                    var tabID = _this.uniqueName + '_Tab' + tabIndex;
                    li.children('a').attr('href', '#' + tabID)
                        .text(_this.determineText(tab.$, function (prefix) {
                        return prefix + 'Tabs.' + this.tab.$;
                    }.bind({
                        tab: tab
                    })));
                    var pane = $("<div class='tab-pane fade' role='tabpanel'>")
                        .appendTo(tc);
                    if (tabIndex === 0) {
                        pane.addClass(isBS3() ? 'in active' : 'show active');
                    }
                    pane.attr('id', tabID);
                    _this.createItems(pane, tabItems);
                    tabIndex++;
                }
            }
            else {
                _this.createItems(_this.element, items);
            }
            _this.updateInterface();
            return _this;
        }
        PropertyGrid_1 = PropertyGrid;
        PropertyGrid.prototype.destroy = function () {
            if (this.editors != null) {
                for (var i = 0; i < this.editors.length; i++) {
                    this.editors[i].destroy();
                }
                this.editors = null;
            }
            this.element.find('a.category-link').unbind('click', this.categoryLinkClick).remove();
            Widget.prototype.destroy.call(this);
        };
        PropertyGrid.prototype.createItems = function (container, items) {
            var _a, _b;
            var categoryIndexes = {};
            var categoriesDiv = container;
            var useCategories = this.options.useCategories !== false && any(items, function (x) {
                return !isEmptyOrNull(x.category);
            });
            if (useCategories) {
                var linkContainer = $('<div/>').addClass('category-links');
                categoryIndexes = this.createCategoryLinks(linkContainer, items);
                if (Object.keys(categoryIndexes).length > 1) {
                    linkContainer.appendTo(container);
                }
                else {
                    linkContainer.find('a.category-link').unbind('click', this.categoryLinkClick).remove();
                }
            }
            categoriesDiv = $('<div/>').addClass('categories').appendTo(container);
            var fieldContainer;
            if (useCategories) {
                fieldContainer = categoriesDiv;
            }
            else {
                fieldContainer = $('<div/>').addClass('category').appendTo(categoriesDiv);
            }
            var priorCategory = null;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var category = item.category;
                if (category == null) {
                    category = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                if (useCategories && priorCategory !== category) {
                    var categoryDiv = this.createCategoryDiv(categoriesDiv, categoryIndexes, category, ((item.collapsible !== true) ? null : (_b = item.collapsed) !== null && _b !== void 0 ? _b : false));
                    if (priorCategory == null) {
                        categoryDiv.addClass('first-category');
                    }
                    priorCategory = category;
                    fieldContainer = categoryDiv;
                }
                var editor = this.createField(fieldContainer, item);
                this.items.push(item);
                this.editors.push(editor);
            }
        };
        PropertyGrid.prototype.createCategoryDiv = function (categoriesDiv, categoryIndexes, category, collapsed) {
            var categoryDiv = $('<div/>').addClass('category')
                .appendTo(categoriesDiv);
            var title = $('<div/>').addClass('category-title')
                .append($('<a/>').addClass('category-anchor')
                .text(this.determineText(category, function (prefix) {
                return prefix + 'Categories.' + category;
            }))
                .attr('name', this.options.idPrefix +
                'Category' + categoryIndexes[category].toString()))
                .appendTo(categoryDiv);
            if (collapsed != null) {
                categoryDiv.addClass(((collapsed === true) ?
                    'collapsible collapsed' : 'collapsible'));
                var img = $('<i/>').addClass(((collapsed === true) ?
                    'fa fa-plus' : 'fa fa-minus')).appendTo(title);
                title.click(function (e) {
                    categoryDiv.toggleClass('collapsed');
                    img.toggleClass('fa-plus').toggleClass('fa-minus');
                });
            }
            return categoryDiv;
        };
        PropertyGrid.prototype.determineText = function (text, getKey) {
            if (text != null && !startsWith(text, '`')) {
                var local = tryGetText(text);
                if (local != null) {
                    return local;
                }
            }
            if (text != null && startsWith(text, '`')) {
                text = text.substr(1);
            }
            if (!isEmptyOrNull(this.options.localTextPrefix)) {
                var local1 = tryGetText(getKey(this.options.localTextPrefix));
                if (local1 != null) {
                    return local1;
                }
            }
            return text;
        };
        PropertyGrid.prototype.createField = function (container, item) {
            var _a, _b;
            var fieldDiv = $('<div/>').addClass('field')
                .addClass(item.name).data('PropertyItem', item).appendTo(container);
            if (!isEmptyOrNull(item.cssClass)) {
                fieldDiv.addClass(item.cssClass);
            }
            if (!isEmptyOrNull(item.formCssClass)) {
                fieldDiv.addClass(item.formCssClass);
                if (item.formCssClass.indexOf('line-break-') >= 0) {
                    var splitted = item.formCssClass.split(String.fromCharCode(32));
                    if (splitted.indexOf('line-break-xs') >= 0) {
                        $("<div class='line-break' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-sm') >= 0) {
                        $("<div class='line-break hidden-xs' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-md') >= 0) {
                        $("<div class='line-break hidden-sm' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-lg') >= 0) {
                        $("<div class='line-break hidden-md' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                }
            }
            var editorId = this.options.idPrefix + item.name;
            var title = this.determineText(item.title, function (prefix) {
                return prefix + item.name;
            });
            var hint = this.determineText(item.hint, function (prefix1) {
                return prefix1 + item.name + '_Hint';
            });
            var placeHolder = this.determineText(item.placeholder, function (prefix2) {
                return prefix2 + item.name + '_Placeholder';
            });
            if (hint == null) {
                hint = title !== null && title !== void 0 ? title : '';
            }
            var label = $('<label/>')
                .addClass('caption').attr('for', editorId)
                .attr('title', hint).html(title !== null && title !== void 0 ? title : '')
                .appendTo(fieldDiv);
            if (!isEmptyOrNull(item.labelWidth)) {
                if (item.labelWidth === '0') {
                    label.hide();
                }
                else {
                    label.css('width', item.labelWidth);
                }
            }
            if (item.required === true) {
                $('<sup>*</sup>').attr('title', text('Controls.PropertyGrid.RequiredHint'))
                    .prependTo(label);
            }
            var editorType = EditorTypeRegistry
                .get((_a = item.editorType) !== null && _a !== void 0 ? _a : 'String');
            var elementAttr = getAttributes(editorType, ElementAttribute, true);
            var elementHtml = ((elementAttr.length > 0) ?
                elementAttr[0].value : '<input/>');
            var element = Widget.elementFor(editorType)
                .addClass('editor')
                .attr('id', editorId).appendTo(fieldDiv);
            if (element.is(':input')) {
                element.attr('name', (_b = item.name) !== null && _b !== void 0 ? _b : '');
            }
            if (!isEmptyOrNull(placeHolder)) {
                element.attr('placeholder', placeHolder);
            }
            var editorParams = item.editorParams;
            var optionsType = null;
            var optionsAttr = getAttributes(editorType, OptionsTypeAttribute, true);
            if (optionsAttr != null && optionsAttr.length > 0) {
                optionsType = optionsAttr[0].optionsType;
            }
            var editor;
            if (optionsType != null) {
                editorParams = extend(new optionsType(), item.editorParams);
                editor = new editorType(element, editorParams);
            }
            else {
                editorParams = extend(new Object(), item.editorParams);
                editor = new editorType(element, editorParams);
            }
            editor.initialize();
            if (getTypeName(editor) == "BooleanEditor" &&
                (item.editorParams == null || !!!item.editorParams['labelFor'])) {
                label.removeAttr('for');
            }
            if (getTypeName(editor) == "RadioButtonEditor" &&
                (item.editorParams == null || !!!item.editorParams['labelFor'])) {
                label.removeAttr('for');
            }
            if (item.maxLength != null) {
                PropertyGrid_1.setMaxLength(editor, item.maxLength);
            }
            if (item.editorParams != null) {
                ReflectionOptionsSetter.set(editor, item.editorParams);
            }
            $('<div/>').addClass('vx').appendTo(fieldDiv);
            $('<div/>').addClass('clear').appendTo(fieldDiv);
            return editor;
        };
        PropertyGrid.prototype.getCategoryOrder = function (items) {
            var _a;
            var order = 0;
            var result = {};
            var categoryOrder = trimToNull(this.options.categoryOrder);
            if (categoryOrder != null) {
                var split = categoryOrder.split(';');
                for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                    var s = split_1[_i];
                    var x = trimToNull(s);
                    if (x == null) {
                        continue;
                    }
                    if (result[x] != null) {
                        continue;
                    }
                    result[x] = order++;
                }
            }
            for (var _b = 0, items_1 = items; _b < items_1.length; _b++) {
                var x1 = items_1[_b];
                var category = x1.category;
                if (category == null) {
                    category = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                if (result[category] == null) {
                    result[category] = order++;
                }
            }
            return result;
        };
        PropertyGrid.prototype.createCategoryLinks = function (container, items) {
            var _a;
            var idx = 0;
            var itemIndex = {};
            var itemCategory = {};
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var x = items_2[_i];
                var name1 = x.name;
                var cat1 = x.category;
                if (cat1 == null) {
                    cat1 = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                itemCategory[name1] = cat1;
                itemIndex[x.name] = idx++;
            }
            var categoryOrder = this.getCategoryOrder(items);
            items.sort(function (x1, y) {
                var c = 0;
                var xcategory = itemCategory[x1.name];
                var ycategory = itemCategory[y.name];
                if (xcategory != ycategory) {
                    var c1 = categoryOrder[xcategory];
                    var c2 = categoryOrder[ycategory];
                    if (c1 != null && c2 != null) {
                        c = c1 - c2;
                    }
                    else if (c1 != null) {
                        c = -1;
                    }
                    else if (c2 != null) {
                        c = 1;
                    }
                }
                if (c === 0) {
                    c = Culture.stringCompare(xcategory, ycategory);
                }
                if (c === 0) {
                    c = itemIndex[x1.name] < itemIndex[y.name] ? -1 : (itemIndex[x1.name] > itemIndex[y.name] ? 1 : 0);
                }
                return c;
            });
            var categoryIndexes = {};
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var category = { $: itemCategory[item.name] };
                if (categoryIndexes[category.$] == null) {
                    var index = Object.keys(categoryIndexes).length + 1;
                    categoryIndexes[category.$] = index;
                    if (index > 1) {
                        $('<span/>').addClass('separator').text('|').prependTo(container);
                    }
                    $('<a/>').addClass('category-link').text(this.determineText(category.$, function (prefix) {
                        return prefix + 'Categories.' + this.category.$;
                    }.bind({ category: category })))
                        .attr('tabindex', '-1')
                        .attr('href', '#' + this.options.idPrefix +
                        'Category' + index.toString())
                        .click(this.categoryLinkClick)
                        .prependTo(container);
                }
            }
            $('<div/>').addClass('clear').appendTo(container);
            return categoryIndexes;
        };
        PropertyGrid.prototype.get_editors = function () {
            return this.editors;
        };
        PropertyGrid.prototype.get_items = function () {
            return this.items;
        };
        PropertyGrid.prototype.get_idPrefix = function () {
            return this.options.idPrefix;
        };
        PropertyGrid.prototype.get_mode = function () {
            return this.options.mode;
        };
        PropertyGrid.prototype.set_mode = function (value) {
            if (this.options.mode !== value) {
                this.options.mode = value;
                this.updateInterface();
            }
        };
        // Obsolete
        PropertyGrid.loadEditorValue = function (editor, item, source) {
        };
        // Obsolete
        PropertyGrid.saveEditorValue = function (editor, item, target) {
            EditorUtils.saveValue(editor, item, target);
        };
        // Obsolete
        PropertyGrid.setReadOnly = function (widget, isReadOnly) {
            EditorUtils.setReadOnly(widget, isReadOnly);
        };
        // Obsolete
        PropertyGrid.setReadonly = function (elements, isReadOnly) {
            return EditorUtils.setReadonly(elements, isReadOnly);
        };
        // Obsolete
        PropertyGrid.setRequired = function (widget, isRequired) {
            EditorUtils.setRequired(widget, isRequired);
        };
        PropertyGrid.setMaxLength = function (widget, maxLength) {
            if (widget.element.is(':input')) {
                if (maxLength > 0) {
                    widget.element.attr('maxlength', maxLength);
                }
                else {
                    widget.element.removeAttr('maxlength');
                }
            }
        };
        PropertyGrid.prototype.load = function (source) {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                if (!!(this.get_mode() === 1 && item.defaultValue != null) &&
                    typeof (source[item.name]) === 'undefined') {
                    source[item.name] = item.defaultValue;
                }
                EditorUtils.loadValue(editor, item, source);
            }
        };
        PropertyGrid.prototype.save = function (target) {
            if (target == null)
                target = Object.create(null);
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                if (item.oneWay !== true && this.canModifyItem(item)) {
                    var editor = this.editors[i];
                    EditorUtils.saveValue(editor, item, target);
                }
            }
            return target;
        };
        Object.defineProperty(PropertyGrid.prototype, "value", {
            get: function () {
                return this.save();
            },
            set: function (val) {
                if (val == null)
                    val = Object.create(null);
                this.load(val);
            },
            enumerable: false,
            configurable: true
        });
        PropertyGrid.prototype.canModifyItem = function (item) {
            if (this.get_mode() === 1 /* insert */) {
                if (item.insertable === false) {
                    return false;
                }
                if (item.insertPermission == null) {
                    return true;
                }
                return Authorization.hasPermission(item.insertPermission);
            }
            else if (this.get_mode() === 2 /* update */) {
                if (item.updatable === false) {
                    return false;
                }
                if (item.updatePermission == null) {
                    return true;
                }
                return Authorization.hasPermission(item.updatePermission);
            }
            return true;
        };
        PropertyGrid.prototype.updateInterface = function () {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                var readOnly = item.readOnly === true || !this.canModifyItem(item);
                EditorUtils.setReadOnly(editor, readOnly);
                EditorUtils.setRequired(editor, !readOnly &&
                    !!item.required && item.editorType !== 'Boolean');
                if (item.visible === false || item.readPermission != null ||
                    item.insertPermission != null || item.updatePermission != null ||
                    item.hideOnInsert === true || item.hideOnUpdate === true) {
                    var hidden = (item.readPermission != null &&
                        !Authorization.hasPermission(item.readPermission)) ||
                        item.visible === false ||
                        (this.get_mode() === 1 /* insert */ && item.hideOnInsert === true) ||
                        (this.get_mode() === 2 && item.hideOnUpdate === true);
                    editor.getGridField().toggle(!hidden);
                }
            }
        };
        PropertyGrid.prototype.enumerateItems = function (callback) {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                callback(item, editor);
            }
        };
        var PropertyGrid_1;
        PropertyGrid = PropertyGrid_1 = __decorate([
            Decorators.registerClass('Serenity.PropertyGrid')
        ], PropertyGrid);
        return PropertyGrid;
    }(Widget));

    var PropertyPanel = /** @class */ (function (_super) {
        __extends(PropertyPanel, _super);
        function PropertyPanel(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.initPropertyGrid();
            _this.loadInitialEntity();
            return _this;
        }
        PropertyPanel.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        PropertyPanel.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-Panel').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        PropertyPanel.prototype.loadInitialEntity = function () {
            if (this.propertyGrid) {
                this.propertyGrid.load(new Object());
            }
        };
        PropertyPanel.prototype.getFormKey = function () {
            var attributes = getAttributes(getInstanceType(this), FormKeyAttribute, true);
            if (attributes.length >= 1) {
                return attributes[0].value;
            }
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0) {
                name = name.substring(px + 1);
            }
            if (endsWith(name, 'Panel')) {
                name = name.substr(0, name.length - 6);
            }
            else if (endsWith(name, 'Panel')) {
                name = name.substr(0, name.length - 5);
            }
            return name;
        };
        PropertyPanel.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: 1,
                useCategories: false,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.'
            };
        };
        PropertyPanel.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            return getForm(formKey);
        };
        PropertyPanel.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid) {
                this.propertyGrid.save(entity);
            }
            return entity;
        };
        PropertyPanel.prototype.get_entity = function () {
            return this._entity;
        };
        PropertyPanel.prototype.get_entityId = function () {
            return this._entityId;
        };
        PropertyPanel.prototype.set_entity = function (value) {
            this._entity = value !== null && value !== void 0 ? value : new Object();
        };
        PropertyPanel.prototype.set_entityId = function (value) {
            this._entityId = value;
        };
        PropertyPanel.prototype.validateBeforeSave = function () {
            return this.validator.form();
        };
        PropertyPanel = __decorate([
            Decorators.registerClass('Serenity.PropertyPanel')
        ], PropertyPanel);
        return PropertyPanel;
    }(TemplatedPanel));

    var StringEditor = /** @class */ (function (_super) {
        __extends(StringEditor, _super);
        function StringEditor(input) {
            return _super.call(this, input) || this;
        }
        Object.defineProperty(StringEditor.prototype, "value", {
            get: function () {
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        StringEditor.prototype.get_value = function () {
            return this.value;
        };
        StringEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        StringEditor = __decorate([
            Decorators.registerEditor('Serenity.StringEditor', [IStringValue]),
            Decorators.element("<input type=\"text\"/>")
        ], StringEditor);
        return StringEditor;
    }(Widget));

    var PasswordEditor = /** @class */ (function (_super) {
        __extends(PasswordEditor, _super);
        function PasswordEditor(input) {
            var _this = _super.call(this, input) || this;
            input.attr('type', 'password');
            return _this;
        }
        PasswordEditor = __decorate([
            Decorators.registerEditor('Serenity.PasswordEditor')
        ], PasswordEditor);
        return PasswordEditor;
    }(StringEditor));

    var TextAreaEditor = /** @class */ (function (_super) {
        __extends(TextAreaEditor, _super);
        function TextAreaEditor(input, opt) {
            var _a, _b;
            var _this = _super.call(this, input, opt) || this;
            if (_this.options.cols !== 0) {
                input.attr('cols', ((_a = _this.options.cols) !== null && _a !== void 0 ? _a : 80));
            }
            if (_this.options.rows !== 0) {
                input.attr('rows', ((_b = _this.options.rows) !== null && _b !== void 0 ? _b : 6));
            }
            return _this;
        }
        Object.defineProperty(TextAreaEditor.prototype, "value", {
            get: function () {
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        TextAreaEditor.prototype.get_value = function () {
            return this.value;
        };
        TextAreaEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        TextAreaEditor = __decorate([
            Decorators.registerEditor('Serenity.TextAreaEditor', [IStringValue]),
            Decorators.element("<textarea />")
        ], TextAreaEditor);
        return TextAreaEditor;
    }(Widget));

    var BooleanEditor = /** @class */ (function (_super) {
        __extends(BooleanEditor, _super);
        function BooleanEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BooleanEditor.prototype, "value", {
            get: function () {
                return this.element.is(":checked");
            },
            set: function (value) {
                this.element.prop("checked", !!value);
            },
            enumerable: false,
            configurable: true
        });
        BooleanEditor.prototype.get_value = function () {
            return this.value;
        };
        BooleanEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        BooleanEditor = __decorate([
            Decorators.registerEditor('Serenity.BooleanEditor', [IBooleanValue]),
            Decorators.element('<input type="checkbox"/>')
        ], BooleanEditor);
        return BooleanEditor;
    }(Widget));

    var DecimalEditor = /** @class */ (function (_super) {
        __extends(DecimalEditor, _super);
        function DecimalEditor(input, opt) {
            var _a, _b;
            var _this = _super.call(this, input, opt) || this;
            input.addClass('decimalQ');
            var numericOptions = extend(DecimalEditor_1.defaultAutoNumericOptions(), {
                vMin: (((_a = _this.options.minValue) !== null && _a !== void 0 ? _a : _this.options.allowNegatives) ? (_this.options.maxValue != null ? ("-" + _this.options.maxValue) : '-999999999999.99') : '0.00'),
                vMax: ((_b = _this.options.maxValue) !== null && _b !== void 0 ? _b : '999999999999.99')
            });
            if (_this.options.decimals != null) {
                numericOptions.mDec = _this.options.decimals;
            }
            if (_this.options.padDecimals != null) {
                numericOptions.aPad = _this.options.padDecimals;
            }
            if ($.fn.autoNumeric)
                input.autoNumeric(numericOptions);
            return _this;
        }
        DecimalEditor_1 = DecimalEditor;
        DecimalEditor.prototype.get_value = function () {
            if ($.fn.autoNumeric) {
                var val = this.element.autoNumeric('get');
                if (!!(val == null || val === ''))
                    return null;
                return parseFloat(val);
            }
            var val = this.element.val();
            return parseDecimal(val);
        };
        Object.defineProperty(DecimalEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DecimalEditor.prototype.set_value = function (value) {
            if (value == null || value === '') {
                this.element.val('');
            }
            else if ($.fn.autoNumeric) {
                this.element.autoNumeric('set', value);
            }
            else
                this.element.val(formatNumber(value));
        };
        DecimalEditor.prototype.get_isValid = function () {
            return !isNaN(this.get_value());
        };
        DecimalEditor.defaultAutoNumericOptions = function () {
            return {
                aDec: Culture.decimalSeparator,
                altDec: ((Culture.decimalSeparator === '.') ? ',' : '.'),
                aSep: ((Culture.decimalSeparator === '.') ? ',' : '.'),
                aPad: true
            };
        };
        var DecimalEditor_1;
        DecimalEditor = DecimalEditor_1 = __decorate([
            Decorators.registerEditor('Serenity.DecimalEditor', [IDoubleValue]),
            Decorators.element('<input type="text"/>')
        ], DecimalEditor);
        return DecimalEditor;
    }(Widget));

    var IntegerEditor = /** @class */ (function (_super) {
        __extends(IntegerEditor, _super);
        function IntegerEditor(input, opt) {
            var _a, _b;
            var _this = _super.call(this, input, opt) || this;
            input.addClass('integerQ');
            var numericOptions = extend(DecimalEditor.defaultAutoNumericOptions(), {
                vMin: (((_a = _this.options.minValue) !== null && _a !== void 0 ? _a : _this.options.allowNegatives) ? (_this.options.maxValue != null ? ("-" + _this.options.maxValue) : '-2147483647') : '0'),
                vMax: ((_b = _this.options.maxValue) !== null && _b !== void 0 ? _b : 2147483647),
                aSep: null
            });
            if ($.fn.autoNumeric)
                input.autoNumeric(numericOptions);
            return _this;
        }
        IntegerEditor.prototype.get_value = function () {
            if ($.fn.autoNumeric) {
                var val = this.element.autoNumeric('get');
                if (!!isTrimmedEmpty(val))
                    return null;
                else
                    return parseInt(val, 10);
            }
            else {
                var val = trimToNull(this.element.val());
                if (val == null)
                    return null;
                return parseInteger(val);
            }
        };
        Object.defineProperty(IntegerEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        IntegerEditor.prototype.set_value = function (value) {
            if (value == null || value === '')
                this.element.val('');
            else if ($.fn.autoNumeric)
                this.element.autoNumeric('set', value);
            else
                this.element.val(formatNumber(value));
        };
        IntegerEditor.prototype.get_isValid = function () {
            return !isNaN(this.get_value());
        };
        IntegerEditor = __decorate([
            Decorators.registerEditor('Serenity.IntegerEditor', [IDoubleValue]),
            Decorators.element('<input type="text"/>')
        ], IntegerEditor);
        return IntegerEditor;
    }(Widget));

    var datePickerIconSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M14 2v-1h-3v1h-5v-1h-3v1h-3v15h17v-15h-3zM12 2h1v2h-1v-2zM4 2h1v2h-1v-2zM16 16h-15v-8.921h15v8.921zM1 6.079v-3.079h2v2h3v-2h5v2h3v-2h2v3.079h-15z" fill="#000000"></path></svg>';
    var DateEditor = /** @class */ (function (_super) {
        __extends(DateEditor, _super);
        function DateEditor(input) {
            var _a;
            var _this = _super.call(this, input) || this;
            // @ts-ignore
            if (typeof flatpickr !== "undefined" && (DateEditor_1.useFlatpickr || !$.fn.datepicker)) {
                // @ts-ignore
                flatpickr(input[0], DateEditor_1.flatPickrOptions(input));
            }
            else if ($.fn.datepicker) {
                input.datepicker({
                    showOn: 'button',
                    beforeShow: function (inp, inst) {
                        return !input.hasClass('readonly');
                    },
                    yearRange: ((_a = _this.yearRange) !== null && _a !== void 0 ? _a : '-100:+50')
                });
            }
            else {
                input.attr('type', 'date');
            }
            input.on('keyup.' + _this.uniqueName, function (e) {
                if (e.which === 32 && !_this.get_readOnly()) {
                    if (_this.get_valueAsDate() != today()) {
                        _this.set_valueAsDate(today());
                        _this.element.trigger('change');
                    }
                }
                else {
                    DateEditor_1.dateInputKeyup(e);
                }
            });
            input.on('change.' + _this.uniqueName, DateEditor_1.dateInputChange);
            addValidationRule(input, _this.uniqueName, function (e1) {
                var value = _this.get_value();
                if (isEmptyOrNull(value)) {
                    return null;
                }
                if (!isEmptyOrNull(_this.get_minValue()) && Invariant.stringCompare(value, _this.get_minValue()) < 0) {
                    return jquery.format(text('Validation.MinDate'), formatDate(_this.get_minValue(), null));
                }
                if (!isEmptyOrNull(_this.get_maxValue()) && Invariant.stringCompare(value, _this.get_maxValue()) > 0) {
                    return jquery.format(text('Validation.MaxDate'), formatDate(_this.get_maxValue(), null));
                }
                return null;
            });
            _this.set_sqlMinMax(true);
            return _this;
        }
        DateEditor_1 = DateEditor;
        DateEditor.flatPickrOptions = function (input) {
            return {
                clickOpens: true,
                allowInput: true,
                dateFormat: Culture.dateOrder.split('').join(Culture.dateSeparator).replace('y', 'Y'),
                onChange: function () {
                    input.triggerHandler('change');
                }
            };
        };
        DateEditor.prototype.get_value = function () {
            var value = this.element.val().trim();
            if (value != null && value.length === 0) {
                return null;
            }
            return formatDate(value, 'yyyy-MM-dd');
        };
        Object.defineProperty(DateEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DateEditor.prototype.set_value = function (value) {
            if (value == null) {
                this.element.val('');
            }
            else if (value.toLowerCase() === 'today' || value.toLowerCase() === 'now') {
                this.element.val(formatDate(today(), null));
            }
            else {
                this.element.val(formatDate(value, null));
            }
        };
        DateEditor.prototype.get_valueAsDate = function () {
            if (isEmptyOrNull(this.get_value())) {
                return null;
            }
            return parseISODateTime(this.get_value());
        };
        Object.defineProperty(DateEditor.prototype, "valueAsDate", {
            get: function () {
                return this.get_valueAsDate();
            },
            set: function (v) {
                this.set_valueAsDate(v);
            },
            enumerable: false,
            configurable: true
        });
        DateEditor.prototype.set_valueAsDate = function (value) {
            if (value == null) {
                this.set_value(null);
            }
            this.set_value(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '0.1');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '1');
                }
            }
        };
        DateEditor.prototype.get_minValue = function () {
            return this.minValue;
        };
        DateEditor.prototype.set_minValue = function (value) {
            this.minValue = value;
        };
        DateEditor.prototype.get_maxValue = function () {
            return this.maxValue;
        };
        DateEditor.prototype.set_maxValue = function (value) {
            this.maxValue = value;
        };
        DateEditor.prototype.get_minDate = function () {
            return parseISODateTime(this.get_minValue());
        };
        DateEditor.prototype.set_minDate = function (value) {
            this.set_minValue(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_maxDate = function () {
            return parseISODateTime(this.get_maxValue());
        };
        DateEditor.prototype.set_maxDate = function (value) {
            this.set_maxValue(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_sqlMinMax = function () {
            return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
        };
        DateEditor.prototype.set_sqlMinMax = function (value) {
            if (value) {
                this.set_minValue('1753-01-01');
                this.set_maxValue('9999-12-31');
            }
            else {
                this.set_minValue(null);
                this.set_maxValue(null);
            }
        };
        DateEditor.flatPickrTrigger = function (input) {
            return $('<i class="ui-datepicker-trigger" href="javascript:;">' + datePickerIconSvg + '</i>')
                .insertAfter(input)
                .click(function () {
                if (!input.hasClass('readonly'))
                    input[0]._flatpickr.open();
            });
        };
        DateEditor.dateInputKeyup = function (e) {
            var _a;
            if (Culture.dateOrder !== 'dmy') {
                return;
            }
            var input = $(e.target);
            if (!input.is(':input') || input.attr("type") == "date") {
                // for browser date editors, format might not match culture setting
                return;
            }
            if (input.is('[readonly]') || input.is(':disabled')) {
                return;
            }
            var val = (_a = input.val()) !== null && _a !== void 0 ? _a : '';
            if (!!(val.length === 0 || input[0].selectionEnd !== val.length)) {
                return;
            }
            if (val.indexOf(Culture.dateSeparator + Culture.dateSeparator) !== -1) {
                input.val(replaceAll(val, Culture.dateSeparator + Culture.dateSeparator, Culture.dateSeparator));
                return;
            }
            function isNumeric(c) {
                return c >= 48 && c <= 57;
            }
            if (e.which === 47 || e.which === 111) {
                if (val.length >= 2 && val.charAt(val.length - 1) === Culture.dateSeparator &&
                    val.charAt(val.length - 2) === Culture.dateSeparator) {
                    input.val(val.substr(0, val.length - 1));
                    return;
                }
                if (val.charAt(val.length - 1) !== Culture.dateSeparator) {
                    return;
                }
                switch (val.length) {
                    case 2: {
                        if (isNumeric(val.charCodeAt(0))) {
                            val = '0' + val;
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 4: {
                        if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(2)) &&
                            val.charAt(1) == Culture.dateSeparator) {
                            val = '0' + val.charAt(0) + Culture.dateSeparator + '0' +
                                val.charAt(2) + Culture.dateSeparator;
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 5: {
                        if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(2)) &&
                            isNumeric(val.charCodeAt(3)) &&
                            val.charAt(1) === Culture.dateSeparator) {
                            val = '0' + val;
                            break;
                        }
                        else if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(1)) &&
                            isNumeric(val.charCodeAt(3)) &&
                            val.charAt(2) === Culture.dateSeparator) {
                            val = val.charAt(0) + val.charAt(1) +
                                Culture.dateSeparator + '0' + val.charAt(3) + Culture.dateSeparator;
                            break;
                        }
                        else {
                            break;
                        }
                    }
                    default: {
                        return;
                    }
                }
                input.val(val);
            }
            if (val.length < 6 && (e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105) &&
                isNumeric(val.charCodeAt(val.length - 1))) {
                switch (val.length) {
                    case 1: {
                        if (val.charCodeAt(0) <= 51) {
                            return;
                        }
                        val = '0' + val;
                        break;
                    }
                    case 2: {
                        if (!isNumeric(val.charCodeAt(0))) {
                            return;
                        }
                        break;
                    }
                    case 3: {
                        if (!isNumeric(val.charCodeAt(0)) ||
                            val.charAt(1) !== Culture.dateSeparator ||
                            val.charCodeAt(2) <= 49) {
                            return;
                        }
                        val = '0' + val.charAt(0) + Culture.dateSeparator + '0' + val.charAt(2);
                        break;
                    }
                    case 4: {
                        if (val.charAt(1) == Culture.dateSeparator) {
                            if (!isNumeric(val.charCodeAt(0)) ||
                                !isNumeric(val.charCodeAt(2))) {
                                return;
                            }
                            val = '0' + val;
                            break;
                        }
                        else if (val.charAt(2) == Culture.dateSeparator) {
                            if (!isNumeric(val.charCodeAt(0)) ||
                                !isNumeric(val.charCodeAt(1)) ||
                                val.charCodeAt(3) <= 49) {
                                return;
                            }
                            val = val.charAt(0) + val.charAt(1) + Culture.dateSeparator +
                                '0' + val.charAt(3);
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 5: {
                        if (val.charAt(2) !== Culture.dateSeparator ||
                            !isNumeric(val.charCodeAt(0)) ||
                            !isNumeric(val.charCodeAt(1)) ||
                            !isNumeric(val.charCodeAt(3))) {
                            return;
                        }
                        break;
                    }
                    default: {
                        return;
                    }
                }
                input.val(val + Culture.dateSeparator);
            }
        };
        var DateEditor_1;
        DateEditor.dateInputChange = function (e) {
            var _a, _b;
            if (Culture.dateOrder !== 'dmy') {
                return;
            }
            var input = $(e.target);
            if (!input.is(':input') || input.attr("type") == "date") {
                return;
            }
            var val = (_a = input.val()) !== null && _a !== void 0 ? _a : '';
            if (val.length >= 6 && /^[0-9]*$/g.test(val)) {
                input.val(val.substr(0, 2) + Culture.dateSeparator + val.substr(2, 2) + Culture.dateSeparator + val.substr(4));
            }
            val = (_b = input.val()) !== null && _b !== void 0 ? _b : '';
            if (!!(val.length >= 5 && parseDate(val) !== false)) {
                var d = parseDate(val);
                input.val(formatDate(d, null));
            }
        };
        __decorate([
            Decorators.option()
        ], DateEditor.prototype, "yearRange", void 0);
        __decorate([
            Decorators.option()
        ], DateEditor.prototype, "get_minValue", null);
        __decorate([
            Decorators.option()
        ], DateEditor.prototype, "get_maxValue", null);
        __decorate([
            Decorators.option()
        ], DateEditor.prototype, "get_maxDate", null);
        __decorate([
            Decorators.option()
        ], DateEditor.prototype, "get_sqlMinMax", null);
        DateEditor = DateEditor_1 = __decorate([
            Decorators.registerEditor('Serenity.DateEditor', [IStringValue, IReadOnly]),
            Decorators.element('<input type="text"/>')
        ], DateEditor);
        return DateEditor;
    }(Widget));
    function jQueryDatepickerInitialization() {
        if (!$.datepicker || !$.datepicker.regional || !$.datepicker.regional.en)
            return false;
        var order = Culture.dateOrder;
        var s = Culture.dateSeparator;
        var culture = ($('html').attr('lang') || 'en').toLowerCase();
        if (!$.datepicker.regional[culture]) {
            culture = culture.split('-')[0];
            if (!$.datepicker.regional[culture]) {
                culture = 'en';
            }
        }
        $.datepicker.setDefaults($.datepicker.regional['en']);
        $.datepicker.setDefaults($.datepicker.regional[culture]);
        $.datepicker.setDefaults({
            dateFormat: (order == 'mdy' ? 'mm' + s + 'dd' + s + 'yy' :
                (order == 'ymd' ? 'yy' + s + 'mm' + s + 'dd' :
                    'dd' + s + 'mm' + s + 'yy')),
            buttonImage: 'data:image/svg+xml,' + encodeURIComponent(datePickerIconSvg),
            buttonImageOnly: true,
            showOn: 'both',
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true
        });
        return true;
    }
    typeof $ !== "undefined" && !jQueryDatepickerInitialization() && $(jQueryDatepickerInitialization);

    var DateTimeEditor = /** @class */ (function (_super) {
        __extends(DateTimeEditor, _super);
        function DateTimeEditor(input, opt) {
            var _a, _b, _c, _d;
            var _this = _super.call(this, input, opt) || this;
            input.addClass('s-DateTimeEditor');
            if (_this.options.inputOnly) {
                input.addClass('dateTimeQ');
                // just a basic input, usually read only display
            }
            // @ts-ignore
            else if (typeof flatpickr !== "undefined" && (DateEditor.useFlatpickr || !$.fn.datepicker || _this.options.seconds)) {
                input.addClass('dateTimeQ');
                // @ts-ignore
                flatpickr(input[0], _this.getFlatpickrOptions());
            }
            else if ($.fn.datepicker) {
                input.addClass('dateQ');
                input.datepicker({
                    showOn: 'button',
                    beforeShow: function () {
                        return !input.hasClass('readonly');
                    },
                    yearRange: ((_a = _this.options.yearRange) !== null && _a !== void 0 ? _a : '-100:+50')
                });
                input.bind('change.' + _this.uniqueName, function (e) {
                    _this.lastSetValue = null;
                    DateEditor.dateInputChange(e);
                });
                _this.time = $('<select/>').addClass('editor s-DateTimeEditor time');
                var after = input.next('.ui-datepicker-trigger');
                if (after.length > 0) {
                    _this.time.insertAfter(after);
                }
                else {
                    after = input.prev('.ui-datepicker-trigger');
                    if (after.length > 0) {
                        _this.time.insertBefore(after);
                    }
                    else {
                        _this.time.insertAfter(input);
                    }
                }
                _this.time.on('change', function (e3) {
                    this.lastSetValue = null;
                    input.triggerHandler('change');
                });
                var timeOpt = DateTimeEditor_1.getTimeOptions(((_b = _this.options.startHour) !== null && _b !== void 0 ? _b : 0), 0, ((_c = _this.options.endHour) !== null && _c !== void 0 ? _c : 23), 59, ((_d = _this.options.intervalMinutes) !== null && _d !== void 0 ? _d : 5));
                for (var _i = 0, timeOpt_1 = timeOpt; _i < timeOpt_1.length; _i++) {
                    var t = timeOpt_1[_i];
                    addOption(_this.time, t, t);
                }
                addValidationRule(input, _this.uniqueName, function (e1) {
                    var value = _this.get_value();
                    if (isEmptyOrNull(value)) {
                        return null;
                    }
                    if (!isEmptyOrNull(_this.get_minValue()) &&
                        Invariant.stringCompare(value, _this.get_minValue()) < 0) {
                        return format(text('Validation.MinDate'), formatDate(_this.get_minValue(), null));
                    }
                    if (!isEmptyOrNull(_this.get_maxValue()) &&
                        Invariant.stringCompare(value, _this.get_maxValue()) >= 0) {
                        return format(text('Validation.MaxDate'), formatDate(_this.get_maxValue(), null));
                    }
                    return null;
                });
            }
            else
                input.attr('type', 'datetime').addClass('dateTimeQ');
            input.bind('keyup.' + _this.uniqueName, function (e) {
                if (_this.get_readOnly())
                    return;
                if (_this.time) {
                    if (e.which === 32) {
                        if (_this.get_valueAsDate() !== new Date()) {
                            _this.set_valueAsDate(new Date());
                            _this.element.trigger('change');
                        }
                    }
                    else {
                        var before = _this.element.val();
                        DateEditor.dateInputKeyup(e);
                        if (before != _this.element.val())
                            _this.lastSetValue = null;
                    }
                }
            });
            _this.set_sqlMinMax(true);
            if (!_this.options.inputOnly) {
                $("<i class='inplace-button inplace-now'><b></b></div>")
                    .attr('title', _this.getInplaceNowText())
                    .insertAfter(_this.time).click(function (e2) {
                    if (_this.element.hasClass('readonly')) {
                        return;
                    }
                    _this.lastSetValue = null;
                    _this.set_valueAsDate(new Date());
                    input.triggerHandler('change');
                });
            }
            return _this;
        }
        DateTimeEditor_1 = DateTimeEditor;
        DateTimeEditor.prototype.getFlatpickrOptions = function () {
            var _this = this;
            var _a;
            return {
                clickOpens: true,
                allowInput: true,
                enableTime: true,
                time_24hr: true,
                enableSeconds: !!this.options.seconds,
                minuteIncrement: (_a = this.options.intervalMinutes) !== null && _a !== void 0 ? _a : 5,
                dateFormat: Culture.dateOrder.split('').join(Culture.dateSeparator).replace('y', 'Y') + " H:i" + (this.options.seconds ? ":S" : ""),
                onChange: function () {
                    _this.lastSetValue = null;
                    _this.element && _this.element.triggerHandler('change');
                }
            };
        };
        DateTimeEditor.prototype.get_value = function () {
            var value = this.element.val().trim();
            if (value != null && value.length === 0) {
                return null;
            }
            var result;
            if (this.time) {
                var datePart = formatDate(value, 'yyyy-MM-dd');
                var timePart = this.time.val();
                result = datePart + 'T' + timePart + ':00.000';
            }
            else
                result = formatDate(parseDate(this.element.val()), "yyyy-MM-ddTHH:mm:ss.fff");
            if (this.options.useUtc)
                result = formatISODateTimeUTC(parseISODateTime(result));
            if (this.lastSetValue != null &&
                this.lastSetValueGet == result)
                return this.lastSetValue;
            return result;
        };
        Object.defineProperty(DateTimeEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DateTimeEditor.prototype.set_value = function (value) {
            var _a;
            if (isEmptyOrNull(value)) {
                this.element.val('');
                this.time && this.time.val('00:00');
            }
            else if (value.toLowerCase() === 'today') {
                if (this.time) {
                    this.element.val(formatDate(today(), null));
                    this.time.val('00:00');
                }
                else {
                    this.element.val(this.getDisplayFormat());
                }
            }
            else {
                var val = ((value.toLowerCase() === 'now') ? new Date() : parseISODateTime(value));
                if (this.time) {
                    val = DateTimeEditor_1.roundToMinutes(val, ((_a = this.options.intervalMinutes) !== null && _a !== void 0 ? _a : 5));
                    this.element.val(formatDate(val, null));
                    this.time.val(formatDate(val, 'HH:mm'));
                }
                else
                    this.element.val(formatDate(val, this.getDisplayFormat()));
            }
            this.lastSetValue = null;
            if (!isEmptyOrNull(value) && value.toLowerCase() != 'today' && value.toLowerCase() != 'now') {
                this.lastSetValueGet = this.get_value();
                this.lastSetValue = value;
            }
        };
        DateTimeEditor.prototype.getInplaceNowText = function () {
            var _a;
            return (_a = tryGetText('Controls.DateTimeEditor.SetToNow')) !== null && _a !== void 0 ? _a : 'set to now';
        };
        DateTimeEditor.prototype.getDisplayFormat = function () {
            return (this.options.seconds ? Culture.dateTimeFormat : Culture.dateTimeFormat.replace(':ss', ''));
        };
        DateTimeEditor.prototype.get_valueAsDate = function () {
            if (isEmptyOrNull(this.get_value())) {
                return null;
            }
            return parseISODateTime(this.get_value());
        };
        Object.defineProperty(DateTimeEditor.prototype, "valueAsDate", {
            get: function () {
                return this.get_valueAsDate();
            },
            set: function (value) {
                this.set_valueAsDate(value);
            },
            enumerable: false,
            configurable: true
        });
        DateTimeEditor.prototype.set_valueAsDate = function (value) {
            if (value == null) {
                this.set_value(null);
            }
            this.set_value(formatDate(value, 'yyyy-MM-ddTHH:mm' + (this.options.seconds ? ':ss' : '')));
        };
        DateTimeEditor.prototype.get_minValue = function () {
            return this.minValue;
        };
        DateTimeEditor.prototype.set_minValue = function (value) {
            this.minValue = value;
        };
        DateTimeEditor.prototype.get_maxValue = function () {
            return this.maxValue;
        };
        DateTimeEditor.prototype.set_maxValue = function (value) {
            this.maxValue = value;
        };
        DateTimeEditor.prototype.get_minDate = function () {
            return parseISODateTime(this.get_minValue());
        };
        DateTimeEditor.prototype.set_minDate = function (value) {
            this.set_minValue(formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
        };
        DateTimeEditor.prototype.get_maxDate = function () {
            return parseISODateTime(this.get_maxValue());
        };
        DateTimeEditor.prototype.set_maxDate = function (value) {
            this.set_maxValue(formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
        };
        DateTimeEditor.prototype.get_sqlMinMax = function () {
            return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
        };
        DateTimeEditor.prototype.set_sqlMinMax = function (value) {
            if (value) {
                this.set_minValue('1753-01-01');
                this.set_maxValue('9999-12-31');
            }
            else {
                this.set_minValue(null);
                this.set_maxValue(null);
            }
        };
        DateTimeEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateTimeEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '0.1');
                    this.element.nextAll('.inplace-now').css('opacity', '0.1');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '1');
                    this.element.nextAll('.inplace-now').css('opacity', '1');
                }
                this.time && EditorUtils.setReadonly(this.time, value);
            }
        };
        DateTimeEditor.roundToMinutes = function (date, minutesStep) {
            date = new Date(date.getTime());
            var m = trunc(round(date.getMinutes() / minutesStep) * minutesStep);
            date.setMinutes(m);
            date.setSeconds(0);
            date.setMilliseconds(0);
            return date;
        };
        var DateTimeEditor_1;
        DateTimeEditor.getTimeOptions = function (fromHour, fromMin, toHour, toMin, stepMins) {
            var list = [];
            if (toHour >= 23) {
                toHour = 23;
            }
            if (toMin >= 60) {
                toMin = 59;
            }
            var hour = fromHour;
            var min = fromMin;
            while (true) {
                if (hour > toHour || hour === toHour && min > toMin) {
                    break;
                }
                var t = ((hour >= 10) ? '' : '0') + hour + ':' + ((min >= 10) ? '' : '0') + min;
                list.push(t);
                min += stepMins;
                if (min >= 60) {
                    min -= 60;
                    hour++;
                }
            }
            return list;
        };
        __decorate([
            Decorators.option()
        ], DateTimeEditor.prototype, "get_minValue", null);
        __decorate([
            Decorators.option()
        ], DateTimeEditor.prototype, "get_maxValue", null);
        __decorate([
            Decorators.option()
        ], DateTimeEditor.prototype, "get_maxDate", null);
        __decorate([
            Decorators.option()
        ], DateTimeEditor.prototype, "get_sqlMinMax", null);
        DateTimeEditor = DateTimeEditor_1 = __decorate([
            Decorators.registerEditor('Serenity.DateTimeEditor', [IStringValue, IReadOnly]),
            Decorators.element('<input type="text"/>')
        ], DateTimeEditor);
        return DateTimeEditor;
    }(Widget));

    var TimeEditor = /** @class */ (function (_super) {
        __extends(TimeEditor, _super);
        function TimeEditor(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            input.addClass('editor s-TimeEditor hour');
            if (!_this.options.noEmptyOption) {
                addOption(input, '', '--');
            }
            for (var h = (_this.options.startHour || 0); h <= (_this.options.endHour || 23); h++) {
                addOption(input, h.toString(), ((h < 10) ? ('0' + h) : h.toString()));
            }
            _this.minutes = $('<select/>').addClass('editor s-TimeEditor minute').insertAfter(input);
            _this.minutes.change(function () { return _this.element.trigger("change"); });
            for (var m = 0; m <= 59; m += (_this.options.intervalMinutes || 5)) {
                addOption(_this.minutes, m.toString(), ((m < 10) ? ('0' + m) : m.toString()));
            }
            return _this;
        }
        Object.defineProperty(TimeEditor.prototype, "value", {
            get: function () {
                var hour = toId(this.element.val());
                var minute = toId(this.minutes.val());
                if (hour == null || minute == null) {
                    return null;
                }
                return hour * 60 + minute;
            },
            set: function (value) {
                if (!value) {
                    if (this.options.noEmptyOption) {
                        this.element.val(this.options.startHour);
                        this.minutes.val('0');
                    }
                    else {
                        this.element.val('');
                        this.minutes.val('0');
                    }
                }
                else {
                    this.element.val(Math.floor(value / 60).toString());
                    this.minutes.val(value % 60);
                }
            },
            enumerable: false,
            configurable: true
        });
        TimeEditor.prototype.get_value = function () {
            return this.value;
        };
        TimeEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        TimeEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        TimeEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                }
                EditorUtils.setReadonly(this.minutes, value);
            }
        };
        TimeEditor = __decorate([
            Decorators.registerEditor('Serenity.TimeEditor', [IDoubleValue, IReadOnly]),
            Decorators.element("<select />")
        ], TimeEditor);
        return TimeEditor;
    }(Widget));

    var EmailEditor = /** @class */ (function (_super) {
        __extends(EmailEditor, _super);
        function EmailEditor(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            EmailEditor_1.registerValidationMethods();
            input.addClass('emailuser');
            var spanAt = $('<span/>').text('@').addClass('emailat').insertAfter(input);
            var domain = $('<input type="text"/>').addClass('emaildomain').insertAfter(spanAt);
            domain.bind('blur.' + _this.uniqueName, function () {
                var validator = domain.closest('form').data('validator');
                if (validator != null) {
                    validator.element(input[0]);
                }
            });
            if (!isEmptyOrNull(_this.options.domain)) {
                domain.val(_this.options.domain);
            }
            if (_this.options.readOnlyDomain) {
                domain.attr('readonly', 'readonly').addClass('disabled').attr('tabindex', '-1');
            }
            input.bind('keypress.' + _this.uniqueName, function (e) {
                if (e.which === 64) {
                    e.preventDefault();
                    if (!_this.options.readOnlyDomain) {
                        domain.focus();
                        domain.select();
                    }
                }
            });
            domain.bind('keypress.' + _this.uniqueName, function (e1) {
                if (e1.which === 64) {
                    e1.preventDefault();
                }
            });
            if (!_this.options.readOnlyDomain) {
                input.change(function (e2) { return _this.set_value(input.val()); });
            }
            return _this;
        }
        EmailEditor_1 = EmailEditor;
        EmailEditor.registerValidationMethods = function () {
            var _a;
            if (!$.validator || !$.validator.methods || $.validator.methods['emailuser'] != null)
                return;
            $.validator.addMethod('emailuser', function (value, element) {
                var domain = $(element).nextAll('.emaildomain');
                if (domain.length > 0 && domain.attr('readonly') == null) {
                    if (this.optional(element) && this.optional(domain[0])) {
                        return true;
                    }
                    return $.validator.methods.email.call(this, value + '@' + domain.val(), element);
                }
                else {
                    return $.validator.methods.email.call(this, value + '@dummy.com', element);
                }
            }, (_a = tryGetText("Validation.Email")) !== null && _a !== void 0 ? _a : $.validator.messages.email);
        };
        EmailEditor.prototype.get_value = function () {
            var domain = this.element.nextAll('.emaildomain');
            var value = this.element.val();
            var domainValue = domain.val();
            if (isEmptyOrNull(value)) {
                if (this.options.readOnlyDomain || isEmptyOrNull(domainValue)) {
                    return '';
                }
                return '@' + domainValue;
            }
            return value + '@' + domainValue;
        };
        Object.defineProperty(EmailEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        EmailEditor.prototype.set_value = function (value) {
            var domain = this.element.nextAll('.emaildomain');
            value = trimToNull(value);
            if (value == null) {
                if (!this.options.readOnlyDomain)
                    domain.val('');
                this.element.val('');
            }
            else {
                var parts = value.split('@');
                if (parts.length > 1) {
                    if (!this.options.readOnlyDomain) {
                        domain.val(parts[1]);
                        this.element.val(parts[0]);
                    }
                    else if (!isEmptyOrNull(this.options.domain)) {
                        if (parts[1] !== this.options.domain)
                            this.element.val(value);
                        else
                            this.element.val(parts[0]);
                    }
                    else
                        this.element.val(parts[0]);
                }
                else
                    this.element.val(parts[0]);
            }
        };
        EmailEditor.prototype.get_readOnly = function () {
            var domain = this.element.nextAll('.emaildomain');
            return !(this.element.attr('readonly') == null &&
                (!this.options.readOnlyDomain || domain.attr('readonly') == null));
        };
        EmailEditor.prototype.set_readOnly = function (value) {
            var domain = this.element.nextAll('.emaildomain');
            if (value) {
                this.element.attr('readonly', 'readonly').addClass('readonly');
                if (!this.options.readOnlyDomain) {
                    domain.attr('readonly', 'readonly').addClass('readonly');
                }
            }
            else {
                this.element.removeAttr('readonly').removeClass('readonly');
                if (!this.options.readOnlyDomain) {
                    domain.removeAttr('readonly').removeClass('readonly');
                }
            }
        };
        var EmailEditor_1;
        EmailEditor = EmailEditor_1 = __decorate([
            Decorators.registerEditor('Serenity.EmailEditor', [IStringValue, IReadOnly]),
            Decorators.element('<input type="text"/>')
        ], EmailEditor);
        return EmailEditor;
    }(Widget));

    var EmailAddressEditor = /** @class */ (function (_super) {
        __extends(EmailAddressEditor, _super);
        function EmailAddressEditor(input) {
            var _this = _super.call(this, input) || this;
            input.attr('type', 'email')
                .addClass('email');
            return _this;
        }
        EmailAddressEditor = __decorate([
            Decorators.registerEditor('Serenity.EmailAddressEditor')
        ], EmailAddressEditor);
        return EmailAddressEditor;
    }(StringEditor));

    var URLEditor = /** @class */ (function (_super) {
        __extends(URLEditor, _super);
        function URLEditor(input) {
            var _this = _super.call(this, input) || this;
            input.addClass("url").attr("title", "URL should be entered in format: 'http://www.site.com/page'.");
            input.on("blur." + _this.uniqueName, function (e) {
                var validator = input.closest("form").data("validator");
                if (validator == null)
                    return;
                if (!input.hasClass("error"))
                    return;
                var value = trimToNull(input.val());
                if (!value)
                    return;
                value = "http://" + value;
                if ($.validator.methods['url'].call(validator, value, input[0]) == true) {
                    input.val(value);
                    validator.element(input);
                }
            });
            return _this;
        }
        URLEditor = __decorate([
            Decorators.registerEditor('Serenity.URLEditor', [IStringValue])
        ], URLEditor);
        return URLEditor;
    }(StringEditor));

    var RadioButtonEditor = /** @class */ (function (_super) {
        __extends(RadioButtonEditor, _super);
        function RadioButtonEditor(input, opt) {
            var _a;
            var _this = _super.call(this, input, opt) || this;
            if (isEmptyOrNull(_this.options.enumKey) &&
                _this.options.enumType == null &&
                isEmptyOrNull(_this.options.lookupKey)) {
                return _this;
            }
            if (!isEmptyOrNull(_this.options.lookupKey)) {
                var lookup = getLookup(_this.options.lookupKey);
                for (var _i = 0, _b = lookup.items; _i < _b.length; _i++) {
                    var item = _b[_i];
                    var textValue = item[lookup.textField];
                    var text = (textValue == null ? '' : textValue.toString());
                    var idValue = item[lookup.idField];
                    var id = (idValue == null ? '' : idValue.toString());
                    _this.addRadio(id, text);
                }
            }
            else {
                var enumType = _this.options.enumType || EnumTypeRegistry.get(_this.options.enumKey);
                var enumKey = _this.options.enumKey;
                if (enumKey == null && enumType != null) {
                    var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
                    if (enumKeyAttr.length > 0) {
                        enumKey = enumKeyAttr[0].value;
                    }
                }
                var values = Enum.getValues(enumType);
                for (var _c = 0, values_1 = values; _c < values_1.length; _c++) {
                    var x = values_1[_c];
                    var name = Enum.toString(enumType, x);
                    _this.addRadio(x.toString(), (_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name);
                }
            }
            return _this;
        }
        RadioButtonEditor.prototype.addRadio = function (value, text) {
            var label = $('<label/>').text(text);
            $('<input type="radio"/>').attr('name', this.uniqueName)
                .attr('id', this.uniqueName + '_' + value)
                .attr('value', value).prependTo(label);
            label.appendTo(this.element);
        };
        RadioButtonEditor.prototype.get_value = function () {
            return this.element.find('input:checked').first().val();
        };
        Object.defineProperty(RadioButtonEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        RadioButtonEditor.prototype.set_value = function (value) {
            if (value !== this.get_value()) {
                var inputs = this.element.find('input');
                var checks = inputs.filter(':checked');
                if (checks.length > 0) {
                    checks[0].checked = false;
                }
                if (!isEmptyOrNull(value)) {
                    checks = inputs.filter('[value=' + value + ']');
                    if (checks.length > 0) {
                        checks[0].checked = true;
                    }
                }
            }
        };
        RadioButtonEditor.prototype.get_readOnly = function () {
            return this.element.attr('disabled') != null;
        };
        RadioButtonEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.element.attr('disabled', 'disabled')
                        .find('input').attr('disabled', 'disabled');
                }
                else {
                    this.element.removeAttr('disabled')
                        .find('input').removeAttr('disabled');
                }
            }
        };
        RadioButtonEditor = __decorate([
            Decorators.registerEditor('Serenity.RadioButtonEditor', [IStringValue, IReadOnly]),
            Decorators.element('<div/>')
        ], RadioButtonEditor);
        return RadioButtonEditor;
    }(Widget));

    var Select2Editor = /** @class */ (function (_super) {
        __extends(Select2Editor, _super);
        function Select2Editor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this._items = [];
            _this._itemById = {};
            var emptyItemText = _this.emptyItemText();
            if (emptyItemText != null) {
                hidden.attr('placeholder', emptyItemText);
            }
            var select2Options = _this.getSelect2Options();
            hidden.select2(select2Options);
            hidden.attr('type', 'text');
            // for jquery validate to work
            hidden.on('change.' + _this.uniqueName, function (e, valueSet) {
                if (valueSet !== true && hidden.closest('form').data('validator'))
                    hidden.valid();
            });
            _this.setCascadeFrom(_this.options.cascadeFrom);
            if (_this.useInplaceAdd())
                _this.addInplaceCreate(text('Controls.SelectEditor.InplaceAdd'), null);
            return _this;
        }
        Select2Editor_1 = Select2Editor;
        Select2Editor.prototype.destroy = function () {
            if (this.element != null) {
                this.element.select2('destroy');
            }
            _super.prototype.destroy.call(this);
        };
        Select2Editor.prototype.hasAsyncSource = function () {
            return false;
        };
        Select2Editor.prototype.asyncSearch = function (query, results) {
            results({
                items: [],
                more: false
            });
            return null;
        };
        Select2Editor.prototype.getTypeDelay = function () {
            var _a;
            return ((_a = this.options['typeDelay']) !== null && _a !== void 0 ? _a : 500);
        };
        Select2Editor.prototype.emptyItemText = function () {
            var _a;
            return (_a = this.element.attr('placeholder')) !== null && _a !== void 0 ? _a : text('Controls.SelectEditor.EmptyItemText');
        };
        Select2Editor.prototype.getPageSize = function () {
            var _a;
            return (_a = this.options['pageSize']) !== null && _a !== void 0 ? _a : 100;
        };
        Select2Editor.prototype.getIdField = function () {
            return this.options['idField'];
        };
        Select2Editor.prototype.itemId = function (item) {
            var value = item[this.getIdField()];
            if (value == null)
                return '';
            return value.toString();
        };
        Select2Editor.prototype.getTextField = function () {
            var _a;
            return (_a = this.options['textField']) !== null && _a !== void 0 ? _a : this.getIdField();
        };
        Select2Editor.prototype.itemText = function (item) {
            var value = item[this.getTextField()];
            if (value == null)
                return '';
            return value.toString();
        };
        Select2Editor.prototype.itemDisabled = function (item) {
            return false;
        };
        Select2Editor.prototype.mapItem = function (item) {
            return {
                id: this.itemId(item),
                text: this.itemText(item),
                disabled: this.itemDisabled(item),
                source: item
            };
        };
        Select2Editor.prototype.mapItems = function (items) {
            return items.map(this.mapItem.bind(this));
        };
        Select2Editor.prototype.allowClear = function () {
            return this.options.allowClear != null ?
                !!this.options.allowClear : this.emptyItemText() != null;
        };
        Select2Editor.prototype.isMultiple = function () {
            return !!this.options.multiple;
        };
        Select2Editor.prototype.getSelect2Options = function () {
            var _this = this;
            var emptyItemText = this.emptyItemText();
            var opt = {
                multiple: this.isMultiple(),
                placeHolder: (!isEmptyOrNull(emptyItemText) ? emptyItemText : null),
                allowClear: this.allowClear(),
                createSearchChoicePosition: 'bottom'
            };
            if (this.hasAsyncSource()) {
                var typeTimeout = 0;
                var queryPromise = null;
                opt.query = function (query) {
                    var pageSize = _this.getPageSize();
                    var searchQuery = {
                        searchTerm: trimToNull(query.term),
                        skip: (query.page - 1) * pageSize,
                        take: pageSize,
                        checkMore: true
                    };
                    queryPromise && queryPromise.abort && queryPromise.abort();
                    queryPromise = null;
                    if (typeTimeout != null)
                        clearTimeout(typeTimeout);
                    var select2 = $(_this.element).data('select2');
                    select2 && select2.search && select2.search.removeClass('select2-active');
                    typeTimeout = setTimeout(function () {
                        queryPromise && queryPromise.abort && queryPromise.abort();
                        select2 && select2.search.addClass('select2-active');
                        queryPromise = _this.asyncSearch(searchQuery, function (result) {
                            queryPromise = null;
                            query.callback({
                                results: _this.mapItems(result.items),
                                more: result.more
                            });
                        });
                        (queryPromise && (queryPromise.catch || queryPromise.fail)).call(queryPromise, function () {
                            queryPromise = null;
                            select2 && select2.search && select2.search.removeClass('select2-active');
                        });
                    }, !query.term ? 0 : _this.getTypeDelay());
                };
                var initPromise = null;
                opt.initSelection = function (element, callback) {
                    var val = element.val();
                    if (val == null || val == '') {
                        callback(null);
                        return;
                    }
                    var isMultiple = _this.isMultiple();
                    var idList = isMultiple ? val.split(',') : [val];
                    var searchQuery = {
                        idList: idList
                    };
                    initPromise && initPromise.abort && initPromise.abort();
                    initPromise = _this.asyncSearch(searchQuery, function (result) {
                        initPromise = null;
                        if (isMultiple) {
                            var items = (result.items || []).map(function (x) { return _this.mapItem(x); });
                            _this._itemById = _this._itemById || {};
                            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                                var item = items_1[_i];
                                _this._itemById[item.id] = item;
                            }
                            if (_this.isAutoComplete &&
                                items.length != idList.length) {
                                for (var _a = 0, idList_1 = idList; _a < idList_1.length; _a++) {
                                    var v = idList_1[_a];
                                    if (!any(items, function (z) { return z.id == v; })) {
                                        items.push({
                                            id: v,
                                            text: v
                                        });
                                    }
                                }
                            }
                            callback(items);
                        }
                        else if (!result.items || !result.items.length) {
                            if (_this.isAutoComplete) {
                                callback({
                                    id: val,
                                    text: val
                                });
                            }
                            else
                                callback(null);
                        }
                        else {
                            var item = _this.mapItem(result.items[0]);
                            _this._itemById = _this._itemById || {};
                            _this._itemById[item.id] = item;
                            callback(item);
                        }
                    });
                    (initPromise && (initPromise.catch || initPromise.fail)).call(initPromise, function () {
                        initPromise = null;
                    });
                };
            }
            else {
                opt.data = this._items;
                opt.query = function (query) {
                    var items = Select2Editor_1.filterByText(_this._items, function (x) { return x.text; }, query.term);
                    var pageSize = _this.getPageSize();
                    query.callback({
                        results: items.slice((query.page - 1) * pageSize, query.page * pageSize),
                        more: items.length >= query.page * pageSize
                    });
                };
                opt.initSelection = function (element, callback) {
                    var val = element.val();
                    var isAutoComplete = _this.isAutoComplete();
                    if (_this.isMultiple()) {
                        var list = [];
                        for (var _i = 0, _a = val.split(','); _i < _a.length; _i++) {
                            var z = _a[_i];
                            var item2 = _this._itemById[z];
                            if (item2 == null && isAutoComplete) {
                                item2 = { id: z, text: z };
                                _this.addItem(item2);
                            }
                            if (item2 != null) {
                                list.push(item2);
                            }
                        }
                        callback(list);
                        return;
                    }
                    var it = _this._itemById[val];
                    if (it == null && isAutoComplete) {
                        it = { id: val, text: val };
                        _this.addItem(it);
                    }
                    callback(it);
                };
            }
            if (this.options.minimumResultsForSearch != null)
                opt.minimumResultsForSearch = this.options.minimumResultsForSearch;
            if (this.isAutoComplete() || this.useInplaceAdd())
                opt.createSearchChoice = this.getCreateSearchChoice(null);
            return opt;
        };
        Select2Editor.prototype.get_delimited = function () {
            return !!this.options.delimited;
        };
        Object.defineProperty(Select2Editor.prototype, "items", {
            get: function () {
                if (this.hasAsyncSource())
                    throw new Error("Can't read items property of an async select editor!");
                return this._items || [];
            },
            set: function (value) {
                if (this.hasAsyncSource())
                    throw new Error("Can't set items of an async select editor!");
                this._items = value || [];
                this._itemById = {};
                for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this._itemById[item.id] = item;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Select2Editor.prototype, "itemById", {
            get: function () {
                if (this.hasAsyncSource())
                    throw new Error("Can't read items property of an async select editor!");
                return this._itemById;
            },
            set: function (value) {
                if (this.hasAsyncSource())
                    throw new Error("Can't set itemById of an async select editor!");
                this._itemById = value || {};
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.clearItems = function () {
            if (this.hasAsyncSource())
                throw new Error("Can't clear items of an async select editor!");
            this._items.length = 0;
            this._itemById = {};
        };
        Select2Editor.prototype.addItem = function (item) {
            if (this.hasAsyncSource())
                throw new Error("Can't add item to an async select editor!");
            this._items.push(item);
            this._itemById[item.id] = item;
        };
        Select2Editor.prototype.addOption = function (key, text, source, disabled) {
            this.addItem({
                id: key,
                text: text,
                source: source,
                disabled: disabled
            });
        };
        Select2Editor.prototype.addInplaceCreate = function (addTitle, editTitle) {
            var _this = this;
            var self = this;
            addTitle = (addTitle !== null && addTitle !== void 0 ? addTitle : text('Controls.SelectEditor.InplaceAdd'));
            editTitle = (editTitle !== null && editTitle !== void 0 ? editTitle : text('Controls.SelectEditor.InplaceEdit'));
            var inplaceButton = $('<a><b/></a>')
                .addClass('inplace-button inplace-create')
                .attr('title', addTitle)
                .insertAfter(this.element).click(function (e) {
                self.inplaceCreateClick(e);
            });
            this.get_select2Container().add(this.element).addClass('has-inplace-button');
            this.element.change(function () {
                var isNew = _this.isMultiple() || isEmptyOrNull(_this.get_value());
                inplaceButton.attr('title', (isNew ? addTitle : editTitle)).toggleClass('edit', !isNew);
            });
            this.element.change(function (e, valueSet) {
                if (valueSet === true)
                    return;
                if (_this.isMultiple()) {
                    var values = _this.get_values();
                    if (values.length > 0 && values[values.length - 1] == (-2147483648).toString()) {
                        _this.set_values(values.slice(0, values.length - 1));
                        _this.inplaceCreateClick(e);
                    }
                }
                else if (_this.get_value() == (-2147483648).toString()) {
                    _this.set_value(null);
                    _this.inplaceCreateClick(e);
                }
            });
            if (this.isMultiple()) {
                this.get_select2Container().on('dblclick.' + this.uniqueName, '.select2-search-choice', function (e3) {
                    var q = $(e3.target);
                    if (!q.hasClass('select2-search-choice')) {
                        q = q.closest('.select2-search-choice');
                    }
                    var index = q.index();
                    var values1 = _this.get_values();
                    if (index < 0 || index >= _this.get_values().length) {
                        return;
                    }
                    e3['editItem'] = values1[index];
                    _this.inplaceCreateClick(e3);
                });
            }
        };
        Select2Editor.prototype.useInplaceAdd = function () {
            return !this.isAutoComplete() &&
                this.options.inplaceAdd &&
                (this.options.inplaceAddPermission == null ||
                    Authorization.hasPermission(this.options.inplaceAddPermission));
        };
        Select2Editor.prototype.isAutoComplete = function () {
            return !!this.options.autoComplete;
        };
        Select2Editor.prototype.getCreateSearchChoice = function (getName) {
            var _this = this;
            return function (s) {
                var _a;
                _this.lastCreateTerm = s;
                s = ((_a = Select2.util.stripDiacritics(s)) !== null && _a !== void 0 ? _a : '').toLowerCase();
                if (isTrimmedEmpty(s)) {
                    return null;
                }
                if (any(_this._items || [], function (x) {
                    var text = getName ? getName(x.source) : x.text;
                    return Select2.util.stripDiacritics((text !== null && text !== void 0 ? text : '')).toLowerCase() == s;
                }))
                    return null;
                if (!any(_this._items || [], function (x1) {
                    var _a;
                    return ((_a = Select2.util.stripDiacritics(x1.text)) !== null && _a !== void 0 ? _a : '').toLowerCase().indexOf(s) !== -1;
                })) {
                    if (_this.isAutoComplete()) {
                        return {
                            id: _this.lastCreateTerm,
                            text: _this.lastCreateTerm
                        };
                    }
                    return {
                        id: (-2147483648).toString(),
                        text: text('Controls.SelectEditor.NoResultsClickToDefine')
                    };
                }
                if (_this.isAutoComplete()) {
                    return {
                        id: _this.lastCreateTerm,
                        text: _this.lastCreateTerm
                    };
                }
                return {
                    id: (-2147483648).toString(),
                    text: text('Controls.SelectEditor.ClickToDefine')
                };
            };
        };
        Select2Editor.prototype.setEditValue = function (source, property) {
            var val = source[property.name];
            if (isArray(val)) {
                this.set_values(val);
            }
            else {
                this.set_value((val == null ? null : val.toString()));
            }
        };
        Select2Editor.prototype.getEditValue = function (property, target) {
            if (!this.isMultiple() || this.get_delimited()) {
                target[property.name] = this.get_value();
            }
            else {
                target[property.name] = this.get_values();
            }
        };
        Select2Editor.prototype.get_select2Container = function () {
            return this.element.prevAll('.select2-container');
        };
        Select2Editor.prototype.get_items = function () {
            return this.items;
        };
        Select2Editor.prototype.get_itemByKey = function () {
            return this.itemById;
        };
        Select2Editor.filterByText = function (items, getText, term) {
            if (term == null || term.length == 0)
                return items;
            term = Select2.util.stripDiacritics(term).toUpperCase();
            var contains = [];
            function filter(item) {
                var text = getText(item);
                if (text == null || !text.length)
                    return false;
                text = Select2.util.stripDiacritics(text).toUpperCase();
                if (startsWith(text, term))
                    return true;
                if (text.indexOf(term) >= 0)
                    contains.push(item);
                return false;
            }
            return items.filter(filter).concat(contains);
        };
        Select2Editor.prototype.get_value = function () {
            var val;
            if (this.element.data('select2')) {
                val = this.element.select2('val');
                if (val != null && isArray(val)) {
                    return val.join(',');
                }
            }
            else
                val = this.element.val();
            return val;
        };
        Object.defineProperty(Select2Editor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_value = function (value) {
            if (value != this.get_value()) {
                var val = value;
                if (!isEmptyOrNull(value) && this.isMultiple()) {
                    val = value.split(String.fromCharCode(44)).map(function (x) {
                        return trimToNull(x);
                    }).filter(function (x1) {
                        return x1 != null;
                    });
                }
                var el = this.element;
                el.select2('val', val);
                el.data('select2-change-triggered', true);
                try {
                    el.triggerHandler('change', [true]); // valueSet: true
                }
                finally {
                    el.data('select2-change-triggered', false);
                }
                this.updateInplaceReadOnly();
            }
        };
        Object.defineProperty(Select2Editor.prototype, "selectedItem", {
            get: function () {
                var selectedValue = this.get_value();
                if (selectedValue && this._itemById) {
                    var item = this._itemById[selectedValue];
                    if (item)
                        return item.source;
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Select2Editor.prototype, "selectedItems", {
            get: function () {
                var selectedValues = this.values;
                var result = [];
                for (var _i = 0, selectedValues_1 = selectedValues; _i < selectedValues_1.length; _i++) {
                    var value = selectedValues_1[_i];
                    if (value && this._itemById) {
                        var item = this._itemById[value];
                        if (item && item.source)
                            result.push(item.source);
                        else
                            result.push(null);
                    }
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.get_values = function () {
            var val = this.element.select2('val');
            if (val == null) {
                return [];
            }
            if (isArray(val)) {
                return val;
            }
            var str = val;
            if (isEmptyOrNull(str)) {
                return [];
            }
            return [str];
        };
        Object.defineProperty(Select2Editor.prototype, "values", {
            get: function () {
                return this.get_values();
            },
            set: function (value) {
                this.set_values(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_values = function (value) {
            if (value == null || value.length === 0) {
                this.set_value(null);
                return;
            }
            this.set_value(value.join(','));
        };
        Select2Editor.prototype.get_text = function () {
            var _a;
            return ((_a = this.element.select2('data')) !== null && _a !== void 0 ? _a : {}).text;
        };
        Object.defineProperty(Select2Editor.prototype, "text", {
            get: function () {
                return this.get_text();
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.get_readOnly = function () {
            return !isEmptyOrNull(this.element.attr('readonly'));
        };
        Object.defineProperty(Select2Editor.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.updateInplaceReadOnly = function () {
            var readOnly = this.get_readOnly() &&
                (this.isMultiple() || !this.value);
            this.element.nextAll('.inplace-create')
                .attr('disabled', (readOnly ? 'disabled' : ''))
                .css('opacity', (readOnly ? '0.1' : ''))
                .css('cursor', (readOnly ? 'default' : ''));
        };
        Select2Editor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                this.element.attr("readonly", value ? "readonly" : null);
                this.updateInplaceReadOnly();
            }
        };
        Select2Editor.prototype.getCascadeFromValue = function (parent) {
            return EditorUtils.getValue(parent);
        };
        Select2Editor.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (isEmptyOrNull(value)) {
                if (this.cascadeLink != null) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new CascadedWidgetLink(Widget, this, function (p) {
                _this.set_cascadeValue(_this.getCascadeFromValue(p));
            });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Select2Editor.prototype.get_cascadeFrom = function () {
            return this.options.cascadeFrom;
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeFrom", {
            get: function () {
                return this.get_cascadeFrom();
            },
            set: function (value) {
                this.set_cascadeFrom(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeFrom = function (value) {
            if (value !== this.options.cascadeFrom) {
                this.setCascadeFrom(value);
                this.updateItems();
            }
        };
        Select2Editor.prototype.get_cascadeField = function () {
            var _a;
            return ((_a = this.options.cascadeField) !== null && _a !== void 0 ? _a : this.options.cascadeFrom);
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeField", {
            get: function () {
                return this.get_cascadeField();
            },
            set: function (value) {
                this.set_cascadeField(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeField = function (value) {
            this.options.cascadeField = value;
        };
        Select2Editor.prototype.get_cascadeValue = function () {
            return this.options.cascadeValue;
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeValue", {
            get: function () {
                return this.get_cascadeValue();
            },
            set: function (value) {
                this.set_cascadeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeValue = function (value) {
            if (this.options.cascadeValue !== value) {
                this.options.cascadeValue = value;
                this.set_value(null);
                this.updateItems();
            }
        };
        Select2Editor.prototype.get_filterField = function () {
            return this.options.filterField;
        };
        Object.defineProperty(Select2Editor.prototype, "filterField", {
            get: function () {
                return this.get_filterField();
            },
            set: function (value) {
                this.set_filterField(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_filterField = function (value) {
            this.options.filterField = value;
        };
        Select2Editor.prototype.get_filterValue = function () {
            return this.options.filterValue;
        };
        Object.defineProperty(Select2Editor.prototype, "filterValue", {
            get: function () {
                return this.get_filterValue();
            },
            set: function (value) {
                this.set_filterValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_filterValue = function (value) {
            if (this.options.filterValue !== value) {
                this.options.filterValue = value;
                this.set_value(null);
                this.updateItems();
            }
        };
        Select2Editor.prototype.cascadeItems = function (items) {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return [];
                }
                return items;
            }
            var key = val.toString();
            var fld = this.get_cascadeField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        Select2Editor.prototype.filterItems = function (items) {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return items;
            }
            var key = val.toString();
            var fld = this.get_filterField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        Select2Editor.prototype.updateItems = function () {
        };
        Select2Editor.prototype.getDialogTypeKey = function () {
            if (this.options.dialogType != null) {
                return this.options.dialogType;
            }
            return null;
        };
        Select2Editor.prototype.createEditDialog = function (callback) {
            var dialogTypeKey = this.getDialogTypeKey();
            var dialogType = DialogTypeRegistry.get(dialogTypeKey);
            Widget.create({
                type: dialogType,
                init: function (x) { return callback(x); }
            });
        };
        Select2Editor.prototype.initNewEntity = function (entity) {
            if (!isEmptyOrNull(this.get_cascadeField())) {
                entity[this.get_cascadeField()] = this.get_cascadeValue();
            }
            if (!isEmptyOrNull(this.get_filterField())) {
                entity[this.get_filterField()] = this.get_filterValue();
            }
            if (this.onInitNewEntity != null) {
                this.onInitNewEntity(entity);
            }
        };
        Select2Editor.prototype.setEditDialogReadOnly = function (dialog) {
            // an ugly workaround
            dialog.element && dialog.element
                .find('.tool-button.delete-button')
                .addClass('disabled')
                .unbind('click');
        };
        Select2Editor.prototype.editDialogDataChange = function () {
        };
        Select2Editor.prototype.setTermOnNewEntity = function (entity, term) {
        };
        Select2Editor.prototype.inplaceCreateClick = function (e) {
            var _this = this;
            if (this.get_readOnly() &&
                ((this.isMultiple() && !e['editItem']) || !this.value))
                return;
            this.createEditDialog(function (dialog) {
                if (_this.get_readOnly())
                    _this.setEditDialogReadOnly(dialog);
                SubDialogHelper.bindToDataChange(dialog, _this, function (x, dci) {
                    _this.editDialogDataChange();
                    _this.updateItems();
                    _this.lastCreateTerm = null;
                    if ((dci.type === 'create' || dci.type === 'update') &&
                        dci.entityId != null) {
                        var id = dci.entityId.toString();
                        if (_this.isMultiple()) {
                            var values = _this.get_values().slice();
                            if (values.indexOf(id) < 0) {
                                values.push(id);
                            }
                            _this.set_values(null);
                            _this.set_values(values.slice());
                        }
                        else {
                            _this.set_value(null);
                            _this.set_value(id);
                        }
                    }
                    else if (_this.isMultiple() && dci.type === 'delete' &&
                        dci.entityId != null) {
                        var id1 = dci.entityId.toString();
                        var values1 = _this.get_values().slice();
                        var idx1 = values1.indexOf(id1);
                        if (idx1 >= 0)
                            values1.splice(idx1, 1);
                        _this.set_values(values1.slice());
                    }
                    else if (!_this.isMultiple()) {
                        _this.set_value(null);
                    }
                }, true);
                var editItem = e['editItem'];
                if (editItem != null) {
                    dialog.load(editItem, function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
                else if (_this.isMultiple() || isEmptyOrNull(_this.get_value())) {
                    var entity = {};
                    _this.setTermOnNewEntity(entity, trimToEmpty(_this.lastCreateTerm));
                    _this.initNewEntity(entity);
                    dialog.load(entity, function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
                else {
                    dialog.load(_this.get_value(), function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
            });
        };
        var Select2Editor_1;
        Select2Editor = Select2Editor_1 = __decorate([
            Decorators.registerClass('Serenity.Select2Editor', [ISetEditValue, IGetEditValue, IStringValue, IReadOnly]),
            Decorators.element("<input type=\"hidden\"/>")
        ], Select2Editor);
        return Select2Editor;
    }(Widget));

    var SelectEditor = /** @class */ (function (_super) {
        __extends(SelectEditor, _super);
        function SelectEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        SelectEditor.prototype.getItems = function () {
            return this.options.items || [];
        };
        SelectEditor.prototype.emptyItemText = function () {
            if (!isEmptyOrNull(this.options.emptyOptionText)) {
                return this.options.emptyOptionText;
            }
            return _super.prototype.emptyItemText.call(this);
        };
        SelectEditor.prototype.updateItems = function () {
            var _a;
            var items = this.getItems();
            this.clearItems();
            if (items.length > 0) {
                var isStrings = typeof (items[0]) === 'string';
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    var key = isStrings ? item : item[0];
                    var text = isStrings ? item : ((_a = item[1]) !== null && _a !== void 0 ? _a : item[0]);
                    this.addOption(key, text, item, false);
                }
            }
        };
        SelectEditor = __decorate([
            Decorators.registerClass('Serenity.SelectEditor')
        ], SelectEditor);
        return SelectEditor;
    }(Select2Editor));

    var DateYearEditor = /** @class */ (function (_super) {
        __extends(DateYearEditor, _super);
        function DateYearEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        DateYearEditor.prototype.getItems = function () {
            var _a, _b;
            var opt = this.options;
            if (opt.items != null && opt.items.length >= 1) {
                return opt.items;
            }
            var years = [];
            var minYear = (new Date()).getFullYear();
            var maxYear = (new Date()).getFullYear();
            opt.minYear = ((_a = opt.minYear) !== null && _a !== void 0 ? _a : '-10').toString();
            if (startsWith(opt.minYear, '-')) {
                minYear -= parseInt(opt.minYear.substr(1), 10);
            }
            else if (startsWith(opt.minYear, '+')) {
                minYear += parseInt(opt.minYear.substr(1), 10);
            }
            else {
                minYear = parseInt(opt.minYear, 10);
            }
            opt.maxYear = ((_b = opt.maxYear) !== null && _b !== void 0 ? _b : '+10').toString();
            if (startsWith(opt.maxYear, '-')) {
                maxYear -= parseInt(opt.maxYear.substr(1), 10);
            }
            else if (startsWith(opt.maxYear, '+')) {
                maxYear += parseInt(opt.maxYear.substr(1), 10);
            }
            else {
                maxYear = parseInt(opt.maxYear, 10);
            }
            if (opt.descending) {
                for (var i = maxYear; i >= minYear; i--) {
                    years.push(i.toString());
                }
            }
            else {
                for (var i1 = minYear; i1 <= maxYear; i1++) {
                    years.push(i1.toString());
                }
            }
            return years;
        };
        DateYearEditor = __decorate([
            Decorators.registerEditor('Serenity.DateYearEditor')
        ], DateYearEditor);
        return DateYearEditor;
    }(SelectEditor));

    var EnumEditor = /** @class */ (function (_super) {
        __extends(EnumEditor, _super);
        function EnumEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        EnumEditor.prototype.updateItems = function () {
            var _a;
            this.clearItems();
            var enumType = this.options.enumType || EnumTypeRegistry.get(this.options.enumKey);
            var enumKey = this.options.enumKey;
            if (enumKey == null && enumType != null) {
                var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
                if (enumKeyAttr.length > 0) {
                    enumKey = enumKeyAttr[0].value;
                }
            }
            var values = Enum.getValues(enumType);
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var x = values_1[_i];
                var name = Enum.toString(enumType, x);
                this.addOption(parseInt(x, 10).toString(), ((_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name), null, false);
            }
        };
        EnumEditor.prototype.allowClear = function () {
            var _a;
            return ((_a = this.options.allowClear) !== null && _a !== void 0 ? _a : true);
        };
        EnumEditor = __decorate([
            Decorators.registerEditor('Serenity.EnumEditor')
        ], EnumEditor);
        return EnumEditor;
    }(Select2Editor));

    var LookupEditorBase = /** @class */ (function (_super) {
        __extends(LookupEditorBase, _super);
        function LookupEditorBase(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            if (!_this.hasAsyncSource()) {
                _this.updateItems();
                var self = _this;
                ScriptData.bindToChange('Lookup.' + _this.getLookupKey(), _this.uniqueName, function () {
                    self.updateItems();
                });
            }
            return _this;
        }
        LookupEditorBase.prototype.hasAsyncSource = function () {
            return !!this.options.async;
        };
        LookupEditorBase.prototype.destroy = function () {
            if (!this.hasAsyncSource())
                ScriptData.unbindFromChange(this.uniqueName);
            _super.prototype.destroy.call(this);
        };
        LookupEditorBase.prototype.getLookupKey = function () {
            if (this.options.lookupKey != null) {
                return this.options.lookupKey;
            }
            var key = getTypeFullName(getInstanceType(this));
            var idx = key.indexOf('.');
            if (idx >= 0) {
                key = key.substring(idx + 1);
            }
            if (endsWith(key, 'Editor')) {
                key = key.substr(0, key.length - 6);
            }
            return key;
        };
        LookupEditorBase.prototype.getLookupAsync = function () {
            return getLookupAsync(this.getLookupKey());
        };
        LookupEditorBase.prototype.getLookup = function () {
            return getLookup(this.getLookupKey());
        };
        LookupEditorBase.prototype.getItems = function (lookup) {
            return this.filterItems(this.cascadeItems(lookup.items));
        };
        LookupEditorBase.prototype.getIdField = function () {
            return this.lookup != null ? this.lookup.idField : _super.prototype.getIdField.call(this);
        };
        LookupEditorBase.prototype.getItemText = function (item, lookup) {
            if (lookup == null)
                return _super.prototype.itemText.call(this, item);
            var textValue = lookup.textFormatter ? lookup.textFormatter(item) : item[lookup.textField];
            return textValue == null ? '' : textValue.toString();
        };
        LookupEditorBase.prototype.mapItem = function (item) {
            return {
                id: this.itemId(item),
                text: this.getItemText(item, this.lookup),
                disabled: this.getItemDisabled(item, this.lookup),
                source: item
            };
        };
        LookupEditorBase.prototype.getItemDisabled = function (item, lookup) {
            return _super.prototype.itemDisabled.call(this, item);
        };
        LookupEditorBase.prototype.updateItems = function () {
            this.clearItems();
            this.lookup = this.getLookup();
            var items = this.getItems(this.lookup);
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.addItem(this.mapItem(item));
            }
        };
        LookupEditorBase.prototype.asyncSearch = function (query, results) {
            var _this = this;
            return this.getLookupAsync().then(function (lookup) {
                _this.lookup = lookup;
                var items = _this.getItems(_this.lookup);
                if (query.idList != null) {
                    items = items.filter(function (x) { return query.idList.indexOf(_this.itemId(x)) >= 0; });
                }
                function getText(item) {
                    return this.getItemText(item, this.lookup);
                }
                items = Select2Editor.filterByText(items, getText.bind(_this), query.searchTerm);
                results({
                    items: items.slice(query.skip, query.take),
                    more: items.length >= query.take
                });
            });
        };
        LookupEditorBase.prototype.getDialogTypeKey = function () {
            var dialogTypeKey = _super.prototype.getDialogTypeKey.call(this);
            if (dialogTypeKey)
                return dialogTypeKey;
            return this.getLookupKey();
        };
        LookupEditorBase.prototype.setCreateTermOnNewEntity = function (entity, term) {
            entity[this.getLookup().textField] = term;
        };
        LookupEditorBase.prototype.editDialogDataChange = function () {
            reloadLookup(this.getLookupKey());
        };
        LookupEditorBase = __decorate([
            Decorators.registerEditor("Serenity.LookupEditorBase")
        ], LookupEditorBase);
        return LookupEditorBase;
    }(Select2Editor));
    var LookupEditor = /** @class */ (function (_super) {
        __extends(LookupEditor, _super);
        function LookupEditor(hidden, opt) {
            return _super.call(this, hidden, opt) || this;
        }
        LookupEditor = __decorate([
            Decorators.registerEditor('Serenity.LookupEditor')
        ], LookupEditor);
        return LookupEditor;
    }(LookupEditorBase));

    var ServiceLookupEditorBase = /** @class */ (function (_super) {
        __extends(ServiceLookupEditorBase, _super);
        function ServiceLookupEditorBase(input, opt) {
            return _super.call(this, input, opt) || this;
        }
        ServiceLookupEditorBase.prototype.getDialogTypeKey = function () {
            var dialogTypeKey = _super.prototype.getDialogTypeKey.call(this);
            if (dialogTypeKey)
                return dialogTypeKey;
            var service = this.getService();
            if (startsWith(service, "~/Services/"))
                service = service.substr("~/Services/".length);
            if (service.split('/').length == 3)
                service = service.substr(0, service.lastIndexOf('/'));
            return service.replace("/", ".");
        };
        ServiceLookupEditorBase.prototype.getService = function () {
            return this.options.service;
        };
        ServiceLookupEditorBase.prototype.getServiceUrl = function () {
            var url = this.getService();
            if (url == null)
                throw new Error("ServiceLookupEditor requires 'service' option to be configured!");
            if (!startsWith(url, "~") && !startsWith(url, "/") && url.indexOf('://') < 0)
                url = "~/Services/" + url;
            if (startsWith(url, "~"))
                url = resolveUrl(url);
            return url;
        };
        ServiceLookupEditorBase.prototype.getIncludeColumns = function () {
            var include = this.options.includeColumns || [];
            var idField = this.getIdField();
            if (idField && include.indexOf(idField) < 0)
                include.push(idField);
            var textField = this.getTextField();
            if (textField && include.indexOf(textField) < 0)
                include.push(textField);
            return include;
        };
        ServiceLookupEditorBase.prototype.getSort = function () {
            return this.options.sort || (this.getTextField() ? [this.getTextField()] : null);
        };
        ServiceLookupEditorBase.prototype.getCascadeCriteria = function () {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return ['1', '=', '0'];
                }
                return null;
            }
            var fld = this.get_cascadeField();
            return [[fld], '=', val];
        };
        ServiceLookupEditorBase.prototype.getFilterCriteria = function () {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return null;
            }
            var fld = this.get_filterField();
            return [[fld], '=', val];
        };
        ServiceLookupEditorBase.prototype.getIdListCriteria = function (idList) {
            if (idList == null)
                return null;
            if (idList.length == 0)
                return ['0', '=', '1'];
            var idField = this.getIdField();
            if (idField == null)
                throw new Error("ServiceLookupEditor requires 'idField' option to be configured!");
            return [[idField], 'in', [idList]];
        };
        ServiceLookupEditorBase.prototype.getCriteria = function (query) {
            return Criteria.and(Criteria.and(this.getIdListCriteria(query.idList), this.options.criteria), Criteria.and(this.getCascadeCriteria(), this.getFilterCriteria()));
        };
        ServiceLookupEditorBase.prototype.getListRequest = function (query) {
            var request = {};
            if (query.searchTerm)
                request.ContainsText = query.searchTerm;
            request.Sort = this.getSort();
            request.ColumnSelection = this.options.columnSelection || 1 /* KeyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            request.ExcludeColumns = this.options.excludeColumns;
            request.ContainsField = this.options.containsField;
            request.EqualityFilter = this.options.equalityFilter;
            request.Criteria = this.getCriteria(query);
            request.Skip = query.skip || 0;
            request.Take = query.take ? (query.checkMore ? query.take + 1 : query.take) : 0;
            request.IncludeDeleted = this.options.includeDeleted;
            request.ExcludeTotalCount = true;
            return request;
        };
        ServiceLookupEditorBase.prototype.getServiceCallOptions = function (query, results) {
            return {
                blockUI: false,
                url: this.getServiceUrl(),
                request: this.getListRequest(query),
                onSuccess: function (response) {
                    var items = response.Entities || [];
                    if (items && query.take && query.checkMore && response.Entities.length > items.length)
                        items = items.slice(0, query.take);
                    results({
                        items: items.slice(0, query.take),
                        more: query.checkMore && query.take && items.length > query.take
                    });
                }
            };
        };
        ServiceLookupEditorBase.prototype.hasAsyncSource = function () {
            return true;
        };
        ServiceLookupEditorBase.prototype.asyncSearch = function (query, results) {
            var opt = this.getServiceCallOptions(query, results);
            return serviceCall(opt);
        };
        ServiceLookupEditorBase = __decorate([
            Decorators.registerEditor("Serenity.ServiceLookupEditorBase")
        ], ServiceLookupEditorBase);
        return ServiceLookupEditorBase;
    }(Select2Editor));
    var ServiceLookupEditor = /** @class */ (function (_super) {
        __extends(ServiceLookupEditor, _super);
        function ServiceLookupEditor(hidden, opt) {
            return _super.call(this, hidden, opt) || this;
        }
        ServiceLookupEditor = __decorate([
            Decorators.registerEditor('Serenity.ServiceLookupEditor')
        ], ServiceLookupEditor);
        return ServiceLookupEditor;
    }(ServiceLookupEditorBase));

    var HtmlContentEditor = /** @class */ (function (_super) {
        __extends(HtmlContentEditor, _super);
        function HtmlContentEditor(textArea, opt) {
            var _this = _super.call(this, textArea, opt) || this;
            _this._instanceReady = false;
            HtmlContentEditor_1.includeCKEditor();
            var id = textArea.attr('id');
            if (isTrimmedEmpty(id)) {
                textArea.attr('id', _this.uniqueName);
                id = _this.uniqueName;
            }
            if (_this.options.cols != null)
                textArea.attr('cols', _this.options.cols);
            if (_this.options.rows != null)
                textArea.attr('rows', _this.options.rows);
            _this.addValidationRule(_this.uniqueName, function (e) {
                if (e.hasClass('required')) {
                    var value = trimToNull(_this.get_value());
                    if (value == null)
                        return text('Validation.Required');
                }
                return null;
            });
            LazyLoadHelper.executeOnceWhenShown(_this.element, function () {
                var config = _this.getConfig();
                window['CKEDITOR'] && window['CKEDITOR'].replace(id, config);
            });
            return _this;
        }
        HtmlContentEditor_1 = HtmlContentEditor;
        HtmlContentEditor.prototype.instanceReady = function (x) {
            this._instanceReady = true;
            $(x.editor.container.$).addClass(this.element.attr('class'));
            this.element.addClass('select2-offscreen').css('display', 'block');
            // for validation to work
            x.editor.setData(this.element.val());
            x.editor.setReadOnly(this.get_readOnly());
        };
        HtmlContentEditor.prototype.getLanguage = function () {
            var _a;
            if (!window['CKEDITOR'])
                return 'en';
            var CKEDITOR = window['CKEDITOR'];
            var lang = ((_a = trimToNull($('html').attr('lang'))) !== null && _a !== void 0 ? _a : 'en');
            if (!!CKEDITOR.lang.languages[lang]) {
                return lang;
            }
            if (lang.indexOf(String.fromCharCode(45)) >= 0) {
                lang = lang.split(String.fromCharCode(45))[0];
            }
            if (!!CKEDITOR.lang.languages[lang]) {
                return lang;
            }
            return 'en';
        };
        HtmlContentEditor.prototype.getConfig = function () {
            var _this = this;
            return {
                customConfig: '',
                language: this.getLanguage(),
                bodyClass: 's-HtmlContentBody',
                on: {
                    instanceReady: function (x) { return _this.instanceReady(x); },
                    change: function (x1) {
                        x1.editor.updateElement();
                        _this.element.triggerHandler('change');
                    }
                },
                toolbarGroups: [
                    {
                        name: 'clipboard',
                        groups: ['clipboard', 'undo']
                    }, {
                        name: 'editing',
                        groups: ['find', 'selection', 'spellchecker']
                    }, {
                        name: 'insert',
                        groups: ['links', 'insert', 'blocks', 'bidi', 'list', 'indent']
                    }, {
                        name: 'forms',
                        groups: ['forms', 'mode', 'document', 'doctools', 'others', 'about', 'tools']
                    }, {
                        name: 'colors'
                    }, {
                        name: 'basicstyles',
                        groups: ['basicstyles', 'cleanup']
                    }, {
                        name: 'align'
                    }, {
                        name: 'styles'
                    }
                ],
                removeButtons: 'SpecialChar,Anchor,Subscript,Styles',
                format_tags: 'p;h1;h2;h3;pre',
                removeDialogTabs: 'image:advanced;link:advanced',
                removePlugins: 'uploadimage,image2',
                contentsCss: resolveUrl('~/Content/site/site.htmlcontent.css'),
                entities: false,
                entities_latin: false,
                entities_greek: false,
                autoUpdateElement: true,
                height: (this.options.rows == null || this.options.rows === 0) ? null :
                    ((this.options.rows * 20) + 'px')
            };
        };
        HtmlContentEditor.prototype.getEditorInstance = function () {
            var id = this.element.attr('id');
            return window['CKEDITOR'].instances[id];
        };
        HtmlContentEditor.prototype.destroy = function () {
            var instance = this.getEditorInstance();
            instance && instance.destroy(true);
            _super.prototype.destroy.call(this);
        };
        HtmlContentEditor.prototype.get_value = function () {
            var instance = this.getEditorInstance();
            if (this._instanceReady && instance) {
                return instance.getData();
            }
            else {
                return this.element.val();
            }
        };
        Object.defineProperty(HtmlContentEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        HtmlContentEditor.prototype.set_value = function (value) {
            var instance = this.getEditorInstance();
            this.element.val(value);
            if (this._instanceReady && instance)
                instance.setData(value);
        };
        HtmlContentEditor.prototype.get_readOnly = function () {
            return !isEmptyOrNull(this.element.attr('disabled'));
        };
        HtmlContentEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.element.attr('disabled', 'disabled');
                }
                else {
                    this.element.removeAttr('disabled');
                }
                var instance = this.getEditorInstance();
                if (this._instanceReady && instance)
                    instance.setReadOnly(value);
            }
        };
        HtmlContentEditor.getCKEditorBasePath = function () {
            var path = HtmlContentEditor_1.CKEditorBasePath;
            if (path == null) {
                // @ts-ignore
                if (typeof CKEDITOR_BASEPATH !== "undefined" && CKEDITOR_BASEPATH)
                    // @ts-ignore
                    path = CKEDITOR_BASEPATH;
                else
                    return "~/Scripts/ckeditor/";
            }
            if (endsWith(path, '/'))
                return path;
            return path + '/';
        };
        HtmlContentEditor.includeCKEditor = function () {
            if (window['CKEDITOR']) {
                return;
            }
            var script = $('#CKEditorScript');
            if (script.length > 0) {
                return;
            }
            $('<script/>').attr('type', 'text/javascript')
                .attr('id', 'CKEditorScript')
                .attr('src', resolveUrl(HtmlContentEditor_1.getCKEditorBasePath() + 'ckeditor.js?v=' +
                HtmlContentEditor_1.CKEditorVer))
                .appendTo(window.document.head);
        };
        var HtmlContentEditor_1;
        HtmlContentEditor.CKEditorVer = "4.7.1";
        HtmlContentEditor = HtmlContentEditor_1 = __decorate([
            Decorators.registerEditor('Serenity.HtmlContentEditor', [IStringValue, IReadOnly]),
            Decorators.element('<textarea/>')
        ], HtmlContentEditor);
        return HtmlContentEditor;
    }(Widget));
    var HtmlNoteContentEditor = /** @class */ (function (_super) {
        __extends(HtmlNoteContentEditor, _super);
        function HtmlNoteContentEditor(textArea, opt) {
            return _super.call(this, textArea, opt) || this;
        }
        HtmlNoteContentEditor.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,' +
                'Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,PasteText,' +
                'PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,Image,Table,' +
                'HorizontalRule,Source,Maximize,Format,Font,FontSize,Anchor,Blockquote,' +
                'CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,' +
                'JustifyRight,JustifyBlock,Superscript,RemoveFormat';
            config.removePlugins = 'elementspath,uploadimage,image2';
            return config;
        };
        HtmlNoteContentEditor = __decorate([
            Decorators.registerEditor('Serenity.HtmlNoteContentEditor')
        ], HtmlNoteContentEditor);
        return HtmlNoteContentEditor;
    }(HtmlContentEditor));
    var HtmlReportContentEditor = /** @class */ (function (_super) {
        __extends(HtmlReportContentEditor, _super);
        function HtmlReportContentEditor(textArea, opt) {
            return _super.call(this, textArea, opt) || this;
        }
        HtmlReportContentEditor.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,' +
                'Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,' +
                'PasteText,PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,' +
                'Image,Table,HorizontalRule,Source,Maximize,Format,Font,FontSize,' +
                'Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,' +
                'JustifyRight,JustifyBlock,Superscript,RemoveFormat';
            config.removePlugins = 'elementspath,uploadimage,image2';
            return config;
        };
        HtmlReportContentEditor = __decorate([
            Decorators.registerEditor('Serenity.HtmlReportContentEditor')
        ], HtmlReportContentEditor);
        return HtmlReportContentEditor;
    }(HtmlContentEditor));

    // http://digitalbush.com/projects/masked-input-plugin/
    var MaskedEditor = /** @class */ (function (_super) {
        __extends(MaskedEditor, _super);
        function MaskedEditor(input, opt) {
            var _a;
            var _this = _super.call(this, input, opt) || this;
            input.mask(_this.options.mask || '', {
                placeholder: ((_a = _this.options.placeholder) !== null && _a !== void 0 ? _a : '_')
            });
            return _this;
        }
        Object.defineProperty(MaskedEditor.prototype, "value", {
            get: function () {
                this.element.triggerHandler("blur.mask");
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        MaskedEditor.prototype.get_value = function () {
            return this.value;
        };
        MaskedEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        MaskedEditor = __decorate([
            Decorators.registerEditor('Serenity.MaskedEditor', [IStringValue]),
            Decorators.element("<input type=\"text\"/>")
        ], MaskedEditor);
        return MaskedEditor;
    }(Widget));

    var Recaptcha = /** @class */ (function (_super) {
        __extends(Recaptcha, _super);
        function Recaptcha(div, opt) {
            var _a;
            var _this = _super.call(this, div, opt) || this;
            _this.element.addClass('g-recaptcha').attr('data-sitekey', _this.options.siteKey);
            if (!!(window['grecaptcha'] == null && $('script#RecaptchaInclude').length === 0)) {
                var src = 'https://www.google.com/recaptcha/api.js';
                var lng = _this.options.language;
                if (lng == null) {
                    lng = (_a = $('html').attr('lang')) !== null && _a !== void 0 ? _a : '';
                }
                src += '?hl=' + lng;
                $('<script/>').attr('id', 'RecaptchaInclude').attr('src', src).appendTo(document.body);
            }
            var valInput = $('<input />').insertBefore(_this.element)
                .attr('id', _this.uniqueName + '_validate').val('x');
            var gro = {};
            gro['visibility'] = 'hidden';
            gro['width'] = '0px';
            gro['height'] = '0px';
            gro['padding'] = '0px';
            var input = valInput.css(gro);
            addValidationRule(input, _this.uniqueName, function (e) {
                if (isEmptyOrNull(_this.get_value())) {
                    return text('Validation.Required');
                }
                return null;
            });
            return _this;
        }
        Recaptcha.prototype.get_value = function () {
            return this.element.find('.g-recaptcha-response').val();
        };
        Recaptcha.prototype.set_value = function (value) {
            // ignore
        };
        Recaptcha = __decorate([
            Decorators.registerEditor('Serenity.Recaptcha', [IStringValue]),
            Decorators.element("<div/>")
        ], Recaptcha);
        return Recaptcha;
    }(Widget));

    var FileUploadEditor = /** @class */ (function (_super) {
        __extends(FileUploadEditor, _super);
        function FileUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            if (!opt || opt.allowNonImage == null)
                _this.options.allowNonImage = true;
            div.addClass('s-FileUploadEditor');
            if (isEmptyOrNull(_this.options.originalNameProperty))
                div.addClass('hide-original-name');
            _this.toolbar = new Toolbar($('<div/>').appendTo(_this.element), {
                buttons: _this.getToolButtons()
            });
            $('<div><div></div></div>')
                .addClass('upload-progress')
                .prependTo(_this.toolbar.element);
            var uio = _this.getUploadInputOptions();
            _this.uploadInput = UploadHelper.addUploadInput(uio);
            _this.fileSymbols = $('<ul/>').appendTo(_this.element);
            if (!_this.element.attr('id'))
                _this.element.attr('id', _this.uniqueName);
            _this.hiddenInput = $('<input type="text" class="s-offscreen" name="' + _this.uniqueName +
                '_Validator" data-vx-highlight="' + _this.element.attr('id') + '"/>')
                .appendTo(_this.element);
            _this.updateInterface();
            return _this;
        }
        FileUploadEditor.prototype.getUploadInputOptions = function () {
            var _this = this;
            return {
                container: this.toolbar.findButton('add-file-button'),
                zone: this.element,
                inputName: this.uniqueName,
                progress: this.progress,
                fileDone: function (response, name, data) {
                    if (!UploadHelper.checkImageConstraints(response, _this.options)) {
                        return;
                    }
                    var newEntity = {
                        OriginalName: name,
                        Filename: response.TemporaryFile
                    };
                    _this.entity = newEntity;
                    _this.populate();
                    _this.updateInterface();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                }
            };
        };
        FileUploadEditor.prototype.addFileButtonText = function () {
            return text('Controls.ImageUpload.AddFileButton');
        };
        FileUploadEditor.prototype.getToolButtons = function () {
            var _this = this;
            return [
                {
                    title: this.addFileButtonText(),
                    cssClass: 'add-file-button',
                    onClick: function () {
                    }
                },
                {
                    title: '',
                    hint: text('Controls.ImageUpload.DeleteButtonHint'),
                    cssClass: 'delete-button',
                    onClick: function () {
                        _this.entity = null;
                        _this.populate();
                        _this.updateInterface();
                        var validator = _this.hiddenInput.closest('form').data('validator');
                        if (validator != null) {
                            validator.element(_this.hiddenInput);
                        }
                    }
                }
            ];
        };
        FileUploadEditor.prototype.populate = function () {
            var displayOriginalName = this.options.displayFileName ||
                !isTrimmedEmpty(this.options.originalNameProperty);
            if (this.entity == null) {
                UploadHelper.populateFileSymbols(this.fileSymbols, null, displayOriginalName, this.options.urlPrefix);
            }
            else {
                UploadHelper.populateFileSymbols(this.fileSymbols, [this.entity], displayOriginalName, this.options.urlPrefix);
            }
            this.hiddenInput.val(trimToNull((this.get_value() || {}).Filename));
        };
        FileUploadEditor.prototype.updateInterface = function () {
            var addButton = this.toolbar.findButton('add-file-button');
            var delButton = this.toolbar.findButton('delete-button');
            addButton.toggleClass('disabled', this.get_readOnly());
            delButton.toggleClass('disabled', this.get_readOnly() ||
                this.entity == null);
        };
        FileUploadEditor.prototype.get_readOnly = function () {
            return this.uploadInput.attr('disabled') != null;
        };
        FileUploadEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.uploadInput.attr('disabled', 'disabled');
                    try {
                        this.uploadInput.fileupload('disable');
                    }
                    catch (_a) {
                    }
                }
                else {
                    this.uploadInput.removeAttr('disabled');
                    try {
                        this.uploadInput.fileupload('enable');
                    }
                    catch (_b) {
                    }
                }
                this.updateInterface();
            }
        };
        FileUploadEditor.prototype.get_required = function () {
            return this.hiddenInput.hasClass('required');
        };
        FileUploadEditor.prototype.set_required = function (value) {
            this.hiddenInput.toggleClass('required', !!value);
        };
        FileUploadEditor.prototype.get_value = function () {
            if (this.entity == null) {
                return null;
            }
            var copy = extend({}, this.entity);
            return copy;
        };
        Object.defineProperty(FileUploadEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        FileUploadEditor.prototype.set_value = function (value) {
            var stringValue = value;
            if (typeof stringValue === "string") {
                var stringValue = trimToNull(stringValue);
                if (value != null) {
                    var idx = stringValue.indexOf('/');
                    if (idx < 0)
                        idx = stringValue.indexOf('\\');
                    value = {
                        Filename: value,
                        OriginalName: stringValue.substring(idx + 1)
                    };
                }
            }
            else if (value != null && isTrimmedEmpty(value.Filename))
                value = null;
            if (value != null) {
                if (value.Filename == null) {
                    this.entity = null;
                }
                else {
                    this.entity = extend({}, value);
                }
            }
            else {
                this.entity = null;
            }
            this.populate();
            var validator = this.hiddenInput.closest('form').data('validator');
            if (validator != null) {
                validator.element(this.hiddenInput);
            }
            this.updateInterface();
        };
        FileUploadEditor.prototype.getEditValue = function (property, target) {
            target[property.name] = this.entity == null ? null :
                trimToNull(this.entity.Filename);
        };
        FileUploadEditor.prototype.setEditValue = function (source, property) {
            var _a;
            var value = {};
            value.Filename = source[property.name];
            if (isEmptyOrNull(this.options.originalNameProperty)) {
                if (this.options.displayFileName) {
                    var s = ((_a = value.Filename) !== null && _a !== void 0 ? _a : '');
                    var idx = replaceAll(s, '\\', '/').lastIndexOf('/');
                    if (idx >= 0) {
                        value.OriginalName = s.substr(idx + 1);
                    }
                    else {
                        value.OriginalName = s;
                    }
                }
            }
            else {
                value.OriginalName = source[this.options.originalNameProperty];
            }
            this.set_value(value);
        };
        FileUploadEditor = __decorate([
            Decorators.registerEditor('Serenity.FileUploadEditor', [IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired]),
            Decorators.element('<div/>')
        ], FileUploadEditor);
        return FileUploadEditor;
    }(Widget));
    var ImageUploadEditor = /** @class */ (function (_super) {
        __extends(ImageUploadEditor, _super);
        function ImageUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            if (opt && opt.allowNonImage == null)
                _this.options.allowNonImage = false;
            div.addClass('s-ImageUploadEditor');
            return _this;
        }
        ImageUploadEditor = __decorate([
            Decorators.registerEditor('Serenity.ImageUploadEditor')
        ], ImageUploadEditor);
        return ImageUploadEditor;
    }(FileUploadEditor));
    var MultipleFileUploadEditor = /** @class */ (function (_super) {
        __extends(MultipleFileUploadEditor, _super);
        function MultipleFileUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.entities = [];
            div.addClass('s-MultipleFileUploadEditor');
            var self = _this;
            _this.toolbar = new Toolbar($('<div/>').appendTo(_this.element), {
                buttons: _this.getToolButtons()
            });
            var progress = $('<div><div></div></div>')
                .addClass('upload-progress').prependTo(_this.toolbar.element);
            var addFileButton = _this.toolbar.findButton('add-file-button');
            _this.uploadInput = UploadHelper.addUploadInput({
                container: addFileButton,
                zone: _this.element,
                inputName: _this.uniqueName,
                progress: progress,
                fileDone: function (response, name, data) {
                    if (!UploadHelper.checkImageConstraints(response, _this.options)) {
                        return;
                    }
                    var newEntity = { OriginalName: name, Filename: response.TemporaryFile };
                    self.entities.push(newEntity);
                    self.populate();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                    self.updateInterface();
                }
            });
            _this.fileSymbols = $('<ul/>').appendTo(_this.element);
            if (!_this.element.attr('id')) {
                _this.element.attr('id', _this.uniqueName);
            }
            _this.hiddenInput = $('<input type="text" class="s-offscreen" name="' + _this.uniqueName +
                '_Validator" data-vx-highlight="' + _this.element.attr('id') + '"/>').appendTo(_this.element);
            _this.updateInterface();
            return _this;
        }
        MultipleFileUploadEditor.prototype.addFileButtonText = function () {
            return text('Controls.ImageUpload.AddFileButton');
        };
        MultipleFileUploadEditor.prototype.getToolButtons = function () {
            return [{
                    title: this.addFileButtonText(),
                    cssClass: 'add-file-button',
                    onClick: function () {
                    }
                }];
        };
        MultipleFileUploadEditor.prototype.populate = function () {
            var _this = this;
            UploadHelper.populateFileSymbols(this.fileSymbols, this.entities, true, this.options.urlPrefix);
            this.fileSymbols.children().each(function (i, e) {
                var x = i;
                $("<a class='delete'></a>").appendTo($(e).children('.filename'))
                    .click(function (ev) {
                    ev.preventDefault();
                    _this.entities.splice(x, 1);
                    _this.populate();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                });
            });
            this.hiddenInput.val(trimToNull((this.get_value()[0] || {}).Filename));
        };
        MultipleFileUploadEditor.prototype.updateInterface = function () {
            var addButton = this.toolbar.findButton('add-file-button');
            addButton.toggleClass('disabled', this.get_readOnly());
            this.fileSymbols.find('a.delete').toggle(!this.get_readOnly());
        };
        MultipleFileUploadEditor.prototype.get_readOnly = function () {
            return this.uploadInput.attr('disabled') != null;
        };
        MultipleFileUploadEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.uploadInput.attr('disabled', 'disabled');
                    try {
                        this.uploadInput.fileupload('disable');
                    }
                    catch (_a) {
                    }
                }
                else {
                    this.uploadInput.removeAttr('disabled');
                    try {
                        this.uploadInput.fileupload('enable');
                    }
                    catch (_b) {
                    }
                }
                this.updateInterface();
            }
        };
        MultipleFileUploadEditor.prototype.get_required = function () {
            return this.hiddenInput.hasClass('required');
        };
        MultipleFileUploadEditor.prototype.set_required = function (value) {
            this.hiddenInput && this.hiddenInput.toggleClass('required', !!value);
        };
        MultipleFileUploadEditor.prototype.get_value = function () {
            return this.entities.map(function (x) {
                return extend({}, x);
            });
        };
        Object.defineProperty(MultipleFileUploadEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        MultipleFileUploadEditor.prototype.set_value = function (value) {
            this.entities = (value || []).map(function (x) {
                return extend({}, x);
            });
            this.populate();
            this.updateInterface();
        };
        MultipleFileUploadEditor.prototype.getEditValue = function (property, target) {
            if (this.jsonEncodeValue) {
                target[property.name] = JSON.stringify(this.get_value());
            }
            else {
                target[property.name] = this.get_value();
            }
        };
        MultipleFileUploadEditor.prototype.setEditValue = function (source, property) {
            var _a;
            var val = source[property.name];
            if (isInstanceOfType(val, String)) {
                var json = (_a = trimToNull(val)) !== null && _a !== void 0 ? _a : '[]';
                if (startsWith(json, '[') && endsWith(json, ']')) {
                    this.set_value($.parseJSON(json));
                }
                else {
                    this.set_value([{
                            Filename: json,
                            OriginalName: 'UnknownFile'
                        }]);
                }
            }
            else {
                this.set_value(val);
            }
        };
        __decorate([
            Decorators.option()
        ], MultipleFileUploadEditor.prototype, "jsonEncodeValue", void 0);
        MultipleFileUploadEditor = __decorate([
            Decorators.registerEditor('Serenity.MultipleFileUploadEditor', [IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired]),
            Decorators.element('<div/>')
        ], MultipleFileUploadEditor);
        return MultipleFileUploadEditor;
    }(Widget));
    var MultipleImageUploadEditor = /** @class */ (function (_super) {
        __extends(MultipleImageUploadEditor, _super);
        function MultipleImageUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-MultipleImageUploadEditor');
            return _this;
        }
        MultipleImageUploadEditor = __decorate([
            Decorators.registerEditor('Serenity.MultipleImageUploadEditor')
        ], MultipleImageUploadEditor);
        return MultipleImageUploadEditor;
    }(MultipleFileUploadEditor));

    var QuickFilterBar = /** @class */ (function (_super) {
        __extends(QuickFilterBar, _super);
        function QuickFilterBar(container, options) {
            var _a;
            var _this = _super.call(this, container, options) || this;
            container.addClass('quick-filters-bar').addClass('clear');
            var filters = _this.options.filters;
            for (var f = 0; f < filters.length; f++) {
                var filter = filters[f];
                _this.add(filter);
            }
            _this.options.idPrefix = ((_a = _this.options.idPrefix) !== null && _a !== void 0 ? _a : _this.uniqueName + '_');
            return _this;
        }
        QuickFilterBar_1 = QuickFilterBar;
        QuickFilterBar.prototype.addSeparator = function () {
            this.element.append($('<hr/>'));
        };
        QuickFilterBar.prototype.add = function (opt) {
            var _this = this;
            if (opt == null) {
                throw new ArgumentNullException('opt');
            }
            if (opt.separator) {
                this.addSeparator();
            }
            var item = $("<div class='quick-filter-item'><span class='quick-filter-label'></span></div>")
                .appendTo(this.element)
                .data('qffield', opt.field).children();
            var title = opt.title;
            if (title == null) {
                title = this.options.getTitle ? this.options.getTitle(opt) : null;
                if (title == null) {
                    title = opt.field;
                }
            }
            var quickFilter = item.text(title).parent();
            if (opt.displayText != null) {
                quickFilter.data('qfdisplaytext', opt.displayText);
            }
            if (opt.saveState != null) {
                quickFilter.data('qfsavestate', opt.saveState);
            }
            if (opt.loadState != null) {
                quickFilter.data('qfloadstate', opt.loadState);
            }
            if (!isEmptyOrNull(opt.cssClass)) {
                quickFilter.addClass(opt.cssClass);
            }
            var widget = Widget.create({
                type: opt.type,
                element: function (e) {
                    if (!isEmptyOrNull(opt.field)) {
                        e.attr('id', _this.options.idPrefix + opt.field);
                    }
                    e.attr('placeholder', ' ');
                    e.appendTo(quickFilter);
                    if (opt.element != null) {
                        opt.element(e);
                    }
                },
                options: opt.options,
                init: opt.init
            });
            var submitHandler = function (request) {
                if (quickFilter.hasClass('ignore')) {
                    return;
                }
                request.EqualityFilter = request.EqualityFilter || {};
                var value = EditorUtils.getValue(widget);
                var active = value != null && !isEmptyOrNull(value.toString());
                if (opt.handler != null) {
                    var args = {
                        field: opt.field,
                        request: request,
                        equalityFilter: request.EqualityFilter,
                        value: value,
                        active: active,
                        widget: widget,
                        handled: true
                    };
                    opt.handler(args);
                    quickFilter.toggleClass('quick-filter-active', args.active);
                    if (!args.handled) {
                        request.EqualityFilter[opt.field] = value;
                    }
                }
                else {
                    request.EqualityFilter[opt.field] = value;
                    quickFilter.toggleClass('quick-filter-active', active);
                }
            };
            widget.changeSelect2(function (e1) {
                // use timeout give cascaded dropdowns a chance to update / clear themselves
                window.setTimeout(function () { return _this.onChange && _this.onChange(e1); }, 0);
            });
            this.add_submitHandlers(submitHandler);
            widget.element.bind('remove.' + this.uniqueName, function (x) {
                _this.remove_submitHandlers(submitHandler);
            });
            return widget;
        };
        QuickFilterBar.prototype.addDateRange = function (field, title) {
            return this.add(QuickFilterBar_1.dateRange(field, title));
        };
        QuickFilterBar.dateRange = function (field, title) {
            var end = null;
            return {
                field: field,
                type: DateEditor,
                title: title,
                element: function (e1) {
                    end = Widget.create({
                        type: DateEditor,
                        element: function (e2) {
                            e2.insertAfter(e1);
                        },
                        options: null,
                        init: null
                    });
                    end.element.change(function (x) {
                        e1.triggerHandler('change');
                    });
                    $('<span/>').addClass('range-separator').text('-').insertAfter(e1);
                },
                handler: function (args) {
                    var active1 = !isTrimmedEmpty(args.widget.value);
                    var active2 = !isTrimmedEmpty(end.value);
                    if (active1 && !parseDate(args.widget.element.val())) {
                        active1 = false;
                        notifyWarning(text('Validation.DateInvalid'), '', null);
                        args.widget.element.val('');
                    }
                    if (active2 && !parseDate(end.element.val())) {
                        active2 = false;
                        notifyWarning(text('Validation.DateInvalid'), '', null);
                        end.element.val('');
                    }
                    args.active = active1 || active2;
                    if (active1) {
                        args.request.Criteria = Criteria.join(args.request.Criteria, 'and', [[args.field], '>=', args.widget.value]);
                    }
                    if (active2) {
                        var next = new Date(end.valueAsDate.valueOf());
                        next.setDate(next.getDate() + 1);
                        args.request.Criteria = Criteria.join(args.request.Criteria, 'and', [[args.field], '<', formatDate(next, 'yyyy-MM-dd')]);
                    }
                },
                displayText: function (w, l) {
                    var _a;
                    var v1 = EditorUtils.getDisplayText(w);
                    var v2 = EditorUtils.getDisplayText(end);
                    if (isEmptyOrNull(v1) && isEmptyOrNull(v2)) {
                        return null;
                    }
                    var text1 = l + ' >= ' + v1;
                    var text2 = l + ' <= ' + v2;
                    if (!isEmptyOrNull(v1) && !isEmptyOrNull(v2)) {
                        return text1 + ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ' + text2;
                    }
                    else if (!isEmptyOrNull(v1)) {
                        return text1;
                    }
                    else {
                        return text2;
                    }
                },
                saveState: function (w1) {
                    return [EditorUtils.getValue(w1), EditorUtils.getValue(end)];
                },
                loadState: function (w2, state) {
                    if (state == null || !isArray(state) || state.length !== 2) {
                        state = [null, null];
                    }
                    EditorUtils.setValue(w2, state[0]);
                    EditorUtils.setValue(end, state[1]);
                }
            };
        };
        QuickFilterBar.prototype.addDateTimeRange = function (field, title) {
            return this.add(QuickFilterBar_1.dateTimeRange(field, title));
        };
        QuickFilterBar.dateTimeRange = function (field, title, useUtc) {
            var end = null;
            return {
                field: field,
                type: DateTimeEditor,
                title: title,
                element: function (e1) {
                    end = Widget.create({
                        type: DateTimeEditor,
                        element: function (e2) {
                            e2.insertAfter(e1);
                        },
                        options: useUtc == null ? null : { useUtc: useUtc },
                        init: null
                    });
                    end.element.change(function (x) {
                        e1.triggerHandler('change');
                    });
                    $('<span/>').addClass('range-separator').text('-').insertAfter(e1);
                },
                init: function (i) {
                    i.element.parent().find('.time').change(function (x1) {
                        i.element.triggerHandler('change');
                    });
                },
                handler: function (args) {
                    var active1 = !isTrimmedEmpty(args.widget.value);
                    var active2 = !isTrimmedEmpty(end.value);
                    if (active1 && !parseDate(args.widget.element.val())) {
                        active1 = false;
                        notifyWarning(text('Validation.DateInvalid'), '', null);
                        args.widget.element.val('');
                    }
                    if (active2 && !parseDate(end.element.val())) {
                        active2 = false;
                        notifyWarning(text('Validation.DateInvalid'), '', null);
                        end.element.val('');
                    }
                    args.active = active1 || active2;
                    if (active1) {
                        args.request.Criteria = Criteria.join(args.request.Criteria, 'and', [[args.field], '>=', args.widget.value]);
                    }
                    if (active2) {
                        args.request.Criteria = Criteria.join(args.request.Criteria, 'and', [[args.field], '<=', end.value]);
                    }
                },
                displayText: function (w, l) {
                    var _a;
                    var v1 = EditorUtils.getDisplayText(w);
                    var v2 = EditorUtils.getDisplayText(end);
                    if (isEmptyOrNull(v1) && isEmptyOrNull(v2)) {
                        return null;
                    }
                    var text1 = l + ' >= ' + v1;
                    var text2 = l + ' <= ' + v2;
                    if (!isEmptyOrNull(v1) && !isEmptyOrNull(v2)) {
                        return text1 + ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ' + text2;
                    }
                    else if (!isEmptyOrNull(v1)) {
                        return text1;
                    }
                    else {
                        return text2;
                    }
                },
                saveState: function (w1) {
                    return [EditorUtils.getValue(w1), EditorUtils.getValue(end)];
                },
                loadState: function (w2, state) {
                    if (state == null || !isArray(state) || state.length !== 2) {
                        state = [null, null];
                    }
                    EditorUtils.setValue(w2, state[0]);
                    EditorUtils.setValue(end, state[1]);
                },
                options: useUtc == null ? null : { useUtc: useUtc }
            };
        };
        QuickFilterBar.prototype.addBoolean = function (field, title, yes, no) {
            return this.add(QuickFilterBar_1.boolean(field, title, yes, no));
        };
        QuickFilterBar.boolean = function (field, title, yes, no) {
            var opt = {};
            var items = [];
            var trueText = yes;
            if (trueText == null) {
                trueText = text('Controls.FilterPanel.OperatorNames.true');
            }
            items.push(['1', trueText]);
            var falseText = no;
            if (falseText == null) {
                falseText = text('Controls.FilterPanel.OperatorNames.false');
            }
            items.push(['0', falseText]);
            opt.items = items;
            return {
                field: field,
                type: SelectEditor,
                title: title,
                options: opt,
                handler: function (args) {
                    args.equalityFilter[args.field] = args.value == null || isEmptyOrNull(args.value.toString()) ?
                        null : !!toId(args.value);
                }
            };
        };
        QuickFilterBar.prototype.destroy = function () {
            this.submitHandlers = null;
            _super.prototype.destroy.call(this);
        };
        QuickFilterBar.prototype.onSubmit = function (request) {
            this.submitHandlers && this.submitHandlers(request);
        };
        QuickFilterBar.prototype.add_submitHandlers = function (action) {
            this.submitHandlers = delegateCombine(this.submitHandlers, action);
        };
        QuickFilterBar.prototype.remove_submitHandlers = function (action) {
            this.submitHandlers = delegateRemove(this.submitHandlers, action);
        };
        QuickFilterBar.prototype.clear_submitHandlers = function () {
        };
        QuickFilterBar.prototype.find = function (type, field) {
            return $('#' + this.options.idPrefix + field).getWidget(type);
        };
        QuickFilterBar.prototype.tryFind = function (type, field) {
            var el = $('#' + this.options.idPrefix + field);
            if (!el.length)
                return null;
            return el.tryGetWidget(type);
        };
        var QuickFilterBar_1;
        QuickFilterBar = QuickFilterBar_1 = __decorate([
            Decorators.registerClass('Serenity.QuickFilterBar'),
            Decorators.element("<div/>")
        ], QuickFilterBar);
        return QuickFilterBar;
    }(Widget));

    var QuickSearchInput = /** @class */ (function (_super) {
        __extends(QuickSearchInput, _super);
        function QuickSearchInput(input, opt) {
            var _a, _b;
            var _this = _super.call(this, input, opt) || this;
            input.attr('title', text('Controls.QuickSearch.Hint'))
                .attr('placeholder', text('Controls.QuickSearch.Placeholder'));
            _this.lastValue = trim((_a = input.val()) !== null && _a !== void 0 ? _a : '');
            var self = _this;
            _this.element.bind('keyup.' + _this.uniqueName, function () {
                self.checkIfValueChanged();
            });
            _this.element.bind('change.' + _this.uniqueName, function () {
                self.checkIfValueChanged();
            });
            $('<span><i></i></span>').addClass('quick-search-icon')
                .insertBefore(input);
            if (isValue(_this.options.fields) && _this.options.fields.length > 0) {
                var a = $('<a/>').addClass('quick-search-field').attr('title', text('Controls.QuickSearch.FieldSelection')).insertBefore(input);
                var menu = $('<ul></ul>').css('width', '120px');
                for (var _i = 0, _c = _this.options.fields; _i < _c.length; _i++) {
                    var item = _c[_i];
                    var field = { $: item };
                    $('<li><a/></li>').appendTo(menu).children().attr('href', '#')
                        .text((_b = item.title) !== null && _b !== void 0 ? _b : '').click(function (e) {
                        e.preventDefault();
                        this.$this.fieldChanged = self.field !== this.field.$;
                        self.field = this.field.$;
                        this.$this.updateInputPlaceHolder();
                        this.$this.checkIfValueChanged();
                    }.bind({
                        field: field,
                        $this: _this
                    }));
                }
                new PopupMenuButton(a, {
                    positionMy: 'right top',
                    positionAt: 'right bottom',
                    menu: menu
                });
                _this.field = _this.options.fields[0];
                _this.updateInputPlaceHolder();
            }
            _this.element.bind('execute-search.' + _this.uniqueName, function (e1) {
                var _a;
                if (!!_this.timer) {
                    window.clearTimeout(_this.timer);
                }
                _this.searchNow(trim((_a = _this.element.val()) !== null && _a !== void 0 ? _a : ''));
            });
            return _this;
        }
        QuickSearchInput.prototype.checkIfValueChanged = function () {
            var _a;
            if (this.element.hasClass('ignore-change')) {
                return;
            }
            var value = this.get_value();
            if (value == this.lastValue && (!this.fieldChanged || isEmptyOrNull(value))) {
                this.fieldChanged = false;
                return;
            }
            this.fieldChanged = false;
            if (!!this.timer) {
                window.clearTimeout(this.timer);
            }
            var self = this;
            this.timer = window.setTimeout(function () {
                self.searchNow(value);
            }, (_a = this.options.typeDelay) !== null && _a !== void 0 ? _a : 500);
            this.lastValue = value;
        };
        QuickSearchInput.prototype.get_value = function () {
            var _a;
            return trim((_a = this.element.val()) !== null && _a !== void 0 ? _a : '');
        };
        QuickSearchInput.prototype.get_field = function () {
            return this.field;
        };
        QuickSearchInput.prototype.set_field = function (value) {
            if (this.field !== value) {
                this.fieldChanged = true;
                this.field = value;
                this.updateInputPlaceHolder();
                this.checkIfValueChanged();
            }
        };
        QuickSearchInput.prototype.updateInputPlaceHolder = function () {
            var qsf = this.element.prevAll('.quick-search-field');
            if (this.field) {
                qsf.text(this.field.title);
            }
            else {
                qsf.text('');
            }
        };
        QuickSearchInput.prototype.restoreState = function (value, field) {
            this.fieldChanged = false;
            this.field = field;
            var value = trim(value !== null && value !== void 0 ? value : '');
            this.element.val(value);
            this.lastValue = value;
            if (!!this.timer) {
                window.clearTimeout(this.timer);
                this.timer = null;
            }
            this.updateInputPlaceHolder();
        };
        QuickSearchInput.prototype.searchNow = function (value) {
            var _this = this;
            var _a, _b, _c;
            this.element.parent().toggleClass(((_a = this.options.filteredParentClass) !== null && _a !== void 0 ? _a : 's-QuickSearchFiltered'), !!(value.length > 0));
            this.element.parent().addClass((_b = this.options.loadingParentClass) !== null && _b !== void 0 ? _b : 's-QuickSearchLoading')
                .addClass((_c = this.options.loadingParentClass) !== null && _c !== void 0 ? _c : 's-QuickSearchLoading');
            var done = function (results) {
                var _a, _b;
                _this.element.removeClass((_a = _this.options.loadingParentClass) !== null && _a !== void 0 ? _a : 's-QuickSearchLoading')
                    .parent().removeClass((_b = _this.options.loadingParentClass) !== null && _b !== void 0 ? _b : 's-QuickSearchLoading');
                if (!results) {
                    _this.element.closest('.s-QuickSearchBar')
                        .find('.quick-search-icon i')
                        .effect('shake', { distance: 2 });
                }
            };
            if (this.options.onSearch != null) {
                this.options.onSearch(((this.field != null &&
                    !isEmptyOrNull(this.field.name)) ? this.field.name : null), value, done);
            }
            else {
                done(true);
            }
        };
        return QuickSearchInput;
    }(Widget));

    $.fn.flexHeightOnly = function (flexY) {
        if (flexY === void 0) { flexY = 1; }
        return this.flexWidthHeight(0, flexY);
    };
    $.fn.flexWidthOnly = function (flexX) {
        if (flexX === void 0) { flexX = 1; }
        return this.flexWidthHeight(flexX, 0);
    };
    $.fn.flexWidthHeight = function (flexX, flexY) {
        if (flexX === void 0) { flexX = 1; }
        if (flexY === void 0) { flexY = 1; }
        return this.addClass('flexify').data('flex-x', flexX).data('flex-y', flexY);
    };
    $.fn.flexX = function (flexX) {
        return this.data('flex-x', flexX);
    };
    $.fn.flexY = function (flexY) {
        return this.data('flex-y', flexY);
    };
    var Flexify = /** @class */ (function (_super) {
        __extends(Flexify, _super);
        function Flexify(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.xDifference = 0;
            _this.yDifference = 0;
            LazyLoadHelper.executeOnceWhenShown(container, function () {
                _this.storeInitialSize();
            });
            return _this;
        }
        Flexify.prototype.storeInitialSize = function () {
            var _this = this;
            if (!!this.element.data('flexify-init')) {
                return;
            }
            var designWidth = this.options.designWidth;
            if (designWidth == null)
                designWidth = this.element.width();
            this.element.data('flexify-width', designWidth);
            var designHeight = this.options.designHeight;
            if (designHeight == null)
                designHeight = this.element.height();
            this.element.data('flexify-height', designHeight);
            this.element.data('flexify-init', true);
            this.element.on('resize.' + this.uniqueName, function () {
                return _this.resizeElements();
            });
            this.element.on('resizestop.' + this.uniqueName, function () {
                return _this.resizeElements();
            });
            var tabs = this.element.find('.ui-tabs');
            if (tabs.length > 0) {
                tabs.on('tabsactivate.' + this.uniqueName, function () {
                    return _this.resizeElements();
                });
            }
            if (this.options.designWidth != null || this.options.designHeight != null)
                this.resizeElements();
        };
        Flexify.prototype.getXFactor = function (element) {
            var xFactor = null;
            if (this.options.getXFactor != null)
                xFactor = this.options.getXFactor(element);
            if (xFactor == null)
                xFactor = element.data('flex-x');
            return xFactor !== null && xFactor !== void 0 ? xFactor : 1;
        };
        Flexify.prototype.getYFactor = function (element) {
            var yFactor = null;
            if (this.options.getYFactor != null)
                yFactor = this.options.getYFactor(element);
            if (yFactor == null)
                yFactor = element.data('flex-y');
            return yFactor !== null && yFactor !== void 0 ? yFactor : 0;
        };
        Flexify.prototype.resizeElements = function () {
            var _this = this;
            var width = this.element.width();
            var initialWidth = this.element.data('flexify-width');
            if (initialWidth == null) {
                this.element.data('flexify-width', width);
                initialWidth = width;
            }
            var height = this.element.height();
            var initialHeight = this.element.data('flexify-height');
            if (initialHeight == null) {
                this.element.data('flexify-height', height);
                initialHeight = height;
            }
            this.xDifference = width - initialWidth;
            this.yDifference = height - initialHeight;
            var containers = this.element;
            var tabPanels = this.element.find('.ui-tabs-panel');
            if (tabPanels.length > 0) {
                containers = tabPanels.filter(':visible');
            }
            containers.find('.flexify')
                .add(tabPanels.filter('.flexify:visible'))
                .each(function (i, e) {
                _this.resizeElement($(e));
            });
        };
        Flexify.prototype.resizeElement = function (element) {
            var xFactor = this.getXFactor(element);
            if (xFactor !== 0) {
                var initialWidth = element.data('flexify-width');
                if (initialWidth == null) {
                    var width = element.width();
                    element.data('flexify-width', width);
                    initialWidth = width;
                }
                element.width(initialWidth + xFactor * this.xDifference | 0);
            }
            var yFactor = this.getYFactor(element);
            if (yFactor !== 0) {
                var initialHeight = element.data('flexify-height');
                if (initialHeight == null) {
                    var height = element.height();
                    element.data('flexify-height', height);
                    initialHeight = height;
                }
                element.height(initialHeight + yFactor * this.yDifference | 0);
            }
            if (element.hasClass('require-layout')) {
                element.triggerHandler('layout');
            }
        };
        return Flexify;
    }(Widget));

    var DialogExtensions;
    (function (DialogExtensions) {
        function dialogResizable(dialog, w, h, mw, mh) {
            var dlg = dialog.dialog();
            dlg.dialog('option', 'resizable', true);
            if (mw != null) {
                dlg.dialog('option', 'minWidth', mw);
            }
            if (w != null) {
                dlg.dialog('option', 'width', w);
            }
            if (mh != null) {
                dlg.dialog('option', 'minHeight', mh);
            }
            if (h != null) {
                dlg.dialog('option', 'height', h);
            }
            return dialog;
        }
        DialogExtensions.dialogResizable = dialogResizable;
        function dialogMaximizable(dialog) {
            dialog.dialogExtend({
                closable: true,
                maximizable: true,
                dblclick: 'maximize',
                icons: { maximize: 'ui-icon-maximize-window' }
            });
            return dialog;
        }
        DialogExtensions.dialogMaximizable = dialogMaximizable;
        function dialogFlexify(dialog) {
            new Flexify(dialog.closest('.ui-dialog'), {});
            return dialog;
        }
        DialogExtensions.dialogFlexify = dialogFlexify;
    })(DialogExtensions || (DialogExtensions = {}));

    var TemplatedDialog = /** @class */ (function (_super) {
        __extends(TemplatedDialog, _super);
        function TemplatedDialog(options) {
            var _this = _super.call(this, newBodyDiv().addClass('s-TemplatedDialog hidden'), options) || this;
            _this.element.attr("id", _this.uniqueName);
            _this.initValidator();
            _this.initTabs();
            _this.initToolbar();
            return _this;
        }
        TemplatedDialog_1 = TemplatedDialog;
        Object.defineProperty(TemplatedDialog.prototype, "isMarkedAsPanel", {
            get: function () {
                var panelAttr = getAttributes(getInstanceType(this), PanelAttribute, true);
                return panelAttr.length > 0 && panelAttr[panelAttr.length - 1].value !== false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TemplatedDialog.prototype, "isResponsive", {
            get: function () {
                return Config.responsiveDialogs ||
                    getAttributes(getInstanceType(this), ResponsiveAttribute, true).length > 0;
            },
            enumerable: false,
            configurable: true
        });
        TemplatedDialog.getCssSize = function (element, name) {
            var cssSize = element.css(name);
            if (cssSize == null) {
                return null;
            }
            if (!endsWith(cssSize, 'px')) {
                return null;
            }
            cssSize = cssSize.substr(0, cssSize.length - 2);
            var i = parseInteger(cssSize);
            if (i == null || isNaN(i) || i == 0)
                return null;
            return i;
        };
        TemplatedDialog.applyCssSizes = function (opt, dialogClass) {
            var size;
            var dialog = $('<div/>').hide().addClass(dialogClass).appendTo(document.body);
            try {
                var sizeHelper = $('<div/>').addClass('size').appendTo(dialog);
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'minWidth');
                if (size != null)
                    opt.minWidth = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'width');
                if (size != null)
                    opt.width = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'height');
                if (size != null)
                    opt.height = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'minHeight');
                if (size != null)
                    opt.minHeight = size;
            }
            finally {
                dialog.remove();
            }
        };
        TemplatedDialog.prototype.destroy = function () {
            this.tabs && this.tabs.tabs('destroy');
            this.tabs = null;
            this.toolbar && this.toolbar.destroy();
            this.toolbar = null;
            this.validator && this.byId('Form').remove();
            this.validator = null;
            if (this.element != null &&
                this.element.hasClass('ui-dialog-content')) {
                this.element.dialog('destroy');
                this.element.removeClass('ui-dialog-content');
            }
            else if (this.element != null &&
                this.element.hasClass('modal-body')) {
                var modal = this.element.closest('.modal').data('bs.modal', null);
                this.element && this.element.removeClass('modal-body');
                window.setTimeout(function () { return modal.remove(); }, 0);
            }
            $(window).unbind('.' + this.uniqueName);
            _super.prototype.destroy.call(this);
        };
        TemplatedDialog.prototype.initDialog = function () {
            var _this = this;
            if (this.element.hasClass('ui-dialog-content'))
                return;
            this.element.removeClass('hidden');
            this.element.dialog(this.getDialogOptions());
            this.element.closest('.ui-dialog').on('resize', function (e) { return _this.arrange(); });
            var type = getInstanceType(this);
            if (this.isResponsive) {
                DialogExtensions.dialogResizable(this.element);
                $(window).bind('resize.' + this.uniqueName, function (e) {
                    if (_this.element && _this.element.is(':visible')) {
                        _this.handleResponsive();
                    }
                });
                this.element.closest('.ui-dialog').addClass('flex-layout');
            }
            else if (DialogExtensions["dialogFlexify"] &&
                getAttributes(type, FlexifyAttribute, true).length > 0) {
                DialogExtensions["dialogFlexify"](this.element);
                DialogExtensions.dialogResizable(this.element);
            }
            if (getAttributes(type, MaximizableAttribute, true).length > 0) {
                DialogExtensions.dialogMaximizable(this.element);
            }
            var self = this;
            this.element.bind('dialogopen.' + this.uniqueName, function () {
                $(document.body).addClass('modal-dialog-open');
                if (_this.isResponsive) {
                    _this.handleResponsive();
                }
                self.onDialogOpen();
            });
            this.element.bind('dialogclose.' + this.uniqueName, function () {
                $(document.body).toggleClass('modal-dialog-open', $('.ui-dialog:visible').length > 0);
                self.onDialogClose();
            });
        };
        TemplatedDialog.prototype.getModalOptions = function () {
            return {
                backdrop: false,
                keyboard: false,
                size: 'lg',
                modalClass: this.getCssClass()
            };
        };
        TemplatedDialog.prototype.initModal = function () {
            var _this = this;
            var _a, _b;
            if (this.element.hasClass('modal-body'))
                return;
            var title = (_b = (_a = this.element.data('dialogtitle')) !== null && _a !== void 0 ? _a : this.getDialogTitle()) !== null && _b !== void 0 ? _b : '';
            var opt = this.getModalOptions();
            opt["show"] = false;
            var modalClass = "s-Modal";
            if (opt.modalClass)
                modalClass += ' ' + opt.modalClass;
            var markup = bsModalMarkup(title, '', modalClass);
            var modal = $(markup).eq(0).appendTo(document.body).addClass('flex-layout');
            modal.one('shown.bs.modal.' + this.uniqueName, function () {
                _this.element.triggerHandler('shown.bs.modal');
                _this.onDialogOpen();
            });
            modal.one('hidden.bs.modal.' + this.uniqueName, function () {
                $(document.body).toggleClass('modal-open', $('.modal.show').length + $('.modal.in').length > 0);
                _this.onDialogClose();
            });
            if (opt.size)
                modal.find('.modal-dialog').addClass('modal-' + opt.size);
            var footer = modal.find('.modal-footer');
            var buttons = this.getDialogButtons();
            if (buttons != null) {
                for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                    var x = buttons_1[_i];
                    $(dialogButtonToBS(x)).appendTo(footer).click(x.click);
                }
            }
            else
                footer.hide();
            modal.modal(opt);
            modal.find('.modal-body').replaceWith(this.element.removeClass('hidden').addClass('modal-body'));
            $(window).on('resize.' + this.uniqueName, this.arrange.bind(this));
        };
        TemplatedDialog.prototype.initToolbar = function () {
            var toolbarDiv = this.byId('Toolbar');
            if (toolbarDiv.length === 0) {
                return;
            }
            var hotkeyContext = this.element.closest('.ui-dialog');
            if (hotkeyContext.length === 0) {
                hotkeyContext = this.element.closest('.modal');
                if (hotkeyContext.length == 0)
                    hotkeyContext = this.element;
            }
            var opt = { buttons: this.getToolbarButtons(), hotkeyContext: hotkeyContext[0] };
            this.toolbar = new Toolbar(toolbarDiv, opt);
        };
        TemplatedDialog.prototype.getToolbarButtons = function () {
            return [];
        };
        TemplatedDialog.prototype.getValidatorOptions = function () {
            return {};
        };
        TemplatedDialog.prototype.initValidator = function () {
            var form = this.byId('Form');
            if (form.length > 0) {
                var valOptions = this.getValidatorOptions();
                this.validator = form.validate(validateOptions(valOptions));
            }
        };
        TemplatedDialog.prototype.resetValidation = function () {
            this.validator && this.validator.resetAll();
        };
        TemplatedDialog.prototype.validateForm = function () {
            return this.validator == null || !!this.validator.form();
        };
        TemplatedDialog.prototype.dialogOpen = function (asPanel) {
            var _this = this;
            asPanel = asPanel !== null && asPanel !== void 0 ? asPanel : this.isMarkedAsPanel;
            if (asPanel) {
                if (!this.element.hasClass('s-Panel')) {
                    // so that panel title is created if needed
                    this.element.on('panelopen.' + this.uniqueName, function () {
                        _this.onDialogOpen();
                    });
                    this.element.on('panelclose.' + this.uniqueName, function () {
                        _this.onDialogClose();
                    });
                }
                TemplatedDialog_1.openPanel(this.element, this.uniqueName);
                this.setupPanelTitle();
            }
            else if (this.useBSModal()) {
                this.initModal();
                this.element.closest('.modal').modal('show');
            }
            else {
                this.initDialog();
                this.element.dialog('open');
            }
        };
        TemplatedDialog.prototype.useBSModal = function () {
            return !!((!$.ui || !$.ui.dialog) || TemplatedDialog_1.bootstrapModal);
        };
        TemplatedDialog.openPanel = function (element, uniqueName) {
            var container = $('.panels-container');
            if (!container.length)
                container = $('section.content');
            element.data('paneluniquename', uniqueName);
            if (container.length) {
                container = container.last();
                container.children()
                    .not(element)
                    .not('.panel-hidden')
                    .addClass('panel-hidden panel-hidden-' + uniqueName);
                if (element[0].parentElement !== container[0])
                    element.appendTo(container);
            }
            $('.ui-dialog:visible, .ui-widget-overlay:visible, .modal.show, .modal.in')
                .not(element)
                .addClass('panel-hidden panel-hidden-' + uniqueName);
            element
                .removeClass('hidden')
                .removeClass('panel-hidden')
                .addClass('s-Panel')
                .trigger('panelopen');
        };
        TemplatedDialog.closePanel = function (element, e) {
            return closePanel(element, e);
        };
        TemplatedDialog.prototype.onDialogOpen = function () {
            if (!$(document.body).hasClass('mobile-device'))
                $(':input', this.element).not('button').eq(0).focus();
            this.arrange();
            this.tabs && this.tabs.tabs('option', 'active', 0);
        };
        TemplatedDialog.prototype.arrange = function () {
            this.element.find('.require-layout').filter(':visible').each(function (i, e) {
                $(e).triggerHandler('layout');
            });
        };
        TemplatedDialog.prototype.onDialogClose = function () {
            var _this = this;
            $(document).trigger('click');
            // for tooltips etc.
            if ($.qtip) {
                $(document.body).children('.qtip').each(function (index, el) {
                    $(el).qtip('hide');
                });
            }
            window.setTimeout(function () {
                var element = _this.element;
                _this.destroy();
                element.remove();
                positionToastContainer(false, null);
            }, 0);
        };
        TemplatedDialog.prototype.addCssClass = function () {
            if (this.isMarkedAsPanel) {
                _super.prototype.addCssClass.call(this);
                if (this.isResponsive)
                    this.element.addClass("flex-layout");
            }
        };
        TemplatedDialog.prototype.getDialogButtons = function () {
            return undefined;
        };
        TemplatedDialog.prototype.getDialogOptions = function () {
            var _a, _b;
            var opt = {};
            var dialogClass = 's-Dialog ' + this.getCssClass();
            opt.dialogClass = dialogClass;
            var buttons = this.getDialogButtons();
            if (buttons != null)
                opt.buttons = buttons.map(dialogButtonToUI);
            opt.width = 920;
            TemplatedDialog_1.applyCssSizes(opt, dialogClass);
            opt.autoOpen = false;
            var type = getInstanceType(this);
            opt.resizable = getAttributes(type, ResizableAttribute, true).length > 0;
            opt.modal = true;
            opt.position = { my: 'center', at: 'center', of: $(window.window) };
            opt.title = (_b = (_a = this.element.data('dialogtitle')) !== null && _a !== void 0 ? _a : this.getDialogTitle()) !== null && _b !== void 0 ? _b : '';
            return opt;
        };
        TemplatedDialog.prototype.getDialogTitle = function () {
            return "";
        };
        TemplatedDialog.prototype.dialogClose = function () {
            if (this.element.hasClass('ui-dialog-content'))
                this.element.dialog().dialog('close');
            else if (this.element.hasClass('modal-body'))
                this.element.closest('.modal').modal('hide');
            else if (this.element.hasClass('s-Panel') && !this.element.hasClass('hidden')) {
                TemplatedDialog_1.closePanel(this.element);
            }
        };
        Object.defineProperty(TemplatedDialog.prototype, "dialogTitle", {
            get: function () {
                if (this.element.hasClass('ui-dialog-content'))
                    return this.element.dialog('option', 'title');
                else if (this.element.hasClass('modal-body'))
                    return this.element.closest('.modal').find('.modal-header').children('h5').text();
                return this.element.data('dialogtitle');
            },
            set: function (value) {
                var oldTitle = this.dialogTitle;
                this.element.data('dialogtitle', value);
                if (this.element.hasClass('ui-dialog-content'))
                    this.element.dialog('option', 'title', value);
                else if (this.element.hasClass('modal-body')) {
                    this.element.closest('.modal').find('.modal-header').children('h5').text(value !== null && value !== void 0 ? value : '');
                }
                else if (this.element.hasClass('s-Panel')) {
                    if (oldTitle != this.dialogTitle) {
                        this.setupPanelTitle();
                        this.arrange();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        TemplatedDialog.prototype.setupPanelTitle = function () {
            var _this = this;
            var _a;
            var value = (_a = this.dialogTitle) !== null && _a !== void 0 ? _a : this.getDialogTitle();
            var pt = this.element.children('.panel-titlebar');
            if (isEmptyOrNull(value)) {
                pt.remove();
            }
            else {
                if (!this.element.children('.panel-titlebar').length) {
                    pt = $("<div class='panel-titlebar'><div class='panel-titlebar-text'></div></div>")
                        .prependTo(this.element);
                }
                pt.children('.panel-titlebar-text').text(value);
                if (this.element.hasClass('s-Panel')) {
                    if (!pt.children('.panel-titlebar-close').length) {
                        $('<button class="panel-titlebar-close">&nbsp;</button>')
                            .prependTo(pt)
                            .click(function (e) {
                            TemplatedDialog_1.closePanel(_this.element, e);
                        });
                    }
                }
            }
        };
        TemplatedDialog.prototype.set_dialogTitle = function (value) {
            this.dialogTitle = value;
        };
        TemplatedDialog.prototype.initTabs = function () {
            var _this = this;
            var tabsDiv = this.byId('Tabs');
            if (tabsDiv.length === 0) {
                return;
            }
            this.tabs = tabsDiv.tabs({});
            this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
        };
        TemplatedDialog.prototype.handleResponsive = function () {
            var dlg = this.element.dialog();
            var uiDialog = this.element.closest('.ui-dialog');
            if ($(document.body).hasClass('mobile-device')) {
                var data = this.element.data('responsiveData');
                if (!data) {
                    data = {};
                    data.draggable = dlg.dialog('option', 'draggable');
                    data.resizable = dlg.dialog('option', 'resizable');
                    data.position = dlg.css('position');
                    var pos = uiDialog.position();
                    data.left = pos.left;
                    data.top = pos.top;
                    data.width = uiDialog.width();
                    data.height = uiDialog.height();
                    data.contentHeight = this.element.height();
                    this.element.data('responsiveData', data);
                    dlg.dialog('option', 'draggable', false);
                    dlg.dialog('option', 'resizable', false);
                }
                uiDialog.addClass('mobile-layout');
                uiDialog.css({ left: '0px', top: '0px', width: $(window).width() + 'px', height: $(window).height() + 'px', position: 'fixed' });
                $(document.body).scrollTop(0);
                layoutFillHeight(this.element);
            }
            else {
                var d = this.element.data('responsiveData');
                if (d) {
                    dlg.dialog('option', 'draggable', d.draggable);
                    dlg.dialog('option', 'resizable', d.resizable);
                    this.element.closest('.ui-dialog').css({ left: '0px', top: '0px', width: d.width + 'px', height: d.height + 'px', position: d.position });
                    this.element.height(d.contentHeight);
                    uiDialog.removeClass('mobile-layout');
                    this.element.removeData('responsiveData');
                }
            }
        };
        var TemplatedDialog_1;
        TemplatedDialog = TemplatedDialog_1 = __decorate([
            Decorators.registerClass([IDialog])
        ], TemplatedDialog);
        return TemplatedDialog;
    }(TemplatedWidget));

    var PropertyDialog = /** @class */ (function (_super) {
        __extends(PropertyDialog, _super);
        function PropertyDialog(opt) {
            var _this = _super.call(this, opt) || this;
            _this.initPropertyGrid();
            _this.loadInitialEntity();
            return _this;
        }
        PropertyDialog.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        PropertyDialog.prototype.getDialogOptions = function () {
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.width = 400;
            return opt;
        };
        PropertyDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [{
                    text: text('Dialogs.OkButton'),
                    click: function () { return _this.okClick(); }
                }, {
                    text: text('Dialogs.CancelButton'),
                    click: function () { return _this.cancelClick(); }
                }];
        };
        PropertyDialog.prototype.okClick = function () {
            if (!this.validateBeforeSave()) {
                return;
            }
            this.okClickValidated();
        };
        PropertyDialog.prototype.okClickValidated = function () {
            this.dialogClose();
        };
        PropertyDialog.prototype.cancelClick = function () {
            this.dialogClose();
        };
        PropertyDialog.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        PropertyDialog.prototype.getFormKey = function () {
            var attributes = getAttributes(getInstanceType(this), FormKeyAttribute, true);
            if (attributes.length >= 1) {
                return attributes[0].value;
            }
            else {
                var name = getTypeFullName(getInstanceType(this));
                var px = name.indexOf('.');
                if (px >= 0) {
                    name = name.substring(px + 1);
                }
                if (endsWith(name, 'Dialog')) {
                    name = name.substr(0, name.length - 6);
                }
                else if (endsWith(name, 'Panel')) {
                    name = name.substr(0, name.length - 5);
                }
                return name;
            }
        };
        PropertyDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: 1,
                useCategories: false,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.'
            };
        };
        PropertyDialog.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            return getForm(formKey);
        };
        PropertyDialog.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid) {
                this.propertyGrid.save(entity);
            }
            return entity;
        };
        PropertyDialog.prototype.loadInitialEntity = function () {
            this.propertyGrid && this.propertyGrid.load(new Object());
        };
        PropertyDialog.prototype.get_entity = function () {
            return this._entity;
        };
        PropertyDialog.prototype.set_entity = function (value) {
            this._entity = (value !== null && value !== void 0 ? value : new Object());
        };
        PropertyDialog.prototype.get_entityId = function () {
            return this._entityId;
        };
        PropertyDialog.prototype.set_entityId = function (value) {
            this._entityId = value;
        };
        PropertyDialog.prototype.validateBeforeSave = function () {
            return this.validator.form();
        };
        PropertyDialog.prototype.updateTitle = function () {
        };
        PropertyDialog.prototype.getFallbackTemplate = function () {
            return "<div>\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form> \n    </div>\n</div>";
        };
        PropertyDialog = __decorate([
            Decorators.registerClass('Serenity.PropertyDialog')
        ], PropertyDialog);
        return PropertyDialog;
    }(TemplatedDialog));

    var EntityDialog = /** @class */ (function (_super) {
        __extends(EntityDialog, _super);
        function EntityDialog(opt) {
            var _this = _super.call(this, opt) || this;
            _this.initPropertyGrid();
            _this.initLocalizationGrid();
            return _this;
        }
        EntityDialog_1 = EntityDialog;
        EntityDialog.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.localizationGrid) {
                this.localizationGrid.destroy();
                this.localizationGrid = null;
            }
            this.undeleteButton = null;
            this.applyChangesButton = null;
            this.deleteButton = null;
            this.saveAndCloseButton = null;
            this.editButton = null;
            this.cloneButton = null;
            this.toolbar = null;
            _super.prototype.destroy.call(this);
        };
        EntityDialog.prototype.get_entity = function () {
            return this.entity;
        };
        EntityDialog.prototype.set_entity = function (entity) {
            this.entity = entity || new Object();
        };
        EntityDialog.prototype.get_entityId = function () {
            return this.entityId;
        };
        EntityDialog.prototype.set_entityId = function (value) {
            this.entityId = value;
        };
        EntityDialog.prototype.getEntityNameFieldValue = function () {
            var _a;
            return ((_a = this.get_entity()[this.getNameProperty()]) !== null && _a !== void 0 ? _a : '').toString();
        };
        EntityDialog.prototype.getEntityTitle = function () {
            var _a;
            if (!this.isEditMode()) {
                return format(text('Controls.EntityDialog.NewRecordTitle'), this.getEntitySingular());
            }
            else {
                var titleFormat = (this.isViewMode() || this.readOnly || !this.hasSavePermission()) ?
                    text('Controls.EntityDialog.ViewRecordTitle') : text('Controls.EntityDialog.EditRecordTitle');
                var title = (_a = this.getEntityNameFieldValue()) !== null && _a !== void 0 ? _a : '';
                return format(titleFormat, this.getEntitySingular(), (isEmptyOrNull(title) ? '' : (' (' + title + ')')));
            }
        };
        EntityDialog.prototype.updateTitle = function () {
            this.dialogTitle = this.getEntityTitle();
        };
        EntityDialog.prototype.isCloneMode = function () {
            return false;
        };
        EntityDialog.prototype.isEditMode = function () {
            return this.get_entityId() != null && !this.isCloneMode();
        };
        EntityDialog.prototype.isDeleted = function () {
            if (this.get_entityId() == null) {
                return false;
            }
            var isDeletedProperty = this.getIsDeletedProperty();
            if (isDeletedProperty) {
                return !!this.get_entity()[isDeletedProperty];
            }
            var value = this.get_entity()[this.getIsActiveProperty()];
            if (value == null) {
                return false;
            }
            return value < 0;
        };
        EntityDialog.prototype.isNew = function () {
            return this.get_entityId() == null;
        };
        EntityDialog.prototype.isNewOrDeleted = function () {
            return this.isNew() || this.isDeleted();
        };
        EntityDialog.prototype.getDeleteOptions = function (callback) {
            return {};
        };
        EntityDialog.prototype.deleteHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.doDelete = function (callback) {
            var _this = this;
            var self = this;
            var request = {
                EntityId: this.get_entityId()
            };
            var baseOptions = {
                service: this.getService() + '/Delete',
                request: request,
                onSuccess: function (response) {
                    self.onDeleteSuccess(response);
                    if (callback != null) {
                        callback(response);
                    }
                    self.element.triggerHandler('ondatachange', [{
                            entityId: request.EntityId,
                            entity: _this.entity,
                            type: 'delete'
                        }]);
                }
            };
            var thisOptions = this.getDeleteOptions(callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.deleteHandler(finalOptions, callback);
        };
        EntityDialog.prototype.onDeleteSuccess = function (response) {
        };
        EntityDialog.prototype.attrs = function (attrType) {
            return getAttributes(getInstanceType(this), attrType, true);
        };
        EntityDialog.prototype.getEntityType = function () {
            if (this.entityType != null)
                return this.entityType;
            var typeAttributes = this.attrs(EntityTypeAttribute);
            if (typeAttributes.length === 1)
                return (this.entityType = typeAttributes[0].value);
            // remove global namespace
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0)
                name = name.substring(px + 1);
            // don't like this kind of convention, make it obsolete soon...
            if (endsWith(name, 'Dialog') || endsWith(name, 'Control'))
                name = name.substr(0, name.length - 6);
            else if (endsWith(name, 'Panel'))
                name = name.substr(0, name.length - 5);
            return (this.entityType = name);
        };
        EntityDialog.prototype.getFormKey = function () {
            if (this.formKey != null)
                return this.formKey;
            var attributes = this.attrs(FormKeyAttribute);
            if (attributes.length >= 1)
                return (this.formKey = attributes[0].value);
            return (this.formKey = this.getEntityType());
        };
        EntityDialog.prototype.getLocalTextDbPrefix = function () {
            var _a;
            if (this.localTextDbPrefix != null)
                return this.localTextDbPrefix;
            this.localTextDbPrefix = (_a = this.getLocalTextPrefix()) !== null && _a !== void 0 ? _a : '';
            if (this.localTextDbPrefix.length > 0 && !endsWith(this.localTextDbPrefix, '.'))
                this.localTextDbPrefix = 'Db.' + this.localTextDbPrefix + '.';
            return this.localTextDbPrefix;
        };
        EntityDialog.prototype.getLocalTextPrefix = function () {
            var attributes = this.attrs(LocalTextPrefixAttribute);
            if (attributes.length >= 1)
                return attributes[0].value;
            return this.getEntityType();
        };
        EntityDialog.prototype.getEntitySingular = function () {
            if (this.entitySingular != null)
                return this.entitySingular;
            var attributes = this.attrs(ItemNameAttribute);
            if (attributes.length >= 1) {
                this.entitySingular = attributes[0].value;
                this.entitySingular = LT.getDefault(this.entitySingular, this.entitySingular);
            }
            else {
                var es = tryGetText(this.getLocalTextDbPrefix() + 'EntitySingular');
                if (es == null)
                    es = this.getEntityType();
                this.entitySingular = es;
            }
            return this.entitySingular;
        };
        EntityDialog.prototype.getNameProperty = function () {
            if (this.nameProperty != null)
                return this.nameProperty;
            var attributes = this.attrs(NamePropertyAttribute);
            if (attributes.length >= 1)
                this.nameProperty = attributes[0].value;
            else
                this.nameProperty = 'Name';
            return this.nameProperty;
        };
        EntityDialog.prototype.getIdProperty = function () {
            if (this.idProperty != null)
                return this.idProperty;
            var attributes = this.attrs(IdPropertyAttribute);
            if (attributes.length >= 1)
                this.idProperty = attributes[0].value;
            else
                this.idProperty = 'ID';
            return this.idProperty;
        };
        EntityDialog.prototype.getIsActiveProperty = function () {
            if (this.isActiveProperty != null)
                return this.isActiveProperty;
            var attributes = this.attrs(IsActivePropertyAttribute);
            if (attributes.length >= 1)
                this.isActiveProperty = attributes[0].value;
            else
                this.isActiveProperty = 'IsActive';
            return this.isActiveProperty;
        };
        EntityDialog.prototype.getIsDeletedProperty = function () {
            return null;
        };
        EntityDialog.prototype.getService = function () {
            if (this.service != null)
                return this.service;
            var attributes = this.attrs(ServiceAttribute);
            if (attributes.length >= 1)
                this.service = attributes[0].value;
            else
                this.service = replaceAll(this.getEntityType(), '.', '/');
            return this.service;
        };
        EntityDialog.prototype.load = function (entityOrId, done, fail) {
            var _this = this;
            var action = function () {
                if (entityOrId == null) {
                    _this.loadResponse({});
                    done && done();
                    return;
                }
                var scriptType = typeof (entityOrId);
                if (scriptType === 'string' || scriptType === 'number') {
                    var entityId = entityOrId;
                    _this.loadById(entityId, function (response) {
                        if (done)
                            window.setTimeout(done, 0);
                    }, null);
                    return;
                }
                var entity = entityOrId || new Object();
                _this.loadResponse({ Entity: entity });
                done && done();
            };
            if (fail == null) {
                action();
                return;
            }
            try {
                action();
            }
            catch (ex1) {
                var ex = Exception.wrap(ex1);
                fail(ex);
            }
        };
        EntityDialog.prototype.loadNewAndOpenDialog = function (asPanel) {
            this.loadResponse({});
            this.dialogOpen(asPanel);
        };
        EntityDialog.prototype.loadEntityAndOpenDialog = function (entity, asPanel) {
            this.loadResponse({ Entity: entity });
            this.dialogOpen(asPanel);
        };
        EntityDialog.prototype.loadResponse = function (data) {
            data = data || {};
            this.onLoadingData(data);
            var entity = data.Entity || new Object();
            this.beforeLoadEntity(entity);
            this.loadEntity(entity);
            this.set_entity(entity);
            this.afterLoadEntity();
        };
        EntityDialog.prototype.loadEntity = function (entity) {
            var idField = this.getIdProperty();
            if (idField != null)
                this.set_entityId(entity[idField]);
            this.set_entity(entity);
            if (this.propertyGrid != null) {
                this.propertyGrid.set_mode((this.isEditMode() ?
                    2 /* update */ : 1 /* insert */));
                this.propertyGrid.load(entity);
            }
        };
        EntityDialog.prototype.beforeLoadEntity = function (entity) {
            this.localizationPendingValue = null;
            this.localizationLastValue = null;
        };
        EntityDialog.prototype.afterLoadEntity = function () {
            this.updateInterface();
            this.updateTitle();
        };
        EntityDialog.prototype.loadByIdAndOpenDialog = function (entityId, asPanel) {
            var _this = this;
            this.loadById(entityId, function (response) { return window.setTimeout(function () { return _this.dialogOpen(asPanel); }, 0); }, function () {
                if (!_this.element.is(':visible')) {
                    _this.element.remove();
                }
            });
        };
        EntityDialog.prototype.onLoadingData = function (data) {
        };
        EntityDialog.prototype.getLoadByIdOptions = function (id, callback) {
            return {};
        };
        EntityDialog.prototype.getLoadByIdRequest = function (id) {
            var request = {};
            request.EntityId = id;
            return request;
        };
        EntityDialog.prototype.reloadById = function () {
            this.loadById(this.get_entityId());
        };
        EntityDialog.prototype.loadById = function (id, callback, fail) {
            var _this = this;
            var baseOptions = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: this.getLoadByIdRequest(id),
                onSuccess: function (response) {
                    _this.loadResponse(response);
                    callback && callback(response);
                },
                onCleanup: function () {
                    if (_this.validator != null) {
                        validatorAbortHandler(_this.validator);
                    }
                }
            };
            var thisOptions = this.getLoadByIdOptions(id, callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.loadByIdHandler(finalOptions, callback, fail);
        };
        EntityDialog.prototype.loadByIdHandler = function (options, callback, fail) {
            var request = serviceCall(options);
            fail && request.fail(fail);
        };
        EntityDialog.prototype.initLocalizationGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.initLocalizationGridCommon(pgOptions);
        };
        EntityDialog.prototype.initLocalizationGridCommon = function (pgOptions) {
            var pgDiv = this.byId('PropertyGrid');
            if (!any(pgOptions.items, function (x) { return x.localizable === true; }))
                return;
            var localGridDiv = $('<div/>')
                .attr('id', this.idPrefix + 'LocalizationGrid')
                .hide().insertAfter(pgDiv);
            pgOptions.idPrefix = this.idPrefix + 'Localization_';
            var items = [];
            for (var _i = 0, _a = pgOptions.items; _i < _a.length; _i++) {
                var item1 = _a[_i];
                var langs = null;
                if (item1.localizable === true) {
                    var copy = extend({}, item1);
                    copy.oneWay = true;
                    copy.readOnly = true;
                    copy.required = false;
                    copy.defaultValue = null;
                    items.push(copy);
                    if (langs == null)
                        langs = this.getLangs();
                    for (var _b = 0, langs_1 = langs; _b < langs_1.length; _b++) {
                        var lang = langs_1[_b];
                        copy = extend({}, item1);
                        copy.name = lang[0] + '$' + copy.name;
                        copy.title = lang[1];
                        copy.cssClass = [copy.cssClass, 'translation'].join(' ');
                        copy.insertable = true;
                        copy.updatable = true;
                        copy.oneWay = false;
                        copy.required = false;
                        copy.localizable = false;
                        copy.defaultValue = null;
                        items.push(copy);
                    }
                }
            }
            pgOptions.items = items;
            this.localizationGrid = (new PropertyGrid(localGridDiv, pgOptions)).init(null);
            localGridDiv.addClass('s-LocalizationGrid');
        };
        EntityDialog.prototype.isLocalizationMode = function () {
            return this.localizationButton != null && this.localizationButton.hasClass('pressed');
        };
        EntityDialog.prototype.isLocalizationModeAndChanged = function () {
            if (!this.isLocalizationMode()) {
                return false;
            }
            var newValue = this.getLocalizationGridValue();
            return JSON.stringify(this.localizationLastValue) != JSON.stringify(newValue);
        };
        EntityDialog.prototype.localizationButtonClick = function () {
            if (this.isLocalizationMode() && !this.validateForm()) {
                return;
            }
            if (this.isLocalizationModeAndChanged()) {
                var newValue = this.getLocalizationGridValue();
                this.localizationLastValue = newValue;
                this.localizationPendingValue = newValue;
            }
            this.localizationButton.toggleClass('pressed');
            this.updateInterface();
            if (this.isLocalizationMode()) {
                this.loadLocalization();
            }
        };
        EntityDialog.prototype.getLanguages = function () {
            if (EntityDialog_1.defaultLanguageList != null)
                return EntityDialog_1.defaultLanguageList() || [];
            return [];
        };
        // for compatibility with older getLanguages methods written in Saltaralle
        EntityDialog.prototype.getLangs = function () {
            var langsTuple = this.getLanguages();
            var langs = safeCast(langsTuple, Array);
            if (langs == null || langs.length === 0 ||
                langs[0] == null || !isArray(langs[0])) {
                langs = Array.prototype.slice.call(langsTuple.map(function (x) {
                    return [x.item1, x.item2];
                }));
            }
            return langs;
        };
        EntityDialog.prototype.loadLocalization = function () {
            var _this = this;
            if (this.localizationLastValue == null && this.isNew()) {
                this.localizationGrid.load({});
                this.setLocalizationGridCurrentValues();
                this.localizationLastValue = this.getLocalizationGridValue();
                return;
            }
            if (this.localizationLastValue != null) {
                this.localizationGrid.load(this.localizationLastValue);
                this.setLocalizationGridCurrentValues();
                return;
            }
            var opt = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: {
                    EntityId: this.get_entityId(),
                    ColumnSelection: 'keyOnly',
                    IncludeColumns: ['Localizations']
                },
                onSuccess: function (response) {
                    var copy = extend(new Object(), _this.get_entity());
                    if (response.Localizations) {
                        for (var _i = 0, _a = Object.keys(response.Localizations); _i < _a.length; _i++) {
                            var language = _a[_i];
                            var entity = response.Localizations[language];
                            for (var _b = 0, _c = Object.keys(entity); _b < _c.length; _b++) {
                                var key = _c[_b];
                                copy[language + '$' + key] = entity[key];
                            }
                        }
                    }
                    _this.localizationGrid.load(copy);
                    _this.setLocalizationGridCurrentValues();
                    _this.localizationPendingValue = null;
                    _this.localizationLastValue = _this.getLocalizationGridValue();
                }
            };
            serviceCall(opt);
        };
        EntityDialog.prototype.setLocalizationGridCurrentValues = function () {
            var _this = this;
            var valueByName = {};
            this.localizationGrid.enumerateItems(function (item, widget) {
                if (item.name.indexOf('$') < 0 && widget.element.is(':input')) {
                    valueByName[item.name] = _this.byId(item.name).val();
                    widget.element.val(valueByName[item.name]);
                }
            });
            this.localizationGrid.enumerateItems(function (item1, widget1) {
                var idx = item1.name.indexOf('$');
                if (idx >= 0 && widget1.element.is(':input')) {
                    var hint = valueByName[item1.name.substr(idx + 1)];
                    if (hint != null && hint.length > 0) {
                        widget1.element.attr('title', hint).attr('placeholder', hint);
                    }
                }
            });
        };
        EntityDialog.prototype.getLocalizationGridValue = function () {
            var value = {};
            this.localizationGrid.save(value);
            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.indexOf('$') < 0) {
                    delete value[k];
                }
            }
            return value;
        };
        EntityDialog.prototype.getPendingLocalizations = function () {
            if (this.localizationPendingValue == null) {
                return null;
            }
            var result = {};
            var idField = this.getIdProperty();
            var langs = this.getLangs();
            for (var _i = 0, langs_2 = langs; _i < langs_2.length; _i++) {
                var pair = langs_2[_i];
                var language = pair[0];
                var entity = {};
                if (idField != null) {
                    entity[idField] = this.get_entityId();
                }
                var prefix = language + '$';
                for (var _a = 0, _b = Object.keys(this.localizationPendingValue); _a < _b.length; _a++) {
                    var k = _b[_a];
                    if (startsWith(k, prefix))
                        entity[k.substr(prefix.length)] = this.localizationPendingValue[k];
                }
                result[language] = entity;
            }
            return result;
        };
        EntityDialog.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        EntityDialog.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            return getForm(formKey);
        };
        EntityDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: 1 /* insert */,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.',
                useCategories: true
            };
        };
        EntityDialog.prototype.validateBeforeSave = function () {
            return true;
        };
        EntityDialog.prototype.getSaveOptions = function (callback) {
            var _this = this;
            var opt = {};
            opt.service = this.getService() + '/' + (this.isEditMode() ? 'Update' : 'Create'),
                opt.onSuccess = function (response) {
                    _this.onSaveSuccess(response);
                    callback && callback(response);
                    var typ = (_this.isEditMode() ? 'update' : 'create');
                    var ent = opt.request == null ? null : opt.request.Entity;
                    var eid = _this.isEditMode() ? _this.get_entityId() :
                        (response == null ? null : response.EntityId);
                    var dci = {
                        type: typ,
                        entity: ent,
                        entityId: eid
                    };
                    _this.element.triggerHandler('ondatachange', [dci]);
                };
            opt.onCleanup = function () {
                _this.validator && validatorAbortHandler(_this.validator);
            };
            opt.request = this.getSaveRequest();
            return opt;
        };
        EntityDialog.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid != null) {
                this.propertyGrid.save(entity);
            }
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null && entity[idField] == null) {
                    entity[idField] = this.get_entityId();
                }
            }
            return entity;
        };
        EntityDialog.prototype.getSaveRequest = function () {
            var entity = this.getSaveEntity();
            var req = {};
            req.Entity = entity;
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null) {
                    req.EntityId = this.get_entityId();
                }
            }
            if (this.localizationPendingValue != null) {
                req.Localizations = this.getPendingLocalizations();
            }
            return req;
        };
        EntityDialog.prototype.onSaveSuccess = function (response) {
        };
        EntityDialog.prototype.save_submitHandler = function (callback) {
            var options = this.getSaveOptions(callback);
            this.saveHandler(options, callback);
        };
        EntityDialog.prototype.save = function (callback) {
            var _this = this;
            return ValidationHelper.submit(this.byId('Form'), function () { return _this.validateBeforeSave(); }, function () { return _this.save_submitHandler(callback); });
        };
        EntityDialog.prototype.saveHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.initToolbar = function () {
            _super.prototype.initToolbar.call(this);
            if (!this.toolbar)
                return;
            this.saveAndCloseButton = this.toolbar.findButton('save-and-close-button');
            this.applyChangesButton = this.toolbar.findButton('apply-changes-button');
            this.deleteButton = this.toolbar.findButton('delete-button');
            this.undeleteButton = this.toolbar.findButton('undo-delete-button');
            this.editButton = this.toolbar.findButton('edit-button');
            this.cloneButton = this.toolbar.findButton('clone-button');
            this.localizationButton = this.toolbar.findButton('localization-button');
        };
        EntityDialog.prototype.showSaveSuccessMessage = function (response) {
            notifySuccess(text('Controls.EntityDialog.SaveSuccessMessage'), '', null);
        };
        EntityDialog.prototype.getToolbarButtons = function () {
            var _this = this;
            var list = [];
            list.push({
                title: text('Controls.EntityDialog.SaveButton'),
                cssClass: 'save-and-close-button',
                hotkey: 'alt+s',
                onClick: function () {
                    _this.save(function (response) {
                        _this.dialogClose();
                    });
                },
                visible: function () { return !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
            });
            list.push({
                title: '',
                hint: text('Controls.EntityDialog.ApplyChangesButton'),
                cssClass: 'apply-changes-button',
                hotkey: 'alt+a',
                onClick: function () {
                    _this.save(function (response1) {
                        if (_this.isEditMode()) {
                            var id1 = response1.EntityId;
                            if (id1 == null) {
                                id1 = _this.get_entityId();
                            }
                            _this.loadById(id1);
                        }
                        else {
                            _this.loadById(response1.EntityId);
                        }
                        _this.showSaveSuccessMessage(response1);
                    });
                },
                visible: function () { return !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
            });
            list.push({
                title: text('Controls.EntityDialog.DeleteButton'),
                cssClass: 'delete-button',
                hotkey: 'alt+x',
                onClick: function () {
                    confirm(text('Controls.EntityDialog.DeleteConfirmation'), function () {
                        _this.doDelete(function () { return _this.dialogClose(); });
                    });
                },
                visible: function () { return _this.isEditMode() && !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasDeletePermission() || _this.readOnly; }
            });
            list.push({
                title: text('Controls.EntityDialog.UndeleteButton'),
                cssClass: 'undo-delete-button',
                onClick: function () {
                    if (_this.isDeleted()) {
                        confirm(text('Controls.EntityDialog.UndeleteConfirmation'), function () {
                            _this.undelete(function () { return _this.loadById(_this.get_entityId()); });
                        });
                    }
                },
                visible: function () { return _this.isEditMode() && _this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasDeletePermission() || _this.readOnly; }
            });
            if (this.useViewMode()) {
                list.push({
                    title: text('Controls.EntityDialog.EditButton'),
                    cssClass: 'edit-button',
                    icon: 'fa-edit',
                    onClick: function () {
                        if (!_this.isEditMode())
                            return;
                        _this.editClicked = true;
                        _this.updateInterface();
                        _this.updateTitle();
                    },
                    visible: function () { return _this.isViewMode(); },
                    disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
                });
            }
            list.push({
                title: text('Controls.EntityDialog.LocalizationButton'),
                cssClass: 'localization-button',
                onClick: function () { return _this.localizationButtonClick(); }
            });
            list.push({
                title: text('Controls.EntityDialog.CloneButton'),
                cssClass: 'clone-button',
                onClick: function () {
                    if (!_this.isEditMode()) {
                        return;
                    }
                    var cloneEntity = _this.getCloningEntity();
                    Widget.create({
                        type: getInstanceType(_this),
                        init: function (w) { return SubDialogHelper.bubbleDataChange(SubDialogHelper.cascade(w, _this.element), _this, true)
                            .loadEntityAndOpenDialog(cloneEntity, null); }
                    });
                },
                visible: function () { return false; },
                disabled: function () { return !_this.hasInsertPermission() || _this.readOnly; }
            });
            return list;
        };
        EntityDialog.prototype.getCloningEntity = function () {
            var clone = new Object();
            clone = extend(clone, this.get_entity());
            var idField = this.getIdProperty();
            if (!isEmptyOrNull(idField)) {
                delete clone[idField];
            }
            var isActiveField = this.getIsActiveProperty();
            if (!isEmptyOrNull(isActiveField)) {
                delete clone[isActiveField];
            }
            var isDeletedField = this.getIsDeletedProperty();
            if (!isEmptyOrNull(isDeletedField)) {
                delete clone[isDeletedField];
            }
            return clone;
        };
        EntityDialog.prototype.updateInterface = function () {
            EditorUtils.setContainerReadOnly(this.byId('Form'), false);
            var isLocalizationMode = this.isLocalizationMode();
            var hasSavePermission = this.hasSavePermission();
            var viewMode = this.isViewMode();
            var readOnly = this.readOnly;
            this.toolbar.updateInterface();
            if (this.tabs != null) {
                TabsExtensions.setDisabled(this.tabs, 'Log', this.isNewOrDeleted());
            }
            if (this.propertyGrid != null) {
                this.propertyGrid.element.toggle(!isLocalizationMode);
            }
            if (this.localizationGrid != null) {
                this.localizationGrid.element.toggle(isLocalizationMode);
            }
            if (this.localizationButton != null) {
                this.localizationButton.toggle(this.localizationGrid != null);
                this.localizationButton.find('.button-inner')
                    .text((this.isLocalizationMode() ?
                    text('Controls.EntityDialog.LocalizationBack') :
                    text('Controls.EntityDialog.LocalizationButton')));
            }
            if (isLocalizationMode) {
                if (this.toolbar != null)
                    this.toolbar.findButton('tool-button')
                        .not('.localization-hidden')
                        .addClass('.localization-hidden').hide();
                this.localizationButton && this.localizationButton.show();
                return;
            }
            this.toolbar.findButton('localization-hidden')
                .removeClass('localization-hidden').show();
            this.saveAndCloseButton && this.saveAndCloseButton
                .find('.button-inner').text(text((this.isNew() ? 'Controls.EntityDialog.SaveButton' :
                'Controls.EntityDialog.UpdateButton')));
            if (!hasSavePermission || viewMode || readOnly)
                EditorUtils.setContainerReadOnly(this.byId("Form"), true);
        };
        EntityDialog.prototype.getUndeleteOptions = function (callback) {
            return {};
        };
        EntityDialog.prototype.undeleteHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.undelete = function (callback) {
            var _this = this;
            var baseOptions = {};
            baseOptions.service = this.getService() + '/Undelete';
            var request = {};
            request.EntityId = this.get_entityId();
            baseOptions.request = request;
            baseOptions.onSuccess = function (response) {
                callback && callback(response);
                _this.element.triggerHandler('ondatachange', [{
                        entityId: _this.get_entityId(),
                        entity: _this.entity,
                        type: 'undelete'
                    }]);
            };
            var thisOptions = this.getUndeleteOptions(callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.undeleteHandler(finalOptions, callback);
        };
        Object.defineProperty(EntityDialog.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        EntityDialog.prototype.get_readOnly = function () {
            return !!this._readonly;
        };
        EntityDialog.prototype.set_readOnly = function (value) {
            if (!!this._readonly != !!value) {
                this._readonly = !!value;
                this.updateInterface();
                this.updateTitle();
            }
        };
        EntityDialog.prototype.getInsertPermission = function () {
            return null;
        };
        EntityDialog.prototype.getUpdatePermission = function () {
            return null;
        };
        EntityDialog.prototype.getDeletePermission = function () {
            return null;
        };
        EntityDialog.prototype.hasDeletePermission = function () {
            var deletePermission = this.getDeletePermission();
            return deletePermission == null || Authorization.hasPermission(deletePermission);
        };
        EntityDialog.prototype.hasInsertPermission = function () {
            var insertPermission = this.getInsertPermission();
            return insertPermission == null || Authorization.hasPermission(insertPermission);
        };
        EntityDialog.prototype.hasUpdatePermission = function () {
            var updatePermission = this.getUpdatePermission();
            return updatePermission == null || Authorization.hasPermission(updatePermission);
        };
        EntityDialog.prototype.hasSavePermission = function () {
            return this.isNew() ? this.hasInsertPermission() : this.hasUpdatePermission();
        };
        EntityDialog.prototype.isViewMode = function () {
            return this.useViewMode() && this.isEditMode() && !this.editClicked;
        };
        EntityDialog.prototype.useViewMode = function () {
            return false;
        };
        EntityDialog.prototype.getFallbackTemplate = function () {
            return "<div class=\"s-DialogContent\">\n    <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n    </div>\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form> \n    </div>\n</div>";
        };
        var EntityDialog_1;
        EntityDialog = EntityDialog_1 = __decorate([
            Decorators.registerClass('Serenity.EntityDialog', [IEditDialog, IReadOnly])
        ], EntityDialog);
        return EntityDialog;
    }(TemplatedDialog));

    var FilterOperators;
    (function (FilterOperators) {
        FilterOperators.isTrue = 'true';
        FilterOperators.isFalse = 'false';
        FilterOperators.contains = 'contains';
        FilterOperators.startsWith = 'startswith';
        FilterOperators.EQ = 'eq';
        FilterOperators.NE = 'ne';
        FilterOperators.GT = 'gt';
        FilterOperators.GE = 'ge';
        FilterOperators.LT = 'lt';
        FilterOperators.LE = 'le';
        FilterOperators.BW = 'bw';
        FilterOperators.IN = 'in';
        FilterOperators.isNull = 'isnull';
        FilterOperators.isNotNull = 'isnotnull';
        FilterOperators.toCriteriaOperator = {
            eq: '=',
            ne: '!=',
            gt: '>',
            ge: '>=',
            lt: '<',
            le: '<='
        };
    })(FilterOperators || (FilterOperators = {}));

    var FilterStore = /** @class */ (function () {
        function FilterStore(fields) {
            this.items = [];
            if (fields == null) {
                throw new ArgumentNullException('source');
            }
            this.fields = fields.slice();
            this.get_fields().sort(function (x, y) {
                var titleX = tryGetText(x.title);
                if (titleX == null) {
                    titleX = x.title;
                    if (titleX == null)
                        titleX = x.name;
                }
                var titleY = tryGetText(y.title);
                if (titleY == null) {
                    titleY = y.title;
                    if (titleY == null)
                        titleY = y.name;
                }
                return Culture.stringCompare(titleX, titleY);
            });
            this.fieldByName = {};
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                this.get_fieldByName()[field.name] = field;
            }
        }
        FilterStore_1 = FilterStore;
        FilterStore.getCriteriaFor = function (items) {
            if (items == null)
                return [''];
            var inParens = false;
            var currentBlock = [''];
            var isBlockOr = false;
            var criteria = [''];
            for (var i = 0; i < items.length; i++) {
                var line = items[i];
                if (line.leftParen || inParens && line.rightParen) {
                    if (!Criteria.isEmpty(currentBlock)) {
                        if (inParens)
                            currentBlock = Criteria.paren(currentBlock);
                        if (isBlockOr)
                            criteria = Criteria.join(criteria, 'or', currentBlock);
                        else
                            criteria = Criteria.join(criteria, 'and', currentBlock);
                        currentBlock = [''];
                    }
                    inParens = false;
                }
                if (line.leftParen) {
                    isBlockOr = line.isOr;
                    inParens = true;
                }
                if (line.isOr)
                    currentBlock = Criteria.join(currentBlock, 'or', line.criteria);
                else
                    currentBlock = Criteria.join(currentBlock, 'and', line.criteria);
            }
            if (!Criteria.isEmpty(currentBlock)) {
                if (isBlockOr)
                    criteria = Criteria.join(criteria, 'or', Criteria.paren(currentBlock));
                else
                    criteria = Criteria.join(criteria, 'and', Criteria.paren(currentBlock));
            }
            return criteria;
        };
        FilterStore.getDisplayTextFor = function (items) {
            if (items == null)
                return '';
            var inParens = false;
            var displayText = '';
            for (var i = 0; i < items.length; i++) {
                var line = items[i];
                if (inParens && (line.rightParen || line.leftParen)) {
                    displayText += ')';
                    inParens = false;
                }
                if (displayText.length > 0) {
                    displayText += ' ' + text('Controls.FilterPanel.' +
                        (line.isOr ? 'Or' : 'And')) + ' ';
                }
                if (line.leftParen) {
                    displayText += '(';
                    inParens = true;
                }
                displayText += line.displayText;
            }
            if (inParens) {
                displayText += ')';
            }
            return displayText;
        };
        FilterStore.prototype.get_fields = function () {
            return this.fields;
        };
        FilterStore.prototype.get_fieldByName = function () {
            return this.fieldByName;
        };
        FilterStore.prototype.get_items = function () {
            return this.items;
        };
        FilterStore.prototype.raiseChanged = function () {
            this.displayText = null;
            this.changed && this.changed(this, {});
        };
        FilterStore.prototype.add_changed = function (value) {
            this.changed = delegateCombine(this.changed, value);
        };
        FilterStore.prototype.remove_changed = function (value) {
            this.changed = delegateRemove(this.changed, value);
        };
        FilterStore.prototype.get_activeCriteria = function () {
            return FilterStore_1.getCriteriaFor(this.items);
        };
        FilterStore.prototype.get_displayText = function () {
            if (this.displayText == null)
                this.displayText = FilterStore_1.getDisplayTextFor(this.items);
            return this.displayText;
        };
        var FilterStore_1;
        FilterStore = FilterStore_1 = __decorate([
            Decorators.registerClass('FilterStore')
        ], FilterStore);
        return FilterStore;
    }());

    var IFiltering = /** @class */ (function () {
        function IFiltering() {
        }
        IFiltering = __decorate([
            Decorators.registerInterface('Serenity.IFiltering')
        ], IFiltering);
        return IFiltering;
    }());
    var IQuickFiltering = /** @class */ (function () {
        function IQuickFiltering() {
        }
        IQuickFiltering = __decorate([
            Decorators.registerInterface('Serenity.IQuickFiltering')
        ], IQuickFiltering);
        return IQuickFiltering;
    }());
    var BaseFiltering = /** @class */ (function () {
        function BaseFiltering() {
        }
        BaseFiltering.prototype.get_field = function () {
            return this.field;
        };
        BaseFiltering.prototype.set_field = function (value) {
            this.field = value;
        };
        BaseFiltering.prototype.get_container = function () {
            return this.container;
        };
        BaseFiltering.prototype.set_container = function (value) {
            this.container = value;
        };
        BaseFiltering.prototype.get_operator = function () {
            return this.operator;
        };
        BaseFiltering.prototype.set_operator = function (value) {
            this.operator = value;
        };
        BaseFiltering.prototype.appendNullableOperators = function (list) {
            if (!this.isNullable()) {
                return list;
            }
            list.push({ key: FilterOperators.isNotNull });
            list.push({ key: FilterOperators.isNull });
            return list;
        };
        BaseFiltering.prototype.appendComparisonOperators = function (list) {
            list.push({ key: FilterOperators.EQ });
            list.push({ key: FilterOperators.NE });
            list.push({ key: FilterOperators.LT });
            list.push({ key: FilterOperators.LE });
            list.push({ key: FilterOperators.GT });
            list.push({ key: FilterOperators.GE });
            return list;
        };
        BaseFiltering.prototype.isNullable = function () {
            return this.get_field().required !== true;
        };
        BaseFiltering.prototype.createEditor = function () {
            switch (this.get_operator().key) {
                case 'true':
                case 'false':
                case 'isnull':
                case 'isnotnull': {
                    return;
                }
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    this.get_container().html('<input type="text"/>');
                    return;
                }
            }
            throw new Exception(format("Filtering '{0}' has no editor for '{1}' operator", getTypeName(getInstanceType(this)), this.get_operator().key));
        };
        BaseFiltering.prototype.operatorFormat = function (op) {
            var _a, _b;
            return (_b = (_a = op.format) !== null && _a !== void 0 ? _a : tryGetText('Controls.FilterPanel.OperatorFormats.' + op.key)) !== null && _b !== void 0 ? _b : op.key;
        };
        BaseFiltering.prototype.getTitle = function (field) {
            var _a, _b;
            return (_a = tryGetText(field.title)) !== null && _a !== void 0 ? _a : ((_b = field.title) !== null && _b !== void 0 ? _b : field.name);
        };
        BaseFiltering.prototype.displayText = function (op, values) {
            if (!values || values.length === 0) {
                return format(this.operatorFormat(op), this.getTitle(this.field));
            }
            else if (values.length === 1) {
                return format(this.operatorFormat(op), this.getTitle(this.field), values[0]);
            }
            else {
                return format(this.operatorFormat(op), this.getTitle(this.field), values[0], values[1]);
            }
        };
        BaseFiltering.prototype.getCriteriaField = function () {
            return this.field.name;
        };
        BaseFiltering.prototype.getCriteria = function () {
            var result = {};
            var text;
            switch (this.get_operator().key) {
                case 'true': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = [[this.getCriteriaField()], '=', true];
                    return result;
                }
                case 'false': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = [[this.getCriteriaField()], '=', false];
                    return result;
                }
                case 'isnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = ['is null', [this.getCriteriaField()]];
                    return result;
                }
                case 'isnotnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = ['is not null', [this.getCriteriaField()]];
                    return result;
                }
                case 'contains': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], 'like', '%' + text + '%'];
                    return result;
                }
                case 'startswith': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], 'like', text + '%'];
                    return result;
                }
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], FilterOperators.toCriteriaOperator[this.get_operator().key], this.getEditorValue()];
                    return result;
                }
            }
            throw new Exception(format("Filtering '{0}' has no handler for '{1}' operator", getTypeName(getInstanceType(this)), this.get_operator().key));
        };
        BaseFiltering.prototype.loadState = function (state) {
            var input = this.get_container().find(':input').first();
            input.val(state);
        };
        BaseFiltering.prototype.saveState = function () {
            switch (this.get_operator().key) {
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    var input = this.get_container().find(':input').first();
                    return input.val();
                }
            }
            return null;
        };
        BaseFiltering.prototype.argumentNull = function () {
            return new ArgumentNullException('value', text('Controls.FilterPanel.ValueRequired'));
        };
        BaseFiltering.prototype.validateEditorValue = function (value) {
            if (value.length === 0) {
                throw this.argumentNull();
            }
            return value;
        };
        BaseFiltering.prototype.getEditorValue = function () {
            var _a;
            var input = this.get_container().find(':input').not('.select2-focusser').first();
            if (input.length !== 1) {
                throw new Exception(format("Couldn't find input in filter container for {0}", ((_a = this.field.title) !== null && _a !== void 0 ? _a : this.field.name)));
            }
            var value;
            if (input.data('select2') != null) {
                value = input.select2('val');
            }
            else {
                value = input.val();
            }
            value = (value !== null && value !== void 0 ? value : '').trim();
            return this.validateEditorValue(value);
        };
        BaseFiltering.prototype.getEditorText = function () {
            var _a;
            var input = this.get_container().find(':input').not('.select2-focusser').not('.select2-input').first();
            if (input.length === 0) {
                return this.get_container().text().trim();
            }
            var value;
            if (input.data('select2') != null) {
                value = ((_a = input.select2('data')) !== null && _a !== void 0 ? _a : {}).text;
            }
            else {
                value = input.val();
            }
            return value;
        };
        BaseFiltering.prototype.initQuickFilter = function (filter) {
            filter.field = this.getCriteriaField();
            filter.type = StringEditor;
            filter.title = this.getTitle(this.field);
            filter.options = deepClone(this.get_field().quickFilterParams);
        };
        BaseFiltering = __decorate([
            Decorators.registerClass('Serenity.BaseFiltering', [IFiltering, IQuickFiltering])
        ], BaseFiltering);
        return BaseFiltering;
    }());
    function Filtering(name) {
        return Decorators.registerClass('Serenity.' + name + 'Filtering');
    }
    var BaseEditorFiltering = /** @class */ (function (_super) {
        __extends(BaseEditorFiltering, _super);
        function BaseEditorFiltering(editorType) {
            var _this = _super.call(this) || this;
            _this.editorType = editorType;
            return _this;
        }
        BaseEditorFiltering.prototype.useEditor = function () {
            switch (this.get_operator().key) {
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge':
                    return true;
            }
            return false;
        };
        BaseEditorFiltering.prototype.createEditor = function () {
            if (this.useEditor()) {
                this.editor = Widget.create({
                    type: this.editorType,
                    container: this.get_container(),
                    options: this.getEditorOptions(),
                    init: null
                });
                return;
            }
            this.editor = null;
            _super.prototype.createEditor.call(this);
        };
        BaseEditorFiltering.prototype.useIdField = function () {
            return false;
        };
        BaseEditorFiltering.prototype.getCriteriaField = function () {
            if (this.useEditor() &&
                this.useIdField() &&
                !isEmptyOrNull(this.get_field().filteringIdField)) {
                return this.get_field().filteringIdField;
            }
            return _super.prototype.getCriteriaField.call(this);
        };
        BaseEditorFiltering.prototype.getEditorOptions = function () {
            var opt = deepClone(this.get_field().editorParams || {});
            delete opt['cascadeFrom'];
            // currently can't support cascadeFrom in filtering
            return extend(opt, this.get_field().filteringParams);
        };
        BaseEditorFiltering.prototype.loadState = function (state) {
            if (this.useEditor()) {
                if (state == null) {
                    return;
                }
                EditorUtils.setValue(this.editor, state);
                return;
            }
            _super.prototype.loadState.call(this, state);
        };
        BaseEditorFiltering.prototype.saveState = function () {
            if (this.useEditor()) {
                return EditorUtils.getValue(this.editor);
            }
            return _super.prototype.saveState.call(this);
        };
        BaseEditorFiltering.prototype.getEditorValue = function () {
            if (this.useEditor()) {
                var value = EditorUtils.getValue(this.editor);
                if (value == null || (typeof value == "string" && value.trim().length === 0))
                    throw this.argumentNull();
                return value;
            }
            return _super.prototype.getEditorValue.call(this);
        };
        BaseEditorFiltering.prototype.initQuickFilter = function (filter) {
            _super.prototype.initQuickFilter.call(this, filter);
            filter.type = this.editorType;
            filter.options = extend(extend({}, deepClone(this.getEditorOptions())), deepClone(this.get_field().quickFilterParams));
        };
        BaseEditorFiltering = __decorate([
            Filtering('BaseEditor')
        ], BaseEditorFiltering);
        return BaseEditorFiltering;
    }(BaseFiltering));
    var DateFiltering = /** @class */ (function (_super) {
        __extends(DateFiltering, _super);
        function DateFiltering() {
            return _super.call(this, DateEditor) || this;
        }
        DateFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DateFiltering = __decorate([
            Filtering('Date')
        ], DateFiltering);
        return DateFiltering;
    }(BaseEditorFiltering));
    var BooleanFiltering = /** @class */ (function (_super) {
        __extends(BooleanFiltering, _super);
        function BooleanFiltering() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators([
                { key: FilterOperators.isTrue },
                { key: FilterOperators.isFalse }
            ]);
        };
        BooleanFiltering = __decorate([
            Filtering('Boolean')
        ], BooleanFiltering);
        return BooleanFiltering;
    }(BaseFiltering));
    var DateTimeFiltering = /** @class */ (function (_super) {
        __extends(DateTimeFiltering, _super);
        function DateTimeFiltering() {
            return _super.call(this, DateTimeEditor) || this;
        }
        DateTimeFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DateTimeFiltering.prototype.getCriteria = function () {
            var result = {};
            switch (this.get_operator().key) {
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    {
                        var text = this.getEditorText();
                        result.displayText = this.displayText(this.get_operator(), [text]);
                        var date = parseISODateTime(this.getEditorValue());
                        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                        var next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                        var criteria = [this.getCriteriaField()];
                        var dateValue = formatDate(date, 'yyyy-MM-dd');
                        var nextValue = formatDate(next, 'yyyy-MM-dd');
                        switch (this.get_operator().key) {
                            case 'eq': {
                                result.criteria = Criteria.join([criteria, '>=', dateValue], 'and', [criteria, '<', nextValue]);
                                return result;
                            }
                            case 'ne': {
                                result.criteria = Criteria.paren(Criteria.join([criteria, '<', dateValue], 'or', [criteria, '>', nextValue]));
                                return result;
                            }
                            case 'lt': {
                                result.criteria = [criteria, '<', dateValue];
                                return result;
                            }
                            case 'le': {
                                result.criteria = [criteria, '<', nextValue];
                                return result;
                            }
                            case 'gt': {
                                result.criteria = [criteria, '>=', nextValue];
                                return result;
                            }
                            case 'ge': {
                                result.criteria = [criteria, '>=', dateValue];
                                return result;
                            }
                        }
                    }
                    break;
                }
            }
            return _super.prototype.getCriteria.call(this);
        };
        DateTimeFiltering = __decorate([
            Filtering('DateTime')
        ], DateTimeFiltering);
        return DateTimeFiltering;
    }(BaseEditorFiltering));
    var DecimalFiltering = /** @class */ (function (_super) {
        __extends(DecimalFiltering, _super);
        function DecimalFiltering() {
            return _super.call(this, DecimalEditor) || this;
        }
        DecimalFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DecimalFiltering = __decorate([
            Filtering('Decimal')
        ], DecimalFiltering);
        return DecimalFiltering;
    }(BaseEditorFiltering));
    var EditorFiltering = /** @class */ (function (_super) {
        __extends(EditorFiltering, _super);
        function EditorFiltering() {
            return _super.call(this, Widget) || this;
        }
        EditorFiltering.prototype.getOperators = function () {
            var list = [];
            list.push({ key: FilterOperators.EQ });
            list.push({ key: FilterOperators.NE });
            if (this.useRelative) {
                list.push({ key: FilterOperators.LT });
                list.push({ key: FilterOperators.LE });
                list.push({ key: FilterOperators.GT });
                list.push({ key: FilterOperators.GE });
            }
            if (this.useLike) {
                list.push({ key: FilterOperators.contains });
                list.push({ key: FilterOperators.startsWith });
            }
            this.appendNullableOperators(list);
            return list;
        };
        EditorFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op === FilterOperators.EQ ||
                op === FilterOperators.NE ||
                (this.useRelative && (op === FilterOperators.LT ||
                    op === FilterOperators.LE ||
                    op === FilterOperators.GT ||
                    op === FilterOperators.GE));
        };
        EditorFiltering.prototype.getEditorOptions = function () {
            var _a;
            var opt = _super.prototype.getEditorOptions.call(this);
            if (this.useEditor() && this.editorType === ((_a = this.get_field().editorType) !== null && _a !== void 0 ? _a : 'String')) {
                opt = extend(opt, this.get_field().editorParams);
            }
            return opt;
        };
        EditorFiltering.prototype.createEditor = function () {
            var _this = this;
            if (this.useEditor()) {
                var editorType = EditorTypeRegistry.get(this.editorType);
                this.editor = Widget.create({
                    type: editorType,
                    element: function (e) { return e.appendTo(_this.get_container()); },
                    options: this.getEditorOptions()
                });
                return;
            }
            _super.prototype.createEditor.call(this);
        };
        EditorFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        EditorFiltering.prototype.initQuickFilter = function (filter) {
            _super.prototype.initQuickFilter.call(this, filter);
            filter.type = EditorTypeRegistry.get(this.editorType);
        };
        __decorate([
            Decorators.option()
        ], EditorFiltering.prototype, "editorType", void 0);
        __decorate([
            Decorators.option()
        ], EditorFiltering.prototype, "useRelative", void 0);
        __decorate([
            Decorators.option()
        ], EditorFiltering.prototype, "useLike", void 0);
        EditorFiltering = __decorate([
            Filtering('Editor')
        ], EditorFiltering);
        return EditorFiltering;
    }(BaseEditorFiltering));
    var EnumFiltering = /** @class */ (function (_super) {
        __extends(EnumFiltering, _super);
        function EnumFiltering() {
            return _super.call(this, EnumEditor) || this;
        }
        EnumFiltering.prototype.getOperators = function () {
            var op = [{ key: FilterOperators.EQ }, { key: FilterOperators.NE }];
            return this.appendNullableOperators(op);
        };
        EnumFiltering = __decorate([
            Filtering('Enum')
        ], EnumFiltering);
        return EnumFiltering;
    }(BaseEditorFiltering));
    var IntegerFiltering = /** @class */ (function (_super) {
        __extends(IntegerFiltering, _super);
        function IntegerFiltering() {
            return _super.call(this, IntegerEditor) || this;
        }
        IntegerFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        IntegerFiltering = __decorate([
            Filtering('Integer')
        ], IntegerFiltering);
        return IntegerFiltering;
    }(BaseEditorFiltering));
    var LookupFiltering = /** @class */ (function (_super) {
        __extends(LookupFiltering, _super);
        function LookupFiltering() {
            return _super.call(this, LookupEditor) || this;
        }
        LookupFiltering.prototype.getOperators = function () {
            var ops = [{ key: FilterOperators.EQ }, { key: FilterOperators.NE }, { key: FilterOperators.contains }, { key: FilterOperators.startsWith }];
            return this.appendNullableOperators(ops);
        };
        LookupFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op == FilterOperators.EQ || op == FilterOperators.NE;
        };
        LookupFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        LookupFiltering.prototype.getEditorText = function () {
            if (this.useEditor()) {
                return this.editor.text;
            }
            return _super.prototype.getEditorText.call(this);
        };
        LookupFiltering = __decorate([
            Filtering('Lookup')
        ], LookupFiltering);
        return LookupFiltering;
    }(BaseEditorFiltering));
    var ServiceLookupFiltering = /** @class */ (function (_super) {
        __extends(ServiceLookupFiltering, _super);
        function ServiceLookupFiltering() {
            return _super.call(this, ServiceLookupEditor) || this;
        }
        ServiceLookupFiltering.prototype.getOperators = function () {
            var ops = [{ key: FilterOperators.EQ }, { key: FilterOperators.NE }, { key: FilterOperators.contains }, { key: FilterOperators.startsWith }];
            return this.appendNullableOperators(ops);
        };
        ServiceLookupFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op == FilterOperators.EQ || op == FilterOperators.NE;
        };
        ServiceLookupFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        ServiceLookupFiltering.prototype.getEditorText = function () {
            if (this.useEditor()) {
                return this.editor.text;
            }
            return _super.prototype.getEditorText.call(this);
        };
        ServiceLookupFiltering = __decorate([
            Filtering('ServiceLookup')
        ], ServiceLookupFiltering);
        return ServiceLookupFiltering;
    }(BaseEditorFiltering));
    var StringFiltering = /** @class */ (function (_super) {
        __extends(StringFiltering, _super);
        function StringFiltering() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringFiltering.prototype.getOperators = function () {
            var ops = [
                { key: FilterOperators.contains },
                { key: FilterOperators.startsWith },
                { key: FilterOperators.EQ },
                { key: FilterOperators.NE }
            ];
            return this.appendNullableOperators(ops);
        };
        StringFiltering.prototype.validateEditorValue = function (value) {
            if (value.length === 0) {
                return value;
            }
            return _super.prototype.validateEditorValue.call(this, value);
        };
        StringFiltering = __decorate([
            Filtering('String')
        ], StringFiltering);
        return StringFiltering;
    }(BaseFiltering));
    var FilteringTypeRegistry;
    (function (FilteringTypeRegistry) {
        var knownTypes;
        function initialize() {
            if (knownTypes != null)
                return;
            knownTypes = {};
            for (var _i = 0, _a = getTypes(); _i < _a.length; _i++) {
                var type = _a[_i];
                if (!isAssignableFrom(IFiltering, type))
                    continue;
                var fullName = getTypeFullName(type).toLowerCase();
                knownTypes[fullName] = type;
                for (var _b = 0, _c = Config.rootNamespaces; _b < _c.length; _b++) {
                    var k = _c[_b];
                    if (startsWith(fullName, k.toLowerCase() + '.')) {
                        var kx = fullName.substr(k.length + 1).toLowerCase();
                        if (knownTypes[kx] == null) {
                            knownTypes[kx] = type;
                        }
                    }
                }
            }
            setTypeKeysWithoutFilterHandlerSuffix();
        }
        function setTypeKeysWithoutFilterHandlerSuffix() {
            var suffix = 'filtering';
            for (var _i = 0, _a = Object.keys(knownTypes); _i < _a.length; _i++) {
                var k = _a[_i];
                if (!endsWith(k, suffix))
                    continue;
                var p = k.substr(0, k.length - suffix.length);
                if (isEmptyOrNull(p))
                    continue;
                if (knownTypes[p] != null)
                    continue;
                knownTypes[p] = knownTypes[k];
            }
        }
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            initialize();
            var formatterType = knownTypes[key.toLowerCase()];
            if (formatterType == null)
                throw new Exception(format("Can't find {0} filter handler type!", key));
            return formatterType;
        }
        FilteringTypeRegistry.get = get;
    })(FilteringTypeRegistry || (FilteringTypeRegistry = {}));

    var FilterWidgetBase = /** @class */ (function (_super) {
        __extends(FilterWidgetBase, _super);
        function FilterWidgetBase(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.store = new FilterStore([]);
            _this.onFilterStoreChanged = function () { return _this.filterStoreChanged(); };
            _this.store.add_changed(_this.onFilterStoreChanged);
            return _this;
        }
        FilterWidgetBase.prototype.destroy = function () {
            if (this.store) {
                this.store.remove_changed(this.onFilterStoreChanged);
                this.onFilterStoreChanged = null;
                this.store = null;
            }
            _super.prototype.destroy.call(this);
        };
        FilterWidgetBase.prototype.filterStoreChanged = function () {
        };
        FilterWidgetBase.prototype.get_store = function () {
            return this.store;
        };
        FilterWidgetBase.prototype.set_store = function (value) {
            if (this.store !== value) {
                if (this.store != null)
                    this.store.remove_changed(this.onFilterStoreChanged);
                this.store = value || new FilterStore([]);
                this.store.add_changed(this.onFilterStoreChanged);
                this.filterStoreChanged();
            }
        };
        FilterWidgetBase = __decorate([
            Decorators.registerClass('Serenity.FilterWidgetBase')
        ], FilterWidgetBase);
        return FilterWidgetBase;
    }(TemplatedWidget));

    var FilterFieldSelect = /** @class */ (function (_super) {
        __extends(FilterFieldSelect, _super);
        function FilterFieldSelect(hidden, fields) {
            var _a, _b;
            var _this = _super.call(this, hidden) || this;
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                _this.addOption(field.name, ((_b = (_a = tryGetText(field.title)) !== null && _a !== void 0 ? _a : field.title) !== null && _b !== void 0 ? _b : field.name), field);
            }
            return _this;
        }
        FilterFieldSelect.prototype.emptyItemText = function () {
            if (isEmptyOrNull(this.value)) {
                return text('Controls.FilterPanel.SelectField');
            }
            return null;
        };
        FilterFieldSelect.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            opt.allowClear = false;
            return opt;
        };
        FilterFieldSelect = __decorate([
            Decorators.registerClass('Serenity.FilterFieldSelect')
        ], FilterFieldSelect);
        return FilterFieldSelect;
    }(Select2Editor));
    var FilterOperatorSelect = /** @class */ (function (_super) {
        __extends(FilterOperatorSelect, _super);
        function FilterOperatorSelect(hidden, source) {
            var _a, _b;
            var _this = _super.call(this, hidden) || this;
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var op = source_1[_i];
                var title = ((_a = op.title) !== null && _a !== void 0 ? _a : ((_b = tryGetText("Controls.FilterPanel.OperatorNames." + op.key)) !== null && _b !== void 0 ? _b : op.key));
                _this.addOption(op.key, title, op);
            }
            if (source.length && source[0])
                _this.value = source[0].key;
            return _this;
        }
        FilterOperatorSelect.prototype.emptyItemText = function () {
            return null;
        };
        FilterOperatorSelect.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            opt.allowClear = false;
            return opt;
        };
        FilterOperatorSelect = __decorate([
            Decorators.registerClass('Serenity.FilterOperatorSelect')
        ], FilterOperatorSelect);
        return FilterOperatorSelect;
    }(Select2Editor));
    var FilterPanel = /** @class */ (function (_super) {
        __extends(FilterPanel, _super);
        function FilterPanel(div) {
            var _this = _super.call(this, div) || this;
            _this.element.addClass('s-FilterPanel');
            _this.rowsDiv = _this.byId('Rows');
            _this.initButtons();
            _this.updateButtons();
            return _this;
        }
        FilterPanel.prototype.get_showInitialLine = function () {
            return this.showInitialLine;
        };
        FilterPanel.prototype.set_showInitialLine = function (value) {
            if (this.showInitialLine !== value) {
                this.showInitialLine = value;
                if (this.showInitialLine && this.rowsDiv.children().length === 0) {
                    this.addEmptyRow(false);
                }
            }
        };
        FilterPanel.prototype.filterStoreChanged = function () {
            _super.prototype.filterStoreChanged.call(this);
            this.updateRowsFromStore();
        };
        FilterPanel.prototype.updateRowsFromStore = function () {
            this.rowsDiv.empty();
            var items = this.get_store().get_items();
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.addEmptyRow(false);
                var row = this.rowsDiv.children().last();
                var divl = row.children('div.l');
                divl.children('.leftparen').toggleClass('active', !!item.leftParen);
                divl.children('.rightparen').toggleClass('active', !!item.rightParen);
                divl.children('.andor').toggleClass('or', !!item.isOr)
                    .text(text((!!item.isOr ? 'Controls.FilterPanel.Or' :
                    'Controls.FilterPanel.And')));
                var fieldSelect = row.children('div.f')
                    .find('input.field-select').getWidget(FilterFieldSelect);
                fieldSelect.value = item.field;
                this.rowFieldChange(row);
                var operatorSelect = row.children('div.o')
                    .find('input.op-select').getWidget(FilterOperatorSelect);
                operatorSelect.set_value(item.operator);
                this.rowOperatorChange(row);
                var filtering = this.getFilteringFor(row);
                if (filtering != null) {
                    filtering.set_operator({ key: item.operator });
                    filtering.loadState(item.state);
                }
            }
            if (this.get_showInitialLine() && this.rowsDiv.children().length === 0) {
                this.addEmptyRow(false);
            }
            this.updateParens();
        };
        FilterPanel.prototype.get_showSearchButton = function () {
            return this.showSearchButton;
        };
        FilterPanel.prototype.set_showSearchButton = function (value) {
            if (this.showSearchButton !== value) {
                this.showSearchButton = value;
                this.updateButtons();
            }
        };
        FilterPanel.prototype.get_updateStoreOnReset = function () {
            return this.updateStoreOnReset;
        };
        FilterPanel.prototype.set_updateStoreOnReset = function (value) {
            if (this.updateStoreOnReset !== value) {
                this.updateStoreOnReset = value;
            }
        };
        FilterPanel.prototype.getTemplate = function () {
            return "<div id='~_Rows' class='filter-lines'>" +
                "</div>" +
                "<div id='~_Buttons' class='buttons'>" +
                "<button id='~_AddButton' class='btn btn-primary add'></button>" +
                "<button id='~_SearchButton' class='btn btn-success search'></button>" +
                "<button id='~_ResetButton' class='btn btn-danger reset'></button>" +
                "</div>" +
                "<div style='clear: both'>" +
                "</div>";
        };
        FilterPanel.prototype.initButtons = function () {
            var _this = this;
            this.byId('AddButton').text(text('Controls.FilterPanel.AddFilter'))
                .click(function (e) { return _this.addButtonClick(e); });
            this.byId('SearchButton').text(text('Controls.FilterPanel.SearchButton'))
                .click(function (e) { return _this.searchButtonClick(e); });
            this.byId('ResetButton').text(text('Controls.FilterPanel.ResetButton'))
                .click(function (e) { return _this.resetButtonClick(e); });
        };
        FilterPanel.prototype.searchButtonClick = function (e) {
            e.preventDefault();
            this.search();
        };
        FilterPanel.prototype.get_hasErrors = function () {
            return this.rowsDiv.children().children('div.v')
                .children('span.error').length > 0;
        };
        FilterPanel.prototype.search = function () {
            this.rowsDiv.children().children('div.v')
                .children('span.error').remove();
            var filterLines = [];
            var errorText = null;
            var row = null;
            for (var i = 0; i < this.rowsDiv.children().length; i++) {
                row = this.rowsDiv.children().eq(i);
                var filtering = this.getFilteringFor(row);
                if (filtering == null) {
                    continue;
                }
                var field = this.getFieldFor(row);
                var op = row.children('div.o').find('input.op-select')
                    .getWidget(FilterOperatorSelect).value;
                if (op == null || op.length === 0) {
                    errorText = text('Controls.FilterPanel.InvalidOperator');
                    break;
                }
                var line = {};
                line.field = field.name;
                line.operator = op;
                line.isOr = row.children('div.l')
                    .children('a.andor').hasClass('or');
                line.leftParen = row.children('div.l')
                    .children('a.leftparen').hasClass('active');
                line.rightParen = row.children('div.l')
                    .children('a.rightparen').hasClass('active');
                filtering.set_operator({ key: op });
                var criteria = filtering.getCriteria();
                line.criteria = criteria.criteria;
                line.state = filtering.saveState();
                line.displayText = criteria.displayText;
                filterLines.push(line);
            }
            // if an error occurred, display it, otherwise set current filters
            if (errorText != null) {
                $('<span/>').addClass('error')
                    .attr('title', errorText).appendTo(row.children('div.v'));
                row.children('div.v').find('input:first').focus();
                return;
            }
            var items = this.get_store().get_items();
            items.length = 0;
            items.push.apply(items, filterLines);
            this.get_store().raiseChanged();
        };
        FilterPanel.prototype.addButtonClick = function (e) {
            this.addEmptyRow(true);
            e.preventDefault();
        };
        FilterPanel.prototype.resetButtonClick = function (e) {
            e.preventDefault();
            if (this.get_updateStoreOnReset()) {
                if (this.get_store().get_items().length > 0) {
                    this.get_store().get_items().length = 0;
                    this.get_store().raiseChanged();
                }
            }
            this.rowsDiv.empty();
            this.updateButtons();
            if (this.get_showInitialLine()) {
                this.addEmptyRow(false);
            }
        };
        FilterPanel.prototype.findEmptyRow = function () {
            var result = null;
            this.rowsDiv.children().each(function (index, row) {
                var fieldInput = $(row).children('div.f')
                    .children('input.field-select').first();
                if (fieldInput.length === 0) {
                    return true;
                }
                var val = fieldInput.val();
                if (val == null || val.length === 0) {
                    result = $(row);
                    return false;
                }
                return true;
            });
            return result;
        };
        FilterPanel.prototype.addEmptyRow = function (popupField) {
            var _this = this;
            var emptyRow = this.findEmptyRow();
            if (emptyRow != null) {
                emptyRow.find('input.field-select').select2('focus');
                if (popupField) {
                    emptyRow.find('input.field-select').select2('open');
                }
                return emptyRow;
            }
            var isLastRowOr = this.rowsDiv.children().last()
                .children('a.andor').hasClass('or');
            var row = $("<div class='filter-line'>" +
                "<a class='delete'><span></span></a>" +
                "<div class='l'>" +
                "<a class='rightparen' href='#'>)</a>" +
                "<a class='andor' href='#'></a>" +
                "<a class='leftparen' href='#'>(</a>" +
                "</div>" +
                "<div class='f'>" +
                "<input type='hidden' class='field-select'>" +
                "</div>" +
                "<div class='o'></div>" +
                "<div class='v'></div>" +
                "<div style='clear: both'></div>" +
                "</div>").appendTo(this.rowsDiv);
            var parenDiv = row.children('div.l').hide();
            parenDiv.children('a.leftparen, a.rightparen')
                .click(function (e) { return _this.leftRightParenClick(e); });
            var andor = parenDiv.children('a.andor').attr('title', text('Controls.FilterPanel.ChangeAndOr'));
            if (isLastRowOr) {
                andor.addClass('or').text(text('Controls.FilterPanel.Or'));
            }
            else {
                andor.text(text('Controls.FilterPanel.And'));
            }
            andor.click(function (e) { return _this.andOrClick(e); });
            row.children('a.delete')
                .attr('title', text('Controls.FilterPanel.RemoveField'))
                .click(function (e) { return _this.deleteRowClick(e); });
            var fieldSel = new FilterFieldSelect(row.children('div.f')
                .children('input'), this.get_store().get_fields())
                .changeSelect2(function (e) { return _this.onRowFieldChange(e); });
            this.updateParens();
            this.updateButtons();
            row.find('input.field-select').select2('focus');
            if (popupField) {
                row.find('input.field-select').select2('open');
            }
            return row;
        };
        FilterPanel.prototype.onRowFieldChange = function (e) {
            var row = $(e.target).closest('div.filter-line');
            this.rowFieldChange(row);
            var opSelect = row.children('div.o').find('input.op-select');
            opSelect.select2('focus');
        };
        FilterPanel.prototype.rowFieldChange = function (row) {
            row.removeData('Filtering');
            var select = row.children('div.f').find('input.field-select')
                .getWidget(FilterFieldSelect);
            var fieldName = select.get_value();
            this.removeFiltering(row);
            this.populateOperatorList(row);
            this.rowOperatorChange(row);
            this.updateParens();
            this.updateButtons();
        };
        FilterPanel.prototype.removeFiltering = function (row) {
            row.data('Filtering', null);
            row.data('FilteringField', null);
        };
        FilterPanel.prototype.populateOperatorList = function (row) {
            var _this = this;
            row.children('div.o').html('');
            var filtering = this.getFilteringFor(row);
            if (filtering == null)
                return;
            var hidden = row.children('div.o').html('<input/>')
                .children().attr('type', 'hidden').addClass('op-select');
            var operators = filtering.getOperators();
            var opSelect = new FilterOperatorSelect(hidden, operators);
            opSelect.changeSelect2(function (e) { return _this.onRowOperatorChange(e); });
        };
        FilterPanel.prototype.getFieldFor = function (row) {
            if (row.length === 0) {
                return null;
            }
            var select = row.children('div.f').find('input.field-select')
                .getWidget(FilterFieldSelect);
            if (isEmptyOrNull(select.value)) {
                return null;
            }
            return this.get_store().get_fieldByName()[select.get_value()];
        };
        FilterPanel.prototype.getFilteringFor = function (row) {
            var _a;
            var field = this.getFieldFor(row);
            if (field == null)
                return null;
            var filtering = cast(row.data('Filtering'), IFiltering);
            if (filtering != null)
                return filtering;
            var filteringType = FilteringTypeRegistry.get(((_a = field.filteringType) !== null && _a !== void 0 ? _a : 'String'));
            var editorDiv = row.children('div.v');
            filtering = new filteringType();
            ReflectionOptionsSetter.set(filtering, field.filteringParams);
            filtering.set_container(editorDiv);
            filtering.set_field(field);
            row.data('Filtering', filtering);
            return filtering;
        };
        FilterPanel.prototype.onRowOperatorChange = function (e) {
            var row = $(e.target).closest('div.filter-line');
            this.rowOperatorChange(row);
            var firstInput = row.children('div.v').find(':input:visible').first();
            try {
                firstInput.focus();
            }
            catch ($t1) {
            }
        };
        FilterPanel.prototype.rowOperatorChange = function (row) {
            if (row.length === 0) {
                return;
            }
            var editorDiv = row.children('div.v');
            editorDiv.html('');
            var filtering = this.getFilteringFor(row);
            if (filtering == null)
                return;
            var operatorSelect = row.children('div.o').find('input.op-select')
                .getWidget(FilterOperatorSelect);
            if (isEmptyOrNull(operatorSelect.get_value()))
                return;
            var ops = filtering.getOperators().filter(function (x) {
                return x.key === operatorSelect.value;
            });
            var op = ((ops.length > 0) ? ops[0] : null);
            if (op == null)
                return;
            filtering.set_operator(op);
            filtering.createEditor();
        };
        FilterPanel.prototype.deleteRowClick = function (e) {
            e.preventDefault();
            var row = $(e.target).closest('div.filter-line');
            row.remove();
            if (this.rowsDiv.children().length === 0) {
                this.search();
            }
            this.updateParens();
            this.updateButtons();
        };
        FilterPanel.prototype.updateButtons = function () {
            this.byId('SearchButton').toggle(this.rowsDiv.children().length >= 1 && this.showSearchButton);
            this.byId('ResetButton').toggle(this.rowsDiv.children().length >= 1);
        };
        FilterPanel.prototype.andOrClick = function (e) {
            e.preventDefault();
            var andor = $(e.target).toggleClass('or');
            andor.text(text('Controls.FilterPanel.' +
                (andor.hasClass('or') ? 'Or' : 'And')));
        };
        FilterPanel.prototype.leftRightParenClick = function (e) {
            e.preventDefault();
            $(e.target).toggleClass('active');
            this.updateParens();
        };
        FilterPanel.prototype.updateParens = function () {
            var rows = this.rowsDiv.children();
            if (rows.length === 0) {
                return;
            }
            rows.removeClass('paren-start');
            rows.removeClass('paren-end');
            rows.children('div.l').css('display', ((rows.length === 1) ? 'none' : 'block'));
            rows.first().children('div.l').children('a.rightparen, a.andor')
                .css('visibility', 'hidden');
            for (var i = 1; i < rows.length; i++) {
                var row = rows.eq(i);
                row.children('div.l').css('display', 'block')
                    .children('a.lefparen, a.andor').css('visibility', 'visible');
            }
            var inParen = false;
            for (var i1 = 0; i1 < rows.length; i1++) {
                var row1 = rows.eq(i1);
                var divParen = row1.children('div.l');
                var lp = divParen.children('a.leftparen');
                var rp = divParen.children('a.rightparen');
                if (rp.hasClass('active') && inParen) {
                    inParen = false;
                    if (i1 > 0) {
                        rows.eq(i1 - 1).addClass('paren-end');
                    }
                }
                if (lp.hasClass('active')) {
                    inParen = true;
                    if (i1 > 0) {
                        row1.addClass('paren-start');
                    }
                }
            }
        };
        return FilterPanel;
    }(FilterWidgetBase));

    var FilterDialog = /** @class */ (function (_super) {
        __extends(FilterDialog, _super);
        function FilterDialog() {
            var _this = _super.call(this) || this;
            _this.filterPanel = new FilterPanel(_this.byId('FilterPanel'));
            _this.filterPanel.set_showInitialLine(true);
            _this.filterPanel.set_showSearchButton(false);
            _this.filterPanel.set_updateStoreOnReset(false);
            _this.dialogTitle = text('Controls.FilterPanel.DialogTitle');
            return _this;
        }
        FilterDialog.prototype.get_filterPanel = function () {
            return this.filterPanel;
        };
        FilterDialog.prototype.getTemplate = function () {
            return '<div id="~_FilterPanel"/>';
        };
        FilterDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [
                {
                    text: text('Dialogs.OkButton'),
                    click: function () {
                        _this.filterPanel.search();
                        if (_this.filterPanel.get_hasErrors()) {
                            notifyError(text('Controls.FilterPanel.FixErrorsMessage'), '', null);
                            return;
                        }
                        _this.dialogClose();
                    }
                },
                {
                    text: text('Dialogs.CancelButton'),
                    click: function () { return _this.dialogClose(); }
                }
            ];
        };
        FilterDialog = __decorate([
            Decorators.registerClass('Serenity.FilterDialog')
        ], FilterDialog);
        return FilterDialog;
    }(TemplatedDialog));

    var FilterDisplayBar = /** @class */ (function (_super) {
        __extends(FilterDisplayBar, _super);
        function FilterDisplayBar(div) {
            var _this = _super.call(this, div) || this;
            _this.element.find('.cap').text(text('Controls.FilterPanel.EffectiveFilter'));
            _this.element.find('.edit').text(text('Controls.FilterPanel.EditFilter'));
            _this.element.find('.reset').attr('title', text('Controls.FilterPanel.ResetFilterHint'));
            var openFilterDialog = function (e) {
                e.preventDefault();
                var dialog = new FilterDialog();
                dialog.get_filterPanel().set_store(_this.get_store());
                dialog.dialogOpen(null);
            };
            _this.element.find('.edit').click(openFilterDialog);
            _this.element.find('.txt').click(openFilterDialog);
            _this.element.find('.reset').click(function (e1) {
                e1.preventDefault();
                _this.get_store().get_items().length = 0;
                _this.get_store().raiseChanged();
            });
            return _this;
        }
        FilterDisplayBar.prototype.filterStoreChanged = function () {
            _super.prototype.filterStoreChanged.call(this);
            var displayText = trimToNull(this.get_store().get_displayText());
            this.element.find('.current').toggle(displayText != null);
            this.element.find('.reset').toggle(displayText != null);
            if (displayText == null)
                displayText = text('Controls.FilterPanel.EffectiveEmpty');
            this.element.find('.txt').text('[' + displayText + ']');
        };
        FilterDisplayBar.prototype.getTemplate = function () {
            return "<div><a class='reset'></a><a class='edit'></a>" +
                "<div class='current'><span class='cap'></span>" +
                "<a class='txt'></a></div></div>";
        };
        FilterDisplayBar = __decorate([
            Decorators.registerClass('Serenity.FilterDisplayBar')
        ], FilterDisplayBar);
        return FilterDisplayBar;
    }(FilterWidgetBase));

    var SlickPager = /** @class */ (function (_super) {
        __extends(SlickPager, _super);
        function SlickPager(div, o) {
            var _this = _super.call(this, div, extend({
                showRowsPerPage: true,
                rowsPerPageOptions: [20, 100, 500, 2000]
            }, o)) || this;
            o = _this.options;
            var v = o.view;
            if (!v)
                throw "SlickPager requires view option to be set!";
            _this.element.addClass('s-SlickPager slick-pg')
                .html('<div class="slick-pg-in">' +
                '<div class="slick-pg-grp">' +
                '<div class="slick-pg-first slick-pg-btn"><span class="slick-pg-btn-span"></span></div>' +
                '<div class="slick-pg-prev slick-pg-btn"><span class="slick-pg-btn-span"></span></div>' +
                '</div><div class="slick-pg-sep"></div><div class="slick-pg-grp">' +
                '<span class="slick-pg-control">&nbsp;' + text("Controls.Pager.Page") +
                '&nbsp;<input class="slick-pg-current" type="text" size="4" value="1" /> / ' +
                '<span class="slick-pg-total"> 1 </span></span>' +
                '</div><div class="slick-pg-sep"></div><div class="slick-pg-grp">' +
                '<div class="slick-pg-next slick-pg-btn"><span class="slick-pg-btn-span"></span></div>' +
                '<div class="slick-pg-last slick-pg-btn"><span class="slick-pg-btn-span"></span></div>' +
                '</div><div class="slick-pg-sep"></div><div class="slick-pg-grp">' +
                '<div class="slick-pg-reload slick-pg-btn"><span class="slick-pg-btn-span"></span></div>' +
                '</div><div class="slick-pg-sep"></div>' +
                '<div class="slick-pg-grp"><span class="slick-pg-stat"></span></div></div>');
            var self = _this;
            $('.slick-pg-reload', _this.element).click(function () { v.populate(); });
            $('.slick-pg-first', _this.element).click(function () { self._changePage('first'); });
            $('.slick-pg-prev', _this.element).click(function () { self._changePage('prev'); });
            $('.slick-pg-next', _this.element).click(function () { self._changePage('next'); });
            $('.slick-pg-last', _this.element).click(function () { self._changePage('last'); });
            $('.slick-pg-current', _this.element).keydown(function (e) { if (e.keyCode == 13)
                self._changePage('input'); });
            if (self.options.showRowsPerPage) {
                var opt, sel = "";
                for (var nx = 0; nx < o.rowsPerPageOptions.length; nx++) {
                    if (v.rowsPerPage == o.rowsPerPageOptions[nx])
                        sel = 'selected="selected"';
                    else
                        sel = '';
                    opt += "<option value='" + o.rowsPerPageOptions[nx] + "' " + sel + " >" + o.rowsPerPageOptions[nx] + "&nbsp;&nbsp;</option>";
                }
                $('.slick-pg-in', _this.element).prepend('<div class="slick-pg-grp"><select class="slick-pg-size" name="rp">' + opt + '</select></div><div class="slick-pg-sep"></div>');
                $('select.slick-pg-size', _this.element).change(function () {
                    if (o.onRowsPerPageChange)
                        o.onRowsPerPageChange(+this.value);
                    else {
                        v["newp"] = 1;
                        v.setPagingOptions({
                            page: 1,
                            rowsPerPage: +this.value
                        });
                    }
                });
            }
            v.onPagingInfoChanged.subscribe(function () {
                self._updatePager();
            });
            return _this;
        }
        SlickPager.prototype._changePage = function (ctype) {
            var view = this.options.view;
            if (!view || view.loading)
                return true;
            var info = view.getPagingInfo();
            var pages = (!info.rowsPerPage || !info.totalCount) ? 1 : Math.ceil(info.totalCount / info.rowsPerPage);
            var newp;
            switch (ctype) {
                case 'first':
                    newp = 1;
                    break;
                case 'prev':
                    if (info.page > 1)
                        newp = parseInt(info.page) - 1;
                    break;
                case 'next':
                    if (info.page < pages)
                        newp = parseInt(info.page) + 1;
                    break;
                case 'last':
                    newp = pages;
                    break;
                case 'input':
                    var nv = parseInt($('input.slick-pg-current', this.element).val());
                    if (isNaN(nv))
                        nv = 1;
                    else if (nv < 1)
                        nv = 1;
                    else if (nv > pages)
                        nv = pages;
                    $('.slick-pg-current', this.element).val(nv);
                    newp = nv;
                    break;
            }
            if (newp == info.page)
                return false;
            if (this.options.onChangePage)
                this.options.onChangePage(newp);
            else {
                view.setPagingOptions({ page: newp });
            }
        };
        SlickPager.prototype._updatePager = function () {
            var view = this.options.view;
            var info = view.getPagingInfo();
            var pages = (!info.rowsPerPage || !info.totalCount) ? 1 : Math.ceil(info.totalCount / info.rowsPerPage);
            $('.slick-pg-current', this.element).val(info.page);
            $('.slick-pg-total', this.element).html(pages);
            var r1 = (info.page - 1) * info.rowsPerPage + 1;
            var r2 = r1 + info.rowsPerPage - 1;
            if (info.totalCount < r2)
                r2 = info.totalCount;
            var stat;
            if (info.loading) {
                stat = text("Controls.Pager.LoadingStatus");
            }
            else if (info.error) {
                stat = info.error;
            }
            else if (info.totalCount > 0) {
                stat = text("Controls.Pager.PageStatus");
                stat = stat.replace(/{from}/, r1);
                stat = stat.replace(/{to}/, r2);
                stat = stat.replace(/{total}/, info.totalCount);
            }
            else
                stat = text("Controls.Pager.NoRowStatus");
            $('.slick-pg-stat', this.element).html(stat);
            $('.slick-pg-size', this.element).val((info.rowsPerPage || 0).toString());
        };
        return SlickPager;
    }(Widget));

    var IInitializeColumn = /** @class */ (function () {
        function IInitializeColumn() {
        }
        IInitializeColumn = __decorate([
            Decorators.registerInterface('Serenity.IInitializeColumn')
        ], IInitializeColumn);
        return IInitializeColumn;
    }());
    function Formatter(name, intf) {
        return Decorators.registerFormatter('Serenity.' + name + 'Formatter', intf);
    }
    var BooleanFormatter = /** @class */ (function () {
        function BooleanFormatter() {
        }
        BooleanFormatter.prototype.format = function (ctx) {
            var _a, _b;
            if (ctx.value == null) {
                return '';
            }
            var text;
            if (!!ctx.value) {
                text = tryGetText(this.trueText);
                if (text == null) {
                    text = this.trueText;
                    if (text == null) {
                        text = (_a = tryGetText('Dialogs.YesButton')) !== null && _a !== void 0 ? _a : 'Yes';
                    }
                }
            }
            else {
                text = tryGetText(this.falseText);
                if (text == null) {
                    text = this.falseText;
                    if (text == null) {
                        text = (_b = tryGetText('Dialogs.NoButton')) !== null && _b !== void 0 ? _b : 'No';
                    }
                }
            }
            return htmlEncode(text);
        };
        __decorate([
            Decorators.option()
        ], BooleanFormatter.prototype, "falseText", void 0);
        __decorate([
            Decorators.option()
        ], BooleanFormatter.prototype, "trueText", void 0);
        BooleanFormatter = __decorate([
            Formatter('Boolean')
        ], BooleanFormatter);
        return BooleanFormatter;
    }());
    var CheckboxFormatter = /** @class */ (function () {
        function CheckboxFormatter() {
        }
        CheckboxFormatter.prototype.format = function (ctx) {
            return '<span class="check-box no-float readonly ' + (!!ctx.value ? ' checked' : '') + '"></span>';
        };
        CheckboxFormatter = __decorate([
            Formatter('Checkbox')
        ], CheckboxFormatter);
        return CheckboxFormatter;
    }());
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
            this.displayFormat = Culture.dateFormat;
        }
        DateFormatter_1 = DateFormatter;
        DateFormatter.format = function (value, format) {
            if (value == null) {
                return '';
            }
            var date;
            if (value instanceof Date) {
                date = value;
            }
            else if (typeof value === 'string') {
                date = parseISODateTime(value);
                if (date == null) {
                    return htmlEncode(value);
                }
            }
            else {
                return value.toString();
            }
            return htmlEncode(formatDate(date, format));
        };
        DateFormatter.prototype.format = function (ctx) {
            return DateFormatter_1.format(ctx.value, this.displayFormat);
        };
        var DateFormatter_1;
        __decorate([
            Decorators.option()
        ], DateFormatter.prototype, "displayFormat", void 0);
        DateFormatter = DateFormatter_1 = __decorate([
            Formatter('Date')
        ], DateFormatter);
        return DateFormatter;
    }());
    var DateTimeFormatter = /** @class */ (function (_super) {
        __extends(DateTimeFormatter, _super);
        function DateTimeFormatter() {
            var _this = _super.call(this) || this;
            _this.displayFormat = Culture.dateTimeFormat;
            return _this;
        }
        DateTimeFormatter = __decorate([
            Formatter('DateTime')
        ], DateTimeFormatter);
        return DateTimeFormatter;
    }(DateFormatter));
    var EnumFormatter = /** @class */ (function () {
        function EnumFormatter() {
        }
        EnumFormatter_1 = EnumFormatter;
        EnumFormatter.prototype.format = function (ctx) {
            return EnumFormatter_1.format(EnumTypeRegistry.get(this.enumKey), ctx.value);
        };
        EnumFormatter.format = function (enumType, value) {
            if (value == null) {
                return '';
            }
            var name = Enum.toString(enumType, value);
            var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
            var enumKey = ((enumKeyAttr.length > 0) ? enumKeyAttr[0].value : getTypeFullName(enumType));
            return EnumFormatter_1.getText(enumKey, name);
        };
        EnumFormatter.getText = function (enumKey, name) {
            var _a;
            if (isEmptyOrNull(name)) {
                return '';
            }
            return htmlEncode((_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name);
        };
        EnumFormatter.getName = function (enumType, value) {
            if (value == null) {
                return '';
            }
            return Enum.toString(enumType, value);
        };
        var EnumFormatter_1;
        __decorate([
            Decorators.option()
        ], EnumFormatter.prototype, "enumKey", void 0);
        EnumFormatter = EnumFormatter_1 = __decorate([
            Formatter('Enum')
        ], EnumFormatter);
        return EnumFormatter;
    }());
    var FileDownloadFormatter = /** @class */ (function () {
        function FileDownloadFormatter() {
        }
        FileDownloadFormatter_1 = FileDownloadFormatter;
        FileDownloadFormatter.prototype.format = function (ctx) {
            var _a;
            var dbFile = safeCast(ctx.value, String);
            if (isEmptyOrNull(dbFile)) {
                return '';
            }
            var downloadUrl = FileDownloadFormatter_1.dbFileUrl(dbFile);
            var originalName = (!isEmptyOrNull(this.originalNameProperty) ?
                safeCast(ctx.item[this.originalNameProperty], String) : null);
            originalName = (originalName !== null && originalName !== void 0 ? originalName : '');
            var text = format(((_a = this.displayFormat) !== null && _a !== void 0 ? _a : '{0}'), originalName, dbFile, downloadUrl);
            return "<a class='file-download-link' target='_blank' href='" +
                attrEncode(downloadUrl) + "'>" + htmlEncode(text) + '</a>';
        };
        FileDownloadFormatter.dbFileUrl = function (filename) {
            filename = replaceAll((filename !== null && filename !== void 0 ? filename : ''), '\\', '/');
            return resolveUrl('~/upload/') + filename;
        };
        FileDownloadFormatter.prototype.initializeColumn = function (column) {
            column.referencedFields = column.referencedFields || [];
            if (!isEmptyOrNull(this.originalNameProperty)) {
                column.referencedFields.push(this.originalNameProperty);
                return;
            }
        };
        var FileDownloadFormatter_1;
        __decorate([
            Decorators.option()
        ], FileDownloadFormatter.prototype, "displayFormat", void 0);
        __decorate([
            Decorators.option()
        ], FileDownloadFormatter.prototype, "originalNameProperty", void 0);
        FileDownloadFormatter = FileDownloadFormatter_1 = __decorate([
            Formatter('FileDownload', [ISlickFormatter, IInitializeColumn])
        ], FileDownloadFormatter);
        return FileDownloadFormatter;
    }());
    var MinuteFormatter = /** @class */ (function () {
        function MinuteFormatter() {
        }
        MinuteFormatter_1 = MinuteFormatter;
        MinuteFormatter.prototype.format = function (ctx) {
            return MinuteFormatter_1.format(ctx.value);
        };
        MinuteFormatter.format = function (value) {
            var hour = Math.floor(value / 60);
            var minute = value - hour * 60;
            var hourStr, minuteStr;
            if (value == null || isNaN(value))
                return '';
            if (hour < 10)
                hourStr = '0' + hour;
            else
                hourStr = hour.toString();
            if (minute < 10)
                minuteStr = '0' + minute;
            else
                minuteStr = minute.toString();
            return format('{0}:{1}', hourStr, minuteStr);
        };
        var MinuteFormatter_1;
        MinuteFormatter = MinuteFormatter_1 = __decorate([
            Formatter('Minute')
        ], MinuteFormatter);
        return MinuteFormatter;
    }());
    var NumberFormatter = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter_1 = NumberFormatter;
        NumberFormatter.prototype.format = function (ctx) {
            return NumberFormatter_1.format(ctx.value, this.displayFormat);
        };
        NumberFormatter.format = function (value, format) {
            format = (format !== null && format !== void 0 ? format : '0.##');
            if (value == null)
                return '';
            if (typeof (value) === 'number') {
                if (isNaN(value))
                    return '';
                return htmlEncode(formatNumber(value, format));
            }
            var dbl = parseDecimal(value.toString());
            if (dbl == null)
                return '';
            return htmlEncode(value.toString());
        };
        var NumberFormatter_1;
        __decorate([
            Decorators.option()
        ], NumberFormatter.prototype, "displayFormat", void 0);
        NumberFormatter = NumberFormatter_1 = __decorate([
            Formatter('Number')
        ], NumberFormatter);
        return NumberFormatter;
    }());
    var UrlFormatter = /** @class */ (function () {
        function UrlFormatter() {
        }
        UrlFormatter.prototype.format = function (ctx) {
            var _a, _b, _c, _d;
            var url = (!isEmptyOrNull(this.urlProperty) ?
                ((_a = ctx.item[this.urlProperty]) !== null && _a !== void 0 ? _a : '').toString() :
                ((_b = ctx.value) !== null && _b !== void 0 ? _b : '').toString());
            if (isEmptyOrNull(url))
                return '';
            if (!isEmptyOrNull(this.urlFormat))
                url = format(this.urlFormat, url);
            if (url != null && startsWith(url, '~/'))
                url = resolveUrl(url);
            var display = (!isEmptyOrNull(this.displayProperty) ?
                ((_c = ctx.item[this.displayProperty]) !== null && _c !== void 0 ? _c : '').toString() :
                ((_d = ctx.value) !== null && _d !== void 0 ? _d : '').toString());
            if (!isEmptyOrNull(this.displayFormat))
                display = format(this.displayFormat, display);
            var s = "<a href='" + attrEncode(url) + "'";
            if (!isEmptyOrNull(this.target))
                s += " target='" + this.target + "'";
            s += '>' + htmlEncode(display) + '</a>';
            return s;
        };
        UrlFormatter.prototype.initializeColumn = function (column) {
            column.referencedFields = column.referencedFields || [];
            if (!isEmptyOrNull(this.displayProperty)) {
                column.referencedFields.push(this.displayProperty);
                return;
            }
            if (!isEmptyOrNull(this.urlProperty)) {
                column.referencedFields.push(this.urlProperty);
                return;
            }
        };
        __decorate([
            Decorators.option()
        ], UrlFormatter.prototype, "displayProperty", void 0);
        __decorate([
            Decorators.option()
        ], UrlFormatter.prototype, "displayFormat", void 0);
        __decorate([
            Decorators.option()
        ], UrlFormatter.prototype, "urlProperty", void 0);
        __decorate([
            Decorators.option()
        ], UrlFormatter.prototype, "urlFormat", void 0);
        __decorate([
            Decorators.option()
        ], UrlFormatter.prototype, "target", void 0);
        UrlFormatter = __decorate([
            Formatter('Url', [ISlickFormatter, IInitializeColumn])
        ], UrlFormatter);
        return UrlFormatter;
    }());
    var FormatterTypeRegistry;
    (function (FormatterTypeRegistry) {
        var knownTypes;
        function setTypeKeysWithoutFormatterSuffix() {
            var suffix = 'formatter';
            for (var _i = 0, _a = Object.keys(knownTypes); _i < _a.length; _i++) {
                var k = _a[_i];
                if (!endsWith(k, suffix))
                    continue;
                var p = k.substr(0, k.length - suffix.length);
                if (isEmptyOrNull(p))
                    continue;
                if (knownTypes[p] != null)
                    continue;
                knownTypes[p] = knownTypes[k];
            }
        }
        function initialize() {
            if (knownTypes) {
                return;
            }
            knownTypes = {};
            var types = getTypes();
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (!isAssignableFrom(ISlickFormatter, type))
                    continue;
                var fullName = getTypeFullName(type).toLowerCase();
                knownTypes[fullName] = type;
                for (var _a = 0, _b = Config.rootNamespaces; _a < _b.length; _a++) {
                    var k = _b[_a];
                    if (startsWith(fullName, k.toLowerCase() + '.')) {
                        var kx = fullName.substr(k.length + 1).toLowerCase();
                        if (knownTypes[kx] == null) {
                            knownTypes[kx] = type;
                        }
                    }
                }
            }
            setTypeKeysWithoutFormatterSuffix();
        }
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            initialize();
            var formatterType = knownTypes[key.toLowerCase()];
            if (formatterType == null) {
                throw new Exception(format("Can't find {0} formatter type!", key));
            }
            return formatterType;
        }
        FormatterTypeRegistry.get = get;
        function reset() {
            knownTypes = null;
        }
        FormatterTypeRegistry.reset = reset;
    })(FormatterTypeRegistry || (FormatterTypeRegistry = {}));

    var GridRowSelectionMixin = /** @class */ (function () {
        function GridRowSelectionMixin(grid, options) {
            var _this = this;
            this.include = {};
            this.grid = grid;
            this.idField = grid.getView().idField;
            this.options = options || {};
            grid.getGrid().onClick.subscribe(function (e, p) {
                if ($(e.target).hasClass('select-item')) {
                    e.preventDefault();
                    var item = grid.getView().getItem(p.row);
                    var id = item[_this.idField].toString();
                    if (_this.include[id]) {
                        delete _this.include[id];
                    }
                    else {
                        _this.include[id] = true;
                    }
                    for (var i = 0; i < grid.getView().getLength(); i++) {
                        grid.getGrid().updateRow(i);
                    }
                    _this.updateSelectAll();
                }
            });
            grid.getGrid().onHeaderClick.subscribe(function (e1, u) {
                if (e1.isDefaultPrevented()) {
                    return;
                }
                if ($(e1.target).hasClass('select-all-items')) {
                    e1.preventDefault();
                    var view = grid.getView();
                    if (Object.keys(_this.include).length > 0) {
                        clearKeys(_this.include);
                    }
                    else {
                        var items = grid.getView().getItems();
                        for (var _i = 0, _a = items.filter(_this.isSelectable.bind(_this)); _i < _a.length; _i++) {
                            var x = _a[_i];
                            var id1 = x[_this.idField];
                            _this.include[id1] = true;
                        }
                    }
                    _this.updateSelectAll();
                    grid.getView().setItems(grid.getView().getItems(), true);
                }
            });
            grid.getView().onRowsChanged.subscribe(function () {
                return _this.updateSelectAll();
            });
        }
        GridRowSelectionMixin.prototype.updateSelectAll = function () {
            var selectAllButton = this.grid.getElement()
                .find('.select-all-header .slick-column-name .select-all-items');
            if (selectAllButton) {
                var keys = Object.keys(this.include);
                selectAllButton.toggleClass('checked', keys.length > 0 &&
                    this.grid.getView().getItems().filter(this.isSelectable.bind(this)).length <= keys.length);
            }
        };
        GridRowSelectionMixin.prototype.clear = function () {
            clearKeys(this.include);
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.resetCheckedAndRefresh = function () {
            this.include = {};
            this.updateSelectAll();
            this.grid.getView().populate();
        };
        GridRowSelectionMixin.prototype.selectKeys = function (keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                this.include[k] = true;
            }
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.getSelectedKeys = function () {
            return Object.keys(this.include);
        };
        GridRowSelectionMixin.prototype.getSelectedAsInt32 = function () {
            return Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
        };
        GridRowSelectionMixin.prototype.getSelectedAsInt64 = function () {
            return Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
        };
        GridRowSelectionMixin.prototype.setSelectedKeys = function (keys) {
            this.clear();
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var k = keys_2[_i];
                this.include[k] = true;
            }
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.isSelectable = function (item) {
            return item && (this.options.selectable == null ||
                this.options.selectable(item));
        };
        GridRowSelectionMixin.createSelectColumn = function (getMixin) {
            return {
                name: '<span class="select-all-items check-box no-float "></span>',
                toolTip: ' ',
                field: '__select__',
                width: 27,
                minWidth: 27,
                headerCssClass: 'select-all-header',
                sortable: false,
                format: function (ctx) {
                    var item = ctx.item;
                    var mixin = getMixin();
                    if (!mixin || !mixin.isSelectable(item)) {
                        return '';
                    }
                    var isChecked = mixin.include[ctx.item[mixin.idField]];
                    return '<span class="select-item check-box no-float ' + (isChecked ? ' checked' : '') + '"></span>';
                }
            };
        };
        GridRowSelectionMixin = __decorate([
            Decorators.registerClass('Serenity.GridRowSelectionMixin')
        ], GridRowSelectionMixin);
        return GridRowSelectionMixin;
    }());
    var GridRadioSelectionMixin = /** @class */ (function () {
        function GridRadioSelectionMixin(grid, options) {
            var _this = this;
            this.include = {};
            this.grid = grid;
            this.idField = grid.getView().idField;
            this.options = options || {};
            grid.getGrid().onClick.subscribe(function (e, p) {
                if ($(e.target).hasClass('rad-select-item')) {
                    e.preventDefault();
                    var item = grid.getView().getItem(p.row);
                    if (!_this.isSelectable(item)) {
                        return;
                    }
                    var id = item[_this.idField].toString();
                    if (_this.include[id] == true) {
                        clearKeys(_this.include);
                    }
                    else {
                        clearKeys(_this.include);
                        _this.include[id] = true;
                    }
                    for (var i = 0; i < grid.getView().getLength(); i++) {
                        grid.getGrid().updateRow(i);
                    }
                }
            });
        }
        GridRadioSelectionMixin.prototype.isSelectable = function (item) {
            return item && (this.options.selectable == null ||
                this.options.selectable(item));
        };
        GridRadioSelectionMixin.prototype.clear = function () {
            clearKeys(this.include);
        };
        GridRadioSelectionMixin.prototype.resetCheckedAndRefresh = function () {
            this.include = {};
            this.grid.getView().populate();
        };
        GridRadioSelectionMixin.prototype.getSelectedKey = function () {
            var items = Object.keys(this.include);
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.getSelectedAsInt32 = function () {
            var items = Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.getSelectedAsInt64 = function () {
            var items = Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.setSelectedKey = function (key) {
            this.clear();
            this.include[key] = true;
        };
        GridRadioSelectionMixin.createSelectColumn = function (getMixin) {
            return {
                name: '',
                toolTip: ' ',
                field: '__select__',
                width: 27,
                minWidth: 27,
                headerCssClass: '',
                sortable: false,
                formatter: function (row, cell, value, column, item) {
                    var mixin = getMixin();
                    if (!mixin || !mixin.isSelectable(item)) {
                        return '';
                    }
                    var isChecked = mixin.include[item[mixin.idField]];
                    return '<input type="radio" name="radio-selection-group" class="rad-select-item no-float" style="cursor: pointer;width: 13px; height:13px;" ' + (isChecked ? ' checked' : '') + ' /> ';
                }
            };
        };
        GridRadioSelectionMixin = __decorate([
            Decorators.registerClass('GridRadioSelectionMixin')
        ], GridRadioSelectionMixin);
        return GridRadioSelectionMixin;
    }());
    var GridSelectAllButtonHelper;
    (function (GridSelectAllButtonHelper) {
        function update(grid, getSelected) {
            var toolbar = grid.element.children('.s-Toolbar');
            if (toolbar.length === 0) {
                return;
            }
            var btn = toolbar.getWidget(Toolbar).findButton('select-all-button');
            var items = grid.getView().getItems();
            btn.toggleClass('checked', items.length > 0 && !items.some(function (x) {
                return !getSelected(x);
            }));
        }
        GridSelectAllButtonHelper.update = update;
        function define(getGrid, getId, getSelected, setSelected, text, onClick) {
            var _a;
            if (text == null) {
                text = (_a = tryGetText('Controls.CheckTreeEditor.SelectAll')) !== null && _a !== void 0 ? _a : 'Select All';
            }
            return {
                title: text,
                cssClass: 'select-all-button',
                onClick: function () {
                    var grid = getGrid();
                    var view = grid.getView();
                    var btn = grid.element.children('.s-Toolbar')
                        .getWidget(Toolbar).findButton('select-all-button');
                    var makeSelected = !btn.hasClass('checked');
                    view.beginUpdate();
                    try {
                        for (var _i = 0, _a = view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            setSelected(item, makeSelected);
                            view.updateItem(getId(item), item);
                        }
                        onClick && onClick();
                    }
                    finally {
                        view.endUpdate();
                    }
                    btn.toggleClass('checked', makeSelected);
                }
            };
        }
        GridSelectAllButtonHelper.define = define;
    })(GridSelectAllButtonHelper || (GridSelectAllButtonHelper = {}));
    var GridUtils;
    (function (GridUtils) {
        function addToggleButton(toolDiv, cssClass, callback, hint, initial) {
            var div = $('<div><a href="#"></a></div>')
                .addClass('s-ToggleButton').addClass(cssClass)
                .prependTo(toolDiv);
            div.children('a').click(function (e) {
                e.preventDefault();
                div.toggleClass('pressed');
                var pressed = div.hasClass('pressed');
                callback && callback(pressed);
            }).attr('title', hint !== null && hint !== void 0 ? hint : '');
            if (initial) {
                div.addClass('pressed');
            }
        }
        GridUtils.addToggleButton = addToggleButton;
        function addIncludeDeletedToggle(toolDiv, view, hint, initial) {
            var includeDeleted = false;
            var oldSubmit = view.onSubmit;
            view.onSubmit = function (v) {
                v.params.IncludeDeleted = includeDeleted;
                if (oldSubmit != null) {
                    return oldSubmit(v);
                }
                return true;
            };
            if (hint == null)
                hint = text('Controls.EntityGrid.IncludeDeletedToggle');
            addToggleButton(toolDiv, 's-IncludeDeletedToggle', function (pressed) {
                includeDeleted = pressed;
                view.seekToPage = 1;
                view.populate();
            }, hint, initial);
            toolDiv.bind('remove', function () {
                view.onSubmit = null;
                oldSubmit = null;
            });
        }
        GridUtils.addIncludeDeletedToggle = addIncludeDeletedToggle;
        function addQuickSearchInput(toolDiv, view, fields, onChange) {
            var oldSubmit = view.onSubmit;
            var input;
            view.onSubmit = function (v) {
                var _a;
                if (input) {
                    var searchText = input.get_value();
                    if (searchText && searchText.length > 0) {
                        v.params.ContainsText = searchText;
                    }
                    else {
                        delete v.params['ContainsText'];
                    }
                    var searchField = (_a = input.get_field()) === null || _a === void 0 ? void 0 : _a.name;
                    if (searchField != null && searchField.length > 0) {
                        v.params.ContainsField = searchField;
                    }
                    else {
                        delete v.params['ContainsField'];
                    }
                }
                if (oldSubmit != null)
                    return oldSubmit(v);
                return true;
            };
            var lastDoneEvent = null;
            input = addQuickSearchInputCustom(toolDiv, function (field, query, done) {
                onChange && onChange();
                view.seekToPage = 1;
                lastDoneEvent = done;
                view.populate();
            }, fields);
            view.onDataLoaded.subscribe(function (e, ui) {
                if (lastDoneEvent != null) {
                    lastDoneEvent(view.getLength() > 0);
                    lastDoneEvent = null;
                }
            });
        }
        GridUtils.addQuickSearchInput = addQuickSearchInput;
        function addQuickSearchInputCustom(container, onSearch, fields) {
            var div = $('<div><input type="text"/></div>')
                .addClass('s-QuickSearchBar').prependTo(container);
            if (fields != null && fields.length > 0) {
                div.addClass('has-quick-search-fields');
            }
            return new QuickSearchInput(div.children(), {
                fields: fields,
                onSearch: onSearch
            });
        }
        GridUtils.addQuickSearchInputCustom = addQuickSearchInputCustom;
        function makeOrderable(grid, handleMove) {
            var moveRowsPlugin = new Slick.RowMoveManager({ cancelEditOnDrag: true });
            moveRowsPlugin.onBeforeMoveRows.subscribe(function (e, data) {
                for (var i = 0; !!(i < data.rows.length); i++) {
                    if (!!(data.rows[i] === data.insertBefore ||
                        data.rows[i] === data.insertBefore - 1)) {
                        e.stopPropagation();
                        return false;
                    }
                }
                return true;
            });
            moveRowsPlugin.onMoveRows.subscribe(function (e1, data1) {
                handleMove(data1.rows, data1.insertBefore);
                try {
                    grid.setSelectedRows([]);
                }
                catch ($t1) {
                }
            });
            grid.registerPlugin(moveRowsPlugin);
        }
        GridUtils.makeOrderable = makeOrderable;
        function makeOrderableWithUpdateRequest(grid, getId, getDisplayOrder, service, getUpdateRequest) {
            makeOrderable(grid.getGrid(), function (rows, insertBefore) {
                var _a, _b;
                if (rows.length === 0) {
                    return;
                }
                var order;
                var index = insertBefore;
                if (index < 0) {
                    order = 1;
                }
                else if (insertBefore >= grid.getGrid().getDataLength()) {
                    order = ((_a = getDisplayOrder(grid.getGrid().getDataItem(grid.getGrid().getDataLength() - 1))) !== null && _a !== void 0 ? _a : 0);
                    if (order === 0) {
                        order = insertBefore + 1;
                    }
                    else {
                        order = order + 1;
                    }
                }
                else {
                    order = ((_b = getDisplayOrder(grid.getGrid().getDataItem(insertBefore))) !== null && _b !== void 0 ? _b : 0);
                    if (order === 0) {
                        order = insertBefore + 1;
                    }
                }
                var i = 0;
                var next = null;
                next = function () {
                    serviceCall({
                        service: service,
                        request: getUpdateRequest(getId(grid.getGrid().getDataItem(rows[i])), order++),
                        onSuccess: function (response) {
                            i++;
                            if (i < rows.length) {
                                next();
                            }
                            else {
                                grid.getView().populate();
                            }
                        }
                    });
                };
                next();
            });
        }
        GridUtils.makeOrderableWithUpdateRequest = makeOrderableWithUpdateRequest;
    })(GridUtils || (GridUtils = {}));
    var PropertyItemSlickConverter;
    (function (PropertyItemSlickConverter) {
        function toSlickColumns(items) {
            var result = [];
            if (items == null) {
                return result;
            }
            for (var i = 0; i < items.length; i++) {
                result.push(toSlickColumn(items[i]));
            }
            return result;
        }
        PropertyItemSlickConverter.toSlickColumns = toSlickColumns;
        function toSlickColumn(item) {
            var _a, _b;
            var result = {
                field: item.name,
                sourceItem: item,
                cssClass: item.cssClass,
                headerCssClass: item.headerCssClass,
                sortable: item.sortable !== false,
                sortOrder: (_a = item.sortOrder) !== null && _a !== void 0 ? _a : 0,
                width: item.width != null ? item.width : 80,
                minWidth: (_b = item.minWidth) !== null && _b !== void 0 ? _b : 30,
                maxWidth: (item.maxWidth == null || item.maxWidth === 0) ? null : item.maxWidth,
                resizable: item.resizable == null || !!item.resizable
            };
            result.visible = item.visible !== false && item.filterOnly !== true &&
                (item.readPermission == null || Authorization.hasPermission(item.readPermission));
            var name = tryGetText(item.title);
            if (name == null)
                name = item.title;
            result.name = name;
            if (item.alignment != null && item.alignment.length > 0) {
                if (!isEmptyOrNull(result.cssClass)) {
                    result.cssClass += ' align-' + item.alignment;
                }
                else {
                    result.cssClass = 'align-' + item.alignment;
                }
            }
            if (item.formatterType != null && item.formatterType.length > 0) {
                var formatterType = FormatterTypeRegistry.get(item.formatterType);
                var formatter = new formatterType();
                if (item.formatterParams != null) {
                    ReflectionOptionsSetter.set(formatter, item.formatterParams);
                }
                var initializer = safeCast(formatter, IInitializeColumn);
                if (initializer != null) {
                    initializer.initializeColumn(result);
                }
                result.format = function (ctx) { return formatter.format(ctx); };
            }
            return result;
        }
        PropertyItemSlickConverter.toSlickColumn = toSlickColumn;
    })(PropertyItemSlickConverter || (PropertyItemSlickConverter = {}));
    var SlickFormatting;
    (function (SlickFormatting) {
        function getEnumText(enumKey, name) {
            return EnumFormatter.getText(enumKey, name);
        }
        SlickFormatting.getEnumText = getEnumText;
        function treeToggle(getView, getId, formatter) {
            return function (ctx) {
                var _a, _b;
                var text = formatter(ctx);
                var view = getView();
                var indent = (_a = ctx.item._indent) !== null && _a !== void 0 ? _a : 0;
                var spacer = '<span class="s-TreeIndent" style="width:' + 15 * indent + 'px"></span>';
                var id = getId(ctx.item);
                var idx = view.getIdxById(id);
                var next = view.getItemByIdx(idx + 1);
                if (next != null) {
                    var nextIndent = (_b = next._indent) !== null && _b !== void 0 ? _b : 0;
                    if (nextIndent > indent) {
                        if (!!!!ctx.item._collapsed) {
                            return spacer + '<span class="s-TreeToggle s-TreeExpand"></span>' + text;
                        }
                        else {
                            return spacer + '<span class="s-TreeToggle s-TreeCollapse"></span>' + text;
                        }
                    }
                }
                return spacer + '<span class="s-TreeToggle"></span>' + text;
            };
        }
        SlickFormatting.treeToggle = treeToggle;
        function date(format) {
            if (format == null) {
                format = Culture.dateFormat;
            }
            return function (ctx) {
                return htmlEncode(DateFormatter.format(ctx.value, format));
            };
        }
        SlickFormatting.date = date;
        function dateTime(format) {
            if (format == null) {
                format = Culture.dateTimeFormat;
            }
            return function (ctx) {
                return htmlEncode(DateFormatter.format(ctx.value, format));
            };
        }
        SlickFormatting.dateTime = dateTime;
        function checkBox() {
            return function (ctx) {
                return '<span class="check-box no-float ' + (!!ctx.value ? ' checked' : '') + '"></span>';
            };
        }
        SlickFormatting.checkBox = checkBox;
        function number(format) {
            return function (ctx) {
                return NumberFormatter.format(ctx.value, format);
            };
        }
        SlickFormatting.number = number;
        function getItemType(link) {
            return link.data('item-type');
        }
        SlickFormatting.getItemType = getItemType;
        function getItemId(link) {
            var value = link.data('item-id');
            return value == null ? null : value.toString();
        }
        SlickFormatting.getItemId = getItemId;
        function itemLinkText(itemType, id, text, extraClass, encode) {
            return '<a' + (id != null ? (' href="#' + replaceAll(itemType, '.', '-') +
                '/' + id + '"') : '') + ' data-item-type="' +
                attrEncode(itemType) + '"' + ' data-item-id="' +
                attrEncode(id) + '"' + ' class="s-EditLink s-' +
                replaceAll(itemType, '.', '-') + 'Link' +
                (isEmptyOrNull(extraClass) ? '' : (' ' + extraClass)) + '">' +
                (encode ? htmlEncode(text !== null && text !== void 0 ? text : '') : text !== null && text !== void 0 ? text : '') + '</a>';
        }
        SlickFormatting.itemLinkText = itemLinkText;
        function itemLink(itemType, idField, getText, cssClass, encode) {
            return function (ctx) {
                var _a, _b;
                var text = (_a = (getText == null ? ctx.value : getText(ctx))) !== null && _a !== void 0 ? _a : '';
                if ((_b = ctx.item) === null || _b === void 0 ? void 0 : _b.__nonDataRow) {
                    return encode ? htmlEncode(text) : text;
                }
                return itemLinkText(itemType, ctx.item[idField], (getText == null ? ctx.value : getText(ctx)), (cssClass == null ? '' : cssClass(ctx)), encode);
            };
        }
        SlickFormatting.itemLink = itemLink;
    })(SlickFormatting || (SlickFormatting = {}));
    var SlickHelper;
    (function (SlickHelper) {
        function setDefaults(columns, localTextPrefix) {
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var col = columns_1[_i];
                col.sortable = (col.sortable != null ? col.sortable : true);
                var id = col.id;
                if (id == null) {
                    id = col.field;
                }
                col.id = id;
                if (localTextPrefix != null && col.id != null &&
                    (col.name == null || startsWith(col.name, '~'))) {
                    var key = (col.name != null ? col.name.substr(1) : col.id);
                    col.name = text(localTextPrefix + key);
                }
                if (col.formatter == null && col.format != null) {
                    col.formatter = convertToFormatter(col.format);
                }
                else if (col.formatter == null) {
                    col.formatter = function (row, cell, value, column, item) {
                        return htmlEncode(value);
                    };
                }
            }
            return columns;
        }
        SlickHelper.setDefaults = setDefaults;
        function convertToFormatter(format) {
            if (format == null) {
                return null;
            }
            else {
                return function (row, cell, value, column, item) {
                    return format({
                        row: row,
                        cell: cell,
                        value: value,
                        column: column,
                        item: item
                    });
                };
            }
        }
        SlickHelper.convertToFormatter = convertToFormatter;
    })(SlickHelper || (SlickHelper = {}));
    var SlickTreeHelper;
    (function (SlickTreeHelper) {
        function filterCustom(item, getParent) {
            var parent = getParent(item);
            var loop = 0;
            while (parent != null) {
                if (!!parent._collapsed) {
                    return false;
                }
                parent = getParent(parent);
                if (loop++ > 1000) {
                    throw new Error('Possible infinite loop, check parents has no circular reference!');
                }
            }
            return true;
        }
        SlickTreeHelper.filterCustom = filterCustom;
        function filterById(item, view, getParentId) {
            return filterCustom(item, function (x) {
                var parentId = getParentId(x);
                if (parentId == null) {
                    return null;
                }
                return view.getItemById(parentId);
            });
        }
        SlickTreeHelper.filterById = filterById;
        function setCollapsed(items, collapsed) {
            if (items != null) {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    item._collapsed = collapsed;
                }
            }
        }
        SlickTreeHelper.setCollapsed = setCollapsed;
        function setCollapsedFlag(item, collapsed) {
            item._collapsed = collapsed;
        }
        SlickTreeHelper.setCollapsedFlag = setCollapsedFlag;
        function setIndents(items, getId, getParentId, setCollapsed) {
            var depth = 0;
            var depths = {};
            for (var line = 0; line < items.length; line++) {
                var item = items[line];
                if (line > 0) {
                    var parentId = getParentId(item);
                    if (parentId != null && parentId === getId(items[line - 1])) {
                        depth += 1;
                    }
                    else if (parentId == null) {
                        depth = 0;
                    }
                    else if (parentId !== getParentId(items[line - 1])) {
                        if (depths[parentId] != null) {
                            depth = depths[parentId] + 1;
                        }
                        else {
                            depth = 0;
                        }
                    }
                }
                depths[getId(item)] = depth;
                item._indent = depth;
                if (setCollapsed != null) {
                    item._collapsed = setCollapsed;
                }
            }
        }
        SlickTreeHelper.setIndents = setIndents;
        function toggleClick(e, row, cell, view, getId) {
            var target = $(e.target);
            if (!target.hasClass('s-TreeToggle')) {
                return;
            }
            if (target.hasClass('s-TreeCollapse') || target.hasClass('s-TreeExpand')) {
                var item = view.getItem(row);
                if (item != null) {
                    if (!!!item._collapsed) {
                        item._collapsed = true;
                    }
                    else {
                        item._collapsed = false;
                    }
                    view.updateItem(getId(item), item);
                }
                if (e.shiftKey) {
                    view.beginUpdate();
                    try {
                        setCollapsed(view.getItems(), !!item._collapsed);
                        view.setItems(view.getItems(), true);
                    }
                    finally {
                        view.endUpdate();
                    }
                }
            }
        }
        SlickTreeHelper.toggleClick = toggleClick;
    })(SlickTreeHelper || (SlickTreeHelper = {}));

    var RemoteView = /** @class */ (function () {
        function RemoteView(options) {
            var _a;
            var self = this;
            var idProperty;
            var items = [];
            var rows = [];
            var idxById = {};
            var rowsById = null;
            var filter = null;
            var updated = null;
            var suspend = 0;
            var sortAsc = true;
            var fastSortField;
            var sortComparer;
            var refreshHints = {};
            var prevRefreshHints = {};
            var filterArgs;
            var filteredItems = [];
            var compiledFilter;
            var compiledFilterWithCaching;
            var filterCache = [];
            var groupingInfoDefaults = {
                getter: null,
                formatter: null,
                comparer: function (a, b) {
                    return (a.value === b.value ? 0 :
                        (a.value > b.value ? 1 : -1));
                },
                predefinedValues: [],
                aggregators: [],
                aggregateEmpty: false,
                aggregateCollapsed: false,
                aggregateChildGroups: false,
                collapsed: false,
                displayTotalsRow: true,
                lazyTotalsCalculation: false
            };
            var summaryOptions = {};
            var groupingInfos = [];
            var groups = [];
            var toggledGroupsByLevel = [];
            var groupingDelimiter = ':|:';
            var page = 1;
            var totalRows = 0;
            var onDataChanged = new Slick.Event();
            var onDataLoading = new Slick.Event();
            var onDataLoaded = new Slick.Event();
            var onGroupExpanded = new Slick.Event();
            var onGroupCollapsed = new Slick.Event();
            var onPagingInfoChanged = new Slick.Event();
            var onRowCountChanged = new Slick.Event();
            var onRowsChanged = new Slick.Event();
            var onRowsOrCountChanged = new Slick.Event();
            var loading = false;
            var errorMessage = null;
            var populateLocks = 0;
            var populateCalls = 0;
            var contentType;
            var dataType;
            var totalCount = null;
            var localSort = (_a = options === null || options === void 0 ? void 0 : options.localSort) !== null && _a !== void 0 ? _a : false;
            var intf;
            function beginUpdate() {
                suspend++;
            }
            function endUpdate() {
                suspend--;
                if (suspend <= 0)
                    refresh();
            }
            function setRefreshHints(hints) {
                refreshHints = hints;
            }
            function setFilterArgs(args) {
                filterArgs = args;
            }
            function updateIdxById(startingIndex) {
                startingIndex = startingIndex || 0;
                var id;
                for (var i = startingIndex, l = items.length; i < l; i++) {
                    id = items[i][idProperty];
                    if (id === undefined) {
                        var msg = "Each data element must implement a unique '" +
                            idProperty + "' property. Object at index '" + i + "' " +
                            "has no identity value: ";
                        msg += $.toJSON(items[i]);
                        throw msg;
                    }
                    idxById[id] = i;
                }
            }
            function ensureIdUniqueness() {
                var id;
                for (var i = 0, l = items.length; i < l; i++) {
                    id = items[i][idProperty];
                    if (id === undefined || idxById[id] !== i) {
                        var msg = "Each data element must implement a unique '" +
                            idProperty + "' property. Object at index '" + i + "' ";
                        if (id == undefined)
                            msg += "has no identity value: ";
                        else
                            msg += "has repeated identity value '" + id + "': ";
                        msg += $.toJSON(items[i]);
                        throw msg;
                    }
                }
            }
            function getItems() {
                return items;
            }
            function getIdPropertyName() {
                return idProperty;
            }
            function setItems(data, newIdProperty) {
                if (newIdProperty != null && typeof newIdProperty == "string")
                    idProperty = newIdProperty;
                items = filteredItems = data;
                if (localSort) {
                    items.sort(getSortComparer());
                }
                idxById = {};
                rowsById = null;
                summaryOptions.totals = {};
                updateIdxById();
                ensureIdUniqueness();
                if (suspend) {
                    recalc(items);
                }
                else {
                    refresh();
                }
                onDataChanged.notify({ dataView: self }, null, self);
            }
            function setPagingOptions(args) {
                var anyChange = false;
                if (args.rowsPerPage != undefined &&
                    intf.rowsPerPage != args.rowsPerPage) {
                    intf.rowsPerPage = args.rowsPerPage;
                    anyChange = true;
                }
                if (args.page != undefined) {
                    var newPage;
                    if (!intf.rowsPerPage)
                        newPage = 1;
                    else if (totalCount == null)
                        newPage = args.page;
                    else
                        newPage = Math.min(args.page, Math.ceil(totalCount / intf.rowsPerPage) + 1);
                    if (newPage < 1)
                        newPage = 1;
                    if (newPage != page) {
                        intf.seekToPage = newPage;
                        anyChange = true;
                    }
                }
                if (anyChange)
                    populate();
            }
            function getPagingInfo() {
                return {
                    rowsPerPage: intf.rowsPerPage,
                    page: page,
                    totalCount: totalCount,
                    loading: loading,
                    error: errorMessage,
                    dataView: intf
                };
            }
            function getSortComparer() {
                if (sortComparer != null)
                    return sortComparer;
                var cols = [];
                var asc = [];
                var sorts = intf.sortBy || [];
                for (var _i = 0, sorts_1 = sorts; _i < sorts_1.length; _i++) {
                    var s = sorts_1[_i];
                    if (s == null)
                        continue;
                    if (s.length > 5 && s.toLowerCase().substr(s.length - 5).toLowerCase() == ' desc') {
                        asc.push(false);
                        cols.push(s.substr(0, s.length - 5));
                    }
                    else {
                        asc.push(true);
                        cols.push(s);
                    }
                }
                return function (a, b) {
                    for (var i = 0, l = cols.length; i < l; i++) {
                        var field = cols[i];
                        var sign = asc[i] ? 1 : -1;
                        var value1 = a[field], value2 = b[field];
                        var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                        if (result != 0) {
                            return result;
                        }
                    }
                    return 0;
                };
            }
            function sort(comparer, ascending) {
                sortAsc = ascending;
                fastSortField = null;
                if (ascending === false) {
                    items.reverse();
                }
                sortComparer = comparer;
                items.sort(getSortComparer());
                if (ascending === false) {
                    items.reverse();
                }
                idxById = {};
                updateIdxById();
                refresh();
            }
            function getLocalSort() {
                return localSort;
            }
            function setLocalSort(value) {
                if (localSort != value) {
                    localSort = value;
                    sort();
                }
            }
            /***
             * Provides a workaround for the extremely slow sorting in IE.
             * Does a [lexicographic] sort on a give column by temporarily overriding Object.prototype.toString
             * to return the value of that field and then doing a native Array.sort().
             */
            function fastSort(field, ascending) {
                sortAsc = ascending;
                fastSortField = field;
                sortComparer = null;
                var oldToString = Object.prototype.toString;
                Object.prototype.toString = (typeof field === "function") ? field : function () {
                    return this[field];
                };
                // an extra reversal for descending sort keeps the sort stable
                // (assuming a stable native sort implementation, which isn't true in some cases)
                if (ascending === false) {
                    items.reverse();
                }
                items.sort();
                Object.prototype.toString = oldToString;
                if (ascending === false) {
                    items.reverse();
                }
                idxById = {};
                updateIdxById();
                refresh();
            }
            function reSort() {
                if (fastSortField)
                    fastSort(fastSortField, sortAsc);
                else
                    sort(sortComparer, sortAsc);
            }
            function getFilteredItems() {
                return filteredItems;
            }
            function getFilter() {
                return filter;
            }
            function setFilter(filterFn) {
                filter = filterFn;
                if (options.inlineFilters) {
                    compiledFilter = compileFilter();
                    compiledFilterWithCaching = compileFilterWithCaching();
                }
                refresh();
            }
            function getGrouping() {
                return groupingInfos;
            }
            function setSummaryOptions(summary) {
                summary = summary || {};
                summaryOptions.aggregators = summary.aggregators || [];
                summaryOptions.compiledAccumulators = [];
                summaryOptions.totals = {};
                var idx = summaryOptions.aggregators.length;
                while (idx--) {
                    summaryOptions.compiledAccumulators[idx] = compileAccumulatorLoop(summaryOptions.aggregators[idx]);
                }
                setGrouping(groupingInfos || []);
            }
            function getGrandTotals() {
                summaryOptions.totals = summaryOptions.totals || {};
                if (!summaryOptions.totals.initialized) {
                    summaryOptions.aggregators = summaryOptions.aggregators || [];
                    summaryOptions.compiledAccumulators = summaryOptions.compiledAccumulators || [];
                    var agg, idx = summaryOptions.aggregators.length;
                    while (idx--) {
                        agg = summaryOptions.aggregators[idx];
                        agg.init();
                        summaryOptions.compiledAccumulators[idx].call(agg, items);
                        agg.storeResult(summaryOptions.totals);
                    }
                    summaryOptions.totals.initialized = true;
                }
                return summaryOptions.totals;
            }
            function setGrouping(groupingInfo) {
                if (!options.groupItemMetadataProvider) {
                    options.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
                }
                groups = [];
                toggledGroupsByLevel = [];
                groupingInfo = groupingInfo || [];
                groupingInfos = (groupingInfo instanceof Array) ? groupingInfo : [groupingInfo];
                for (var i = 0; i < groupingInfos.length; i++) {
                    var gi = groupingInfos[i] = extend(extend({}, groupingInfoDefaults), deepClone(groupingInfos[i]));
                    gi.aggregators = gi.aggregators || summaryOptions.aggregators || [];
                    gi.getterIsAFn = typeof gi.getter === "function";
                    // pre-compile accumulator loops
                    gi.compiledAccumulators = [];
                    var idx = gi.aggregators.length;
                    while (idx--) {
                        gi.compiledAccumulators[idx] = compileAccumulatorLoop(gi.aggregators[idx]);
                    }
                    toggledGroupsByLevel[i] = {};
                }
                refresh();
            }
            function getItemByIdx(i) {
                return items[i];
            }
            function getIdxById(id) {
                return idxById[id];
            }
            function ensureRowsByIdCache() {
                if (!rowsById) {
                    rowsById = {};
                    for (var i = 0, l = rows.length; i < l; i++) {
                        rowsById[rows[i][idProperty]] = i;
                    }
                }
            }
            function getRowByItem(item) {
                ensureRowsByIdCache();
                return rowsById[item[idProperty]];
            }
            function getRowById(id) {
                ensureRowsByIdCache();
                return rowsById[id];
            }
            function getItemById(id) {
                return items[idxById[id]];
            }
            function mapItemsToRows(itemArray) {
                var rows = [];
                ensureRowsByIdCache();
                for (var i = 0, l = itemArray.length; i < l; i++) {
                    var row = rowsById[itemArray[i][idProperty]];
                    if (row != null) {
                        rows[rows.length] = row;
                    }
                }
                return rows;
            }
            function mapIdsToRows(idArray) {
                var rows = [];
                ensureRowsByIdCache();
                for (var i = 0, l = idArray.length; i < l; i++) {
                    var row = rowsById[idArray[i]];
                    if (row != null) {
                        rows[rows.length] = row;
                    }
                }
                return rows;
            }
            function mapRowsToIds(rowArray) {
                var ids = [];
                for (var i = 0, l = rowArray.length; i < l; i++) {
                    if (rowArray[i] < rows.length) {
                        ids[ids.length] = rows[rowArray[i]][idProperty];
                    }
                }
                return ids;
            }
            function updateItem(id, item) {
                if (idxById[id] === undefined) {
                    throw new Error("Invalid id");
                }
                if (id !== item[idProperty]) {
                    // make sure the new id is unique:
                    var newId = item[idProperty];
                    if (newId == null) {
                        throw new Error("Cannot update item to associate with a null id");
                    }
                    if (idxById[newId] !== undefined) {
                        throw new Error("Cannot update item to associate with a non-unique id");
                    }
                    idxById[newId] = idxById[id];
                    delete idxById[id];
                    if (updated && updated[id]) {
                        delete updated[id];
                    }
                    id = newId;
                }
                items[idxById[id]] = item;
                if (!updated) {
                    updated = {};
                }
                updated[id] = true;
                refresh();
            }
            function insertItem(insertBefore, item) {
                items.splice(insertBefore, 0, item);
                updateIdxById(insertBefore);
                refresh();
            }
            function addItem(item) {
                items.push(item);
                updateIdxById(items.length - 1);
                refresh();
            }
            function deleteItem(id) {
                var idx = idxById[id];
                if (idx === undefined) {
                    throw "Invalid id";
                }
                delete idxById[id];
                items.splice(idx, 1);
                updateIdxById(idx);
                refresh();
            }
            function sortedAddItem(item) {
                insertItem(sortedIndex(item), item);
            }
            function sortedUpdateItem(id, item) {
                if (idxById[id] === undefined || id !== item[idProperty]) {
                    throw new Error("Invalid or non-matching id " + idxById[id]);
                }
                var comparer = getSortComparer();
                var oldItem = getItemById(id);
                if (comparer(oldItem, item) !== 0) {
                    // item affects sorting -> must use sorted add
                    deleteItem(id);
                    sortedAddItem(item);
                }
                else { // update does not affect sorting -> regular update works fine
                    updateItem(id, item);
                }
            }
            function sortedIndex(searchItem) {
                var low = 0, high = items.length;
                var comparer = getSortComparer();
                while (low < high) {
                    var mid = low + high >>> 1;
                    if (comparer(items[mid], searchItem) === -1) {
                        low = mid + 1;
                    }
                    else {
                        high = mid;
                    }
                }
                return low;
            }
            function getRows() {
                return rows;
            }
            function getLength() {
                return rows.length;
            }
            function getItem(i) {
                var item = rows[i];
                // if this is a group row, make sure totals are calculated and update the title
                if (item && item.__group && item.totals && !item.totals.initialized) {
                    var gi = groupingInfos[item.level];
                    if (!gi.displayTotalsRow) {
                        calculateTotals(item.totals);
                        item.title = gi.formatter ? gi.formatter(item) : item.value;
                    }
                }
                // if this is a totals row, make sure it's calculated
                else if (item && item.__groupTotals && !item.initialized) {
                    calculateTotals(item);
                }
                return item;
            }
            function getItemMetadata(i) {
                var item = rows[i];
                if (item === undefined) {
                    return null;
                }
                // overrides for grouping rows
                if (item.__group) {
                    return options.groupItemMetadataProvider.getGroupRowMetadata(item);
                }
                // overrides for totals rows
                if (item.__groupTotals) {
                    return options.groupItemMetadataProvider.getTotalsRowMetadata(item);
                }
                return (options.getItemMetadata && options.getItemMetadata(item, i)) || null;
            }
            function expandCollapseAllGroups(level, collapse) {
                if (level == null) {
                    for (var i = 0; i < groupingInfos.length; i++) {
                        toggledGroupsByLevel[i] = {};
                        groupingInfos[i].collapsed = collapse;
                        if (collapse === true) {
                            onGroupCollapsed.notify({ level: i, groupingKey: null });
                        }
                        else {
                            onGroupExpanded.notify({ level: i, groupingKey: null });
                        }
                    }
                }
                else {
                    toggledGroupsByLevel[level] = {};
                    groupingInfos[level].collapsed = collapse;
                    if (collapse === true) {
                        onGroupCollapsed.notify({ level: level, groupingKey: null });
                    }
                    else {
                        onGroupExpanded.notify({ level: level, groupingKey: null });
                    }
                }
                refresh();
            }
            /**
             * @param level {Number} Optional level to collapse.  If not specified, applies to all levels.
             */
            function collapseAllGroups(level) {
                expandCollapseAllGroups(level, true);
            }
            /**
             * @param level {Number} Optional level to expand.  If not specified, applies to all levels.
             */
            function expandAllGroups(level) {
                expandCollapseAllGroups(level, false);
            }
            function resolveLevelAndGroupingKey(args) {
                var arg0 = args[0];
                if (args.length === 1 && arg0.indexOf(groupingDelimiter) !== -1) {
                    return { level: arg0.split(groupingDelimiter).length - 1, groupingKey: arg0 };
                }
                else {
                    return { level: args.length - 1, groupingKey: args.join(groupingDelimiter) };
                }
            }
            function expandCollapseGroup(args, collapse) {
                var opts = resolveLevelAndGroupingKey(args);
                toggledGroupsByLevel[opts.level][opts.groupingKey] = groupingInfos[opts.level].collapsed ^ collapse;
                if (collapse)
                    onGroupCollapsed.notify({ level: opts.level, groupingKey: opts.groupingKey });
                else
                    onGroupExpanded.notify({ level: opts.level, groupingKey: opts.groupingKey });
                refresh();
            }
            /**
             * @param varArgs Either a Slick.Group's "groupingKey" property, or a
             *     variable argument list of grouping values denoting a unique path to the row.  For
             *     example, calling collapseGroup('high', '10%') will collapse the '10%' subgroup of
             *     the 'high' group.
             */
            function collapseGroup(varArgs) {
                var args = Array.prototype.slice.call(arguments);
                expandCollapseGroup(args, true);
            }
            /**
             * @param varArgs Either a Slick.Group's "groupingKey" property, or a
             *     variable argument list of grouping values denoting a unique path to the row.  For
             *     example, calling expandGroup('high', '10%') will expand the '10%' subgroup of
             *     the 'high' group.
             */
            function expandGroup(varArgs) {
                var args = Array.prototype.slice.call(arguments);
                expandCollapseGroup(args, false);
            }
            function getGroups() {
                return groups;
            }
            function getOrCreateGroup(groupsByVal, val, level, parentGroup, groups) {
                var group = groupsByVal[val];
                if (!group) {
                    group = new Slick.Group();
                    group.value = val;
                    group.level = level;
                    group.groupingKey = (parentGroup ? parentGroup.groupingKey + groupingDelimiter : '') + val;
                    groups[groups.length] = group;
                    groupsByVal[val] = group;
                }
                return group;
            }
            function extractGroups(rows, parentGroup) {
                var group;
                var val;
                var groups = [];
                var groupsByVal = {};
                var r;
                var level = parentGroup ? parentGroup.level + 1 : 0;
                var gi = groupingInfos[level];
                for (var i = 0, l = gi.predefinedValues.length; i < l; i++) {
                    val = gi.predefinedValues[i];
                    group = getOrCreateGroup(groupsByVal, val, level, parentGroup, groups);
                }
                for (var i = 0, l = rows.length; i < l; i++) {
                    r = rows[i];
                    val = gi.getterIsAFn ? gi.getter(r) : r[gi.getter];
                    group = getOrCreateGroup(groupsByVal, val, level, parentGroup, groups);
                    group.rows[group.count++] = r;
                }
                if (level < groupingInfos.length - 1) {
                    for (var i = 0; i < groups.length; i++) {
                        group = groups[i];
                        group.groups = extractGroups(group.rows, group);
                    }
                }
                if (groups.length) {
                    addTotals(groups, level);
                }
                groups.sort(groupingInfos[level].comparer);
                return groups;
            }
            function calculateTotals(totals) {
                var group = totals.group;
                var gi = groupingInfos[group.level];
                var isLeafLevel = (group.level == groupingInfos.length);
                var agg, idx = gi.aggregators.length;
                if (!isLeafLevel && gi.aggregateChildGroups) {
                    // make sure all the subgroups are calculated
                    var i = group.groups.length;
                    while (i--) {
                        if (!group.groups[i].totals.initialized) {
                            calculateTotals(group.groups[i].totals);
                        }
                    }
                }
                while (idx--) {
                    agg = gi.aggregators[idx];
                    agg.init();
                    if (!isLeafLevel && gi.aggregateChildGroups) {
                        gi.compiledAccumulators[idx].call(agg, group.groups);
                    }
                    else {
                        gi.compiledAccumulators[idx].call(agg, group.rows);
                    }
                    agg.storeResult(totals);
                }
                totals.initialized = true;
            }
            function addGroupTotals(group) {
                var gi = groupingInfos[group.level];
                var totals = new Slick.GroupTotals();
                totals.group = group;
                group.totals = totals;
                if (!gi.lazyTotalsCalculation) {
                    calculateTotals(totals);
                }
            }
            function addTotals(groups, level) {
                level = level || 0;
                var gi = groupingInfos[level];
                var groupCollapsed = gi.collapsed;
                var toggledGroups = toggledGroupsByLevel[level];
                var idx = groups.length, g;
                while (idx--) {
                    g = groups[idx];
                    if (g.collapsed && !gi.aggregateCollapsed) {
                        continue;
                    }
                    // Do a depth-first aggregation so that parent group aggregators can access subgroup totals.
                    if (g.groups) {
                        addTotals(g.groups, level + 1);
                    }
                    if (gi.aggregators.length && (gi.aggregateEmpty || g.rows.length || (g.groups && g.groups.length))) {
                        addGroupTotals(g);
                    }
                    g.collapsed = groupCollapsed ^ toggledGroups[g.groupingKey];
                    g.title = gi.formatter ? gi.formatter(g) : g.value;
                }
            }
            function flattenGroupedRows(groups, level) {
                level = level || 0;
                var gi = groupingInfos[level];
                var groupedRows = [], rows, gl = 0, g;
                for (var i = 0, l = groups.length; i < l; i++) {
                    g = groups[i];
                    groupedRows[gl++] = g;
                    if (!g.collapsed) {
                        rows = g.groups ? flattenGroupedRows(g.groups, level + 1) : g.rows;
                        for (var j = 0, jj = rows.length; j < jj; j++) {
                            groupedRows[gl++] = rows[j];
                        }
                    }
                    if (g.totals && gi.displayTotalsRow && (!g.collapsed || gi.aggregateCollapsed)) {
                        groupedRows[gl++] = g.totals;
                    }
                }
                return groupedRows;
            }
            function getFunctionInfo(fn) {
                var fnRegex = /^function[^(]*\(([^)]*)\)\s*{([\s\S]*)}$/;
                var matches = fn.toString().match(fnRegex);
                return {
                    params: matches[1].split(","),
                    body: matches[2]
                };
            }
            function compileAccumulatorLoop(aggregator) {
                var accumulatorInfo = getFunctionInfo(aggregator.accumulate);
                var fn = new Function("_items", "for (var " + accumulatorInfo.params[0] + ", _i=0, _il=_items.length; _i<_il; _i++) {" +
                    accumulatorInfo.params[0] + " = _items[_i]; " +
                    accumulatorInfo.body +
                    "}");
                return fn;
            }
            function compileFilter() {
                var filterInfo = getFunctionInfo(filter);
                var filterBody = filterInfo.body
                    .replace(/return false\s*([;}]|$)/gi, "{ continue _coreloop; }$1")
                    .replace(/return true\s*([;}]|$)/gi, "{ _retval[_idx++] = $item$; continue _coreloop; }$1")
                    .replace(/return ([^;}]+?)\s*([;}]|$)/gi, "{ if ($1) { _retval[_idx++] = $item$; }; continue _coreloop; }$2");
                // This preserves the function template code after JS compression,
                // so that replace() commands still work as expected.
                var tpl = [
                    //"function(_items, _args) { ",
                    "var _retval = [], _idx = 0; ",
                    "var $item$, $args$ = _args; ",
                    "_coreloop: ",
                    "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
                    "$item$ = _items[_i]; ",
                    "$filter$; ",
                    "} ",
                    "return _retval; "
                    //"}"
                ].join("");
                tpl = tpl.replace(/\$filter\$/gi, filterBody);
                tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
                tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);
                var fn = new Function("_items,_args", tpl);
                fn.displayName = fn.name = "compiledFilter";
                return fn;
            }
            function compileFilterWithCaching() {
                var filterInfo = getFunctionInfo(filter);
                var filterBody = filterInfo.body
                    .replace(/return false\s*([;}]|$)/gi, "{ continue _coreloop; }$1")
                    .replace(/return true\s*([;}]|$)/gi, "{ _cache[_i] = true;_retval[_idx++] = $item$; continue _coreloop; }$1")
                    .replace(/return ([^;}]+?)\s*([;}]|$)/gi, "{ if ((_cache[_i] = $1)) { _retval[_idx++] = $item$; }; continue _coreloop; }$2");
                // This preserves the function template code after JS compression,
                // so that replace() commands still work as expected.
                var tpl = [
                    //"function(_items, _args, _cache) { ",
                    "var _retval = [], _idx = 0; ",
                    "var $item$, $args$ = _args; ",
                    "_coreloop: ",
                    "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
                    "$item$ = _items[_i]; ",
                    "if (_cache[_i]) { ",
                    "_retval[_idx++] = $item$; ",
                    "continue _coreloop; ",
                    "} ",
                    "$filter$; ",
                    "} ",
                    "return _retval; "
                    //"}"
                ].join("");
                tpl = tpl.replace(/\$filter\$/gi, filterBody);
                tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
                tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);
                var fn = new Function("_items,_args,_cache", tpl);
                var fnName = "compiledFilterWithCaching";
                fn.displayName = fnName;
                fn.name = setFunctionName(fn, fnName);
                return fn;
            }
            /**
             * In ES5 we could set the function name on the fly but in ES6 this is forbidden and we need to set it through differently
             * We can use Object.defineProperty and set it the property to writable, see MDN for reference
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
             * @param {string} fn
             * @param {string} fnName
             */
            function setFunctionName(fn, fnName) {
                try {
                    Object.defineProperty(fn, 'name', {
                        writable: true,
                        value: fnName
                    });
                }
                catch (err) {
                    fn.name = fnName;
                }
            }
            function uncompiledFilter(items, args) {
                var retval = [], idx = 0;
                for (var i = 0, ii = items.length; i < ii; i++) {
                    if (filter(items[i], args)) {
                        retval[idx++] = items[i];
                    }
                }
                return retval;
            }
            function uncompiledFilterWithCaching(items, args, cache) {
                var retval = [], idx = 0, item;
                for (var i = 0, ii = items.length; i < ii; i++) {
                    item = items[i];
                    if (cache[i]) {
                        retval[idx++] = item;
                    }
                    else if (filter(item, args)) {
                        retval[idx++] = item;
                        cache[i] = true;
                    }
                }
                return retval;
            }
            function getFilteredAndPagedItems(items) {
                if (filter) {
                    var batchFilter = options.inlineFilters ? compiledFilter : uncompiledFilter;
                    var batchFilterWithCaching = options.inlineFilters ? compiledFilterWithCaching : uncompiledFilterWithCaching;
                    if (refreshHints.isFilterNarrowing) {
                        filteredItems = batchFilter(filteredItems, filterArgs);
                    }
                    else if (refreshHints.isFilterExpanding) {
                        filteredItems = batchFilterWithCaching(items, filterArgs, filterCache);
                    }
                    else if (!refreshHints.isFilterUnchanged) {
                        filteredItems = batchFilter(items, filterArgs);
                    }
                }
                else {
                    // special case:  if not filtering and not paging, the resulting
                    // rows collection needs to be a copy so that changes due to sort
                    // can be caught
                    filteredItems = items.concat();
                }
                // get the current page
                return { totalRows: filteredItems.length, rows: filteredItems };
            }
            function getRowDiffs(rows, newRows) {
                var item, r, eitherIsNonData, diff = [];
                var from = 0, to = newRows.length;
                if (refreshHints && refreshHints.ignoreDiffsBefore) {
                    from = Math.max(0, Math.min(newRows.length, refreshHints.ignoreDiffsBefore));
                }
                if (refreshHints && refreshHints.ignoreDiffsAfter) {
                    to = Math.min(newRows.length, Math.max(0, refreshHints.ignoreDiffsAfter));
                }
                for (var i = from, rl = rows.length; i < to; i++) {
                    if (i >= rl) {
                        diff[diff.length] = i;
                    }
                    else {
                        item = newRows[i];
                        r = rows[i];
                        if ((groupingInfos.length && (eitherIsNonData = (item.__nonDataRow) || (r.__nonDataRow)) &&
                            item.__group !== r.__group ||
                            item.__group && !item.equals(r))
                            || (eitherIsNonData &&
                                // no good way to compare totals since they are arbitrary DTOs
                                // deep object comparison is pretty expensive
                                // always considering them 'dirty' seems easier for the time being
                                (item.__groupTotals || r.__groupTotals))
                            || item[idProperty] != r[idProperty]
                            || (updated && updated[item[idProperty]])) {
                            diff[diff.length] = i;
                        }
                    }
                }
                return diff;
            }
            function recalc(_items) {
                rowsById = null;
                if (refreshHints.isFilterNarrowing != prevRefreshHints.isFilterNarrowing ||
                    refreshHints.isFilterExpanding != prevRefreshHints.isFilterExpanding) {
                    filterCache = [];
                }
                var filteredItems = getFilteredAndPagedItems(_items);
                totalRows = filteredItems.totalRows;
                var newRows = filteredItems.rows;
                summaryOptions.totals = {};
                groups = [];
                if (groupingInfos.length) {
                    groups = extractGroups(newRows);
                    if (groups.length) {
                        newRows = flattenGroupedRows(groups);
                    }
                }
                var diff = getRowDiffs(rows, newRows);
                rows = newRows;
                return diff;
            }
            function refresh() {
                if (suspend) {
                    return;
                }
                var countBefore = rows.length;
                var totalRowsBefore = totalRows;
                var diff = recalc(items); // pass as direct refs to avoid closure perf hit
                updated = null;
                prevRefreshHints = refreshHints;
                refreshHints = {};
                if (totalRowsBefore !== totalRows) {
                    onPagingInfoChanged.notify(getPagingInfo(), null, self);
                }
                if (countBefore !== rows.length) {
                    onRowCountChanged.notify({ previous: countBefore, current: rows.length, dataView: self }, null, self);
                }
                if (diff.length > 0) {
                    onRowsChanged.notify({ rows: diff, dataView: self }, null, self);
                }
                if (countBefore !== rows.length || diff.length > 0) {
                    onRowsOrCountChanged.notify({
                        rowsDiff: diff, previousRowCount: countBefore, currentRowCount: rows.length,
                        rowCountChanged: countBefore !== rows.length, rowsChanged: diff.length > 0, dataView: self
                    }, null, self);
                }
            }
            /***
             * Wires the grid and the DataView together to keep row selection tied to item ids.
             * This is useful since, without it, the grid only knows about rows, so if the items
             * move around, the same rows stay selected instead of the selection moving along
             * with the items.
             *
             * NOTE:  This doesn't work with cell selection model.
             *
             * @param grid {Slick.Grid} The grid to sync selection with.
             * @param preserveHidden {Boolean} Whether to keep selected items that go out of the
             *     view due to them getting filtered out.
             * @param preserveHiddenOnSelectionChange {Boolean} Whether to keep selected items
             *     that are currently out of the view (see preserveHidden) as selected when selection
             *     changes.
             * @return {Event} An event that notifies when an internal list of selected row ids
             *     changes.  This is useful since, in combination with the above two options, it allows
             *     access to the full list selected row ids, and not just the ones visible to the grid.
             * @method syncGridSelection
             */
            function syncGridSelection(grid, preserveHidden, preserveHiddenOnSelectionChange) {
                var self = this;
                var inHandler;
                var selectedRowIds = self.mapRowsToIds(grid.getSelectedRows());
                var onSelectedRowIdsChanged = new Slick.Event();
                function setSelectedRowIds(rowIds) {
                    if (selectedRowIds.join(",") == rowIds.join(",")) {
                        return;
                    }
                    selectedRowIds = rowIds;
                    onSelectedRowIdsChanged.notify({
                        "grid": grid,
                        "ids": selectedRowIds,
                        "dataView": self
                    }, new Slick.EventData(), self);
                }
                function update() {
                    if (selectedRowIds.length > 0) {
                        inHandler = true;
                        var selectedRows = self.mapIdsToRows(selectedRowIds);
                        if (!preserveHidden) {
                            setSelectedRowIds(self.mapRowsToIds(selectedRows));
                        }
                        grid.setSelectedRows(selectedRows);
                        inHandler = false;
                    }
                }
                grid.onSelectedRowsChanged.subscribe(function (e, args) {
                    if (inHandler) {
                        return;
                    }
                    var newSelectedRowIds = self.mapRowsToIds(grid.getSelectedRows());
                    if (!preserveHiddenOnSelectionChange || !grid.getOptions().multiSelect) {
                        setSelectedRowIds(newSelectedRowIds);
                    }
                    else {
                        // keep the ones that are hidden
                        var existing = $.grep(selectedRowIds, function (id) { return self.getRowById(id) === undefined; });
                        // add the newly selected ones
                        setSelectedRowIds(existing.concat(newSelectedRowIds));
                    }
                });
                this.onRowsChanged.subscribe(update);
                this.onRowCountChanged.subscribe(update);
                return onSelectedRowIdsChanged;
            }
            function syncGridCellCssStyles(grid, key) {
                var hashById;
                var inHandler;
                // since this method can be called after the cell styles have been set,
                // get the existing ones right away
                storeCellCssStyles(grid.getCellCssStyles(key));
                function storeCellCssStyles(hash) {
                    hashById = {};
                    for (var row in hash) {
                        var id = rows[row][idProperty];
                        hashById[id] = hash[row];
                    }
                }
                function update() {
                    if (hashById) {
                        inHandler = true;
                        ensureRowsByIdCache();
                        var newHash = {};
                        for (var id in hashById) {
                            var row = rowsById[id];
                            if (row != undefined) {
                                newHash[row] = hashById[id];
                            }
                        }
                        grid.setCellCssStyles(key, newHash);
                        inHandler = false;
                    }
                }
                var subFunc = function (e, args) {
                    if (inHandler) {
                        return;
                    }
                    if (key != args.key) {
                        return;
                    }
                    if (args.hash) {
                        storeCellCssStyles(args.hash);
                    }
                    else {
                        grid.onCellCssStylesChanged.unsubscribe(subFunc);
                        onRowsOrCountChanged.unsubscribe(update);
                    }
                };
                grid.onCellCssStylesChanged.subscribe(subFunc);
                onRowsOrCountChanged.subscribe(update);
            }
            function addData(data) {
                if (intf.onProcessData && data)
                    data = intf.onProcessData(data, intf) || data;
                errorMessage = null;
                loading && loading.abort();
                loading = false;
                if (!data) {
                    errorMessage = intf.errormsg;
                    onPagingInfoChanged.notify(getPagingInfo());
                    return false;
                }
                data.TotalCount = data.TotalCount || 0;
                data.Entities = data.Entities || [];
                if (!data.Skip || (!intf.rowsPerPage && !data.Take))
                    data.Page = 1;
                else
                    data.Page = Math.ceil(data.Skip / (data.Take || intf.rowsPerPage)) + 1;
                page = data.Page;
                totalCount = data.TotalCount;
                setItems(data.Entities);
                onPagingInfoChanged.notify(getPagingInfo());
            }
            function populate() {
                if (populateLocks > 0) {
                    populateCalls++;
                    return;
                }
                populateCalls = 0;
                loading && loading.abort();
                if (intf.onSubmit) {
                    var gh = intf.onSubmit(intf);
                    if (gh === false)
                        return false;
                }
                onDataLoading.notify(this);
                if (!intf.url)
                    return false;
                // set loading event
                if (!intf.seekToPage)
                    intf.seekToPage = 1;
                var request = {};
                var skip = (intf.seekToPage - 1) * intf.rowsPerPage;
                if (skip)
                    request.Skip = skip;
                if (intf.rowsPerPage)
                    request.Take = intf.rowsPerPage;
                if (intf.sortBy && intf.sortBy.length) {
                    if (typeof intf.sortBy !== "string")
                        request.Sort = intf.sortBy;
                    else {
                        request.Sort = [intf.sortBy];
                    }
                }
                if (intf.params) {
                    request = extend(request, intf.params);
                }
                var dt = dataType;
                var ajaxOptions = {
                    cache: false,
                    type: intf.method,
                    contentType: contentType,
                    url: intf.url,
                    data: request,
                    dataType: dt,
                    success: function (response) {
                        loading = false;
                        if (response.Error)
                            notifyError(response.Error.Message || response.Error.Code);
                        else
                            addData(response);
                        onDataLoaded.notify(this);
                    },
                    error: function (xhr, status, ev) {
                        loading = false;
                        if ((xhr.getResponseHeader("content-type") || '').toLowerCase().indexOf("application/json") >= 0) {
                            var json = $.parseJSON(xhr.responseText);
                            if (json != null && json.Error != null) {
                                notifyError(json.Error.Message || json.Error.Code);
                                onPagingInfoChanged.notify(getPagingInfo());
                                onDataLoaded.notify(this);
                                return;
                            }
                        }
                        errorMessage = xhr.errormsg;
                        onPagingInfoChanged.notify(getPagingInfo());
                        onDataLoaded.notify(this);
                    },
                    complete: function () {
                        loading = false;
                    }
                };
                if (intf.onAjaxCall) {
                    var ah = intf.onAjaxCall(this, ajaxOptions);
                    if (ah === false) {
                        loading = false;
                        onPagingInfoChanged.notify(getPagingInfo());
                        return false;
                    }
                }
                ajaxOptions.data = $.toJSON(ajaxOptions.data);
                onPagingInfoChanged.notify(getPagingInfo());
                loading = $.ajax(ajaxOptions);
            }
            function populateLock() {
                if (populateLocks == 0)
                    populateCalls = 0;
                populateLocks++;
            }
            function populateUnlock() {
                if (populateLocks > 0) {
                    populateLocks--;
                    if (populateLocks == 0 && populateCalls > 0)
                        populate();
                }
            }
            idProperty = options.idField || 'id';
            contentType = options.contentType || "application/json";
            dataType = options.dataType || 'json';
            filter = options.filter || null;
            intf = {
                // methods
                beginUpdate: beginUpdate,
                endUpdate: endUpdate,
                setPagingOptions: setPagingOptions,
                getPagingInfo: getPagingInfo,
                getIdPropertyName: getIdPropertyName,
                getRows: getRows,
                getItems: getItems,
                setItems: setItems,
                getFilter: getFilter,
                getFilteredItems: getFilteredItems,
                setFilter: setFilter,
                sort: sort,
                fastSort: fastSort,
                reSort: reSort,
                getLocalSort: getLocalSort,
                setLocalSort: setLocalSort,
                setSummaryOptions: setSummaryOptions,
                getGrandTotals: getGrandTotals,
                setGrouping: setGrouping,
                getGrouping: getGrouping,
                collapseAllGroups: collapseAllGroups,
                expandAllGroups: expandAllGroups,
                collapseGroup: collapseGroup,
                expandGroup: expandGroup,
                getGroups: getGroups,
                getIdxById: getIdxById,
                getRowByItem: getRowByItem,
                getRowById: getRowById,
                getItemById: getItemById,
                getItemByIdx: getItemByIdx,
                mapItemsToRows: mapItemsToRows,
                mapRowsToIds: mapRowsToIds,
                mapIdsToRows: mapIdsToRows,
                setRefreshHints: setRefreshHints,
                setFilterArgs: setFilterArgs,
                refresh: refresh,
                updateItem: updateItem,
                insertItem: insertItem,
                addItem: addItem,
                deleteItem: deleteItem,
                sortedAddItem: sortedAddItem,
                sortedUpdateItem: sortedUpdateItem,
                syncGridSelection: syncGridSelection,
                syncGridCellCssStyles: syncGridCellCssStyles,
                getLength: getLength,
                getItem: getItem,
                getItemMetadata: getItemMetadata,
                onRowCountChanged: onRowCountChanged,
                onRowsChanged: onRowsChanged,
                onRowsOrCountChanged: onRowsOrCountChanged,
                onPagingInfoChanged: onPagingInfoChanged,
                onGroupExpanded: onGroupExpanded,
                onGroupCollapsed: onGroupCollapsed,
                addData: addData,
                populate: populate,
                populateLock: populateLock,
                populateUnlock: populateUnlock,
                onDataChanged: onDataChanged,
                onDataLoaded: onDataLoaded,
                onDataLoading: onDataLoading,
                params: options.params || {},
                onSubmit: options.onSubmit || null,
                url: options.url || null,
                rowsPerPage: options.rowsPerPage || 0,
                seekToPage: options.seekToPage || 1,
                onAjaxCall: options.onAjaxCall || null,
                onProcessData: options.onProcessData || null,
                method: options.method || "POST",
                errormsg: text("Controls.Pager.DefaultLoadError"),
                sortBy: typeof options.sortBy == "string" ? [options.sortBy] : (options.sortBy || []),
                idField: idProperty
            };
            if (options.url && options.autoLoad) {
                populate();
            }
            return intf;
        }
        return RemoteView;
    }());

    var DataGrid = /** @class */ (function (_super) {
        __extends(DataGrid, _super);
        function DataGrid(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.restoringSettings = 0;
            var self = _this;
            _this.element.addClass('s-DataGrid').html('');
            _this.element.addClass('s-' + getTypeName(getInstanceType(_this)));
            var layout = function () {
                self.layout();
                if (self.layoutTimer != null)
                    LayoutTimer.store(self.layoutTimer);
            };
            _this.element.addClass('require-layout').on('layout.' + _this.uniqueName, layout);
            if (_this.useLayoutTimer())
                _this.layoutTimer = LayoutTimer.onSizeChange(function () { return _this.element && _this.element[0]; }, debounce(layout, 50));
            _this.setTitle(_this.getInitialTitle());
            var buttons = _this.getButtons();
            if (buttons != null) {
                _this.createToolbar(buttons);
            }
            _this.slickContainer = _this.createSlickContainer();
            _this.view = _this.createView();
            _this.slickGrid = _this.createSlickGrid();
            if (_this.enableFiltering()) {
                _this.createFilterBar();
            }
            if (_this.usePager()) {
                _this.createPager();
            }
            _this.bindToSlickEvents();
            _this.bindToViewEvents();
            if (buttons != null) {
                _this.createToolbarExtensions();
            }
            _this.createQuickFilters();
            _this.updateDisabledState();
            _this.updateInterface();
            _this.initialSettings = _this.getCurrentSettings(null);
            _this.restoreSettings(null, null);
            window.setTimeout(function () { return _this.initialPopulate(); }, 0);
            return _this;
        }
        DataGrid_1 = DataGrid;
        DataGrid.prototype.useLayoutTimer = function () {
            return true;
        };
        DataGrid.prototype.attrs = function (attrType) {
            return getAttributes(getInstanceType(this), attrType, true);
        };
        DataGrid.prototype.layout = function () {
            if (!this.element || !this.element.is(':visible') || this.slickContainer == null)
                return;
            var responsiveHeight = this.element.hasClass('responsive-height');
            var madeAutoHeight = this.slickGrid != null && this.slickGrid.getOptions().autoHeight;
            var shouldAutoHeight = responsiveHeight && window.innerWidth < 768;
            if (shouldAutoHeight) {
                if (this.element[0] && this.element[0].style.height != "auto")
                    this.element[0].style.height = "auto";
                if (!madeAutoHeight) {
                    this.slickContainer.css('height', 'auto')
                        .children('.slick-pane').each(function (i, e) {
                        if (e.style.height != null && e.style.height != "auto")
                            e.style.height = "auto";
                    });
                    this.slickGrid.setOptions({ autoHeight: true });
                }
            }
            else {
                if (madeAutoHeight) {
                    this.slickContainer.children('.slick-viewport').css('height', 'auto');
                    this.slickGrid.setOptions({ autoHeight: false });
                }
                layoutFillHeight(this.slickContainer);
            }
            this.slickGrid.resizeCanvas();
        };
        DataGrid.prototype.getInitialTitle = function () {
            return null;
        };
        DataGrid.prototype.createToolbarExtensions = function () {
        };
        DataGrid.prototype.ensureQuickFilterBar = function () {
            if (this.quickFiltersDiv == null)
                this.createQuickFilters([]);
            return this.quickFiltersBar;
        };
        DataGrid.prototype.createQuickFilters = function (filters) {
            var _this = this;
            if (this.quickFiltersDiv == null && (filters != null ||
                ((filters = this.getQuickFilters()) && filters != null && filters.length))) {
                this.quickFiltersDiv = $('<div/>').addClass('quick-filters-bar');
                if (this.toolbar) {
                    $('<div/>').addClass('clear').appendTo(this.toolbar.element);
                    this.quickFiltersDiv.appendTo(this.toolbar.element);
                }
                else {
                    this.quickFiltersDiv.appendTo($('<div/>').addClass('s-Toolbar').insertBefore(this.slickContainer));
                }
                this.quickFiltersBar = new QuickFilterBar(this.quickFiltersDiv, {
                    filters: filters,
                    getTitle: function (filter) { return _this.determineText(function (pre) { return pre + filter.field; }); },
                    idPrefix: this.uniqueName + '_QuickFilter_'
                });
                this.quickFiltersBar.onChange = function (e) { return _this.quickFilterChange(e); };
            }
        };
        DataGrid.prototype.getQuickFilters = function () {
            return this.allColumns.filter(function (x) {
                return x.sourceItem &&
                    x.sourceItem.quickFilter === true &&
                    (x.sourceItem.readPermission == null ||
                        Authorization.hasPermission(x.sourceItem.readPermission));
            }).map(function (x) { return DataGrid_1.propertyItemToQuickFilter(x.sourceItem); })
                .filter(function (x) { return x != null; });
        };
        DataGrid.propertyItemToQuickFilter = function (item) {
            var _a, _b;
            var quick = {};
            var name = item.name;
            var title = tryGetText(item.title);
            if (title == null) {
                title = item.title;
                if (title == null) {
                    title = name;
                }
            }
            var filteringType = FilteringTypeRegistry.get(((_a = item.filteringType) !== null && _a !== void 0 ? _a : 'String'));
            if (filteringType === DateFiltering) {
                quick = QuickFilterBar.dateRange(name, title);
            }
            else if (filteringType === DateTimeFiltering) {
                quick = QuickFilterBar.dateTimeRange(name, title, (_b = item.editorParams) === null || _b === void 0 ? void 0 : _b.useUtc);
            }
            else if (filteringType === BooleanFiltering) {
                var q = item.quickFilterParams || {};
                var f = item.filteringParams || {};
                var trueText = q['trueText'];
                if (trueText == null) {
                    trueText = f['trueText'];
                }
                var falseText = q['falseText'];
                if (falseText == null) {
                    falseText = f['falseText'];
                }
                quick = QuickFilterBar.boolean(name, title, trueText, falseText);
            }
            else {
                var filtering = new filteringType();
                if (filtering && isInstanceOfType(filtering, IQuickFiltering)) {
                    ReflectionOptionsSetter.set(filtering, item.filteringParams);
                    filtering.set_field(item);
                    filtering.set_operator({ key: FilterOperators.EQ });
                    filtering.initQuickFilter(quick);
                    quick.options = extend(deepClone(quick.options), item.quickFilterParams);
                }
                else {
                    return null;
                }
            }
            if (!!item.quickFilterSeparator) {
                quick.separator = true;
            }
            quick.cssClass = item.quickFilterCssClass;
            return quick;
        };
        DataGrid.prototype.findQuickFilter = function (type, field) {
            if (this.quickFiltersBar != null)
                return this.quickFiltersBar.find(type, field);
            return $('#' + this.uniqueName + '_QuickFilter_' + field).getWidget(type);
        };
        DataGrid.prototype.tryFindQuickFilter = function (type, field) {
            if (this.quickFiltersBar != null)
                return this.quickFiltersBar.tryFind(type, field);
            var el = $('#' + this.uniqueName + '_QuickFilter_' + field);
            if (!el.length)
                return null;
            return el.tryGetWidget(type);
        };
        DataGrid.prototype.createIncludeDeletedButton = function () {
            if (!isEmptyOrNull(this.getIsActiveProperty()) ||
                !isEmptyOrNull(this.getIsDeletedProperty())) {
                GridUtils.addIncludeDeletedToggle(this.toolbar.element, this.view, null, false);
            }
        };
        DataGrid.prototype.getQuickSearchFields = function () {
            return null;
        };
        DataGrid.prototype.createQuickSearchInput = function () {
            var _this = this;
            GridUtils.addQuickSearchInput(this.toolbar.element, this.view, this.getQuickSearchFields(), function () { return _this.persistSettings(null); });
        };
        DataGrid.prototype.destroy = function () {
            if (this.layoutTimer) {
                this.layoutTimer = LayoutTimer.off(this.layoutTimer);
            }
            if (this.quickFiltersBar) {
                this.quickFiltersBar.destroy();
                this.quickFiltersBar = null;
            }
            if (this.toolbar) {
                this.toolbar.destroy();
                this.toolbar = null;
            }
            if (this.slickGrid) {
                this.slickGrid.onClick.clear();
                this.slickGrid.onSort.clear();
                this.slickGrid.onColumnsResized.clear();
                this.slickGrid.onColumnsReordered.clear();
                this.slickGrid.destroy();
                this.slickGrid = null;
            }
            if (this.view) {
                this.view.onDataChanged.clear();
                this.view.onSubmit = null;
                this.view.setFilter(null);
                this.view = null;
            }
            this.titleDiv = null;
            _super.prototype.destroy.call(this);
        };
        DataGrid.prototype.getItemCssClass = function (item, index) {
            var activeFieldName = this.getIsActiveProperty();
            var deletedFieldName = this.getIsDeletedProperty();
            if (isEmptyOrNull(activeFieldName) && isEmptyOrNull(deletedFieldName)) {
                return null;
            }
            if (activeFieldName) {
                var value = item[activeFieldName];
                if (value == null) {
                    return null;
                }
                if (typeof (value) === 'number') {
                    if (value < 0) {
                        return 'deleted';
                    }
                    else if (value === 0) {
                        return 'inactive';
                    }
                }
                else if (typeof (value) === 'boolean') {
                    if (value === false) {
                        return 'deleted';
                    }
                }
            }
            else {
                return item[deletedFieldName] ? 'deleted' : null;
            }
            return null;
        };
        DataGrid.prototype.getItemMetadata = function (item, index) {
            var itemClass = this.getItemCssClass(item, index);
            if (isEmptyOrNull(itemClass)) {
                return new Object();
            }
            return { cssClasses: itemClass };
        };
        DataGrid.prototype.postProcessColumns = function (columns) {
            SlickHelper.setDefaults(columns, this.getLocalTextDbPrefix());
            return columns;
        };
        DataGrid.prototype.initialPopulate = function () {
            var self = this;
            if (this.populateWhenVisible()) {
                LazyLoadHelper.executeEverytimeWhenShown(this.element, function () {
                    self.refreshIfNeeded();
                }, false);
                if (this.element.is(':visible') && this.view) {
                    this.view.populate();
                }
            }
            else if (this.view) {
                this.view.populate();
            }
        };
        DataGrid.prototype.canFilterColumn = function (column) {
            return (column.sourceItem != null &&
                column.sourceItem.notFilterable !== true &&
                (column.sourceItem.readPermission == null ||
                    Authorization.hasPermission(column.sourceItem.readPermission)));
        };
        DataGrid.prototype.initializeFilterBar = function () {
            var _this = this;
            this.filterBar.set_store(new FilterStore(this.allColumns
                .filter(function (c) { return _this.canFilterColumn(c); })
                .map(function (x) { return x.sourceItem; })));
            this.filterBar.get_store().add_changed(function (s, e) {
                if (_this.restoringSettings <= 0) {
                    _this.persistSettings(null);
                    _this.view && (_this.view.seekToPage = 1);
                    _this.refresh();
                }
            });
        };
        DataGrid.prototype.createSlickGrid = function () {
            var visibleColumns;
            this.allColumns = this.getColumns();
            visibleColumns = this.postProcessColumns(this.allColumns).filter(function (x) {
                return x.visible !== false;
            });
            var slickOptions = this.getSlickOptions();
            var grid = new Slick.Grid(this.slickContainer, this.view, visibleColumns, slickOptions);
            grid.registerPlugin(new Slick.AutoTooltips({
                enableForHeaderCells: true
            }));
            this.slickGrid = grid;
            this.rows = this.slickGrid;
            this.setInitialSortOrder();
            return grid;
        };
        DataGrid.prototype.setInitialSortOrder = function () {
            var sortBy = this.getDefaultSortBy();
            if (this.view) {
                this.view.sortBy = Array.prototype.slice.call(sortBy);
            }
            var mapped = sortBy.map(function (s) {
                var x = {};
                if (s && endsWith(s.toLowerCase(), ' desc')) {
                    x.columnId = trimEnd(s.substr(0, s.length - 5));
                    x.sortAsc = false;
                }
                else {
                    x.columnId = s;
                    x.sortAsc = true;
                }
                return x;
            });
            this.slickGrid.setSortColumns(mapped);
        };
        DataGrid.prototype.itemAt = function (row) {
            return this.slickGrid.getDataItem(row);
        };
        DataGrid.prototype.rowCount = function () {
            return this.slickGrid.getDataLength();
        };
        DataGrid.prototype.getItems = function () {
            return this.view.getItems();
        };
        DataGrid.prototype.setItems = function (value) {
            this.view.setItems(value, true);
        };
        DataGrid.prototype.bindToSlickEvents = function () {
            var _this = this;
            var self = this;
            this.slickGridOnSort = function (e, p) {
                self.view.populateLock();
                try {
                    var sortBy = [];
                    var col;
                    if (!!p.multiColumnSort) {
                        for (var i = 0; !!(i < p.sortCols.length); i++) {
                            var x = p.sortCols[i];
                            col = x.sortCol;
                            if (col == null) {
                                col = {};
                            }
                            sortBy.push(col.field + (!!x.sortAsc ? '' : ' DESC'));
                        }
                    }
                    else {
                        var col = p.sortCol;
                        if (col == null) {
                            col = {};
                        }
                        sortBy.push(col.field + (!!p.sortAsc ? '' : ' DESC'));
                    }
                    self.view.seekToPage = 1;
                    self.view.sortBy = sortBy;
                }
                finally {
                    self.view.populateUnlock();
                }
                if (self.view.getLocalSort && self.view.getLocalSort()) {
                    self.view.sort();
                }
                else {
                    self.view.populate();
                }
                _this.persistSettings(null);
            };
            this.slickGrid.onSort.subscribe(this.slickGridOnSort);
            this.slickGridOnClick = function (e1, p1) {
                self.onClick(e1, p1.row, p1.cell);
            };
            this.slickGrid.onClick.subscribe(this.slickGridOnClick);
            this.slickGrid.onColumnsReordered.subscribe(function (e2, p2) {
                return _this.persistSettings(null);
            });
            this.slickGrid.onColumnsResized.subscribe(function (e3, p3) {
                return _this.persistSettings(null);
            });
        };
        DataGrid.prototype.getAddButtonCaption = function () {
            var _a;
            return (_a = tryGetText('Controls.DataGrid.NewButton')) !== null && _a !== void 0 ? _a : 'New';
        };
        DataGrid.prototype.getButtons = function () {
            return [];
        };
        DataGrid.prototype.editItem = function (entityOrId) {
            throw new Error("Not Implemented!");
        };
        DataGrid.prototype.editItemOfType = function (itemType, entityOrId) {
            if (itemType === this.getItemType()) {
                this.editItem(entityOrId);
                return;
            }
            throw new Error("Not Implemented!");
        };
        DataGrid.prototype.onClick = function (e, row, cell) {
            if (e.isDefaultPrevented()) {
                return;
            }
            var target = $(e.target);
            if (!target.hasClass('s-EditLink')) {
                target = target.closest('a');
            }
            if (target.hasClass('s-EditLink')) {
                e.preventDefault();
                this.editItemOfType(SlickFormatting.getItemType(target), SlickFormatting.getItemId(target));
            }
        };
        DataGrid.prototype.viewDataChanged = function (e, rows) {
            this.markupReady();
            this.layout();
        };
        DataGrid.prototype.bindToViewEvents = function () {
            var self = this;
            this.view.onDataChanged.subscribe(function (e, d) {
                return self.viewDataChanged(e, d);
            });
            this.view.onSubmit = function (view) {
                return self.onViewSubmit();
            };
            this.view.setFilter(function (item, view1) {
                return self.onViewFilter(item);
            });
            this.view.onProcessData = function (response, view2) {
                return self.onViewProcessData(response);
            };
        };
        DataGrid.prototype.onViewProcessData = function (response) {
            return response;
        };
        DataGrid.prototype.onViewFilter = function (item) {
            return true;
        };
        DataGrid.prototype.getIncludeColumns = function (include) {
            var columns = this.slickGrid.getColumns();
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                if (column.field) {
                    include[column.field] = true;
                }
                if (column.referencedFields) {
                    for (var _a = 0, _b = column.referencedFields; _a < _b.length; _a++) {
                        var x = _b[_a];
                        include[x] = true;
                    }
                }
            }
        };
        DataGrid.prototype.setCriteriaParameter = function () {
            delete this.view.params['Criteria'];
            if (this.filterBar) {
                var criteria = this.filterBar.get_store().get_activeCriteria();
                if (!Criteria.isEmpty(criteria)) {
                    this.view.params.Criteria = criteria;
                }
            }
        };
        DataGrid.prototype.setEquality = function (field, value) {
            setEquality(this.view.params, field, value);
        };
        DataGrid.prototype.setIncludeColumnsParameter = function () {
            var include = {};
            this.getIncludeColumns(include);
            var array = [];
            for (var _i = 0, _a = Object.keys(include); _i < _a.length; _i++) {
                var key = _a[_i];
                array.push(key);
            }
            this.view.params.IncludeColumns = array;
        };
        DataGrid.prototype.onViewSubmit = function () {
            if (this.isDisabled || !this.getGridCanLoad()) {
                return false;
            }
            this.setCriteriaParameter();
            this.setIncludeColumnsParameter();
            this.invokeSubmitHandlers();
            return true;
        };
        DataGrid.prototype.markupReady = function () {
        };
        DataGrid.prototype.createSlickContainer = function () {
            return $('<div class="grid-container"></div>').appendTo(this.element);
        };
        DataGrid.prototype.createView = function () {
            var opt = this.getViewOptions();
            return new RemoteView(opt);
        };
        DataGrid.prototype.getDefaultSortBy = function () {
            if (this.slickGrid) {
                var columns = this.slickGrid.getColumns().filter(function (x) {
                    return x.sortOrder && x.sortOrder !== 0;
                });
                if (columns.length > 0) {
                    columns.sort(function (x1, y) {
                        return x1.sortOrder < y.sortOrder ? -1 : (x1.sortOrder > y.sortOrder ? 1 : 0);
                    });
                    var list = [];
                    for (var i = 0; i < columns.length; i++) {
                        var col = columns[i];
                        list.push(col.field + ((col.sortOrder < 0) ? ' DESC' : ''));
                    }
                    return list;
                }
            }
            return [];
        };
        DataGrid.prototype.usePager = function () {
            return false;
        };
        DataGrid.prototype.enableFiltering = function () {
            var attr = this.attrs(FilterableAttribute);
            return attr.length > 0 && attr[0].value;
        };
        DataGrid.prototype.populateWhenVisible = function () {
            return false;
        };
        DataGrid.prototype.createFilterBar = function () {
            var filterBarDiv = $('<div/>').appendTo(this.element);
            this.filterBar = new FilterDisplayBar(filterBarDiv);
            this.initializeFilterBar();
        };
        DataGrid.prototype.getPagerOptions = function () {
            return {
                view: this.view,
                rowsPerPage: 20,
                rowsPerPageOptions: [20, 100, 500, 2500]
            };
        };
        DataGrid.prototype.createPager = function () {
            var pagerDiv = $('<div></div>').appendTo(this.element);
            new SlickPager(pagerDiv, this.getPagerOptions());
        };
        DataGrid.prototype.getViewOptions = function () {
            var _this = this;
            var opt = {};
            opt.idField = this.getIdProperty();
            opt.sortBy = this.getDefaultSortBy();
            if (!this.usePager()) {
                opt.rowsPerPage = 0;
            }
            else if (this.element.hasClass('responsive-height')) {
                opt.rowsPerPage = (($(window.window).width() < 768) ? 20 : 100);
            }
            else {
                opt.rowsPerPage = 100;
            }
            opt.getItemMetadata = function (item, index) {
                return _this.getItemMetadata(item, index);
            };
            return opt;
        };
        DataGrid.prototype.createToolbar = function (buttons) {
            var toolbarDiv = $('<div class="grid-toolbar"></div>').appendTo(this.element);
            this.toolbar = new Toolbar(toolbarDiv, { buttons: buttons, hotkeyContext: this.element[0] });
        };
        DataGrid.prototype.getTitle = function () {
            if (!this.titleDiv) {
                return null;
            }
            return this.titleDiv.children('.title-text').text();
        };
        DataGrid.prototype.setTitle = function (value) {
            if (value !== this.getTitle()) {
                if (value == null) {
                    if (this.titleDiv) {
                        this.titleDiv.remove();
                        this.titleDiv = null;
                    }
                }
                else {
                    if (!this.titleDiv) {
                        this.titleDiv = $('<div class="grid-title"><div class="title-text"></div></div>')
                            .prependTo(this.element);
                    }
                    this.titleDiv.children('.title-text').text(value);
                }
                this.layout();
            }
        };
        DataGrid.prototype.getItemType = function () {
            return 'Item';
        };
        DataGrid.prototype.itemLink = function (itemType, idField, text, cssClass, encode) {
            if (encode === void 0) { encode = true; }
            if (itemType == null) {
                itemType = this.getItemType();
            }
            if (idField == null) {
                idField = this.getIdProperty();
            }
            return SlickFormatting.itemLink(itemType, idField, text, cssClass, encode);
        };
        DataGrid.prototype.getColumnsKey = function () {
            var attr = this.attrs(ColumnsKeyAttribute);
            if (attr && attr.length > 0) {
                return attr[0].value;
            }
            return null;
        };
        DataGrid.prototype.getPropertyItems = function () {
            var attr = this.attrs(ColumnsKeyAttribute);
            var columnsKey = this.getColumnsKey();
            if (!isEmptyOrNull(columnsKey)) {
                return getColumns(columnsKey);
            }
            return [];
        };
        DataGrid.prototype.getColumns = function () {
            var propertyItems = this.getPropertyItems();
            return this.propertyItemsToSlickColumns(propertyItems);
        };
        DataGrid.prototype.propertyItemsToSlickColumns = function (propertyItems) {
            var columns = PropertyItemSlickConverter.toSlickColumns(propertyItems);
            for (var i = 0; i < propertyItems.length; i++) {
                var item = propertyItems[i];
                var column = columns[i];
                if (item.editLink === true) {
                    var oldFormat = { $: column.format };
                    var css = { $: (item.editLinkCssClass) != null ? item.editLinkCssClass : null };
                    column.format = this.itemLink(item.editLinkItemType != null ? item.editLinkItemType : null, item.editLinkIdField != null ? item.editLinkIdField : null, function (ctx) {
                        if (this.oldFormat.$ != null) {
                            return this.oldFormat.$(ctx);
                        }
                        return htmlEncode(ctx.value);
                    }.bind({ oldFormat: oldFormat }), function (ctx1) {
                        var _a;
                        return ((_a = this.css.$) !== null && _a !== void 0 ? _a : '');
                    }.bind({ css: css }), false);
                    if (!isEmptyOrNull(item.editLinkIdField)) {
                        column.referencedFields = column.referencedFields || [];
                        column.referencedFields.push(item.editLinkIdField);
                    }
                }
            }
            return columns;
        };
        DataGrid.prototype.getSlickOptions = function () {
            var opt = {};
            opt.multiSelect = false;
            opt.multiColumnSort = true;
            opt.enableCellNavigation = false;
            opt.headerRowHeight = DataGrid_1.defaultHeaderHeight;
            opt.rowHeight = DataGrid_1.defaultRowHeight;
            return opt;
        };
        DataGrid.prototype.populateLock = function () {
            this.view.populateLock();
        };
        DataGrid.prototype.populateUnlock = function () {
            this.view.populateUnlock();
        };
        DataGrid.prototype.getGridCanLoad = function () {
            return true;
        };
        DataGrid.prototype.refresh = function () {
            if (!this.populateWhenVisible()) {
                this.internalRefresh();
                return;
            }
            if (this.slickContainer.is(':visible')) {
                this.slickContainer.data('needsRefresh', false);
                this.internalRefresh();
                return;
            }
            this.slickContainer.data('needsRefresh', true);
        };
        DataGrid.prototype.refreshIfNeeded = function () {
            if (!!this.slickContainer.data('needsRefresh')) {
                this.slickContainer.data('needsRefresh', false);
                this.internalRefresh();
            }
        };
        DataGrid.prototype.internalRefresh = function () {
            this.view.populate();
        };
        DataGrid.prototype.setIsDisabled = function (value) {
            if (this.isDisabled !== value) {
                this.isDisabled = value;
                if (this.isDisabled) {
                    this.view.setItems([], true);
                }
                this.updateDisabledState();
            }
        };
        Object.defineProperty(DataGrid.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        DataGrid.prototype.get_readOnly = function () {
            return !!this._readonly;
        };
        DataGrid.prototype.set_readOnly = function (value) {
            if (!!this._readonly != !!value) {
                this._readonly = !!value;
                this.updateInterface();
            }
        };
        DataGrid.prototype.updateInterface = function () {
            this.toolbar && this.toolbar.updateInterface();
        };
        DataGrid.prototype.getLocalTextDbPrefix = function () {
            var _a;
            if (this.localTextDbPrefix == null) {
                this.localTextDbPrefix = (_a = this.getLocalTextPrefix()) !== null && _a !== void 0 ? _a : '';
                if (this.localTextDbPrefix.length > 0 && !endsWith(this.localTextDbPrefix, '.')) {
                    this.localTextDbPrefix = 'Db.' + this.localTextDbPrefix + '.';
                }
            }
            return this.localTextDbPrefix;
        };
        DataGrid.prototype.getLocalTextPrefix = function () {
            var attr = this.attrs(LocalTextPrefixAttribute);
            if (attr.length >= 1)
                return attr[0].value;
            return '';
        };
        DataGrid.prototype.getIdProperty = function () {
            if (this.idProperty == null) {
                var attr = this.attrs(IdPropertyAttribute);
                if (attr.length === 1) {
                    this.idProperty = attr[0].value;
                }
                else {
                    this.idProperty = 'ID';
                }
            }
            return this.idProperty;
        };
        DataGrid.prototype.getIsDeletedProperty = function () {
            return null;
        };
        DataGrid.prototype.getIsActiveProperty = function () {
            if (this.isActiveProperty == null) {
                var attr = this.attrs(IsActivePropertyAttribute);
                if (attr.length === 1) {
                    this.isActiveProperty = attr[0].value;
                }
                else {
                    this.isActiveProperty = '';
                }
            }
            return this.isActiveProperty;
        };
        DataGrid.prototype.updateDisabledState = function () {
            this.slickContainer.toggleClass('ui-state-disabled', !!this.isDisabled);
        };
        DataGrid.prototype.resizeCanvas = function () {
            this.slickGrid.resizeCanvas();
        };
        DataGrid.prototype.subDialogDataChange = function () {
            this.refresh();
        };
        DataGrid.prototype.addFilterSeparator = function () {
            this.ensureQuickFilterBar().addSeparator();
        };
        DataGrid.prototype.determineText = function (getKey) {
            var localTextPrefix = this.getLocalTextDbPrefix();
            if (!isEmptyOrNull(localTextPrefix)) {
                var local = tryGetText(getKey(localTextPrefix));
                if (local != null) {
                    return local;
                }
            }
            return null;
        };
        DataGrid.prototype.addQuickFilter = function (opt) {
            return this.ensureQuickFilterBar().add(opt);
        };
        DataGrid.prototype.addDateRangeFilter = function (field, title) {
            return this.ensureQuickFilterBar().addDateRange(field, title);
        };
        DataGrid.prototype.dateRangeQuickFilter = function (field, title) {
            return QuickFilterBar.dateRange(field, title);
        };
        DataGrid.prototype.addDateTimeRangeFilter = function (field, title) {
            return this.ensureQuickFilterBar().addDateTimeRange(field, title);
        };
        DataGrid.prototype.dateTimeRangeQuickFilter = function (field, title) {
            return QuickFilterBar.dateTimeRange(field, title);
        };
        DataGrid.prototype.addBooleanFilter = function (field, title, yes, no) {
            return this.ensureQuickFilterBar().addBoolean(field, title, yes, no);
        };
        DataGrid.prototype.booleanQuickFilter = function (field, title, yes, no) {
            return QuickFilterBar.boolean(field, title, yes, no);
        };
        DataGrid.prototype.invokeSubmitHandlers = function () {
            if (this.quickFiltersBar != null) {
                this.quickFiltersBar.onSubmit(this.view.params);
            }
        };
        DataGrid.prototype.quickFilterChange = function (e) {
            this.persistSettings(null);
            this.view && (this.view.seekToPage = 1);
            this.refresh();
        };
        DataGrid.prototype.getPersistanceStorage = function () {
            return DataGrid_1.defaultPersistanceStorage;
        };
        DataGrid.prototype.getPersistanceKey = function () {
            var key = 'GridSettings:';
            var path = window.location.pathname;
            if (!isEmptyOrNull(path)) {
                key += path.substr(1).split(String.fromCharCode(47)).slice(0, 2).join('/') + ':';
            }
            key += getTypeFullName(getInstanceType(this));
            return key;
        };
        DataGrid.prototype.gridPersistanceFlags = function () {
            return {};
        };
        DataGrid.prototype.canShowColumn = function (column) {
            if (column == null) {
                return false;
            }
            var item = column.sourceItem;
            if (item == null) {
                return true;
            }
            if (item.filterOnly === true) {
                return false;
            }
            if (item.readPermission == null) {
                return true;
            }
            return Authorization.hasPermission(item.readPermission);
        };
        DataGrid.prototype.getPersistedSettings = function () {
            var storage = this.getPersistanceStorage();
            if (storage == null)
                return null;
            var json = trimToNull(storage.getItem(this.getPersistanceKey()));
            if (json != null && startsWith(json, '{') && endsWith(json, '}'))
                return JSON.parse(json);
            return null;
        };
        DataGrid.prototype.restoreSettings = function (settings, flags) {
            var _this = this;
            if (!this.slickGrid)
                return;
            if (settings == null) {
                settings = this.getPersistedSettings();
                if (settings == null)
                    return;
            }
            var columns = this.slickGrid.getColumns();
            var colById = null;
            var updateColById = function (cl) {
                colById = {};
                for (var $t1 = 0; $t1 < cl.length; $t1++) {
                    var c = cl[$t1];
                    colById[c.id] = c;
                }
            };
            this.view.beginUpdate();
            this.restoringSettings++;
            try {
                flags = flags || this.gridPersistanceFlags();
                if (settings.columns != null) {
                    if (flags.columnVisibility !== false) {
                        var visible = {};
                        updateColById(this.allColumns);
                        var newColumns = [];
                        for (var $t2 = 0; $t2 < settings.columns.length; $t2++) {
                            var x = settings.columns[$t2];
                            if (x.id != null && x.visible === true) {
                                var column = colById[x.id];
                                if (this.canShowColumn(column)) {
                                    column.visible = true;
                                    newColumns.push(column);
                                    delete colById[x.id];
                                }
                            }
                        }
                        for (var $t3 = 0; $t3 < this.allColumns.length; $t3++) {
                            var c1 = this.allColumns[$t3];
                            if (colById[c1.id] != null) {
                                c1.visible = false;
                                newColumns.push(c1);
                            }
                        }
                        this.allColumns = newColumns;
                        columns = this.allColumns.filter(function (x1) {
                            return x1.visible === true;
                        });
                    }
                    if (flags.columnWidths !== false) {
                        updateColById(columns);
                        for (var $t4 = 0; $t4 < settings.columns.length; $t4++) {
                            var x2 = settings.columns[$t4];
                            if (x2.id != null && x2.width != null && x2.width !== 0) {
                                var column1 = colById[x2.id];
                                if (column1 != null) {
                                    column1.width = x2.width;
                                }
                            }
                        }
                    }
                    if (flags.sortColumns !== false) {
                        updateColById(columns);
                        var list = [];
                        var sortColumns = settings.columns.filter(function (x3) {
                            var _a;
                            return x3.id != null && ((_a = x3.sort) !== null && _a !== void 0 ? _a : 0) !== 0;
                        });
                        sortColumns.sort(function (a, b) {
                            // sort holds two informations:
                            // absoulte value: order of sorting
                            // sign: positive = ascending, negativ = descending
                            // so we have to compare absolute values here
                            return Math.abs(a.sort) - Math.abs(b.sort);
                        });
                        for (var $t5 = 0; $t5 < sortColumns.length; $t5++) {
                            var x4 = sortColumns[$t5];
                            var column2 = colById[x4.id];
                            if (column2 != null) {
                                list.push({
                                    columnId: x4.id,
                                    sortAsc: x4.sort > 0
                                });
                            }
                        }
                        this.view.sortBy = list.map(function (x5) {
                            return x5.columnId + ((x5.sortAsc === false) ? ' DESC' : '');
                        });
                        this.slickGrid.setSortColumns(list);
                    }
                    this.slickGrid.setColumns(columns);
                    this.slickGrid.invalidate();
                }
                if (settings.filterItems != null &&
                    flags.filterItems !== false &&
                    this.filterBar != null &&
                    this.filterBar.get_store() != null) {
                    var items = this.filterBar.get_store().get_items();
                    items.length = 0;
                    items.push.apply(items, settings.filterItems);
                    this.filterBar.get_store().raiseChanged();
                }
                if (settings.includeDeleted != null &&
                    flags.includeDeleted !== false) {
                    var includeDeletedToggle = this.element.find('.s-IncludeDeletedToggle');
                    if (!!settings.includeDeleted !== includeDeletedToggle.hasClass('pressed')) {
                        includeDeletedToggle.children('a').click();
                    }
                }
                if (settings.quickFilters != null &&
                    flags.quickFilters !== false &&
                    this.quickFiltersDiv != null &&
                    this.quickFiltersDiv.length > 0) {
                    this.quickFiltersDiv.find('.quick-filter-item').each(function (i, e) {
                        var field = $(e).data('qffield');
                        if (isEmptyOrNull(field)) {
                            return;
                        }
                        var widget = $('#' + _this.uniqueName + '_QuickFilter_' + field).tryGetWidget(Widget);
                        if (widget == null) {
                            return;
                        }
                        var state = settings.quickFilters[field];
                        var loadState = $(e).data('qfloadstate');
                        if (loadState != null) {
                            loadState(widget, state);
                        }
                        else {
                            EditorUtils.setValue(widget, state);
                        }
                    });
                }
                if (flags.quickSearch === true && (settings.quickSearchField !== undefined || settings.quickSearchText !== undefined)) {
                    var qsInput = this.toolbar.element.find('.s-QuickSearchInput').first();
                    if (qsInput.length > 0) {
                        var qsWidget = qsInput.tryGetWidget(QuickSearchInput);
                        qsWidget && qsWidget.restoreState(settings.quickSearchText, settings.quickSearchField);
                    }
                }
            }
            finally {
                this.restoringSettings--;
                this.view.endUpdate();
            }
        };
        DataGrid.prototype.persistSettings = function (flags) {
            var storage = this.getPersistanceStorage();
            if (!storage) {
                return;
            }
            var settings = this.getCurrentSettings(flags);
            storage.setItem(this.getPersistanceKey(), JSON.stringify(settings));
        };
        DataGrid.prototype.getCurrentSettings = function (flags) {
            var _this = this;
            flags = flags || this.gridPersistanceFlags();
            var settings = {};
            if (flags.columnVisibility !== false || flags.columnWidths !== false || flags.sortColumns !== false) {
                settings.columns = [];
                var sortColumns = this.slickGrid.getSortColumns();
                var columns = this.slickGrid.getColumns();
                for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                    var column = columns_2[_i];
                    var p = {
                        id: column.id
                    };
                    if (flags.columnVisibility !== false) {
                        p.visible = true;
                    }
                    if (flags.columnWidths !== false) {
                        p.width = column.width;
                    }
                    if (flags.sortColumns !== false) {
                        var sort = indexOf(sortColumns, function (x) { return x.columnId == column.id; });
                        p.sort = ((sort >= 0) ? ((sortColumns[sort].sortAsc !== false) ? (sort + 1) : (-sort - 1)) : 0);
                    }
                    settings.columns.push(p);
                }
            }
            if (flags.includeDeleted !== false) {
                settings.includeDeleted = this.element.find('.s-IncludeDeletedToggle').hasClass('pressed');
            }
            if (flags.filterItems !== false && (this.filterBar != null) && (this.filterBar.get_store() != null)) {
                settings.filterItems = this.filterBar.get_store().get_items().slice();
            }
            if (flags.quickSearch === true) {
                var qsInput = this.toolbar.element.find('.s-QuickSearchInput').first();
                if (qsInput.length > 0) {
                    var qsWidget = qsInput.tryGetWidget(QuickSearchInput);
                    if (qsWidget != null) {
                        settings.quickSearchField = qsWidget.get_field();
                        settings.quickSearchText = qsWidget.element.val();
                    }
                }
            }
            if (flags.quickFilters !== false && (this.quickFiltersDiv != null) && this.quickFiltersDiv.length > 0) {
                settings.quickFilters = {};
                this.quickFiltersDiv.find('.quick-filter-item').each(function (i, e) {
                    var _a;
                    var field = $(e).data('qffield');
                    if (isEmptyOrNull(field)) {
                        return;
                    }
                    var widget = $('#' + _this.uniqueName + '_QuickFilter_' + field).tryGetWidget(Widget);
                    if (widget == null) {
                        return;
                    }
                    var saveState = $(e).data('qfsavestate');
                    var state = (saveState != null) ? saveState(widget) : EditorUtils.getValue(widget);
                    settings.quickFilters[field] = state;
                    if (flags.quickFilterText === true && $(e).hasClass('quick-filter-active')) {
                        var getDisplayText = $(e).data('qfdisplaytext');
                        var filterLabel = $(e).find('.quick-filter-label').text();
                        var displayText;
                        if (getDisplayText != null) {
                            displayText = getDisplayText(widget, filterLabel);
                        }
                        else {
                            displayText = filterLabel + ' = ' + EditorUtils.getDisplayText(widget);
                        }
                        if (!isEmptyOrNull(displayText)) {
                            if (!isEmptyOrNull(settings.quickFilterText)) {
                                settings.quickFilterText += ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ';
                                settings.quickFilterText += displayText;
                            }
                            else {
                                settings.quickFilterText = displayText;
                            }
                        }
                    }
                });
            }
            return settings;
        };
        DataGrid.prototype.getElement = function () {
            return this.element;
        };
        DataGrid.prototype.getGrid = function () {
            return this.slickGrid;
        };
        DataGrid.prototype.getView = function () {
            return this.view;
        };
        DataGrid.prototype.getFilterStore = function () {
            return (this.filterBar == null) ? null : this.filterBar.get_store();
        };
        var DataGrid_1;
        DataGrid = DataGrid_1 = __decorate([
            Decorators.registerClass('Serenity.DataGrid', [IReadOnly]),
            Decorators.element("<div/>")
        ], DataGrid);
        return DataGrid;
    }(Widget));

    var ColumnPickerDialog = /** @class */ (function (_super) {
        __extends(ColumnPickerDialog, _super);
        function ColumnPickerDialog() {
            var _this = _super.call(this) || this;
            new QuickSearchInput(_this.byId("Search"), {
                onSearch: function (fld, txt, done) {
                    txt = trimToNull(txt);
                    if (txt != null)
                        txt = Select2.util.stripDiacritics(txt.toLowerCase());
                    _this.element.find('li').each(function (x, e) {
                        $(e).toggle(!txt || Select2.util.stripDiacritics($(e).text().toLowerCase()).indexOf(txt) >= 0);
                    });
                    done && done(true);
                }
            });
            _this.ulVisible = _this.byId("VisibleCols");
            _this.ulHidden = _this.byId("HiddenCols");
            _this.dialogTitle = text("Controls.ColumnPickerDialog.Title");
            return _this;
        }
        ColumnPickerDialog_1 = ColumnPickerDialog;
        ColumnPickerDialog.createToolButton = function (grid) {
            function onClick() {
                var picker = new ColumnPickerDialog_1();
                picker.allColumns = grid.allColumns;
                if (grid.initialSettings) {
                    var initialSettings = grid.initialSettings;
                    if (initialSettings.columns && initialSettings.columns.length)
                        picker.defaultColumns = initialSettings.columns.map(function (x) { return x.id; });
                }
                picker.visibleColumns = grid.getGrid().getColumns().map(function (x) { return x.id; });
                picker.done = function () {
                    grid.allColumns = picker.allColumns;
                    var visible = picker.allColumns.filter(function (x) { return x.visible === true; });
                    grid.getGrid().setColumns(visible);
                    grid.persistSettings();
                    grid.getView().populate();
                };
                Router && Router.dialog && Router.dialog(grid.element, picker.element, function () { return "columns"; });
                picker.dialogOpen();
            }
            grid.element.on('handleroute.' + grid.uniqueName, function (e, arg) {
                if (arg && !arg.handled && arg.route == "columns") {
                    onClick();
                }
            });
            return {
                hint: text("Controls.ColumnPickerDialog.Title"),
                cssClass: "column-picker-button",
                onClick: onClick
            };
        };
        ColumnPickerDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [
                {
                    text: text("Controls.ColumnPickerDialog.RestoreDefaults"),
                    click: function () {
                        var liByKey = {};
                        _this.ulVisible.children().add(_this.ulHidden.children()).each(function (x, e) {
                            var el = $(e);
                            liByKey[el.data('key')] = el;
                        });
                        var last = null;
                        for (var _i = 0, _a = _this.defaultColumns; _i < _a.length; _i++) {
                            var id = _a[_i];
                            var li = liByKey[id];
                            if (!li)
                                continue;
                            if (last == null)
                                li.prependTo(_this.ulVisible);
                            else
                                li.insertAfter(last);
                            last = li;
                            var key = li.data('key');
                            delete liByKey[key];
                        }
                        for (var key in liByKey)
                            liByKey[key].appendTo(_this.ulHidden);
                        _this.updateListStates();
                    }
                },
                {
                    text: text("Dialogs.OkButton"),
                    click: function () {
                        var newColumns = [];
                        for (var _i = 0, _a = _this.allColumns; _i < _a.length; _i++) {
                            var col = _a[_i];
                            col.visible = false;
                        }
                        _this.visibleColumns = _this.ulVisible.children().toArray().map(function (x) {
                            var id = $(x).data("key");
                            var col = _this.colById[id];
                            col.visible = true;
                            newColumns.push(col);
                            return id;
                        });
                        for (var _b = 0, _c = _this.allColumns; _b < _c.length; _b++) {
                            var col = _c[_b];
                            if (!col.visible)
                                newColumns.push(col);
                        }
                        _this.allColumns = newColumns;
                        _this.done && _this.done();
                        _this.dialogClose();
                    }
                },
                {
                    text: text("Dialogs.CancelButton"),
                    click: function () {
                        _this.dialogClose();
                    }
                }
            ];
        };
        ColumnPickerDialog.prototype.getDialogOptions = function () {
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.width = 600;
            return opt;
        };
        ColumnPickerDialog.prototype.getTitle = function (col) {
            if (col.id == "__select__")
                return "[x]";
            return col.name || col.toolTip || col.id;
        };
        ColumnPickerDialog.prototype.allowHide = function (col) {
            return col.sourceItem == null || col.sourceItem.allowHide == null || col.sourceItem.allowHide;
        };
        ColumnPickerDialog.prototype.createLI = function (col) {
            var allowHide = this.allowHide(col);
            return $("\n<li data-key=\"" + col.id + "\" class=\"" + (allowHide ? "" : "cant-hide") + "\">\n<span class=\"drag-handle\">\u2630</span>\n" + htmlEncode(this.getTitle(col)) + "\n" + (allowHide ? "<i class=\"js-hide\" title=\"" + text("Controls.ColumnPickerDialog.HideHint") + "\">\u2716</i>" : '') + "\n<i class=\"js-show fa fa-eye\" title=\"" + text("Controls.ColumnPickerDialog.ShowHint") + "\"></i>\n</li>");
        };
        ColumnPickerDialog.prototype.updateListStates = function () {
            this.ulVisible.children().removeClass("bg-info").addClass("bg-success");
            this.ulHidden.children().removeClass("bg-success").addClass("bg-info");
        };
        ColumnPickerDialog.prototype.setupColumns = function () {
            var _this = this;
            this.allColumns = this.allColumns || [];
            this.visibleColumns = this.visibleColumns || [];
            var visible = {};
            for (var _i = 0, _a = this.visibleColumns; _i < _a.length; _i++) {
                var id = _a[_i];
                visible[id] = true;
            }
            this.colById = {};
            for (var _b = 0, _c = this.allColumns; _b < _c.length; _b++) {
                var c_1 = _c[_b];
                this.colById[c_1.id] = c_1;
            }
            if (this.defaultColumns == null)
                this.defaultColumns = this.visibleColumns.slice(0);
            var hidden = [];
            for (var _d = 0, _e = this.allColumns; _d < _e.length; _d++) {
                var c_2 = _e[_d];
                if (!visible[c_2.id] && (!c_2.sourceItem ||
                    (c_2.sourceItem.filterOnly !== true &&
                        (c_2.sourceItem.readPermission == null || Authorization.hasPermission(c_2.sourceItem.readPermission))))) {
                    hidden.push(c_2);
                }
            }
            var hiddenColumns = hidden.sort(function (a, b) { return Culture.stringCompare(_this.getTitle(a), _this.getTitle(b)); });
            for (var _f = 0, _g = this.visibleColumns; _f < _g.length; _f++) {
                var id = _g[_f];
                var c = this.colById[id];
                if (!c)
                    continue;
                this.createLI(c).appendTo(this.ulVisible);
            }
            for (var _h = 0, hiddenColumns_1 = hiddenColumns; _h < hiddenColumns_1.length; _h++) {
                var c_3 = hiddenColumns_1[_h];
                this.createLI(c_3).appendTo(this.ulHidden);
            }
            this.updateListStates();
            // @ts-ignore
            if (typeof Sortable !== "undefined" && Sortable.create) {
                // @ts-ignore
                Sortable.create(this.ulVisible[0], {
                    group: this.uniqueName + "_group",
                    filter: '.js-hide',
                    onFilter: function (evt) {
                        $(evt.item).appendTo(_this.ulHidden);
                        _this.updateListStates();
                    },
                    onMove: function (x) {
                        if ($(x.dragged).hasClass('cant-hide') &&
                            x.from == _this.ulVisible[0] &&
                            x.to !== x.from)
                            return false;
                        return true;
                    },
                    onEnd: function (evt) { return _this.updateListStates(); }
                });
                // @ts-ignore
                Sortable.create(this.ulHidden[0], {
                    group: this.uniqueName + "_group",
                    sort: false,
                    filter: '.js-show',
                    onFilter: function (evt) {
                        $(evt.item).appendTo(_this.ulVisible);
                        _this.updateListStates();
                    },
                    onEnd: function (evt) { return _this.updateListStates(); }
                });
            }
        };
        ColumnPickerDialog.prototype.onDialogOpen = function () {
            _super.prototype.onDialogOpen.call(this);
            this.element.find("input").removeAttr("disabled");
            this.element.closest('.ui-dialog').children(".ui-dialog-buttonpane")
                .find('button').eq(0).addClass("restore-defaults")
                .next().focus();
            this.setupColumns();
            centerDialog(this.element);
        };
        ColumnPickerDialog.prototype.getTemplate = function () {
            return "\n<div class=\"search\"><input id=\"~_Search\" type=\"text\" disabled /></div>\n<div class=\"columns-container\">\n<div class=\"column-list visible-list bg-success\">\n<h5><i class=\"fa fa-eye\"></i> " + text("Controls.ColumnPickerDialog.VisibleColumns") + "</h5>\n<ul id=\"~_VisibleCols\"></ul>\n</div>\n<div class=\"column-list hidden-list bg-info\">\n<h5><i class=\"fa fa-list\"></i> " + text("Controls.ColumnPickerDialog.HiddenColumns") + "</h5>\n<ul id=\"~_HiddenCols\"></ul>\n</div>\n</div>";
        };
        var ColumnPickerDialog_1;
        ColumnPickerDialog = ColumnPickerDialog_1 = __decorate([
            Decorators.registerClass(),
            Decorators.resizable(),
            Decorators.responsive()
        ], ColumnPickerDialog);
        return ColumnPickerDialog;
    }(TemplatedDialog));

    var EntityGrid = /** @class */ (function (_super) {
        __extends(EntityGrid, _super);
        function EntityGrid(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.element.addClass('route-handler')
                .on('handleroute.' + _this.uniqueName, function (e, arg) {
                if (!!arg.handled)
                    return;
                if (!!(arg.route === 'new')) {
                    arg.handled = true;
                    _this.addButtonClick();
                    return;
                }
                var parts = arg.route.split('/');
                if (!!(parts.length === 2 && parts[0] === 'edit')) {
                    arg.handled = true;
                    _this.editItem(parts[1]);
                    return;
                }
                if (!!(parts.length === 2 && parts[1] === 'new')) {
                    arg.handled = true;
                    _this.editItemOfType(cast(parts[0], String), null);
                    return;
                }
                if (!!(parts.length === 3 && parts[1] === 'edit')) {
                    arg.handled = true;
                    _this.editItemOfType(cast(parts[0], String), parts[2]);
                }
            });
            return _this;
        }
        EntityGrid.prototype.usePager = function () {
            return true;
        };
        EntityGrid.prototype.createToolbarExtensions = function () {
            this.createIncludeDeletedButton();
            this.createQuickSearchInput();
        };
        EntityGrid.prototype.getInitialTitle = function () {
            return this.getDisplayName();
        };
        EntityGrid.prototype.getLocalTextPrefix = function () {
            var result = _super.prototype.getLocalTextPrefix.call(this);
            if (isEmptyOrNull(result)) {
                return this.getEntityType();
            }
            return result;
        };
        EntityGrid.prototype.getEntityType = function () {
            if (this.entityType != null)
                return this.entityType;
            var attr = this.attrs(EntityTypeAttribute);
            if (attr.length === 1) {
                return (this.entityType = attr[0].value);
            }
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0) {
                name = name.substring(px + 1);
            }
            if (endsWith(name, 'Grid')) {
                name = name.substr(0, name.length - 4);
            }
            else if (endsWith(name, 'SubGrid')) {
                name = name.substr(0, name.length - 7);
            }
            this.entityType = name;
            return this.entityType;
        };
        EntityGrid.prototype.getDisplayName = function () {
            if (this.displayName != null)
                return this.displayName;
            var attr = this.attrs(DisplayNameAttribute);
            if (attr.length >= 1) {
                this.displayName = attr[0].displayName;
                this.displayName = LT.getDefault(this.displayName, this.displayName);
            }
            else {
                this.displayName = tryGetText(this.getLocalTextDbPrefix() + 'EntityPlural');
                if (this.displayName == null)
                    this.displayName = this.getEntityType();
            }
            return this.displayName;
        };
        EntityGrid.prototype.getItemName = function () {
            if (this.itemName != null)
                return this.itemName;
            var attr = this.attrs(ItemNameAttribute);
            if (attr.length >= 1) {
                this.itemName = attr[0].value;
                this.itemName = LT.getDefault(this.itemName, this.itemName);
            }
            else {
                this.itemName = tryGetText(this.getLocalTextDbPrefix() + 'EntitySingular');
                if (this.itemName == null)
                    this.itemName = this.getEntityType();
            }
            return this.itemName;
        };
        EntityGrid.prototype.getAddButtonCaption = function () {
            return format(text('Controls.EntityGrid.NewButton'), this.getItemName());
        };
        EntityGrid.prototype.getButtons = function () {
            var _this = this;
            var buttons = [];
            buttons.push({
                title: this.getAddButtonCaption(),
                cssClass: 'add-button',
                hotkey: 'alt+n',
                onClick: function () {
                    _this.addButtonClick();
                },
                disabled: function () { return !_this.hasInsertPermission() || _this.readOnly; }
            });
            buttons.push(this.newRefreshButton(true));
            buttons.push(ColumnPickerDialog.createToolButton(this));
            return buttons;
        };
        EntityGrid.prototype.newRefreshButton = function (noText) {
            var _this = this;
            return {
                title: (noText ? null : text('Controls.EntityGrid.RefreshButton')),
                hint: (noText ? text('Controls.EntityGrid.RefreshButton') : null),
                cssClass: 'refresh-button',
                onClick: function () {
                    _this.refresh();
                }
            };
        };
        EntityGrid.prototype.addButtonClick = function () {
            this.editItem(new Object());
        };
        EntityGrid.prototype.editItem = function (entityOrId) {
            var _this = this;
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = safeCast(dlg, IEditDialog);
                if (dialog != null) {
                    dialog.load(entityOrId, function () {
                        dialog.dialogOpen(_this.openDialogsAsPanel);
                    });
                    return;
                }
                throw new Error(format("{0} doesn't implement IEditDialog!", getTypeFullName(getInstanceType(dlg))));
            });
        };
        EntityGrid.prototype.editItemOfType = function (itemType, entityOrId) {
            var _this = this;
            if (itemType === this.getItemType()) {
                this.editItem(entityOrId);
                return;
            }
            this.createEntityDialog(itemType, function (dlg) {
                var dialog = safeCast(dlg, IEditDialog);
                if (dialog != null) {
                    dialog.load(entityOrId, function () {
                        return dialog.dialogOpen(_this.openDialogsAsPanel);
                    });
                    return;
                }
                throw new Error(format("{0} doesn't implement IEditDialog!", getTypeFullName(getInstanceType(dlg))));
            });
        };
        EntityGrid.prototype.getService = function () {
            if (this.service != null)
                return this.service;
            var attr = this.attrs(ServiceAttribute);
            if (attr.length >= 1)
                this.service = attr[0].value;
            else
                this.service = replaceAll(this.getEntityType(), '.', '/');
            return this.service;
        };
        EntityGrid.prototype.getViewOptions = function () {
            var opt = _super.prototype.getViewOptions.call(this);
            opt.url = resolveUrl('~/Services/' + this.getService() + '/List');
            return opt;
        };
        EntityGrid.prototype.getItemType = function () {
            return this.getEntityType();
        };
        EntityGrid.prototype.routeDialog = function (itemType, dialog) {
            var _this = this;
            Router && Router.dialog && Router.dialog(this.element, dialog.element, function () {
                var hash = '';
                if (itemType !== _this.getItemType())
                    hash = itemType + '/';
                if (!!(dialog != null && dialog.entityId != null))
                    hash += 'edit/' + dialog.entityId.toString();
                else
                    hash += 'new';
                return hash;
            });
        };
        EntityGrid.prototype.getInsertPermission = function () {
            return null;
        };
        EntityGrid.prototype.hasInsertPermission = function () {
            var insertPermission = this.getInsertPermission();
            return insertPermission == null || Authorization.hasPermission(this.getInsertPermission());
        };
        EntityGrid.prototype.transferDialogReadOnly = function (dialog) {
            if (this.readOnly)
                EditorUtils.setReadOnly(dialog, true);
        };
        EntityGrid.prototype.initDialog = function (dialog) {
            var _this = this;
            SubDialogHelper.bindToDataChange(dialog, this, function (e, dci) {
                _this.subDialogDataChange();
            }, true);
            this.transferDialogReadOnly(dialog);
            this.routeDialog(this.getItemType(), dialog);
        };
        EntityGrid.prototype.initEntityDialog = function (itemType, dialog) {
            var _this = this;
            if (itemType === this.getItemType()) {
                this.initDialog(dialog);
                return;
            }
            SubDialogHelper.bindToDataChange(dialog, this, function (e, dci) {
                _this.subDialogDataChange();
            }, true);
            this.transferDialogReadOnly(dialog);
            this.routeDialog(itemType, dialog);
        };
        EntityGrid.prototype.createEntityDialog = function (itemType, callback) {
            var _this = this;
            var dialogClass = this.getDialogTypeFor(itemType);
            var dialog = Widget.create({
                type: dialogClass,
                options: this.getDialogOptionsFor(itemType),
                init: function (d) {
                    _this.initEntityDialog(itemType, d);
                    callback && callback(d);
                }
            });
            return dialog;
        };
        EntityGrid.prototype.getDialogOptions = function () {
            return {};
        };
        EntityGrid.prototype.getDialogOptionsFor = function (itemType) {
            if (itemType === this.getItemType())
                return this.getDialogOptions();
            return {};
        };
        EntityGrid.prototype.getDialogTypeFor = function (itemType) {
            if (itemType === this.getItemType()) {
                return this.getDialogType();
            }
            return DialogTypeRegistry.get(itemType);
        };
        EntityGrid.prototype.getDialogType = function () {
            if (this.dialogType != null)
                return this.dialogType;
            var attr = this.attrs(DialogTypeAttribute);
            if (attr.length >= 1)
                this.dialogType = attr[0].value;
            else
                this.dialogType = DialogTypeRegistry.get(this.getEntityType());
            return this.dialogType;
        };
        EntityGrid = __decorate([
            Decorators.registerClass('Serenity.EntityGrid')
        ], EntityGrid);
        return EntityGrid;
    }(DataGrid));

    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    var TreeGridMixin = /** @class */ (function () {
        function TreeGridMixin(options) {
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            dg.element.find('.grid-container').on('click', function (e) {
                if ($(e.target).hasClass('s-TreeToggle')) {
                    var src = dg.slickGrid.getCellFromEvent(e);
                    if (src.cell >= 0 &&
                        src.row >= 0) {
                        SlickTreeHelper.toggleClick(e, src.row, src.row, dg.view, getId);
                    }
                }
            });
            var oldViewFilter = dg.onViewFilter;
            dg.onViewFilter = function (item) {
                if (!oldViewFilter.apply(this, [item]))
                    return false;
                return SlickTreeHelper.filterById(item, dg.view, options.getParentId);
            };
            var oldProcessData = dg.onViewProcessData;
            dg.onViewProcessData = function (response) {
                response = oldProcessData.apply(this, [response]);
                response.Entities = TreeGridMixin.applyTreeOrdering(response.Entities, getId, options.getParentId);
                SlickTreeHelper.setIndents(response.Entities, getId, options.getParentId, (options.initialCollapse && options.initialCollapse()) || false);
                return response;
            };
            if (options.toggleField) {
                var col = tryFirst(dg['allColumns'] || dg.slickGrid.getColumns() || [], function (x) { return x.field == options.toggleField; });
                if (col) {
                    col.format = SlickFormatting.treeToggle(function () { return dg.view; }, getId, col.format || (function (ctx) { return htmlEncode(ctx.value); }));
                    col.formatter = SlickHelper.convertToFormatter(col.format);
                }
            }
        }
        /**
         * Expands / collapses all rows in a grid automatically
         */
        TreeGridMixin.prototype.toggleAll = function () {
            SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), !this.dataGrid.view.getItems().every(function (x) { return x._collapsed == true; }));
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.collapseAll = function () {
            SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), true);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.expandAll = function () {
            SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), false);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        TreeGridMixin.applyTreeOrdering = function (items, getId, getParentId) {
            var result = [];
            var byId = toGrouping(items, getId);
            var byParentId = toGrouping(items, getParentId);
            var visited = {};
            function takeChildren(theParentId) {
                if (visited[theParentId])
                    return;
                visited[theParentId] = true;
                for (var _i = 0, _a = (byParentId[theParentId] || []); _i < _a.length; _i++) {
                    var child = _a[_i];
                    result.push(child);
                    takeChildren(getId(child));
                }
            }
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var parentId = getParentId(item);
                if (parentId == null ||
                    !((byId[parentId] || []).length)) {
                    result.push(item);
                    takeChildren(getId(item));
                }
            }
            return result;
        };
        return TreeGridMixin;
    }());

    var CheckTreeEditor = /** @class */ (function (_super) {
        __extends(CheckTreeEditor, _super);
        function CheckTreeEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-CheckTreeEditor');
            _this.updateItems();
            return _this;
        }
        CheckTreeEditor.prototype.getIdProperty = function () {
            return "id";
        };
        CheckTreeEditor.prototype.getTreeItems = function () {
            return [];
        };
        CheckTreeEditor.prototype.updateItems = function () {
            var items = this.getTreeItems();
            var itemById = {};
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.children = [];
                if (!isEmptyOrNull(item.id)) {
                    itemById[item.id] = item;
                }
                if (!isEmptyOrNull(item.parentId)) {
                    var parent = itemById[item.parentId];
                    if (parent != null) {
                        parent.children.push(item);
                    }
                }
            }
            this.view.addData({ Entities: items, Skip: 0, Take: 0, TotalCount: items.length });
            this.updateSelectAll();
            this.updateFlags();
        };
        CheckTreeEditor.prototype.getEditValue = function (property, target) {
            if (this.getDelimited())
                target[property.name] = this.get_value().join(",");
            else
                target[property.name] = this.get_value();
        };
        CheckTreeEditor.prototype.setEditValue = function (source, property) {
            var value = source[property.name];
            this.set_value(value);
        };
        CheckTreeEditor.prototype.getButtons = function () {
            var _this = this;
            var selectAllText = this.getSelectAllText();
            if (isEmptyOrNull(selectAllText)) {
                return null;
            }
            var self = this;
            var buttons = [];
            buttons.push(GridSelectAllButtonHelper.define(function () {
                return self;
            }, function (x) {
                return x.id;
            }, function (x1) {
                return x1.isSelected;
            }, function (x2, v) {
                if (x2.isSelected !== v) {
                    x2.isSelected = v;
                    _this.itemSelectedChanged(x2);
                }
            }, null, function () {
                _this.updateFlags();
            }));
            return buttons;
        };
        CheckTreeEditor.prototype.itemSelectedChanged = function (item) {
        };
        CheckTreeEditor.prototype.getSelectAllText = function () {
            var _a;
            return (_a = tryGetText('Controls.CheckTreeEditor.SelectAll')) !== null && _a !== void 0 ? _a : 'Select All';
        };
        CheckTreeEditor.prototype.isThreeStateHierarchy = function () {
            return false;
        };
        CheckTreeEditor.prototype.createSlickGrid = function () {
            this.element.addClass('slick-no-cell-border').addClass('slick-no-odd-even');
            var result = _super.prototype.createSlickGrid.call(this);
            this.element.addClass('slick-hide-header');
            result.resizeCanvas();
            return result;
        };
        CheckTreeEditor.prototype.onViewFilter = function (item) {
            if (!_super.prototype.onViewFilter.call(this, item)) {
                return false;
            }
            var items = this.view.getItems();
            var self = this;
            return SlickTreeHelper.filterCustom(item, function (x) {
                if (x.parentId == null) {
                    return null;
                }
                if (self.byId == null) {
                    self.byId = {};
                    for (var i = 0; i < items.length; i++) {
                        var o = items[i];
                        if (o.id != null) {
                            self.byId[o.id] = o;
                        }
                    }
                }
                return self.byId[x.parentId];
            });
        };
        CheckTreeEditor.prototype.getInitialCollapse = function () {
            return false;
        };
        CheckTreeEditor.prototype.onViewProcessData = function (response) {
            response = _super.prototype.onViewProcessData.call(this, response);
            this.byId = null;
            SlickTreeHelper.setIndents(response.Entities, function (x) {
                return x.id;
            }, function (x1) {
                return x1.parentId;
            }, this.getInitialCollapse());
            return response;
        };
        CheckTreeEditor.prototype.onClick = function (e, row, cell) {
            _super.prototype.onClick.call(this, e, row, cell);
            if (!e.isDefaultPrevented()) {
                SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) {
                    return x.id;
                });
            }
            if (e.isDefaultPrevented()) {
                return;
            }
            var target = $(e.target);
            if (target.hasClass('check-box')) {
                e.preventDefault();
                if (this._readOnly)
                    return;
                var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                var item = this.itemAt(row);
                var anyChanged = item.isSelected !== !checkedOrPartial;
                this.view.beginUpdate();
                try {
                    if (item.isSelected !== !checkedOrPartial) {
                        item.isSelected = !checkedOrPartial;
                        this.view.updateItem(item.id, item);
                        this.itemSelectedChanged(item);
                    }
                    anyChanged = this.setAllSubTreeSelected(item, item.isSelected) || anyChanged;
                    this.updateSelectAll();
                    this.updateFlags();
                }
                finally {
                    this.view.endUpdate();
                }
                if (anyChanged) {
                    this.element.triggerHandler('change');
                }
            }
        };
        CheckTreeEditor.prototype.updateSelectAll = function () {
            GridSelectAllButtonHelper.update(this, function (x) {
                return x.isSelected;
            });
        };
        CheckTreeEditor.prototype.updateFlags = function () {
            var view = this.view;
            var items = view.getItems();
            var threeState = this.isThreeStateHierarchy();
            if (!threeState) {
                return;
            }
            view.beginUpdate();
            try {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.children == null || item.children.length === 0) {
                        var allsel = this.getDescendantsSelected(item);
                        if (allsel !== item.isAllDescendantsSelected) {
                            item.isAllDescendantsSelected = allsel;
                            view.updateItem(item.id, item);
                        }
                        continue;
                    }
                    var allSelected = this.allDescendantsSelected(item);
                    var selected = allSelected || this.anyDescendantsSelected(item);
                    if (allSelected !== item.isAllDescendantsSelected || selected !== item.isSelected) {
                        var selectedChange = item.isSelected !== selected;
                        item.isAllDescendantsSelected = allSelected;
                        item.isSelected = selected;
                        view.updateItem(item.id, item);
                        if (selectedChange) {
                            this.itemSelectedChanged(item);
                        }
                    }
                }
            }
            finally {
                view.endUpdate();
            }
        };
        CheckTreeEditor.prototype.getDescendantsSelected = function (item) {
            return true;
        };
        CheckTreeEditor.prototype.setAllSubTreeSelected = function (item, selected) {
            var result = false;
            for (var i = 0; i < item.children.length; i++) {
                var sub = item.children[i];
                if (sub.isSelected !== selected) {
                    result = true;
                    sub.isSelected = selected;
                    this.view.updateItem(sub.id, sub);
                    this.itemSelectedChanged(sub);
                }
                if (sub.children.length > 0) {
                    result = this.setAllSubTreeSelected(sub, selected) || result;
                }
            }
            return result;
        };
        CheckTreeEditor.prototype.allItemsSelected = function () {
            for (var i = 0; i < this.rowCount(); i++) {
                var row = this.itemAt(i);
                if (!row.isSelected) {
                    return false;
                }
            }
            return this.rowCount() > 0;
        };
        CheckTreeEditor.prototype.allDescendantsSelected = function (item) {
            if (item.children.length > 0) {
                for (var i = 0; i < item.children.length; i++) {
                    var sub = item.children[i];
                    if (!sub.isSelected) {
                        return false;
                    }
                    if (!this.allDescendantsSelected(sub)) {
                        return false;
                    }
                }
            }
            return true;
        };
        CheckTreeEditor.prototype.getDelimited = function () {
            return !!!!this.options['delimited'];
        };
        CheckTreeEditor.prototype.anyDescendantsSelected = function (item) {
            if (item.children.length > 0) {
                for (var i = 0; i < item.children.length; i++) {
                    var sub = item.children[i];
                    if (sub.isSelected) {
                        return true;
                    }
                    if (this.anyDescendantsSelected(sub)) {
                        return true;
                    }
                }
            }
            return false;
        };
        CheckTreeEditor.prototype.getColumns = function () {
            var _this = this;
            var self = this;
            var columns = [];
            columns.push({
                field: 'text', name: 'Kayıt', width: 80,
                format: SlickFormatting.treeToggle(function () {
                    return self.view;
                }, function (x) {
                    return x.id;
                }, function (ctx) {
                    var cls = 'check-box';
                    var item = ctx.item;
                    if (item.hideCheckBox) {
                        return _this.getItemText(ctx);
                    }
                    var threeState = _this.isThreeStateHierarchy();
                    if (item.isSelected) {
                        if (threeState && !item.isAllDescendantsSelected) {
                            cls += ' partial';
                        }
                        else {
                            cls += ' checked';
                        }
                    }
                    if (_this._readOnly)
                        cls += ' readonly';
                    return '<span class="' + cls + '"></span>' + _this.getItemText(ctx);
                })
            });
            return columns;
        };
        CheckTreeEditor.prototype.getItemText = function (ctx) {
            return htmlEncode(ctx.value);
        };
        CheckTreeEditor.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.forceFitColumns = true;
            return opt;
        };
        CheckTreeEditor.prototype.sortItems = function () {
            if (!this.moveSelectedUp()) {
                return;
            }
            var oldIndexes = {};
            var list = this.view.getItems();
            var i = 0;
            for (var $t1 = 0; $t1 < list.length; $t1++) {
                var x = list[$t1];
                oldIndexes[x.id] = i++;
            }
            list.sort(function (x1, y) {
                if (x1.isSelected && !y.isSelected) {
                    return -1;
                }
                if (y.isSelected && !x1.isSelected) {
                    return 1;
                }
                var c = Culture.stringCompare(x1.text, y.text);
                if (c !== 0) {
                    return c;
                }
                return oldIndexes[x1.id] < oldIndexes[y.id] ? -1 : (oldIndexes[x1.id] > oldIndexes[y.id] ? 1 : 0);
            });
            this.view.setItems(list, true);
        };
        CheckTreeEditor.prototype.moveSelectedUp = function () {
            return false;
        };
        CheckTreeEditor.prototype.get_readOnly = function () {
            return this._readOnly;
        };
        CheckTreeEditor.prototype.set_readOnly = function (value) {
            if (!!this._readOnly != !!value) {
                this._readOnly = !!value;
                this.view.refresh();
            }
        };
        CheckTreeEditor.prototype.get_value = function () {
            var list = [];
            var items = this.view.getItems();
            for (var i = 0; i < items.length; i++) {
                if (items[i].isSelected) {
                    list.push(items[i].id);
                }
            }
            return list;
        };
        Object.defineProperty(CheckTreeEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        CheckTreeEditor.prototype.set_value = function (value) {
            var selected = {};
            if (value != null) {
                if (typeof value == "string") {
                    value = value.split(',')
                        .map(function (x) { return trimToNull(x); })
                        .filter(function (x) { return x != null; });
                }
                for (var i = 0; i < value.length; i++) {
                    selected[value[i]] = true;
                }
            }
            this.view.beginUpdate();
            try {
                var items = this.view.getItems();
                for (var i1 = 0; i1 < items.length; i1++) {
                    var item = items[i1];
                    var select = selected[item.id];
                    if (select !== item.isSelected) {
                        item.isSelected = select;
                        this.view.updateItem(item.id, item);
                    }
                }
                this.updateSelectAll();
                this.updateFlags();
                this.sortItems();
            }
            finally {
                this.view.endUpdate();
            }
        };
        CheckTreeEditor = __decorate([
            Decorators.registerEditor('Serenity.CheckTreeEditor', [IGetEditValue, ISetEditValue, IReadOnly]),
            Decorators.element("<div/>")
        ], CheckTreeEditor);
        return CheckTreeEditor;
    }(DataGrid));
    var CheckLookupEditor = /** @class */ (function (_super) {
        __extends(CheckLookupEditor, _super);
        function CheckLookupEditor(div, options) {
            var _this = _super.call(this, div, options) || this;
            _this.enableUpdateItems = true;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            _this.updateItems();
            ScriptData.bindToChange('Lookup.' + _this.getLookupKey(), _this.uniqueName, function () { return _this.updateItems(); });
            return _this;
        }
        CheckLookupEditor.prototype.updateItems = function () {
            if (this.enableUpdateItems)
                _super.prototype.updateItems.call(this);
        };
        CheckLookupEditor.prototype.getLookupKey = function () {
            return this.options.lookupKey;
        };
        CheckLookupEditor.prototype.getButtons = function () {
            var _a;
            return (_a = _super.prototype.getButtons.call(this)) !== null && _a !== void 0 ? _a : (this.options.hideSearch ? null : []);
        };
        CheckLookupEditor.prototype.createToolbarExtensions = function () {
            var _this = this;
            _super.prototype.createToolbarExtensions.call(this);
            GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                _this.view.setItems(_this.view.getItems(), true);
            });
        };
        CheckLookupEditor.prototype.getSelectAllText = function () {
            if (!this.options.showSelectAll)
                return null;
            return _super.prototype.getSelectAllText.call(this);
        };
        CheckLookupEditor.prototype.cascadeItems = function (items) {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return [];
                }
                return items;
            }
            var key = val.toString();
            var fld = this.get_cascadeField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        CheckLookupEditor.prototype.filterItems = function (items) {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return items;
            }
            var key = val.toString();
            var fld = this.get_filterField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        CheckLookupEditor.prototype.getLookupItems = function (lookup) {
            return this.filterItems(this.cascadeItems(lookup.items));
        };
        CheckLookupEditor.prototype.getTreeItems = function () {
            var lookup = getLookup(this.options.lookupKey);
            var items = this.getLookupItems(lookup);
            return items.map(function (item) {
                var _a, _b;
                return ({
                    id: ((_a = item[lookup.idField]) !== null && _a !== void 0 ? _a : "").toString(),
                    text: ((_b = item[lookup.textField]) !== null && _b !== void 0 ? _b : "").toString(),
                    source: item
                });
            });
        };
        CheckLookupEditor.prototype.onViewFilter = function (item) {
            return _super.prototype.onViewFilter.call(this, item) &&
                (isEmptyOrNull(this.searchText) ||
                    Select2.util.stripDiacritics(item.text || '')
                        .toUpperCase().indexOf(this.searchText) >= 0);
        };
        CheckLookupEditor.prototype.moveSelectedUp = function () {
            return this.options.checkedOnTop;
        };
        CheckLookupEditor.prototype.get_cascadeFrom = function () {
            return this.options.cascadeFrom;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeFrom", {
            get: function () {
                return this.get_cascadeFrom();
            },
            set: function (value) {
                this.set_cascadeFrom(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.getCascadeFromValue = function (parent) {
            return EditorUtils.getValue(parent);
        };
        CheckLookupEditor.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (isEmptyOrNull(value)) {
                if (this.cascadeLink != null) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new CascadedWidgetLink(Widget, this, function (p) {
                _this.set_cascadeValue(_this.getCascadeFromValue(p));
            });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        CheckLookupEditor.prototype.set_cascadeFrom = function (value) {
            if (value !== this.options.cascadeFrom) {
                this.setCascadeFrom(value);
                this.updateItems();
            }
        };
        CheckLookupEditor.prototype.get_cascadeField = function () {
            var _a;
            return ((_a = this.options.cascadeField) !== null && _a !== void 0 ? _a : this.options.cascadeFrom);
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeField", {
            get: function () {
                return this.get_cascadeField();
            },
            set: function (value) {
                this.set_cascadeField(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_cascadeField = function (value) {
            this.options.cascadeField = value;
        };
        CheckLookupEditor.prototype.get_cascadeValue = function () {
            return this.options.cascadeValue;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeValue", {
            get: function () {
                return this.get_cascadeValue();
            },
            set: function (value) {
                this.set_cascadeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_cascadeValue = function (value) {
            if (this.options.cascadeValue !== value) {
                this.options.cascadeValue = value;
                this.value = [];
                this.updateItems();
            }
        };
        CheckLookupEditor.prototype.get_filterField = function () {
            return this.options.filterField;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "filterField", {
            get: function () {
                return this.get_filterField();
            },
            set: function (value) {
                this.set_filterField(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_filterField = function (value) {
            this.options.filterField = value;
        };
        CheckLookupEditor.prototype.get_filterValue = function () {
            return this.options.filterValue;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "filterValue", {
            get: function () {
                return this.get_filterValue();
            },
            set: function (value) {
                this.set_filterValue(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_filterValue = function (value) {
            if (this.options.filterValue !== value) {
                this.options.filterValue = value;
                this.value = null;
                this.updateItems();
            }
        };
        CheckLookupEditor = __decorate([
            Decorators.registerEditor("Serenity.CheckLookupEditor")
        ], CheckLookupEditor);
        return CheckLookupEditor;
    }(CheckTreeEditor));

    var Reporting;
    (function (Reporting) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (opt.reportKey) {
                    _this.loadReport(opt.reportKey);
                }
                return _this;
            }
            ReportDialog.prototype.createPropertyGrid = function () {
                if (this.propertyGrid) {
                    this.byId('PropertyGrid').html('').attr('class', '');
                    this.propertyGrid = null;
                }
                this.propertyGrid = (new PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.propertyItems
                })).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                serviceCall({
                    service: 'Report/Retrieve', request: { ReportKey: reportKey },
                    onSuccess: function (response) {
                        var _a;
                        _this.reportKey = (_a = response.ReportKey) !== null && _a !== void 0 ? _a : reportKey;
                        _this.propertyItems = response.Properties || [];
                        _this.dialogTitle = response.Title;
                        _this.createPropertyGrid();
                        var set = response.InitialSettings;
                        if (set == null) {
                            set = new Object();
                        }
                        _this.propertyGrid.load(set);
                        _this.toolbar.findButton('print-preview-button').toggle(!response.IsDataOnlyReport);
                        _this.toolbar.findButton('export-pdf-button').toggle(!response.IsDataOnlyReport);
                        _this.toolbar.findButton('export-docx-button').toggle(!response.IsDataOnlyReport);
                        _this.dialogOpen(null);
                    }
                });
            };
            ReportDialog.prototype.executeReport = function (targetFrame, exportType) {
                if (!this.validateForm()) {
                    return;
                }
                var parameters = new Object();
                this.propertyGrid.save(parameters);
                postToService({
                    service: 'Report/Execute',
                    request: {
                        ReportKey: this.reportKey,
                        DesignId: 'Default',
                        ExportType: exportType,
                        Parameters: parameters
                    }, target: targetFrame
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push({
                    title: 'Önizleme', cssClass: 'print-preview-button',
                    onClick: function () {
                        _this.executeReport('_blank', null);
                    }
                });
                buttons.push({
                    title: 'PDF', cssClass: 'export-pdf-button',
                    onClick: function () {
                        _this.executeReport('', 'Pdf');
                    }
                });
                buttons.push({
                    title: 'Excel', cssClass: 'export-xlsx-button',
                    onClick: function () {
                        _this.executeReport('', 'Xlsx');
                    }
                });
                buttons.push({
                    title: 'Word', cssClass: 'export-docx-button',
                    onClick: function () {
                        _this.executeReport('', 'Docx');
                    }
                });
                return buttons;
            };
            ReportDialog = __decorate([
                Decorators.registerClass('Serenity.Reporting.ReportDialog')
            ], ReportDialog);
            return ReportDialog;
        }(TemplatedDialog));
        Reporting.ReportDialog = ReportDialog;
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(div) {
                var _this = _super.call(this, div) || this;
                $('.report-link').click(function (e) { return _this.reportLinkClick(e); });
                $('div.line').click(function (e) { return _this.categoryClick(e); });
                var self = _this;
                new QuickSearchInput($('#QuickSearchInput'), {
                    onSearch: function (field, text, done) {
                        self.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('#ReportList').find('li').removeClass('non-match');
                text = trimToNull(text);
                if (text == null) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ');
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (i1, e) {
                    var _a;
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(((_a = x.text()) !== null && _a !== void 0 ? _a : '').toUpperCase());
                    for (var $t1 = 0; $t1 < parts.length; $t1++) {
                        var p = parts[$t1];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                var dialog = new ReportDialog({ reportKey: $(e.target).data('key') });
            };
            ReportPage = __decorate([
                Decorators.registerClass('Serenity.Reporting.ReportPage')
            ], ReportPage);
            return ReportPage;
        }(Widget));
        Reporting.ReportPage = ReportPage;
    })(Reporting || (Reporting = {}));

    // legacy, don't use!
    var AsyncLookupEditor = /** @class */ (function (_super) {
        __extends(AsyncLookupEditor, _super);
        function AsyncLookupEditor(hidden, opt) {
            return _super.call(this, hidden, opt) || this;
        }
        AsyncLookupEditor.prototype.getLookupKey = function () {
            var _a;
            return ((_a = this.options.lookupKey) !== null && _a !== void 0 ? _a : _super.prototype.getLookupKey.call(this));
        };
        AsyncLookupEditor = __decorate([
            Decorators.registerEditor('Serenity.AsyncLookupEditor', [ISetEditValue, IGetEditValue, IStringValue, IReadOnly])
        ], AsyncLookupEditor);
        return AsyncLookupEditor;
    }(LookupEditorBase));

    var ScriptContext = /** @class */ (function () {
        function ScriptContext() {
        }
        ScriptContext = __decorate([
            Decorators.registerClass('Serenity.ScriptContext')
        ], ScriptContext);
        return ScriptContext;
    }());

    var IAsyncInit = /** @class */ (function () {
        function IAsyncInit() {
        }
        IAsyncInit = __decorate([
            Decorators.registerInterface('Serenity.IAsyncInit')
        ], IAsyncInit);
        return IAsyncInit;
    }());

    var WX;
    (function (WX) {
        function getWidget(element, type) {
            return element.getWidget(type);
        }
        WX.getWidget = getWidget;
        WX.getWidgetName = Widget.getWidgetName;
        function hasOriginalEvent(e) {
            return !!!(typeof (e.originalEvent) === 'undefined');
        }
        WX.hasOriginalEvent = hasOriginalEvent;
        function change(widget, handler) {
            widget.change(handler);
        }
        WX.change = change;
        function changeSelect2(widget, handler) {
            widget.changeSelect2(handler);
        }
        WX.changeSelect2 = changeSelect2;
        function getGridField(widget) {
            return widget.getGridField();
        }
        WX.getGridField = getGridField;
    })(WX || (WX = {}));

    var GoogleMap = /** @class */ (function (_super) {
        __extends(GoogleMap, _super);
        function GoogleMap(container, opt) {
            var _a, _b, _c, _d, _e, _f, _g;
            var _this = _super.call(this, container, opt) || this;
            // @ts-ignore
            var center = (_a = new google.m) !== null && _a !== void 0 ? _a : s.LatLng((_b = _this.options.latitude) !== null && _b !== void 0 ? _b : 0, (_c = _this.options.longitude) !== null && _c !== void 0 ? _c : 0);
            var mapOpt = new Object();
            mapOpt.center = center;
            mapOpt.mapTypeId = (_d = _this.options.mapTypeId) !== null && _d !== void 0 ? _d : 'roadmap';
            mapOpt.zoom = (_e = _this.options.zoom) !== null && _e !== void 0 ? _e : 15;
            mapOpt.zoomControl = true;
            // @ts-ignore
            _this.map = new google.maps.Map(container[0], mapOpt);
            if (_this.options.markerTitle != null) {
                var markerOpt = new Object();
                var lat = _this.options.markerLatitude;
                if (lat == null) {
                    lat = (_f = _this.options.latitude) !== null && _f !== void 0 ? _f : 0;
                }
                var lon = _this.options.markerLongitude;
                if (lon == null) {
                    lon = (_g = _this.options.longitude) !== null && _g !== void 0 ? _g : 0;
                }
                // @ts-ignore
                markerOpt.position = new google.maps.LatLng(lat, lon);
                markerOpt.map = _this.map;
                markerOpt.title = _this.options.markerTitle;
                markerOpt.animation = 2;
                // @ts-ignore
                new google.maps.Marker(markerOpt);
            }
            LazyLoadHelper.executeOnceWhenShown(container, function () {
                // @ts-ignore
                google.maps.event.trigger(_this.map, 'resize', []);
                _this.map.setCenter(center);
                // in case it wasn't visible (e.g. in dialog)
            });
            return _this;
        }
        GoogleMap.prototype.get_map = function () {
            return this.map;
        };
        GoogleMap = __decorate([
            Decorators.registerEditor('Serenity.GoogleMap', []),
            Decorators.element('<div/>')
        ], GoogleMap);
        return GoogleMap;
    }(Widget));

    var Select2AjaxEditor = /** @class */ (function (_super) {
        __extends(Select2AjaxEditor, _super);
        function Select2AjaxEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.pageSize = 50;
            var emptyItemText = _this.emptyItemText();
            if (emptyItemText != null)
                hidden.attr("placeholder", emptyItemText);
            hidden.select2(_this.getSelect2Options());
            hidden.attr("type", "text"); // jquery validate to work
            hidden.on("change." + _this.uniqueName, function (e, x) {
                if (WX.hasOriginalEvent(e) || !x) {
                    if (ValidationHelper.getValidator(hidden) != null)
                        hidden.valid();
                }
            });
            return _this;
        }
        Select2AjaxEditor.prototype.emptyItemText = function () {
            var txt = this.element.attr('placeholder');
            if (txt == null) {
                txt = text('Controls.SelectEditor.EmptyItemText');
            }
            return txt;
        };
        Select2AjaxEditor.prototype.getService = function () {
            throw new Error("Not implemented!");
        };
        Select2AjaxEditor.prototype.query = function (request, callback) {
            var options = {
                blockUI: false,
                service: this.getService() + '/List',
                request: request,
                onSuccess: function (response) {
                    callback(response);
                }
            };
            this.executeQuery(options);
        };
        Select2AjaxEditor.prototype.executeQuery = function (options) {
            serviceCall(options);
        };
        Select2AjaxEditor.prototype.queryByKey = function (key, callback) {
            var options = {
                blockUI: false,
                service: this.getService() + '/Retrieve',
                request: { EntityId: key },
                onSuccess: function (response) {
                    callback(response.Entity);
                }
            };
            this.executeQueryByKey(options);
        };
        Select2AjaxEditor.prototype.executeQueryByKey = function (options) {
            serviceCall(options);
        };
        Select2AjaxEditor.prototype.getItemKey = function (item) {
            return null;
        };
        Select2AjaxEditor.prototype.getItemText = function (item) {
            return null;
        };
        Select2AjaxEditor.prototype.getTypeDelay = function () {
            return 500;
        };
        Select2AjaxEditor.prototype.getSelect2Options = function () {
            var _this = this;
            var emptyItemText = this.emptyItemText();
            var queryTimeout = 0;
            return {
                minimumResultsForSearch: 10,
                placeHolder: (!isEmptyOrNull(emptyItemText) ? emptyItemText : null),
                allowClear: isValue(emptyItemText),
                query: function (query) {
                    var request = {
                        ContainsText: trimToNull(query.term), Skip: (query.page - 1) * _this.pageSize, Take: _this.pageSize + 1
                    };
                    if (queryTimeout !== 0) {
                        window.clearTimeout(queryTimeout);
                    }
                    queryTimeout = window.setTimeout(function () {
                        _this.query(request, function (response) {
                            query.callback({
                                results: response.Entities.slice(0, _this.pageSize).map(function (x) {
                                    return { id: _this.getItemKey(x), text: _this.getItemText(x), source: x };
                                }),
                                more: response.Entities.length >= _this.pageSize
                            });
                        });
                    }, _this.getTypeDelay());
                },
                initSelection: function (element, callback) {
                    var val = element.val();
                    if (isEmptyOrNull(val)) {
                        callback(null);
                        return;
                    }
                    _this.queryByKey(val, function (result) {
                        callback((result == null ? null : {
                            id: _this.getItemKey(result),
                            text: _this.getItemText(result),
                            source: result
                        }));
                    });
                }
            };
        };
        Select2AjaxEditor.prototype.addInplaceCreate = function (title) {
            var self = this;
            $('<a><b/></a>').addClass('inplace-button inplace-create')
                .attr('title', title).insertAfter(this.element).click(function (e) {
                self.inplaceCreateClick(e);
            });
            this.get_select2Container().add(this.element)
                .addClass('has-inplace-button');
        };
        Select2AjaxEditor.prototype.inplaceCreateClick = function (e) {
        };
        Select2AjaxEditor.prototype.get_select2Container = function () {
            return this.element.prevAll('.select2-container');
        };
        Select2AjaxEditor.prototype.get_value = function () {
            return safeCast(this.element.select2('val'), String);
        };
        Object.defineProperty(Select2AjaxEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        Select2AjaxEditor.prototype.set_value = function (value) {
            if (value !== this.get_value()) {
                var el = this.element;
                el.select2('val', value);
                el.data('select2-change-triggered', true);
                try {
                    el.triggerHandler('change', [true]); // valueSet: true
                }
                finally {
                    el.data('select2-change-triggered', false);
                }
            }
        };
        Select2AjaxEditor = __decorate([
            Decorators.registerEditor('Serenity.Select2AjaxEditor', [IStringValue]),
            Decorators.element('<input type="hidden" />')
        ], Select2AjaxEditor);
        return Select2AjaxEditor;
    }(Widget));

    var index = {
        __proto__: null,
        IBooleanValue: IBooleanValue,
        IDoubleValue: IDoubleValue,
        IDialog: IDialog,
        IEditDialog: IEditDialog,
        IGetEditValue: IGetEditValue,
        IReadOnly: IReadOnly,
        ISetEditValue: ISetEditValue,
        IStringValue: IStringValue,
        IValidateRequired: IValidateRequired,
        ISlickFormatter: ISlickFormatter,
        EnumKeyAttribute: EnumKeyAttribute,
        DisplayNameAttribute: DisplayNameAttribute,
        CategoryAttribute: CategoryAttribute,
        ColumnsKeyAttribute: ColumnsKeyAttribute,
        CssClassAttribute: CssClassAttribute,
        DefaultValueAttribute: DefaultValueAttribute,
        DialogTypeAttribute: DialogTypeAttribute,
        EditorAttribute: EditorAttribute,
        EditorOptionAttribute: EditorOptionAttribute,
        EditorTypeAttributeBase: EditorTypeAttributeBase,
        EditorTypeAttribute: EditorTypeAttribute,
        ElementAttribute: ElementAttribute,
        EntityTypeAttribute: EntityTypeAttribute,
        FilterableAttribute: FilterableAttribute,
        FlexifyAttribute: FlexifyAttribute,
        FormKeyAttribute: FormKeyAttribute,
        GeneratedCodeAttribute: GeneratedCodeAttribute,
        HiddenAttribute: HiddenAttribute,
        HintAttribute: HintAttribute,
        IdPropertyAttribute: IdPropertyAttribute,
        InsertableAttribute: InsertableAttribute,
        IsActivePropertyAttribute: IsActivePropertyAttribute,
        ItemNameAttribute: ItemNameAttribute,
        LocalTextPrefixAttribute: LocalTextPrefixAttribute,
        MaximizableAttribute: MaximizableAttribute,
        MaxLengthAttribute: MaxLengthAttribute,
        NamePropertyAttribute: NamePropertyAttribute,
        OneWayAttribute: OneWayAttribute,
        OptionAttribute: OptionAttribute,
        OptionsTypeAttribute: OptionsTypeAttribute,
        PanelAttribute: PanelAttribute,
        PlaceholderAttribute: PlaceholderAttribute,
        ReadOnlyAttribute: ReadOnlyAttribute,
        RequiredAttribute: RequiredAttribute,
        ResizableAttribute: ResizableAttribute,
        ResponsiveAttribute: ResponsiveAttribute,
        ServiceAttribute: ServiceAttribute,
        UpdatableAttribute: UpdatableAttribute,
        get Decorators () { return Decorators; },
        get Criteria () { return Criteria; },
        get ReflectionUtils () { return ReflectionUtils; },
        get DialogTypeRegistry () { return DialogTypeRegistry; },
        get EditorTypeRegistry () { return EditorTypeRegistry; },
        get EnumTypeRegistry () { return EnumTypeRegistry; },
        PrefixedContext: PrefixedContext,
        reactPatch: reactPatch,
        Widget: Widget,
        TemplatedWidget: TemplatedWidget,
        get LazyLoadHelper () { return LazyLoadHelper; },
        get SubDialogHelper () { return SubDialogHelper; },
        get UploadHelper () { return UploadHelper; },
        PopupMenuButton: PopupMenuButton,
        PopupToolButton: PopupToolButton,
        Toolbar: Toolbar,
        get EditorUtils () { return EditorUtils; },
        CascadedWidgetLink: CascadedWidgetLink,
        get ValidationHelper () { return ValidationHelper; },
        get VX () { return VX; },
        TemplatedPanel: TemplatedPanel,
        get TabsExtensions () { return TabsExtensions; },
        get ReflectionOptionsSetter () { return ReflectionOptionsSetter; },
        PropertyGrid: PropertyGrid,
        PropertyPanel: PropertyPanel,
        StringEditor: StringEditor,
        PasswordEditor: PasswordEditor,
        TextAreaEditor: TextAreaEditor,
        BooleanEditor: BooleanEditor,
        DecimalEditor: DecimalEditor,
        IntegerEditor: IntegerEditor,
        datePickerIconSvg: datePickerIconSvg,
        DateEditor: DateEditor,
        DateTimeEditor: DateTimeEditor,
        TimeEditor: TimeEditor,
        EmailEditor: EmailEditor,
        EmailAddressEditor: EmailAddressEditor,
        URLEditor: URLEditor,
        RadioButtonEditor: RadioButtonEditor,
        Select2Editor: Select2Editor,
        SelectEditor: SelectEditor,
        DateYearEditor: DateYearEditor,
        EnumEditor: EnumEditor,
        LookupEditorBase: LookupEditorBase,
        LookupEditor: LookupEditor,
        ServiceLookupEditorBase: ServiceLookupEditorBase,
        ServiceLookupEditor: ServiceLookupEditor,
        HtmlContentEditor: HtmlContentEditor,
        HtmlNoteContentEditor: HtmlNoteContentEditor,
        HtmlReportContentEditor: HtmlReportContentEditor,
        MaskedEditor: MaskedEditor,
        Recaptcha: Recaptcha,
        FileUploadEditor: FileUploadEditor,
        ImageUploadEditor: ImageUploadEditor,
        MultipleFileUploadEditor: MultipleFileUploadEditor,
        MultipleImageUploadEditor: MultipleImageUploadEditor,
        QuickFilterBar: QuickFilterBar,
        QuickSearchInput: QuickSearchInput,
        get DialogExtensions () { return DialogExtensions; },
        TemplatedDialog: TemplatedDialog,
        PropertyDialog: PropertyDialog,
        EntityDialog: EntityDialog,
        get FilterOperators () { return FilterOperators; },
        FilterStore: FilterStore,
        IFiltering: IFiltering,
        IQuickFiltering: IQuickFiltering,
        BaseFiltering: BaseFiltering,
        BaseEditorFiltering: BaseEditorFiltering,
        DateFiltering: DateFiltering,
        BooleanFiltering: BooleanFiltering,
        DateTimeFiltering: DateTimeFiltering,
        DecimalFiltering: DecimalFiltering,
        EditorFiltering: EditorFiltering,
        EnumFiltering: EnumFiltering,
        IntegerFiltering: IntegerFiltering,
        LookupFiltering: LookupFiltering,
        ServiceLookupFiltering: ServiceLookupFiltering,
        StringFiltering: StringFiltering,
        get FilteringTypeRegistry () { return FilteringTypeRegistry; },
        FilterWidgetBase: FilterWidgetBase,
        FilterPanel: FilterPanel,
        FilterDialog: FilterDialog,
        FilterDisplayBar: FilterDisplayBar,
        SlickPager: SlickPager,
        GridRowSelectionMixin: GridRowSelectionMixin,
        GridRadioSelectionMixin: GridRadioSelectionMixin,
        get GridSelectAllButtonHelper () { return GridSelectAllButtonHelper; },
        get GridUtils () { return GridUtils; },
        get PropertyItemSlickConverter () { return PropertyItemSlickConverter; },
        get SlickFormatting () { return SlickFormatting; },
        get SlickHelper () { return SlickHelper; },
        get SlickTreeHelper () { return SlickTreeHelper; },
        IInitializeColumn: IInitializeColumn,
        BooleanFormatter: BooleanFormatter,
        CheckboxFormatter: CheckboxFormatter,
        DateFormatter: DateFormatter,
        DateTimeFormatter: DateTimeFormatter,
        EnumFormatter: EnumFormatter,
        FileDownloadFormatter: FileDownloadFormatter,
        MinuteFormatter: MinuteFormatter,
        NumberFormatter: NumberFormatter,
        UrlFormatter: UrlFormatter,
        get FormatterTypeRegistry () { return FormatterTypeRegistry; },
        DataGrid: DataGrid,
        ColumnPickerDialog: ColumnPickerDialog,
        EntityGrid: EntityGrid,
        TreeGridMixin: TreeGridMixin,
        CheckTreeEditor: CheckTreeEditor,
        CheckLookupEditor: CheckLookupEditor,
        get Reporting () { return Reporting; },
        AsyncLookupEditor: AsyncLookupEditor,
        ScriptContext: ScriptContext,
        IAsyncInit: IAsyncInit,
        get WX () { return WX; },
        Flexify: Flexify,
        GoogleMap: GoogleMap,
        Select2AjaxEditor: Select2AjaxEditor
    };

    var Aggregators;
    (function (Aggregators) {
        function Avg(field) {
            this.field_ = field;
            this.init = function () {
                this.count_ = 0;
                this.nonNullCount_ = 0;
                this.sum_ = 0;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                this.count_++;
                if (val != null && val !== "" && !isNaN(val)) {
                    this.nonNullCount_++;
                    this.sum_ += parseFloat(val);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.avg) {
                    groupTotals.avg = {};
                }
                if (this.nonNullCount_ != 0) {
                    groupTotals.avg[this.field_] = this.sum_ / this.nonNullCount_;
                }
            };
        }
        Aggregators.Avg = Avg;
        function WeightedAvg(field, weightedField) {
            this.field_ = field;
            this.weightedField_ = weightedField;
            this.init = function () {
                this.sum_ = 0;
                this.weightedSum_ = 0;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                var valWeighted = item[this.weightedField_];
                if (this.isValid(val) && this.isValid(valWeighted)) {
                    this.weightedSum_ += parseFloat(valWeighted);
                    this.sum_ += parseFloat(val) * parseFloat(valWeighted);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.avg) {
                    groupTotals.avg = {};
                }
                if (this.sum_ && this.weightedSum_) {
                    groupTotals.avg[this.field_] = this.sum_ / this.weightedSum_;
                }
            };
            this.isValid = function (val) {
                return val !== null && val !== "" && !isNaN(val);
            };
        }
        Aggregators.WeightedAvg = WeightedAvg;
        function Min(field) {
            this.field_ = field;
            this.init = function () {
                this.min_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    if (this.min_ == null || val < this.min_) {
                        this.min_ = val;
                    }
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.min) {
                    groupTotals.min = {};
                }
                groupTotals.min[this.field_] = this.min_;
            };
        }
        Aggregators.Min = Min;
        function Max(field) {
            this.field_ = field;
            this.init = function () {
                this.max_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    if (this.max_ == null || val > this.max_) {
                        this.max_ = val;
                    }
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.max) {
                    groupTotals.max = {};
                }
                groupTotals.max[this.field_] = this.max_;
            };
        }
        Aggregators.Max = Max;
        function Sum(field) {
            this.field_ = field;
            this.init = function () {
                this.sum_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    this.sum_ += parseFloat(val);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.sum) {
                    groupTotals.sum = {};
                }
                groupTotals.sum[this.field_] = this.sum_;
            };
        }
        Aggregators.Sum = Sum;
    })(Aggregators || (Aggregators = {}));

    var index$1 = {
        __proto__: null,
        get Aggregators () { return Aggregators; },
        RemoteView: RemoteView
    };

    function jQueryPatch($) {
        function applyJQueryUIFixes() {
            if (typeof $ == "undefined" || !$.ui || !$.ui.dialog || !$.ui.dialog.prototype)
                return false;
            $.ui.dialog.prototype._allowInteraction = function (event) {
                if ($(event.target).closest(".ui-dialog").length) {
                    return true;
                }
                return !!$(event.target).closest(".ui-datepicker, .select2-drop, .cke, .cke_dialog, #support-modal").length;
            };
            (function (orig) {
                $.ui.dialog.prototype._focusTabbable = function () {
                    if ($(document.body).hasClass('mobile-device')) {
                        this.uiDialog && this.uiDialog.focus();
                        return;
                    }
                    orig.call(this);
                };
            })($.ui.dialog.prototype._focusTabbable);
            (function (orig) {
                $.ui.dialog.prototype._createTitlebar = function () {
                    orig.call(this);
                    this.uiDialogTitlebar.find('.ui-dialog-titlebar-close').html('<i class="fa fa-times" />');
                };
            })($.ui.dialog.prototype._createTitlebar);
        }
        !applyJQueryUIFixes() && typeof $ !== "undefined" && $(applyJQueryUIFixes);
        if (typeof $ !== "undefined") {
            // for backward compatibility
            if (!$.toJSON)
                $.toJSON = JSON.stringify;
            if (!$.parseJSON)
                $.parseJSON = JSON.parse;
            $.cleanData = (function (orig) {
                return function (elems) {
                    var events, elem, i;
                    var cloned = elems;
                    for (i = 0; (elem = cloned[i]) != null; i++) {
                        try {
                            events = $._data(elem, "events");
                            if (events && events.remove) {
                                // html collection might change during remove event, so clone it!
                                if (cloned === elems)
                                    cloned = Array.prototype.slice.call(elems);
                                $(elem).triggerHandler("remove");
                                delete events.remove;
                            }
                        }
                        catch (e) { }
                    }
                    orig(elems);
                };
            })($.cleanData);
        }
    }

    function promisePatch() {
        if (typeof Promise === "undefined") {
            // @ts-ignore check for global
            if (typeof (RSVP) !== "undefined")
                Promise = RSVP;
            else if (typeof ($) !== "undefined") {
                Promise = $.Deferred;
                Promise.resolve = function (value) {
                    return $.Deferred().resolveWith(value);
                };
            }
        }
    }

    function vuePatch(Vue) {
        function vueIntegration() {
            // @ts-ignore
            if (typeof Vue === "undefined")
                return false;
            // @ts-ignore
            Vue.component('editor', {
                props: {
                    type: {
                        type: String,
                        required: true,
                    },
                    id: {
                        type: String,
                        required: false
                    },
                    name: {
                        type: String,
                        required: false
                    },
                    placeholder: {
                        type: String,
                        required: false
                    },
                    value: {
                        required: false
                    },
                    options: {
                        required: false
                    },
                    maxLength: {
                        required: false
                    }
                },
                render: function (createElement) {
                    var editorType = EditorTypeRegistry.get(this.type);
                    var elementAttr = getAttributes(editorType, ElementAttribute, true);
                    var elementHtml = ((elementAttr.length > 0) ? elementAttr[0].value : '<input/>');
                    var domProps = {};
                    var element = $(elementHtml)[0];
                    var attrs = element.attributes;
                    for (var i = 0; i < attrs.length; i++) {
                        var attr = attrs.item(i);
                        domProps[attr.name] = attr.value;
                    }
                    if (this.id != null)
                        domProps.id = this.id;
                    if (this.name != null)
                        domProps.name = this.name;
                    if (this.placeholder != null)
                        domProps.placeholder = this.placeholder;
                    var el = createElement(element.tagName, {
                        domProps: domProps
                    });
                    this.$editorType = editorType;
                    return el;
                },
                watch: {
                    value: function (v) {
                        EditorUtils.setValue(this.$widget, v);
                    }
                },
                mounted: function () {
                    var self = this;
                    this.$widget = new this.$editorType($(this.$el), this.options);
                    this.$widget.initialize();
                    if (this.maxLength) {
                        var widget = this.$widget;
                        if (widget.element.is(':input')) {
                            if (this.maxLength > 0)
                                widget.element.attr('maxlength', this.maxLength);
                            else
                                widget.element.removeAttr('maxlength');
                        }
                    }
                    if (this.options)
                        ReflectionOptionsSetter.set(this.$widget, this.options);
                    if (this.value != null)
                        EditorUtils.setValue(this.$widget, this.value);
                    if ($(this.$el).data('select2'))
                        this.$widget.changeSelect2(function () {
                            self.$emit('input', EditorUtils.getValue(self.$widget));
                        });
                    else
                        this.$widget.change(function () {
                            self.$emit('input', EditorUtils.getValue(self.$widget));
                        });
                },
                destroyed: function () {
                    if (this.$widget) {
                        this.$widget.destroy();
                        this.$widget = null;
                    }
                }
            });
            return true;
        }
        // @ts-ignore
        !vueIntegration() && typeof $ !== "undefined" && $(vueIntegration);
    }

    if (typeof jQuery === "function") {
        jQueryPatch(jQuery);
    }
    promisePatch();
    // @ts-ignore
    if (typeof Vue == "function")
        // @ts-ignore
        vuePatch(Vue);

    exports.Q = exports.Q || {}; extend(exports.Q, indexAll);
    exports.Serenity = exports.Serenity || {}; extend(exports.Serenity, index);
    exports.Slick = exports.Slick || {}; extend(exports.Slick, index$1);
    exports.__asyncDelegator = exports.__asyncDelegator || __asyncDelegator;
    exports.__asyncGenerator = exports.__asyncGenerator || __asyncGenerator;
    exports.__asyncValues = exports.__asyncValues || __asyncValues;
    exports.__await = exports.__await || __await;
    exports.__awaiter = exports.__awaiter || __awaiter;
    exports.__classPrivateFieldGet = exports.__classPrivateFieldGet || __classPrivateFieldGet;
    exports.__classPrivateFieldSet = exports.__classPrivateFieldSet || __classPrivateFieldSet;
    exports.__createBinding = exports.__createBinding || __createBinding;
    exports.__decorate = exports.__decorate || __decorate;
    exports.__exportStar = exports.__exportStar || __exportStar;
    exports.__extends = exports.__extends || __extends;
    exports.__generator = exports.__generator || __generator;
    exports.__importDefault = exports.__importDefault || __importDefault;
    exports.__importStar = exports.__importStar || __importStar;
    exports.__makeTemplateObject = exports.__makeTemplateObject || __makeTemplateObject;
    exports.__metadata = exports.__metadata || __metadata;
    exports.__param = exports.__param || __param;
    exports.__read = exports.__read || __read;
    exports.__rest = exports.__rest || __rest;
    exports.__spread = exports.__spread || __spread;
    exports.__spreadArrays = exports.__spreadArrays || __spreadArrays;
    exports.__values = exports.__values || __values;

    Object.defineProperty(exports, '__esModule', { value: true });

}(this.window = this.window || {}, $));
//# sourceMappingURL=Serenity.CoreLib.js.map
