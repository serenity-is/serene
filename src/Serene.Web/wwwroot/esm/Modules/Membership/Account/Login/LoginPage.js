import{c}from"../../../../_chunks/chunk-LJ7TVK7G.js";import{a as s}from"../../../../_chunks/chunk-DCANN3W3.js";import{a as l,b as d,e as m,f as g}from"../../../../_chunks/chunk-K3EI6ARL.js";var u=d(g(),1),e=d(m(),1);$(function(){var n,t,o;var i=new a($("#LoginPanel")).init();i.element.find(".forgot-password").appendTo(".field.Password"),(n=document.getElementById("IsPublicDemo"))!=null&&n.value&&(i.byId("Username").val("admin").attr("placeholder","admin"),i.byId("Password").val("serenity").attr("placeholder","serenity")),(t=document.getElementById("Activated"))!=null&&t.value&&(i.byId("Username").val((o=document.getElementById("Activated"))==null?void 0:o.value),i.byId("Password").focus())});var a=class extends u.PropertyPanel{getFormKey(){return c.formKey}constructor(n){super(n),this.byId("LoginButton").click(t=>{if(t.preventDefault(),!!this.validateForm()){var o=this.getSaveEntity();(0,e.serviceCall)({url:(0,e.resolveUrl)("~/Account/Login"),request:o,onSuccess:()=>{this.redirectToReturnUrl()},onError:r=>{if(r!=null&&r.Error!=null&&r.Error.Code=="RedirectUserTo"){window.location.href=r.Error.Arguments;return}if(r!=null&&r.Error!=null&&!(0,e.isEmptyOrNull)(r.Error.Message)){(0,e.notifyError)(r.Error.Message),$("#Password").focus();return}e.ErrorHandling.showServiceError(r.Error)}})}})}redirectToReturnUrl(){var n=(0,e.parseQueryString)(),t=n.returnUrl||n.ReturnUrl;if(t){var o=window.location.hash;o!=null&&o!="#"&&(t+=o),window.location.href=t}else window.location.href=(0,e.resolveUrl)("~/")}getTemplate(){return`
<h2 class="text-center p-4">
    <img src="${(0,e.resolveUrl)("~/Content/site/images/serenity-logo-w-128.png")}"
        class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
        width="50" height="50" /> Serene
</h2>

<div class="s-Panel p-4">
    <h5 class="text-center my-4">${s.Forms.Membership.Login.LoginToYourAccount}</h5>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <div class="px-field">
            <a class="float-end text-decoration-none" href="${(0,e.resolveUrl)("~/Account/ForgotPassword")}">
                ${s.Forms.Membership.Login.ForgotPassword}
            </a>
        </div>
        <div class="px-field">
            <button id="~_LoginButton" type="submit" class="btn btn-primary my-3 w-100">
                ${s.Forms.Membership.Login.SignInButton}
            </button>
        </div>
    </form>
</div>

<div class="text-center mt-2">
    <a class="text-decoration-none" href="${(0,e.resolveUrl)("~/Account/SignUp")}">${(0,e.text)("Forms.Membership.Login.SignUpButton")}</a>
</div>   
`}};l(a,"LoginPanel");
//# sourceMappingURL=LoginPage.js.map
