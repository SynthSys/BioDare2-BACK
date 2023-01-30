"use strict";(self.webpackChunkbiodare2_ui=self.webpackChunkbiodare2_ui||[]).push([[838],{838:(re,U,r)=>{r.r(U),r.d(U,{ExperimentsModule:()=>d});var h=r(6895),f=r(9299),S=r(8739),P=r(9300),x=r(7246),E=r(7579),u=r(1135),F=r(9646),p=r(9841),O=r(6451),J=r(5698),A=r(8372),b=r(8505),_=r(262),z=r(1884),q=r(3900);class ${constructor(t=!1){this.removeDebounce=t,this.error$=new E.x,this.isFetching$=new u.X(!1),this.isProcessing$=new u.X(!1),this.dataLength=0,this.page$=new u.X(void 0),this.sort$=new u.X(void 0),this.on$=new u.X(!1),this.refresh$=new E.x,this.input$=new u.X(void 0),this.params$=new u.X(void 0),this.asset$=new u.X(void 0),this.DEBUG=!1,this.dataInputsDebounce=10,this.assetInputsDebounce=200,this.busyDebounce=50,this.id=$.ids++,this.logMe("created"),this.initAssetsStream(),this.isBusy$=this.initBusyStream(),this.data$=this.initDataStream()}logMe(t,i){this.DEBUG&&(t=this.constructor.name+":"+this.id+" "+t,i?console.log(t,i):console.log(t))}input(t){t&&(this.input$.next(t),this.resetPage())}params(t){this.params$.next(t)}on(t=!0){this.on$.next(t)}refresh(){this.refresh$.next(!0)}page(t){this.page$.next(t)}sort(t){this.sort$.next(t),this.resetPage()}close(){this.asset$.complete(),this.error$.complete(),this.isFetching$.complete(),this.isProcessing$.complete(),this.input$.complete(),this.params$.complete(),this.on$.complete(),this.refresh$.complete(),this.page$.complete(),this.sort$.complete()}errorToData(t){return(0,F.of)(void 0)}assetToSort(t){}assetToPage(t){}resetPage(){this.page$.pipe((0,J.q)(1)).subscribe(t=>{if(t){const i=new S.kl;i.pageIndex=0,i.pageSize=t.pageSize,this.page(i)}})}initBusyStream(){return this.removeDebounce?(0,p.a)([this.isFetching$,this.isProcessing$]).pipe((0,x.U)(([t,i])=>t||i)):(0,p.a)([this.isFetching$,this.isProcessing$]).pipe((0,A.b)(this.busyDebounce),(0,x.U)(([t,i])=>t||i))}initDataStream(){const t=this.dataMutators();let i;return i=this.removeDebounce?(0,p.a)(t):(0,p.a)(t).pipe((0,A.b)(this.dataInputsDebounce)),i.pipe((0,b.b)(n=>this.logMe("Input for data stream",n)),(0,b.b)(n=>this.isProcessing$.next(!0)),(0,x.U)(([n,o])=>{const a=this.processData(n,o);return this.currentParams=o,this.currentData=a,a}),(0,_.K)(n=>(this.error$.next(n),this.errorToData(n))),(0,b.b)(n=>this.isProcessing$.next(!1)))}dataMutators(){return[this.asset$.pipe((0,P.h)(t=>!!t)),this.params$]}assetsMutators(){return[this.initAssetsInput(),this.sort$,this.page$.pipe((0,P.h)(i=>!!i))]}initAssetsStream(){const t=this.assetsMutators();let i;i=this.removeDebounce?(0,p.a)(t):(0,p.a)(t).pipe((0,A.b)(this.assetInputsDebounce)),i.pipe((0,b.b)(n=>this.logMe("Input for asset stream",n))).subscribe(([n,o,a])=>this.loadAsset(n,o,a),n=>this.error$.next(n))}loadAsset(t,i,n){this.isFetching$.next(!0),this.fetchAsset(t,i,n).subscribe(o=>{this.isFetching$.next(!1),this.setAsset(o,t,i,n)},o=>{this.isFetching$.next(!1),this.error$.next(o)})}setAsset(t,i,n,o){this.currentInput=i,this.currentAsset=t,this.currentSort=this.assetToSort(t)||n,this.currentPage=this.assetToPage(t)||o,this.dataLength=this.assetToDataLength(t),this.asset$.next(t)}initAssetsInput(){const i=(0,p.a)([this.input$,this.on$]).pipe((0,P.h)(([a,y])=>a&&y),(0,x.U)(([a,y])=>a)).pipe((0,z.x)((a,y)=>this.sameInput(a,y))),n=this.refresh$.pipe((0,q.w)(a=>i.pipe((0,J.q)(1))));return(0,O.T)(i,n).pipe((0,b.b)(a=>this.logMe("Assets input",a)))}}$.ids=0;var Q=r(3403),e=r(4650),L=r(8926);class l extends ${constructor(t,i=!1){super(i),this.experimentService=t,this.experiment$=this.data$}fetchAsset(t,i,n){const o=(t.query||"").trim();return""===o?this.experimentService.getExperiments(t.showPublic,i,n):this.experimentService.searchExperiments(o,t.showPublic,i,n)}processData(t,i){return t.data}sameInput(t,i){return t.showPublic===i.showPublic&&t.query===i.query}assetToDataLength(t){return t.currentPage.length}assetToPage(t){return t.currentPage}errorToData(t){return(0,F.of)([])}}l.\u0275fac=function(t){return new(t||l)(e.LFG(L.$),e.LFG(Q.I,8))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac});var N=r(2160),Y=r(4004),w=r(3162);function k(s,t){1&s&&(e.TgZ(0,"i",5),e._uU(1,"lock_open"),e.qZA())}const B=function(s){return["/experiment",s]};class v{constructor(){}ngOnInit(){}}v.\u0275fac=function(t){return new(t||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["bd2-experiment-summary"]],inputs:{exp:"exp"},decls:24,vars:14,consts:[[1,"list-group-item","list-group-item-action",3,"routerLink"],[1,"list-group-item-heading"],["class","material-icons bd-icon","style","color: green",4,"ngIf"],[1,"list-group-item-text"],[1,"mb-1"],[1,"material-icons","bd-icon",2,"color","green"]],template:function(t,i){1&t&&(e.TgZ(0,"a",0)(1,"h5",1),e.YNc(2,k,2,0,"i",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3)(5,"div",4),e._uU(6),e.qZA(),e.TgZ(7,"div")(8,"strong"),e._uU(9,"Authors:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"div")(12,"small")(13,"strong"),e._uU(14,"Id:"),e.qZA(),e._uU(15),e.TgZ(16,"strong"),e._uU(17,"Executed:"),e.qZA(),e._uU(18),e.ALo(19,"date"),e.TgZ(20,"strong"),e._uU(21,"Modified:"),e.qZA(),e._uU(22),e.ALo(23,"date"),e.qZA()()()()),2&t&&(e.Q6J("routerLink",e.VKq(12,B,i.exp.id)),e.xp6(2),e.Q6J("ngIf",i.exp.features.isOpenAccess),e.xp6(1),e.hij(" ",i.exp.name," "),e.xp6(3),e.Oqu(i.exp.generalDesc.purpose),e.xp6(4),e.hij(" ",i.exp.authors,""),e.xp6(5),e.hij(" ",i.exp.id," "),e.xp6(3),e.hij(" ",e.lcZ(19,8,i.exp.generalDesc.executionDate.date)," "),e.xp6(4),e.hij(" ",e.lcZ(23,10,i.exp.provenance.modified.date)," "))},dependencies:[h.O5,f.rH,h.uU],encapsulation:2});var c=r(4006),C=r(4859),I=r(811),M=r(455);function X(s,t){if(1&s){const i=e.EpF();e.TgZ(0,"i",3),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.select("desc"))}),e._uU(1,"sort"),e.qZA()}}function G(s,t){if(1&s){const i=e.EpF();e.TgZ(0,"i",4),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.select(""))}),e._uU(1,"sort"),e.qZA()}}function j(s,t){if(1&s){const i=e.EpF();e.TgZ(0,"i",4),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.select("asc"))}),e._uU(1,"more_horiz"),e.qZA()}}const H={provide:c.JU,useExisting:(0,e.Gpc)(()=>m),multi:!0};class m{constructor(){this.value="",this.disabled=!1,this.onChange=t=>{},this.onTouched=()=>{}}ngOnInit(){}select(t){this.disabled||(this.value=t,this.onChange(this.value),this.onTouched())}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}writeValue(t){this.value=t}setDisabledState(t){this.disabled=t}}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["bd2-sort-switch"]],features:[e._Bn([H])],decls:4,vars:4,consts:[["mat-mini-fab","","aria-label","sorting",3,"disabled"],["class","material-icons  icon-flipped-h",3,"click",4,"ngIf"],["class","material-icons",3,"click",4,"ngIf"],[1,"material-icons","icon-flipped-h",3,"click"],[1,"material-icons",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.YNc(1,X,2,0,"i",1),e.YNc(2,G,2,0,"i",2),e.YNc(3,j,2,0,"i",2),e.qZA()),2&t&&(e.Q6J("disabled",i.disabled),e.xp6(1),e.Q6J("ngIf","asc"===i.value),e.xp6(1),e.Q6J("ngIf","desc"===i.value),e.xp6(1),e.Q6J("ngIf",""===i.value))},dependencies:[h.O5,C.lW],encapsulation:2});class T{set options(t){t&&(this.currentQuery=t.query,this.currentShowPublic=t.showPublic,this.currentSort=t.sorting)}constructor(t){this.fb=t,this.search=new e.vpe,this.sort=new e.vpe,this.currentSort={active:"id",direction:"asc"},this.currentQuery="",this.currentShowPublic=!1}ngOnInit(){this.sortOptionsF=this.fb.group({sorting:[this.currentSort.active],direction:[this.currentSort.direction]}),this.showPublicF=this.fb.control(this.currentShowPublic),this.queryF=this.fb.control(this.currentQuery,[c.kI.required,c.kI.minLength(3)]),this.sortOptionsF.valueChanges.subscribe(t=>this.updateSort(t.sorting,t.direction)),this.showPublicF.valueChanges.subscribe(t=>{this.currentShowPublic=t,this.emitSearch()})}updateSort(t,i){const n={active:t,direction:i};this.currentSort=n,this.sort.next(n)}emitSearch(){this.search.next({showPublic:this.currentShowPublic,query:this.currentQuery})}find(){this.queryF.valid&&(this.currentQuery=this.queryF.value,this.emitSearch())}all(){this.queryF.setValue(""),this.currentQuery="",this.emitSearch()}}function K(s,t){1&s&&(e.TgZ(0,"div",14),e._uU(1," There are no visible experiments matching the criteria. "),e.qZA())}function R(s,t){1&s&&e._UZ(0,"mat-progress-bar",15)}function V(s,t){1&s&&e._UZ(0,"bd2-experiment-summary",16),2&s&&e.Q6J("exp",t.$implicit)}T.\u0275fac=function(t){return new(t||T)(e.Y36(c.QS))},T.\u0275cmp=e.Xpm({type:T,selectors:[["bd2-search-and-sort-panel"]],inputs:{options:"options"},outputs:{search:"search",sort:"sort"},decls:25,vars:4,consts:[[1,"pb-1","pt-1","searchpanel"],[1,"float-left",3,"formGroup"],["formControlName","direction",1,"mr-1"],["name","sorting","aria-label","sorting","formControlName","sorting",1,"mr-4"],["value","id"],["value","name"],["value","author"],["value","executed"],["value","modified"],[1,"mr-2",3,"formControl"],[1,"no-clues","float-right"],["name","search","minlength","3","placeholder","e.g. prr9 temp*",1,"form-control-sm","mr-1",3,"formControl","keydown.enter"],["mat-mini-fab","","mat-icon-button","","aria-label","search",1,"mr-2",3,"disabled","click"],[1,"material-icons"],["mat-mini-fab","","color","primary","aria-label","all",3,"click"],[1,"clearfix"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"small")(2,"div",1),e._UZ(3,"bd2-sort-switch",2),e.TgZ(4,"mat-button-toggle-group",3)(5,"mat-button-toggle",4),e._uU(6,"Id"),e.qZA(),e.TgZ(7,"mat-button-toggle",5),e._uU(8,"Title"),e.qZA(),e.TgZ(9,"mat-button-toggle",6),e._uU(10,"Author"),e.qZA(),e.TgZ(11,"mat-button-toggle",7),e._uU(12,"Exec."),e.qZA(),e.TgZ(13,"mat-button-toggle",8),e._uU(14,"Mod."),e.qZA()()(),e.TgZ(15,"mat-slide-toggle",9),e._uU(16,"Show public"),e.qZA(),e.TgZ(17,"div",10)(18,"input",11),e.NdJ("keydown.enter",function(){return i.find()}),e.qZA(),e.TgZ(19,"button",12),e.NdJ("click",function(){return i.find()}),e.TgZ(20,"i",13),e._uU(21,"search"),e.qZA()(),e.TgZ(22,"button",14),e.NdJ("click",function(){return i.all()}),e._uU(23,"all"),e.qZA()()(),e._UZ(24,"div",15),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.sortOptionsF),e.xp6(13),e.Q6J("formControl",i.showPublicF),e.xp6(3),e.Q6J("formControl",i.queryF),e.xp6(1),e.Q6J("disabled",i.queryF.invalid))},dependencies:[c.Fj,c.JJ,c.JL,c.wO,c.oH,c.sg,c.u,C.lW,I.A9,I.Yi,M.Rr,m],encapsulation:2});const W=function(){return[]},ee=function(s,t){return{pageIndex:s,pageSize:t}};function te(s,t){if(1&s&&(e.TgZ(0,"a",17),e._uU(1,"Next"),e.qZA()),2&s){const i=e.oxw();e.Q6J("routerLink",e.DdM(2,W))("queryParams",e.WLB(3,ee,(null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageIndex)+1,null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageSize))}}const D=function(){return[10,25,50,100,200]};class Z{constructor(t,i,n,o,a){this.experimentService=t,this.fetcher=i,this.feedback=n,this.userService=o,this.route=a}ngOnInit(){this.firstPage(),this.initialSearchOptions={sorting:{active:"modified",direction:"desc"},showPublic:!this.userService.isLoggedIn(),query:""},this.subscribeRoute(),this.fetcher.experiment$.subscribe(i=>this.experiments=i),this.fetcher.error$.subscribe(i=>this.feedback.error(i)),this.fetcher.on(!0),this.sort(this.initialSearchOptions.sorting),this.search(this.initialSearchOptions),this.page(this.firstPage())}ngOnDestroy(){this.routeSubscription&&this.routeSubscription.unsubscribe(),this.fetcher&&this.fetcher.close()}search(t){this.fetcher.input(t)}sort(t){this.fetcher.sort(t)}page(t){this.fetcher.page(t)}firstPage(){const t=+this.route.snapshot.queryParamMap.get("pageIndex")||0,i=+this.route.snapshot.queryParamMap.get("pageSize")||25,n=new S.kl;return n.pageIndex=t,n.pageSize=i,n}subscribeRoute(){this.routeSubscription=this.route.queryParamMap.pipe((0,P.h)(t=>t.has("pageIndex")&&t.has("pageSize")),(0,x.U)(t=>{const i=new S.kl;return i.pageSize=+t.get("pageSize"),i.pageIndex=+t.get("pageIndex"),i})).subscribe(t=>this.page(t))}refresh(){this.fetcher.refresh()}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(L.$),e.Y36(l),e.Y36(N.T),e.Y36(Y.K),e.Y36(f.gz))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["ng-component"]],features:[e._Bn([l])],decls:20,vars:18,consts:[[1,"float-left"],["role","button","aria-label","refresh",3,"click"],[1,"material-icons","bd-icon-inh","bd-primary",2,"font-size","larger"],[1,"clearfix"],["class","alert alert-info",4,"ngIf"],[3,"options","search","sort"],[3,"length","pageSize","pageIndex","pageSizeOptions","page"],["paginator",""],["mode","indeterminate",4,"ngIf"],[1,"list-group"],[3,"exp",4,"ngFor","ngForOf"],[3,"hidden","length","pageSize","pageIndex","pageSizeOptions","page"],["paginator2",""],["style","color: rgba(0,0,0,.54);",3,"routerLink","queryParams",4,"ngIf"],[1,"alert","alert-info"],["mode","indeterminate"],[3,"exp"],[2,"color","rgba(0,0,0,.54)",3,"routerLink","queryParams"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div")(1,"h2",0),e._uU(2,"Experiments "),e.TgZ(3,"a",1),e.NdJ("click",function(){return i.refresh()}),e.TgZ(4,"i",2),e._uU(5,"refresh"),e.qZA()()(),e._UZ(6,"div",3),e.YNc(7,K,2,0,"div",4),e.TgZ(8,"div")(9,"bd2-search-and-sort-panel",5),e.NdJ("search",function(o){return i.search(o)})("sort",function(o){return i.sort(o)}),e.qZA(),e.TgZ(10,"mat-paginator",6,7),e.NdJ("page",function(o){return i.page(o)}),e.qZA(),e.YNc(12,R,1,0,"mat-progress-bar",8),e.ALo(13,"async"),e.TgZ(14,"div",9),e.YNc(15,V,1,1,"bd2-experiment-summary",10),e.qZA(),e.TgZ(16,"mat-paginator",11,12),e.NdJ("page",function(o){return i.page(o)}),e.qZA(),e.TgZ(18,"div",0),e.YNc(19,te,2,6,"a",13),e.qZA()()()),2&t){const n=e.MAs(11);e.xp6(7),e.Q6J("ngIf",!i.experiments||i.experiments.length<1),e.xp6(2),e.Q6J("options",i.initialSearchOptions),e.xp6(1),e.Q6J("length",i.fetcher.dataLength)("pageSize",(null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageSize)||25)("pageIndex",null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageIndex)("pageSizeOptions",e.DdM(16,D)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,14,i.fetcher.isBusy$)),e.xp6(3),e.Q6J("ngForOf",i.experiments),e.xp6(1),e.Q6J("hidden",(null==i.experiments?null:i.experiments.length)<1)("length",i.fetcher.dataLength)("pageSize",(null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageSize)||25)("pageIndex",null==i.fetcher.currentPage?null:i.fetcher.currentPage.pageIndex)("pageSizeOptions",e.DdM(17,D)),e.xp6(3),e.Q6J("ngIf",n.hasNextPage())}},dependencies:[h.sg,h.O5,S.NW,w.pW,f.rH,v,T,h.Ov],encapsulation:2});const ie=[{path:"",children:[{path:"",component:Z,pathMatch:"full"}]}];class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[f.Bz.forChild(ie),f.Bz]});var ne=r(9120),se=r(7155);class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[h.ez,c.u5,c.UX,C.ot,I.vV,M.rP,S.TU,se.p0,w.Cv,ne.C,g]})}}]);