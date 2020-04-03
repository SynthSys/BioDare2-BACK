function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,s=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,s=u}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8jiw":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i,r=n("LRne"),s=n("BOp5"),a=n("XNiG"),o=n("2Vo4"),u=n("itXk"),c=n("VRyK"),l=n("M9IT"),h=n("IzEk"),f=n("lJxs"),d=n("Kj3r"),v=n("vkgz"),p=n("JIr8"),b=n("pLZG"),m=n("/uUt"),y=n("eIep"),g=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return _classCallCheck(this,n),(t=e.call(this,i)).removeDebounce=i,t}return _createClass(n,[{key:"sortingKey",value:function(t,e){return function(t){return t}}},{key:"processData",value:function(t,e){return t}},{key:"errorToData",value:function(t){return Object(r.a)([])}},{key:"processSortedPagedData",value:function(t,e,n,i){var r=this.assetToData(t,i);return r=this.sortData(r,e,i),r=this.pageData(r,n,i),r=this.processData(r,i)}},{key:"sortData",value:function(t,e,n){return e&&e.active&&""!==e.direction?Object(s.d)(t,e.direction,this.sortingKey(e,n)):t}},{key:"pageData",value:function(t,e,n){return e?Object(s.a)(t,e):t}},{key:"assetToDataLength",value:function(t,e){return this.assetToData(t).length}}]),n}(((i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,t),this.removeDebounce=e,this.error$=new a.a,this.isFetching$=new o.a(!1),this.isProcessing$=new o.a(!1),this.dataLength=0,this.page$=new o.a(void 0),this.sort$=new o.a(void 0),this.on$=new o.a(!1),this.refresh$=new a.a,this.input$=new o.a(void 0),this.params$=new o.a(void 0),this.asset$=new o.a(void 0),this.DEBUG=!1,this.dataInputsDebounce=200,this.busyDebounce=50,this.id=t.ids++,this.logMe("created"),this.initAssetsStream(),this.isBusy$=this.initBusyStream(),this.data$=this.initDataStream()}return _createClass(t,[{key:"logMe",value:function(t,e){this.DEBUG&&(t=this.constructor.name+":"+this.id+" "+t,e?console.log(t,e):console.log(t))}},{key:"input",value:function(t){t&&this.input$.next(t)}},{key:"params",value:function(t){this.params$.next(t)}},{key:"on",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.on$.next(t)}},{key:"refresh",value:function(){this.refresh$.next(!0)}},{key:"page",value:function(t){this.page$.next(t)}},{key:"sort",value:function(t){this.sort$.next(t),this.resetPage()}},{key:"close",value:function(){this.asset$.complete(),this.error$.complete(),this.isFetching$.complete(),this.isProcessing$.complete(),this.input$.complete(),this.params$.complete(),this.on$.complete(),this.refresh$.complete(),this.page$.complete(),this.sort$.complete()}},{key:"errorToData",value:function(t){return Object(r.a)(void 0)}},{key:"resetPage",value:function(){var t=this;this.page$.pipe(Object(h.a)(1)).subscribe((function(e){if(e){var n=new l.d;n.pageIndex=0,n.pageSize=e.pageSize,t.page(n)}}))}},{key:"initBusyStream",value:function(){return this.removeDebounce?Object(u.a)([this.isFetching$,this.isProcessing$]).pipe(Object(f.a)((function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1];return n||i}))):Object(u.a)([this.isFetching$,this.isProcessing$]).pipe(Object(d.a)(this.busyDebounce),Object(f.a)((function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1];return n||i})))}},{key:"initDataStream",value:function(){var t=this,e=this.dataMutators();return(this.removeDebounce?Object(u.a)(e):Object(u.a)(e).pipe(Object(d.a)(this.dataInputsDebounce))).pipe(Object(v.a)((function(e){return t.logMe("Input for data stream",e)})),Object(v.a)((function(e){return t.isProcessing$.next(!0)})),Object(f.a)((function(e){var n=_slicedToArray(e,4),i=n[0],r=n[1],s=n[2],a=n[3];t.dataLength=t.assetToDataLength(i,a);var o=t.processSortedPagedData(i,r,s,a);return t.currentSort=r,t.currentPage=s,t.currentParams=a,t.currentData=o,o})),Object(p.a)((function(e){return t.error$.next(e),t.errorToData(e)})),Object(v.a)((function(e){return t.isProcessing$.next(!1)})))}},{key:"dataMutators",value:function(){return[this.asset$.pipe(Object(b.a)((function(t){return!!t}))),this.sort$,this.page$.pipe(Object(b.a)((function(t){return!!t}))),this.params$]}},{key:"initAssetsStream",value:function(){var t=this;this.initAssetsInput().subscribe((function(e){return t.loadAsset(e)}),(function(e){return t.error$.next(e)}))}},{key:"loadAsset",value:function(t){var e=this;this.isFetching$.next(!0),this.fetchAsset(t).subscribe((function(n){e.isFetching$.next(!1),e.setAsset(n,t)}),(function(t){e.isFetching$.next(!1),e.error$.next(t)}))}},{key:"setAsset",value:function(t,e){this.currentInput=e,this.currentAsset=t,this.asset$.next(t)}},{key:"initAssetsInput",value:function(){var t=this,e=Object(u.a)([this.input$,this.on$]).pipe(Object(b.a)((function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1];return n&&i})),Object(f.a)((function(t){var e=_slicedToArray(t,2),n=e[0];return e[1],n}))).pipe(Object(m.a)((function(e,n){return t.sameInput(e,n)}))),n=this.refresh$.pipe(Object(y.a)((function(t){return e.pipe(Object(h.a)(1))})));return Object(c.a)(e,n).pipe(Object(v.a)((function(e){return t.logMe("Assets input",e)})))}}]),t}()).ids=0,i))},BMm9:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("tyNb"),r=n("pLZG"),s=n("/uUt"),a=n("fXoL"),o=n("jhN1"),u=function(){var t=function(){function t(e,n,a){var o=this;if(_classCallCheck(this,t),this.router=e,this.titleService=n,console.log("TitleSetter created"),a)throw new Error("TitleSetterService is already loaded. Activate it in the AppModule only");e.events.pipe(Object(r.a)((function(t){return t instanceof i.b})),Object(s.a)((function(t,e){return t.url===e.url}))).subscribe((function(t){o.changedURL(t.urlAfterRedirects)}),(function(t){console.log("Error in router stream")}),(function(){return console.log("Router stream end")}))}return _createClass(t,[{key:"changedURL",value:function(t){var e=this.getTitleFromURL(t);e&&this.setTitle(e)}},{key:"getTitleFromURL",value:function(t){return t.endsWith("welcome")?"Circadian period analysis":t.endsWith("experiments")?"Experiments":t.endsWith("experiments/new")?"New Experiment":t.endsWith("login")?"Login":t.endsWith("account/register")?"Register":t.endsWith("account/edit")?"Account":""}},{key:"setTitle",value:function(t){this.titleService.setTitle("BioDare2 "+t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.ac(i.c),a.ac(o.d),a.ac(t,12))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"Ee+/":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("0IaG"),r=n("Ojp2"),s=n("fXoL"),a=n("ofXK"),o=n("yU/g");function u(t,e){if(1&t&&(s.Wb(0,"div",6),s.Jc(1),s.Vb()),2&t){var n=s.ic();s.Cb(1),s.Kc(n.missing)}}function c(t,e){if(1&t&&s.Rb(0,"bd2-static-content",7),2&t){var n=s.ic();s.oc("docName",n.docName)}}var l,h,f=((h=function(){function t(e){_classCallCheck(this,t);var n=e?e.docName:void 0;Object(r.c)(n)?(this.title=r.a.find((function(t){return t[0]===n}))[1],this.docName=n,this.missing=void 0):(this.missing="Unknown document: "+n,this.title=this.missing,this.docName=void 0)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||h)(s.Qb(i.a))},h.\u0275cmp=s.Kb({type:h,selectors:[["bd2-static-content-dialog"]],decls:8,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["class","alert alert-danger","role","alert","type","danger",4,"ngIf"],[3,"docName",4,"ngIf"],["mat-dialog-actions",""],["mat-dialog-close","","tabindex","-1",1,"btn","btn-primary"],["role","alert","type","danger",1,"alert","alert-danger"],[3,"docName"]],template:function(t,e){1&t&&(s.Wb(0,"h1",0),s.Jc(1),s.Vb(),s.Wb(2,"div",1),s.Hc(3,u,2,1,"div",2),s.Hc(4,c,1,1,"bd2-static-content",3),s.Vb(),s.Wb(5,"div",4),s.Wb(6,"button",5),s.Jc(7,"Close"),s.Vb(),s.Vb()),2&t&&(s.Cb(1),s.Kc(e.title),s.Cb(2),s.oc("ngIf",e.missing),s.Cb(1),s.oc("ngIf",!e.missing))},directives:[i.h,i.e,a.m,i.c,i.d,o.a],encapsulation:2}),h),d=((l=function(){function t(e){_classCallCheck(this,t),this.dialog=e}return _createClass(t,[{key:"show",value:function(t){this.dialog.open(f,{data:{docName:t}})}}]),t}()).\u0275fac=function(t){return new(t||l)(s.ac(i.b))},l.\u0275prov=s.Mb({token:l,factory:l.\u0275fac,providedIn:"root"}),l)},EvUs:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c}));var i=n("KhIM"),r=function(){var t=function(){function t(e,n,i){_classCallCheck(this,t),this.id=e,this.name=n,this.label=i}return _createClass(t,[{key:"toJSON",value:function(){return this.name}}],[{key:"getValuesMap",value:function(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}},{key:"get",value:function(e){return t.getValuesMap().get(e)}},{key:"initValuesMap",value:function(){var e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.EXCEL_TABLE.name,t.EXCEL_TABLE),e.set(t.TOPCOUNT.name,t.TOPCOUNT),e.set(t.TAB_SEP.name,t.TAB_SEP),e.set(t.COMA_SEP.name,t.COMA_SEP),e}}]),t}();return t.NONE=new t(0,"NONE","none"),t.EXCEL_TABLE=new t(1,"EXCEL_TABLE","Excel Table"),t.TOPCOUNT=new t(2,"TOPCOUNT","TopCount"),t.TAB_SEP=new t(3,"TAB_SEP","Tab-separated"),t.COMA_SEP=new t(4,"COMA_SEP","Coma-separated"),t}(),s=[r.EXCEL_TABLE,r.TAB_SEP,r.COMA_SEP,r.TOPCOUNT],a=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments))._class_name=".ExcelTSImportParameters",t}return n}(function(){return function t(){_classCallCheck(this,t)}}()),o=function t(){_classCallCheck(this,t)},u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6?arguments[6]:void 0;_classCallCheck(this,t),this.colIx=e,this.colNumber=n,this.colName=i,this.rowIx=r,this.rowNumber=s,this.rowName=a,this.value=o,this.fake=!1}return _createClass(t,[{key:"toJSON",value:function(){return{col:this.colNumber,row:this.rowNumber}}},{key:"isBeforeOrSame",value:function(t){return this.colIx<=t.colIx&&this.rowIx<=t.rowIx}},{key:"hasSameIx",value:function(t){return this.colIx===t.colIx&&this.rowIx===t.rowIx}}]),t}(),c=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments))._class_name=".DataTableImportParameters",t}return n}(function(){function t(){_classCallCheck(this,t),this.inRows=!1,this.timeOffset=0,this.importLabels=!0,this.userLabels=[],this.containsBackgrounds=!1,this.backgroundsLabels=[]}return _createClass(t,[{key:"isTimeDefined",value:function(){return!(!this.firstTimeCell||!this.timeType||this.timeType==i.h.IMG_NUMBER&&(!this.imgInterval||+this.imgInterval<=0)||isNaN(Number(this.firstTimeCell.value)))}},{key:"areLabelsCorrectlySelected",value:function(){return!!this.labelsSelection&&this.areLabelsAfterTime()}},{key:"areLabelsAfterTime",value:function(){return!(!this.firstTimeCell||!this.labelsSelection)&&(this.inRows?this.labelsSelection.colNumber<this.firstTimeCell.colNumber&&this.labelsSelection.colNumber>=0:this.labelsSelection.rowNumber<this.firstTimeCell.rowNumber&&this.labelsSelection.rowNumber>=0)}},{key:"areLabelsCorrectlyAssigned",value:function(){return!!this.userLabels&&this.userLabels.filter((function(t){return!!t})).length>0}},{key:"isDataAfterTime",value:function(){return!(!this.firstTimeCell||!this.dataStart)&&(this.inRows?this.dataStart.rowNumber>this.firstTimeCell.rowNumber:this.dataStart.colNumber>this.firstTimeCell.colNumber)}},{key:"isDataStartCorrectlySelected",value:function(){return!!this.dataStart&&this.isDataAfterTime()}},{key:"isComplete",value:function(){if(!this.isTimeDefined())return!1;if(this.importLabels){if(!this.areLabelsCorrectlySelected())return!1;if(!this.isDataStartCorrectlySelected())return!1}else if(!this.areLabelsCorrectlyAssigned())return!1;return!0}},{key:"summarizeLabels",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(!this.userLabels)return"No labels";var e,n=new Set,i=_createForOfIteratorHelper(this.userLabels);try{for(i.s();!(e=i.n()).done;){var r=e.value;if(r&&(n.add(r),n.size>=t)){n.add("...");break}}}catch(s){i.e(s)}finally{i.f()}return _toConsumableArray(n).join(", ")}},{key:"inLabel",get:function(){return this.inRows?"row":"column"}},{key:"inLabelNeg",get:function(){return this.inRows?"column":"row"}}]),t}())},KhIM:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"h",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return v}));var i=function(){var t=function(){function t(e,n,i){_classCallCheck(this,t),this._id=e,this._name=n,this._label=i}return _createClass(t,[{key:"toJSON",value:function(){return this.name}},{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"label",get:function(){return this._label}}],[{key:"get",value:function(e){return t.getValuesMap().get(e)}},{key:"getValuesMap",value:function(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}},{key:"initValuesMap",value:function(){var e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.IGNORED.name,t.IGNORED),e.set(t.TIME.name,t.TIME),e.set(t.DATA.name,t.DATA),e.set(t.BACKGROUND.name,t.BACKGROUND),e.set(t.LABEL.name,t.LABEL),e}}]),t}();return t.NONE=new t(0,"NONE","NONE"),t.IGNORED=new t(1,"IGNORED","Ignored"),t.TIME=new t(2,"TIME","Time"),t.DATA=new t(3,"DATA","Data"),t.BACKGROUND=new t(4,"BACKGROUND","Background noise"),t.LABEL=new t(5,"LABEL","Label"),t}(),r=function(){var t=function(){function t(e,n,i,r){_classCallCheck(this,t),this._id=e,this._name=n,this._label=i,this._unit=r}return _createClass(t,[{key:"toJSON",value:function(){return this.name}},{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"label",get:function(){return this._label}},{key:"unit",get:function(){return this._unit}}],[{key:"get",value:function(e){return t.getValuesMap().get(e)}},{key:"getValuesMap",value:function(){return t.valuesMap||(t.valuesMap=t.initValuesMap()),t.valuesMap}},{key:"initValuesMap",value:function(){var e=new Map;return e.set(t.NONE.name,t.NONE),e.set(t.TIME_IN_HOURS.name,t.TIME_IN_HOURS),e.set(t.TIME_IN_MINUTES.name,t.TIME_IN_MINUTES),e.set(t.TIME_IN_SECONDS.name,t.TIME_IN_SECONDS),e.set(t.IMG_NUMBER.name,t.IMG_NUMBER),e}}]),t}();return t.NONE=new t(0,"NONE","NONE",""),t.TIME_IN_HOURS=new t(1,"TIME_IN_HOURS","time in hours","h"),t.TIME_IN_MINUTES=new t(2,"TIME_IN_MINUTES","time in minutes","m"),t.TIME_IN_SECONDS=new t(3,"TIME_IN_SECONDS","time in seconds","s"),t.IMG_NUMBER=new t(4,"IMG_NUMBER","image nr. (1-based)","img"),t}(),s=function t(){_classCallCheck(this,t)},a=function t(e){_classCallCheck(this,t),this.dataLabel=e},o="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function u(t){var e=o.length;if((t-=1)<e)return o[t];if(t<e*e+e){var n=Math.floor(t/e)-1;return o[n]+o[t%e]}if(t<16384){var i=Math.floor(t/(e*e))-1,r=t%(e*e),s=Math.floor(r/e)-1;return o[i]+o[s]+o[r=t%e]}throw new RangeError("Unsupported column number: "+(t+1))}function c(t){if(t<1||t>96)throw new RangeError("Unsupported topcount column number: "+t);t-=1;var e=Math.floor(t/12);return o[e]+(t%12+1)}var l=function(){function t(e,n){_classCallCheck(this,t),this.col=e,this.row=n}return _createClass(t,[{key:"clone",value:function(){return new t(this.col,this.row)}},{key:"numericalLabel",get:function(){return this.col+"-"+this.row}},{key:"excelLabel",get:function(){return u(this.col)+this.row}},{key:"columnLetter",get:function(){return u(this.col)}},{key:"topCountWell",get:function(){return o[this.row-1]+this.col}}]),t}(),h=function(){function t(e,n){_classCallCheck(this,t),this.first=e,this.last=n;var i=this.normalize(e,n);this.first=i[0],this.last=i[1]}return _createClass(t,[{key:"clone",value:function(){return new t(this.first.clone(),this.last.clone())}},{key:"normalize",value:function(t,e){if(t.row<=e.row&&t.col<=e.col)return[t,e];var n=Math.min(t.row,e.row),i=Math.min(t.col,e.col),r=Math.max(t.row,e.row),s=Math.max(t.col,e.col);return[new l(i,n),new l(s,r)]}},{key:"isSingleCell",value:function(){return this.first.row===this.last.row&&this.first.col===this.last.col}},{key:"size",value:function(){return(this.last.col-this.first.col+1)*(this.last.row-this.first.row+1)}},{key:"firstCol",get:function(){return this.first.col}},{key:"lastCol",get:function(){return this.last.col}},{key:"fullRangeLabel",get:function(){return this.isSingleCell()?this.first.excelLabel:this.first.excelLabel+"-"+this.last.excelLabel}},{key:"columnRangeLabel",get:function(){return this.isSingleCell()?this.first.columnLetter:this.first.columnLetter+"-"+this.last.columnLetter}},{key:"topCountRangeLabel",get:function(){return this.isSingleCell()?this.first.topCountWell:this.first.topCountWell+"-"+this.last.topCountWell}}]),t}(),f=function(){function t(e,n){_classCallCheck(this,t),this.range=e,this.content=n}return _createClass(t,[{key:"clone",value:function(){var e=new t(this.range.clone(),this.content);return e.role=this.role,e.details=this.details,e}},{key:"fullRangeLabel",get:function(){return this.range.fullRangeLabel}},{key:"columnRangeLabel",get:function(){return this.range.columnRangeLabel}},{key:"topCountRangeLabel",get:function(){return this.range.topCountRangeLabel}},{key:"firstCol",get:function(){return this.range.firstCol}},{key:"lastCol",get:function(){return this.range.lastCol}}]),t}(),d=function(){function t(e,n,i,r){_classCallCheck(this,t),this.start=e,this.end=n,this.details=i,this.value=r}return _createClass(t,[{key:"trimEnd",value:function(e){if(!(e<=this.start)){var n=this.details.clone();return n.range.last.col=e-1,new t(this.start,e-1,n,this.value)}}},{key:"trimBegining",value:function(e){if(!(e>=this.end)){var n=this.details.clone();return n.range.first.col=e+1,new t(e+1,this.end,n,this.value)}}},{key:"isSimilar",value:function(t){return this.details.role===t.details.role&&this.value===t.value}},{key:"label",get:function(){return this.start===this.end?u(this.start):u(this.start)+"-"+u(this.end)}},{key:"topcountLabel",get:function(){return this.start===this.end?c(this.start):c(this.start)+"-"+c(this.end)}}]),t}(),v=function(){function t(){_classCallCheck(this,t),this.columns=[]}return _createClass(t,[{key:"details",value:function(t){var e=this.columns[t];if(e)return e.details}},{key:"delete",value:function(t){if(0===t.size())return!1;var e=!1;return this.columns[t.firstCol]&&(this.trimPreviousAt(t.firstCol),e=!0),this.columns[t.lastCol]&&(this.trimBehindAt(t.lastCol),e=!0),this.clear(t),e}},{key:"insert",value:function(t,e){if(0===t.range.size())return!1;var n=!1,i=new d(t.range.first.col,t.range.last.col,t,e);return this.columns[i.start]&&(this.trimPreviousAt(i.start),n=!0),this.columns[i.end]&&(this.trimBehindAt(i.end),n=!0),this.put(i),n}},{key:"merge",value:function(){for(var t=1;t<this.columns.length;){var e=this.columns[t];if(e)if(this.columns[e.end+1]){var n=this.columns[e.end+1];e.isSimilar(n)?(e.end=n.end,e.details.range.last=n.details.range.last,this.put(e)):t=n.start}else t=e.end+1;else t++}}},{key:"trimPreviousAt",value:function(t){var e=this.columns[t];if(e.start!==t){var n=e.trimEnd(t);this.put(n)}}},{key:"trimBehindAt",value:function(t){var e=this.columns[t];if(e.end!==t){var n=e.trimBegining(t);this.put(n)}}},{key:"put",value:function(t){for(var e=t.start;e<=t.end;e++)this.columns[e]=t}},{key:"clear",value:function(t){for(var e=t.firstCol;e<=t.lastCol;e++)this.columns[e]=void 0}},{key:"blocks",get:function(){for(var t=[],e=1;e<this.columns.length;){var n=this.columns[e];n?(t.push(n),e=n.end+1):e++}return t}}]),t}()},Ojp2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s}));var i=[["about","About","Documentation"],["service","Service Description (T&C)","Service Description (T&C)"],["privacy","Privacy Statement","Privacy Statement"],["faq","Frequently Asked Questions (FAQ)","FAQ"],["timeseries-data","TimeSeries data and formats","Timeseries data"],["period-methods","Methods of period analysis","Period analysis methods"],["detrending","Detrending for period analysis","Detrending and analysis"],["phases","Phase calculation","Phase calculation"]];function r(t){return i.findIndex((function(e){return e[0]===t}))>=0}function s(t){return i.find((function(e){return e[0]===t}))}},tu3j:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;_classCallCheck(this,t),this.RELOAD_INT=e,this.MAX_RELOAD_INT=n,this.MAX_RELOAD_TIME=i,this.RELOAD_FACTOR=r,r<1&&(this.RELOAD_FACTOR=2)}return _createClass(t,[{key:"nextInterval",value:function(t){return this.id!==t?this.reset(t):this.interval<this.MAX_RELOAD_INT&&(this.interval*=this.RELOAD_FACTOR),this.deadline>Date.now()?this.interval:void 0}},{key:"reset",value:function(t){this.id=t,this.interval=this.RELOAD_INT,this.deadline=Date.now()+this.MAX_RELOAD_TIME}}]),t}()},"yU/g":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,r,s=n("fXoL"),a=n("tk/3"),o=n("z6cu"),u=n("lJxs"),c=n("JIr8"),l=n("UsWK"),h=((i=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getDocs",value:function(t){var e=this.makeOptions();return this.OKTxt(this.http.get("assets/"+t+".html",e)).toPromise()}},{key:"makeOptions",value:function(){return{headers:new a.c({Accept:"text/html"}),responseType:"text",withCredentials:!0}}},{key:"OKTxt",value:function(t){return t.pipe(Object(u.a)((function(t){return t.body?t.txt:t})),Object(c.a)(this.handleBadResponse))}},{key:"handleBadResponse",value:function(t){var e;switch(console.error("Response error",t),t.status){case 401:e="Bad credentials, locked or not activated account";break;default:e=l.a.extractMessage(t,"No error details")}return Object(o.a)(e)}}]),t}()).\u0275fac=function(t){return new(t||i)(s.ac(a.a))},i.\u0275prov=s.Mb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),f=n("6tuW"),d=((r=function(){function t(e,n){_classCallCheck(this,t),this.contentService=e,this.feedback=n,this.content="loading..."}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"docName",set:function(t){var e=this;t&&(this.content="",this.contentService.getDocs(t).then((function(t){return e.content=t})).catch((function(t){e.content="Cannot load: "+t,e.feedback.error(t)})))}}]),t}()).\u0275fac=function(t){return new(t||r)(s.Qb(h),s.Qb(f.a))},r.\u0275cmp=s.Kb({type:r,selectors:[["bd2-static-content"]],inputs:{docName:"docName"},decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(t,e){1&t&&s.Rb(0,"div",0),2&t&&s.oc("innerHTML",e.content,s.Bc)},encapsulation:2}),r)},zQ7r:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("XNiG"),r=n("2Vo4"),s=n("itXk"),a=n("VRyK"),o=n("PqYM"),u=n("pLZG"),c=n("Kj3r"),l=n("lJxs"),h=n("/uUt"),f=n("eIep"),d=n("IzEk"),v=n("vkgz"),p=function(){var t=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,t),this.removeDebounce=n,this.error$=new i.a,this.on$=new r.a(!1),this.refresh$=new i.a,this.input$=new r.a(void 0),this.asset$=new r.a(void 0),this.reloading$=new r.a(!1),this.DEBUG=!1,this.reloadDebounce=50,this.id=t.ids++,this.logMe("created"),this.currentReloadStatus=this.initIntervalsKeeper(),this.finished$=this.asset$.asObservable().pipe(Object(u.a)((function(t){return t&&e.isFinished(t)}))),this.running$=this.asset$.asObservable().pipe(Object(u.a)((function(t){return t&&e.isRunning(t)}))),this.failed$=this.asset$.asObservable().pipe(Object(u.a)((function(t){return t&&e.hasFailed(t)}))),this.all$=this.asset$.asObservable().pipe(Object(u.a)((function(t){return null!=t&&void 0!==t}))),this.isReloading$=this.initReloadingStream(),this.initAssetsStream(),this.initReloads()}return _createClass(t,[{key:"logMe",value:function(t,e){this.DEBUG&&(t=this.constructor.name+":"+this.id+" "+t,e?console.log(t,e):console.log(t))}},{key:"close",value:function(){this.asset$.complete(),this.input$.complete(),this.error$.complete(),this.reloading$.complete(),this.on$.complete(),this.refresh$.complete(),this.reloadSubscription&&this.reloadSubscription.unsubscribe()}},{key:"input",value:function(t){t&&this.input$.next(t)}},{key:"on",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.on$.next(t)}},{key:"refresh",value:function(){this.currentReloadStatus.reset(void 0),this.reloadSubscription&&this.reloadSubscription.unsubscribe(),this.refresh$.next(!0)}},{key:"initReloadingStream",value:function(){return this.removeDebounce?this.reloading$.asObservable():this.reloading$.asObservable().pipe(Object(c.a)(this.reloadDebounce))}},{key:"initAssetsStream",value:function(){var t=this;this.initAssetsInput().subscribe((function(e){return t.loadAsset(e)}),(function(e){return t.error$.next(e)}))}},{key:"initReloads",value:function(){var t=this;this.running$.subscribe((function(e){return t.reload(e)}))}},{key:"loadAsset",value:function(t){var e=this;this.fetchAsset(t).subscribe((function(n){e.setAsset(n,t)}),(function(t){e.error$.next(t)}))}},{key:"setAsset",value:function(t,e){this.currentInput=e,this.currentAsset=t,this.reloading$.next(this.isRunning(t)),this.asset$.next(t)}},{key:"initAssetsInput",value:function(){var t=this,e=Object(s.a)([this.input$,this.on$]).pipe(Object(u.a)((function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1];return n&&i})),Object(l.a)((function(t){var e=_slicedToArray(t,2),n=e[0];e[1];return n}))).pipe(Object(h.a)((function(e,n){return t.sameInput(e,n)}))),n=this.refresh$.pipe(Object(f.a)((function(t){return e.pipe(Object(d.a)(1))})));return Object(a.a)(e,n).pipe(Object(v.a)((function(e){return t.logMe("Assets input",e)})))}},{key:"reload",value:function(t){var e=this;this.reloadSubscription&&this.reloadSubscription.unsubscribe();var n=this.currentReloadStatus.nextInterval(this.assetToId(t));if(n){var i=this.assetToInput(t);this.reloadSubscription=Object(o.a)(n).subscribe((function(t){e.sameInput(i,e.currentInput)?(e.reloadSubscription=void 0,e.loadAsset(i)):console.log("Disabled reload as input has changed")}))}else this.reloading$.next(!1)}}]),t}();return t.ids=0,t}()}}]);