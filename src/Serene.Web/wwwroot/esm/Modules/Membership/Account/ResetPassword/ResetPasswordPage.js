import{d as o}from"../../../../_chunks/chunk-LJ7TVK7G.js";import{a as t}from"../../../../_chunks/chunk-DCANN3W3.js";import{a as n,b as a,e as u,f as l}from"../../../../_chunks/chunk-K3EI6ARL.js";var d=a(l(),1),e=a(u(),1);$(function(){new r($("#ResetPasswordPanel"))});var r=class extends d.PropertyPanel{constructor(m){super(m);this.form=new o(this.idPrefix),this.form.NewPassword.addValidationRule(this.uniqueName,s=>{if(this.form.NewPassword.value.length<7)return(0,e.format)(t.Validation.MinRequiredPasswordLength,7)}),this.form.ConfirmPassword.addValidationRule(this.uniqueName,s=>{if(this.form.ConfirmPassword.value!==this.form.NewPassword.value)return(0,e.text)("Validation.PasswordConfirm")}),this.byId("SubmitButton").click(s=>{if(s.preventDefault(),!!this.validateForm()){var i=this.getSaveEntity();i.Token=this.byId("Token").val(),(0,e.serviceCall)({url:(0,e.resolveUrl)("~/Account/ResetPassword"),request:i,onSuccess:()=>{(0,e.information)(t.Forms.Membership.ResetPassword.Success,()=>{window.location.href=(0,e.resolveUrl)("~/Account/Login")})}})}})}getFormKey(){return o.formKey}getTemplate(){return`<h2 class="text-center p-4">
    <img src="${(0,e.resolveUrl)("~/Content/site/images/serenity-logo-w-128.png")}"
        class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
        width="50" height="50" /> Serene
</h2>

<div class="s-Panel p-4">
    <h5 class="text-center mb-4">${t.Forms.Membership.ResetPassword.FormTitle}</h5>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <button id="~_SubmitButton" type="submit" class="btn btn-primary mx-8 w-100">
            ${t.Forms.Membership.ResetPassword.SubmitButton}
        </button>
        <input type="hidden" id="~_Token" value="${document.getElementById("ResetPasswordToken").value}" />
    </form>
</div>`}};n(r,"ResetPasswordPanel");export{r as ResetPasswordPanel};
//# sourceMappingURL=ResetPasswordPage.js.map
