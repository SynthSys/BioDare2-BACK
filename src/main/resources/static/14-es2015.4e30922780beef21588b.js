(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"TC9/":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class c{}var i=t("t68o"),o=t("f0Ef"),e=t("pMnS"),b=t("iInd"),s=t("SVse"),r=t("c3O8"),a=t("yU/g"),d=t("a6h8"),p=t("6tuW"),f=t("Ojp2"),h=t("lJxs");class m{constructor(l,n){this.route=l,this.titleSetter=n,this.tocON=!1,this.documentOptions=f.a}ngOnDestroy(){this.docSubscription&&this.docSubscription.unsubscribe()}ngOnInit(){this.docSubscription=this.route.paramMap.pipe(Object(h.a)(l=>{let n=l.get("doc");return n&&"all"!==n||(n="about"),n})).subscribe(l=>{const n=Object(f.b)(l);"about"===l&&(this.tocON=!0),n?(this.missing=void 0,this.document=l,this.setTitle(n)):(this.missing="Unknown document: "+l,this.document=void 0,this.tocON=!0)})}setTitle(l){const n=l[2]?l[2]:l[0].charAt(0).toUpperCase()+l[0].slice(1);this.titleSetter.setTitle(n)}}var g=t("BMm9"),D=u.rb({encapsulation:2,styles:[],data:{}});function O(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var c=!0;return"click"===n&&(c=!1!==u.Fb(l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&c),c}),null,null)),u.sb(2,671744,null,0,b.o,[b.l,b.a,s.j],{routerLink:[0,"routerLink"]},null),u.Gb(3,2),(l()(),u.Nb(4,null,["",""]))],(function(l,n){var t=l(n,3,0,"/documents",n.context.$implicit[0]);l(n,2,0,t)}),(function(l,n){l(n,1,0,u.Fb(n,2).target,u.Fb(n,2).href),l(n,4,0,n.context.$implicit[1])}))}function v(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"],["type","danger"]],null,null,null,null,null)),(l()(),u.Nb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.missing)}))}function N(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"bd2-static-content",[],null,null,null,r.b,r.a)),u.sb(1,114688,null,0,a.a,[d.a,p.a],{docName:[0,"docName"]},null)],(function(l,n){l(n,1,0,n.component.document)}),null)}function k(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["BioDare2 Documentation"])),(l()(),u.tb(2,0,null,null,6,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,1,"div",[["class","card-header bd-bg-primary"]],null,[[null,"click"]],(function(l,n,t){var u=!0,c=l.component;return"click"===n&&(u=0!=(c.tocON=!c.tocON)&&u),u}),null,null)),(l()(),u.Nb(-1,null,["Table of Content"])),(l()(),u.tb(5,0,null,null,3,"div",[["class","card-body"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(6,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,O)),u.sb(8,278528,null,0,s.l,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ib(16777216,null,null,1,null,v)),u.sb(10,16384,null,0,s.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,null,1,null,N)),u.sb(12,16384,null,0,s.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,8,0,t.documentOptions),l(n,10,0,t.missing),l(n,12,0,!t.missing)}),(function(l,n){l(n,5,0,!n.component.tocON)}))}function y(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"ng-component",[],null,null,null,k,D)),u.sb(1,245760,null,0,m,[b.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=u.pb("ng-component",m,y,{},{},[]),w=t("QQfA"),I=t("IP0z"),M=t("s6ns"),S=t("zMNK"),F=t("/HVE"),L=t("hOhj"),P=t("Xd0L"),T=t("cUpR"),C=t("wMBR");class J{}t.d(n,"DocumentsModuleNgFactory",(function(){return K}));var K=u.qb(c,[],(function(l){return u.Cb([u.Db(512,u.j,u.ab,[[8,[i.a,o.a,e.a,j]],[3,u.j],u.w]),u.Db(4608,s.o,s.n,[u.t,[2,s.E]]),u.Db(4608,w.c,w.c,[w.i,w.e,u.j,w.h,w.f,u.q,u.y,s.d,I.b,[2,s.i]]),u.Db(5120,w.j,w.k,[w.c]),u.Db(5120,M.c,M.d,[w.c]),u.Db(135680,M.e,M.e,[w.c,u.q,[2,s.i],[2,M.b],M.c,[3,M.e],w.e]),u.Db(1073742336,s.c,s.c,[]),u.Db(1073742336,I.a,I.a,[]),u.Db(1073742336,S.f,S.f,[]),u.Db(1073742336,F.b,F.b,[]),u.Db(1073742336,L.c,L.c,[]),u.Db(1073742336,w.g,w.g,[]),u.Db(1073742336,P.n,P.n,[[2,P.f],[2,T.f]]),u.Db(1073742336,M.k,M.k,[]),u.Db(1073742336,C.a,C.a,[]),u.Db(1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),u.Db(1073742336,J,J,[]),u.Db(1073742336,c,c,[]),u.Db(1024,b.j,(function(){return[[{path:"",children:[{path:":doc",component:m},{path:"",redirectTo:"all",pathMatch:"full"}]}]]}),[])])}))}}]);