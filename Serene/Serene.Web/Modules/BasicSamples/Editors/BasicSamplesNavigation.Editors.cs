using Serenity.Navigation;
using Serene.BasicSamples.Pages;

[assembly: NavigationMenu(7930, "Basic Samples/Editors")]
[assembly: NavigationLink(7930, "Basic Samples/Editors/Changing Lookup Text", typeof(BasicSamplesController), action: "ChangingLookupText")]
[assembly: NavigationLink(7930, "Basic Samples/Editors/Filtered Lookup in Detail.", typeof(BasicSamplesController), action: "FilteredLookupInDetailDialog")]
[assembly: NavigationLink(7930, "Basic Samples/Editors/Lookup Filter by Multi Val.", typeof(BasicSamplesController), action: "LookupFilterByMultipleValues")]
[assembly: NavigationLink(7930, "Basic Samples/Editors/Select with Hardcod.Vals.", typeof(BasicSamplesController), action: "SelectWithHardcodedValues")]
[assembly: NavigationLink(7930, "Basic Samples/Editors/Static Text Block", typeof(BasicSamplesController), action: "StaticTextBlock")]
