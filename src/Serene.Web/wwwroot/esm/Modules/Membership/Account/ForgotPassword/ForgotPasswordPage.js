import{b as i}from"../../../../_chunks/chunk-LJ7TVK7G.js";import{a as t}from"../../../../_chunks/chunk-DCANN3W3.js";import{a as o,b as s,e as u,f as d}from"../../../../_chunks/chunk-K3EI6ARL.js";var n=s(d(),1),r=s(u(),1);$(function(){new e($("#ForgotPasswordPanel"))});var e=class extends n.PropertyPanel{getFormKey(){return i.formKey}constructor(m){super(m),this.byId("SubmitButton").click(a=>{if(a.preventDefault(),!!this.validateForm()){var c=this.getSaveEntity();(0,r.serviceCall)({url:(0,r.resolveUrl)("~/Account/ForgotPassword"),request:c,onSuccess:l=>{(0,r.information)(t.Forms.Membership.ForgotPassword.Success,()=>{window.location.href=(0,r.resolveUrl)("~/")})}})}})}getTemplate(){return`<h2 class="text-center p-4">
    <img src="${(0,r.resolveUrl)("~/Content/site/images/serenity-logo-w-128.png")}"
        class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
        width="50" height="50" /> Serene
</h2>

<div class="s-Panel p-4">
    <h5 class="text-center mb-4">${t.Forms.Membership.ForgotPassword.FormTitle}</h5>
    <p class="text-center">${t.Forms.Membership.ForgotPassword.FormInfo}</p>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <button id="~_SubmitButton" type="submit" class="btn btn-primary mx-8 w-100">
            ${t.Forms.Membership.ForgotPassword.SubmitButton}
        </button>
    </form>
</div>`}};o(e,"ForgotPasswordPanel");export{e as ForgotPasswordPanel};
//# sourceMappingURL=ForgotPasswordPage.js.map
