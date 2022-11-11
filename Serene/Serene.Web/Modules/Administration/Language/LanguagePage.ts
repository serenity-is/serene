import { initFullHeightGridPage } from "@serenity-is/corelib/q"
import { LanguageGrid } from "./LanguageGrid";

$(function() {
    initFullHeightGridPage(new LanguageGrid($('#GridDiv')).element);
});