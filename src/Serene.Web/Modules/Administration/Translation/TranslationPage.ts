import { initFullHeightGridPage } from "@serenity-is/corelib/q"
import { TranslationGrid } from "./TranslationGrid";

$(function() {
    initFullHeightGridPage(new TranslationGrid($('#GridDiv')).element);
});