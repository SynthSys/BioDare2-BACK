(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{X0Jz:function(t,n,c){"use strict";c.r(n),c.d(n,"DocumentsModule",(function(){return g}));var e=c("ofXK"),i=c("wMBR"),o=c("tyNb"),s=c("Ojp2"),r=c("lJxs"),a=c("fXoL"),b=c("BMm9"),d=c("yU/g");const u=function(t){return["/documents",t]};function l(t,n){if(1&t&&(a.Tb(0,"li"),a.Tb(1,"a",6),a.Dc(2),a.Sb(),a.Sb()),2&t){const t=n.$implicit;a.Bb(1),a.jc("routerLink",a.mc(2,u,t[0])),a.Bb(1),a.Ec(t[1])}}function p(t,n){if(1&t&&(a.Tb(0,"div",7),a.Dc(1),a.Sb()),2&t){const t=a.dc();a.Bb(1),a.Ec(t.missing)}}function m(t,n){if(1&t&&a.Ob(0,"bd2-static-content",8),2&t){const t=a.dc();a.jc("docName",t.document)}}const f=[{path:"",children:[{path:":doc",component:(()=>{class t{constructor(t,n){this.route=t,this.titleSetter=n,this.tocON=!1,this.documentOptions=s.a}ngOnDestroy(){this.docSubscription&&this.docSubscription.unsubscribe()}ngOnInit(){this.docSubscription=this.route.paramMap.pipe(Object(r.a)(t=>{let n=t.get("doc");return n&&"all"!==n||(n="about"),n})).subscribe(t=>{const n=Object(s.b)(t);"about"===t&&(this.tocON=!0),n?(this.missing=void 0,this.document=t,this.setTitle(n)):(this.missing="Unknown document: "+t,this.document=void 0,this.tocON=!0)})}setTitle(t){const n=t[2]?t[2]:t[0].charAt(0).toUpperCase()+t[0].slice(1);this.titleSetter.setTitle(n)}}return t.\u0275fac=function(n){return new(n||t)(a.Nb(o.a),a.Nb(b.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["ng-component"]],decls:10,vars:4,consts:[[1,"card","mb-3"],[1,"card-header","bd-bg-primary",3,"click"],[1,"card-body",3,"hidden"],[4,"ngFor","ngForOf"],["class","alert alert-danger","role","alert","type","danger",4,"ngIf"],[3,"docName",4,"ngIf"],[3,"routerLink"],["role","alert","type","danger",1,"alert","alert-danger"],[3,"docName"]],template:function(t,n){1&t&&(a.Tb(0,"h2"),a.Dc(1,"BioDare2 Documentation"),a.Sb(),a.Tb(2,"div",0),a.Tb(3,"div",1),a.Zb("click",(function(){return n.tocON=!n.tocON})),a.Dc(4,"Table of Content"),a.Sb(),a.Tb(5,"div",2),a.Tb(6,"ul"),a.Bc(7,l,3,4,"li",3),a.Sb(),a.Sb(),a.Sb(),a.Bc(8,p,2,1,"div",4),a.Bc(9,m,1,1,"bd2-static-content",5)),2&t&&(a.Bb(5),a.jc("hidden",!n.tocON),a.Bb(2),a.jc("ngForOf",n.documentOptions),a.Bb(1),a.jc("ngIf",n.missing),a.Bb(1),a.jc("ngIf",!n.missing))},directives:[e.l,e.m,o.e,d.a],encapsulation:2}),t})()},{path:"",redirectTo:"all",pathMatch:"full"}]}];let h=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(n){return new(n||t)},imports:[[o.f.forChild(f)],o.f]}),t})(),g=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(n){return new(n||t)},providers:[],imports:[[e.c,i.a,h]]}),t})()}}]);