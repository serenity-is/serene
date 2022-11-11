import { initFullHeightGridPage } from "@serenity-is/corelib/q"
import { RoleGrid } from "./RoleGrid";

$(function() {
    initFullHeightGridPage(new RoleGrid($('#GridDiv')).element);
});