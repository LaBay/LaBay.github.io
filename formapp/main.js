(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'HelveticaNeue Bold';\r\n    src: url('/assets/fonts/helveticaneubold-webfont.woff2') format('woff2'),\r\n         url('/assets/fonts/helveticaneubold-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'HelveticaNeue Light';\r\n    src: url('/assets/fonts/helveticaneuelight-webfont.woff2') format('woff2'),\r\n         url('/assets/fonts/helveticaneuelight-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.wrapper{\r\n\twidth: 450px;\r\n\tmargin: auto;\r\n}\r\n\r\nh1{\r\n\ttext-indent: 75px;\r\n}\r\n\r\n.part1{\r\n\tfont-family: \"HelveticaNeue Bold\";\r\n\tfont-size: 41.36px;\r\n\tcolor: #2fa2c3;\r\n\r\n}\r\n\r\n.part2{\r\n\tfont-family: \"HelveticaNeue Light\";\r\n\tfont-size: 18px;\r\n\tcolor: #666666;\r\n\tletter-spacing: -0.18px;\r\n}\r\n\r\nform{\r\n\tmargin: auto;\r\n\tpadding-left: 72.5px;\r\n\tbox-sizing: border-box;\r\n\theight: 311px;\r\n\twidth: 440px;\r\n\t\r\n\tbackground-color: rgb(255,255,255);\r\n\tborder: 1px solid rgba(153,153,153, 0.33);\r\n\tborder-radius: 5.51px;\r\n\tfont-family: \"HelveticaNeue Light\";\r\n}\r\n\r\ninput[type=email],input[type=password]{\r\n\t\r\n\tmargin-right: 10px;\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgb(255,255,255);\r\n\tborder-radius: 5px;\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: rgba(153,153,153, 0.28);\r\n\twidth: 295px;\r\n\theight: 40px;\r\n\tfont-size: 14px;\r\n\tcolor: rgb(102, 102, 102);\r\n\tletter-spacing: -0.14px;\r\n\ttext-indent: 40px;\r\n\tbackground-position:  15px center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\ninput[type=email]{\r\n\tmargin-top: 36px;\r\n\tbackground-image: url('/assets/login.png');\r\n}\r\n\r\ninput[type=password]{\r\n\tmargin-top: 22px;\r\n\tbackground-image: url('/assets/password.png');\r\n}\r\n\r\ninput[type=button]{\r\n\tmargin-top: 40px;\r\n\tdisplay: inline-block;\r\n\tcolor: rgb(255,255,255);\r\n\tletter-spacing: -0.18px;\r\n\tfont-size: 18px;\r\n\twidth: 92px;\r\n\theight: 40px;\r\n\tbackground-color: #36a2c1;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 3px 2px #2d7f96;\r\n}\r\n\r\ninput[type=button]:active{\r\n\tbox-shadow: none;\r\n}\r\n\r\n.error-msg{\r\n\tmargin-left: 5px;\r\n\tcolor: #ed1f24;\r\n\tfont-size: 11px;\r\n}\r\n\r\n.success-symbol{\r\n\tcolor: rgb(0, 138, 70);\r\n\r\n}\r\n\r\n.error-symbol{\r\n\tcolor: rgb(237, 31, 36);\r\n\t\r\n}\r\n\r\np{\r\n\tmargin-top: 15px;\r\n\tfont-size: 12px;\r\n\tcolor: rgb(102,102,102);\r\n\tletter-spacing: -0.12px;\r\n}\r\n\r\np > a{\r\n\tcolor: #36a2c1;\r\n\ttext-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1>\n    <span class=\"part1\">Bank</span>\n    <span class=\"part2\"> Support Portal</span>\n  </h1>\n  <app-form-handler></app-form-handler>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-handler.component */ "./src/app/form-handler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _form_handler_component__WEBPACK_IMPORTED_MODULE_3__["FormHandler"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-handler.component.ts":
/*!*******************************************!*\
  !*** ./src/app/form-handler.component.ts ***!
  \*******************************************/
/*! exports provided: FormHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHandler", function() { return FormHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormHandler = /** @class */ (function () {
    function FormHandler() {
        this.login = '';
        this.password = '';
        this.corectLogin = false;
        this.correctPassword = false;
        this.shomMsgWrongLogin = false;
    }
    FormHandler.prototype.getLogin = function (login) {
        this.login = login;
        this.shomMsgWrongLogin = false;
        this.correctPassword = false;
        var emailOrder = /\S+@\S+\.\S+/;
        if (emailOrder.test(login)) {
            this.corectLogin = true;
            console.log('email');
        }
        else {
            console.log('not email');
        }
        ;
    };
    ;
    FormHandler.prototype.getPassword = function (password) {
        this.password = password;
    };
    ;
    FormHandler.prototype.check = function () {
        if (this.login == 'designer@gmail.com') {
            if (this.password == 'password') {
                this.corectLogin = true;
                this.correctPassword = true;
                console.log('correct login, correct password');
            }
            else {
                console.log('wrong password');
            }
        }
        else {
            this.corectLogin = false;
            this.shomMsgWrongLogin = true;
            console.log('wrong login');
        }
        ;
    };
    FormHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-handler',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: "\n\t\t<form>\n\t\t    <input type=\"email\" placeholder=\"E-mail\"\n\t\t\t\t#login\n\t\t\t\t(keyup.enter)=\"getLogin(login.value)\"\n\t\t\t\t(blur)=\"getLogin(login.value)\">\n\t\t    <i *ngIf=corectLogin class=\"fas fa-check success-symbol\"></i>\n\t\t    <i *ngIf=!corectLogin class=\"fas fa-times error-symbol\"></i>\n\t\t    <br>\n\t\t    <span [style.visibility] = \"shomMsgWrongLogin ? 'visible' : 'hidden'\" class=\"error-msg\">Invalid Username</span>\n\t\t    <input [style.borderColor] = \"correctPassword ? 'rgb(0, 138, 70)' : 'rgba(153,153,153, 0.28)' \" type=\"password\" placeholder=\"Password\"\n\t\t\t\t#password\n\t\t\t\t(blur)=\"getPassword(password.value)\">\n\t\t    <i *ngIf=correctPassword class=\"fas fa-check success-symbol\"></i>\n\t\t   \n\t\t    <input type=\"button\" value=\"Login\" (click)=\"check()\">\n\t\t    <p>Forgot your password? <a href=\"#\">Reset it here.</a></p>\n\t\t</form>\n\t"
        })
    ], FormHandler);
    return FormHandler;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\HM\aimprosoft\a-f\form-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map