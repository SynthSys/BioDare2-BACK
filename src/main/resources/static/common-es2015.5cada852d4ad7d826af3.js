(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8jiw":function(t,e,s){"use strict";s.d(e,"a",(function(){return N}));var i=s("LRne"),n=s("BOp5"),r=s("XNiG"),a=s("2Vo4"),o=s("itXk"),c=s("VRyK"),l=s("M9IT"),h=s("IzEk"),u=s("lJxs"),d=s("Kj3r"),p=s("vkgz"),m=s("JIr8"),b=s("pLZG"),g=s("/uUt"),f=s("eIep");let O=(()=>{class t{constructor(e=!1){this.removeDebounce=e,this.error$=new r.a,this.isFetching$=new a.a(!1),this.isProcessing$=new a.a(!1),this.dataLength=0,this.page$=new a.a(void 0),this.sort$=new a.a(void 0),this.on$=new a.a(!1),this.refresh$=new r.a,this.input$=new a.a(void 0),this.params$=new a.a(void 0),this.asset$=new a.a(void 0),this.DEBUG=!1,this.dataInputsDebounce=200,this.busyDebounce=50,this.id=t.ids++,this.logMe("created"),this.initAssetsStream(),this.isBusy$=this.initBusyStream(),this.data$=this.initDataStream()}logMe(t,e){this.DEBUG&&(t=this.constructor.name+":"+this.id+" "+t,e?console.log(t,e):console.log(t))}input(t){t&&this.input$.next(t)}params(t){this.params$.next(t)}on(t=!0){this.on$.next(t)}refresh(){this.refresh$.next(!0)}page(t){this.page$.next(t)}sort(t){this.sort$.next(t),this.resetPage()}close(){this.asset$.complete(),this.error$.complete(),this.isFetching$.complete(),this.isProcessing$.complete(),this.input$.complete(),this.params$.complete(),this.on$.complete(),this.refresh$.complete(),this.page$.complete(),this.sort$.complete()}errorToData(t){return Object(i.a)(void 0)}resetPage(){this.page$.pipe(Object(h.a)(1)).subscribe(t=>{if(t){const e=new l.d;e.pageIndex=0,e.pageSize=t.pageSize,this.page(e)}})}initBusyStream(){return this.removeDebounce?Object(o.a)([this.isFetching$,this.isProcessing$]).pipe(Object(u.a)(([t,e])=>t||e)):Object(o.a)([this.isFetching$,this.isProcessing$]).pipe(Object(d.a)(this.busyDebounce),Object(u.a)(([t,e])=>t||e))}initDataStream(){const t=this.dataMutators();let e;return e=this.removeDebounce?Object(o.a)(t):Object(o.a)(t).pipe(Object(d.a)(this.dataInputsDebounce)),e.pipe(Object(p.a)(t=>this.logMe("Input for data stream",t)),Object(p.a)(t=>this.isProcessing$.next(!0)),Object(u.a)(([t,e,s,i])=>{this.dataLength=this.assetToDataLength(t,i);const n=this.processSortedPagedData(t,e,s,i);return this.currentSort=e,this.currentPage=s,this.currentParams=i,this.currentData=n,n}),Object(m.a)(t=>(this.error$.next(t),this.errorToData(t))),Object(p.a)(t=>this.isProcessing$.next(!1)))}dataMutators(){return[this.asset$.pipe(Object(b.a)(t=>!!t)),this.sort$,this.page$.pipe(Object(b.a)(t=>!!t)),this.params$]}initAssetsStream(){this.initAssetsInput().subscribe(t=>this.loadAsset(t),t=>this.error$.next(t))}loadAsset(t){this.isFetching$.next(!0),this.fetchAsset(t).subscribe(e=>{this.isFetching$.next(!1),this.setAsset(e,t)},t=>{this.isFetching$.next(!1),this.error$.next(t)})}setAsset(t,e){this.currentInput=e,this.currentAsset=t,this.asset$.next(t)}initAssetsInput(){const t=Object(o.a)([this.input$,this.on$]).pipe(Object(b.a)(([t,e])=>t&&e),Object(u.a)(([t,e])=>t)).pipe(Object(g.a)((t,e)=>this.sameInput(t,e))),e=this.refresh$.pipe(Object(f.a)(e=>t.pipe(Object(h.a)(1))));return Object(c.a)(t,e).pipe(Object(p.a)(t=>this.logMe("Assets input",t)))}}return t.ids=0,t})();class N extends O{constructor(t=!1){super(t),this.removeDebounce=t}sortingKey(t,e){return t=>t}processData(t,e){return t}errorToData(t){return Object(i.a)([])}processSortedPagedData(t,e,s,i){let n=this.assetToData(t,i);return n=this.sortData(n,e,i),n=this.pageData(n,s,i),n=this.processData(n,i),n}sortData(t,e,s){return e&&e.active&&""!==e.direction?Object(n.d)(t,e.direction,this.sortingKey(e,s)):t}pageData(t,e,s){return e?Object(n.a)(t,e):t}assetToDataLength(t,e){return this.assetToData(t).length}}},BMm9:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("tyNb"),n=s("pLZG"),r=s("/uUt"),a=s("fXoL"),o=s("jhN1");let c=(()=>{class t{constructor(t,e,s){if(this.router=t,this.titleService=e,console.log("TitleSetter created"),s)throw new Error("TitleSetterService is already loaded. Activate it in the AppModule only");t.events.pipe(Object(n.a)(t=>t instanceof i.b),Object(r.a)((t,e)=>t.url===e.url)).subscribe(t=>{this.changedURL(t.urlAfterRedirects)},t=>{console.log("Error in router stream")},()=>console.log("Router stream end"))}changedURL(t){const e=this.getTitleFromURL(t);e&&this.setTitle(e)}getTitleFromURL(t){return t.endsWith("welcome")?"Circadian period analysis":t.endsWith("experiments")?"Experiments":t.endsWith("experiments/new")?"New Experiment":t.endsWith("login")?"Login":t.endsWith("account/register")?"Register":t.endsWith("account/edit")?"Account":""}setTitle(t){this.titleService.setTitle("BioDare2 "+t)}}return t.\u0275fac=function(e){return new(e||t)(a.ac(i.c),a.ac(o.d),a.ac(t,12))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Ee+/":function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var i=s("0IaG"),n=s("Ojp2"),r=s("fXoL"),a=s("ofXK"),o=s("yU/g");function c(t,e){if(1&t&&(r.Wb(0,"div",6),r.Jc(1),r.Vb()),2&t){const t=r.ic();r.Cb(1),r.Kc(t.missing)}}function l(t,e){if(1&t&&r.Rb(0,"bd2-static-content",7),2&t){const t=r.ic();r.oc("docName",t.docName)}}let h=(()=>{class t{constructor(t){const e=t?t.docName:void 0;Object(n.c)(e)?(this.title=n.a.find(t=>t[0]===e)[1],this.docName=e,this.missing=void 0):(this.missing="Unknown document: "+e,this.title=this.missing,this.docName=void 0)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(i.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["bd2-static-content-dialog"]],decls:8,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["class","alert alert-danger","role","alert","type","danger",4,"ngIf"],[3,"docName",4,"ngIf"],["mat-dialog-actions",""],["mat-dialog-close","","tabindex","-1",1,"btn","btn-primary"],["role","alert","type","danger",1,"alert","alert-danger"],[3,"docName"]],template:function(t,e){1&t&&(r.Wb(0,"h1",0),r.Jc(1),r.Vb(),r.Wb(2,"div",1),r.Hc(3,c,2,1,"div",2),r.Hc(4,l,1,1,"bd2-static-content",3),r.Vb(),r.Wb(5,"div",4),r.Wb(6,"button",5),r.Jc(7,"Close"),r.Vb(),r.Vb()),2&t&&(r.Cb(1),r.Kc(e.title),r.Cb(2),r.oc("ngIf",e.missing),r.Cb(1),r.oc("ngIf",!e.missing))},directives:[i.h,i.e,a.m,i.c,i.d,o.a],encapsulation:2}),t})(),u=(()=>{class t{constructor(t){this.dialog=t}show(t){this.dialog.open(h,{data:{docName:t}})}}return t.\u0275fac=function(e){return new(e||t)(r.ac(i.b))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},EvUs:function(t,e,s){"use strict";s.d(e,"e",(function(){return n})),s.d(e,"f",(function(){return r})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return c})),s.d(e,"b",(function(){return l}));var i=s("KhIM");let n=(()=>{class t{constructor(t,e,s){this.id=t,this.name=e,this.label=s}static getValuesMap(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}static get(e){return t.getValuesMap().get(e)}static initValuesMap(){const e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.EXCEL_TABLE.name,t.EXCEL_TABLE),e.set(t.TOPCOUNT.name,t.TOPCOUNT),e.set(t.TAB_SEP.name,t.TAB_SEP),e.set(t.COMA_SEP.name,t.COMA_SEP),e}toJSON(){return this.name}}return t.NONE=new t(0,"NONE","none"),t.EXCEL_TABLE=new t(1,"EXCEL_TABLE","Excel Table"),t.TOPCOUNT=new t(2,"TOPCOUNT","TopCount"),t.TAB_SEP=new t(3,"TAB_SEP","Tab-separated"),t.COMA_SEP=new t(4,"COMA_SEP","Coma-separated"),t})();const r=[n.EXCEL_TABLE,n.TAB_SEP,n.COMA_SEP,n.TOPCOUNT];class a extends class{}{constructor(){super(...arguments),this._class_name=".ExcelTSImportParameters"}}class o{}class c{constructor(t=-1,e=-1,s="",i=-1,n=-1,r="",a){this.colIx=t,this.colNumber=e,this.colName=s,this.rowIx=i,this.rowNumber=n,this.rowName=r,this.value=a,this.fake=!1}toJSON(){return{col:this.colNumber,row:this.rowNumber}}isBeforeOrSame(t){return this.colIx<=t.colIx&&this.rowIx<=t.rowIx}hasSameIx(t){return this.colIx===t.colIx&&this.rowIx===t.rowIx}}class l extends class{constructor(){this.inRows=!1,this.timeOffset=0,this.importLabels=!0,this.userLabels=[],this.containsBackgrounds=!1,this.backgroundsLabels=[]}get inLabel(){return this.inRows?"row":"column"}get inLabelNeg(){return this.inRows?"column":"row"}isTimeDefined(){return!(!this.firstTimeCell||!this.timeType||this.timeType==i.h.IMG_NUMBER&&(!this.imgInterval||+this.imgInterval<=0)||isNaN(Number(this.firstTimeCell.value)))}areLabelsCorrectlySelected(){return!!this.labelsSelection&&this.areLabelsAfterTime()}areLabelsAfterTime(){return!(!this.firstTimeCell||!this.labelsSelection)&&(this.inRows?this.labelsSelection.colNumber<this.firstTimeCell.colNumber&&this.labelsSelection.colNumber>=0:this.labelsSelection.rowNumber<this.firstTimeCell.rowNumber&&this.labelsSelection.rowNumber>=0)}areLabelsCorrectlyAssigned(){return!!this.userLabels&&this.userLabels.filter(t=>!!t).length>0}isDataAfterTime(){return!(!this.firstTimeCell||!this.dataStart)&&(this.inRows?this.dataStart.rowNumber>this.firstTimeCell.rowNumber:this.dataStart.colNumber>this.firstTimeCell.colNumber)}isDataStartCorrectlySelected(){return!!this.dataStart&&this.isDataAfterTime()}isComplete(){if(!this.isTimeDefined())return!1;if(this.importLabels){if(!this.areLabelsCorrectlySelected())return!1;if(!this.isDataStartCorrectlySelected())return!1}else if(!this.areLabelsCorrectlyAssigned())return!1;return!0}summarizeLabels(t=10){if(!this.userLabels)return"No labels";const e=new Set;for(const s of this.userLabels)if(s&&(e.add(s),e.size>=t)){e.add("...");break}return[...e].join(", ")}}{constructor(){super(...arguments),this._class_name=".DataTableImportParameters"}}},KhIM:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"h",(function(){return n})),s.d(e,"g",(function(){return r})),s.d(e,"f",(function(){return a})),s.d(e,"i",(function(){return c})),s.d(e,"j",(function(){return l})),s.d(e,"a",(function(){return h})),s.d(e,"b",(function(){return u})),s.d(e,"c",(function(){return d})),s.d(e,"e",(function(){return m}));let i=(()=>{class t{constructor(t,e,s){this._id=t,this._name=e,this._label=s}get id(){return this._id}get name(){return this._name}get label(){return this._label}static get(e){return t.getValuesMap().get(e)}static getValuesMap(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}static initValuesMap(){const e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.IGNORED.name,t.IGNORED),e.set(t.TIME.name,t.TIME),e.set(t.DATA.name,t.DATA),e.set(t.BACKGROUND.name,t.BACKGROUND),e.set(t.LABEL.name,t.LABEL),e}toJSON(){return this.name}}return t.NONE=new t(0,"NONE","NONE"),t.IGNORED=new t(1,"IGNORED","Ignored"),t.TIME=new t(2,"TIME","Time"),t.DATA=new t(3,"DATA","Data"),t.BACKGROUND=new t(4,"BACKGROUND","Background noise"),t.LABEL=new t(5,"LABEL","Label"),t})(),n=(()=>{class t{constructor(t,e,s,i){this._id=t,this._name=e,this._label=s,this._unit=i}get id(){return this._id}get name(){return this._name}get label(){return this._label}get unit(){return this._unit}static get(e){return t.getValuesMap().get(e)}static getValuesMap(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}static initValuesMap(){const e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.TIME_IN_HOURS.name,t.TIME_IN_HOURS),e.set(t.TIME_IN_MINUTES.name,t.TIME_IN_MINUTES),e.set(t.TIME_IN_SECONDS.name,t.TIME_IN_SECONDS),e.set(t.IMG_NUMBER.name,t.IMG_NUMBER),e}toJSON(){return this.name}}return t.NONE=new t(0,"NONE","NONE",""),t.TIME_IN_HOURS=new t(1,"TIME_IN_HOURS","time in hours","h"),t.TIME_IN_MINUTES=new t(2,"TIME_IN_MINUTES","time in minutes","m"),t.TIME_IN_SECONDS=new t(3,"TIME_IN_SECONDS","time in seconds","s"),t.IMG_NUMBER=new t(4,"IMG_NUMBER","image nr. (1-based)","img"),t})();class r{}class a{constructor(t){this.dataLabel=t}}const o="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function c(t){const e=o.length;if((t-=1)<e)return o[t];if(t<e*e+e){const s=Math.floor(t/e)-1;return o[s]+o[t%e]}if(t<16384){const s=Math.floor(t/(e*e))-1;let i=t%(e*e);const n=Math.floor(i/e)-1;return i=t%e,o[s]+o[n]+o[i]}throw new RangeError("Unsupported column number: "+(t+1))}function l(t){if(t<1||t>96)throw new RangeError("Unsupported topcount column number: "+t);t-=1;const e=Math.floor(t/12);return o[e]+(t%12+1)}class h{constructor(t,e){this.col=t,this.row=e}get numericalLabel(){return this.col+"-"+this.row}get excelLabel(){return c(this.col)+this.row}get columnLetter(){return c(this.col)}get topCountWell(){return o[this.row-1]+this.col}clone(){return new h(this.col,this.row)}}class u{constructor(t,e){this.first=t,this.last=e;const s=this.normalize(t,e);this.first=s[0],this.last=s[1]}get firstCol(){return this.first.col}get lastCol(){return this.last.col}get fullRangeLabel(){return this.isSingleCell()?this.first.excelLabel:this.first.excelLabel+"-"+this.last.excelLabel}get columnRangeLabel(){return this.isSingleCell()?this.first.columnLetter:this.first.columnLetter+"-"+this.last.columnLetter}get topCountRangeLabel(){return this.isSingleCell()?this.first.topCountWell:this.first.topCountWell+"-"+this.last.topCountWell}clone(){return new u(this.first.clone(),this.last.clone())}normalize(t,e){if(t.row<=e.row&&t.col<=e.col)return[t,e];const s=Math.min(t.row,e.row),i=Math.min(t.col,e.col),n=Math.max(t.row,e.row),r=Math.max(t.col,e.col);return[new h(i,s),new h(r,n)]}isSingleCell(){return this.first.row===this.last.row&&this.first.col===this.last.col}size(){return(this.last.col-this.first.col+1)*(this.last.row-this.first.row+1)}}class d{constructor(t,e){this.range=t,this.content=e}get fullRangeLabel(){return this.range.fullRangeLabel}get columnRangeLabel(){return this.range.columnRangeLabel}get topCountRangeLabel(){return this.range.topCountRangeLabel}get firstCol(){return this.range.firstCol}get lastCol(){return this.range.lastCol}clone(){const t=new d(this.range.clone(),this.content);return t.role=this.role,t.details=this.details,t}}class p{constructor(t,e,s,i){this.start=t,this.end=e,this.details=s,this.value=i}get label(){return this.start===this.end?c(this.start):c(this.start)+"-"+c(this.end)}get topcountLabel(){return this.start===this.end?l(this.start):l(this.start)+"-"+l(this.end)}trimEnd(t){if(t<=this.start)return;const e=this.details.clone();return e.range.last.col=t-1,new p(this.start,t-1,e,this.value)}trimBegining(t){if(t>=this.end)return;const e=this.details.clone();return e.range.first.col=t+1,new p(t+1,this.end,e,this.value)}isSimilar(t){return this.details.role===t.details.role&&this.value===t.value}}class m{constructor(){this.columns=[]}get blocks(){const t=[];let e=1;for(;e<this.columns.length;){const s=this.columns[e];s?(t.push(s),e=s.end+1):e++}return t}details(t){const e=this.columns[t];if(e)return e.details}delete(t){if(0===t.size())return!1;let e=!1;return this.columns[t.firstCol]&&(this.trimPreviousAt(t.firstCol),e=!0),this.columns[t.lastCol]&&(this.trimBehindAt(t.lastCol),e=!0),this.clear(t),e}insert(t,e){if(0===t.range.size())return!1;let s=!1;const i=new p(t.range.first.col,t.range.last.col,t,e);return this.columns[i.start]&&(this.trimPreviousAt(i.start),s=!0),this.columns[i.end]&&(this.trimBehindAt(i.end),s=!0),this.put(i),s}merge(){let t=1;for(;t<this.columns.length;){const e=this.columns[t];if(e)if(this.columns[e.end+1]){const s=this.columns[e.end+1];e.isSimilar(s)?(e.end=s.end,e.details.range.last=s.details.range.last,this.put(e)):t=s.start}else t=e.end+1;else t++}}trimPreviousAt(t){const e=this.columns[t];if(e.start===t)return;const s=e.trimEnd(t);this.put(s)}trimBehindAt(t){const e=this.columns[t];if(e.end===t)return;const s=e.trimBegining(t);this.put(s)}put(t){for(let e=t.start;e<=t.end;e++)this.columns[e]=t}clear(t){for(let e=t.firstCol;e<=t.lastCol;e++)this.columns[e]=void 0}}},Ojp2:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"b",(function(){return r}));const i=[["about","About","Documentation"],["service","Service Description (T&C)","Service Description (T&C)"],["privacy","Privacy Statement","Privacy Statement"],["faq","Frequently Asked Questions (FAQ)","FAQ"],["timeseries-data","TimeSeries data and formats","Timeseries data"],["period-methods","Methods of period analysis","Period analysis methods"],["detrending","Detrending for period analysis","Detrending and analysis"],["phases","Phase calculation","Phase calculation"]];function n(t){return i.findIndex(e=>e[0]===t)>=0}function r(t){return i.find(e=>e[0]===t)}},tu3j:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(t=1e3,e=3e4,s=3e5,i=2){this.RELOAD_INT=t,this.MAX_RELOAD_INT=e,this.MAX_RELOAD_TIME=s,this.RELOAD_FACTOR=i,i<1&&(this.RELOAD_FACTOR=2)}nextInterval(t){return this.id!==t?this.reset(t):this.interval<this.MAX_RELOAD_INT&&(this.interval*=this.RELOAD_FACTOR),this.deadline>Date.now()?this.interval:void 0}reset(t){this.id=t,this.interval=this.RELOAD_INT,this.deadline=Date.now()+this.MAX_RELOAD_TIME}}},"yU/g":function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var i=s("fXoL"),n=s("tk/3"),r=s("z6cu"),a=s("lJxs"),o=s("JIr8"),c=s("UsWK");let l=(()=>{class t{constructor(t){this.http=t}getDocs(t){const e=this.makeOptions();return this.OKTxt(this.http.get("assets/"+t+".html",e)).toPromise()}makeOptions(){return{headers:new n.c({Accept:"text/html"}),responseType:"text",withCredentials:!0}}OKTxt(t){return t.pipe(Object(a.a)(t=>{let e;return e=t.body?t.txt:t,e}),Object(o.a)(this.handleBadResponse))}handleBadResponse(t){let e;switch(console.error("Response error",t),t.status){case 401:e="Bad credentials, locked or not activated account";break;default:e=c.a.extractMessage(t,"No error details")}return Object(r.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(i.ac(n.a))},t.\u0275prov=i.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=s("6tuW");let u=(()=>{class t{constructor(t,e){this.contentService=t,this.feedback=e,this.content="loading..."}set docName(t){t&&(this.content="",this.contentService.getDocs(t).then(t=>this.content=t).catch(t=>{this.content="Cannot load: "+t,this.feedback.error(t)}))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(l),i.Qb(h.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["bd2-static-content"]],inputs:{docName:"docName"},decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(t,e){1&t&&i.Rb(0,"div",0),2&t&&i.oc("innerHTML",e.content,i.Bc)},encapsulation:2}),t})()},zQ7r:function(t,e,s){"use strict";s.d(e,"a",(function(){return b}));var i=s("XNiG"),n=s("2Vo4"),r=s("itXk"),a=s("VRyK"),o=s("PqYM"),c=s("pLZG"),l=s("Kj3r"),h=s("lJxs"),u=s("/uUt"),d=s("eIep"),p=s("IzEk"),m=s("vkgz");let b=(()=>{class t{constructor(e=!1){this.removeDebounce=e,this.error$=new i.a,this.on$=new n.a(!1),this.refresh$=new i.a,this.input$=new n.a(void 0),this.asset$=new n.a(void 0),this.reloading$=new n.a(!1),this.DEBUG=!1,this.reloadDebounce=50,this.id=t.ids++,this.logMe("created"),this.currentReloadStatus=this.initIntervalsKeeper(),this.finished$=this.asset$.asObservable().pipe(Object(c.a)(t=>t&&this.isFinished(t))),this.running$=this.asset$.asObservable().pipe(Object(c.a)(t=>t&&this.isRunning(t))),this.failed$=this.asset$.asObservable().pipe(Object(c.a)(t=>t&&this.hasFailed(t))),this.all$=this.asset$.asObservable().pipe(Object(c.a)(t=>null!=t&&void 0!==t)),this.isReloading$=this.initReloadingStream(),this.initAssetsStream(),this.initReloads()}logMe(t,e){this.DEBUG&&(t=this.constructor.name+":"+this.id+" "+t,e?console.log(t,e):console.log(t))}close(){this.asset$.complete(),this.input$.complete(),this.error$.complete(),this.reloading$.complete(),this.on$.complete(),this.refresh$.complete(),this.reloadSubscription&&this.reloadSubscription.unsubscribe()}input(t){t&&this.input$.next(t)}on(t=!0){this.on$.next(t)}refresh(){this.currentReloadStatus.reset(void 0),this.reloadSubscription&&this.reloadSubscription.unsubscribe(),this.refresh$.next(!0)}initReloadingStream(){return this.removeDebounce?this.reloading$.asObservable():this.reloading$.asObservable().pipe(Object(l.a)(this.reloadDebounce))}initAssetsStream(){this.initAssetsInput().subscribe(t=>this.loadAsset(t),t=>this.error$.next(t))}initReloads(){this.running$.subscribe(t=>this.reload(t))}loadAsset(t){this.fetchAsset(t).subscribe(e=>{this.setAsset(e,t)},t=>{this.error$.next(t)})}setAsset(t,e){this.currentInput=e,this.currentAsset=t,this.reloading$.next(this.isRunning(t)),this.asset$.next(t)}initAssetsInput(){const t=Object(r.a)([this.input$,this.on$]).pipe(Object(c.a)(([t,e])=>t&&e),Object(h.a)(([t,e])=>t)).pipe(Object(u.a)((t,e)=>this.sameInput(t,e))),e=this.refresh$.pipe(Object(d.a)(e=>t.pipe(Object(p.a)(1))));return Object(a.a)(t,e).pipe(Object(m.a)(t=>this.logMe("Assets input",t)))}reload(t){this.reloadSubscription&&this.reloadSubscription.unsubscribe();const e=this.currentReloadStatus.nextInterval(this.assetToId(t));if(!e)return void this.reloading$.next(!1);const s=this.assetToInput(t);this.reloadSubscription=Object(o.a)(e).subscribe(t=>{this.sameInput(s,this.currentInput)?(this.reloadSubscription=void 0,this.loadAsset(s)):console.log("Disabled reload as input has changed")})}}return t.ids=0,t})()}}]);