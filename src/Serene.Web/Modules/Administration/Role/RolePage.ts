import { initFullHeightGridPage } from "@serenity-is/corelib"
import { RoleGrid } from "./RoleGrid";

$(function() {
    initFullHeightGridPage(new RoleGrid($('#GridDiv')).element);
});