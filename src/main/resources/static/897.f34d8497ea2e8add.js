"use strict";(self.webpackChunkbiodare2_ui=self.webpackChunkbiodare2_ui||[]).push([[897],{5897:(N,d,i)=>{i.r(d),i.d(d,{DocumentsModule:()=>s});var a=i(6895),m=i(1585),r=i(9299),l=i(1547),p=i(7246),t=i(4650),f=i(7424),h=i(5518);const g=function(e){return["/documents",e]};function v(e,n){if(1&e&&(t.TgZ(0,"li")(1,"a",6),t._uU(2),t.qZA()()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,g,o[0])),t.xp6(1),t.Oqu(o[1])}}function T(e,n){if(1&e&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.missing)}}function D(e,n){if(1&e&&t._UZ(0,"bd2-static-content",8),2&e){const o=t.oxw();t.Q6J("docName",o.document)}}class u{constructor(n,o){this.route=n,this.titleSetter=o,this.tocON=!1,this.documentOptions=l.fD}ngOnDestroy(){this.docSubscription&&this.docSubscription.unsubscribe()}ngOnInit(){this.docSubscription=this.route.paramMap.pipe((0,p.U)(n=>{let o=n.get("doc");return(!o||"all"===o)&&(o="about"),o})).subscribe(n=>{const o=(0,l.QT)(n);"about"===n&&(this.tocON=!0),o?(this.missing=void 0,this.document=n,this.setTitle(o)):(this.missing="Unknown document: "+n,this.document=void 0,this.tocON=!0)})}setTitle(n){const o=n[2]?n[2]:n[0].charAt(0).toUpperCase()+n[0].slice(1);this.titleSetter.setTitle(o)}}u.\u0275fac=function(n){return new(n||u)(t.Y36(r.gz),t.Y36(f.T))},u.\u0275cmp=t.Xpm({type:u,selectors:[["ng-component"]],decls:10,vars:4,consts:[[1,"card","mb-3"],[1,"card-header","bd-bg-primary",3,"click"],[1,"card-body",3,"hidden"],[4,"ngFor","ngForOf"],["class","alert alert-danger","role","alert","type","danger",4,"ngIf"],[3,"docName",4,"ngIf"],[3,"routerLink"],["role","alert","type","danger",1,"alert","alert-danger"],[3,"docName"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"BioDare2 Documentation"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1),t.NdJ("click",function(){return o.tocON=!o.tocON}),t._uU(4,"Table of Content"),t.qZA(),t.TgZ(5,"div",2)(6,"ul"),t.YNc(7,v,3,4,"li",3),t.qZA()()(),t.YNc(8,T,2,1,"div",4),t.YNc(9,D,1,1,"bd2-static-content",5)),2&n&&(t.xp6(5),t.Q6J("hidden",!o.tocON),t.xp6(2),t.Q6J("ngForOf",o.documentOptions),t.xp6(1),t.Q6J("ngIf",o.missing),t.xp6(1),t.Q6J("ngIf",!o.missing))},dependencies:[a.sg,a.O5,h.$,r.rH],encapsulation:2});const O=[{path:"",children:[{path:":doc",component:u},{path:"",redirectTo:"all",pathMatch:"full"}]}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[r.Bz.forChild(O),r.Bz]});class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[a.ez,m.i,c]})}}]);