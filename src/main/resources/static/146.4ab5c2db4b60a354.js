"use strict";(self.webpackChunkbiodare2_ui=self.webpackChunkbiodare2_ui||[]).push([[146],{9146:(le,P,l)=>{l.r(P),l.d(P,{TsHeatmapModule:()=>u});var p=l(6895),c=l(4006),J=l(8739),w=l(9299),U=l(471),C=l(8372),Q=l(4661),O=l(3174),Y=l(6598),$=l(6484),B=l(2584),t=l(4650),L=l(9174),E=l(2724),R=l(2110),v=l(7084),q=l(3987),W=l(5545),D=l(4698),M=l(455),_=l(1281),I=l(4859);function G(n,i){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e,"")}}function V(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"select",14),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s._changePageSize(o))}),t.YNc(2,G,2,2,"option",15),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pageSize),t.xp6(1),t.Q6J("ngForOf",e._displayedPageSizeOptions)}}function X(n,i){if(1&n&&(t.TgZ(0,"div",17),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("",e.pageSize," ")}}class x{get pageIndex(){return this._pageIndex}set pageIndex(i){this._pageIndex=Math.max((0,_.su)(i),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(i){this._length=(0,_.su)(i),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(i){this._pageSize=Math.max((0,_.su)(i),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(i){this._pageSizeOptions=(i||[]).map(e=>(0,_.su)(e)),this._updateDisplayedPageSizeOptions()}constructor(i){this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.disabled=!1,this.page=new t.vpe,this.getRangeLabel=(e,a,o)=>{if(0==o||0==a)return`0 of ${o}`;const s=e*a;return`${s+1} \u2013 ${s<(o=Math.max(o,0))?Math.min(s+a,o):s+a} of ${o}`}}ngOnInit(){this._updateDisplayedPageSizeOptions()}nextPage(){if(!this.hasNextPage())return;const i=this.pageIndex;this.pageIndex++,this._emitPageEvent(i)}previousPage(){if(!this.hasPreviousPage())return;const i=this.pageIndex;this.pageIndex--,this._emitPageEvent(i)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const i=this.getNumberOfPages()-1;return this.pageIndex<i&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((i,e)=>i-e),this._changeDetectorRef.markForCheck()}_changePageSize(i){const a=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/i)||0,this.pageSize=i,this._emitPageEvent(a)}_emitPageEvent(i){this.page.emit({previousPageIndex:i,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}function K(n,i){if(1&n&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.label)}}function tt(n,i){if(1&n&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.label)}}function et(n,i){if(1&n&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.label)}}x.\u0275fac=function(i){return new(i||x)(t.Y36(t.sBO))},x.\u0275cmp=t.Xpm({type:x,selectors:[["bd2-simple-paginator"]],inputs:{pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",disabled:"disabled"},outputs:{page:"page"},decls:17,vars:7,consts:[[1,"mat-paginator"],[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],[4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["required","",1,"mat-paginator-page-size-select",2,"font-size","12px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5," Items per page: "),t.qZA(),t.YNc(6,V,3,2,"div",5),t.YNc(7,X,2,1,"div",6),t.qZA(),t.TgZ(8,"div",7)(9,"div",8),t._uU(10),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return e.previousPage()}),t.O4$(),t.TgZ(12,"svg",10),t._UZ(13,"path",11),t.qZA()(),t.kcU(),t.TgZ(14,"button",12),t.NdJ("click",function(){return e.nextPage()}),t.O4$(),t.TgZ(15,"svg",10),t._UZ(16,"path",13),t.qZA()()()()()()),2&i&&(t.xp6(6),t.Q6J("ngIf",e._displayedPageSizeOptions.length>1),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length<=1),t.xp6(3),t.hij(" ",e.getRangeLabel(e.pageIndex,e.pageSize,e.length)," "),t.xp6(1),t.Q6J("disabled",e._previousButtonsDisabled()),t.uIk("aria-label","previous page"),t.xp6(3),t.Q6J("disabled",e._nextButtonsDisabled()),t.uIk("aria-label","next page"))},dependencies:[p.sg,p.O5,c.YN,c.Kr,c.EJ,c.JJ,c.Q7,c.On,I.lW],styles:[".mat-paginator-icon[_ngcontent-%COMP%]{width:28px;fill:currentColor}.mat-paginator-range-actions[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-paginator[_ngcontent-%COMP%]{display:block}.mat-paginator-outer-container[_ngcontent-%COMP%]{display:flex}.mat-paginator-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size[_ngcontent-%COMP%]{display:flex;align-items:baseline;margin-right:8px}.mat-paginator-page-size-label[_ngcontent-%COMP%]{margin:0 4px}.mat-paginator-page-size-select[_ngcontent-%COMP%]{margin:6px 4px 0;width:70px}.mat-paginator-range-label[_ngcontent-%COMP%]{margin:0 32px 0 24px}"],changeDetection:0});const it=function(){return[10,25,50,100,200,500]};class f extends W.P{constructor(i){super(i),this.alignOptions=[new D.hW("NONE","none"),new D.hW("MEAN","mean")];const e=this.normalisationOptions.find(a=>"RANGE"===a.name);this.displayParamsForm.get("normalisation").setValue(e?.name),this.displayParamsForm.get("hourly").setValue(!0)}}f.\u0275fac=function(i){return new(i||f)(t.Y36(c.QS))},f.\u0275cmp=t.Xpm({type:f,selectors:[["bd2-heatmap-display-params-rform"]],inputs:{disabled:"disabled",totalTraces:"totalTraces",currentPage:"currentPage"},outputs:{displayParams:"displayParams"},features:[t.qOj],decls:46,vars:10,consts:[["role","form",1,"form-horizontal","container",3,"formGroup"],[1,"row"],[1,"col-md-8","col-sm-10"],["formGroupName","timeScale",1,"form-group","row"],[1,"col-md-3","col-sm-3"],["for","timeStart",1,"col-md-1","col-sm-2"],["type","number","step","any","min","0","size","5","id","timeStart","required","","formControlName","timeStart",1,"form-control"],["for","timeEnd",1,"col-md-1","col-sm-1"],["type","number","step","any","min","0","size","5","required","","id","timeEnd","formControlName","timeEnd",1,"form-control"],[1,"col-md-2","col-sm-4"],["formControlName","hourly",1,"mr-3"],[1,"form-group","row"],["for","detrending",1,"col-sm-2"],[1,"col-sm-3"],["required","","id","detrending","formControlName","detrending",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-1"],["for","align",1,"col-sm-1"],["required","","id","align","formControlName","align",1,"form-control"],[1,"col-sm-2"],["for","normalisation"],["required","","id","normalisation","formControlName","normalisation",1,"form-control"],[1,"col-sm"],["formControlName","trimFirst",1,"mr-3"],["formControlName","log2"],[1,"col-sm-8"],[3,"length","disabled","pageSize","pageIndex","pageSizeOptions","page"],["dataPaginator",""],[3,"value"]],template:function(i,e){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Time range"),t.qZA(),t.TgZ(6,"label",5),t._uU(7,"from:"),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"label",7),t._uU(11,"to:"),t.qZA(),t.TgZ(12,"div",4),t._UZ(13,"input",8),t.qZA()()(),t.TgZ(14,"div",9)(15,"mat-slide-toggle",10),t._uU(16,"hourly"),t.qZA()()(),t.TgZ(17,"div",11)(18,"label",12),t._uU(19,"Detrending"),t.qZA(),t.TgZ(20,"div",13)(21,"select",14),t.YNc(22,K,2,2,"option",15),t.qZA()(),t._UZ(23,"div",16),t.TgZ(24,"label",17),t._uU(25,"Align"),t.qZA(),t.TgZ(26,"div",13)(27,"select",18),t.YNc(28,tt,2,2,"option",15),t.qZA()()(),t.TgZ(29,"div",11)(30,"div",19)(31,"label",20),t._uU(32,"Normalize"),t.qZA()(),t.TgZ(33,"div",13)(34,"select",21),t.YNc(35,et,2,2,"option",15),t.qZA()(),t.TgZ(36,"div",22)(37,"mat-slide-toggle",23),t._uU(38,"within range"),t.qZA(),t.TgZ(39,"mat-slide-toggle",24),t._uU(40,"log2 transf."),t.qZA()()(),t.TgZ(41,"div",11),t._UZ(42,"label",19),t.TgZ(43,"div",25)(44,"bd2-simple-paginator",26,27),t.NdJ("page",function(o){return e.loadDataPage(o)}),t.qZA()()()()),2&i&&(t.Q6J("formGroup",e.mainForm),t.xp6(22),t.Q6J("ngForOf",e.detrendingOptions),t.xp6(6),t.Q6J("ngForOf",e.alignOptions),t.xp6(7),t.Q6J("ngForOf",e.normalisationOptions),t.xp6(9),t.Q6J("length",e.totalTraces)("disabled",e.disabledPagination)("pageSize",e.currentPage.pageSize)("pageIndex",e.currentPage.pageIndex)("pageSizeOptions",t.DdM(9,it)))},dependencies:[p.sg,c._Y,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.Q7,c.qQ,c.sg,c.u,c.x0,M.Rr,x],encapsulation:2});var nt=l(7579),k=l(2805),N=l(2443),at=l(8663),ot=l(4038),T=l(2491),st=l(3511),S=l(9515),rt=l(4956),A=l(7246),H=l(8505);const F=["text"],lt=["bd2hm-label-box",""];function ct(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"text",9),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.uIk("y",e.yMiddle)("font-size",e.fontSize()),t.xp6(1),t.Oqu(e.serie.label)}}function pt(n,i){if(1&n){const e=t.EpF();t.O4$(),t.TgZ(0,"g",1),t.YNc(1,ct,2,3,"text",2),t.TgZ(2,"g",3),t.NdJ("mouseout",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleLabel(!1))})("mouseover",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleLabel(!0))}),t._UZ(3,"rect",4),t.TgZ(4,"g",5),t._UZ(5,"rect",6),t.TgZ(6,"text",7,8),t._uU(8),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.alwaysOn),t.xp6(2),t.uIk("y",e.triggerY)("height",e.triggerHeight)("fill",e.color),t.xp6(1),t.uIk("opacity",e.ready?1:0)("display",e.toggled?void 0:"none"),t.xp6(1),t.uIk("width",e.textBWidth)("y",e.textBY)("height",e.textBHeight),t.xp6(1),t.uIk("y",e.yMiddle),t.xp6(2),t.Oqu(e.serie.label)}}const ht=["bd2hm-labels",""];function gt(n,i){if(1&n&&(t.O4$(),t._UZ(0,"g",3)),2&n){const e=i.$implicit,a=t.oxw(2);t.Q6J("serie",e)("yStart",a.yStart(e))("maxHeight",a.maxHeight())("alwaysOn",a.alwaysOn)}}function mt(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"g",1),t.YNc(1,gt,1,4,"g",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.data)("ngForTrackBy",e.trackByIndex)}}const dt=["bd2hm-tooltip",""];function ut(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"g",1)(1,"g"),t._UZ(2,"rect"),t.TgZ(3,"text",null,2)(5,"tspan",3),t._uU(6),t.qZA(),t.TgZ(7,"tspan",4),t._uU(8),t.qZA()()()()),2&n){const e=t.oxw();t.uIk("display",e.show?void 0:"none")("transform",e.position),t.xp6(1),t.uIk("opacity",e.ready?1:0),t.xp6(1),t.uIk("x",e.textBX)("width",e.textBWidth)("y",e.textBY)("height",e.textBHeight),t.xp6(4),t.Oqu(e.label),t.xp6(2),t.Oqu(e.values)}}const xt=["bd2hm-pane-back",""],ft=["box"],yt=["bd2hm-data-point-box",""];function bt(n,i){if(1&n&&(t.O4$(),t._UZ(0,"rect",null,1)),2&n){const e=t.oxw();t.uIk("x",e.xPosition)("y",e.yPosition)("width",e.xWidth)("height",e.yHeight)("fill",e.colorScale(e.point.y))("stroke",e.colorScale(e.point.y))}}const vt=["bd2hm-serie-row",""];function _t(n,i){if(1&n&&(t.O4$(),t._UZ(0,"g",3)),2&n){const e=i.$implicit,a=t.oxw(2);t.Q6J("point",e)("xScale",a.graphic.xScale)("yPosition",a.yPosition)("yHeight",a.yHeight)("colorScale",a.graphic.colorScale)("label",a.serie.label)}}function Tt(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"g",1),t.YNc(1,_t,1,6,"g",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.serie.data)("ngForTrackBy",e.trackByIndex)}}const St=["bd2hm-series-box",""];function Zt(n,i){if(1&n&&(t.O4$(),t._UZ(0,"g",1)),2&n){const e=i.$implicit,a=t.oxw();t.Q6J("graphic",a.graphic)("serie",e)}}const Pt=["bd2hm-vtick-mark",""];function wt(n,i){if(1&n&&(t.O4$(),t._UZ(0,"line",2)),2&n){const e=t.oxw();t.uIk("x1",e.tick.x)("x2",e.tick.x)("y2",e.marky2)}}function Ct(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"text"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.uIk("x",e.tick.x)("y",e.texty2)("dy",e.textdy),t.xp6(1),t.Oqu(e.tick.label)}}const Ot=["bd2hm-num-x-axis",""];function Bt(n,i){1&n&&(t.O4$(),t._UZ(0,"g",3)),2&n&&t.Q6J("tick",i.$implicit)}const Dt=["bd2hm-y-axis",""],Mt=["bd2hm-axis-box",""];function It(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"g",1),t._UZ(1,"g",2)(2,"g",3)(3,"g",4)(4,"g",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("top",!0)("xScale",e.graphic.xScale)("yPosition",0)("xDomain",e.graphic.xDomain),t.xp6(1),t.Q6J("top",!1)("xScale",e.graphic.xScale)("yPosition",e.graphic.workspaceHeight)("xDomain",e.graphic.xDomain),t.xp6(1),t.Q6J("left",!0)("yScale",e.graphic.yScale)("xPosition",0),t.xp6(1),t.Q6J("left",!1)("yScale",e.graphic.yScale)("xPosition",e.graphic.workspaceWidth)}}function kt(n,i){if(1&n&&(t.O4$(),t.TgZ(0,"svg",2)(1,"defs")(2,"filter",3),t._UZ(3,"feDropShadow",4),t.qZA(),t.TgZ(4,"pattern",5),t._UZ(5,"line",6),t.qZA()(),t.TgZ(6,"g",7),t._UZ(7,"g",8)(8,"g",9)(9,"g",10)(10,"g",11)(11,"g",12),t.qZA()()),2&n){const e=t.oxw();t.uIk("viewBox",e.graphic.viewBox),t.xp6(6),t.uIk("transform",e.graphic.mainPaneTransform),t.xp6(1),t.Q6J("graphic",e.graphic),t.xp6(1),t.Q6J("graphic",e.graphic),t.xp6(1),t.Q6J("graphic",e.graphic)("series",e.series),t.xp6(1),t.Q6J("graphic",e.graphic)("data",e.series)("alwaysOn",e.labelsAlwaysOn),t.xp6(1),t.Q6J("graphic",e.graphic)}}class Nt{constructor(){this.vMargin=25,this.hMargin=20,this.smallRowWidth=6,this.midRowWidth=12,this.bigRowWidth=25,this.rowGap=.05}}class At{}class Ht{constructor(i=0,e=0,a,o=!1,s=!1){this.x=i,this.y=e,this.label=a,this.top=o,this.left=s}}class h{constructor(i,e,a,o){this.x=i,this.y=e,this.left=a,this.right=o,this.width=o-a}}class Ft{}let Z=(()=>{class n{constructor(){this.request$=new nt.x}showTooltip(e,a,o){this.request$.next([!0,e,a,o])}hideTooltip(e,a){this.request$.next([!1,void 0,e,a])}ngOnDestroy(){this.request$.complete()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class zt{seriesToBoxes(i,e=!1){return i.map(a=>this.serieToBoxes(a,e))}serieToBoxes(i,e=!1){const a=Object.assign(new Ft,i);return a.data=e?this.pointsToAsymBoxes(i.data):this.pointsToSymBoxes(i.data),a}pointsToAsymBoxes(i,e=.5){if(!i||0===i.length)return[];if(1===i.length){const r=i[0];return[new h(r.x,r.y,r.x-e,r.x+e)]}const a=[],o=i[0];a.push(new h(o.x,o.y,(3*o.x-i[1].x)/2,(o.x+i[1].x)/2));for(let r=1;r<i.length-1;r++)a.push(this.asymBoxFromPoints(i[r],i[r-1],i[r+1]));const s=i[i.length-1];return a.push(new h(s.x,s.y,(i[i.length-2].x+s.x)/2,(3*s.x-i[i.length-2].x)/2)),a}asymBoxFromPoints(i,e,a){return new h(i.x,i.y,(e.x+i.x)/2,(i.x+a.x)/2)}pointsToSymBoxes(i,e=.5){if(!i||0===i.length)return[];if(1===i.length){const r=i[0];return[new h(r.x,r.y,r.x-e,r.x+e)]}const a=[],o=i[0];a.push(new h(o.x,o.y,(3*o.x-i[1].x)/2,(o.x+i[1].x)/2));for(let r=1;r<i.length-1;r++)a.push(this.symBoxFromPoints(i[r],i[r-1],i[r+1]));const s=i[i.length-1];return a.push(new h(s.x,s.y,(i[i.length-2].x+s.x)/2,(3*s.x-i[i.length-2].x)/2)),a}symBoxFromPoints(i,e,a){const r=Math.min(i.x-e.x,a.x-i.x)/2;return new h(i.x,i.y,i.x-r,i.x+r)}}class Ut{prepareGraphicContext(i,e,a=!1){const o=new At;return this.calculateDimensions(o,i,e),this.addPaneAttributes(o,e),this.addScales(o,i,e,a),this.addFormatters(o,i),o.labelsColors=this.labelsColors(i),o}calculateDimensions(i,e,a){i.pWidth=500,i.workspaceWidth=i.pWidth-3*a.hMargin,i.workspaceHeight=this.calculateWorkspaceHeight(e,a),i.pHeight=i.workspaceHeight+2*a.vMargin}calculateWorkspaceHeight(i,e){return i.length<=25?i.length*e.bigRowWidth:i.length<=100?i.length*e.midRowWidth:i.length*e.smallRowWidth}addPaneAttributes(i,e){i.viewBox=`0 0 500 ${i.pHeight}`,i.mainPaneTransform=`translate(${2*e.hMargin}, ${e.vMargin})`}addScales(i,e,a,o){let s=this.timeDomain(e);i.xDomain=s;const r=this.timeMargin(e,s);s=[s[0]-r,s[1]+r],i.xScale=(0,N.Z)().clamp(!0).domain(s).range([0,i.workspaceWidth]);const g=e.map(m=>m.key);i.yDomain=g,i.yScale=(0,at.Z)().paddingInner(a.rowGap).paddingOuter(0).domain(g).range([0,i.workspaceHeight]),i.colorScale=this.heatmapScale(e,o)}addFormatters(i,e){const a=this.timeDomain(e);i.domainFormatter=this.formatForDomain(a);const o=this.valuesRange(e);i.valuesFormatter=this.formatForDomain(o)}timeMargin(i,e){const a=e[0];let o=.5;return i.filter(s=>s.data&&s.data.length>0&&s.data[0].x===a).forEach(s=>{const r=s.data[0];r instanceof h&&(o=Math.max(o,r.x-r.left))}),o}timeDomain(i){let e=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return i.forEach(o=>{o.data&&o.data.length>0&&(e=Math.min(e,o.data[0].x),a=Math.max(a,o.data[o.data.length-1].x))}),e=isFinite(e)?e:0,a=isFinite(a)?a:1,[e,a]}heatmapScale(i,e){let a=this.valuesRange(i);if(e){const s=Math.max(Math.abs(a[0]),Math.abs(a[1]));a=[-s,s]}const o=function Jt(n="#d62728",i="white",e="#1f77b4",a=.1){const o=(0,N.Z)().domain([-1,0,1]).range([(0,T.B8)(n),(0,T.B8)(i),(0,T.B8)(e)]);return(0,st.Z)(-1,1+a,a).map(g=>(0,T.B8)(o(g)).hex())}();return(0,ot.Z)().domain(a).range(o)}valuesRange(i){if(0===i.length)return[NaN,NaN];let e=i[0].min,a=i[0].max;return i.forEach(o=>{e=Math.min(e,o.min),a=Math.max(a,o.max)}),[e,a]}formatForDomain([i,e]){const a=e-i;return(0,S.WU)(a<1?".2~e":a<100?".2~f":a<1e5?"d":".2~e")}labelsColors(i){const e=i.length;return function(a){return(0,rt.Z)(a/e)}}}let Qt=(()=>{class n{constructor(e){this.changeDetector=e,this.alwaysOn=!0,this.color="rgb(67, 125, 179)",this.textBWidth=0,this.textBY=0,this.toggled=!1,this.ready=!1}ngOnInit(){}ngOnChanges(e){this.margin=this.marginSize(),this.triggerY=this.yStart+this.margin,this.triggerHeight=this.margin>1?this.maxHeight-2*this.margin:this.maxHeight-1,this.yMiddle=this.yStart+this.maxHeight/2}marginSize(){return this.maxHeight>=20?4:this.maxHeight>=12?2:1}fontSize(){return this.maxHeight>12?10:this.maxHeight>=6?this.maxHeight-3:0}toggleLabel(e){void 0===e&&(e=!this.toggled),this.ready=!1,this.toggled=e,this.toggled&&this.updateTextBBox().subscribe(a=>{this.toggled&&(this.ready=!0),this.changeDetector.markForCheck()})}updateTextBBox(){return(0,k.H)(0).pipe((0,A.U)(e=>this.textBBox()),(0,H.b)(e=>this.setTextBBox(e)))}setTextBBox(e){this.textBY=e.y-4,this.textBHeight=e.height+8,this.textBWidth=e.x+e.width+4}textBBox(){return this.textNode?this.textNode.nativeElement.getBBox():{x:0,y:0,height:0,width:0}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-label-box",""]],viewQuery:function(e,a){if(1&e&&t.Gf(F,5),2&e){let o;t.iGM(o=t.CRH())&&(a.textNode=o.first)}},inputs:{serie:"serie",yStart:"yStart",maxHeight:"maxHeight",alwaysOn:"alwaysOn",color:"color"},features:[t.TTD],attrs:lt,decls:1,vars:1,consts:[["class","bd2hm-label",4,"ngIf"],[1,"bd2hm-label"],["x","5","class","bd2hm-onLabel",4,"ngIf"],[3,"mouseout","mouseover"],["x","-7","width","7"],[1,"bd2hm-hover"],["x","0"],["x","5"],["text",""],["x","5",1,"bd2hm-onLabel"]],template:function(e,a){1&e&&t.YNc(0,pt,9,11,"g",0),2&e&&t.Q6J("ngIf",a.serie)},dependencies:[p.O5],encapsulation:2,changeDetection:0}),n})(),Yt=(()=>{class n{constructor(){this.alwaysOn=!0}trackByIndex(e,a){return e}ngOnInit(){}yStart(e){return this.graphic.yScale(e.key)}maxHeight(){return this.graphic.yScale.bandwidth()}color(e){return this.graphic.labelsColors(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-labels",""]],inputs:{graphic:"graphic",data:"data",alwaysOn:"alwaysOn"},attrs:ht,decls:1,vars:1,consts:[["class","bd2hm-labels",4,"ngIf"],[1,"bd2hm-labels"],["bd2hm-label-box","",3,"serie","yStart","maxHeight","alwaysOn",4,"ngFor","ngForOf","ngForTrackBy"],["bd2hm-label-box","",3,"serie","yStart","maxHeight","alwaysOn"]],template:function(e,a){1&e&&t.YNc(0,mt,2,2,"g",0),2&e&&t.Q6J("ngIf",a.graphic&&a.data)},dependencies:[p.sg,p.O5,Qt],encapsulation:2,changeDetection:0}),n})(),$t=(()=>{class n{constructor(e,a){this.tooltip=e,this.changeDetector=a,this.boxMargin=4,this.show=!1,this.ready=!1}ngOnInit(){this.subscription=this.tooltip.request$.pipe((0,C.b)(100)).subscribe(e=>this.handleRequest(e))}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}handleRequest([e,a,o,s]){e?this.showTooltip(a,o,s):this.hideTooltip(o,s)}showTooltip(e,a,o){this.ready=!1,this.label=this.formatLabel(e),this.values=this.formatValues(a),this.show=!0,this.changeDetector.detectChanges(),this.updateTextBBox().subscribe(s=>{this.show&&(this.position=this.translateToDataLocation(o,this.textBWidth,this.graphic.workspaceWidth),this.ready=!0),this.changeDetector.detectChanges()})}translateToDataLocation(e,a,o){let s=e.x+e.width+2*this.boxMargin;return s+a>=o&&(s=e.x-a),`translate(${s}, ${e.y})`}hideTooltip(e,a){this.show=!1,this.changeDetector.detectChanges()}formatValues(e){return`${this.graphic.domainFormatter(e.x)} : ${this.graphic.valuesFormatter(e.y)}`}updateTextBBox(){return(0,k.H)(0).pipe((0,A.U)(e=>this.textBBox()),(0,H.b)(e=>this.setTextBBox(e)))}setTextBBox(e){this.textBX=e.x-this.boxMargin,this.textBY=e.y-this.boxMargin,this.textBHeight=e.height+2*this.boxMargin,this.textBWidth=e.width+2*this.boxMargin}textBBox(){return this.textNode?this.textNode.nativeElement.getBBox():{x:0,y:0,height:0,width:0}}formatLabel(e){return e?e.length<40?e:e.substring(0,38)+"...":""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-tooltip",""]],viewQuery:function(e,a){if(1&e&&t.Gf(F,5),2&e){let o;t.iGM(o=t.CRH())&&(a.textNode=o.first)}},inputs:{graphic:"graphic",boxMargin:"boxMargin"},attrs:dt,decls:1,vars:1,consts:[["class","bd2hm-tooltipBox",4,"ngIf"],[1,"bd2hm-tooltipBox"],["text",""],["x","0"],["x","0","dy","1.2em"]],template:function(e,a){1&e&&t.YNc(0,ut,9,9,"g",0),2&e&&t.Q6J("ngIf",a.graphic)},dependencies:[p.O5],encapsulation:2,changeDetection:0}),n})(),Lt=(()=>{class n{constructor(){this.margin=2}ngOnInit(){}ngOnChanges(e){this.width=this.graphic.workspaceWidth-2*this.margin,this.height=this.graphic.workspaceHeight-2*this.margin,this.width<0&&(this.width=0),this.height<0&&(this.height=0)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-pane-back",""]],inputs:{graphic:"graphic",margin:"margin"},features:[t.TTD],attrs:xt,decls:1,vars:4,consts:[[1,"bd2hm-dataBackground"]],template:function(e,a){1&e&&(t.O4$(),t._UZ(0,"rect",0)),2&e&&t.uIk("x",a.margin)("y",a.margin)("width",a.width)("height",a.height)},encapsulation:2,changeDetection:0}),n})(),Et=(()=>{class n{constructor(e,a){this.tooltip=e,this.zone=a}ngOnChanges(e){if(this.xScale&&this.point){this.xPosition=this.xScale(this.point.left);const a=this.xScale(this.point.right)-this.xScale(this.point.left);this.xWidth=a>=2?a-1:1}}ngAfterViewInit(){this.boxNode&&this.prevBoxNode!==this.boxNode&&(this.removeMouseListeners(this.prevBoxNode),this.zone.runOutsideAngular(()=>{this.addMouseListeners(this.boxNode)}),this.prevBoxNode=this.boxNode)}ngOnInit(){}ngOnDestroy(){this.removeMouseListeners(this.boxNode)}addMouseListeners(e){e&&(e.nativeElement.addEventListener("mouseover",this.showTooltip.bind(this)),e.nativeElement.addEventListener("mouseout",this.hideTooltip.bind(this)))}removeMouseListeners(e){e&&(e.nativeElement.removeEventListener("mouseover",this.showTooltip),e.nativeElement.removeEventListener("mouseout",this.hideTooltip))}hideTooltip(e){this.tooltip.hideTooltip(this.point,{x:this.xPosition,y:this.yPosition,width:this.xWidth})}showTooltip(e){this.tooltip.showTooltip(this.label,this.point,{x:this.xPosition,y:this.yPosition,width:this.xWidth})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z),t.Y36(t.R0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-data-point-box",""]],viewQuery:function(e,a){if(1&e&&t.Gf(ft,5),2&e){let o;t.iGM(o=t.CRH())&&(a.boxNode=o.first)}},inputs:{point:"point",yPosition:"yPosition",yHeight:"yHeight",xScale:"xScale",colorScale:"colorScale",label:"label"},features:[t.TTD],attrs:yt,decls:1,vars:1,consts:[[4,"ngIf"],["box",""]],template:function(e,a){1&e&&t.YNc(0,bt,2,6,"rect",0),2&e&&t.Q6J("ngIf",a.point&&a.xScale)},dependencies:[p.O5],encapsulation:2,changeDetection:0}),n})(),Rt=(()=>{class n{constructor(){}trackByIndex(e,a){return e}ngOnInit(){}ngOnChanges(e){this.graphic&&this.serie&&(this.yPosition=this.graphic.yScale(this.serie.key),this.yHeight=this.graphic.yScale.bandwidth())}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-serie-row",""]],inputs:{graphic:"graphic",serie:"serie"},features:[t.TTD],attrs:vt,decls:1,vars:1,consts:[["class","bd2hm-serie",4,"ngIf"],[1,"bd2hm-serie"],["bd2hm-data-point-box","",3,"point","xScale","yPosition","yHeight","colorScale","label",4,"ngFor","ngForOf","ngForTrackBy"],["bd2hm-data-point-box","",3,"point","xScale","yPosition","yHeight","colorScale","label"]],template:function(e,a){1&e&&t.YNc(0,Tt,2,2,"g",0),2&e&&t.Q6J("ngIf",a.graphic&&a.serie)},dependencies:[p.sg,p.O5,Et],encapsulation:2,changeDetection:0}),n})(),qt=(()=>{class n{constructor(){}trackByIndex(e,a){return e}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-series-box",""]],inputs:{series:"series",graphic:"graphic"},attrs:St,decls:1,vars:2,consts:[["bd2hm-serie-row","",3,"graphic","serie",4,"ngFor","ngForOf","ngForTrackBy"],["bd2hm-serie-row","",3,"graphic","serie"]],template:function(e,a){1&e&&t.YNc(0,Zt,1,2,"g",0),2&e&&t.Q6J("ngForOf",a.series)("ngForTrackBy",a.trackByIndex)},dependencies:[p.sg,Rt],encapsulation:2,changeDetection:0}),n})(),Wt=(()=>{class n{constructor(){this.length=5}ngOnInit(){this.calculatePositions()}ngOnChanges(e){this.calculatePositions()}calculatePositions(){this.marky2=this.tick?.top?-this.length:this.length,this.texty2=this.tick?.top?-(this.length+4):this.length+4,this.textdy=this.tick?.top?0:"0.6em"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-vtick-mark",""]],inputs:{tick:"tick",length:"length"},features:[t.TTD],attrs:Pt,decls:2,vars:2,consts:[["y1","0",4,"ngIf"],[4,"ngIf"],["y1","0"]],template:function(e,a){1&e&&(t.YNc(0,wt,1,3,"line",0),t.YNc(1,Ct,2,4,"text",1)),2&e&&(t.Q6J("ngIf",a.tick),t.xp6(1),t.Q6J("ngIf",a.tick))},dependencies:[p.O5],encapsulation:2}),n})(),Gt=(()=>{class n{constructor(){this.top=!1,this.ticks=[]}trackByIndex(e,a){return e}ngOnInit(){}ngOnChanges(e){this.axisTransform=`translate(0,${this.yPosition})`,this.x2=this.xScale?.range()[1],this.ticks=this.prepareTicks(this.xScale)}prepareTicks(e){return this.calculateTicksPosition(e).map(o=>new Ht(e(o),0,o,this.top,!1))}calculateTicksPosition(e){if(!e)return[];const a=[],o=this.xDomain||e.domain(),s=Math.round(o[0]),r=Math.round(o[1]),g=this.domainStep(r-s);for(let m=s;m<=r;m+=g)a.push(m);return a}domainStep(e){return e<=25?4:e<=73?6:e<=169?12:24}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-num-x-axis",""]],inputs:{xScale:"xScale",xDomain:"xDomain",yPosition:"yPosition",top:"top"},features:[t.TTD],attrs:Ot,decls:3,vars:4,consts:[[1,"bd2hm-x-axis"],["x1","0","y1","0","y2","0"],["bd2hm-vtick-mark","","class","bd2hm-tickMark",3,"tick",4,"ngFor","ngForOf","ngForTrackBy"],["bd2hm-vtick-mark","",1,"bd2hm-tickMark",3,"tick"]],template:function(e,a){1&e&&(t.O4$(),t.TgZ(0,"g",0),t._UZ(1,"line",1),t.YNc(2,Bt,1,1,"g",2),t.qZA()),2&e&&(t.uIk("transform",a.axisTransform),t.xp6(1),t.uIk("x2",a.x2),t.xp6(1),t.Q6J("ngForOf",a.ticks)("ngForTrackBy",a.trackByIndex))},dependencies:[p.sg,Wt],encapsulation:2,changeDetection:0}),n})(),Vt=(()=>{class n{constructor(){this.left=!1}ngOnInit(){}ngOnChanges(e){this.axisTransform=`translate(${this.xPosition},0)`,this.y2=this.yScale?.range()[1]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-y-axis",""]],inputs:{yScale:"yScale",xPosition:"xPosition",left:"left"},features:[t.TTD],attrs:Dt,decls:2,vars:2,consts:[[1,"bd2hm-y-axis"],["x1","0","y1","0","x2","0"]],template:function(e,a){1&e&&(t.O4$(),t.TgZ(0,"g",0),t._UZ(1,"line",1),t.qZA()),2&e&&(t.uIk("transform",a.axisTransform),t.xp6(1),t.uIk("y2",a.y2))},encapsulation:2,changeDetection:0}),n})(),Xt=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","bd2hm-axis-box",""]],inputs:{graphic:"graphic"},attrs:Mt,decls:1,vars:1,consts:[["class","bd2hm-axisWrapper",4,"ngIf"],[1,"bd2hm-axisWrapper"],["bd2hm-num-x-axis","",1,"xTopAxis",3,"top","xScale","yPosition","xDomain"],["bd2hm-num-x-axis","",1,"xBottomAxis",3,"top","xScale","yPosition","xDomain"],["bd2hm-y-axis","",1,"yLeftAxis",3,"left","yScale","xPosition"],["bd2hm-y-axis","",1,"yRightAxis",3,"left","yScale","xPosition"]],template:function(e,a){1&e&&t.YNc(0,It,5,14,"g",0),2&e&&t.Q6J("ngIf",a.graphic)},dependencies:[p.O5,Gt,Vt],encapsulation:2,changeDetection:0}),n})(),jt=(()=>{class n{constructor(e,a){this.changeDetector=e,this.tooltip=a,this.asymmetric=!1,this.middleZero=!1,this.hidden=!1,this.labelsAlwaysOn=!0,this.lookAndFeel=new Nt,this.heatmapDataUtil=new zt,this.heatmapGraphUtil=new Ut}ngOnInit(){}ngOnDestroy(){this.tooltip&&this.tooltip.ngOnDestroy()}ngOnChanges(e){this.data&&this.data.length>0?(this.series=this.heatmapDataUtil.seriesToBoxes(this.data,this.asymmetric),this.graphic=this.heatmapGraphUtil.prepareGraphicContext(this.series,this.lookAndFeel,this.middleZero)):(this.graphic=void 0,this.series=void 0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["bd2-num-heatmap"]],inputs:{data:"data",asymmetric:"asymmetric",middleZero:"middleZero",hidden:"hidden",labelsAlwaysOn:"labelsAlwaysOn",lookAndFeel:"lookAndFeel"},features:[t._Bn([Z]),t.TTD],decls:2,vars:2,consts:[[1,"bd2hm-heatmap",3,"hidden"],["width","100%",4,"ngIf"],["width","100%"],["id","bd2hm-shadow"],["dx","1","dy","1","stdDeviation","1"],["id","bd2hm-pattern-diagonal","width","10","height","10","patternTransform","rotate(45 0 0)","patternUnits","userSpaceOnUse"],["x1","0","y1","0","x2","0","y2","10",2,"stroke","lightgrey","stroke-width","1"],[1,"bd2hm-mainPane"],["bd2hm-pane-back","",1,"bd2hm-paneBack",3,"graphic"],["bd2hm-axis-box","",3,"graphic"],["bd2hm-series-box","",1,"bd2hm-seriesBox",3,"graphic","series"],["bd2hm-labels","",3,"graphic","data","alwaysOn"],["bd2hm-tooltip","",3,"graphic"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,kt,12,10,"svg",1),t.qZA()),2&e&&(t.Q6J("hidden",a.hidden),t.xp6(1),t.Q6J("ngIf",a.graphic))},dependencies:[p.O5,Yt,$t,Lt,qt,Xt],styles:[".bd2hm-paneBack rect{fill:url(#bd2hm-pattern-diagonal)}  .bd2hm-axisWrapper line{stroke:gray}  .bd2hm-axisWrapper text{fill:gray;text-anchor:middle;font-size:9px}  .bd2hm-labels text.bd2hm-onLabel{dominant-baseline:central;fill:#000;opacity:.6}  .bd2hm-labels .bd2hm-hover text{dominant-baseline:central;fill:#fff;font-size:10px}  .bd2hm-labels .bd2hm-hover rect{fill:#000;opacity:.8;filter:url(#bd2hm-shadow)}  .bd2hm-tooltipBox text{font-size:10px;fill:#fff}  .bd2hm-tooltipBox rect{fill:#000;opacity:.8;filter:url(#bd2hm-shadow)}"],changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez]}),n})(),Kt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,z,z]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,Kt]}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[te]}),n})();class y{set traces(i){this.series=i}constructor(){this.middleZero=!1}ngOnInit(){}}function ie(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"label",7)(2,"a",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.exportDataView())}),t.TgZ(3,"i",9),t._uU(4,"save_alt"),t.qZA(),t.TgZ(5,"span",10),t._uU(6,"Download"),t.qZA()(),t._uU(7," current view "),t.qZA(),t.TgZ(8,"label",7)(9,"a",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.exportFullData())}),t.TgZ(10,"i",9),t._uU(11,"save_alt"),t.qZA(),t.TgZ(12,"span",10),t._uU(13,"Download"),t.qZA()(),t._uU(14," full "),t.qZA()()}}function ne(n,i){if(1&n&&t._UZ(0,"bd2-heatmap-plot",12),2&n){const e=t.oxw(2);t.Q6J("traces",e.timeseries)("middleZero",e.middleZero)}}function ae(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"h3"),t._uU(2,"Data heatmap"),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"bd2-heatmap-display-params-rform",1),t.NdJ("displayParams",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.displayChanged(o))}),t.qZA(),t.TgZ(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t._uU(8," Sorting "),t.qZA()(),t._UZ(9,"bd2-tssort-params-rform",2),t.ALo(10,"async"),t.ALo(11,"async"),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"div",3),t.YNc(14,ie,15,0,"div",4),t.qZA(),t._UZ(15,"hr"),t.YNc(16,ne,1,2,"bd2-heatmap-plot",5),t.qZA()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("disabled",e.disabledSecondary)("totalTraces",e.totalTraces)("currentPage",e.currentPage),t.xp6(5),t.Q6J("ppaJobs",t.lcZ(10,7,e.analysis.ppaJobs$))("rhythmJobs",t.lcZ(11,9,e.analysis.rhythmJobs$)),t.xp6(5),t.Q6J("ngIf",e.timeseries),t.xp6(2),t.Q6J("ngIf",e.timeseries)}}y.\u0275fac=function(i){return new(i||y)},y.\u0275cmp=t.Xpm({type:y,selectors:[["bd2-heatmap-plot"]],inputs:{traces:"traces",middleZero:"middleZero"},decls:2,vars:2,consts:[[2,"text-align","center"],[3,"data","middleZero"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"bd2-num-heatmap",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("data",e.series)("middleZero",e.middleZero))},dependencies:[jt],encapsulation:2});class b extends U.w{constructor(i,e,a,o,s){super(s),this.analysis=i,this.fetcher=e,this.RDMSocial=a,this.analytics=o,this.timeseries=[],this.totalTraces=0,this.currentPage=Q.U.firstPage(),this.tracesPerPlot=5,this.middleZero=!1,this.blocked=!1,this.disabledSecondary=!1,this.csvExporter=new $.W,i.allowedPPAMethods=["NLLS","MESA"],e.addTraceNr=!0,e.addTraceRef=!1,this.titlePart=" Data"}ngOnInit(){super.ngOnInit(),this.timeSeriesSubsripction=this.fetcher.seriesPackStream.pipe((0,C.b)(1e3)).subscribe(i=>{if(!this.assay)return;const e=i.data;this.currentParams=i.params,this.middleZero=this.isRangeSimetrical(i.params),this.timeseries=e,this.tracesPerPlot=Math.max(5,e.length/20),this.totalTraces=i.totalTraces,this.currentPage=i.currentPage,this.analytics.experimentHeatmapView(this.assay.id)},i=>{console.log("Error in TS subscription: "+i),this.feedback.error(i)}),this.fetcher.error$.subscribe(i=>this.feedback.error(i))}ngOnDestroy(){this.timeSeriesSubsripction&&this.timeSeriesSubsripction.unsubscribe(),this.fetcher.ngOnDestroy(),super.ngOnDestroy()}displayChanged(i){this.fetcher.changeDisplayParams(i)}exportDataView(){this.exportSeriesPack(this.fetcher.current)}exportFullData(){this.fetcher.getFullDataSet(this.assay,this.fetcher.current.params,this.fetcher.current.sorting).subscribe(i=>{this.exportSeriesPack(i,!0)})}exportSeriesPack(i,e=!1){if(!i)return;const a=this.csvExporter.renderCSVTable(i.data,i.params,i.currentPage,i.sorting,this.assay),o=new Blob([a],{type:"text/csv"});(0,Y.NL)(o,{fileName:`${this.assay.id}_data.${i.params.detrending.name}${e?".full":`.page${i.currentPage.pageIndex+1}`}.csv`,extensions:[".csv"]}).then(m=>{this.recordExport()}).catch(m=>console.log("could not save export",m))}recordExport(){this.analytics.experimentDataExport(this.assay.id)}updateModel(i){super.updateModel(i),this.RDMSocial.canProceedByMeasurement(i).then(e=>{this.disabledSecondary=!e}),this.fetcher.experiment(i),this.analysis.experiment(i)}isRangeSimetrical(i){return"RANGE"===i.normalisation||"Z_SCORE"===i.normalisation||"MEAN"===i.align}}b.\u0275fac=function(i){return new(i||b)(t.Y36(B._),t.Y36(O.C),t.Y36(L.C),t.Y36(E.y),t.Y36(R.L))},b.\u0275cmp=t.Xpm({type:b,selectors:[["bd2-ts-heatmap-view"]],features:[t._Bn([O.C,B._]),t.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"disabled","totalTraces","currentPage","displayParams"],[3,"ppaJobs","rhythmJobs"],[1,"clearfix"],["class","float-right",4,"ngIf"],[3,"traces","middleZero",4,"ngIf"],[1,"float-right"],[1,"mr-4"],["download","","role","button","aria-label","download",1,"btn","btn-primary",2,"color","white",3,"click"],[1,"material-icons","bd-icon"],[1,"cdk-visually-hidden"],["download","","role","button","aria-label","download whole",1,"btn","btn-primary",2,"color","white",3,"click"],[3,"traces","middleZero"]],template:function(i,e){1&i&&t.YNc(0,ae,17,11,"div",0),2&i&&t.Q6J("ngIf",e.assay)},dependencies:[p.O5,v.ib,v.yz,v.yK,q.b,f,y,p.Ov],encapsulation:2});const oe=[{path:"",pathMatch:"full",component:b}];class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[w.Bz.forChild(oe),w.Bz]});var se=l(7392),re=l(6288);class u{}u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[p.ez,c.UX,c.u5,J.TU,se.Ps,I.ot,M.rP,v.To,ee,re.G,d]})}}]);