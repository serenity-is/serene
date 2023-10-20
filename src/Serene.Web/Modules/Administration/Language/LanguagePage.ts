import { initFullHeightGridPage } from "@serenity-is/corelib"
import { LanguageGrid } from "./LanguageGrid";

$(function() {
    initFullHeightGridPage(new LanguageGrid($('#GridDiv')).element);
});