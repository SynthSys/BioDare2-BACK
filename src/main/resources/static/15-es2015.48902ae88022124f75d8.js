(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{jcJX:function(e,t,r){"use strict";r.r(t),r.d(t,"AccountModule",(function(){return le}));var s=r("ofXK"),a=r("tyNb"),i=r("AytR"),n=r("fXoL"),o=r("naqj"),c=r("3Pt+"),d=r("2Vo4");let l=(()=>{class e{constructor(e){this.scriptLoaded=!1,this.readySubject=new d.a(!1),window.reCaptchaOnloadCallback=()=>e.run(this.onloadCallback.bind(this))}getReady(e){if(!this.scriptLoaded){this.scriptLoaded=!0;const t=document.body,r=document.createElement("script");r.innerHTML="",r.src="https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit"+(e?"&hl="+e:""),r.async=!0,r.defer=!0,t.appendChild(r)}return this.readySubject.asObservable()}onloadCallback(){this.readySubject.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(n.Xb(n.B))},e.\u0275prov=n.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const b=["target"];let u=(()=>{class e{constructor(e,t){this._zone=e,this._captchaService=t,this.site_key=null,this.theme="light",this.type="image",this.size="normal",this.tabindex=0,this.language=null,this.captchaResponse=new n.o,this.captchaExpired=new n.o,this.widgetId=null}ngOnInit(){this._captchaService.getReady(this.language).subscribe(e=>{e&&(this.widgetId=window.grecaptcha.render(this.targetRef.nativeElement,{sitekey:this.site_key,theme:this.theme,type:this.type,size:this.size,tabindex:this.tabindex,callback:e=>this._zone.run(this.recaptchaCallback.bind(this,e)),"expired-callback":()=>this._zone.run(this.recaptchaExpiredCallback.bind(this))}))})}reset(){null!==this.widgetId&&window.grecaptcha.reset(this.widgetId)}getResponse(){return this.widgetId?window.grecaptcha.getResponse(this.targetRef.nativeElement):null}recaptchaCallback(e){this.captchaResponse.emit(e)}recaptchaExpiredCallback(){this.captchaExpired.emit()}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.B),n.Nb(l))},e.\u0275cmp=n.Hb({type:e,selectors:[["bd2-recaptcha"]],viewQuery:function(e,t){var r;1&e&&n.xc(b,!0),2&e&&n.pc(r=n.ac())&&(t.targetRef=r.first)},inputs:{site_key:"site_key",theme:"theme",type:"type",size:"size",tabindex:"tabindex",language:"language"},outputs:{captchaResponse:"captchaResponse",captchaExpired:"captchaExpired"},decls:2,vars:0,consts:[["target",""]],template:function(e,t){1&e&&n.Ob(0,"div",null,0)},encapsulation:2}),e})();const m=["recaptcha"];function p(e,t){if(1&e&&(n.Tb(0,"div",3),n.Dc(1),n.Sb()),2&e){const e=n.dc();n.Bb(1),n.Fc("",e.msg," ")}}function h(e,t){if(1&e&&(n.Tb(0,"div",4),n.Dc(1),n.Sb()),2&e){const e=n.dc();n.Bb(1),n.Fc("",e.errMsg," ")}}function f(e,t){if(1&e){const e=n.Ub();n.Tb(0,"form",null,5),n.Tb(2,"div",6),n.Tb(3,"label",7),n.Dc(4,"Login or email"),n.Sb(),n.Tb(5,"input",8),n.Zb("ngModelChange",(function(t){return n.sc(e),n.dc().identifier=t})),n.Sb(),n.Sb(),n.Tb(6,"div",6),n.Tb(7,"bd2-recaptcha",9,10),n.Zb("captchaResponse",(function(t){return n.sc(e),n.dc().captcha(t)}))("captchaExpired",(function(){return n.sc(e),n.dc().captchaExpired()})),n.Sb(),n.Tb(9,"div",11),n.Dc(10," Captcha selection is needed "),n.Sb(),n.Sb(),n.Tb(11,"button",12),n.Zb("click",(function(){return n.sc(e),n.dc().request()})),n.Dc(12,"Send "),n.Sb(),n.Sb()}if(2&e){const e=n.qc(1),t=n.dc();n.Bb(5),n.jc("ngModel",t.identifier),n.Bb(2),n.jc("site_key",t.captchaSiteKey),n.Bb(2),n.jc("hidden",!t.missingCaptcha),n.Bb(2),n.jc("disabled",!e.valid)}}let g=(()=>{class e{constructor(e){this.userService=e,this.requested=!1,this.captchaSiteKey=i.a.captchaSiteKey}ngOnInit(){}captcha(e){this.gRecaptchaResponse=e,e&&(this.missingCaptcha=!1)}captchaExpired(){this.gRecaptchaResponse=null}request(){this.identifier&&""!==this.identifier.trim()&&(this.msg=void 0,this.errMsg=void 0,this.userService.requestReset(this.identifier,this.gRecaptchaResponse).then(e=>{this.msg="Reset link was sent to "+e,this.requested=!0}).catch(e=>{this.errMsg=e.message?e.message:e,this.gRecaptchaResponse=null,this.recaptcha&&this.recaptcha.reset()}))}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["bd2-reset-request"]],viewQuery:function(e,t){var r;1&e&&n.Ic(m,!0),2&e&&n.pc(r=n.ac())&&(t.recaptcha=r.first)},decls:6,vars:3,consts:[["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-success"],[1,"alert","alert-danger"],["reminderForm","ngForm"],[1,"form-group"],["for","identifier"],["type","text","required","","id","identifier","name","identifier",1,"form-control",3,"ngModel","ngModelChange"],[3,"site_key","captchaResponse","captchaExpired"],["recaptcha",""],[1,"alert","alert-danger",3,"hidden"],["type","submit",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(n.Tb(0,"div"),n.Tb(1,"h3"),n.Dc(2,"Forgotten password"),n.Sb(),n.Bc(3,p,2,1,"div",0),n.Bc(4,h,2,1,"div",1),n.Bc(5,f,13,4,"form",2),n.Sb()),2&e&&(n.Bb(3),n.jc("ngIf",t.msg),n.Bb(1),n.jc("ngIf",t.errMsg),n.Bb(1),n.jc("ngIf",!t.requested))},directives:[s.m,c.D,c.r,c.s,c.d,c.z,c.q,c.t,u],encapsulation:2}),e})();const w=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,v=/^[a-z]+$/,S=/^[A-Z]+$/,T=/^[0-9]+$/;function y(e){return!e||e.length<8||!!v.test(e)||!!S.test(e)||!!T.test(e)}function B(e){return y(e)?{"password-weak":!0}:null}function k(e){return e.password===e.password2?null:{"password-mismatch":!0}}function N(e){return t=(t=e)?t.toLocaleLowerCase():"",w.test(t)?null:{pattern:"Not valid email format"};var t}function D(e,t){if(1&e&&(n.Tb(0,"div",3),n.Dc(1),n.Sb()),2&e){const e=n.dc();n.Bb(1),n.Fc("",e.msg," ")}}function I(e,t){if(1&e&&(n.Tb(0,"div",4),n.Dc(1),n.Sb()),2&e){const e=n.dc();n.Bb(1),n.Fc("",e.errMsg," ")}}function F(e,t){if(1&e){const e=n.Ub();n.Tb(0,"form",null,5),n.Tb(2,"div",6),n.Tb(3,"label",7),n.Dc(4,"Password"),n.Sb(),n.Tb(5,"input",8,9),n.Zb("ngModelChange",(function(t){return n.sc(e),n.dc(2).password=t})),n.Sb(),n.Tb(7,"div",10),n.Dc(8," Password must be at least 8 long, containing a digit or symbol or capital letter "),n.Sb(),n.Sb(),n.Tb(9,"div",6),n.Tb(10,"label",11),n.Dc(11,"Repeat password"),n.Sb(),n.Tb(12,"input",12,13),n.Zb("ngModelChange",(function(t){return n.sc(e),n.dc(2).password2=t})),n.Sb(),n.Tb(14,"div",10),n.Dc(15," Passwords do not match "),n.Sb(),n.Sb(),n.Tb(16,"button",14),n.Zb("click",(function(){return n.sc(e),n.dc(2).reset()})),n.Dc(17,"Reset "),n.Sb(),n.Sb()}if(2&e){const e=n.qc(1),t=n.qc(6),r=n.qc(13),s=n.dc(2);n.Bb(5),n.jc("ngModel",s.password),n.Bb(2),n.jc("hidden",t.pristine||!s.weakPassword()),n.Bb(5),n.jc("ngModel",s.password2),n.Bb(2),n.jc("hidden",r.pristine||s.matching()),n.Bb(2),n.jc("disabled",!e.form.valid||s.passwordProblem())}}function q(e,t){if(1&e&&(n.Tb(0,"div"),n.Bc(1,F,18,5,"form",2),n.Sb()),2&e){const e=n.dc();n.Bb(1),n.jc("ngIf",!e.requested)}}let j=(()=>{class e{constructor(e,t){this.userService=e,this.route=t,this.requested=!1}ngOnInit(){this.token=this.route.snapshot.queryParamMap.get("token"),this.token||(this.errMsg="Missing reset token")}reset(){this.token&&this.userService.resetPassword(this.password,this.token).then(e=>{this.msg="You can sign in with new password and login "+e,this.requested=!0}).catch(e=>{this.errMsg=e.message?e.message:e})}weakPassword(){return y(this.password)}matching(){return this.password===this.password2}passwordProblem(){return!!this.weakPassword()||!this.matching()}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.a),n.Nb(a.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["ng-component"]],decls:6,vars:3,consts:[["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-success"],[1,"alert","alert-danger"],["resetForm","ngForm"],[1,"form-group"],["for","password"],["type","password","required","","minlength","8","id","password","placeholder","new password","name","fPassword",1,"form-control",3,"ngModel","ngModelChange"],["fPassword","ngModel"],[1,"alert","alert-danger",3,"hidden"],["for","password2"],["type","password","id","password2","required","","placeholder","password","name","fPassword2",1,"form-control",3,"ngModel","ngModelChange"],["fPassword2","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(n.Tb(0,"div"),n.Tb(1,"h3"),n.Dc(2,"Password reset"),n.Sb(),n.Bc(3,D,2,1,"div",0),n.Bc(4,I,2,1,"div",1),n.Bc(5,q,2,1,"div",2),n.Sb()),2&e&&(n.Bb(3),n.jc("ngIf",t.msg),n.Bb(1),n.jc("ngIf",t.errMsg),n.Bb(1),n.jc("ngIf",t.token))},directives:[s.m,c.D,c.r,c.s,c.d,c.z,c.m,c.q,c.t],encapsulation:2}),e})();var C=r("6tuW");function R(e,t){1&e&&(n.Tb(0,"div",1),n.Dc(1,"Use the activation link that was sent in the email"),n.Sb())}let P=(()=>{class e{constructor(e,t,r,s){this.route=e,this.router=t,this.userService=r,this.feedback=s}ngOnInit(){this.token=this.route.snapshot.queryParamMap.get("token"),this.token&&this.userService.activate(this.token).then(e=>{this.feedback.success("Your account has been activated, use: "+e.login+" to sign in"),this.router.navigate(["/login"])}).catch(e=>{this.feedback.error(e),this.router.navigate(["/login"])})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(a.a),n.Nb(a.c),n.Nb(o.a),n.Nb(C.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","alert alert-danger danger",4,"ngIf"],[1,"alert","alert-danger","danger"]],template:function(e,t){1&e&&n.Bc(0,R,2,0,"div",0),2&e&&n.jc("ngIf",!t.token)},directives:[s.m],encapsulation:2}),e})();var x=r("LRne"),O=r("lJxs"),M=r("JIr8"),E=r("Ee+/"),z=r("Wp6s"),L=r("kmnG"),U=r("qFsG"),_=r("bSwM");const G=["recaptcha"];function A(e,t){if(1&e&&(n.Tb(0,"div",3),n.Tb(1,"h4"),n.Dc(2,"Your registration was successful."),n.Sb(),n.Dc(3," We sent you the activation link to "),n.Tb(4,"strong"),n.Dc(5),n.Sb(),n.Dc(6,", please use that link before logging in "),n.Sb()),2&e){const e=n.dc();n.Bb(5),n.Ec(e.registeredMsg)}}function Z(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Alphanumerical login, min length 5, only numbers, small letters and ._"),n.Sb())}function K(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Such login already exists"),n.Sb())}function H(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Not valid email format"),n.Sb())}function J(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Address is already being used"),n.Sb())}function $(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1," Academic email is required for the registration. Contact us if your email is not recognized as academic. "),n.Sb())}function W(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Passwords do not match"),n.Sb())}function X(e,t){if(1&e){const e=n.Ub();n.Tb(0,"div",4),n.Tb(1,"form",5,6),n.Tb(3,"div",7),n.Tb(4,"mat-form-field",8),n.Tb(5,"mat-label",9),n.Dc(6,"Login"),n.Sb(),n.Ob(7,"input",10),n.Tb(8,"mat-hint"),n.Dc(9,"Alphanumerical login, min length 5"),n.Sb(),n.Bc(10,Z,2,0,"mat-error",11),n.Bc(11,K,2,0,"mat-error",11),n.Sb(),n.Sb(),n.Tb(12,"div",7),n.Tb(13,"mat-form-field",8),n.Tb(14,"mat-label",12),n.Dc(15,"Email"),n.Sb(),n.Ob(16,"input",13),n.Bc(17,H,2,0,"mat-error",11),n.Bc(18,J,2,0,"mat-error",11),n.Bc(19,$,2,0,"mat-error",11),n.Sb(),n.Sb(),n.Tb(20,"div",14),n.Tb(21,"div",7),n.Tb(22,"mat-form-field",8),n.Tb(23,"mat-label",15),n.Dc(24,"Password"),n.Sb(),n.Ob(25,"input",16),n.Tb(26,"mat-hint"),n.Dc(27,"Password must be at least 8 long, containing a digit or symbol or capital letter"),n.Sb(),n.Tb(28,"mat-error"),n.Dc(29,"Password must be at least 8 long, containing a digit or symbol or capital letter"),n.Sb(),n.Sb(),n.Sb(),n.Tb(30,"div",7),n.Tb(31,"mat-form-field",8),n.Tb(32,"mat-label",17),n.Dc(33,"Repeat password"),n.Sb(),n.Ob(34,"input",18),n.Bc(35,W,2,0,"mat-error",11),n.Sb(),n.Sb(),n.Sb(),n.Tb(36,"div",7),n.Tb(37,"mat-form-field",8),n.Tb(38,"mat-label",19),n.Dc(39,"First Name"),n.Sb(),n.Ob(40,"input",20),n.Sb(),n.Sb(),n.Tb(41,"div",7),n.Tb(42,"mat-form-field",8),n.Tb(43,"mat-label",21),n.Dc(44,"Family Name"),n.Sb(),n.Ob(45,"input",22),n.Sb(),n.Sb(),n.Tb(46,"div",7),n.Tb(47,"mat-form-field",8),n.Tb(48,"mat-label",23),n.Dc(49,"Institution"),n.Sb(),n.Ob(50,"input",24),n.Sb(),n.Sb(),n.Tb(51,"div",7),n.Tb(52,"bd2-recaptcha",25,26),n.Zb("captchaExpired",(function(){return n.sc(e),n.dc().captchaExpired()}))("captchaResponse",(function(t){return n.sc(e),n.dc().captcha(t)})),n.Sb(),n.Tb(54,"div",27),n.Dc(55," Captcha selection is needed "),n.Sb(),n.Sb(),n.Tb(56,"div",7),n.Tb(57,"mat-checkbox",28),n.Dc(58," I agree to conditions of "),n.Tb(59,"span",29),n.Tb(60,"a",30),n.Zb("click",(function(){return n.sc(e),n.dc().helpDialog.show("service")})),n.Dc(61,"service"),n.Sb(),n.Sb(),n.Dc(62,". And I understand that unless changed my data will be shared 3 years after their registration. "),n.Sb(),n.Sb(),n.Tb(63,"button",31),n.Zb("click",(function(){return n.sc(e),n.dc().register()})),n.Dc(64," Register "),n.Sb(),n.Sb(),n.Sb()}if(2&e){const e=n.dc();n.Bb(1),n.jc("formGroup",e.userForm),n.Bb(9),n.jc("ngIf",e.userNameField.errors&&!e.userNameField.errors["login-taken"]),n.Bb(1),n.jc("ngIf",e.userNameField.errors&&e.userNameField.errors["login-taken"]),n.Bb(6),n.jc("ngIf",e.emailField.errors&&e.emailField.errors.pattern),n.Bb(1),n.jc("ngIf",e.emailField.errors&&e.emailField.errors["email-taken"]),n.Bb(1),n.jc("ngIf",e.emailField.errors&&e.emailField.errors["email-nonacademic"]),n.Bb(16),n.jc("ngIf",e.passwordsGroup.errors),n.Bb(17),n.jc("site_key",e.captchaSiteKey),n.Bb(2),n.jc("hidden",!e.missingCaptcha),n.Bb(9),n.jc("disabled",e.blocked||e.userForm.invalid)}}let Y=(()=>{class e{constructor(e,t,r,s){this.userService=e,this.feedback=t,this.fb=r,this.helpDialog=s,this.blocked=!1,this.missingCaptcha=!1,this.captchaSiteKey=i.a.captchaSiteKey}ngOnInit(){this.userForm=this.fb.group({username:[void 0,{validators:[c.B.required],asyncValidators:e=>this.availableLogin(e.value),updateOn:"blur"}],email:[void 0,{validators:[c.B.required,e=>N(e.value)],asyncValidators:e=>this.suitableEmail(e.value),updateOn:"blur"}],passwords:this.fb.group({password:[void 0,[c.B.required,e=>B(e.value)]],password2:[void 0,[c.B.required]]},{validator:e=>k(e.value)}),firstName:[void 0,[c.B.required]],lastName:[void 0,[c.B.required]],institution:[void 0,[c.B.required]],terms:[void 0,[c.B.required]]}),this.userNameField=this.userForm.get("username"),this.emailField=this.userForm.get("email"),this.passwordField=this.userForm.get("passwords.password"),this.password2Field=this.userForm.get("passwords.password2"),this.passwordsGroup=this.userForm.get("passwords")}captcha(e){this.gRecaptchaResponse=e,e&&(this.missingCaptcha=!1)}captchaExpired(){this.gRecaptchaResponse=null}availableLogin(e){return!e||e.length<5?Object(x.a)({"too-short":!0}):this.userService.availableLogin(e).pipe(Object(O.a)(t=>t?null:{"login-taken":"User "+e+" already exists"}),Object(M.a)(e=>(this.feedback.error(e),Object(x.a)({"cannot-connect":!0}))))}suitableEmail(e){return this.userService.suitableEmail(e).pipe(Object(O.a)(t=>{if(t.isFree&&t.isAcademic)return null;const r={};return t.isFree||(r["email-taken"]="Email: "+e+" is already being used"),t.isAcademic||(r["email-nonacademic"]="Academic email is required for the registration. Contact us if your email is not recognized as academic."),r}),Object(M.a)(e=>(this.feedback.error(e),Object(x.a)({"cannot-connect":!0}))))}register(){if(this.userForm.valid){if(!this.gRecaptchaResponse&&!this.emailField.value.endsWith(".cn")&&!this.emailField.value.endsWith(".tw"))return void(this.missingCaptcha=!0);const e=this.makeUserData(this.userForm.value);this.triggerRegistration(e)}}makeUserData(e){return{login:e.username,password:e.passwords.password,email:e.email,firstName:e.firstName,lastName:e.lastName,institution:e.institution,terms:e.terms,g_recaptcha_response:this.gRecaptchaResponse}}triggerRegistration(e){this.userService.register(e).then(e=>{this.registered=!0,this.registeredMsg=e.email,this.feedback.success("Registration successful")}).catch(e=>{this.feedback.error(e),this.gRecaptchaResponse=void 0,this.recaptcha&&this.recaptcha.reset()})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.a),n.Nb(C.a),n.Nb(c.e),n.Nb(E.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&n.Ic(G,!0),2&e&&n.pc(r=n.ac())&&(t.recaptcha=r.first)},decls:7,vars:2,consts:[[1,"mb-2"],["class","alert alert-success",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"alert","alert-success"],[1,"mb-4"],[3,"formGroup"],["registrationForm",""],[1,"form-group"],[1,"w-100"],["for","username"],["matInput","","formControlName","username","id","username","minlength","5","pattern","[0-9|a-z|\\._]+","placeholder","choose login","required","","type","text",1,""],[4,"ngIf"],["for","email"],["matInput","","formControlName","email","id","email","placeholder","your email","required","","type","text",1,""],["formGroupName","passwords"],["for","password"],["matInput","","formControlName","password","id","password","minlength","8","placeholder","password","required","","type","password",1,""],["for","password2"],["matInput","","formControlName","password2","id","password2","minlength","8","placeholder","password","required","","type","password",1,""],["for","firstName"],["matInput","","formControlName","firstName","id","firstName","minlength","2","placeholder","e.g. Charles","required","","type","text",1,""],["for","lastName"],["matInput","","formControlName","lastName","id","lastName","minlength","2","placeholder","e.g. Darwin","required","","type","text",1,""],["for","institution"],["matInput","","formControlName","institution","id","institution","minlength","3","placeholder","e.g. University of Edinburgh","required","","type","text",1,""],[3,"site_key","captchaExpired","captchaResponse"],["recaptcha",""],[1,"alert","alert-danger",3,"hidden"],["formControlName","terms","id","terms","required","","type","checkbox"],[2,"font-weight","bold","text-decoration","underline"],["role","button",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(n.Tb(0,"mat-card",0),n.Tb(1,"mat-card-title"),n.Tb(2,"h2"),n.Dc(3,"User registration"),n.Sb(),n.Sb(),n.Tb(4,"mat-card-content"),n.Bc(5,A,7,1,"div",1),n.Bc(6,X,65,10,"div",2),n.Sb(),n.Sb()),2&e&&(n.Bb(5),n.jc("ngIf",t.registered),n.Bb(1),n.jc("ngIf",!t.registered))},directives:[z.a,z.e,z.c,s.m,c.D,c.r,c.i,L.c,L.g,U.b,c.d,c.q,c.h,c.m,c.w,c.z,L.f,c.j,L.b,u,_.a,_.c],encapsulation:2}),e})();var Q=r("PqYM");function V(e,t){1&e&&(n.Tb(0,"div",21),n.Dc(1,"Account has been updated"),n.Sb())}function ee(e,t){if(1&e){const e=n.Ub();n.Tb(0,"mat-card",1),n.Tb(1,"mat-card-title"),n.Tb(2,"h2"),n.Dc(3),n.Sb(),n.Sb(),n.Tb(4,"mat-card-content"),n.Bc(5,V,2,0,"div",2),n.Tb(6,"form",3,4),n.Tb(8,"div",5),n.Tb(9,"mat-form-field",6),n.Tb(10,"mat-label",7),n.Dc(11,"Login"),n.Sb(),n.Ob(12,"input",8),n.Sb(),n.Sb(),n.Tb(13,"div",5),n.Tb(14,"a",9),n.Dc(15,"Change password"),n.Sb(),n.Sb(),n.Tb(16,"div",5),n.Tb(17,"mat-form-field",6),n.Tb(18,"mat-label",10),n.Dc(19,"Email"),n.Sb(),n.Ob(20,"input",11),n.Tb(21,"mat-error"),n.Dc(22,"Not valid email format"),n.Sb(),n.Sb(),n.Sb(),n.Tb(23,"div",5),n.Tb(24,"mat-form-field",6),n.Tb(25,"mat-label",12),n.Dc(26,"First Name"),n.Sb(),n.Ob(27,"input",13),n.Sb(),n.Sb(),n.Tb(28,"div",5),n.Tb(29,"mat-form-field",6),n.Tb(30,"mat-label",14),n.Dc(31,"Family Name"),n.Sb(),n.Ob(32,"input",15),n.Sb(),n.Sb(),n.Tb(33,"div",5),n.Tb(34,"mat-form-field",6),n.Tb(35,"mat-label",16),n.Dc(36,"Institution"),n.Sb(),n.Ob(37,"input",17),n.Sb(),n.Sb(),n.Tb(38,"div",5),n.Tb(39,"mat-form-field",6),n.Tb(40,"mat-label",18),n.Dc(41,"Current password"),n.Sb(),n.Ob(42,"input",19),n.Sb(),n.Sb(),n.Tb(43,"button",20),n.Zb("click",(function(){return n.sc(e),n.dc().save()})),n.Dc(44," Update "),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&e){const e=n.dc();n.Bb(3),n.Fc("Edit user: ",e.user.name,""),n.Bb(2),n.jc("ngIf",e.updated),n.Bb(1),n.jc("formGroup",e.userForm),n.Bb(37),n.jc("disabled",e.userForm.invalid)}}function te(e,t){1&e&&(n.Tb(0,"div",18),n.Dc(1,"Password has been updated"),n.Sb())}function re(e,t){1&e&&(n.Tb(0,"mat-error"),n.Dc(1,"Passwords do not match"),n.Sb())}function se(e,t){if(1&e){const e=n.Ub();n.Tb(0,"mat-card",1),n.Tb(1,"mat-card-title"),n.Tb(2,"h2"),n.Dc(3),n.Sb(),n.Sb(),n.Tb(4,"mat-card-content"),n.Bc(5,te,2,0,"div",2),n.Tb(6,"form",3,4),n.Tb(8,"div",5),n.Tb(9,"mat-form-field",6),n.Tb(10,"mat-label",7),n.Dc(11,"Login"),n.Sb(),n.Ob(12,"input",8),n.Sb(),n.Sb(),n.Tb(13,"div",9),n.Tb(14,"div",5),n.Tb(15,"mat-form-field",6),n.Tb(16,"mat-label",10),n.Dc(17,"Password"),n.Sb(),n.Ob(18,"input",11),n.Tb(19,"mat-hint"),n.Dc(20,"Password must be at least 8 long, containing a digit or symbol or capital letter"),n.Sb(),n.Tb(21,"mat-error"),n.Dc(22,"Password must be at least 8 long, containing a digit or symbol or capital letter"),n.Sb(),n.Sb(),n.Sb(),n.Tb(23,"div",5),n.Tb(24,"mat-form-field",6),n.Tb(25,"mat-label",12),n.Dc(26,"Repeat password"),n.Sb(),n.Ob(27,"input",13),n.Bc(28,re,2,0,"mat-error",14),n.Sb(),n.Sb(),n.Sb(),n.Tb(29,"div",5),n.Tb(30,"mat-form-field",6),n.Tb(31,"mat-label",15),n.Dc(32,"Current password"),n.Sb(),n.Ob(33,"input",16),n.Sb(),n.Sb(),n.Tb(34,"button",17),n.Zb("click",(function(){return n.sc(e),n.dc().save()})),n.Dc(35," Update "),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&e){const e=n.dc();n.Bb(3),n.Fc("Change password for ",e.user.name,""),n.Bb(2),n.jc("ngIf",e.updated),n.Bb(1),n.jc("formGroup",e.userForm),n.Bb(22),n.jc("ngIf",e.passwordsGroup.errors),n.Bb(6),n.jc("disabled",e.userForm.invalid)}}const ae=[{path:"",children:[{path:"edit",component:(()=>{class e{constructor(e,t,r){this.userService=e,this.feedback=t,this.fb=r,this.updated=!1}ngOnInit(){this.user=this.userService.currentUser,this.userForm=this.fb.group({username:[{value:this.user.login,disabled:!0},[c.B.required],[]],email:[this.user.email,[c.B.required,e=>N(e.value)],[]],firstName:[this.user.firstName,[c.B.required]],lastName:[this.user.lastName,[c.B.required]],institution:[this.user.institution,[c.B.required]],currentPassword:[void 0,[c.B.required]]}),this.userNameField=this.userForm.get("username"),this.emailField=this.userForm.get("email"),this.currentPasswordField=this.userForm.get("currentPassword")}save(){if(!this.userForm.valid)return;const e=this.userForm.value,t={login:this.user.login,currentPassword:e.currentPassword,email:e.email,firstName:e.firstName,lastName:e.lastName,institution:e.institution};this.updated=!1,this.userService.update(t).subscribe(e=>{this.user=e,this.currentPasswordField.reset(),this.feedback.success("User: "+e.login+" has been updated"),this.updated=!0,Object(Q.a)(5e3).subscribe(()=>this.updated=!1)},e=>{this.feedback.error(e),this.currentPasswordField.reset()})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.a),n.Nb(C.a),n.Nb(c.e))},e.\u0275cmp=n.Hb({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","mb-2",4,"ngIf"],[1,"mb-2"],["class","alert alert-success",4,"ngIf"],[3,"formGroup"],["registrationForm",""],[1,"form-group"],[1,"w-100"],["for","username"],["matInput","","formControlName","username","id","username","required","","type","text",1,""],["routerLink","/account/password"],["for","email"],["matInput","","formControlName","email","id","email","placeholder","your email","required","","type","text",1,""],["for","firstName"],["matInput","","formControlName","firstName","id","firstName","minlength","2","placeholder","e.g. Charles","required","","type","text",1,""],["for","lastName"],["matInput","","formControlName","lastName","id","lastName","minlength","2","placeholder","e.g. Darwin","required","","type","text",1,""],["for","institution"],["matInput","","formControlName","institution","id","institution","placeholder","e.g. University of Edinburgh","required","","type","text",1,""],["for","cPassword"],["matInput","","formControlName","currentPassword","id","cPassword","placeholder","current password","required","","type","password",1,""],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"alert","alert-success"]],template:function(e,t){1&e&&n.Bc(0,ee,45,4,"mat-card",0),2&e&&n.jc("ngIf",t.user&&!t.user.anonymous)},directives:[s.m,z.a,z.e,z.c,c.D,c.r,c.i,L.c,L.g,U.b,c.d,c.q,c.h,c.z,a.e,L.b,c.m],encapsulation:2}),e})()},{path:"password",component:(()=>{class e{constructor(e,t,r){this.userService=e,this.feedback=t,this.fb=r,this.updated=!1}ngOnInit(){this.user=this.userService.currentUser,this.userForm=this.fb.group({username:[{value:this.user.login,disabled:!0},[c.B.required],[]],passwords:this.fb.group({password:[void 0,[c.B.required,e=>B(e.value)]],password2:[void 0,[c.B.required]]},{validator:e=>k(e.value)}),currentPassword:[void 0,[c.B.required]]}),this.passwordsGroup=this.userForm.get("passwords")}save(){if(!this.userForm.valid)return;const e=this.userForm.value,t={login:this.user.login,currentPassword:e.currentPassword,password:e.passwords.password};this.updated=!1,this.userService.passwordUpdate(t).subscribe(e=>{this.user=e,this.userForm.reset(),this.feedback.success("User: "+e.login+" password has been updated"),this.updated=!0,Object(Q.a)(5e3).subscribe(()=>this.updated=!1)},e=>{this.userForm.reset(),this.feedback.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.a),n.Nb(C.a),n.Nb(c.e))},e.\u0275cmp=n.Hb({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","mb-2",4,"ngIf"],[1,"mb-2"],["class","alert alert-success",4,"ngIf"],[3,"formGroup"],["registrationForm",""],[1,"form-group"],[1,"w-100"],["for","username"],["matInput","","formControlName","username","id","username","required","","type","text",1,""],["formGroupName","passwords"],["for","password"],["matInput","","formControlName","password","id","password","minlength","8","placeholder","password","required","","type","password",1,""],["for","password2"],["matInput","","formControlName","password2","id","password2","minlength","8","placeholder","password","required","","type","password",1,""],[4,"ngIf"],["for","cPassword"],["matInput","","formControlName","currentPassword","id","cPassword","placeholder","current password","required","","type","password",1,""],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"alert","alert-success"]],template:function(e,t){1&e&&n.Bc(0,se,36,5,"mat-card",0),2&e&&n.jc("ngIf",t.user&&!t.user.anonymous)},directives:[s.m,z.a,z.e,z.c,c.D,c.r,c.i,L.c,L.g,U.b,c.d,c.q,c.h,c.z,c.j,c.m,L.f,L.b],encapsulation:2}),e})()},{path:"register",component:Y},{path:"activate",component:P},{path:"remind",component:g},{path:"reset",component:j}]}];let ie=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(ae)],a.f]}),e})(),ne=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[]]}),e})();var oe=r("wMBR"),ce=r("f0Cb"),de=r("NFeN");let le=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[s.c,c.k,c.y,ne,oe.a,ie,z.d,ce.b,L.e,de.b,U.c,_.b]]}),e})()}}]);