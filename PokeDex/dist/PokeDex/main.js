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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-search-footer></app-search-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  background-color: #707070; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFVO0VBQ1YsVUFBUztFQUNULHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLGtDQUFpQztFQUNqQyxpQkFBZ0I7RUFDaEIsMEJBQW9DLEVBQ3JDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBva2VSZWQ6ICNlZjUzNTA7XG4kYmFja2dyb3VuZEdyYXk6IHJnYigxMTIsIDExMiwgMTEyKTtcbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PokeDex';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading-modal/loading-modal.component */ "./src/app/loading-modal/loading-modal.component.ts");
/* harmony import */ var _search_footer_search_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-footer/search-footer.component */ "./src/app/search-footer/search-footer.component.ts");
/* harmony import */ var _poke_entry_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poke-entry/poke-header/poke-header.component */ "./src/app/poke-entry/poke-header/poke-header.component.ts");
/* harmony import */ var _poke_entry_poke_entry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./poke-entry/poke-entry.component */ "./src/app/poke-entry/poke-entry.component.ts");
/* harmony import */ var _poke_entry_poke_text_poke_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./poke-entry/poke-text/poke-text.component */ "./src/app/poke-entry/poke-text/poke-text.component.ts");
/* harmony import */ var _poke_entry_poke_sprite_poke_sprite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./poke-entry/poke-sprite/poke-sprite.component */ "./src/app/poke-entry/poke-sprite/poke-sprite.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_9__["LoadingModalComponent"],
                _search_footer_search_footer_component__WEBPACK_IMPORTED_MODULE_10__["SearchFooterComponent"],
                _poke_entry_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_11__["PokeHeaderComponent"],
                _poke_entry_poke_entry_component__WEBPACK_IMPORTED_MODULE_12__["PokeEntryComponent"],
                _poke_entry_poke_text_poke_text_component__WEBPACK_IMPORTED_MODULE_13__["PokeTextComponent"],
                _poke_entry_poke_sprite_poke_sprite_component__WEBPACK_IMPORTED_MODULE_14__["PokeSpriteComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--\n    <img src=\"{{spriteImageEndpoint}}\" alt=\"\" /> <br />\n    <p class=\"lead uppercase\">Pokedex Entry:</p>\n    <h1 class=\"display-4\">{{ pokemonName }}</h1>\n    <blockquote class=\"blockquote\">\n      <p class=\"lead\">{{ pokedexEntry }}</p>\n    </blockquote>\n  -->\n\n  <!--\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img\n        class=\"card-img-top\"\n        src=\"{{spriteImageEndpoint}}\"\n        alt=\"pokemon sprite\"\n      />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ pokemonName }}</h5>\n        <p class=\"card-text\">{{ pokedexEntry }}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Add to Favorites</a>\n      </div>\n    </div>\n  -->\n\n  <!--\n    <div class=\"input-container\">\n      <label for=\"pokemonInput\">Search a Pokemon</label>\n      <input type=\"text\" [(ngModel)]=\"userSelectedPokemon\" />\n      <button (click)=\"onCallPokedex()\">Search pokemon</button>\n    </div>\n  -->\n\n  <!--\n    <div class=\"form-inline\">\n        <div class=\"form-group mx-sm-3 mb-2\">\n          <label for=\"inputPassword2\" class=\"sr-only\"\n            >Pokemon name or number:</label\n          >\n          <input\n            type=\"text\"\n            [(ngModel)]=\"userSelectedPokemon\"\n            class=\"form-control\"\n            id=\"inputPokemon\"\n            placeholder=\"'Pikachu' or '25'\"\n          />\n        </div>\n        <button\n          type=\"submit\"\n          (click)=\"onCallPokedex()\"\n          class=\"btn btn-primary mb-2\"\n        >\n          Search Pokedex\n        </button>\n      </div>\n    </div>\n  -->\n  <app-poke-entry>\n  </app-poke-entry>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  margin-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _poke_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../poke.service */ "./src/app/poke.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(pokeService) {
        this.pokeService = pokeService;
        this.userSelectedPokemon = "";
        this.pokemonName = "";
        this.spriteImageEndpoint = "";
        this.pokedexEntry = "";
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onCallPokedex = function () {
        var _this = this;
        //Trigger our fake loading modal
        this.loading = true;
        this.pokeService
            .getPokemonData(this.userSelectedPokemon)
            .subscribe(function (mergedPayload) {
            var pokedexData = mergedPayload[0], spriteData = mergedPayload[1];
            var spriteImageEndpoint = spriteData.sprites.front_default;
            var flavor_text_entries = pokedexData.flavor_text_entries, names = pokedexData.names;
            var INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY = 1;
            var INDEX_OF_ENGLISH_NAME_ENTRY = 0;
            //
            var pokedexEntry = flavor_text_entries[INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY].flavor_text;
            var pokemonName = names[INDEX_OF_ENGLISH_NAME_ENTRY].name;
            _this.pokedexEntry = pokedexEntry;
            _this.spriteImageEndpoint = spriteImageEndpoint;
            _this.loading = false;
            _this.pokemonName = pokemonName;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_poke_service__WEBPACK_IMPORTED_MODULE_2__["PokeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading-modal/loading-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/loading-modal/loading-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\n  <div class=\"modal-image rotating\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loading-modal/loading-modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/loading-modal/loading-modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5); }\n\n@-webkit-keyframes rotating /* Safari and Chrome */ {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.rotating {\n  -webkit-animation: rotating 2s linear infinite;\n  animation: rotating 2s linear infinite; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9sb2FkaW5nLW1vZGFsL2xvYWRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNO0VBQ04sUUFBTztFQUNQLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFO0lBQ0UsZ0NBQStCO0lBRS9CLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQWlDO0lBRWpDLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0U7SUFHRSxnQ0FBK0I7SUFFL0Isd0JBQXVCLEVBQUE7RUFFekI7SUFHRSxrQ0FBaUM7SUFFakMsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSwrQ0FBOEM7RUFJOUMsdUNBQXNDLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1tb2RhbC9sb2FkaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpbmcgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi8ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5yb3RhdGluZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/loading-modal/loading-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/loading-modal/loading-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: LoadingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModalComponent", function() { return LoadingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingModalComponent = /** @class */ (function () {
    function LoadingModalComponent() {
    }
    LoadingModalComponent.prototype.ngOnInit = function () {
    };
    LoadingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-modal',
            template: __webpack_require__(/*! ./loading-modal.component.html */ "./src/app/loading-modal/loading-modal.component.html"),
            styles: [__webpack_require__(/*! ./loading-modal.component.scss */ "./src/app/loading-modal/loading-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingModalComponent);
    return LoadingModalComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-main__container\">\n  <div class=\"hamburger__container\"><i class=\"fas fa-bars\"></i></div>\n  <div class=\"logo__container\"><h1 class=\"logo-lead\">Pokedex</h1></div>\n  <!-- <div class=\"hamburger__container\"><i class=\"fas fa-heart\"></i></div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-main__container {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 5em;\n  background-color: #ef5350;\n  color: white; }\n  .navbar-main__container .hamburger__container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 0.75rem;\n    font-size: 2.5rem;\n    margin: 0.5rem;\n    border: 1px solid white;\n    background-color: white;\n    border-radius: 15px;\n    color: #707070;\n    height: 80%;\n    display: flex;\n    align-items: center; }\n  .navbar-main__container .logo__container {\n    margin-left: auto;\n    margin-right: auto; }\n  .navbar-main__container .logo-lead {\n    font-weight: 700;\n    font-size: 2.5rem; }\n  @media (min-width: 640px) {\n    .navbar-main__container .logo-lead {\n      font-size: 4rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCwwQkFUZTtFQVVmLGFBUmMsRUFxQ2Y7RUFwQ0Q7SUFTSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxpQkFBZ0I7SUFDaEIsa0JBQWlCO0lBQ2pCLGVBQWM7SUFDZCx3QkFBdUI7SUFDdkIsd0JBakJZO0lBa0JaLG9CQUFtQjtJQUNuQixlQUF5QjtJQUN6QixZQUFXO0lBQ1gsY0FBYTtJQUNiLG9CQUFtQixFQUNwQjtFQXRCSDtJQXdCSSxrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25CO0VBMUJIO0lBNEJJLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDbEI7RUFDRDtJQS9CRjtNQWlDTSxnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwb2tlUmVkOiAjZWY1MzUwO1xuJHBva2VSZWRIb3ZlcmVkOiAjYzYyODI4O1xuJHBva2VUZXh0OiB3aGl0ZTtcbi5uYXZiYXItbWFpbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZVJlZDtcbiAgY29sb3I6ICRwb2tlVGV4dDtcbiAgLmhhbWJ1cmdlcl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZVRleHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xuICAgIGhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubG9nb19fY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLmxvZ28tbGVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAubG9nby1sZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/poke-entry/poke-entry.component.html":
/*!******************************************************!*\
  !*** ./src/app/poke-entry/poke-entry.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poke-entry__container\">\n  <app-poke-header></app-poke-header>\n  <app-poke-sprite></app-poke-sprite>\n  <app-poke-text></app-poke-text>\n  <!-- LOADING MODAL -->\n  <app-loading-modal *ngIf=\"isLoading\"></app-loading-modal>\n</div>\n"

/***/ }),

/***/ "./src/app/poke-entry/poke-entry.component.scss":
/*!******************************************************!*\
  !*** ./src/app/poke-entry/poke-entry.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poke-entry__container {\n  background-color: #707070;\n  padding-bottom: 0.5rem;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9wb2tlLWVudHJ5L3Bva2UtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bva2UtZW50cnkvcG9rZS1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlLWVudHJ5X19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/poke-entry/poke-entry.component.ts":
/*!****************************************************!*\
  !*** ./src/app/poke-entry/poke-entry.component.ts ***!
  \****************************************************/
/*! exports provided: PokeEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeEntryComponent", function() { return PokeEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PokeEntryComponent = /** @class */ (function () {
    function PokeEntryComponent() {
    }
    PokeEntryComponent.prototype.ngOnInit = function () {
    };
    PokeEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poke-entry',
            template: __webpack_require__(/*! ./poke-entry.component.html */ "./src/app/poke-entry/poke-entry.component.html"),
            styles: [__webpack_require__(/*! ./poke-entry.component.scss */ "./src/app/poke-entry/poke-entry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PokeEntryComponent);
    return PokeEntryComponent;
}());



/***/ }),

/***/ "./src/app/poke-entry/poke-header/poke-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/poke-entry/poke-header/poke-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poke-header__container\">\n  <div class=\"poke-title__container\">\n    <h1 class=\"poke-lead\">Pokemon Name</h1>\n    <p class=\"poke-number text-monospace\">#111</p>\n  </div>\n\n  <div class=\"hamburger__container\"><i class=\"far fa-heart\"></i></div>\n</div>\n"

/***/ }),

/***/ "./src/app/poke-entry/poke-header/poke-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/poke-entry/poke-header/poke-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poke-header__container {\n  display: flex;\n  color: #fff; }\n  .poke-header__container .poke-title__container {\n    margin: 0.5rem; }\n  .poke-header__container .poke-title__container .poke-lead {\n      font-weight: 500;\n      font-size: 2rem; }\n  .poke-header__container .hamburger__container {\n    padding: 0.75rem;\n    font-size: 2.5rem;\n    margin: 0.5rem;\n    margin-left: auto;\n    border: 1px solid white;\n    background-color: white;\n    border-radius: 15px;\n    color: #707070;\n    height: 80%;\n    display: flex;\n    align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9wb2tlLWVudHJ5L3Bva2UtaGVhZGVyL3Bva2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLFlBQVcsRUF3Qlo7RUExQkQ7SUFLSSxlQUFjLEVBTWY7RUFYSDtNQVFNLGlCQUFnQjtNQUNoQixnQkFBZSxFQUNoQjtFQVZMO0lBY0ksaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLHdCQUF1QjtJQUN2Qix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLGVBQXlCO0lBQ3pCLFlBQVc7SUFDWCxjQUFhO0lBQ2Isb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcG9rZS1lbnRyeS9wb2tlLWhlYWRlci9wb2tlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlLWhlYWRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG5cbiAgLnBva2UtdGl0bGVfX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG5cbiAgICAucG9rZS1sZWFkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLmhhbWJ1cmdlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/poke-entry/poke-header/poke-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/poke-entry/poke-header/poke-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: PokeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeHeaderComponent", function() { return PokeHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/poke.service */ "./src/app/poke.service.ts");



var PokeHeaderComponent = /** @class */ (function () {
    function PokeHeaderComponent(pokeService) {
        this.pokeService = pokeService;
        this.pokeService.pokePayloadChange.subscribe(function (_a) {
            var pokedexEntry = _a.pokedexEntry;
            console.log({ pokedexEntry: pokedexEntry });
        });
    }
    PokeHeaderComponent.prototype.ngOnInit = function () { };
    PokeHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-poke-header",
            template: __webpack_require__(/*! ./poke-header.component.html */ "./src/app/poke-entry/poke-header/poke-header.component.html"),
            styles: [__webpack_require__(/*! ./poke-header.component.scss */ "./src/app/poke-entry/poke-header/poke-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__["PokeService"]])
    ], PokeHeaderComponent);
    return PokeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/poke-entry/poke-sprite/poke-sprite.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/poke-entry/poke-sprite/poke-sprite.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image__container\">\n  <img id=\"sprite-image\" src=\"{{ spriteImageEndpoint}}\" alt=\"\" class=\"sprite\" />\n</div>\n"

/***/ }),

/***/ "./src/app/poke-entry/poke-sprite/poke-sprite.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/poke-entry/poke-sprite/poke-sprite.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image__container {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  max-height: 250px;\n  width: 50%;\n  margin: auto;\n  background-color: #4b4b4b;\n  border-radius: 50%; }\n  .image__container img {\n    height: 400px; }\n  .blurin-animation-active {\n  -webkit-animation: blurin 0.5s ease-in;\n          animation: blurin 0.5s ease-in; }\n  @-webkit-keyframes blurin {\n  from {\n    -webkit-filter: blur(5px);\n            filter: blur(5px); }\n  to {\n    -webkit-filter: blur(0px);\n            filter: blur(0px); } }\n  @keyframes blurin {\n  from {\n    -webkit-filter: blur(5px);\n            filter: blur(5px); }\n  to {\n    -webkit-filter: blur(0px);\n            filter: blur(0px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9wb2tlLWVudHJ5L3Bva2Utc3ByaXRlL3Bva2Utc3ByaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixhQUFZO0VBT1osMEJBQWlDO0VBQ2pDLG1CQUFrQixFQUluQjtFQWxCRDtJQWdCSSxjQUFhLEVBQ2Q7RUFHSDtFQUNFLHVDQUE4QjtVQUE5QiwrQkFBOEIsRUFDL0I7RUFDRDtFQUNFO0lBQ0UsMEJBQWlCO1lBQWpCLGtCQUFpQixFQUFBO0VBR25CO0lBQ0UsMEJBQWlCO1lBQWpCLGtCQUFpQixFQUFBLEVBQUE7RUFOckI7RUFDRTtJQUNFLDBCQUFpQjtZQUFqQixrQkFBaUIsRUFBQTtFQUduQjtJQUNFLDBCQUFpQjtZQUFqQixrQkFBaUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9rZS1lbnRyeS9wb2tlLXNwcml0ZS9wb2tlLXNwcml0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZV9fY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIC8vIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIC8vIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gIC8vIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAvLyAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gIC8vIGZpbHRlcjogYmx1cig1cHgpO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBpbWcge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cblxuLmJsdXJpbi1hbmltYXRpb24tYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBibHVyaW4gMC41cyBlYXNlLWluO1xufVxuQGtleWZyYW1lcyBibHVyaW4ge1xuICBmcm9tIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/poke-entry/poke-sprite/poke-sprite.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/poke-entry/poke-sprite/poke-sprite.component.ts ***!
  \*****************************************************************/
/*! exports provided: PokeSpriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeSpriteComponent", function() { return PokeSpriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/poke.service */ "./src/app/poke.service.ts");



var PokeSpriteComponent = /** @class */ (function () {
    function PokeSpriteComponent(pokeService) {
        var _this = this;
        this.pokeService = pokeService;
        this.pokeService.pokePayloadChange.subscribe(function (_a) {
            var spriteImageEndpoint = _a.spriteImageEndpoint;
            _this.spriteImageEndpoint = spriteImageEndpoint;
            _this.addBlurEffectOnLoad().then(function () {
                document
                    .querySelector("#sprite-image")
                    .classList.remove("blurin-animation-active");
            });
        });
    }
    PokeSpriteComponent.prototype.ngOnInit = function () { };
    PokeSpriteComponent.prototype.addBlurEffectOnLoad = function () {
        return new Promise(function (res, rej) {
            document
                .querySelector("#sprite-image")
                .classList.add("blurin-animation-active");
            setTimeout(function () {
                res();
            }, 500);
        });
    };
    PokeSpriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-poke-sprite",
            template: __webpack_require__(/*! ./poke-sprite.component.html */ "./src/app/poke-entry/poke-sprite/poke-sprite.component.html"),
            styles: [__webpack_require__(/*! ./poke-sprite.component.scss */ "./src/app/poke-entry/poke-sprite/poke-sprite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__["PokeService"]])
    ], PokeSpriteComponent);
    return PokeSpriteComponent;
}());



/***/ }),

/***/ "./src/app/poke-entry/poke-text/poke-text.component.html":
/*!***************************************************************!*\
  !*** ./src/app/poke-entry/poke-text/poke-text.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poke-text__container\">\n  <p class=\"entry\">{{ pokedexEntry }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/poke-entry/poke-text/poke-text.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/poke-entry/poke-text/poke-text.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poke-text__container {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  justify-content: center;\n  background-color: #4b4b4b;\n  margin: 0.5rem;\n  border-radius: 15px; }\n  .poke-text__container .entry {\n    color: white;\n    font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9wb2tlLWVudHJ5L3Bva2UtdGV4dC9wb2tlLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLDBCQUFpQztFQUNqQyxlQUFjO0VBQ2Qsb0JBQW1CLEVBS3BCO0VBWkQ7SUFTSSxhQUFZO0lBQ1osa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcG9rZS1lbnRyeS9wb2tlLXRleHQvcG9rZS10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2UtdGV4dF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLmVudHJ5IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/poke-entry/poke-text/poke-text.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/poke-entry/poke-text/poke-text.component.ts ***!
  \*************************************************************/
/*! exports provided: PokeTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeTextComponent", function() { return PokeTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/poke.service */ "./src/app/poke.service.ts");



var PokeTextComponent = /** @class */ (function () {
    function PokeTextComponent(pokeService) {
        var _this = this;
        this.pokeService = pokeService;
        this.pokedexEntry = "";
        this.pokeService.pokePayloadChange.subscribe(function (_a) {
            var pokedexEntry = _a.pokedexEntry;
            _this.pokedexEntry = pokedexEntry;
        });
    }
    PokeTextComponent.prototype.ngOnInit = function () { };
    PokeTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-poke-text",
            template: __webpack_require__(/*! ./poke-text.component.html */ "./src/app/poke-entry/poke-text/poke-text.component.html"),
            styles: [__webpack_require__(/*! ./poke-text.component.scss */ "./src/app/poke-entry/poke-text/poke-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_poke_service__WEBPACK_IMPORTED_MODULE_2__["PokeService"]])
    ], PokeTextComponent);
    return PokeTextComponent;
}());



/***/ }),

/***/ "./src/app/poke.service.ts":
/*!*********************************!*\
  !*** ./src/app/poke.service.ts ***!
  \*********************************/
/*! exports provided: PokeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeService", function() { return PokeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var PokeService = /** @class */ (function () {
    function PokeService(http) {
        this.http = http;
        //not the best practice
        this.pokemonSpriteEndpoint = "http://ec2-54-167-97-243.compute-1.amazonaws.com:9001/pokemon/";
        this.pokedexEndpoint = "http://ec2-54-167-97-243.compute-1.amazonaws.com:9001/pokemon/pokedex/";
        this.pokedexEntry = "";
        this.spriteImageEndpoint = "";
        this.loading = false;
        this.pokemonName = "";
        this.currentPokePayload = {};
        this.pokePayloadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pokePayloadChange = this.pokePayloadSubject.asObservable();
    }
    PokeService.prototype.emitPokepayloadChange = function () {
        this.pokePayloadSubject.next(this.currentPokePayload);
    };
    PokeService.prototype.getPokemonData = function (pokemonId) {
        var pokemonSpriteEndpoint = "" + this.pokemonSpriteEndpoint + pokemonId;
        var pokedexEndpoint = "" + this.pokedexEndpoint + pokemonId;
        var pokedexRequest = this.http.get(pokedexEndpoint);
        var pokeSpriteRequest = this.http.get(pokemonSpriteEndpoint);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([pokedexRequest, pokeSpriteRequest]);
    };
    PokeService.prototype.callPokedex = function (pokemonId) {
        var _this = this;
        this.getPokemonData(pokemonId).subscribe(function (data) {
            _this.handlePokePayload(data);
        });
    };
    PokeService.prototype.handlePokePayload = function (mergedPayload) {
        //Trigger our fake loading modal
        this.loading = true;
        var pokedexData = mergedPayload[0], spriteData = mergedPayload[1];
        var spriteImageEndpoint = spriteData.sprites.front_default;
        var flavor_text_entries = pokedexData.flavor_text_entries, names = pokedexData.names;
        var INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY = 1;
        var INDEX_OF_ENGLISH_NAME_ENTRY = 0;
        //
        var pokedexEntry = flavor_text_entries[INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY].flavor_text;
        var pokemonName = names[INDEX_OF_ENGLISH_NAME_ENTRY].name;
        this.pokedexEntry = pokedexEntry;
        this.spriteImageEndpoint = spriteImageEndpoint;
        this.loading = false;
        this.pokemonName = pokemonName;
        this.currentPokePayload = {
            pokedexEntry: pokedexEntry,
            spriteImageEndpoint: spriteImageEndpoint,
            pokemonName: pokemonName
        };
        console.log(this.pokemonSpriteEndpoint);
        console.log(this.currentPokePayload);
        this.emitPokepayloadChange();
    };
    PokeService.prototype.getPokemonPokedexData = function (pokemonId) {
        var endpoint = "" + this.pokedexEndpoint + pokemonId;
        return this.http.get(endpoint);
    };
    PokeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokeService);
    return PokeService;
}());



/***/ }),

/***/ "./src/app/search-footer/search-footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-footer/search-footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-main__container\">\n  <input\n    [(ngModel)]=\"userSearchedPokemon\"\n    placeholder=\"e.g., '151' or 'Mew'\"\n    class=\"logo__container\"\n  />\n  <div class=\"hamburger__container\" (click)=\"onSearchPokemon()\">\n    <i class=\"fas fa-search\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-footer/search-footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/search-footer/search-footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-main__container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 5em;\n  background-color: #ef5350;\n  color: white; }\n  .navbar-main__container .hamburger__container {\n    padding: 0.75rem;\n    font-size: 2.5rem;\n    margin: 0.5rem;\n    border: 1px solid white;\n    background-color: white;\n    border-radius: 15px;\n    color: #707070;\n    height: 80%;\n    display: flex;\n    align-items: center; }\n  .navbar-main__container .logo__container {\n    color: #707070;\n    font-size: 2.5rem;\n    font-weight: 500;\n    text-align: center;\n    width: 90%;\n    margin-left: 0.5rem;\n    margin-right: auto;\n    border: 1px solid white;\n    background-color: white;\n    border-radius: 15px;\n    height: 80%; }\n  .navbar-main__container .logo-lead {\n    font-weight: 700;\n    font-size: 2.5rem; }\n  @media (min-width: 640px) {\n    .navbar-main__container .logo-lead {\n      font-size: 4rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb3JrL0RldmVsb3BtZW50L1ppcENvZGVyTmdQb2tlZGV4L1Bva2VEZXgvc3JjL2FwcC9zZWFyY2gtZm9vdGVyL3NlYXJjaC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsMEJBUmU7RUFTZixhQVBjLEVBMkNmO0VBMUNEO0lBUUksaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQixlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLHdCQWJZO0lBY1osb0JBQW1CO0lBQ25CLGVBQXlCO0lBQ3pCLFlBQVc7SUFDWCxjQUFhO0lBQ2Isb0JBQW1CLEVBQ3BCO0VBbEJIO0lBb0JJLGVBQXlCO0lBQ3pCLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBRWxCLFdBQVU7SUFDVixvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLHdCQUF1QjtJQUN2Qix3QkE5Qlk7SUErQlosb0JBQW1CO0lBQ25CLFlBQVcsRUFDWjtFQWhDSDtJQWtDSSxpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ2xCO0VBQ0Q7SUFyQ0Y7TUF1Q00sZ0JBQWUsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb290ZXIvc2VhcmNoLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwb2tlUmVkOiAjZWY1MzUwO1xuJHBva2VSZWRIb3ZlcmVkOiAjYzYyODI4O1xuJHBva2VUZXh0OiB3aGl0ZTtcbi5uYXZiYXItbWFpbl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBva2VSZWQ7XG4gIGNvbG9yOiAkcG9rZVRleHQ7XG4gIC5oYW1idXJnZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZVRleHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xuICAgIGhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubG9nb19fY29udGFpbmVyIHtcbiAgICBjb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZVRleHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgfVxuICAubG9nby1sZWFkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIC5sb2dvLWxlYWQge1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/search-footer/search-footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-footer/search-footer.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFooterComponent", function() { return SearchFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _poke_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../poke.service */ "./src/app/poke.service.ts");



var SearchFooterComponent = /** @class */ (function () {
    function SearchFooterComponent(pokeService) {
        this.pokeService = pokeService;
        this.userSearchedPokemon = "";
    }
    SearchFooterComponent.prototype.onSearchPokemon = function () {
        this.pokeService.callPokedex(this.userSearchedPokemon);
    };
    SearchFooterComponent.prototype.ngOnInit = function () { };
    SearchFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-footer",
            template: __webpack_require__(/*! ./search-footer.component.html */ "./src/app/search-footer/search-footer.component.html"),
            styles: [__webpack_require__(/*! ./search-footer.component.scss */ "./src/app/search-footer/search-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_poke_service__WEBPACK_IMPORTED_MODULE_2__["PokeService"]])
    ], SearchFooterComponent);
    return SearchFooterComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Work/Development/ZipCoderNgPokedex/PokeDex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map