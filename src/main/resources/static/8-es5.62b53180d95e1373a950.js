(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NEk5:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("pDH9"),e("6tuW");var l=function(){function n(n,t){this.contentService=n,this.feedback=t,this.content="loading..."}return Object.defineProperty(n.prototype,"docName",{set:function(n){var t=this;n&&(this.content="",this.contentService.getDocs(n).then((function(n){return t.content=n})).catch((function(n){t.content="Cannot load: "+n,t.feedback.error(n)})))},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){},n}()},Ojp2:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"c",(function(){return u})),e.d(t,"b",(function(){return o}));var l=[["about","About","Documentation"],["service","Service Description (T&C)","Service Description (T&C)"],["privacy","Privacy Statement","Privacy Statement"],["faq","Frequently Asked Questions (FAQ)","FAQ"],["timeseries-data","TimeSeries data and formats","Timeseries data"],["period-methods","Methods of period analysis","Period analysis methods"],["detrending","Detrending for period analysis","Detrending and analysis"],["phases","Phase calculation","Phase calculation"]];function u(n){return l.findIndex((function(t){return t[0]===n}))>=0}function o(n){return l.find((function(t){return t[0]===n}))}},STJf:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){}},"TC9/":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),u=function(){},o=e("MdoF"),i=e("z5nN"),r=e("pMnS"),c=e("iInd"),a=e("SVse"),s=e("CNMR"),p=e("eYkF"),f=e("NEk5"),b=e("pDH9"),d=e("6tuW"),h=e("Ojp2"),m=e("BMm9"),g=e("lJxs"),v=function(){function n(n,t){this.route=n,this.titleSetter=t,this.tocON=!1,this.documentOptions=h.a}return n.prototype.ngOnDestroy=function(){this.docSubscription&&this.docSubscription.unsubscribe()},n.prototype.ngOnInit=function(){var n=this;this.docSubscription=this.route.paramMap.pipe(Object(g.a)((function(n){var t=n.get("doc");return t&&"all"!==t||(t="about"),t}))).subscribe((function(t){var e=Object(h.b)(t);"about"===t&&(n.tocON=!0),e?(n.missing=void 0,n.document=t,n.setTitle(e)):(n.missing="Unknown document: "+t,n.document=void 0,n.tocON=!0)}))},n.prototype.setTitle=function(n){var t=n[2]?n[2]:n[0].charAt(0).toUpperCase()+n[0].slice(1);this.titleSetter.setTitle(t)},n}(),y=l.pb({encapsulation:2,styles:[],data:{}});function N(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var u=!0;return"click"===t&&(u=!1!==l.Db(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),l.qb(2,671744,null,0,c.o,[c.l,c.a,a.k],{routerLink:[0,"routerLink"]},null),l.Eb(3,2),(n()(),l.Lb(4,null,["",""]))],(function(n,t){var e=n(t,3,0,"/documents",t.context.$implicit[0]);n(t,2,0,e)}),(function(n,t){n(t,1,0,l.Db(t,2).target,l.Db(t,2).href),n(t,4,0,t.context.$implicit[1])}))}function O(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,2,"alert",[["type","danger"]],null,null,null,o.c,o.b)),l.qb(1,114688,null,0,s.a,[s.b,l.h],{type:[0,"type"]},null),(n()(),l.Lb(2,0,["",""]))],(function(n,t){n(t,1,0,"danger")}),(function(n,t){n(t,2,0,t.component.missing)}))}function k(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,1,"bd2-static-content",[],null,null,null,p.b,p.a)),l.qb(1,114688,null,0,f.a,[b.a,d.a],{docName:[0,"docName"]},null)],(function(n,t){n(t,1,0,t.component.document)}),null)}function D(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["BioDare2 Documentation"])),(n()(),l.rb(2,0,null,null,6,"div",[["class","panel panel-default panel-primary"]],null,null,null,null,null)),(n()(),l.rb(3,0,null,null,1,"div",[["class","panel-heading"]],null,[[null,"click"]],(function(n,t,e){var l=!0,u=n.component;return"click"===t&&(l=0!=(u.tocON=!u.tocON)&&l),l}),null,null)),(n()(),l.Lb(-1,null,["Table of Content"])),(n()(),l.rb(5,0,null,null,3,"div",[["class","panel-body"]],[[8,"hidden",0]],null,null,null,null)),(n()(),l.rb(6,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,N)),l.qb(8,278528,null,0,a.m,[l.N,l.K,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l.gb(16777216,null,null,1,null,O)),l.qb(10,16384,null,0,a.n,[l.N,l.K],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,k)),l.qb(12,16384,null,0,a.n,[l.N,l.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,8,0,e.documentOptions),n(t,10,0,e.missing),n(t,12,0,!e.missing)}),(function(n,t){n(t,5,0,!t.component.tocON)}))}var S=l.nb("ng-component",v,(function(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,1,"ng-component",[],null,null,null,D,y)),l.qb(1,245760,null,0,v,[c.a,m.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),T=e("LqlI"),B=e("STJf"),I=function(){};e.d(t,"DocumentsModuleNgFactory",(function(){return j}));var j=l.ob(u,[],(function(n){return l.Ab([l.Bb(512,l.j,l.Z,[[8,[o.a,i.a,i.b,r.a,S]],[3,l.j],l.v]),l.Bb(4608,a.p,a.o,[l.s,[2,a.F]]),l.Bb(1073742336,a.c,a.c,[]),l.Bb(1073742336,s.c,s.c,[]),l.Bb(1073742336,T.e,T.e,[]),l.Bb(1073742336,B.a,B.a,[]),l.Bb(1073742336,c.p,c.p,[[2,c.u],[2,c.l]]),l.Bb(1073742336,I,I,[]),l.Bb(1073742336,u,u,[]),l.Bb(1024,c.j,(function(){return[[{path:"",children:[{path:":doc",component:v},{path:"",redirectTo:"all",pathMatch:"full"}]}]]}),[])])}))},eYkF:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return o}));var l=e("8Y7J"),u=(e("NEk5"),e("pDH9"),e("6tuW"),l.pb({encapsulation:2,styles:[],data:{}}));function o(n){return l.Nb(0,[(n()(),l.rb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,t){n(t,0,0,t.component.content)}))}},pDH9:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("IheW"),u=e("z6cu"),o=e("lJxs"),i=e("JIr8"),r=e("UsWK"),c=e("8Y7J"),a=function(){var n=function(){function n(n){this.http=n}return n.prototype.getDocs=function(n){var t=this.makeOptions();return this.OKTxt(this.http.get("assets/"+n+".html",t)).toPromise()},n.prototype.makeOptions=function(){return{headers:new l.g({Accept:"text/html"}),responseType:"text",withCredentials:!0}},n.prototype.OKTxt=function(n){return n.pipe(Object(o.a)((function(n){return n.body?n.txt:n})),Object(i.a)(this.handleBadResponse))},n.prototype.handleBadResponse=function(n){var t;switch(console.error("Response error",n),n.status){case 401:t="Bad credentials, locked or not activated account";break;default:t=r.a.extractMessage(n,"No error details")}return Object(u.a)(t)},n}();return n.ngInjectableDef=c.Rb({factory:function(){return new n(c.Sb(l.c))},token:n,providedIn:"root"}),n}()}}]);