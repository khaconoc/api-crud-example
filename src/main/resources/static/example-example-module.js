(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["example-example-module"],{

/***/ "./src/app/layout/example/example.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/example/example.component.ts ***!
  \*****************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ExampleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(); };
ExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["app-example"]], decls: 1, vars: 0, template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-example',
                templateUrl: './example.component.html',
                styleUrls: ['./example.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/example/example.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/example/example.module.ts ***!
  \**************************************************/
/*! exports provided: ExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function() { return ExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./src/app/layout/example/example.component.ts");
/* harmony import */ var _example_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example.routing */ "./src/app/layout/example/example.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ExampleModule {
}
ExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExampleModule });
ExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _example_routing__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutes"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleModule, { declarations: [_example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _example_routing__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutes"]
                ],
                declarations: [_example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/example/example.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/example/example.routing.ts ***!
  \***************************************************/
/*! exports provided: ExampleRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleRoutes", function() { return ExampleRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.component */ "./src/app/layout/example/example.component.ts");


const routes = [
    {
        path: '', component: _example_component__WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"], children: [
            { path: 'icon', loadChildren: () => __webpack_require__.e(/*! import() | icon-icon-module */ "icon-icon-module").then(__webpack_require__.bind(null, /*! ./icon/icon.module */ "./src/app/layout/example/icon/icon.module.ts")).then(x => x.IconModule) },
            { path: 'crud', loadChildren: () => Promise.all(/*! import() | crud-crud-module */[__webpack_require__.e("default~crud-crud-module~example-control-example-control-module"), __webpack_require__.e("crud-crud-module")]).then(__webpack_require__.bind(null, /*! ./crud/crud.module */ "./src/app/layout/example/crud/crud.module.ts")).then(x => x.CrudModule) },
        ]
    },
];
const ExampleRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=example-example-module.js.map