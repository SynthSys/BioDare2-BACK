(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{d9Wp:function(e,t,a){"use strict";a.r(t),a.d(t,"TsDataModule",(function(){return R}));var r=a("ofXK"),i=a("tyNb"),n=a("yYXI"),s=a("bngM"),o=a("QBpm");class c{constructor(e){this.rows=new Map,this.nextColumn=0,this.sorted=!0,null!=e&&(this.sorted=e)}get width(){return this.nextColumn}get size(){return this.rows.size}append(e,t){this.put(e,t,this.nextColumn)}put(e,t,a){this._put(e,t,a),this.nextColumn=Math.max(this.nextColumn,a+1)}putColumn(e,t,a){e.forEach((e,r)=>{this._put(e,t[r],a)}),this.nextColumn=Math.max(this.nextColumn,a+1)}appendColumn(e,t){this.putColumn(e,t,this.nextColumn)}getValue(e,t){const a=this.rows.get(e);return a?a[t]:void 0}getRow(e){return this.rows.get(e)}forEach(e){this.keys().forEach((t,a)=>{const r={key:t,columns:this.rows.get(t)};e(r,a,this)})}forEachFlat(e){this.keys().forEach((t,a)=>{const r=[t].concat(this.rows.get(t));e(r,a,this)})}keys(){return this.sorted?Array.from(this.rows.keys()).sort((e,t)=>e==t?0:e<t?-1:1):Array.from(this.rows.keys())}_put(e,t,a){let r=this.rows.get(e);r||(r=[],this.rows.set(e,r)),r[a]=t}}class l{constructor(){this.SEP=","}renderCSVTable(e,t,a,r){const i=this.prepareHeaders(r,t,a,e.length);this.appendDataLabels(i,e);const n=this.prepareDataTable(e);let s=this.mapToString(i,this.SEP);return s+=this.mapToString(n,this.SEP),s}prepareHeaders(e,t,a,r){const i=this.prepareExpHeaders(e);return this.appendDisplayProperties(i,t),this.appendDataProperties(i,r,a),i}prepareExpHeaders(e){const t=new c(!1);return t.put("Exp Id:",""+e.id,0),t.put("Exp URL:","https://biodare2.ed.ac.uk/experiment/"+e.id,0),t.put("Exp Name:",e.name,0),e.contributionDesc.authors.forEach((e,a)=>{t.put("Authors:",e.name,a)}),t}appendDisplayProperties(e,t){e.put("Detrending:",t.detrending.label,0),e.put("Normalization:",t.normalisation,0),e.put("Align:",t.align,0)}appendDataProperties(e,t,a){e.put("Traces",t+" of "+a.length,0);const r=Math.floor(a.length/a.pageSize)+(a.length%a.pageSize==0?0:1);e.put("Data Page",a.pageIndex+1+" of "+r,0)}appendDataLabels(e,t){t.forEach((t,a)=>{e.put("Label:",t.label,a)})}prepareDataTable(e){const t=new c;return e.forEach(e=>{const a=e.data.map(e=>e.x),r=e.data.map(e=>e.y);t.appendColumn(a,r)}),t}mapToString(e,t){let a="";return e.forEachFlat(e=>{for(let r=0;r<e.length;r++)void 0!==e[r]&&(a+=e[r]),a+=t;a+="\n"}),a}}var d=a("Kj3r"),p=a("Iab2"),b=a("fXoL"),u=a("ZC3s"),h=a("vejM"),m=a("ZMwR"),f=a("GVyA"),g=a("wcxA"),y=a("3Pt+"),P=a("M9IT");function v(e,t){if(1&e&&(b.Wb(0,"option",19),b.Jc(1),b.Vb()),2&e){const e=t.$implicit;b.oc("value",e.name),b.Cb(1),b.Kc(e.label)}}function V(e,t){if(1&e&&(b.Wb(0,"option",19),b.Jc(1),b.Vb()),2&e){const e=t.$implicit;b.oc("value",e.name),b.Cb(1),b.Kc(e.label)}}function x(e,t){if(1&e&&(b.Wb(0,"option",19),b.Jc(1),b.Vb()),2&e){const e=t.$implicit;b.oc("value",e.name),b.Cb(1),b.Kc(e.label)}}const w=function(){return[10,25,50,100,200]};let W=(()=>{class e extends g.a{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(y.d))},e.\u0275cmp=b.Kb({type:e,selectors:[["bd2-tsdisplay-params-rform"]],inputs:{disabled:"disabled",totalTraces:"totalTraces",currentPage:"currentPage"},outputs:{displayParams:"displayParams"},features:[b.zb],decls:37,vars:10,consts:[["role","form",1,"form-horizontal",3,"formGroup"],["formGroupName","timeScale",1,"form-group","row"],[1,"col-sm-2"],["for","timeStart",1,"col-sm-1"],[1,"col-sm-3"],["type","number","step","any","min","0","size","5","id","timeStart","required","","formControlName","timeStart",1,"form-control"],["for","timeEnd",1,"col-sm-1"],["type","number","step","any","min","0","size","5","required","","id","timeEnd","formControlName","timeEnd",1,"form-control"],[1,"form-group","row"],["for","detrending",1,"col-sm-2"],[1,"col-sm-6"],["required","","id","detrending","formControlName","detrending",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-1"],["required","","id","normalisation","formControlName","normalisation",1,"form-control"],["required","","id","align","formControlName","align",1,"form-control"],[1,"col-sm-8"],[3,"length","disabled","pageSize","pageIndex","pageSizeOptions","page"],["dataPaginator",""],[3,"value"]],template:function(e,t){1&e&&(b.Wb(0,"form",0),b.Wb(1,"div",1),b.Wb(2,"label",2),b.Jc(3,"Time scale"),b.Vb(),b.Wb(4,"label",3),b.Jc(5,"from:"),b.Vb(),b.Wb(6,"div",4),b.Rb(7,"input",5),b.Vb(),b.Wb(8,"label",6),b.Jc(9,"to:"),b.Vb(),b.Wb(10,"div",4),b.Rb(11,"input",7),b.Vb(),b.Vb(),b.Wb(12,"div",8),b.Wb(13,"label",9),b.Jc(14,"Processing"),b.Vb(),b.Wb(15,"label",9),b.Jc(16,"Detrending"),b.Vb(),b.Wb(17,"div",10),b.Wb(18,"select",11),b.Hc(19,v,2,2,"option",12),b.Vb(),b.Vb(),b.Vb(),b.Wb(20,"div",8),b.Rb(21,"label",2),b.Wb(22,"label",13),b.Jc(23,"Norm."),b.Vb(),b.Wb(24,"div",4),b.Wb(25,"select",14),b.Hc(26,V,2,2,"option",12),b.Vb(),b.Vb(),b.Wb(27,"label",13),b.Jc(28,"Align"),b.Vb(),b.Wb(29,"div",4),b.Wb(30,"select",15),b.Hc(31,x,2,2,"option",12),b.Vb(),b.Vb(),b.Vb(),b.Wb(32,"div",8),b.Rb(33,"label",2),b.Wb(34,"div",16),b.Wb(35,"mat-paginator",17,18),b.ec("page",(function(e){return t.loadDataPage(e)})),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.oc("formGroup",t.mainForm),b.Cb(19),b.oc("ngForOf",t.detrendingOptions),b.Cb(7),b.oc("ngForOf",t.normalisationOptions),b.Cb(5),b.oc("ngForOf",t.alignOptions),b.Cb(4),b.oc("length",t.totalTraces)("disabled",t.disabledPagination)("pageSize",t.currentPage.pageSize)("pageIndex",t.currentPage.pageIndex)("pageSizeOptions",b.qc(9,w)))},directives:[y.C,y.q,y.h,y.i,y.u,y.c,y.y,y.p,y.g,y.z,r.l,P.a,y.t,y.B],encapsulation:2}),e})();var C=a("nA4b");function S(e,t){if(1&e){const e=b.Xb();b.Wb(0,"div",7),b.Jc(1,"Please complete "),b.Wb(2,"a",8),b.ec("click",(function(){b.Ac(e);const t=b.ic(2);return t.goToExpEdit(t.assay.id,"MeasurementSection")})),b.Jc(3,"Measurement details"),b.Vb(),b.Jc(4," to get access to the secondary data "),b.Vb()}}function E(e,t){if(1&e){const e=b.Xb();b.Wb(0,"div",9),b.Wb(1,"label",10),b.Wb(2,"a",11),b.ec("click",(function(){return b.Ac(e),b.ic(2).exportData()})),b.Wb(3,"i",12),b.Jc(4,"save_alt"),b.Vb(),b.Wb(5,"span",13),b.Jc(6,"Download"),b.Vb(),b.Vb(),b.Jc(7," the current view "),b.Vb(),b.Wb(8,"label"),b.Wb(9,"a",14),b.ec("click",(function(){return b.Ac(e),b.ic(2).recordExport()})),b.Wb(10,"i",12),b.Jc(11,"save_alt"),b.Vb(),b.Wb(12,"span",13),b.Jc(13,"Download"),b.Vb(),b.Vb(),b.Jc(14," the detrended dataset "),b.Vb(),b.Vb()}if(2&e){const e=b.ic(2);b.Cb(9),b.pc("href",e.exportURL,b.Cc)}}function D(e,t){if(1&e&&b.Rb(0,"bd2-ts-plots",15),2&e){const e=b.ic(2);b.oc("tracesPerPlot",e.tracesPerPlot)("data",e.timeseries)}}function T(e,t){if(1&e){const e=b.Xb();b.Wb(0,"div"),b.Wb(1,"h3"),b.Jc(2,"Show timeseries"),b.Vb(),b.Rb(3,"hr"),b.Wb(4,"bd2-tsdisplay-params-rform",1),b.ec("displayParams",(function(t){return b.Ac(e),b.ic().displayChanged(t)})),b.Vb(),b.Hc(5,S,5,0,"div",2),b.Rb(6,"hr"),b.Wb(7,"div",3),b.Jc(8," Hint: You can click on trace label box to remove it from the plot. "),b.Vb(),b.Wb(9,"div",4),b.Hc(10,E,15,1,"div",5),b.Vb(),b.Rb(11,"hr"),b.Hc(12,D,1,2,"bd2-ts-plots",6),b.Vb()}if(2&e){const e=b.ic();b.Cb(4),b.oc("disabled",e.disabledSecondary)("totalTraces",e.totalTraces)("currentPage",e.currentPage),b.Cb(1),b.oc("ngIf",e.disabledSecondary),b.Cb(5),b.oc("ngIf",e.timeseries&&e.exportURL),b.Cb(2),b.oc("ngIf",e.timeseries)}}const J=[{path:"",children:[{path:"view/ts",component:(()=>{class e extends n.a{constructor(e,t,a,r,i){super(i),this.fetcher=e,this.tsdataService=t,this.RDMSocial=a,this.analytics=r,this.timeseries=[],this.totalTraces=0,this.currentPage=s.a.firstPage(),this.tracesPerPlot=5,this.blocked=!1,this.disabledSecondary=!1,this.csvExporter=new l,this.titlePart=" Data"}ngOnInit(){super.ngOnInit(),this.timeSeriesSubsripction=this.fetcher.seriesPackStream.pipe(Object(d.a)(1e3)).subscribe(e=>{if(!this.assay)return;const t=e.data;this.currentParams=e.params,this.exportURL=this.tsdataService.exportURL(this.assay,e.params),this.timeseries=t,this.tracesPerPlot=Math.max(5,t.length/20),this.totalTraces=e.totalTraces,this.currentPage=e.currentPage,this.analytics.experimentDataViev(this.assay.id)},e=>{console.log("Error in TS subscription: "+e),this.feedback.error(e)})}ngOnDestroy(){this.timeSeriesSubsripction&&this.timeSeriesSubsripction.unsubscribe(),this.fetcher.ngOnDestroy(),super.ngOnDestroy()}displayChanged(e){this.fetcher.changeDisplayParams(e)}exportData(){const e=this.fetcher.current;if(!e)return;const t=this.csvExporter.renderCSVTable(e.data,e.params,e.currentPage,this.assay),a=new Blob([t],{type:"text/csv"});p.saveAs(a,this.assay.id+"_data."+this.currentParams.detrending.name+".page"+(e.currentPage.pageIndex+1)+".csv"),this.recordExport()}recordExport(){this.analytics.experimentDataExport(this.assay.id)}updateModel(e){super.updateModel(e),this.RDMSocial.canProceedByMeasurement(e).then(e=>{this.disabledSecondary=!e}),this.fetcher.experiment(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(o.a),b.Qb(u.a),b.Qb(h.a),b.Qb(m.a),b.Qb(f.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["ng-component"]],features:[b.Bb([o.a]),b.zb],decls:1,vars:1,consts:[[4,"ngIf"],[3,"disabled","totalTraces","currentPage","displayParams"],["type","danger","class","alert alert-danger","role","alert",4,"ngIf"],["type","info","role","alert","dismissible","true","dismissOnTimeout","20000",1,"alert","alert-info"],[1,"clearfix"],["class","float-right",4,"ngIf"],[3,"tracesPerPlot","data",4,"ngIf"],["type","danger","role","alert",1,"alert","alert-danger"],[3,"click"],[1,"float-right"],[1,"mr-4"],["download","","role","button","aria-label","download",1,"btn","btn-primary",2,"color","white",3,"click"],[1,"material-icons","bd-icon"],[1,"cdk-visually-hidden"],["download","","role","button",1,"btn","btn-primary",3,"href","click"],[3,"tracesPerPlot","data"]],template:function(e,t){1&e&&b.Hc(0,T,13,6,"div",0),2&e&&b.oc("ngIf",t.assay)},directives:[r.m,W,C.a],encapsulation:2}),e})()},{path:"view/heatmap",loadChildren:()=>a.e(12).then(a.bind(null,"QftV")).then(e=>e.TsHeatmapModule)},{path:"ts-old-import",loadChildren:()=>Promise.all([a.e(0),a.e(17)]).then(a.bind(null,"9Gw/")).then(e=>e.TsOldImportModule)},{path:"ts-import",loadChildren:()=>Promise.all([a.e(0),a.e(19)]).then(a.bind(null,"yPAH")).then(e=>e.TsImportModule)}]}];let I=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[i.f.forChild(J)],i.f]}),e})();var M=a("YiFe"),k=a("a6j2"),O=a("ZTEM");let R=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[r.c,y.j,y.x,M.a,k.a,I,O.a]]}),e})()}}]);