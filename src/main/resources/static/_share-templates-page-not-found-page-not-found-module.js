(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_share-templates-page-not-found-page-not-found-module"],{

/***/ "./src/app/_share/templates/page-not-found/page-not-found.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/_share/templates/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/result */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-result.js");





class PageNotFoundComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
    }
    onBack() {
        this.location.back();
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 4, vars: 0, consts: [["nzStatus", "404", "nzTitle", "404", "nzSubTitle", "Kh\u00F4ng t\u00ECm th\u1EA5y n\u1ED9i dung."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quay l\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_3__["NzResultComponent"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_3__["NzResultExtraDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZS90ZW1wbGF0ZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_share/templates/page-not-found/page-not-found.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_share/templates/page-not-found/page-not-found.module.ts ***!
  \**************************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/_share/templates/page-not-found/page-not-found.component.ts");
/* harmony import */ var _page_not_found_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.routing */ "./src/app/_share/templates/page-not-found/page-not-found.routing.ts");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/result */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-result.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _page_not_found_routing__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundRouters"],
            ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__["NzResultModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__["NzResultModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_not_found_routing__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundRouters"],
                    ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__["NzResultModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_share/templates/page-not-found/page-not-found.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/_share/templates/page-not-found/page-not-found.routing.ts ***!
  \***************************************************************************/
/*! exports provided: PageNotFoundRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRouters", function() { return PageNotFoundRouters; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/_share/templates/page-not-found/page-not-found.component.ts");


const routes = [
    { path: '', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"] }
];
const PageNotFoundRouters = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=_share-templates-page-not-found-page-not-found-module.js.map