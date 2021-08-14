(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thiet-lap-thiet-lap-module"],{

/***/ "./src/app/layout/thiet-lap/thiet-lap.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/thiet-lap/thiet-lap.component.ts ***!
  \*********************************************************/
/*! exports provided: ThietLapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThietLapComponent", function() { return ThietLapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ThietLapComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThietLapComponent.ɵfac = function ThietLapComponent_Factory(t) { return new (t || ThietLapComponent)(); };
ThietLapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThietLapComponent, selectors: [["app-thiet-lap"]], decls: 1, vars: 0, template: function ThietLapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90aGlldC1sYXAvdGhpZXQtbGFwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThietLapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thiet-lap',
                templateUrl: './thiet-lap.component.html',
                styleUrls: ['./thiet-lap.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/thiet-lap.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/thiet-lap/thiet-lap.module.ts ***!
  \******************************************************/
/*! exports provided: ThietLapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThietLapModule", function() { return ThietLapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _thiet_lap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thiet-lap.component */ "./src/app/layout/thiet-lap/thiet-lap.component.ts");
/* harmony import */ var _thiet_lap_routing___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thiet-lap.routing. */ "./src/app/layout/thiet-lap/thiet-lap.routing..ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ThietLapModule {
}
ThietLapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThietLapModule });
ThietLapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThietLapModule_Factory(t) { return new (t || ThietLapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _thiet_lap_routing___WEBPACK_IMPORTED_MODULE_3__["ThietLapRouting"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThietLapModule, { declarations: [_thiet_lap_component__WEBPACK_IMPORTED_MODULE_2__["ThietLapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThietLapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _thiet_lap_component__WEBPACK_IMPORTED_MODULE_2__["ThietLapComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _thiet_lap_routing___WEBPACK_IMPORTED_MODULE_3__["ThietLapRouting"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/thiet-lap.routing..ts":
/*!********************************************************!*\
  !*** ./src/app/layout/thiet-lap/thiet-lap.routing..ts ***!
  \********************************************************/
/*! exports provided: ThietLapRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThietLapRouting", function() { return ThietLapRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _thiet_lap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thiet-lap.component */ "./src/app/layout/thiet-lap/thiet-lap.component.ts");


const routes = [
    {
        path: '', component: _thiet_lap_component__WEBPACK_IMPORTED_MODULE_1__["ThietLapComponent"], children: [
            {
                path: 'example-control',
                loadChildren: () => Promise.all(/*! import() | example-control-example-control-module */[__webpack_require__.e("default~crud-crud-module~example-control-example-control-module"), __webpack_require__.e("example-control-example-control-module")]).then(__webpack_require__.bind(null, /*! ./example-control/example-control.module */ "./src/app/layout/thiet-lap/example-control/example-control.module.ts")).then(m => m.ExampleControlModule)
            },
        ]
    }
];
const ThietLapRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=thiet-lap-thiet-lap-module.js.map