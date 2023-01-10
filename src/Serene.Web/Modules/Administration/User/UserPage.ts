import { initFullHeightGridPage } from "@serenity-is/corelib/q"
import { UserGrid } from "./UserGrid";

$(function() {
    initFullHeightGridPage(new UserGrid($('#GridDiv')).element);
});