(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9Gw/":function(t,e,i){"use strict";i.r(e),i.d(e,"TsOldImportModule",(function(){return U}));var o=i("ofXK"),s=i("3Pt+"),l=i("YiFe"),n=i("ZTEM"),a=i("tyNb"),c=i("yYXI"),r=i("EvUs"),b=i("fXoL"),d=i("UsWK");let h=(()=>{class t{constructor(t){this.BD2REST=t}getSimpleTableView(t){return this.BD2REST.fileViewSimpleTable(t).then(t=>t.data)}verifyFormat(t,e){return this.BD2REST.fileViewVerifyFormat(t,e).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(b.ac(d.a))},t.\u0275prov=b.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i("GVyA"),u=i("KhIM");class f{constructor(t,e,i,o,s){this.rows=t,this.th=e,this.rowsLabels=i,this.specialRows=o,this.specialRowsLabels=s,this.width=f.maxLength(t),this.th=e||(t.length<1?[]:f.labelCols(this.width)),this.rowsLabels=i||f.labelRows(t.length),this.specialRows=o||[],this.specialRowsLabels=s||f.blankRows(this.specialRows.length)}static labelRows(t){const e=[];for(let i=1;i<=t;i++)e.push(""+i);return e}static blankRows(t){const e=[];for(let i=0;i<t;i++)e.push("");return e}static maxLength(t){return!t||t.length<1?0:Math.max.apply(Math,t.map(t=>t.length))}static labelCols(t){const e=[];for(let i=1;i<=t;i++)e.push(Object(u.i)(i));return e}}let g=(()=>{class t{static color(e){return t.colors[e%t.colors.length]}}return t.TIME_BG="lightyellow",t.IGNORED_BG="lightgrey",t.NOISE_BG="darkgrey",t.colors=["lightgreen","lightblue","lightcoral","lightcyan","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","palegoldenrod","paleturquoise","palevioletred"],t})();var p=i("0IaG");const w=["columnTypeForm"];function C(t,e){if(1&t){const t=b.Xb();b.Wb(0,"li"),b.Wb(1,"input",14,15),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().cellRole=e})),b.Vb(),b.Jc(3),b.Vb()}if(2&t){const t=e.$implicit,i=b.ic();b.Cb(1),b.pc("value",t.name),b.oc("ngModel",i.cellRole),b.Cb(2),b.Lc(" ",t.label," ")}}function T(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div",5),b.Wb(1,"label",16),b.Jc(2,"Propagate until block size"),b.Vb(),b.Wb(3,"input",17,18),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().rangeSize=e})),b.Vb(),b.Vb()}if(2&t){const t=b.ic();b.Cb(3),b.oc("ngModel",t.rangeSize)}}function V(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div",5),b.Wb(1,"label",19),b.Jc(2,"Label"),b.Vb(),b.Wb(3,"input",20,21),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().dataLabel=e})),b.Vb(),b.Vb()}if(2&t){const t=b.ic();b.Cb(3),b.oc("ngModel",t.dataLabel)}}function v(t,e){if(1&t&&(b.Wb(0,"option",32),b.Jc(1),b.Vb()),2&t){const t=e.$implicit;b.pc("value",t.name),b.Cb(1),b.Lc("",t.label," ")}}function k(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div",5),b.Wb(1,"label",33),b.Jc(2,"Time between images (hours)"),b.Vb(),b.Wb(3,"input",34,35),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic(2).imgInterval=e})),b.Vb(),b.Vb()}if(2&t){const t=b.ic(2);b.Cb(3),b.oc("ngModel",t.imgInterval)}}function W(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div"),b.Wb(1,"div",5),b.Wb(2,"label",22),b.Jc(3,"Type of time column"),b.Vb(),b.Wb(4,"select",23,24),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().timeType=e})),b.Hc(6,v,2,2,"option",25),b.Vb(),b.Vb(),b.Wb(7,"div",5),b.Wb(8,"label",26),b.Jc(9,"Row with first timepoint"),b.Vb(),b.Wb(10,"input",27,28),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().firstRow=e})),b.Vb(),b.Vb(),b.Wb(12,"div",5),b.Wb(13,"label",29),b.Jc(14,"Time offset (hours)"),b.Vb(),b.Wb(15,"input",30,31),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic().timeOffset=e})),b.Vb(),b.Vb(),b.Hc(17,k,5,1,"div",8),b.Vb()}if(2&t){const t=b.ic();b.Cb(4),b.oc("ngModel",t.timeType),b.Cb(2),b.oc("ngForOf",t.timeTypeOptions),b.Cb(4),b.oc("ngModel",t.firstRow),b.Cb(5),b.oc("ngModel",t.timeOffset),b.Cb(2),b.oc("ngIf",t.isImageBased())}}function I(t,e){if(1&t&&(b.Wb(0,"div",37),b.Jc(1),b.Vb()),2&t){const t=e.$implicit;b.Cb(1),b.Kc(t)}}function y(t,e){if(1&t&&(b.Wb(0,"div"),b.Hc(1,I,2,1,"div",36),b.Vb()),2&t){const t=b.ic();b.Cb(1),b.oc("ngForOf",t.errors)}}class R{constructor(t,e,i,o){this.selectedRange=t,this.lastCol=e,this.showTime=i,this.label=o}}let M=(()=>{class t{constructor(t,e){this.myself=t,this.errors=null,this.cellRoles=[u.d.IGNORED,u.d.BACKGROUND,u.d.TIME,u.d.DATA],this.timeTypeOptions=[u.h.TIME_IN_HOURS,u.h.TIME_IN_MINUTES,u.h.TIME_IN_SECONDS,u.h.IMG_NUMBER],this.lastCol=e.lastCol,this.showTime=e.showTime,this.show(e.selectedRange,e.label)}ngOnInit(){}set showTime(t){this.cellRoles=t?[u.d.IGNORED,u.d.BACKGROUND,u.d.TIME,u.d.DATA]:[u.d.IGNORED,u.d.BACKGROUND,u.d.DATA]}isData(){return this.cellRole===u.d.DATA.name}isTime(){return this.cellRole===u.d.TIME.name}isImageBased(){return this.isTime()&&this.timeType===u.h.IMG_NUMBER.name}show(t,e){t&&(this.orgRange=t,this.rangeSize=t.range.size(),this.rangeLabel=e||t.columnRangeLabel,t.role&&(this.cellRole=t.role.name),t.role==u.d.DATA&&t.details&&(this.dataLabel=t.details.dataLabel),t.role==u.d.TIME&&t.details&&(this.timeType=t.details.timeType.name,this.timeOffset=t.details.timeOffset,this.imgInterval=t.details.imgInterval,this.firstRow=t.details.firstRow))}hide(){this.myself.close()}accepted(){this.isValid()&&this.myself.close(this.emitDescription())}acceptedAndNext(){if(!this.isValid())return;const t=this.emitDescription();if(t.range.lastCol>=this.lastCol);else{const e=this.nextRange(t.range,this.rangeSize),i=new u.c(e);i.role=u.d.DATA,i.details=t.details,t.follow=i}this.myself.close(t)}nextRange(t,e){const i=t.lastCol+1;let o=i+e-1;return o=Math.min(o,this.lastCol),new u.b(new u.a(i,t.first.row),new u.a(o,t.first.row))}emitDescription(){const t=this.recalculateRange(this.orgRange.range);let e={};if(this.isData())e=new u.f(this.dataLabel);else if(this.isTime()){const t=new u.g;t.firstRow=this.firstRow,t.timeType=u.h.get(this.timeType),t.timeOffset=this.timeOffset,this.isImageBased()&&(t.imgInterval=this.imgInterval),e=t}const i=new u.c(t,this.orgRange.content);return i.role=u.d.get(this.cellRole),i.details=e,i}isValid(){const t=[];return u.d.get(this.cellRole)||t.push("Unknown role: "+this.cellRole),this.isData()&&(this.dataLabel&&""!==this.dataLabel.trim()||(t.push("Non empty data label is required"),this.dataLabel=null)),this.isTime()?((!this.firstRow||this.firstRow<1)&&t.push("Row nr of the first time point must be >= 1"),this.isImageBased()&&(!this.imgInterval||this.imgInterval<=0)&&t.push("Image interval must be > 0")):(!this.rangeSize||this.rangeSize<1)&&t.push("Block size must be >= 1"),0===t.length&&(this.errors=null,!0)}recalculateRange(t){let e=t.first;if(this.isTime())return e=new u.a(e.col,this.firstRow),new u.b(e,e);if(this.rangeSize!==t.size()){const t=new u.a(Math.min(e.col+this.rangeSize-1,this.lastCol),e.row);return new u.b(e,t)}return t}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(p.g),b.Qb(p.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&b.Fc(w,!0),2&t&&b.wc(i=b.fc())&&(e.columnTypeForm=i.first)},decls:28,vars:8,consts:[["mat-dialog-title","",1,"modal-title"],["mat-dialog-close","","aria-label","Close","type","button",1,"close","float-right"],["aria-hidden","true"],["mat-dialog-content","",1,"modal-body"],["columnTypeForm","ngForm"],[1,"form-group"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],["class","form-group",4,"ngIf"],[4,"ngIf"],["mat-dialog-actions",""],[1,"btn","btn-primary","btn-sm","mr-1",3,"disabled","click"],[1,"btn","btn-primary","btn-sm","m-1",3,"disabled","click"],["mat-dialog-close","",1,"btn","btn-outline-secondary","btn-sm",3,"click"],["type","radio","required","","name","fCellRole",3,"value","ngModel","ngModelChange"],["fCellRole","ngModel"],["for","size"],["type","number","step","1","min","1","id","size","required","","name","fSize",1,"form-control",3,"ngModel","ngModelChange"],["fSize","ngModel"],["for","dataLabel"],["type","text","id","dataLabel","placeholder","e.g. TOC1 SD","required","","minlength","2","name","fDataLabel",1,"form-control",3,"ngModel","ngModelChange"],["fDataLabel","ngModel"],["for","timeType"],["id","timeType","required","","name","fTimeType",1,"form-control",3,"ngModel","ngModelChange"],["fTimeType","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","firstRow"],["type","number","id","firstRow","step","1","min","1","required","","placeholder","e.g. 2","name","fFirstRow",1,"form-control",3,"ngModel","ngModelChange"],["fFirstRow","ngModel"],["for","timeOffset"],["type","number","id","timeOffset","step","any","placeholder","e.g. -4","name","fTimeOffset",1,"form-control",3,"ngModel","ngModelChange"],["fTimeOffset","ngModel"],[3,"value"],["for","imgInterval"],["type","number","id","imgInterval","required","","step","any","min","0.01","placeholder","e.g. 1.5","name","fImgInterval",1,"form-control",3,"ngModel","ngModelChange"],["fImgInterval","ngModel"],["dismissOnTimeout","3000","dismissible","true","class","alert alert-danger","role","alert",4,"ngFor","ngForOf"],["dismissOnTimeout","3000","dismissible","true","role","alert",1,"alert","alert-danger"]],template:function(t,e){if(1&t&&(b.Wb(0,"h4",0),b.Jc(1,"Describe data column(s) "),b.Wb(2,"button",1),b.Wb(3,"span",2),b.Jc(4,"\xd7"),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"div",3),b.Wb(6,"p"),b.Jc(7," Columns "),b.Wb(8,"strong"),b.Jc(9),b.Vb(),b.Vb(),b.Wb(10,"form",null,4),b.Wb(12,"div",5),b.Wb(13,"label"),b.Jc(14,"Column type"),b.Vb(),b.Wb(15,"ul",6),b.Hc(16,C,4,3,"li",7),b.Vb(),b.Vb(),b.Hc(17,T,5,1,"div",8),b.Hc(18,V,5,1,"div",8),b.Hc(19,W,18,5,"div",9),b.Hc(20,y,2,1,"div",9),b.Vb(),b.Vb(),b.Wb(21,"div",10),b.Wb(22,"button",11),b.ec("click",(function(){return e.acceptedAndNext()})),b.Jc(23,"OK and Next "),b.Vb(),b.Wb(24,"button",12),b.ec("click",(function(){return e.accepted()})),b.Jc(25,"OK "),b.Vb(),b.Wb(26,"button",13),b.ec("click",(function(){return e.hide()})),b.Jc(27,"Cancel"),b.Vb(),b.Vb()),2&t){const t=b.xc(11);b.Cb(9),b.Lc("[",e.rangeLabel,"]"),b.Cb(7),b.oc("ngForOf",e.cellRoles),b.Cb(1),b.oc("ngIf",!e.isTime()),b.Cb(1),b.oc("ngIf",e.isData()),b.Cb(1),b.oc("ngIf",e.isTime()),b.Cb(1),b.oc("ngIf",e.errors),b.Cb(2),b.oc("disabled",!t.form.valid),b.Cb(2),b.oc("disabled",!t.form.valid)}},directives:[p.h,p.d,p.e,s.C,s.q,s.r,o.l,o.m,p.c,s.w,s.c,s.y,s.p,s.s,s.u,s.l,s.z,s.t,s.B],encapsulation:2}),t})(),D=(()=>{class t{constructor(t){this.show(t)}ngOnInit(){}show(t){this.orgRange=t,this.rowNr=t.range.first.row,this.values=t.content}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(p.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["ng-component"]],decls:24,vars:3,consts:[["mat-dialog-title","",1,"modal-title"],["mat-dialog-close","","aria-label","Close","type","button",1,"close","float-right"],["aria-hidden","true"],["mat-dialog-content","",1,"modal-body"],[1,"word_wrapping"],["mat-dialog-actions",""],[1,"btn","btn-primary","btn-sm","mr-1",3,"mat-dialog-close"],["mat-dialog-close","",1,"btn","btn-outline-secondary","btn-sm"]],template:function(t,e){1&t&&(b.Wb(0,"h4",0),b.Jc(1,"Use row content as data labels(s) "),b.Wb(2,"button",1),b.Wb(3,"span",2),b.Jc(4,"\xd7"),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"div",3),b.Wb(6,"div"),b.Wb(7,"p"),b.Jc(8,"Use values from row "),b.Wb(9,"strong"),b.Jc(10),b.Vb(),b.Jc(11," as data labels"),b.Vb(),b.Wb(12,"p"),b.Jc(13,"Existing labels and column types will be overwritten"),b.Vb(),b.Vb(),b.Wb(14,"div",4),b.Wb(15,"p"),b.Wb(16,"strong"),b.Jc(17,"Labels: "),b.Vb(),b.Jc(18),b.Vb(),b.Vb(),b.Vb(),b.Wb(19,"div",5),b.Wb(20,"button",6),b.Jc(21,"Copy labels"),b.Vb(),b.Wb(22,"button",7),b.Jc(23,"Cancel"),b.Vb(),b.Vb()),2&t&&(b.Cb(10),b.Lc("[",e.rowNr,"]"),b.Cb(8),b.Kc(e.values),b.Cb(2),b.oc("mat-dialog-close",e.orgRange))},directives:[p.h,p.d,p.e,p.c],encapsulation:2}),t})();var O=i("9+85");function B(t,e){1&t&&(b.Wb(0,"div",9),b.Wb(1,"strong"),b.Jc(2,"Missing data labels. Please use one of the methods:"),b.Vb(),b.Wb(3,"ul"),b.Wb(4,"li"),b.Jc(5,"Click and draw over the headers of columns to select the range and assign the data labels in the popup dialog. "),b.Vb(),b.Wb(6,"li"),b.Jc(7,"Use the form below to manually provide the column range and the data label."),b.Vb(),b.Vb(),b.Vb())}function A(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div"),b.Wb(1,"div",10),b.Wb(2,"label",11),b.Jc(3,"Time parameter: offset (hours)"),b.Vb(),b.Wb(4,"input",12,13),b.ec("ngModelChange",(function(e){return b.Ac(t),b.ic(2).timeColumnDescription.details.timeOffset=e})),b.Vb(),b.Vb(),b.Vb()}if(2&t){const t=b.ic(2);b.Cb(4),b.oc("ngModel",t.timeColumnDescription.details.timeOffset)}}function L(t,e){if(1&t){const t=b.Xb();b.Wb(0,"li",17),b.ec("click",(function(){b.Ac(t);const i=e.$implicit;return b.ic(3).editBlock(i)})),b.Wb(1,"span"),b.Wb(2,"strong"),b.Jc(3),b.Vb(),b.Jc(4),b.Vb(),b.Wb(5,"a",18),b.ec("click",(function(){b.Ac(t);const i=e.$implicit;return b.ic(3).deleteBlock(i)})),b.Wb(6,"i",19),b.Jc(7,"delete_forever"),b.Vb(),b.Vb(),b.Vb()}if(2&t){const t=e.$implicit;b.Cb(3),b.Kc(t.topcountLabel),b.Cb(1),b.Lc(" : ",t.value,"")}}function J(t,e){if(1&t&&(b.Wb(0,"div"),b.Wb(1,"p"),b.Wb(2,"strong"),b.Jc(3,"Columns descriptions (select to edit)"),b.Vb(),b.Vb(),b.Wb(4,"div",14),b.Wb(5,"ul",15),b.Hc(6,L,8,2,"li",16),b.Vb(),b.Vb(),b.Vb()),2&t){const t=b.ic(2);b.Cb(6),b.oc("ngForOf",t.dataBlocks)}}function S(t,e){if(1&t){const t=b.Xb();b.Wb(0,"th",20),b.ec("mousedown",(function(){b.Ac(t);const i=e.$implicit;return b.ic(2).thSelectStart(i)}))("mouseup",(function(){b.Ac(t);const i=e.$implicit;return b.ic(2).thSelectEnd(i)})),b.Jc(1),b.Vb()}if(2&t){const t=e.$implicit,i=b.ic(2);b.Cb(1),b.Lc(" ",i.dataModel.th[t]," ")}}function E(t,e){if(1&t&&(b.Wb(0,"td"),b.Jc(1),b.Vb()),2&t){const t=e.$implicit,i=b.ic().$implicit,o=b.ic(2);b.Gc("background-color",o.bgColors[t]?o.bgColors[t]:"inherited"),b.Cb(1),b.Lc("",i[t]," ")}}function F(t,e){if(1&t&&(b.Wb(0,"tr"),b.Wb(1,"td",21),b.Jc(2),b.Vb(),b.Hc(3,E,2,3,"td",22),b.Vb()),2&t){const t=e.index,i=b.ic(2);b.Cb(2),b.Kc(i.dataModel.specialRowsLabels[t]),b.Cb(1),b.oc("ngForOf",i.visibleColIx)}}function N(t,e){if(1&t&&(b.Wb(0,"td"),b.Jc(1),b.Vb()),2&t){const t=e.$implicit,i=b.ic().$implicit,o=b.ic(2);b.Gc("background-color",o.bgColors[t]?o.bgColors[t]:"inherited"),b.Cb(1),b.Lc("",i[t]," ")}}function G(t,e){if(1&t&&(b.Wb(0,"tr"),b.Wb(1,"td",21),b.Jc(2),b.Vb(),b.Hc(3,N,2,3,"td",22),b.Vb()),2&t){const t=e.index,i=b.ic(2);b.Cb(2),b.Kc(i.dataModel.rowsLabels[t]),b.Cb(1),b.oc("ngForOf",i.visibleColIx)}}function x(t,e){if(1&t){const t=b.Xb();b.Wb(0,"div"),b.Rb(1,"hr"),b.Wb(2,"div"),b.Wb(3,"h4"),b.Jc(4,"Current Topcount import parameters "),b.Vb(),b.Hc(5,B,8,0,"div",1),b.Hc(6,A,6,1,"div",0),b.Hc(7,J,7,1,"div",2),b.Wb(8,"div"),b.Wb(9,"button",3),b.ec("click",(function(){return b.Ac(t),b.ic().accept()})),b.Jc(10,"Import timeseries "),b.Vb(),b.Vb(),b.Vb(),b.Rb(11,"hr"),b.Wb(12,"h4"),b.Jc(13,"Data table "),b.Wb(14,"small"),b.Jc(15,"(only top rows)"),b.Vb(),b.Vb(),b.Wb(16,"p"),b.Jc(17,"Click on column headers for description options"),b.Vb(),b.Wb(18,"div",4),b.Wb(19,"table",5),b.Wb(20,"thead"),b.Wb(21,"tr",6),b.Rb(22,"th"),b.Hc(23,S,2,1,"th",7),b.Vb(),b.Vb(),b.Wb(24,"tbody"),b.Hc(25,F,4,2,"tr",8),b.Hc(26,G,4,2,"tr",8),b.Vb(),b.Vb(),b.Vb(),b.Vb()}if(2&t){const t=b.ic();b.Cb(5),b.oc("ngIf",!t.hasData()),b.Cb(1),b.oc("ngIf",t.timeColumnDescription),b.Cb(1),b.oc("ngIf",t.dataBlocks&&t.dataBlocks.length>0),b.Cb(2),b.oc("disabled",t.blocked||!t.hasTime()||!t.hasData()),b.Cb(14),b.oc("ngForOf",t.visibleColIx),b.Cb(2),b.oc("ngForOf",t.dataModel.specialRows),b.Cb(1),b.oc("ngForOf",t.dataModel.rows)}}let H=(()=>{class t{constructor(t,e){this.confDialogs=t,this.matDialog=e,this.onAccepted=new b.o,this.blocked=!1,this.confirmDataLoss=!1,this.columnBlocks=new u.e,this.dataBlocks=[],this.bgColors=[]}set dataTable(t){if(!t||t.length<1)return;const e=new f(t,this.topcountHeaders(),void 0,[[]],["L."]);this.dataModel=e,this.lastCol=e.width,this.visibleColIx=[];for(let i=0;i<e.width;i++)this.visibleColIx.push(i);this.initTime()}topcountHeaders(){const t=[];return["A","B","C","D","E","F","G","H"].forEach(e=>{for(let i=1;i<13;i++)t.push(e+i)}),t}initTime(){const t=new u.b(new u.a(0,0),new u.a(0,0)),e=new u.g;e.timeType=u.h.TIME_IN_HOURS,e.timeOffset=0,e.firstRow=1;const i=new u.c(t);i.role=u.d.TIME,i.details=e,this.timeColumnDescription=i}hasTime(){return this.timeColumnDescription&&this.timeColumnDescription.role===u.d.TIME}hasData(){return this.dataBlocks.some(t=>t.details.role===u.d.DATA)}rowSelected(t){const e=this.joinRow(t),i=new u.a(0,t+1),o=new u.b(i,i),s=new u.c(o,e);this.askCopyRow(s)}askCopyRow(t){this.matDialog.open(D,{data:t,autoFocus:!1}).afterClosed().subscribe(t=>{t&&this.copyRowAsLabels(t)})}thSelectStart(t){this.thSelectedCol=t}thSelectEnd(t){if(void 0!==this.thSelectedCol&&null!=this.thSelectedCol){const e=new u.a(this.thSelectedCol+1,1),i=new u.a(t+1,1),o=new u.b(e,i),s=new u.c(o,void 0),l=this.columnBlocks.details(e.col);l&&(s.role=l.role,s.details=l.details),this.thSelectedCol=void 0,this.askColumnsDetails(s)}}askColumnsDetails(t){const e=this.rangeToTopcountLabel(t),i=new R(t,this.lastCol,!1,e);this.matDialog.open(M,{data:i,autoFocus:!1}).afterClosed().subscribe(t=>{if(t){const e=t.follow;t.follow=void 0,this.setColumnType(t),e&&this.askColumnsDetails(e)}})}rangeToTopcountLabel(t){const e=t.range;return Object(u.j)(e.firstCol)+"-"+Object(u.j)(e.lastCol)}editBlock(t){t&&this.askColumnsDetails(t.details)}deleteBlock(t){t&&(t.details.role==u.d.TIME?this.clearTime():this.resetRegion(t.details.range),this.dataBlocks=this.columnBlocks.blocks)}accept(){if(!this.hasTime()||!this.hasData())return;let t=Promise.resolve(!0);this.containsDataGaps()&&(t=this.confDialogs.confirm("Do you want to import partial data?","Not all columns are described. Data columns without annotations will not be imported.<br>Click OK if you want to proceed.").toPromise()),t.then(t=>!!t&&(!this.confirmDataLoss||this.confDialogs.confirm("Do you want to replace the existing data?","It will also erase all analysis results. <br>Click OK if you want to proceed.").toPromise())).then(t=>{t&&this.emitParameters()}).catch(t=>console.log("Dialog error: "+t))}containsDataGaps(){if(this.dataBlocks.length<1)return!0;if(this.dataBlocks[this.dataBlocks.length-1].end<this.lastCol)return!0;let t=this.dataBlocks[0].start-1;for(let e=0;e<this.dataBlocks.length;e++){if(this.dataBlocks[e].start!==t+1)return!0;t=this.dataBlocks[e].end}return!1}emitParameters(){const t=new r.c;t.timeColumn=this.timeColumnDescription,t.dataBlocks=this.dataBlocks.map(t=>t.details),this.onAccepted.emit(t)}joinRow(t){return this.dataModel.rows[t].slice(0,10).join(" | ")+"..."}setColumnType(t){if(t&&void 0!==t.role){let e;switch(this.timeColumnDescription&&(t.role==u.d.TIME||this.timeColumnDescription.firstCol>=t.firstCol&&this.timeColumnDescription.firstCol<=t.lastCol)&&this.clearTime(),t.role){case u.d.IGNORED:e="ign.";break;case u.d.BACKGROUND:e="bcg.";break;case u.d.TIME:e="Time";break;case u.d.DATA:e=t.details.dataLabel}this.columnBlocks.insert(t,e),this.columnBlocks.merge(),this.dataBlocks=this.columnBlocks.blocks;const i=this.dataModel.specialRows[0];if(i)for(let o=t.firstCol-1;o<t.lastCol;o++)i[o]=e;t.role==u.d.TIME&&(this.timeColumnDescription=t),this.updateBackgrounds()}}copyRowAsLabels(t){if(t){this.clearTime();const e=this.dataModel.specialRows[0];this.dataModel.rows[t.range.first.row-1].forEach((t,i)=>{if(t){const o=new u.f(t),s=new u.a(i+1,0),l=new u.b(s,s),n=new u.c(l,void 0);n.details=o,n.role=u.d.DATA,this.columnBlocks.insert(n,t),e[i]=t}}),this.columnBlocks.merge(),this.dataBlocks=this.columnBlocks.blocks,this.updateBackgrounds()}}clearTime(){this.timeColumnDescription&&(this.resetRegion(this.timeColumnDescription.range),this.timeColumnDescription=void 0)}updateBackgrounds(){for(let t=0;t<this.dataBlocks.length;t++){const e=this.dataBlocks[t];let i=g.color(t);e.details.role==u.d.IGNORED&&(i=g.IGNORED_BG),e.details.role==u.d.BACKGROUND&&(i=g.NOISE_BG),e.details.role==u.d.TIME&&(i=g.TIME_BG);for(let t=e.start-1;t<e.end;t++)this.bgColors[t]=i}}resetRegion(t){this.resetLabels(t),this.resetBackground(t),this.columnBlocks.delete(t)}resetBackground(t){for(let e=t.firstCol-1;e<t.lastCol;e++)this.bgColors[e]="transparent"}resetLabels(t){const e=this.dataModel.specialRows[0];for(let i=t.firstCol-1;i<t.lastCol;i++)e[i]="-"}fakeData(){const t=[];let e=[];e.push("");for(let i=1;i<25;i++)e.push("RO "+i);t.push(e),e=[],e.push("");for(let i=1;i<25;i++)e.push("cls"+Math.round(i/3));t.push(e);for(let i=1;i<5;i++){e=[],e.push(""+i);for(let t=1;t<25;t++)e.push(""+(i+t));t.push(e)}return t}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(O.a),b.Qb(p.b))},t.\u0275cmp=b.Kb({type:t,selectors:[["bd2-describe-topcount-table"]],inputs:{blocked:"blocked",confirmDataLoss:"confirmDataLoss",dataTable:"dataTable"},outputs:{onAccepted:"onAccepted"},decls:1,vars:1,consts:[[4,"ngIf"],["type","danger","class","alert alert-danger","role","alert",4,"ngIf"],["style","",4,"ngIf"],[1,"btn","btn-primary",3,"disabled","click"],[2,"overflow-x","auto"],["role","grid",1,"table","table-bordered","excel-table",2,"width","auto"],["role","row"],[3,"mousedown","mouseup",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["type","danger","role","alert",1,"alert","alert-danger"],[1,"form-group"],["for","timeOffset"],["type","number","id","timeOffset","step","any","placeholder","e.g. -4","name","fTimeOffset",1,"form-control","short-input",3,"ngModel","ngModelChange"],["fTimeOffset","ngModel"],[2,"max-height","20em","overflow-y","auto","margin-bottom","1em"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],["role","button","aria-label","delete",1,"float-right",3,"click"],[1,"material-icons","bd-icon","bd-primary"],[3,"mousedown","mouseup"],[1,"rowh"],[3,"background-color",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&b.Hc(0,x,27,7,"div",0),2&t&&b.oc("ngIf",e.dataModel)},directives:[o.m,o.l,s.u,s.c,s.p,s.s],encapsulation:2}),t})();function K(t,e){if(1&t){const t=b.Xb();b.Wb(0,"bd2-describe-topcount-table",1),b.ec("onAccepted",(function(e){return b.Ac(t),b.ic().import(e)})),b.Vb()}if(2&t){const t=b.ic();b.oc("dataTable",t.dataTable)("blocked",t.blocked)("confirmDataLoss",null==t.assay?null:t.assay.features.hasTSData)}}const z=[{path:"",children:[{path:":format/:fileId",component:(()=>{class t extends c.a{constructor(t,e,i){super(i),this.fileViewService=t,this.route=e,this.blocked=!1,this.titlePart=" Import Data"}ngOnInit(){super.ngOnInit(),this.route.params.forEach(t=>{const e=t.fileId,i=t.format;e&&i?this.loadData(i,e):console.log(this.constructor.name+" null parameters")})}loadData(t,e){this.format=r.e.get(t),this.fileId=e,this.blocked=!1,this.fileViewService.getSimpleTableView(e).then(t=>{this.dataTable=t}).catch(t=>{this.feedback.error(t)})}import(t){if(t&&this.fileId&&this.format){this.blocked=!0;const e=new r.d;e.fileId=this.fileId,e.importFormat=this.format,e.importParameters=t,this.experimentService.importTimeSeries(this.assay,e).toPromise().then(t=>(this.feedback.success("Imported "+t.imported+" timeseries"),t)).then(()=>this.refreshModel()).then(t=>this.goToTSView()).catch(t=>{this.blocked=!1,this.feedback.error(t)})}}goToTSView(){const t=this.expHomePath();t.push("data"),t.push("view"),t.push("ts"),this.router.navigate(t)}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(h),b.Qb(a.a),b.Qb(m.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["ng-component"]],features:[b.Bb([]),b.zb],decls:3,vars:1,consts:[[3,"dataTable","blocked","confirmDataLoss","onAccepted",4,"ngIf"],[3,"dataTable","blocked","confirmDataLoss","onAccepted"]],template:function(t,e){1&t&&(b.Wb(0,"h3"),b.Jc(1,"Timeseries import"),b.Vb(),b.Hc(2,K,1,3,"bd2-describe-topcount-table",0)),2&t&&(b.Cb(2),b.oc("ngIf","TOPCOUNT"===(null==e.format?null:e.format.name)))},directives:[o.m,H],encapsulation:2}),t})()}]}];let _=(()=>{class t{}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(z)],a.f]}),t})(),U=(()=>{class t{}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[o.c,s.j,s.x,l.a,n.a,_]]}),t})()}}]);