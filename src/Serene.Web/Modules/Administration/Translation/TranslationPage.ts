import { initFullHeightGridPage } from "@serenity-is/corelib"
import { TranslationGrid } from "./TranslationGrid";

$(function() {
    initFullHeightGridPage(new TranslationGrid($('#GridDiv')).element);
});