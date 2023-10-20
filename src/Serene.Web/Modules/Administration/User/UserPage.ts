import { initFullHeightGridPage } from "@serenity-is/corelib"
import { UserGrid } from "./UserGrid";

$(function() {
    initFullHeightGridPage(new UserGrid($('#GridDiv')).element);
});