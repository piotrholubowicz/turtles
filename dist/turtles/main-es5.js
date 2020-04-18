function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _games_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./games/games.component */
    "./src/app/games/games.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/games',
      pathMatch: 'full'
    }, {
      path: 'games',
      component: _games_games_component__WEBPACK_IMPORTED_MODULE_2__["GamesComponent"]
    }, {
      path: 'board/:id',
      component: _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]
    }, {
      path: 'hand/:id/:player',
      component: _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.name = 'Turtles';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [["href", "http://www.freepik.com", 2, "color", "#eeeeee", "font-size", "8pt", "float", "right"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Designed by rawpixel.com / Freepik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _games_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./games/games.component */
    "./src/app/games/games.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./color-picker-dialog/color-picker-dialog.component */
    "./src/app/color-picker-dialog/color-picker-dialog.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./image.service */
    "./src/app/image.service.ts");
    /* harmony import */


    var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./game-over/game-over.component */
    "./src/app/game-over/game-over.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
        useValue: '/turtles/'
      }, _game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"], _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], _image_service__WEBPACK_IMPORTED_MODULE_16__["ImageService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _games_games_component__WEBPACK_IMPORTED_MODULE_10__["GamesComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_11__["BoardComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_12__["PlayerComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ColorPickerDialogComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__["GameOverComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _games_games_component__WEBPACK_IMPORTED_MODULE_10__["GamesComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_11__["BoardComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_12__["PlayerComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ColorPickerDialogComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__["GameOverComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
            useValue: '/turtles/'
          }, _game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"], _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], _image_service__WEBPACK_IMPORTED_MODULE_16__["ImageService"]],
          entryComponents: [_color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ColorPickerDialogComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__["GameOverComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/board/board.component.ts":
  /*!******************************************!*\
    !*** ./src/app/board/board.component.ts ***!
    \******************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game */
    "./src/app/game.ts");
    /* harmony import */


    var _game_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game-engine */
    "./src/app/game-engine.ts");
    /* harmony import */


    var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../game-over/game-over.component */
    "./src/app/game-over/game-over.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../image.service */
    "./src/app/image.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        active_player: a0
      };
    };

    function BoardComponent_div_5_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r20 = ctx.$implicit;

        var game_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, game_r14.players[game_r14.active_player] == p_r20));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", p_r20, ", ");
      }
    }

    function BoardComponent_div_5_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
      }

      if (rf & 2) {
        var c_r22 = ctx.$implicit;

        var game_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r16.left(game_r14, c_r22))("top", ctx_r16.top(game_r14, c_r22))("z-index", ctx_r16.zindex(game_r14, c_r22));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r16.turtleSrc(c_r22), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function BoardComponent_div_5_img_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var i_r25 = ctx.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r17.leftMoveCard(i_r25));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r17.cardBackSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function BoardComponent_div_5_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var card_r26 = ctx.$implicit;
        var i_r27 = ctx.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r18.leftMoveCard(i_r27));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r18.cardFrontSrc(card_r26), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var _c1 = function _c1(a1, a2) {
      return ["/hand", a1, a2];
    };

    function BoardComponent_div_5_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r28 = ctx.$implicit;

        var game_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, game_r14.id, player_r28));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r28, " ");
      }
    }

    function BoardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BoardComponent_div_5_span_4_Template, 2, 4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BoardComponent_div_5_img_8_Template, 1, 7, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BoardComponent_div_5_img_11_Template, 1, 3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BoardComponent_div_5_img_13_Template, 1, 3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Kliknij na swoje imi\u0119, aby zobaczy\u0107 swoje karty:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BoardComponent_div_5_a_18_Template, 2, 5, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r14 = ctx.ngIf;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", game_r14.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.allColors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", game_r14.deck);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", game_r14.discarded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", game_r14.players);
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent(route, router, service, imageService, modalService) {
        _classCallCheck(this, BoardComponent);

        this.route = route;
        this.router = router;
        this.service = service;
        this.imageService = imageService;
        this.modalService = modalService;
        this.allColors = [_game__WEBPACK_IMPORTED_MODULE_2__["Color"].RED, _game__WEBPACK_IMPORTED_MODULE_2__["Color"].YELLOW, _game__WEBPACK_IMPORTED_MODULE_2__["Color"].BLUE, _game__WEBPACK_IMPORTED_MODULE_2__["Color"].PURPLE, _game__WEBPACK_IMPORTED_MODULE_2__["Color"].GREEN];
        this.Color = _game__WEBPACK_IMPORTED_MODULE_2__["Color"];
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.game$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) {
            return _this.service.getGame(+params.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (game) {
              if (game.winner) {
                _this.gameOver(game).then(function (result) {
                  if (result === 'onemore') {
                    console.log('once more!');

                    _this.service.addGame(_game_engine__WEBPACK_IMPORTED_MODULE_3__["GameEngine"].createGame(_game_engine__WEBPACK_IMPORTED_MODULE_3__["GameEngine"].shuffle(_toConsumableArray(game.players))), game).subscribe(function (newGame) {
                      _this.router.navigate(['/board', newGame.id]);
                    });
                  }
                });
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              if (err.status === 404) {
                _this.router.navigate(['/games', {
                  message: 'Nie ma takiej gry!'
                }]);
              }

              console.log("Error ".concat(err.status));
              return _this.game$;
            }));
          }));
        }
      }, {
        key: "turtleSrc",
        value: function turtleSrc(color) {
          return this.imageService.getTurtlePath(color);
        }
      }, {
        key: "left",
        value: function left(game, color) {
          var x = [80, 76, 67, 58, 50, 41, 32, 25, 15, 8];

          var fieldAndPos = _game_engine__WEBPACK_IMPORTED_MODULE_3__["GameEngine"].findPosition(game, color);

          if (fieldAndPos[0] === 0) {
            return "".concat(x[0] + 1.7 * color, "%");
          }

          return "".concat(x[fieldAndPos[0]], "%");
        }
      }, {
        key: "top",
        value: function top(game, color) {
          var y = [20, 50, 57, 51, 34, 27, 40, 57, 49, 35];

          var fieldAndPos = _game_engine__WEBPACK_IMPORTED_MODULE_3__["GameEngine"].findPosition(game, color);

          var field = fieldAndPos[0];
          var pos = fieldAndPos[1];

          if (field === 0) {
            return "".concat(y[0] + 15 * color, "%");
          } // height of a meeple is 5%


          return "".concat(y[field] - pos * 5, "%");
        }
      }, {
        key: "zindex",
        value: function zindex(game, color) {
          var z = [0, 1, 2, 3, 2, 1, 2, 3, 2, 1];

          var fieldAndPos = _game_engine__WEBPACK_IMPORTED_MODULE_3__["GameEngine"].findPosition(game, color);

          if (fieldAndPos[0] === 0) {
            return "".concat(color);
          }

          return "".concat(10 * z[fieldAndPos[0]] + fieldAndPos[1]);
        }
      }, {
        key: "gameOver",
        value: function gameOver(game) {
          var modalRef = this.modalService.open(_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_4__["GameOverComponent"]);
          modalRef.componentInstance.winner = game.winner;
          modalRef.componentInstance.color = game.colors[game.winner];
          return modalRef.result;
        }
      }, {
        key: "cardBackSrc",
        value: function cardBackSrc() {
          return this.imageService.getMoveCardPath();
        }
      }, {
        key: "cardFrontSrc",
        value: function cardFrontSrc(cardIdx) {
          return this.imageService.getMoveCardPath(_game__WEBPACK_IMPORTED_MODULE_2__["ALL_CARDS"][cardIdx]);
        }
      }, {
        key: "leftMoveCard",
        value: function leftMoveCard(i) {
          return "".concat(20 + i, "%");
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      decls: 7,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col"], ["href", "/"], ["src", "/assets/img/title.png"], [4, "ngIf"], [1, "players"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12"], ["src", "/assets/img/board.png", 1, "board"], ["class", "meeple", 3, "src", "left", "top", "z-index", 4, "ngFor", "ngForOf"], [1, "row", "card-row"], [1, "col-6"], ["class", "movecard", 3, "src", "left", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-secondary btn-player", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "meeple", 3, "src"], [1, "movecard", 3, "src"], ["type", "button", 1, "btn", "btn-secondary", "btn-player", 3, "routerLink"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BoardComponent_div_5_Template, 19, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx.game$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["img.board[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5%;\n}\n\np.players[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\nspan.active_player[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #d4d800;\n}\n\nimg.meeple[_ngcontent-%COMP%] {\n  width: 10%;\n  height: auto;\n  position: absolute;\n}\n\n.card-row[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n\nimg.movecard[_ngcontent-%COMP%] {\n  width: 10%;\n  height: auto;\n  position: absolute;\n}\n\n.btn-player[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmJvYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5wLnBsYXllcnMge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbnNwYW4uYWN0aXZlX3BsYXllciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDRkODAwO1xufVxuXG5pbWcubWVlcGxlIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbmltZy5tb3ZlY2FyZCB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnRuLXBsYXllciB7XG4gIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game */
    "./src/app/game.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../image.service */
    "./src/app/image.service.ts");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(modalService, imageService) {
        _classCallCheck(this, CardComponent);

        this.modalService = modalService;
        this.imageService = imageService;
        this.played = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Color = _game__WEBPACK_IMPORTED_MODULE_1__["Color"];
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "card",
        value: function card() {
          return _game__WEBPACK_IMPORTED_MODULE_1__["ALL_CARDS"][this.cardIdx];
        }
      }, {
        key: "play",
        value: function play() {
          if (this.enabled) {
            this.played.emit({
              cardIdx: this.cardIdx,
              game: this.game
            });
          }
        }
      }, {
        key: "src",
        value: function src() {
          return this.imageService.getMoveCardPath(_game__WEBPACK_IMPORTED_MODULE_1__["ALL_CARDS"][this.cardIdx]);
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        game: "game",
        cardIdx: "cardIdx",
        enabled: "enabled"
      },
      outputs: {
        played: "played"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "click"], [1, "movecard", 3, "src"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_a_click_0_listener() {
            return ctx.play();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["img.movecard[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLm1vdmVjYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]
        }];
      }, {
        game: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardIdx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        played: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/color-picker-dialog/color-picker-dialog.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/color-picker-dialog/color-picker-dialog.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ColorPickerDialogComponent */

  /***/
  function srcAppColorPickerDialogColorPickerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerDialogComponent", function () {
      return ColorPickerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game */
    "./src/app/game.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../image.service */
    "./src/app/image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ColorPickerDialogComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r31 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", color_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", color_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r30.turtleSrc(color_r31), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ColorPickerDialogComponent = /*#__PURE__*/function () {
      function ColorPickerDialogComponent(activeModal, formBuilder, imageService) {
        _classCallCheck(this, ColorPickerDialogComponent);

        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.imageService = imageService;
        this.Color = _game__WEBPACK_IMPORTED_MODULE_2__["Color"];
        this.createForm();
      }

      _createClass(ColorPickerDialogComponent, [{
        key: "createForm",
        value: function createForm() {
          this.colorPickerFormGroup = this.formBuilder.group({
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.activeModal.close(this.colorPickerFormGroup.value);
        }
      }, {
        key: "turtleSrc",
        value: function turtleSrc(color) {
          return this.imageService.getTurtlePath(color);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ColorPickerDialogComponent;
    }();

    ColorPickerDialogComponent.ɵfac = function ColorPickerDialogComponent_Factory(t) {
      return new (t || ColorPickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]));
    };

    ColorPickerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorPickerDialogComponent,
      selectors: [["app-color-picker-dialog"]],
      inputs: {
        colors: "colors"
      },
      decls: 16,
      vars: 3,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "container"], [1, "form-row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "disabled"], [1, "col"], ["type", "radio", "name", "color", "formControlName", "color", "required", "", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [2, "width", "80%", 3, "src"]],
      template: function ColorPickerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wybierz \u017C\xF3\u0142wia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDialogComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ColorPickerDialogComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kt\xF3rego \u017C\xF3\u0142wia chcesz przesun\u0105\u0107?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ColorPickerDialogComponent_div_12_Template, 4, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.colorPickerFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.colorPickerFormGroup.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3ItcGlja2VyLWRpYWxvZy9jb2xvci1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29sb3ItcGlja2VyLWRpYWxvZy9jb2xvci1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLCBoNCB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-color-picker-dialog',
          templateUrl: './color-picker-dialog.component.html',
          styleUrls: ['./color-picker-dialog.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]
        }];
      }, {
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game-engine.ts":
  /*!********************************!*\
    !*** ./src/app/game-engine.ts ***!
    \********************************/

  /*! exports provided: GameEngine */

  /***/
  function srcAppGameEngineTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameEngine", function () {
      return GameEngine;
    });
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./game */
    "./src/app/game.ts");

    var GameEngine = /*#__PURE__*/function () {
      function GameEngine() {
        _classCallCheck(this, GameEngine);
      }

      _createClass(GameEngine, null, [{
        key: "createGame",
        value: function createGame(players) {
          if (players.length < 2) {
            console.log('too few players');
            return;
          }

          if (players.filter(function (item, index) {
            return players.indexOf(item) !== index;
          }).length > 0) {
            console.log("names can't repeat");
            return;
          }

          var turtles = [_game__WEBPACK_IMPORTED_MODULE_0__["Color"].BLUE, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].GREEN, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].PURPLE, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].RED, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].YELLOW];
          GameEngine.shuffle(turtles);
          var deck = Array.from(_game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"].keys()); // shallow copy

          GameEngine.shuffle(deck);
          var playersToTurtles = {};
          players.forEach(function (player) {
            return playersToTurtles[player] = turtles.pop();
          });
          var playersToHands = {};
          players.forEach(function (player) {
            return playersToHands[player] = deck.splice(0, 5);
          });
          return {
            id: undefined,
            players: players,
            colors: playersToTurtles,
            hands: playersToHands,
            deck: deck,
            discarded: [],
            board: [[_game__WEBPACK_IMPORTED_MODULE_0__["Color"].RED, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].GREEN, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].PURPLE, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].YELLOW, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].BLUE], [], [], [], [], [], [], [], [], []],
            last_move: undefined,
            active_player: 0,
            winner: undefined,
            next_game_id: undefined
          };
        }
      }, {
        key: "defineColors",
        value: function defineColors(game, cardIdx) {
          var color = _game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"][cardIdx].color;

          switch (color) {
            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].BLUE:
            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].GREEN:
            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].PURPLE:
            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].RED:
            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].YELLOW:
              var fieldAndPos = GameEngine.findPosition(game, color);

              if (fieldAndPos[0] === 0 && _game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"][cardIdx].distance < 0) {
                console.log("Can't move back ".concat(color));
                return [];
              }

              return [color];

            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].ANY:
              var colors = [_game__WEBPACK_IMPORTED_MODULE_0__["Color"].BLUE, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].GREEN, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].PURPLE, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].RED, _game__WEBPACK_IMPORTED_MODULE_0__["Color"].YELLOW];

              if (_game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"][cardIdx].distance < 0) {
                colors = colors.filter(function (c) {
                  return game.board[0].indexOf(c) === -1;
                });
              }

              return colors;

            case _game__WEBPACK_IMPORTED_MODULE_0__["Color"].LAST:
              return _toConsumableArray(game.board.find(function (f) {
                return f.length > 0;
              }));
          }

          throw new Error("Unsupported color ".concat(color));
        } // color should be well defined

      }, {
        key: "playCard",
        value: function playCard(game, cardIdx, color) {
          if (game.winner) {
            throw new Error("Can't play anymore, ".concat(game.winner, " has won"));
          }

          GameEngine.makeMove(game, _game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"][cardIdx].distance, color);
          GameEngine.useCard(game, cardIdx);
          GameEngine.reshuffleIfNecessary(game); // tslint:disable-next-line: no-unused-expression

          GameEngine.gameOver(game) || GameEngine.nextPlayer(game);
          console.log(game);
        }
      }, {
        key: "makeMove",
        value: function makeMove(game, distance, color) {
          var fieldAndPos = GameEngine.findPosition(game, color);
          var field = fieldAndPos[0];
          var pos = fieldAndPos[1]; // On start turtles are not stacked

          var stackSize = field === 0 ? 1 : game.board[field].length - pos; // We can't jump out of the board

          var landingField = Math.min(field + distance, game.board.length - 1);

          if (landingField < 0) {
            throw new Error("Can't go back, already on the first field");
          }

          var landingPos = game.board[landingField].length;
          var stack = game.board[field].splice(pos, stackSize);
          game.board[landingField] = game.board[landingField].concat(stack);
          console.log("moved ".concat(stackSize, " from ").concat(field, " to ").concat(landingField));
          console.log(game);
          game.last_move = {
            color: color,
            start: fieldAndPos,
            end: [landingField, landingPos]
          };
        }
      }, {
        key: "useCard",
        value: function useCard(game, cardIdx) {
          var player = game.players[game.active_player];
          console.log(player); // TODO map vs dict

          var handIdx = game.hands[player].findIndex(function (i) {
            return i === cardIdx;
          });

          if (handIdx === -1) {
            throw new Error("Invalid move, ".concat(_game__WEBPACK_IMPORTED_MODULE_0__["ALL_CARDS"][cardIdx], " not found for ").concat(player));
          }

          game.discarded.push(game.hands[player].splice(handIdx, 1)[0]);
          game.hands[player].push(game.deck.pop());
        }
      }, {
        key: "reshuffleIfNecessary",
        value: function reshuffleIfNecessary(game) {
          if (game.deck.length === 0) {
            game.deck = game.discarded;
            GameEngine.shuffle(game.deck);
            game.discarded = [];
            return true;
          }

          return false;
        }
      }, {
        key: "gameOver",
        value: function gameOver(game) {
          if (game.board[game.board.length - 1].length === 0) {
            return false;
          }

          for (var field = game.board.length - 1; field >= 0; field--) {
            var _iterator = _createForOfIteratorHelper(game.board[field]),
                _step;

            try {
              var _loop = function _loop() {
                var color = _step.value;
                var player = Object.keys(game.colors).find(function (p) {
                  return game.colors[p] === color;
                });

                if (player) {
                  game.winner = player;
                  console.log("".concat(player, " won!"));
                  return {
                    v: true
                  };
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _ret = _loop();

                if (typeof _ret === "object") return _ret.v;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          throw new Error("Invalid board, reached last field but no winner found");
        }
      }, {
        key: "nextPlayer",
        value: function nextPlayer(game) {
          game.active_player = (game.active_player + 1) % game.players.length;
        }
      }, {
        key: "findPosition",
        value: function findPosition(game, color) {
          var field = 0;
          var pos = 0;

          for (field = 0; field < game.board.length; field++) {
            for (pos = 0; pos < game.board[field].length; pos++) {
              if (game.board[field][pos] === color) {
                return [field, pos];
              }
            }
          }

          console.log(game);
          throw new Error("Invalid board, ".concat(color, " not found"));
        }
      }, {
        key: "shuffle",
        value: function shuffle(a) {
          for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            var x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
          }

          return a;
        }
      }]);

      return GameEngine;
    }();
    /***/

  },

  /***/
  "./src/app/game-over/game-over.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/game-over/game-over.component.ts ***!
    \**************************************************/

  /*! exports provided: GameOverComponent */

  /***/
  function srcAppGameOverGameOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameOverComponent", function () {
      return GameOverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../image.service */
    "./src/app/image.service.ts");

    var GameOverComponent = /*#__PURE__*/function () {
      function GameOverComponent(activeModal, imageService) {
        _classCallCheck(this, GameOverComponent);

        this.activeModal = activeModal;
        this.imageService = imageService;
      }

      _createClass(GameOverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "turtleCardSrc",
        value: function turtleCardSrc() {
          return this.imageService.getTurtleCardPath(this.color);
        }
      }]);

      return GameOverComponent;
    }();

    GameOverComponent.ɵfac = function GameOverComponent_Factory(t) {
      return new (t || GameOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]));
    };

    GameOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameOverComponent,
      selectors: [["app-game-over"]],
      inputs: {
        winner: "winner",
        color: "color"
      },
      decls: 22,
      vars: 2,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container"], [1, "row"], [1, "col"], [1, "col-4"], [1, "turtlecard", 3, "src"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]],
      template: function GameOverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Koniec gry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_18_listener() {
            return ctx.activeModal.close("onemore");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Jeszcze raz! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_20_listener() {
            return ctx.activeModal.close("OK");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wygra\u0142 ", ctx.winner, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.turtleCardSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\nimg.turtlecard[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtb3Zlci9nYW1lLW92ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAsIGg0IHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmltZy50dXJ0bGVjYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-over',
          templateUrl: './game-over.component.html',
          styleUrls: ['./game-over.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]
        }];
      }, {
        winner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game.service.ts":
  /*!*********************************!*\
    !*** ./src/app/game.service.ts ***!
    \*********************************/

  /*! exports provided: GameService */

  /***/
  function srcAppGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GameService = /*#__PURE__*/function () {
      function GameService(http) {
        _classCallCheck(this, GameService);

        this.http = http; // private gamesUrl = 'https://turtles-server--piotrholubowicz.repl.co/games/'; // URL to web api

        this.gamesUrl = 'https://turtles-server.herokuapp.com/games'; // URL to web api

        this.cache = {}; // url => etag

        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }
      /** GET games from the server */


      _createClass(GameService, [{
        key: "getGames",
        value: function getGames() {
          var _this2 = this;

          var url = this.gamesUrl;
          delete this.cache[url];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return _this2.fetchUrl(url, 'getGames');
          }), // a new http request on every tick
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }) // create a new Subject, which will act as a proxy
          );
        }
        /** GET game by id. Will 404 if id not found */

      }, {
        key: "getGame",
        value: function getGame(id) {
          var _this3 = this;

          var url = "".concat(this.gamesUrl, "/").concat(id);
          delete this.cache[url];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return _this3.fetchUrl(url, "getGame id=".concat(id));
          }), // a new http request on every tick
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }) // create a new Subject, which will act as a proxy
          );
        }
      }, {
        key: "fetchUrl",
        value: function fetchUrl(url, operation) {
          var _this4 = this;

          var headers = this.cache[url] ? this.headers.set('If-None-Match', this.cache[url]) : this.headers;
          return this.http.get(url, {
            observe: 'response',
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            return _this4.cache[url] = resp.headers.get('Etag');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp.body;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(operation)));
        } //////// Save methods //////////

        /** POST: add a new game to the server */

      }, {
        key: "addGame",
        value: function addGame(game, currentGame) {
          var url = currentGame ? "".concat(this.gamesUrl, "?prevGame=").concat(currentGame.id) : this.gamesUrl;
          return this.http.post(url, game, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newGame) {
            return console.log("added game w/ id=".concat(newGame.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (g) {
            return console.log(g);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addGame')));
        }
        /** DELETE: delete the game from the server */

      }, {
        key: "deleteGame",
        value: function deleteGame(game) {
          var id = typeof game === 'number' ? game : game.id;
          var url = "".concat(this.gamesUrl, "/").concat(id);
          return this.http["delete"](url, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log("deleted game id=".concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
        }
        /** PUT: update the game on the server */

      }, {
        key: "updateGame",
        value: function updateGame(game) {
          var url = "".concat(this.gamesUrl, "/").concat(game.id);
          console.log(game);
          return this.http.put(url, game, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log("updated game id=".concat(game.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGame')));
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param fallback - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this5 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
          return function (error) {
            if (error.status === 304) {
              // This is working as intended
              return fallback;
            }

            console.error(error); // log to console instead

            console.log("".concat(operation, " failed: ").concat(error.message));
            delete _this5.cache[error.url];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          };
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game.ts":
  /*!*************************!*\
    !*** ./src/app/game.ts ***!
    \*************************/

  /*! exports provided: Color, ALL_CARDS */

  /***/
  function srcAppGameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Color", function () {
      return Color;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALL_CARDS", function () {
      return ALL_CARDS;
    });

    var Color;

    (function (Color) {
      Color[Color["BLUE"] = 0] = "BLUE";
      Color[Color["GREEN"] = 1] = "GREEN";
      Color[Color["PURPLE"] = 2] = "PURPLE";
      Color[Color["RED"] = 3] = "RED";
      Color[Color["YELLOW"] = 4] = "YELLOW";
      Color[Color["LAST"] = 5] = "LAST";
      Color[Color["ANY"] = 6] = "ANY";
    })(Color || (Color = {}));

    var ALL_CARDS = [{
      distance: 1,
      color: Color.BLUE
    }, {
      distance: 1,
      color: Color.BLUE
    }, {
      distance: 1,
      color: Color.BLUE
    }, {
      distance: 1,
      color: Color.BLUE
    }, {
      distance: 1,
      color: Color.BLUE
    }, {
      distance: 2,
      color: Color.BLUE
    }, {
      distance: -1,
      color: Color.BLUE
    }, {
      distance: -1,
      color: Color.BLUE
    }, {
      distance: 1,
      color: Color.GREEN
    }, {
      distance: 1,
      color: Color.GREEN
    }, {
      distance: 1,
      color: Color.GREEN
    }, {
      distance: 1,
      color: Color.GREEN
    }, {
      distance: 1,
      color: Color.GREEN
    }, {
      distance: 2,
      color: Color.GREEN
    }, {
      distance: -1,
      color: Color.GREEN
    }, {
      distance: -1,
      color: Color.GREEN
    }, {
      distance: 1,
      color: Color.PURPLE
    }, {
      distance: 1,
      color: Color.PURPLE
    }, {
      distance: 1,
      color: Color.PURPLE
    }, {
      distance: 1,
      color: Color.PURPLE
    }, {
      distance: 1,
      color: Color.PURPLE
    }, {
      distance: 2,
      color: Color.PURPLE
    }, {
      distance: -1,
      color: Color.PURPLE
    }, {
      distance: -1,
      color: Color.PURPLE
    }, {
      distance: 1,
      color: Color.RED
    }, {
      distance: 1,
      color: Color.RED
    }, {
      distance: 1,
      color: Color.RED
    }, {
      distance: 1,
      color: Color.RED
    }, {
      distance: 1,
      color: Color.RED
    }, {
      distance: 2,
      color: Color.RED
    }, {
      distance: -1,
      color: Color.RED
    }, {
      distance: -1,
      color: Color.RED
    }, {
      distance: 1,
      color: Color.YELLOW
    }, {
      distance: 1,
      color: Color.YELLOW
    }, {
      distance: 1,
      color: Color.YELLOW
    }, {
      distance: 1,
      color: Color.YELLOW
    }, {
      distance: 1,
      color: Color.YELLOW
    }, {
      distance: 2,
      color: Color.YELLOW
    }, {
      distance: -1,
      color: Color.YELLOW
    }, {
      distance: -1,
      color: Color.YELLOW
    }, {
      distance: 1,
      color: Color.ANY
    }, {
      distance: 1,
      color: Color.ANY
    }, {
      distance: 1,
      color: Color.ANY
    }, {
      distance: 1,
      color: Color.ANY
    }, {
      distance: 1,
      color: Color.ANY
    }, {
      distance: -1,
      color: Color.ANY
    }, {
      distance: -1,
      color: Color.ANY
    }, {
      distance: 1,
      color: Color.LAST
    }, {
      distance: 1,
      color: Color.LAST
    }, {
      distance: 1,
      color: Color.LAST
    }, {
      distance: 2,
      color: Color.LAST
    }, {
      distance: 2,
      color: Color.LAST
    }];
    /***/
  },

  /***/
  "./src/app/games/games.component.ts":
  /*!******************************************!*\
    !*** ./src/app/games/games.component.ts ***!
    \******************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppGamesGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game-engine */
    "./src/app/game-engine.ts");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a1) {
      return ["/board", a1];
    };

    function GamesComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamesComponent_div_15_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var game_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r10["delete"](game_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](game_r9.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, game_r9.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", game_r9.players.join(", "), " ");
      }
    }

    function GamesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GamesComponent_div_15_div_1_Template, 8, 5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.games$));
      }
    }

    function GamesComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nie ma gier.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var GamesComponent = /*#__PURE__*/function () {
      function GamesComponent(service, route) {
        _classCallCheck(this, GamesComponent);

        this.service = service;
        this.route = route;
      }

      _createClass(GamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.games$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) {
            _this6.message = params.get('message');
            return _this6.service.getGames();
          }));
        }
      }, {
        key: "add",
        value: function add(playersInput) {
          var players = playersInput.filter(function (input) {
            return input !== '';
          }).map(function (input) {
            return input.trim();
          });

          var game = _game_engine__WEBPACK_IMPORTED_MODULE_2__["GameEngine"].createGame(players);

          if (game) {
            this.service.addGame(game).subscribe();
          }
        }
      }, {
        key: "delete",
        value: function _delete(game) {
          this.service.deleteGame(game).subscribe();
        }
      }]);

      return GamesComponent;
    }();

    GamesComponent.ɵfac = function GamesComponent_Factory(t) {
      return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GamesComponent,
      selectors: [["app-game-list"]],
      decls: 60,
      vars: 4,
      consts: [[1, "container"], [1, "row"], [1, "col"], ["href", "/"], ["src", "/assets/img/title.png"], [1, "col-6"], [1, "col-10"], [4, "ngIf", "ngIfElse"], ["noGames", ""], [1, "form-group", "row"], [1, "col-2", "col-form-label"], [1, "form-control"], ["player1", ""], ["player2", ""], ["player3", ""], ["player4", ""], ["player5", ""], ["type", "submit", 1, "btn", "btn-light", 3, "click"], ["class", "btn-group", "role", "group", "style", "width: 100%; margin-top: 5%;", 4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group", 2, "width", "100%", "margin-top", "5%"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "button", 1, "btn", "btn-light", "game", 2, "width", "80%", 3, "routerLink"], ["type", "button", "title", "delete game", 1, "btn", "btn-secondary", 3, "click"]],
      template: function GamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Wybierz istniej\u0105c\u0105 gr\u0119 lub stw\xF3rz now\u0105.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Istniej\u0105ce gry");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GamesComponent_div_15_Template, 3, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GamesComponent_ng_template_17_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Nowa gra");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Gracz 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Gracz 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 11, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Gracz 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 11, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Gracz 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 11, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Gracz 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 11, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamesComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);

            ctx.add([_r3.value, _r4.value, _r5.value, _r6.value, _r7.value]);
            _r3.value = "";
            _r4.value = "";
            _r5.value = "";
            _r6.value = "";
            return _r7.value = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Nowa gra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Regu\u0142y");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

          var tmp_0_0 = null;
          var currVal_0 = ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 2, ctx.games$)) == null ? null : tmp_0_0.length) > 0;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_0)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-game-list',
          templateUrl: './games.component.html',
          styleUrls: ['./games.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/image.service.ts":
  /*!**********************************!*\
    !*** ./src/app/image.service.ts ***!
    \**********************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game */
    "./src/app/game.ts");

    var ImageService = /*#__PURE__*/function () {
      // private PREFIX = 'https://raw.githubusercontent.com/piotrholubowicz/turtles/master/src/assets/img';
      function ImageService() {
        _classCallCheck(this, ImageService);

        this.PREFIX = '/assets/img';
      }

      _createClass(ImageService, [{
        key: "getMoveCardPath",
        value: function getMoveCardPath(card) {
          if (!card) {
            return "".concat(this.PREFIX, "/card-back.png");
          }

          var color = _game__WEBPACK_IMPORTED_MODULE_1__["Color"][card.color].toLowerCase();

          var sign = card.distance === -1 ? 'minus' : card.distance === 2 ? 'plusplus' : 'plus';
          return "".concat(this.PREFIX, "/card-").concat(color, "-").concat(sign, ".png");
        }
      }, {
        key: "getTurtleCardPath",
        value: function getTurtleCardPath(color) {
          var which = color !== undefined ? _game__WEBPACK_IMPORTED_MODULE_1__["Color"][color].toLowerCase() : 'back';
          return "".concat(this.PREFIX, "/turtle-card-").concat(which, ".png");
        }
      }, {
        key: "getTurtlePath",
        value: function getTurtlePath(color) {
          return "".concat(this.PREFIX, "/meeple-").concat(_game__WEBPACK_IMPORTED_MODULE_1__["Color"][color].toLowerCase(), ".png");
        }
      }]);

      return ImageService;
    }();

    ImageService.ɵfac = function ImageService_Factory(t) {
      return new (t || ImageService)();
    };

    ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageService,
      factory: ImageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var games = [];
          console.log('created the db');
          return {
            games: games
          };
        } // Overrides the genId method to ensure that a game always has an id.
        // If the games array is empty, the method below returns the initial number (11).
        // If the games array is not empty, the method below returns the highest
        // game id + 1.

      }, {
        key: "genId",
        value: function genId(games) {
          return games.length > 0 ? Math.max.apply(Math, _toConsumableArray(games.map(function (game) {
            return game.id;
          }))) + 1 : 100;
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
      return new (t || InMemoryDataService)();
    };

    InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InMemoryDataService,
      factory: InMemoryDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col"], ["href", "/"], ["src", "/assets/img/title.png"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ups, nic tu nie ma! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/player/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/player/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game */
    "./src/app/game.ts");
    /* harmony import */


    var _game_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../game-engine */
    "./src/app/game-engine.ts");
    /* harmony import */


    var _color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../color-picker-dialog/color-picker-dialog.component */
    "./src/app/color-picker-dialog/color-picker-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../image.service */
    "./src/app/image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    function PlayerComponent_div_5_span_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " (Ty)");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active_player: a0
      };
    };

    function PlayerComponent_div_5_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PlayerComponent_div_5_span_6_span_2_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r39 = ctx.$implicit;

        var game_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, game_r33.players[game_r33.active_player] == p_r39));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r34.player == p_r39);
      }
    }

    function PlayerComponent_div_5_img_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 18);
      }
    }

    function PlayerComponent_div_5_ng_template_11_img_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
      }
    }

    function PlayerComponent_div_5_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PlayerComponent_div_5_ng_template_11_img_0_Template, 1, 0, "img", 19);
      }

      if (rf & 2) {
        var game_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r37.player == game_r33.players[game_r33.active_player]);
      }
    }

    function PlayerComponent_div_5_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("played", function PlayerComponent_div_5_div_20_Template_app_card_played_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r45.onPlayed($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r44 = ctx.$implicit;

        var game_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cardIdx", card_r44)("game", game_r33)("enabled", game_r33.players[game_r33.active_player] == ctx_r38.player);
      }
    }

    function PlayerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PlayerComponent_div_5_span_6_Template, 4, 5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PlayerComponent_div_5_img_10_Template, 1, 0, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PlayerComponent_div_5_ng_template_11_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_div_5_Template_img_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var game_r33 = ctx.ngIf;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r48.showTurtleCard(game_r33.colors[ctx_r48.player]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Kliknij mnie");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PlayerComponent_div_5_div_20_Template, 2, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r33 = ctx.ngIf;

        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", game_r33.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", game_r33.winner)("ngIfElse", _r36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 5, ctx_r32.turtleCardSrc$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", game_r33.hands[ctx_r32.player]);
      }
    }

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent(route, router, service, modalService, imageService) {
        _classCallCheck(this, PlayerComponent);

        this.route = route;
        this.router = router;
        this.service = service;
        this.modalService = modalService;
        this.imageService = imageService;
        this.ColorT = _game__WEBPACK_IMPORTED_MODULE_3__["Color"];
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.game$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            _this7.player = params.get('player');
            return _this7.service.getGame(+params.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (game) {
              if (game.next_game_id) {
                _this7.router.navigate(['/hand', game.next_game_id, _this7.player]);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 404) {
                _this7.router.navigate(['/games', {
                  message: 'Nie ma takiej gry!'
                }]);
              }

              console.log("Error ".concat(err.status));
              return _this7.game$;
            }));
          }));
          this.turtleCardSrc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.turtleCardSrc());
        }
      }, {
        key: "onPlayed",
        value: function onPlayed(event) {
          var _this8 = this;

          var colorOptions = _game_engine__WEBPACK_IMPORTED_MODULE_4__["GameEngine"].defineColors(event.game, event.cardIdx);

          if (colorOptions.length === 0) {
            this.cantPlayCard();
          } else if (colorOptions.length > 1) {
            this.pickOneColor(colorOptions).then(function (result) {
              _this8.playTheCard(event.game, event.cardIdx, +result.color);
            })["catch"](function (error) {
              console.log(error);
            });
          } else {
            this.playTheCard(event.game, event.cardIdx, colorOptions[0]);
          }
        }
      }, {
        key: "cantPlayCard",
        value: function cantPlayCard() {}
      }, {
        key: "pickOneColor",
        value: function pickOneColor(colorOptions) {
          var modalRef = this.modalService.open(_color_picker_dialog_color_picker_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ColorPickerDialogComponent"]);
          modalRef.componentInstance.colors = colorOptions;
          return modalRef.result;
        }
      }, {
        key: "playTheCard",
        value: function playTheCard(game, cardIdx, color) {
          _game_engine__WEBPACK_IMPORTED_MODULE_4__["GameEngine"].playCard(game, cardIdx, color);

          console.log("".concat(this.player, " plays ").concat(JSON.stringify(_game__WEBPACK_IMPORTED_MODULE_3__["ALL_CARDS"][cardIdx])));
          this.service.updateGame(game).subscribe();
        }
      }, {
        key: "turtleCardSrc",
        value: function turtleCardSrc(color) {
          return this.imageService.getTurtleCardPath(color);
        }
      }, {
        key: "showTurtleCard",
        value: function showTurtleCard(color) {
          var _this9 = this;

          this.turtleCardSrc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.turtleCardSrc(color)), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_this9.turtleCardSrc());
          })));
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]));
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      decls: 7,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col"], ["href", "/"], ["src", "/assets/img/title.png"], [4, "ngIf"], [1, "row", "top-row"], [1, "col-10"], [1, "players"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-3"], ["src", "/assets/img/gameover.png", "class", "img-fluid", 4, "ngIf", "ngIfElse"], ["yourturn", ""], [1, "col-2"], [1, "turtlecard", 3, "src", "click"], [1, "turtlecard"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["src", "/assets/img/gameover.png", 1, "img-fluid"], ["src", "/assets/img/yourturn.png", "class", "img-fluid", 4, "ngIf"], ["src", "/assets/img/yourturn.png", 1, "img-fluid"], [3, "cardIdx", "game", "enabled", "played"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PlayerComponent_div_5_Template, 21, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 1, ctx.game$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".top-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nimg.turtlecard[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n}\n\np.turtlecard[_ngcontent-%COMP%] {\n  font-size: small;\n  text-align: center;\n}\n\np.players[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n\nspan.active_player[_ngcontent-%COMP%] {\n  border-bottom: 7px solid #d4d800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Atcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW1nLnR1cnRsZWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wLnR1cnRsZWNhcmQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAucGxheWVycyB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuc3Bhbi5hY3RpdmVfcGxheWVyIHtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNkNGQ4MDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/piotrhol/Documents/GitHub/turtles/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map