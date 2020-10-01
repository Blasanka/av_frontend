function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/all-product/all-product.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-product/all-product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllProductAllProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"product_header\">\n                <div class=\"section_title\">\n                    <h2>All Products</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane fade show active\" id=\"Computer\" role=\"tabpanel\" >\n            <!-- product_carousel  -->\n            <div class=\"product_style product_column5\" style=\"display:flex!important\">\n                <div class=\"grid\">\n                    <ng-container *ngFor=\"let product of allProducts\">\n                        <app-item [productItem]=\"product\"></app-item>\n                    </ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"isLoading == true\" class=\"d-flex justify-content-center\">\n                <div class=\"spinner-border text-danger m-5\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <app-header></app-header>\n <!--breadcrumbs area start-->\n <div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>Shopping Cart</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!--shopping cart area start -->\n<div class=\"cart_page_bg\">\n    <div class=\"container\">\n   \n        <div class=\"shopping_cart_area\">\n            <form action=\"#\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"table_desc\">\n                            <div class=\"cart_page table-responsive\">\n                             \n                                <table class= \"table\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"product_remove\">Delete</th>\n                                            <th class=\"product_thumb\">Image</th>\n                                            <th class=\"product_name\">Product</th>\n                                            <th class=\"product-price\">Price</th>\n                                            <th class=\"product_quantity\">Quantity</th>\n                                            <th class=\"product_total\">Total</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                     \n                                        <tr *ngFor = \"let f of cart.cartItems\">              \n                                            <td class=\"product_remove\"><a (click)=\"removeData(f.product.id, f.product.attachment, f.product.product_name)\"><i class=\"fa fa-trash-o\"></i></a></td>\n                                            <td class=\"product_thumb\">\n                                                <a [routerLink]=\"['/product/details',f.product.id]\">\n                                                    <img id=\"zoom1\" [src]=\"resourcesBaseUrl+f.product.attachment[0]\" data-zoom-image=\"assets/img/product/productbig5.jpg\" alt=\"big-1\">\n                                                </a>\n                                            </td>\n                                            <td class=\"product_name\"><a href=\"#\">{{f.product.product_name}}</a></td>\n                                            <td class=\"product-price\">{{f.product.price | currency : \"Rs. \"}}</td>\n                                            <td class=\"product_quantity\">\n                                                <!-- <input #qtyNumber min=\"1\" max=\"100\" [value]=\"f.quantity\" type=\"number\" id=\"quantityid\"\n                                                    (change)=\"onQtyChanged(f, qtyNumber.value)\" /> -->\n                                                <p class=\"mr-3\" style=\"font-size: large; display: inline;\">{{f.product.quantity}}</p>\n                                                <button class=\"btn btn-success btn-xs plus mr-2\" (click)=\"addQty(f.product.id)\"><i class=\"fa fa-plus\"></i></button><!-- (click)=\"addQty(f.product.id)-->\n                                                <button class=\"btn btn-danger btn-xs minus\" (click)=\"subtractQty(f.product.id)\"><i class=\"fa fa-minus\"></i></button><!--(click)=\"subtractQty(f.product.id)\"-->\n                                            </td>\n                                            <td class=\"product_total\">{{f.itemTotal}}</td>\n                                        \n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--coupon code area start-->\n                <div class=\"coupon_area\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"coupon_code left\">\n                                <h3>Coupon</h3>\n                                <div class=\"coupon_inner\">\n                                    <p>Enter your coupon code if you have one.</p>\n                                    <input placeholder=\"Coupon code\" type=\"text\">\n                                    <button type=\"submit\">Apply coupon</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"coupon_code right\">\n                                <h3>Cart Totals</h3>\n                                <div class=\"coupon_inner\">\n                                    <div class=\"cart_subtotal\">\n                                        <p>Subtotal</p>\n                                        <p class=\"cart_amount\">{{cart.subTotal | currency: 'Rs. ' }}</p>\n                                    </div>\n                                    <div class=\"cart_subtotal \">\n                                        <p>Shipping</p>\n                                        <p class=\"cart_amount\"><span>Flat Rate:</span> {{cart.flatRate | currency:'Rs. '}}</p>\n                                    </div>\n                                    <a href=\"#\">Calculate shipping</a>\n\n                                    <div class=\"cart_subtotal\">\n                                        <p>Total</p>\n                                        <p class=\"cart_amount\">{{cart.cartTotal | currency:'Rs. '}}</p>\n                                    </div>\n                                    <div class=\"checkout_btn\">\n                                        <a routerLink=\"/checkout\">Proceed to Checkout</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--coupon code area end-->\n            </form>\n        </div>\n    </div>\n</div>\n<!--shopping cart area end -->\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <app-header></app-header>\n    <!--header area end-->\n\n    <!--breadcrumbs area start-->\n    <div class=\"breadcrumbs_area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"breadcrumb_content\">\n                        <ul>\n                            <li><a href=\"index.html\">home</a></li>\n                            <li>Checkout</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--breadcrumbs area end-->\n\n    <!--Checkout page section-->\n    <div class=\"checkout_page_bg\">\n        <div class=\"container\">\n            <div class=\"Checkout_section\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"user-actions\">\n                            <h3>\n                                <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                                Returning customer?\n                                <a class=\"Returning\" href=\"#\" data-toggle=\"collapse\" data-target=\"#checkout_login\" aria-expanded=\"true\">Click here to login</a>\n\n                            </h3>\n                            <div id=\"checkout_login\" class=\"collapse\" data-parent=\"#accordion\">\n                                <div class=\"checkout_info\">\n                                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>\n                                    <form action=\"#\">\n                                        <div class=\"form_group\">\n                                            <label>Username or email <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"form_group\">\n                                            <label>Password <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"form_group group_3 \">\n                                            <button type=\"submit\">Login</button>\n                                            <label for=\"remember_box\">\n                                                <input id=\"remember_box\" type=\"checkbox\">\n                                                <span> Remember me </span>\n                                            </label>\n                                        </div>\n                                        <a href=\"#\">Lost your password?</a>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"user-actions\">\n                            <h3>\n                                <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                                Returning customer?\n                                <a class=\"Returning\" href=\"#\" data-toggle=\"collapse\" data-target=\"#checkout_coupon\" aria-expanded=\"true\">Click here to enter your code</a>\n\n                            </h3>\n                            <div id=\"checkout_coupon\" class=\"collapse\" data-parent=\"#accordion\">\n                                <div class=\"checkout_info\">\n                                    <form action=\"#\">\n                                        <input placeholder=\"Coupon code\" type=\"text\">\n                                        <button type=\"submit\">Apply coupon</button>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"checkout_form\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"checkout_form_left\">\n                                <form action=\"#\">\n                                    <h3>Billing Details</h3>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-lg-6 mb-20\">\n                                            <label>First Name <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"col-lg-6 mb-20\">\n                                            <label>Last Name <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <label>Company Name</label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <label for=\"country\">country <span>*</span></label>\n                                            <select class=\"niceselect_option\" name=\"cuntry\" id=\"country\">\n                                                <option value=\"2\">bangladesh</option>\n                                                <option value=\"3\">Algeria</option>\n                                                <option value=\"4\">Afghanistan</option>\n                                                <option value=\"5\">Ghana</option>\n                                                <option value=\"6\">Albania</option>\n                                                <option value=\"7\">Bahrain</option>\n                                                <option value=\"8\">Colombia</option>\n                                                <option value=\"9\">Dominican Republic</option>\n\n                                            </select>\n                                        </div>\n\n                                        <div class=\"col-12 mb-20\">\n                                            <label>Street address <span>*</span></label>\n                                            <input placeholder=\"House number and street name\" type=\"text\">\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <input placeholder=\"Apartment, suite, unit etc. (optional)\" type=\"text\">\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <label>Town / City <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <label>State / County <span>*</span></label>\n                                            <input type=\"text\">\n                                        </div>\n                                        <div class=\"col-lg-6 mb-20\">\n                                            <label>Phone<span>*</span></label>\n                                            <input type=\"text\">\n\n                                        </div>\n                                        <div class=\"col-lg-6 mb-20\">\n                                            <label> Email Address <span>*</span></label>\n                                            <input type=\"text\">\n\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <input id=\"account\" type=\"checkbox\" data-target=\"createp_account\">\n                                            <label for=\"account\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-controls=\"collapseOne\">Create an account?</label>\n\n                                            <div id=\"collapseOne\" class=\"collapse one\" data-parent=\"#accordion\">\n                                                <div class=\"card-body1\">\n                                                    <label> Account password <span>*</span></label>\n                                                    <input placeholder=\"password\" type=\"password\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12 mb-20\">\n                                            <input id=\"address\" type=\"checkbox\" data-target=\"createp_account\">\n                                            <label class=\"righ_0\" for=\"address\" data-toggle=\"collapse\" data-target=\"#collapsetwo\" aria-controls=\"collapseOne\">Ship to a different address?</label>\n\n                                            <div id=\"collapsetwo\" class=\"collapse one\" data-parent=\"#accordion\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-lg-6 mb-20\">\n                                                        <label>First Name <span>*</span></label>\n                                                        <input type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-lg-6 mb-20\">\n                                                        <label>Last Name <span>*</span></label>\n                                                        <input type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-12 mb-20\">\n                                                        <label>Company Name</label>\n                                                        <input type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-12 mb-20\">\n                                                        <div class=\"select_form_select\">\n                                                            <label for=\"countru_name\">country <span>*</span></label>\n                                                            <select class=\"niceselect_option\" name=\"cuntry\" id=\"countru_name\">\n                                                                <option value=\"2\">bangladesh</option>\n                                                                <option value=\"3\">Algeria</option>\n                                                                <option value=\"4\">Afghanistan</option>\n                                                                <option value=\"5\">Ghana</option>\n                                                                <option value=\"6\">Albania</option>\n                                                                <option value=\"7\">Bahrain</option>\n                                                                <option value=\"8\">Colombia</option>\n                                                                <option value=\"9\">Dominican Republic</option>\n\n                                                            </select>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-12 mb-20\">\n                                                        <label>Street address <span>*</span></label>\n                                                        <input placeholder=\"House number and street name\" type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-12 mb-20\">\n                                                        <input placeholder=\"Apartment, suite, unit etc. (optional)\" type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-12 mb-20\">\n                                                        <label>Town / City <span>*</span></label>\n                                                        <input type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-12 mb-20\">\n                                                        <label>State / County <span>*</span></label>\n                                                        <input type=\"text\">\n                                                    </div>\n                                                    <div class=\"col-lg-6 mb-20\">\n                                                        <label>Phone<span>*</span></label>\n                                                        <input type=\"text\">\n\n                                                    </div>\n                                                    <div class=\"col-lg-6\">\n                                                        <label> Email Address <span>*</span></label>\n                                                        <input type=\"text\">\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <div class=\"order-notes\">\n                                                <label for=\"order_note\">Order Notes</label>\n                                                <textarea id=\"order_note\" placeholder=\"Notes about your order, e.g. special notes for delivery.\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"checkout_form_right\">\n                                <form action=\"#\">\n                                    <h3>Your order</h3>\n                                    <div class=\"order_table table-responsive\">\n                                        <table>\n                                            <thead>\n                                                <tr>\n                                                    <th>Product</th>\n                                                    <th>Total</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let item of cart.cartItems\">\n                                                    <td> {{item.product.product_name}} <strong> × {{item.product.quantity}}</strong></td>\n                                                    <td> {{item.itemTotal | currency: 'Rs. '}} </td>\n                                                </tr>\n                                            </tbody>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Cart Subtotal</th>\n                                                    <td> {{cart.subTotal | currency: 'Rs. '}} </td>\n                                                </tr>\n                                                <tr>\n                                                    <th>Shipping</th>\n                                                    <td><strong>{{cart.shippingCost | currency: 'Rs. '}}</strong></td>\n                                                </tr>\n                                                <tr class=\"order_total\">\n                                                    <th>Order Total</th>\n                                                    <td><strong>{{cart.cartTotal | currency: 'Rs. '}}</strong></td>\n                                                </tr>\n                                            </tfoot>\n                                        </table>\n                                    </div>\n                                    <div class=\"payment_method\">\n                                        <div class=\"panel-default\">\n                                            <input id=\"payment\" name=\"check_method\" type=\"radio\" data-target=\"createp_account\">\n                                            <label for=\"payment\" data-toggle=\"collapse\" data-target=\"#method\" aria-controls=\"method\">Create an account?</label>\n\n                                            <div id=\"method\" class=\"collapse one\" data-parent=\"#accordion\">\n                                                <div class=\"card-body1\">\n                                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"panel-default\">\n                                            <input id=\"payment_defult\" name=\"check_method\" type=\"radio\" data-target=\"createp_account\">\n                                            <label for=\"payment_defult\" data-toggle=\"collapse\" data-target=\"#collapsedefult\" aria-controls=\"collapsedefult\">PayPal <img src=\"assets\\img\\icon\\papyel.png\" alt=\"\"></label>\n\n                                            <div id=\"collapsedefult\" class=\"collapse one\" data-parent=\"#accordion\">\n                                                <div class=\"card-body1\">\n                                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"order_button\">\n                                            <button type=\"submit\">Proceed to PayPal</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--Checkout page section end-->\n\n    <!--footer area start-->\n    <app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/home-image-slider/home-image-slider.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/home-image-slider/home-image-slider.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHomeImageSliderHomeImageSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"slider_section slider_s_two mb-60 mt-20\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-9 offset-lg-3 col-md-12\">\n            <div class=\"swiper-container gallery-top\">\n                <div class=\"slider_area swiper-wrapper\">\n                    <div class=\"single_slider swiper-slide d-flex align-items-center\">\n                            <div class=\"container\">\n                                <div class=\"img-container\"  *ngFor=\"let i of sliderArray; let select = index;\"\n                                    [ngClass]=\"{'selected': select == selectedIndex}\">\n                                  <img src=\"{{i.img}}\" alt=\"{{i.alt}}\" >\n                                </div>\n                                \n                                <div [ngStyle]=\"{'transform': 'translateY('+ transform + '%' +')', 'transition': '.8s'}\">\n                                    <div>\n                                      <div class=\"text-container\">\n                                        <div class=\"page-text\" *ngFor=\"let i of sliderArray; let select = index;\">\n                                          <h3>{{i.text}}</h3>\n                                        </div>\n                                      </div>\n                                    </div>\n                                </div>\n                               \n                               </div>\n                               \n                               <div class=\"slider\">\n                                <div class=\"slide-button-parent-container\"  *ngFor=\"let i of sliderArray; let x =index\">\n                                    <div class=\"select-box\">\n                                        <div class=\"slide-button\" [ngClass]=\"{'slide-button-select': x == selectedIndex}\" >\n                                        </div>\n                                   </div>\n                                </div>\n                               </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"single_slider swiper-slide d-flex align-items-center\" [ngStyle]=\"{background: 'url(./../../assets/img/slider/slider7.png)'}\">\n                        <div class=\"slider_content\">\n                            <h3>big sale products</h3>\n                            <h1>clear & modern <br> minimalist chair 2019</h1>\n                                <p>discount <span> -50% off</span> this week</p>\n                                <a class=\"button\" href=\"shop.html\">DISCOVER NOW</a>\n                        </div>\n                    </div>\n                    <div class=\"single_slider swiper-slide d-flex align-items-center\" data-bgimg=\"./../../assets/img/slider/slider7.jpg\">\n                        <div class=\"slider_content color_white\">\n                            <h3>new arrivals</h3>\n                            <h1>new arrivals <br> cellphone mobile apps</h1>\n                                <p>discount <span> -10% off</span> this week</p>\n                                <a class=\"button\" href=\"shop.html\">DISCOVER NOW</a>\n                        </div>\n                    </div>\n                    <div class=\"single_slider swiper-slide d-flex align-items-center\" data-bgimg=\"./../../assets/img/slider/slider8.jpg\">\n                        <div class=\"slider_content\">\n                            <h3>big sale products</h3>\n                            <h1>wooden <br> minimalist chair 2019</h1>\n                                <p>discount <span> -60% off</span> this week</p>\n                                <a class=\"button\" href=\"shop.html\">DISCOVER NOW</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"swiper-pagination\"></div>\n            </div>\n            <div class=\"swiper-container gallery-thumbs\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        New Collection Sport Clothes For Men’s\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <a href=\"#\"></a>\n                        Clear & Modern Minimalist Chair 2019\n                    </div>\n                    <div class=\"swiper-slide\">\n                        Eodem modo vel mattis ante facilisis nec\n                    </div>\n                    <div class=\"swiper-slide\">\n                        Wooden Minimalist Chair 2019\n                    </div>\n                </div>\n            </div> -->\n            </div>\n        </div>\n    </div>\n</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-account-details/customer-account-account-details.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-account-details/customer-account-account-details.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerAccountAccountDetailsCustomerAccountAccountDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\n    <ng-container>\n       \n        </ng-container>\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            Full name <br>\n            {{name}}\n            <ng-container *ngIf=\"show\">\n            <input\n            minlength=\"3\"\n            ngModel\n            name=\"profileFullName\"\n            #profileFullName=\"ngModel\"\n           \n            type=\"text\"\n            class=\"form-control\"\n            id=\"profileFullName\"\n            placeholder=\"Please enter your full name\"\n            \n          />\n            </ng-container>\n          </div>\n          <div class=\"col-sm\">\n            Email Address <br>\n            {{email}}\n            <ng-container *ngIf=\"show\">\n                <input\n                ngModel\n                name=\"profileEmail\"\n                #profileEmail=\"ngModel\"\n               \n                type=\"text\"\n                class=\"form-control\"\n                id=\"profileEmail\"\n                placeholder=\"Pleace enter your email\"\n              />\n            </ng-container>\n          </div>\n          <div class=\"col-sm\">\n            Mobile <br>\n            {{mobile}}\n            <ng-container *ngIf=\"show\">\n                <input\n                minlength=\"10\"\n                maxlength=\"10\"\n                ngModel\n                name=\"profileMobileNumber\"\n                #profileMobileNumber=\"ngModel\"\n              \n                type=\"text\"\n                class=\"form-control\"\n                id=\"profileMobileNumber\"\n                placeholder=\"Pleace enter your phone number\"\n              />\n                </ng-container>\n          </div>\n        </div>\n        <br><br>\n        <div class=\"row\">\n            <div class=\"col-sm\">\n             Birthday <br>\n             {{birthday}}\n             <ng-container *ngIf=\"show\">\n                <input\n                required\n                ngModel\n                name=\"birthOfDate\"\n                #registerMobileNumber=\"ngModel\"\n               \n                type=\"date\"\n                class=\"form-control\"\n                id=\"birthOfDate\"\n              />\n                </ng-container>\n            </div>\n            <div class=\"col-sm\">\n             Gender <br>\n             {{gender}}\n            </div>\n            <div class=\"col-sm\">\n             \n            </div>\n          </div>\n          </div>\n         <br>\n            <a class=\"button\"  (click)=\"toggle()\" id=\"bt\" style=\"margin-right: 20px;\"> {{buttonName}}</a>\n            <a class=\"button\"  (click) = \"showk()\">CHANGE PASSWORD</a>\n\n            <!--popup-->\n            \n    \n     <!-- Creates the bootstrap modal where the image will appear -->\n     <div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n     <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <h4 class=\"modal-title\" id=\"myModalLabel\">Change Password</h4>\n         </div>\n         <div class=\"modal-body\">\n             <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label>Old Password</label>\n                    <input type=\"password\" formControlName=\"oldPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.oldPassword.errors }\" />\n                    <div *ngIf=\"submitted && f.oldPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.oldPassword.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.oldPassword.errors.invalidPassword\">Invalid password</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>New Password</label>\n                    <input type=\"password\" formControlName=\"newPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\" />\n                    <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.newPassword.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.newPassword.errors.minlength\">Password must be at least 6 characters</div>\n                        \n                    </div>\n                  </div>\n                 <div class=\"form-group\">\n                     <label>Conferm Password</label>\n                     <input type=\"password\" formControlName=\"confermPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confermPassword.errors }\" />\n                     <div *ngIf=\"submitted && f.confermPassword.errors\" class=\"invalid-feedback\">\n                         <div *ngIf=\"f.confermPassword.errors.required\">Password is required</div>\n                         <div *ngIf=\"f.confermPassword.errors.minlength\">Password must be at least 6 characters</div>\n                     </div>\n                   \n                   </div>\n               <div class=\"form-group form-check\">\n                 <label class=\"form-check-label\">\n                   <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\n                 </label>\n               </div>\n               <button type=\"submit\" class=\"btn btn-primary\" (click)=\"passwordChange()\" >Submit</button>\n             </form>\n         </div>\n         <div class=\"modal-footer\">\n             <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click) = \"hide()\">Close</button>\n         \n         </div>\n       </div>\n     </div>\n      </div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-payment-options/customer-account-payment-options.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-payment-options/customer-account-payment-options.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerAccountPaymentOptionsCustomerAccountPaymentOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>customer-account-payment-options works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-reviews/customer-account-reviews.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-reviews/customer-account-reviews.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerAccountReviewsCustomerAccountReviewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>customer-account-reviews works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-wishlist/customer-account-wishlist.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-wishlist/customer-account-wishlist.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerAccountWishlistCustomerAccountWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!--breadcrumbs area start-->\n <div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>Wishlist</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!--wishlist area start -->\n<!-- <div class=\"wishlist_page_bg\"> -->\n    <div class=\"container\">\n        <div class=\"wishlist_area\">\n            <div class=\"wishlist_inner\">\n                <form action=\"#\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"table_desc wishlist\">\n                                <div class=\"cart_page table-responsive\">\n                                    <!-- <table>\n                                        <thead>\n                                            <tr>\n                                                <th class=\"product_remove\">Delete</th>\n                                                <th class=\"product_thumb\">Image</th>\n                                                <th class=\"product_name\">Product</th>\n                                                <th class=\"product-price\">Price</th>\n                                                <th class=\"product_quantity\">Stock Status</th>\n                                                <th class=\"product_total\">Add To Cart</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td class=\"product_remove\"><a href=\"#\">X</a></td>\n                                                <td class=\"product_thumb\"><a href=\"#\"><img src=\"assets\\img\\s-product\\product.jpg\" alt=\"\"></a></td>\n                                                <td class=\"product_name\"><a href=\"#\">Handbag fringilla</a></td>\n                                                <td class=\"product-price\">£65.00</td>\n                                                <td class=\"product_quantity\">In Stock</td>\n                                                <td class=\"product_total\"><a href=\"#\">Add To Cart</a></td>\n\n\n                                            </tr>\n\n                                        </tbody>\n                                    </table> -->\n                                    <table class= \"table\">\n                                        <thead>\n                                            <tr>\n                                                <th class=\"product_remove\">Delete</th>\n                                                <th class=\"product_thumb\">Image</th>\n                                                <th class=\"product_name\">Product</th>\n                                                <th class=\"product-price\">Price</th>\n                                                <th class=\"product_total\">Total</th>\n                                                <th class=\"product_total\">Add To Cart</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                         \n                                            <tr *ngFor = \"let f of cartData\">              \n                                                <td class=\"product_remove\"><a (click)=\"removeData(f.id, f.imageUrl[0], f.product_name)\"><i class=\"fa fa-trash-o\"></i></a></td>\n                                                <td class=\"product_thumb\"><a [routerLink]=\"['/product/details', f.id]\"><img  [src]=\"resourcesBaseUrl+f.imageUrl[0]\" alt=\"\"></a></td>\n                                                <td class=\"product_name\"><a href=\"#\">{{f.product_name}}</a></td>\n                                                <td class=\"product-price\">{{f.price | currency: 'Rs. '}}</td>\n                                                <td class=\"product_total\">{{(f.price * f.quantity) | currency: 'Rs. '}}</td>\n                                                <td class=\"product_total\"><a (click)=\"addTocart(f)\">Add To Cart</a></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"cart_submit\">\n                                        <button type=\"submit\" (click)=\"updateCart()\">UPDATE WISHLIST</button>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n<!-- </div> -->\n\n\n<!--wishlist area end -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account/customer-account.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account/customer-account.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerAccountCustomerAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<!--breadcrumbs area start-->\n<div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>My account</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!-- my account start  -->\n<div class=\"account_page_bg\">\n    <div class=\"container\">\n        <section class=\"main_content_area\">\n            <div class=\"account_dashboard\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3 col-lg-3\">\n                        <!-- Nav tabs -->\n                        <div class=\"dashboard_tab_button\">\n                            <ul role=\"tablist\" class=\"nav flex-column dashboard-list\">\n                                <li><a href=\"#dashboard\" data-toggle=\"tab\" class=\"nav-link active\">Dashboard</a></li>\n                                <li><a href=\"#account-details\" data-toggle=\"tab\" class=\"nav-link\">Account details</a></li>\n                                <li> <a href=\"#orders\" data-toggle=\"tab\" class=\"nav-link\">Payment Options</a></li>\n                                <li><a href=\"#downloads\" data-toggle=\"tab\" class=\"nav-link\">Reviews</a></li>\n                                <li><a href=\"#address\" data-toggle=\"tab\" class=\"nav-link\">Wishlist</a></li>\n                                <li><a href=\"login.html\" class=\"nav-link\">logout</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-9 col-lg-9\" style=\"background-color:white\">\n                        <!-- Tab panes -->\n                        <div class=\"tab-content dashboard_content\" >\n                            <div class=\"tab-pane fade show active\" id=\"dashboard\">\n                                <h3>Dashboard </h3>\n                               \n                                <p>From your account dashboard. you can easily check &amp; view your <a href=\"#\">recent orders</a>, manage your <a href=\"#\">shipping and billing addresses</a> and <a href=\"#\">Edit your password and account details.</a></p>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"orders\">\n                                <h3>Payment Options</h3>\n                                <div class=\"table-responsive\">\n                                    <app-customer-account-payment-options></app-customer-account-payment-options>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"downloads\">\n                                <h3>Reviews</h3>\n                                <div class=\"table-responsive\">\n                                    <app-customer-account-reviews></app-customer-account-reviews>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"address\">\n                                <h4 class=\"billing-address\">Wishlist</h4>\n                                    <app-customer-account-wishlist></app-customer-account-wishlist>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"account-details\">\n                                <h3>My Profile </h3>\n                                    <app-customer-account-account-details></app-customer-account-account-details>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/direct-inquiry/direct-inquiry.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/direct-inquiry/direct-inquiry.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDirectInquiryDirectInquiryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n <!--breadcrumbs area start-->\n <div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>product details</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n\n<div class=\"product_page_bg\">\n    <div class=\"container\">\n        <div class=\"product_details_wrapper mb-55\">\n            <!--product details start-->\n            <div class=\"product_details\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5 col-md-6\">\n                        <div *ngIf=\"!isLoading\" class=\"product-details-tab\">\n                            <div id=\"img-1\" class=\"zoomWrapper single-zoom\">\n                                <a  [href]=\"resourcesBaseUrl+oneProduct.attachment[0]\">\n                                    <img class=\"main-image-big\" id=\"zoom1\" [src]=\"resourcesBaseUrl+oneProduct.attachment[0]\" data-zoom-image=\"assets/img/product/productbig5.jpg\" alt=\"big-1\">\n                                </a>\n                            </div>\n                            <owl-carousel-o [options]=\"customOptions\">\n                                <ng-template *ngFor=\"let img of oneProduct.attachment | slice:1\" carouselSlide>\n                                    <!-- elevatezoom-gallery -->\n                                    <a [href]=\"resourcesBaseUrl+img\" class=\"owl-link\" data-update=\"\" data-image=\"assets/img/product/productbig4.jpg\" data-zoom-image=\"assets/img/product/productbig4.jpg\">\n                                        <div class=\"px-1\">\n                                            <img class=\"owl-thumb\" [src]=\"resourcesBaseUrl+img\" [alt]=\"oneProduct.product_name\">\n                                        </div>\n                                    </a>\n                                </ng-template>\n                            </owl-carousel-o>\n                        </div>\n                        <div *ngIf=\"isLoading\" class=\"product-details-tab d-flex justify-content-center\">\n                            <div class=\"spinner-border text-danger m-5\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-7 col-md-6\">\n                        <div class=\"product_d_right\">\n                            <form action=\"#\">\n                                <h3><a href=\"#\">{{oneProduct.product_name}}</a></h3>\n                                <div class=\"price_box\">\n                                    <!-- <span class=\"old_price\">{{oneProduct.price}}</span> -->\n                                    <span class=\"current_price\">Rs. {{oneProduct.price | currency : \"Rs. \"}}</span>\n                                </div>\n                                <div class=\"product_desc\" [innerHTML]=\"oneProduct.description\"></div>\n                                <div class=\"product_variant quantity\">\n                                    <label>quantity</label>\n                                    <label>{{quantity}}</label>\n                                    <button class=\"button\" type=\"submit\"  (click)=\"handleAddToCart(oneProduct.attachment, oneProduct.product_name)\">add to inquiry</button>\n                                    <button class=\"button\" type=\"submit\"  >Contact Dealer</button>\n                                </div>\n                                <div class=\"product_meta\">\n                                    <span>Category: <a href=\"#\">Clothing</a></span>\n                                </div>\n\n                            </form>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--product details end-->\n\n            <!--product info start-->\n            <div class=\"product_d_info\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"product_d_inner\">\n                            <div class=\"product_info_button\">\n                                <ul class=\"nav\" role=\"tablist\">\n                                    <li>\n                                        <a class=\"active\" data-toggle=\"tab\" href=\"#desc\" role=\"tab\" aria-controls=\"info\" aria-selected=\"false\">Description</a>\n                                    </li>\n                                    <li>\n                                        <a data-toggle=\"tab\" href=\"#spec\" role=\"tab\" aria-controls=\"sheet\" aria-selected=\"false\">Specification</a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane fade show active\" id=\"desc\" role=\"tabpanel\">\n                                    <div class=\"product_info_content\" [innerHTML]=\"oneProduct.description\"></div>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"spec\" role=\"tabpanel\">\n                                    <div class=\"product_info_content\" [innerHTML]=\"oneProduct.specifications\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--product info end-->\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-products/featured-products.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/featured-products/featured-products.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturedProductsFeaturedProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"product_header\">\n                    <div class=\"section_title\">\n                        <h2>Featured Products</h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane fade show active\" id=\"Computer\" role=\"tabpanel\" >\n                <!-- product_carousel  -->\n                <div class=\"product_style product_column5\" style=\"display:flex!important\">\n                    <div class=\"grid\">\n                        <ng-container *ngFor=\"let product of featuredProducts\">\n                            <app-item [productItem]=\"product\"></app-item>\n                        </ng-container>\n                    </div>\n                </div>\n                <div *ngIf=\"isLoading == true\" class=\"d-flex justify-content-center\">\n                    <div class=\"spinner-border text-danger m-5\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n    <app-home-image-slider></app-home-image-slider>\n    <!--home section bg area start-->\n    <div class=\"home_section_bg\">\n       <app-featured-products></app-featured-products>\n       <div class=\"py-4\"></div>\n       <app-all-product></app-all-product>\n    </div>\n  \n    <!--home section bg area end-->\n<app-footer></app-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inquery-checkout/inquery-checkout.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inquery-checkout/inquery-checkout.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInqueryCheckoutInqueryCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<!--header area end-->\n\n<!--breadcrumbs area start-->\n<div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>Checkout</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!--Checkout page section-->\n<div class=\"checkout_page_bg\">\n    <div class=\"container\">\n        <div class=\"Checkout_section\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"user-actions\">\n                        <h3>\n                            <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                            Returning customer?\n                            <a class=\"Returning\" href=\"#\" data-toggle=\"collapse\" data-target=\"#checkout_login\" aria-expanded=\"true\">Click here to login</a>\n\n                        </h3>\n                        <div id=\"checkout_login\" class=\"collapse\" data-parent=\"#accordion\">\n                            <div class=\"checkout_info\">\n                                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>\n                                <form action=\"#\">\n                                    <div class=\"form_group\">\n                                        <label>Username or email <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"form_group\">\n                                        <label>Password <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"form_group group_3 \">\n                                        <button type=\"submit\">Login</button>\n                                        <label for=\"remember_box\">\n                                            <input id=\"remember_box\" type=\"checkbox\">\n                                            <span> Remember me </span>\n                                        </label>\n                                    </div>\n                                    <a href=\"#\">Lost your password?</a>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"user-actions\">\n                        <h3>\n                            <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                            Returning customer?\n                            <a class=\"Returning\" href=\"#\" data-toggle=\"collapse\" data-target=\"#checkout_coupon\" aria-expanded=\"true\">Click here to enter your code</a>\n\n                        </h3>\n                        <div id=\"checkout_coupon\" class=\"collapse\" data-parent=\"#accordion\">\n                            <div class=\"checkout_info\">\n                                <form action=\"#\">\n                                    <input placeholder=\"Coupon code\" type=\"text\">\n                                    <button type=\"submit\">Apply coupon</button>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"checkout_form\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6\">\n                        <div class=\"checkout_form_left\">\n                            <form action=\"#\">\n                                <h3>Billing Details</h3>\n                                <div class=\"row\">\n\n                                    <div class=\"col-lg-6 mb-20\">\n                                        <label>First Name <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"col-lg-6 mb-20\">\n                                        <label>Last Name <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <label>Company Name</label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <label for=\"country\">country <span>*</span></label>\n                                        <select class=\"niceselect_option\" name=\"cuntry\" id=\"country\">\n                                            <option value=\"2\">bangladesh</option>\n                                            <option value=\"3\">Algeria</option>\n                                            <option value=\"4\">Afghanistan</option>\n                                            <option value=\"5\">Ghana</option>\n                                            <option value=\"6\">Albania</option>\n                                            <option value=\"7\">Bahrain</option>\n                                            <option value=\"8\">Colombia</option>\n                                            <option value=\"9\">Dominican Republic</option>\n\n                                        </select>\n                                    </div>\n\n                                    <div class=\"col-12 mb-20\">\n                                        <label>Street address <span>*</span></label>\n                                        <input placeholder=\"House number and street name\" type=\"text\">\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <input placeholder=\"Apartment, suite, unit etc. (optional)\" type=\"text\">\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <label>Town / City <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <label>State / County <span>*</span></label>\n                                        <input type=\"text\">\n                                    </div>\n                                    <div class=\"col-lg-6 mb-20\">\n                                        <label>Phone<span>*</span></label>\n                                        <input type=\"text\">\n\n                                    </div>\n                                    <div class=\"col-lg-6 mb-20\">\n                                        <label> Email Address <span>*</span></label>\n                                        <input type=\"text\">\n\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <input id=\"account\" type=\"checkbox\" data-target=\"createp_account\">\n                                        <label for=\"account\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-controls=\"collapseOne\">Create an account?</label>\n\n                                        <div id=\"collapseOne\" class=\"collapse one\" data-parent=\"#accordion\">\n                                            <div class=\"card-body1\">\n                                                <label> Account password <span>*</span></label>\n                                                <input placeholder=\"password\" type=\"password\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12 mb-20\">\n                                        <input id=\"address\" type=\"checkbox\" data-target=\"createp_account\">\n                                        <label class=\"righ_0\" for=\"address\" data-toggle=\"collapse\" data-target=\"#collapsetwo\" aria-controls=\"collapseOne\">Ship to a different address?</label>\n\n                                        <div id=\"collapsetwo\" class=\"collapse one\" data-parent=\"#accordion\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-6 mb-20\">\n                                                    <label>First Name <span>*</span></label>\n                                                    <input type=\"text\">\n                                                </div>\n                                                <div class=\"col-lg-6 mb-20\">\n                                                    <label>Last Name <span>*</span></label>\n                                                    <input type=\"text\">\n                                                </div>\n                                                <div class=\"col-12 mb-20\">\n                                                    <label>Company Name</label>\n                                                    <input type=\"text\">\n                                                </div>\n                                                <div class=\"col-12 mb-20\">\n                                                    <div class=\"select_form_select\">\n                                                        <label for=\"countru_name\">country <span>*</span></label>\n                                                        <select class=\"niceselect_option\" name=\"cuntry\" id=\"countru_name\">\n                                                            <option value=\"2\">bangladesh</option>\n                                                            <option value=\"3\">Algeria</option>\n                                                            <option value=\"4\">Afghanistan</option>\n                                                            <option value=\"5\">Ghana</option>\n                                                            <option value=\"6\">Albania</option>\n                                                            <option value=\"7\">Bahrain</option>\n                                                            <option value=\"8\">Colombia</option>\n                                                            <option value=\"9\">Dominican Republic</option>\n\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-12 mb-20\">\n                                                    <label>Street address <span>*</span></label>\n                                                    <input placeholder=\"House number and street name\" type=\"text\">\n                                                </div>\n                                                <div class=\"col-12 mb-20\">\n                                                    <input placeholder=\"Apartment, suite, unit etc. (optional)\" type=\"text\">\n                                                </div>\n                                                <div class=\"col-12 mb-20\">\n                                                    <label>Town / City <span>*</span></label>\n                                                    <input type=\"text\">\n                                                </div>\n                                                <div class=\"col-12 mb-20\">\n                                                    <label>State / County <span>*</span></label>\n                                                    <input type=\"text\">\n                                                </div>\n                                                <div class=\"col-lg-6 mb-20\">\n                                                    <label>Phone<span>*</span></label>\n                                                    <input type=\"text\">\n\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <label> Email Address <span>*</span></label>\n                                                    <input type=\"text\">\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <div class=\"order-notes\">\n                                            <label for=\"order_note\">Order Notes</label>\n                                            <textarea id=\"order_note\" placeholder=\"Notes about your order, e.g. special notes for delivery.\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6\">\n                        <div class=\"checkout_form_right\">\n                            <form action=\"#\">\n                                <h3>Your order</h3>\n                                <div class=\"order_table table-responsive\">\n                                    <table>\n                                        <thead>\n                                            <tr>\n                                                <th>Product</th>\n                                                <th>Total</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let item of cart.cartItems\">\n                                                <td> {{item.product.product_name}} <strong> × {{item.product.quantity}}</strong></td>\n                                                <td> {{item.itemTotal | currency: 'Rs. '}} </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr>\n                                                <th>Cart Subtotal</th>\n                                                <td> {{cart.subTotal | currency: 'Rs. '}} </td>\n                                            </tr>\n                                            <tr>\n                                                <th>Shipping</th>\n                                                <td><strong>{{cart.shippingCost | currency: 'Rs. '}}</strong></td>\n                                            </tr>\n                                            <tr class=\"order_total\">\n                                                <th>Order Total</th>\n                                                <td><strong>{{cart.cartTotal | currency: 'Rs. '}}</strong></td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                                <div class=\"payment_method\">\n                                    <div class=\"panel-default\">\n                                        <input id=\"payment\" name=\"check_method\" type=\"radio\" data-target=\"createp_account\">\n                                        <label for=\"payment\" data-toggle=\"collapse\" data-target=\"#method\" aria-controls=\"method\">Create an account?</label>\n\n                                        <div id=\"method\" class=\"collapse one\" data-parent=\"#accordion\">\n                                            <div class=\"card-body1\">\n                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"panel-default\">\n                                        <input id=\"payment_defult\" name=\"check_method\" type=\"radio\" data-target=\"createp_account\">\n                                        <label for=\"payment_defult\" data-toggle=\"collapse\" data-target=\"#collapsedefult\" aria-controls=\"collapsedefult\">PayPal <img src=\"assets\\img\\icon\\papyel.png\" alt=\"\"></label>\n\n                                        <div id=\"collapsedefult\" class=\"collapse one\" data-parent=\"#accordion\">\n                                            <div class=\"card-body1\">\n                                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"order_button\">\n                                        <button type=\"submit\">Proceed to PayPal</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Checkout page section end-->\n\n<!--footer area start-->\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart-view/inquiry-cart-view.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart-view/inquiry-cart-view.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInquiryCartViewInquiryCartViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<!--breadcrumbs area start-->\n<div class=\"breadcrumbs_area\">\n   <div class=\"container\">\n       <div class=\"row\">\n           <div class=\"col-12\">\n               <div class=\"breadcrumb_content\">\n                   <ul>\n                       <li><a href=\"index.html\">home</a></li>\n                       <li>Shopping Cart</li>\n                   </ul>\n               </div>\n           </div>\n       </div>\n   </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!--shopping cart area start -->\n<div class=\"cart_page_bg\">\n   <div class=\"container\">\n  \n       <div class=\"shopping_cart_area\">\n           <form action=\"#\">\n               <div class=\"row\">\n                   <div class=\"col-12\">\n                       <div class=\"table_desc\">\n                           <div class=\"cart_page table-responsive\">\n                            \n                               <table class= \"table\">\n                                   <thead>\n                                       <tr>\n                                           <th class=\"product_remove\">Delete</th>\n                                           <th class=\"product_thumb\">Image</th>\n                                           <th class=\"product_name\">Product</th>\n                                           <th class=\"product-price\">Price</th>\n                                           <th class=\"product_quantity\">Quantity</th>\n                                           <th class=\"product_total\">Total</th>\n                                       </tr>\n                                   </thead>\n                                   <tbody>\n                                       <tr *ngFor = \"let f of this.inqueryCart.cartItems\">              \n                                           <td class=\"product_remove\"><a (click)=\"removeData(f, f.product.attachment ,f.product.product_name)\"><i class=\"fa fa-trash-o\"></i></a></td>\n                                           <td class=\"product_thumb\"><a [routerLink]=\"['/product/details', f.id]\"><img  [src]=\"resourcesBaseUrl+f.product.attachment[0]\" alt=\"\"></a></td>\n                                           <td class=\"product_name\"><a href=\"#\">{{f.product.product_name}}</a></td>\n                                           <td class=\"product-price\">{{f.product.price}}</td>\n                                           <td class=\"product_quantity\">\n                                                <p class=\"mr-3\" style=\"font-size: large; display: inline;\">{{f.product.quantity}}</p>\n                                                <button class=\"btn btn-success btn-xs plus mr-2\" (click)=\"addQty(f.product.id)\"><i class=\"fa fa-plus\"></i></button><!-- (click)=\"addQty(f.product.id)-->\n                                                <button class=\"btn btn-danger btn-xs minus\" (click)=\"subtractQty(f.product.id)\"><i class=\"fa fa-minus\"></i></button><!--(click)=\"subtractQty(f.product.id)\"-->\n                                            </td>\n                                            <td class=\"product_total\">{{f.itemTotal}}</td>\n                                       </tr>\n                                   </tbody>\n                               </table>\n                           </div>\n                       </div>\n                   </div>\n               </div>\n               <!--coupon code area start-->\n               <div class=\"coupon_area\">\n                   <div class=\"row\">\n                       <div class=\"col-lg-6 col-md-6\">\n                           <div class=\"coupon_code left\">\n                               <h3>Coupon</h3>\n                               <div class=\"coupon_inner\">\n                                   <p>Enter your coupon code if you have one.</p>\n                                   <input placeholder=\"Coupon code\" type=\"text\">\n                                   <button type=\"submit\">Apply coupon</button>\n                               </div>\n                           </div>\n                       </div>\n                       <div class=\"col-lg-6 col-md-6\">\n                           <div class=\"coupon_code right\">\n                               <h3>Cart Totals</h3>\n                               <div class=\"coupon_inner\">\n                                   <div class=\"cart_subtotal\">\n                                       <p>Subtotal</p>\n                                       <p class=\"cart_amount\">{{inqueryCart.subTotal | currency:'Rs. '}}</p>\n                                   </div>\n                                   <div class=\"cart_subtotal\">\n                                       <p>Total</p>\n                                       <p class=\"cart_amount\">{{inqueryCart.cartTotal | currency:'Rs. '}}</p>\n                                   </div>\n                                   <div class=\"checkout_btn\">\n                                    <a routerLink=\"/inquery-checkout\" style=\"width: 180px;\">Contact Dealer</a>\n                                </div>\n                                   <div class=\"checkout_btn\">\n                                       <a routerLink=\"/inquery-checkout\">Proceed to Checkout</a>\n                                   </div>\n                               </div>\n                           </div>\n                       </div>\n                   </div>\n               </div>\n               <!--coupon code area end-->\n           </form>\n       </div>\n   </div>\n</div>\n<!--shopping cart area end -->\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart/inquiry-cart.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart/inquiry-cart.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInquiryCartInquiryCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<article class=\"single_product\">\n<figure>\n<div class=\"product_thumb\">\n    <div *ngIf=\"this.isButtonVisible1\">\n    <a class=\"primary_img d-flex justify-content-center\" [routerLink]=\"['/product/details', productItem.id]\">\n        <img src=\"resourcesBaseUrl+productItem.attachment[0]\" alt={{productItem.product_name}} style=\"width: 260px; height: 200px;\">\n    </a>\n    <a class=\"secondary_img d-flex justify-content-center\" [routerLink]=\"['/product/details', productItem.id]\">\n        <img src=\"resourcesBaseUrl+productItem.attachment[1]\" alt={{productItem.product_name}} style=\"width: 260px; height: 200px;\">\n    </a>\n    </div>\n    <div *ngIf=\"isButtonVisible2\">\n    <a class=\"primary_img d-flex justify-content-center\" [routerLink]=\"['/product/inquiry', productItem.id]\">\n        <img [src]=\"resourcesBaseUrl+productItem.attachment[0]\" alt={{productItem.product_name}} style=\"width: 260px; height: 200px;\">\n    </a>\n    <a class=\"secondary_img d-flex justify-content-center\" [routerLink]=\"['/product/inquiry/',productItem.id]\">\n        <img [src]=\"resourcesBaseUrl+productItem.attachment[1]\" alt={{productItem.product_name}} style=\"width: 260px; height: 200px;\">\n    </a>\n    </div>\n    <div class=\"label_product\">\n        <span class=\"label_sale\">Sale</span>\n    </div>\n    <div class=\"action_links\">\n        <ul>\n            <li class=\"wishlist\"><a (click)=\"handleAddToWishlist()\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n            <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n            <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n        </ul>\n    </div>\n</div>\n<div class=\"product_content\">\n    <div class=\"product_content_inner\">\n        <h4 class=\"product_name\"><a routerLink=\"/product/details/{{productItem.id}}\">{{productItem.product_name}}</a></h4>\n       \n        <!-- <h4 class=\"product_name\"><a href=\"/product/details/{{productItem.id}}\">{{productItem.supplier}}</a></h4> -->\n\n        <div class=\"price_box\">\n            <!-- <span class=\"old_price\">Rs. {{productItem.priceWithDiscount}}</span> -->\n            <span class=\"current_price\">Rs. {{productItem.price}}</span>\n        </div>\n    </div>\n    <div class=\"add_to_cart\">\n        <div *ngIf=\"isButtonVisible1\">\n        <a title=\"Add to cart\" type=\"button\" (click)=\"handleAddToCart(productItem.product_name,productItem.attachment[0])\">Add to cart</a>\n        </div>\n        <div *ngIf=\"isButtonVisible2\">\n             <a title=\"Inquiy\" type=\"button\" (click)=\"handleAddToInquiry()\" >Inquiry</a>\n        </div>\n       \n    </div>\n</div>\n</figure></article>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<!--breadcrumbs area start-->\n<div class=\"breadcrumbs_area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"breadcrumb_content\">\n          <ul>\n            <li><a href=\"index.html\">home</a></li>\n            <li>My account</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!-- customer login start -->\n<div class=\"login_page_bg\">\n  <div class=\"container\">\n    <div class=\"customer_login\">\n      <div class=\"row\">\n        <!--login area start-->\n        <div class=\"col-md-6 offset-md-3\">\n          <div class=\"account_form login\">\n            <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <h3>Welcome to AV! Please Login</h3>\n            </div>\n            <div class=\"col-sm-4\">\n              New member?<a routerLink=\"/register\" style=\"color: #049cb9;\"\n                >Register</a\n              >\n              here\n            </div>\n          </div>\n            <form action=\"#\">\n                <div class=\"form-group\">\n                    <label for=\"loginMobileNumber\"\n                      >Mobile number <span>*</span></label\n                    >\n                    <input\n                      required\n                      minlength=\"10\"\n                      maxlength=\"10\"\n                      ngModel\n                      name=\"loginMobileNumber\"\n                      #loginMobileNumber=\"ngModel\"\n                      \n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"loginMobileNumber\"\n                      placeholder=\"Pleace enter your phone number\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"\n                      loginMobileNumber.touched &&\n                        !loginMobileNumber.valid\n                      \"\n                    >\n                      <div *ngIf=\"loginMobileNumber.errors.required\">\n                        Mobile number is required\n                      </div>\n                      <div *ngIf=\"loginMobileNumber.errors.minlength\">\n                        Mobile number length should be 10\n                      </div>\n                    </div>\n                  </div>    \n                <div class=\"form-group\">\n                    <label for=\"registerPassword\"\n                      >Password <span>*</span></label\n                    >\n                    <input\n                      required\n                      minlength=\"5\"\n                      maxlength=\"10\"\n                      ngModel\n                      name=\"loginPassword\"\n                      #loginPassword=\"ngModel\"\n                      \n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"loginPassword\"\n                      placeholder=\"Pleace enter a password\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"\n                      loginPassword.touched && !loginPassword.valid\n                      \"\n                    >\n                      <div *ngIf=\"loginPassword.errors.required\">\n                        password is required\n                      </div>\n                      <div *ngIf=\"loginPassword.errors.minlength\">\n                        Password minmum length should be 5\n                      </div>\n                    </div>\n                  </div>\n              <div class=\"login_submit\">\n                <a href=\"#\">Lost your password?</a>\n                <label for=\"remember\">\n                  <input id=\"remember\" type=\"checkbox\" />\n                  Remember me\n                </label>\n                <button type=\"submit\">login</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <!--login area start-->\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- customer login end -->\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n    <!--Privacy Policy area start-->\n    <div class=\"privacy_policy_bg\">\n        <div class=\"container\">\n            <div class=\"privacy_policy_main_area\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"privacy_policy_header\">\n                            <h1>Privacy Policy</h1>\n                        </div>\n                        <div class=\"privacy_content section_1\">\n                            <h2>Who we are</h2>\n                            <p>Our website address is: <a href=\"#\">http://roadthemes.com/</a></p>\n                        </div>\n                        <div class=\"privacy_content section_2\">\n                            <h2>What personal data we collect and why we collect it</h2>\n                            <h3>Comments</h3>\n                            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>\n                            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>\n                            <h3>Media</h3>\n                            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>\n                            <h3>Cookies</h3>\n                            <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>\n                            <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>\n                            <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>\n                            <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>\n                            <h3>Embedded content from other websites</h3>\n                            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>\n                            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>\n                        </div>\n                        <div class=\"privacy_content section_3\">\n                            <h2>How long we retain your data</h2>\n                            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>\n                            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>\n                        </div>\n                        <div class=\"privacy_content section_3\">\n                            <h2>What rights you have over your data</h2>\n                            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>\n                        </div>\n                        <div class=\"privacy_content section_3\">\n                            <h2>Where we send your data</h2>\n                            <p>Visitor comments may be checked through an automated spam detection service.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--Privacy Policy area end-->\n    <app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n <!--breadcrumbs area start-->\n <div class=\"breadcrumbs_area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb_content\">\n                    <ul>\n                        <li><a href=\"index.html\">home</a></li>\n                        <li>product details</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--breadcrumbs area end-->\n<div class=\"product_page_bg\">\n    <div class=\"container\">\n        <div class=\"product_details_wrapper mb-55\">\n            <!--product details start-->\n            <div class=\"product_details\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5 col-md-6\">\n                        <div class=\"product-details-tab\">\n                            <div *ngIf=\"!isLoading\" class=\"product-details-tab\">\n                                <div id=\"img-1\" class=\"zoomWrapper single-zoom\">\n                                    <a [href]=\"resourcesBaseUrl+oneProduct.attachment[0]\">\n                                        <img class=\"main-image-big\" id=\"zoom1\" [src]=\"resourcesBaseUrl+oneProduct.attachment[0]\" data-zoom-image=\"assets/img/product/productbig5.jpg\" alt=\"big-1\">\n                                    </a>\n                                </div>\n                                <owl-carousel-o [options]=\"customOptions\">\n                                    <ng-template *ngFor=\"let img of oneProduct.attachment | slice:1\" carouselSlide>\n                                        <!-- elevatezoom-gallery -->\n                                        <a [href]=\"resourcesBaseUrl+img\" class=\"owl-link\" data-update=\"\" data-image=\"assets/img/product/productbig4.jpg\" data-zoom-image=\"assets/img/product/productbig4.jpg\">\n                                            <div class=\"px-1\">\n                                                <img class=\"owl-thumb\" [src]=\"resourcesBaseUrl+img\" [alt]=\"oneProduct.product_name\">\n                                            </div>\n                                        </a>\n                                    </ng-template>\n                                </owl-carousel-o>\n                            </div>\n                            <div *ngIf=\"isLoading\" class=\"product-details-tab d-flex justify-content-center\">\n                                <div class=\"spinner-border text-danger m-5\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-7 col-md-6\">\n                        <div class=\"product_d_right\">\n                            <form action=\"#\">\n                                <h3><a href=\"#\">{{oneProduct.product_name}}</a></h3>\n                                <div class=\"price_box\">\n                                    <!-- <span class=\"old_price\">{{oneProduct.price}}</span> -->\n                                    <span class=\"current_price\">Rs. {{oneProduct.price | number : '1.2-2'}}</span>\n                                </div>\n                                <div class=\"product_desc\" [innerHTML]=\"oneProduct.description\"></div>\n                                <div class=\"product_variant quantity\">\n                                    <label>quantity</label>\n                                    <label>{{oneProduct.quantity}}</label>\n                                    <button class=\"button\" type=\"submit\"  (click)=\"handleAddToCart(oneProduct.attachment[0], oneProduct.product_name)\">add to cart</button>\n                                </div>\n                                <div class=\"product_meta\">\n                                    <span>Category: <a href=\"#\">Clothing</a></span>\n                                </div>\n\n                            </form>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--product details end-->\n            <!--product info start-->\n            <div class=\"product_d_info\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"product_d_inner\">\n                            <div class=\"product_info_button\">\n                                <ul class=\"nav\" role=\"tablist\">\n                                    <li>\n                                        <a class=\"active\" data-toggle=\"tab\" href=\"#desc\" role=\"tab\" aria-controls=\"info\" aria-selected=\"false\">Description</a>\n                                    </li>\n                                    <li>\n                                        <a data-toggle=\"tab\" href=\"#spec\" role=\"tab\" aria-controls=\"sheet\" aria-selected=\"false\">Specification</a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane fade show active\" id=\"desc\" role=\"tabpanel\">\n                                    <div class=\"product_info_content\" [innerHTML]=\"oneProduct.description\"></div>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"spec\" role=\"tabpanel\">\n                                    <div class=\"product_info_content\" [innerHTML]=\"oneProduct.specifications\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--product info end-->\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<!--breadcrumbs area start-->\n<div class=\"breadcrumbs_area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"breadcrumb_content\">\n          <ul>\n            <li><a href=\"index.html\">home</a></li>\n            <li>My account</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumbs area end-->\n\n<!-- customer login start -->\n<div class=\"login_page_bg\">\n  <div class=\"container\">\n    <div class=\"customer_login\">\n      <div class=\"row\">\n        <!--login area start-->\n        <div class=\"col-md-9 offset-md-2\">\n          <div class=\"account_form register\">\n            <div class=\"row\">\n              <div class=\"col-sm-9\">\n                <h3>Create your AV Account</h3>\n              </div>\n              <div class=\"col-sm-3\">\n                Already member?<a routerLink=\"/login\" style=\"color: #049cb9;\"\n                  >Login</a\n                >\n                here\n              </div>\n            </div>\n            <form>\n              <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <label for=\"registerMobileNumber\"\n                          >Mobile number <span>*</span></label\n                        >\n                        <input\n                          required\n                          minlength=\"10\"\n                          maxlength=\"10\"\n                          ngModel\n                          name=\"registerMobileNumber\"\n                          #registerMobileNumber=\"ngModel\"\n                          (change)=\"log(registerMobileNumber)\"\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"registerMobileNumber\"\n                          placeholder=\"Pleace enter your phone number\"\n                        />\n                        <div\n                          class=\"alert alert-danger\"\n                          *ngIf=\"\n                            registerMobileNumber.touched &&\n                            !registerMobileNumber.valid\n                          \"\n                        >\n                          <div *ngIf=\"registerMobileNumber.errors.required\">\n                            Mobile number is required\n                          </div>\n                          <div *ngIf=\"registerMobileNumber.errors.minlength\">\n                            Mobile number length should be 10\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <label for=\"registerMobileNumber\"\n                          >Get OTP <span>*</span></label\n                        >\n                      <div class=\"login_submit\">\n                        <button type=\"submit\">Send</button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"otpCode\"\n                      >Verification Code <span>*</span></label\n                    >\n                    <input\n                      required\n                      minlength=\"4\"\n                      maxlength=\"4\"\n                      ngModel\n                      name=\"otpCode\"\n                      #otpCode=\"ngModel\"\n                      (change)=\"log(otpCode)\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"otpCode\"\n                      placeholder=\"Pleace enter your verification number\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"otpCode.touched && !registerMobileNumber.valid\"\n                    >\n                      <div *ngIf=\"otpCode.errors.required\">\n                        OTP code is required\n                      </div>\n                      <div *ngIf=\"otpCode.errors.minlength\">\n                        Length does not match\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"registerPassword\"\n                      >Password <span>*</span></label\n                    >\n                    <input\n                      required\n                      minlength=\"5\"\n                      maxlength=\"10\"\n                      ngModel\n                      name=\"registerPassword\"\n                      #registerPassword=\"ngModel\"\n                      (change)=\"log(registerPassword)\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"registerPassword\"\n                      placeholder=\"Pleace enter a password\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"\n                        registerPassword.touched && !registerPassword.valid\n                      \"\n                    >\n                      <div *ngIf=\"registerPassword.errors.required\">\n                        password is required\n                      </div>\n                      <div *ngIf=\"registerPassword.errors.minlength\">\n                        Password minmum length should be 5\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"confermPassword\"\n                      >Conferm Password <span>*</span></label\n                    >\n                    <input\n                      appConfirmEqualValidator=\"registerPassword\"\n                      required\n                      minlength=\"5\"\n                      maxlength=\"10\"\n                      ngModel\n                      name=\"confermPassword\"\n                      #confermPassword=\"ngModel\"\n                      (change)=\"log(confermPassword)\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"confermPassword\"\n                      placeholder=\"Conferm your password\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"confermPassword.touched && !confermPassword.valid\"\n                    >\n                      <div *ngIf=\"confermPassword.errors.required\">\n                        Yor password need to conferm\n                      </div>\n                      <div\n                        *ngIf=\"\n                          confermPassword.errors?.notEqual &&\n                          !confermPassword.errors.required\n                        \"\n                      >\n                        Password and Conferm Password does not match\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-5\">\n                  <div class=\"form-group\">\n                    <label for=\"registerFullName\"\n                      >Full name <span>*</span></label\n                    >\n                    <input\n                      required\n                      minlength=\"3\"\n                      ngModel\n                      name=\"registerFullName\"\n                      #registerFullName=\"ngModel\"\n                      (change)=\"log(registerFullName)\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"registerFullName\"\n                      placeholder=\"Pleace enter your full name\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"\n                        registerFullName.touched && !registerFullName.valid\n                      \"\n                    >\n                      <div *ngIf=\"registerFullName.errors.required\">\n                        Your name is required\n                      </div>\n                      <div *ngIf=\"registerFullName.errors.minlength\">\n                        Minimum length length should be 3\n                      </div>\n                    </div>\n                  </div>\n                  <p>\n                    <label for=\"inputgender\">Gender</label>\n                    <select id=\"registerGender\" class=\"form-control\" required>\n                      <option selected>Male</option>\n                      <option>Female</option>\n                    </select>\n                  </p>\n                  <div class=\"form-group\">\n                    <label for=\"registerEmail\">E-mail <span>*</span></label>\n                    <input\n                      required\n                      ngModel\n                      name=\"registerEmail\"\n                      #registerEmail=\"ngModel\"\n                      (change)=\"log(registerEmail)\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"registerEmail\"\n                      placeholder=\"Pleace enter your email\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"registerEmail.touched && !registerEmail.valid\"\n                    >\n                      <div *ngIf=\"registerEmail.errors.required\">\n                        Your email is required\n                      </div>\n                      <div *ngIf=\"registerEmail.invalid\">\n                        Your email is invalid\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"dateOfBirth\">Date of birth <span>*</span></label>\n                    <input\n                      required\n                      ngModel\n                      name=\"dateOfBirth\"\n                      #dateOfBirth=\"ngModel\"\n                      (change)=\"log(dateOfBirth)\"\n                      type=\"date\"\n                      class=\"form-control\"\n                      id=\"dateOfBirth\"\n                    />\n                    <div\n                      class=\"alert alert-danger\"\n                      *ngIf=\"registerEmail.touched && !registerEmail.valid\"\n                    >\n                      <div *ngIf=\"registerEmail.errors.required\">\n                        Your birth date is required\n                      </div>\n                    </div>\n                  </div>\n                  <h6>\n                    By clicking \"SIGN UP\" I agree to\n                    <a routerLink=\"/privacypolicy\" style=\"color: #049cb9;\">Privacy Policy</a>\n                  </h6>\n                  <div class=\"login_submit\">\n                    <button type=\"submit\">SIGN UP</button>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <!--login area start-->\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- customer login end -->\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <app-header></app-header>\n    <!--breadcrumbs area start-->\n    <div class=\"breadcrumbs_area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"breadcrumb_content\">\n                        <ul>\n                            <li><a href=\"index.html\">home</a></li>\n                            <li>shop</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--breadcrumbs area end-->\n\n    <!--shop  area start-->\n    <div class=\"shop_area shop_reverse\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-12\">\n                    <!--sidebar widget start-->\n                    <aside class=\"sidebar_widget\">\n                        <div class=\"widget_list widget_categories\">\n                            <h3>Product categories</h3>\n                            <ul>\n                                <li><a href=\"#\">Cameras & Camcoders</a></li>\n                                <li class=\"widget_sub_categories\"><a href=\"javascript:void(0)\">Computer & Networking</a>\n                                    <ul class=\"widget_dropdown_categories\">\n                                        <li><a href=\"#\">Computer</a></li>\n                                        <li><a href=\"#\">Networking</a></li>\n                                    </ul>\n                                </li>\n                                <li><a href=\"#\">Games & Consoles</a></li>\n                                <li><a href=\"#\">Headphone & Speaker</a></li>\n                                <li><a href=\"#\">Movies & Video Games</a></li>\n                                <li><a href=\"#\">Smartphone</a> </li>\n                                <li><a href=\"#\">Uncategorized</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"widget_list widget_filter\">\n                            <h3>Filter by price</h3>\n                            <form action=\"#\">\n                                <div id=\"slider-range\"></div>\n                                <button type=\"submit\">Filter</button>\n                                <input type=\"text\" name=\"text\" id=\"amount\">\n\n                            </form>\n                        </div>\n                        <div class=\"widget_list\">\n                            <h3>Compare Products</h3>\n                            <div class=\"recent_product_container\">\n                                <article class=\"recent_product_list\">\n                                    <figure>\n                                        <div class=\"product_thumb\">\n                                            <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product9.jpg\" alt=\"\"></a>\n                                            <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product10.jpg\" alt=\"\"></a>\n                                        </div>\n                                        <div class=\"product_content\">\n                                            <h4><a href=\"product-details.html\">Aliquam lobortis pellentesque</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$70.00</span>\n                                                <span class=\"current_price\">$65.00</span>\n                                            </div>\n                                        </div>\n                                    </figure>\n                                </article>\n                                <article class=\"recent_product_list\">\n                                    <figure>\n                                        <div class=\"product_thumb\">\n                                            <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product11.jpg\" alt=\"\"></a>\n                                            <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product12.jpg\" alt=\"\"></a>\n                                        </div>\n                                        <div class=\"product_content\">\n                                            <h4><a href=\"product-details.html\">Convallis quam sit vitae sodales</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$70.00</span>\n                                                <span class=\"current_price\">$65.00</span>\n                                            </div>\n                                        </div>\n                                    </figure>\n                                </article>\n                                <article class=\"recent_product_list\">\n                                    <figure>\n                                        <div class=\"product_thumb\">\n                                            <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product14.jpg\" alt=\"\"></a>\n                                            <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product13.jpg\" alt=\"\"></a>\n                                        </div>\n                                        <div class=\"product_content\">\n                                            <h4><a href=\"product-details.html\">Cillum dolore nisl fermentum</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$70.00</span>\n                                                <span class=\"current_price\">$65.00</span>\n                                            </div>\n                                        </div>\n                                    </figure>\n                                </article>\n                            </div>\n                        </div>\n                        <div class=\"widget_list tags_widget\">\n                            <h3>Product tags</h3>\n                            <div class=\"tag_cloud\">\n                                <a href=\"#\">blouse</a>\n                                <a href=\"#\">clothes</a>\n                                <a href=\"#\">fashion</a>\n                                <a href=\"#\">handbag</a>\n                                <a href=\"#\">laptop</a>\n                            </div>\n                        </div>\n                    </aside>\n                    <!--sidebar widget end-->\n                </div>\n                <div class=\"col-lg-9 col-md-12\">\n\n                    <!--shop banner area start-->\n                    <div class=\"shop_banner_area mb-30\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"shop_banner_thumb\">\n                                    <img src=\"assets\\img\\bg\\banner16.jpg\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--shop banner area end-->\n                    <!--shop toolbar start-->\n                    <div class=\"shop_toolbar_wrapper\">\n                        <div class=\"shop_toolbar_btn\">\n                            <button data-role=\"grid_4\" type=\"button\" class=\" active btn-grid-4\" data-toggle=\"tooltip\" title=\"4\"></button>\n                            <button data-role=\"grid_list\" type=\"button\" class=\"btn-list\" data-toggle=\"tooltip\" title=\"List\"></button>\n                        </div>\n                        <div class=\" niceselect_option\">\n                            <form class=\"select_option\" action=\"#\">\n                                <select name=\"orderby\" id=\"short\">\n\n                                    <option selected=\"\" value=\"1\">Sort by average rating</option>\n                                    <option value=\"2\">Sort by popularity</option>\n                                    <option value=\"3\">Sort by newness</option>\n                                    <option value=\"4\">Sort by price: low to high</option>\n                                    <option value=\"5\">Sort by price: high to low</option>\n                                    <option value=\"6\">Product Name: Z</option>\n                                </select>\n                            </form>\n                        </div>\n                        <div class=\"page_amount\">\n                            <p>Showing 1–9 of 21 results</p>\n                        </div>\n                    </div>\n                    <!--shop toolbar end-->\n\n                    <!--shop wrapper start-->\n                    <div class=\"row no-gutters shop_wrapper\">\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product5.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product6.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Natus erro at congue massa commodo sit Natus erro</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$80.00</span>\n                                                <span class=\"current_price\">$70.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Natus erro at congue massa commodo sit Natus erro</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$80.00</span>\n                                            <span class=\"current_price\">$70.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product7.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product8.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Auctor gravida enim pellentesque quam ut risus</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$75.00</span>\n                                                <span class=\"current_price\">$65.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Auctor gravida enim pellentesque quam ut risus</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$75.00</span>\n                                            <span class=\"current_price\">$65.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product28.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product29.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Cillum dolore tortor nisl fermentum quam</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$85.00</span>\n                                                <span class=\"current_price\">$75.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Cillum dolore tortor nisl fermentum quam</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$85.00</span>\n                                            <span class=\"current_price\">$75.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product10.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product11.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Consequuntur magni risus tincidunt convallis</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$60.00</span>\n                                                <span class=\"current_price\">$65.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Consequuntur magni risus tincidunt convallis</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$60.00</span>\n                                            <span class=\"current_price\">$65.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product12.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product13.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Cras neque metus eugiat felis sem sem accumsan </a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$55.00</span>\n                                                <span class=\"current_price\">$60.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Cras neque metus eugiat felis sem sem accumsan </a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$55.00</span>\n                                            <span class=\"current_price\">$60.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product14.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product15.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Dignissim venenatis tellus ac nulla pellentesque</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$62.00</span>\n                                                <span class=\"current_price\">$60.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Dignissim venenatis tellus ac nulla pellentesque</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$62.00</span>\n                                            <span class=\"current_price\">$60.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product16.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product17.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Dolorum fuga eget posuere commodo sit amet</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$70.00</span>\n                                                <span class=\"current_price\">$68.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Dolorum fuga eget posuere commodo sit amet</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$70.00</span>\n                                            <span class=\"current_price\">$68.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product18.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product19.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Donec eu libero ac dapibus urna consectetur rhoncus</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$56.00</span>\n                                                <span class=\"current_price\">$50.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Donec eu libero ac dapibus urna consectetur rhoncus</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$80.00</span>\n                                            <span class=\"current_price\">$70.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product20.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product19.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Natus erro at congue massa commodo sit Natus erro</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$80.00</span>\n                                                <span class=\"current_price\">$70.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Natus erro at congue massa commodo sit Natus erro</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$80.00</span>\n                                            <span class=\"current_price\">$70.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product22.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product23.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Donec tempus pretium arcu et faucibus commodo</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$50.00</span>\n                                                <span class=\"current_price\">$45.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Donec tempus pretium arcu et faucibus commodo</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$50.00</span>\n                                            <span class=\"current_price\">$45.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product24.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product25.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Epicuri per lobortis eleifend elementum viverra odio</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$85.00</span>\n                                                <span class=\"current_price\">$80.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Epicuri per lobortis eleifend elementum viverra odio</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$80.00</span>\n                                            <span class=\"current_price\">$70.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-12 \">\n                            <article class=\"single_product\">\n                                <figure>\n                                    <div class=\"product_thumb\">\n                                        <a class=\"primary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product26.jpg\" alt=\"\"></a>\n                                        <a class=\"secondary_img\" href=\"product-details.html\"><img src=\"assets\\img\\product\\product27.jpg\" alt=\"\"></a>\n                                        <div class=\"label_product\">\n                                            <span class=\"label_sale\">Sale</span>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i></a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i></a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"product_content grid_content\">\n                                        <div class=\"product_content_inner\">\n                                            <h4 class=\"product_name\"><a href=\"product-details.html\">Fusce ultricies dolor vitae tristique suscipit</a></h4>\n                                            <div class=\"product_rating\">\n                                                <ul>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                    <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"price_box\">\n                                                <span class=\"old_price\">$76.00</span>\n                                                <span class=\"current_price\">$72.00</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product_content list_content\">\n                                        <h4 class=\"product_name\"><a href=\"product-details.html\">Fusce ultricies dolor vitae tristique suscipit</a></h4>\n                                        <div class=\"product_rating\">\n                                            <ul>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                                <li><a href=\"#\"><i class=\"ion-android-star-outline\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"price_box\">\n                                            <span class=\"old_price\">$80.00</span>\n                                            <span class=\"current_price\">$70.00</span>\n                                        </div>\n                                        <div class=\"product_desc\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>\n                                        </div>\n                                        <div class=\"add_to_cart\">\n                                            <a href=\"cart.html\" title=\"Add to cart\">Add to cart</a>\n                                        </div>\n                                        <div class=\"action_links\">\n                                            <ul>\n                                                <li class=\"wishlist\"><a href=\"wishlist.html\" title=\"Add to Wishlist\"><i class=\"ion-android-favorite-outline\"></i> Add to Wishlist</a></li>\n                                                <li class=\"compare\"><a href=\"#\" title=\"Add to Compare\"><i class=\"ion-ios-settings-strong\"></i> Compare</a></li>\n                                                <li class=\"quick_button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#modal_box\" title=\"quick view\"><i class=\"ion-ios-search-strong\"></i> quick view</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </figure>\n                            </article>\n                        </div>\n                    </div>\n\n                    <div class=\"shop_toolbar t_bottom\">\n                        <div class=\"pagination\">\n                            <ul>\n                                <li class=\"current\">1</li>\n                                <li><a href=\"#\">2</a></li>\n                                <li><a href=\"#\">3</a></li>\n                                <li class=\"next\"><a href=\"#\">next</a></li>\n                                <li><a href=\"#\">>></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--shop toolbar end-->\n                    <!--shop wrapper end-->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--shop  area end-->\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/cart-item/cart-item.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/cart-item/cart-item.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingCartCartItemCartItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingCartShoppingCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div *ngIf=\"cartItems.length ===0\" class=\"alert alert-info\">Your cart is empty</div>\n<ul *ngIf=\"cartItems.length > 0\" class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let item of cartItems\">\n        <app-cart-item [cartItem]=\"item\"></app-cart-item>\n    </li>\n    <li class=\"list-group-item active\">\n        <strong>Total</strong> {{ cartTotal | currency:'LKR'}}\n    </li>\n</ul> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template/footer/footer.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template/footer/footer.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <!--footer area start-->\n    <footer class=\"footer_widgets\">\n        <!--newsletter area start-->\n     <div style=\"visibility: hidden;\">\n        <app-wishlist-cart></app-wishlist-cart>\n        <app-inquiry-cart></app-inquiry-cart>\n     </div>\n        <!--newsletter area end-->\n        <div class=\"footer_top\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-5 col-sm-7\">\n                        <div class=\"widgets_container contact_us\">\n                            <h3>GET THE APP</h3>\n                            <div class=\"aff_content\">\n                                <p><strong>ANTOMI</strong> App is now available on Google Play & App Store. Get it now.</p>\n                            </div>\n                            <div class=\"app_img\">\n                                <figure class=\"app_img\">\n                                    <a href=\"#\"><img src=\"./../../../assets/img/icon/icon-appstore.png\" alt=\"\"></a>\n                                </figure>\n                                <figure class=\"app_img\">\n                                    <a href=\"#\"><img src=\"./../../../assets/img/icon/icon-googleplay.png\" alt=\"\"></a>\n                                </figure>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-2 col-md-3 col-sm-5\">\n                        <div class=\"widgets_container widget_menu\">\n                            <h3>Information</h3>\n                            <div class=\"footer_menu\">\n                                <ul>\n                                    <li><a href=\"about.html\">About Us</a></li>\n                                    <li><a href=\"#\">Delivery Information</a></li>\n                                    <li><a href=\"#\">New products</a></li>\n                                    <li><a href=\"#\">Best sales</a></li>\n                                    <li><a href=\"my-account.html\">My Account</a></li>\n                                    <li><a href=\"#\">Order History</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4 col-sm-6\">\n                        <div class=\"widgets_container widget_menu\">\n                            <h3>My Account</h3>\n                            <div class=\"footer_menu\">\n                                <ul>\n                                    <li><a href=\"my-account.html\">My Account</a></li>\n                                    <li><a href=\"cart.html\">Shopping Cart</a></li>\n                                    <li><a href=\"wishlist.html\">Wish List</a></li>\n                                    <li><a href=\"#\">Prices drop</a></li>\n                                    <li><a href=\"#\">Order History</a></li>\n                                    <li><a href=\"#\">International Orders</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-2 col-md-5 col-sm-6\">\n                        <div class=\"widgets_container widget_menu\">\n                            <h3>Customer Service</h3>\n                            <div class=\"footer_menu\">\n                                <ul>\n                                    <li><a href=\"#\">Sitemap</a></li>\n                                    <li><a href=\"my-account.html\">My Account</a></li>\n                                    <li><a href=\"#\">Delivery Information</a></li>\n                                    <li><a href=\"#\">Order History</a></li>\n                                    <li><a href=\"wishlist.html\">Wish List</a></li>\n                                    <li><a href=\"#\">Specials</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-7 col-sm-12\">\n                        <div class=\"widgets_container\">\n                            <h3>CONTACT INFO</h3>\n                            <div class=\"footer_contact\">\n                                <div class=\"footer_contact_inner\">\n                                    <div class=\"contact_icone\">\n                                        <img src=\"./../../../assets/img/icon/icon-phone.png\" alt=\"\">\n                                    </div>\n                                    <div class=\"contact_text\">\n                                        <p>Hotline Free 24/24: <br> <strong>(+800) 123 456 789</strong></p>\n                                    </div>\n                                </div>\n                                <p>The Barn, Henley in Arden B578. England. Support@eCommerce</p>\n                            </div>\n\n                            <div class=\"footer_social\">\n                                <ul>\n                                    <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                                    <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                                    <li><a class=\"instagram\" href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n                                    <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                                    <li><a class=\"rss\" href=\"#\"><i class=\"fa fa-rss\"></i></a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer_bottom\">\n            <div class=\"container\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-lg-6 col-md-6\">\n                        <div class=\"copyright_area\">\n                            <p>Copyright &copy; 2020 <a href=\"#\">Antomi</a> All Right Reserved.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6\">\n                        <div class=\"footer_payment text-right\">\n                            <img src=\"./../../../assets/img/icon/payment.png\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>\n    <!--footer area end-->\n\n    <!-- modal area start-->\n    <div class=\"modal fade\" id=\"modal_box\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <div class=\"modal_body\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                                <div class=\"modal_tab\">\n                                    <div class=\"tab-content product-details-large\">\n                                        <div class=\"tab-pane fade show active\" id=\"tab1\" role=\"tabpanel\">\n                                            <div class=\"modal_tab_img\">\n                                                <a href=\"#\"><img src=\"./../../../assets/img/product/productbig2.jpg\" alt=\"\"></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"tab-pane fade\" id=\"tab2\" role=\"tabpanel\">\n                                            <div class=\"modal_tab_img\">\n                                                <a href=\"#\"><img src=\"./../../../assets/img/product/productbig3.jpg\" alt=\"\"></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"tab-pane fade\" id=\"tab3\" role=\"tabpanel\">\n                                            <div class=\"modal_tab_img\">\n                                                <a href=\"#\"><img src=\"./../../../assets/img/product/productbig4.jpg\" alt=\"\"></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"tab-pane fade\" id=\"tab4\" role=\"tabpanel\">\n                                            <div class=\"modal_tab_img\">\n                                                <a href=\"#\"><img src=\"./../../../assets/img/product/productbig5.jpg\" alt=\"\"></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"modal_tab_button\">\n                                        <ul class=\"nav product_navactive owl-carousel\" role=\"tablist\">\n                                            <li>\n                                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab1\" role=\"tab\" aria-controls=\"tab1\" aria-selected=\"false\"><img src=\"assets\\img\\product\\product1.jpg\" alt=\"\"></a>\n                                            </li>\n                                            <li>\n                                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab2\" role=\"tab\" aria-controls=\"tab2\" aria-selected=\"false\"><img src=\"assets\\img\\product\\product6.jpg\" alt=\"\"></a>\n                                            </li>\n                                            <li>\n                                                <a class=\"nav-link button_three\" data-toggle=\"tab\" href=\"#tab3\" role=\"tab\" aria-controls=\"tab3\" aria-selected=\"false\"><img src=\"assets\\img\\product\\product9.jpg\" alt=\"\"></a>\n                                            </li>\n                                            <li>\n                                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab4\" role=\"tab\" aria-controls=\"tab4\" aria-selected=\"false\"><img src=\"assets\\img\\product\\product14.jpg\" alt=\"\"></a>\n                                            </li>\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-7 col-md-7 col-sm-12\">\n                                <div class=\"modal_right\">\n                                    <div class=\"modal_title mb-10\">\n                                        <h2>Sit voluptatem rhoncus sem lectus</h2>\n                                    </div>\n                                    <div class=\"modal_price mb-10\">\n                                        <span class=\"new_price\">$64.99</span>\n                                        <span class=\"old_price\">$78.99</span>\n                                    </div>\n                                    <div class=\"modal_description mb-15\">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae </p>\n                                    </div>\n                                    <div class=\"variants_selects\">\n                                        <div class=\"variants_size\">\n                                            <h2>size</h2>\n                                            <select class=\"select_option\">\n                                                <option selected=\"\" value=\"1\">s</option>\n                                                <option value=\"1\">m</option>\n                                                <option value=\"1\">l</option>\n                                                <option value=\"1\">xl</option>\n                                                <option value=\"1\">xxl</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"variants_color\">\n                                            <h2>color</h2>\n                                            <select class=\"select_option\">\n                                                <option selected=\"\" value=\"1\">purple</option>\n                                                <option value=\"1\">violet</option>\n                                                <option value=\"1\">black</option>\n                                                <option value=\"1\">pink</option>\n                                                <option value=\"1\">orange</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"modal_add_to_cart\">\n                                            <form action=\"#\">\n                                                <input min=\"1\" max=\"100\" step=\"2\" value=\"1\" type=\"number\">\n                                                <button type=\"submit\">add to cart</button>\n                                            </form>\n                                        </div>\n                                    </div>\n                                    <div class=\"modal_social\">\n                                        <h2>Share this product</h2>\n                                        <ul>\n                                            <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                                            <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                                            <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\n                                            <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                                            <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- modal area end-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template/header/header.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template/header/header.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"off_canvars_overlay\"></div>\n<div class=\"Offcanvas_menu\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"canvas_open\">\n                    <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Offcanvas menu area end-->\n<!--header area start-->\n<header>\n    <div class=\"main_header\">\n        <div class=\"container\">\n            <!--header top start-->\n            <div class=\"header_top\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-lg-4 col-md-5\">\n                        <div class=\"antomi_message\">\n                            <p></p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-8 col-md-7\">\n                        <div class=\"header_top_settings text-right\">\n                            <ul>\n                                <li><a href=\"#\">Store Locations</a></li>\n                                <li><a routerLink=\"/login\">Log in</a></li>\n                                <li><a routerLink=\"/register\">Sign up</a></li>\n                                <li><a href=\"#\">Track Your Order</a></li>\n                                <li>Hotline: <a href=\"tel:+(012)800456789\">(012) 800 456 789 </a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--header top start-->\n\n            <!--header middel start-->\n            <div class=\"header_middle sticky-header\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-lg-2 col-md-3 col-4\">\n                        <div class=\"logo\">\n                            <a routerLink=\"/home\"><img src=\"./../../../assets/img/logo/logo.png\" alt=\"\"></a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-7 col-md-12\">\n                        <div class=\"main_menu menu_position text-center\">\n                            <nav>\n                                <ul>\n                                    <li><a routerLink=\"\">Home</a></li>\n                                    <li class=\"mega_items\"><a href=\"shop.html\">shop<i class=\"fa fa-angle-down\"></i></a>\n                                        <div class=\"mega_menu\">\n                                            <ul class=\"mega_menu_inner\">\n                                                <li><a href=\"#\">Shop Layouts</a>\n                                                    <ul>\n                                                        <li><a href=\"shop-fullwidth.html\">Full Width</a></li>\n                                                        <li><a href=\"shop-fullwidth-list.html\">Full Width list</a></li>\n                                                        <li><a href=\"shop-right-sidebar.html\">Right Sidebar </a></li>\n                                                        <li><a href=\"shop-right-sidebar-list.html\"> Right Sidebar list</a></li>\n                                                        <li><a href=\"shop-list.html\">List View</a></li>\n                                                    </ul>\n                                                </li>\n                                                <li><a href=\"#\">other Pages</a>\n                                                    <ul>\n                                                        <li><a href=\"cart.html\">cart</a></li>\n                                                        <li><a href=\"wishlist.html\">Wishlist</a></li>\n                                                        <li><a href=\"checkout.html\">Checkout</a></li>\n                                                        <li><a href=\"my-account.html\">my account</a></li>\n                                                        <li><a href=\"404.html\">Error 404</a></li>\n                                                    </ul>\n                                                </li>\n                                                <li><a href=\"#\">Product Types</a>\n                                                    <ul>\n                                                        <li><a href=\"product-details.html\">product details</a></li>\n                                                        <li><a href=\"product-sidebar.html\">product sidebar</a></li>\n                                                        <li><a href=\"product-grouped.html\">product grouped</a></li>\n                                                        <li><a href=\"variable-product.html\">product variable</a></li>\n                                                        <li><a href=\"product-countdown.html\">product countdown</a></li>\n\n                                                    </ul>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </li>\n                                    <li><a href=\"blog.html\">blog<i class=\"fa fa-angle-down\"></i></a>\n                                        <ul class=\"sub_menu pages\">\n                                            <li><a href=\"blog-details.html\">blog details</a></li>\n                                            <li><a href=\"blog-fullwidth.html\">blog fullwidth</a></li>\n                                            <li><a href=\"blog-sidebar.html\">blog sidebar</a></li>\n                                            <li><a href=\"blog-no-sidebar.html\">blog no sidebar</a></li>\n                                        </ul>\n                                    </li>\n                                    <li><a href=\"#\">pages <i class=\"fa fa-angle-down\"></i></a>\n                                        <ul class=\"sub_menu pages\">\n                                            <li><a href=\"about.html\">About Us</a></li>\n                                            <li><a href=\"faq.html\">Frequently Questions</a></li>\n                                            <li><a href=\"privacy-policy.html\">privacy policy</a></li>\n                                            <li><a href=\"contact.html\">contact</a></li>\n                                            <li><a href=\"login.html\">login</a></li>\n                                            <li><a href=\"404.html\">Error 404</a></li>\n                                            <li><a href=\"compare.html\">compare</a></li>\n                                            <li><a href=\"coming-soon.html\">coming soon</a></li>\n                                        </ul>\n                                    </li>\n\n                                    <li><a href=\"about.html\">About Us</a></li>\n                                    <li><a href=\"contact.html\"> Contact Us</a></li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-7 col-6\">\n                        <div class=\"header_configure_area\">\n                           \n                            <div class=\"header_wishlist\">\n                                <a routerLink=\"/customeraccount\"><i class=\"ion-android-favorite-outline\"></i>\n                                    <span class=\"wishlist_count\">{{WishlistQuantity}}</span>\n                                </a>\n                            </div>\n                            <div class=\"header_wishlist\">\n                                <a href=\"javascript:void(0)\">\n                                    <i class=\"fa fa-inbox\" routerLink=\"/inquirycart\"></i>\n                                    <span class=\"wishlist_count\">{{InquryQuantity}}</span>\n                                    \n                                </a>\n                            </div>\n                            <div class=\"mini_cart_wrapper\">\n                                <a href=\"javascript:void(0)\">\n                                    <i class=\"fa fa-shopping-bag\" routerLink=\"/cart\"></i>\n                                    <span class=\"cart_price\" (click)=\"visibleSideCart()\">LKR {{totalcartValue}}<i class=\"ion-ios-arrow-down\"></i></span>\n                                    <span class=\"cart_count\">{{quantity}}</span>\n\n                                </a>\n                            </div>\n                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--header middel end-->\n            <!--mini cart-->\n            <div class=\"mini_cart\">\n                <div class=\"cart_close\">\n                    <div class=\"cart_text\">\n                        <h3>cart</h3>\n                    </div>\n                    <div class=\"mini_cart_close\">\n                        <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n                    </div>\n                </div>\n                <app-shopping-cart></app-shopping-cart>\n                <div class=\"mini_cart_table\">\n                    <div class=\"cart_total\">\n                        <span>Sub total:</span>\n                        <span class=\"price\">$138.00</span>\n                    </div>\n                    <div class=\"cart_total mt-10\">\n                        <span>total:</span>\n                        <span class=\"price\">$138.00</span>\n                    </div>\n                </div>\n                <div class=\"mini_cart_footer\">\n                    <div class=\"cart_button\">\n                        <a href=\"cart.html\">View cart</a>\n                    </div>\n                    <div class=\"cart_button\">\n                        <a class=\"active\" href=\"checkout.html\">Checkout</a>\n                    </div>\n\n                </div>\n            </div>\n            <!--mini cart end-->\n\n            <!--header bottom satrt-->\n            <div class=\"header_bottom\">\n                <div class=\"row align-items-center\">\n                    <div class=\"column1 col-lg-3 col-md-6\">\n                        <div class=\"categories_menu\">\n                            <div class=\"categories_title active\" (click)=\"visibleMainMenu()\">\n                                <h2 class=\"categori_toggle\">ALL CATEGORIES</h2>\n                            </div>\n                            <div class=\"categories_menu_toggle\" >\n                                <ul>\n                                    <li class=\"menu_item_children\"><a href=\"#\">Brake Parts <i class=\"fa fa-angle-right\"></i></a>\n                                        <ul class=\"categories_mega_menu\">\n                                            <li class=\"menu_item_children\"><a href=\"#\">Dresses</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Sweater</a></li>\n                                                    <li><a href=\"\">Evening</a></li>\n                                                    <li><a href=\"\">Day</a></li>\n                                                    <li><a href=\"\">Sports</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Handbags</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Shoulder</a></li>\n                                                    <li><a href=\"\">Satchels</a></li>\n                                                    <li><a href=\"\">kids</a></li>\n                                                    <li><a href=\"\">coats</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">shoes</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Ankle Boots</a></li>\n                                                    <li><a href=\"\">Clog sandals </a></li>\n                                                    <li><a href=\"\">run</a></li>\n                                                    <li><a href=\"\">Books</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Clothing</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Coats Jackets </a></li>\n                                                    <li><a href=\"\">Raincoats</a></li>\n                                                    <li><a href=\"\">Jackets</a></li>\n                                                    <li><a href=\"\">T-shirts</a></li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"menu_item_children\"><a href=\"#\"> Wheels & Tires <i class=\"fa fa-angle-right\"></i></a>\n                                        <ul class=\"categories_mega_menu column_3\">\n                                            <li class=\"menu_item_children\"><a href=\"#\">Chair</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Dining room</a></li>\n                                                    <li><a href=\"\">bedroom</a></li>\n                                                    <li><a href=\"\"> Home & Office</a></li>\n                                                    <li><a href=\"\">living room</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Lighting</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Ceiling Lighting</a></li>\n                                                    <li><a href=\"\">Wall Lighting</a></li>\n                                                    <li><a href=\"\">Outdoor Lighting</a></li>\n                                                    <li><a href=\"\">Smart Lighting</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Sofa</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Fabric Sofas</a></li>\n                                                    <li><a href=\"\">Leather Sofas</a></li>\n                                                    <li><a href=\"\">Corner Sofas</a></li>\n                                                    <li><a href=\"\">Sofa Beds</a></li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"menu_item_children\"><a href=\"#\"> Furnitured & Decor <i class=\"fa fa-angle-right\"></i></a>\n                                        <ul class=\"categories_mega_menu column_2\">\n                                            <li class=\"menu_item_children\"><a href=\"#\">Brake Tools</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Driveshafts</a></li>\n                                                    <li><a href=\"\">Spools</a></li>\n                                                    <li><a href=\"\">Diesel </a></li>\n                                                    <li><a href=\"\">Gasoline</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Emergency Brake</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Dolls for Girls</a></li>\n                                                    <li><a href=\"\">Girls' Learning Toys</a></li>\n                                                    <li><a href=\"\">Arts and Crafts for Girls</a></li>\n                                                    <li><a href=\"\">Video Games for Girls</a></li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"menu_item_children\"><a href=\"#\"> Turbo System <i class=\"fa fa-angle-right\"></i></a>\n                                        <ul class=\"categories_mega_menu column_2\">\n                                            <li class=\"menu_item_children\"><a href=\"#\">Check Trousers</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Building</a></li>\n                                                    <li><a href=\"\">Electronics</a></li>\n                                                    <li><a href=\"\">action figures </a></li>\n                                                    <li><a href=\"\">specialty & boutique toy</a></li>\n                                                </ul>\n                                            </li>\n                                            <li class=\"menu_item_children\"><a href=\"#\">Calculators</a>\n                                                <ul class=\"categorie_sub_menu\">\n                                                    <li><a href=\"\">Dolls for Girls</a></li>\n                                                    <li><a href=\"\">Girls' Learning Toys</a></li>\n                                                    <li><a href=\"\">Arts and Crafts for Girls</a></li>\n                                                    <li><a href=\"\">Video Games for Girls</a></li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li><a href=\"#\"> Lighting</a></li>\n                                    <li><a href=\"#\"> Accessories</a></li>\n                                    <li><a href=\"#\">Body Parts</a></li>\n                                    <li><a href=\"#\">Networking</a></li>\n                                    <li><a href=\"#\">Perfomance Filters</a></li>\n                                    <li><a href=\"#\"> Engine Parts</a></li>\n                                    <li class=\"hidden\"><a href=\"#\">New Sofas</a></li>\n                                    <li class=\"hidden\"><a href=\"#\">Sleight Sofas</a></li>\n                                    <li><a href=\"#\" id=\"more-btn\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> More Categories</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"column2 col-lg-6 \">\n                        <div class=\"search_container\">\n                            <form action=\"#\">\n                                <div class=\"hover_category\">\n                                    <select class=\"select_option\" name=\"select\" id=\"categori2\">\n                                        <option selected=\"\" value=\"1\">All Categories</option>\n                                        <option value=\"2\">Accessories</option>\n                                        <option value=\"3\">Accessories & More</option>\n                                        <option value=\"4\">Butters & Eggs</option>\n                                        <option value=\"5\">Camera & Video </option>\n                                        <option value=\"6\">Mornitors</option>\n                                        <option value=\"7\">Tablets</option>\n                                        <option value=\"8\">Laptops</option>\n                                        <option value=\"9\">Handbags</option>\n                                        <option value=\"10\">Headphone & Speaker</option>\n                                        <option value=\"11\">Herbs & botanicals</option>\n                                        <option value=\"12\">Vegetables</option>\n                                        <option value=\"13\">Shop</option>\n                                        <option value=\"14\">Laptops & Desktops</option>\n                                        <option value=\"15\">Watchs</option>\n                                        <option value=\"16\">Electronic</option>\n                                    </select>\n                                </div>\n                                <div class=\"search_box\">\n                                    <input placeholder=\"Search product...\" type=\"text\">\n                                    <button type=\"submit\">Search</button>\n                                </div>\n                            </form>\n                        </div>\n\n                    </div>\n                    <div class=\"column3 col-lg-3 col-md-6\">\n                        <div class=\"header_bigsale\">\n                            <a href=\"#\">BIG SALE BLACK FRIDAY</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--header bottom end-->\n        </div>\n    </div>\n</header>\n<!--header area end-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-cart/wishlist-cart.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-cart/wishlist-cart.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistCartWishlistCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/all-product/all-product.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/all-product/all-product.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAllProductAllProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-gap: 40px;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXByb2R1Y3QvYWxsLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hbGwtcHJvZHVjdC9hbGwtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/all-product/all-product.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/all-product/all-product.component.ts ***!
    \******************************************************/

  /*! exports provided: AllProductComponent */

  /***/
  function srcAppAllProductAllProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllProductComponent", function () {
      return AllProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AllProductComponent = /*#__PURE__*/function () {
      function AllProductComponent(productService) {
        _classCallCheck(this, AllProductComponent);

        this.productService = productService;
        this.allProducts = [];
      }

      _createClass(AllProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resourcesBaseUrl;
          this.isLoading = true;
          this.getProducts();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this = this;

          this.productService.getProducts().subscribe(function (products) {
            _this.allProducts = products.data;
            _this.isLoading = false;
          });
        }
      }]);

      return AllProductComponent;
    }();

    AllProductComponent.ctorParameters = function () {
      return [{
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    AllProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/all-product/all-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-product.component.css */
      "./src/app/all-product/all-product.component.css"))["default"]]
    })], AllProductComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer-account/customer-account.component */
    "./src/app/customer-account/customer-account.component.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./privacy-policy/privacy-policy.component */
    "./src/app/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/product-detail/product-detail.component.ts");
    /* harmony import */


    var _direct_inquiry_direct_inquiry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./direct-inquiry/direct-inquiry.component */
    "./src/app/direct-inquiry/direct-inquiry.component.ts");
    /* harmony import */


    var _inquiry_cart_view_inquiry_cart_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inquiry-cart-view/inquiry-cart-view.component */
    "./src/app/inquiry-cart-view/inquiry-cart-view.component.ts");
    /* harmony import */


    var _inquery_checkout_inquery_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./inquery-checkout/inquery-checkout.component */
    "./src/app/inquery-checkout/inquery-checkout.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'customeraccount',
      component: _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_6__["CustomerAccountComponent"]
    }, {
      path: 'privacypolicy',
      component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: 'checkout',
      component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]
    }, {
      path: 'inquery-checkout',
      component: _inquery_checkout_inquery_checkout_component__WEBPACK_IMPORTED_MODULE_14__["InqueryCheckoutComponent"]
    }, {
      path: 'shop',
      component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["ShopComponent"]
    }, {
      path: 'inquirycart',
      component: _inquiry_cart_view_inquiry_cart_view_component__WEBPACK_IMPORTED_MODULE_13__["InquiryCartViewComponent"]
    }, {
      path: 'product/details/:id',
      component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"]
    }, {
      path: 'product/inquiry/:id',
      component: _direct_inquiry_direct_inquiry_component__WEBPACK_IMPORTED_MODULE_12__["DirectInquiryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_6__["CustomerAccountComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["ShopComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"], _direct_inquiry_direct_inquiry_component__WEBPACK_IMPORTED_MODULE_12__["DirectInquiryComponent"], _inquiry_cart_view_inquiry_cart_view_component__WEBPACK_IMPORTED_MODULE_13__["InquiryCartViewComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AV';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/fesm2015/elements.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./template/header/header.component */
    "./src/app/template/header/header.component.ts");
    /* harmony import */


    var _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./template/footer/footer.component */
    "./src/app/template/footer/footer.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_conferm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/conferm-equal-validator.directive */
    "./src/app/shared/conferm-equal-validator.directive.ts");
    /* harmony import */


    var _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./customer-account/customer-account.component */
    "./src/app/customer-account/customer-account.component.ts");
    /* harmony import */


    var _customer_account_account_details_customer_account_account_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./customer-account-account-details/customer-account-account-details.component */
    "./src/app/customer-account-account-details/customer-account-account-details.component.ts");
    /* harmony import */


    var _customer_account_payment_options_customer_account_payment_options_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./customer-account-payment-options/customer-account-payment-options.component */
    "./src/app/customer-account-payment-options/customer-account-payment-options.component.ts");
    /* harmony import */


    var _customer_account_reviews_customer_account_reviews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./customer-account-reviews/customer-account-reviews.component */
    "./src/app/customer-account-reviews/customer-account-reviews.component.ts");
    /* harmony import */


    var _customer_account_wishlist_customer_account_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./customer-account-wishlist/customer-account-wishlist.component */
    "./src/app/customer-account-wishlist/customer-account-wishlist.component.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./privacy-policy/privacy-policy.component */
    "./src/app/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./featured-products/featured-products.component */
    "./src/app/featured-products/featured-products.component.ts");
    /* harmony import */


    var _service_cart_items_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./service/cart-items.service */
    "./src/app/service/cart-items.service.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/item/item.component.ts");
    /* harmony import */


    var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shopping-cart/shopping-cart.component */
    "./src/app/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _shopping_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shopping-cart/cart-item/cart-item.component */
    "./src/app/shopping-cart/cart-item/cart-item.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/product-detail/product-detail.component.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _wishlist_cart_wishlist_cart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./wishlist-cart/wishlist-cart.component */
    "./src/app/wishlist-cart/wishlist-cart.component.ts");
    /* harmony import */


    var _direct_inquiry_direct_inquiry_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./direct-inquiry/direct-inquiry.component */
    "./src/app/direct-inquiry/direct-inquiry.component.ts");
    /* harmony import */


    var _inquiry_cart_inquiry_cart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./inquiry-cart/inquiry-cart.component */
    "./src/app/inquiry-cart/inquiry-cart.component.ts");
    /* harmony import */


    var _inquiry_cart_view_inquiry_cart_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./inquiry-cart-view/inquiry-cart-view.component */
    "./src/app/inquiry-cart-view/inquiry-cart-view.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _all_product_all_product_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./all-product/all-product.component */
    "./src/app/all-product/all-product.component.ts");
    /* harmony import */


    var _inquery_checkout_inquery_checkout_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./inquery-checkout/inquery-checkout.component */
    "./src/app/inquery-checkout/inquery-checkout.component.ts");
    /* harmony import */


    var _components_shared_home_image_slider_home_image_slider_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/shared/home-image-slider/home-image-slider.component */
    "./src/app/components/shared/home-image-slider/home-image-slider.component.ts");

    var AppModule = /*#__PURE__*/function () {
      function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
        var slider = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_components_shared_home_image_slider_home_image_slider_component__WEBPACK_IMPORTED_MODULE_36__["HomeImageSliderComponent"], {
          injector: injector
        });
        customElements.define('motley-slider', slider);
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap() {}
      }]);

      return AppModule;
    }();

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"], _template_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _shared_conferm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ConfirmEqualValidatorDirective"], _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_12__["CustomerAccountComponent"], _customer_account_account_details_customer_account_account_details_component__WEBPACK_IMPORTED_MODULE_13__["CustomerAccountAccountDetailsComponent"], _customer_account_payment_options_customer_account_payment_options_component__WEBPACK_IMPORTED_MODULE_14__["CustomerAccountPaymentOptionsComponent"], _customer_account_reviews_customer_account_reviews_component__WEBPACK_IMPORTED_MODULE_15__["CustomerAccountReviewsComponent"], _customer_account_wishlist_customer_account_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["CustomerAccountWishlistComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyPolicyComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_20__["ShopComponent"], _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_21__["FeaturedProductsComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_23__["ItemComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__["ShoppingCartComponent"], _shopping_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_25__["CartItemComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_26__["ProductDetailComponent"], _wishlist_cart_wishlist_cart_component__WEBPACK_IMPORTED_MODULE_29__["WishlistCartComponent"], _direct_inquiry_direct_inquiry_component__WEBPACK_IMPORTED_MODULE_30__["DirectInquiryComponent"], _inquiry_cart_inquiry_cart_component__WEBPACK_IMPORTED_MODULE_31__["InquiryCartComponent"], _inquiry_cart_view_inquiry_cart_view_component__WEBPACK_IMPORTED_MODULE_32__["InquiryCartViewComponent"], _all_product_all_product_component__WEBPACK_IMPORTED_MODULE_34__["AllProductComponent"], _inquery_checkout_inquery_checkout_component__WEBPACK_IMPORTED_MODULE_35__["InqueryCheckoutComponent"], _components_shared_home_image_slider_home_image_slider_component__WEBPACK_IMPORTED_MODULE_36__["HomeImageSliderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_27__["SimpleNotificationsModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_33__["CarouselModule"]],
      providers: [_service_cart_items_service__WEBPACK_IMPORTED_MODULE_22__["CartItemsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [_components_shared_home_image_slider_home_image_slider_component__WEBPACK_IMPORTED_MODULE_36__["HomeImageSliderComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/cart */
    "./src/app/models/cart.ts");
    /* harmony import */


    var _models_CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/CartItem */
    "./src/app/models/CartItem.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent() {
        _classCallCheck(this, CartComponent);

        this.flatRate = 0;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].resourcesBaseUrl;
          this.cart = new _models_cart__WEBPACK_IMPORTED_MODULE_3__["Cart"](1, [], 0, 0, 0);
          var cartItems = this.getCartItems();

          if (cartItems != null && cartItems.length === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Your Cart Is Empty',
              imageUrl: './../../assets/img/emptycart.png',
              imageWidth: 400,
              imageHeight: 300,
              text: name,
              footer: '<a href="">Lets Shopping</a>'
            });
          } else {
            cartItems.forEach(function (element) {
              var itemTotal = element.quantity * element.price;
              var cartItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](element.id, element, itemTotal);

              _this2.cart.cartItems.push(cartItem);

              _this2.cart.subTotal += cartItem.itemTotal;

              _this2.calcCartTotal(cartItem);
            });
            this.getCartShippingCost();
            this.getCartSubTotal();
            this.getCartTotal();
          }
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return JSON.parse(localStorage.getItem('Items'));
        }
      }, {
        key: "getCartShippingCost",
        value: function getCartShippingCost() {
          var data = JSON.parse(localStorage.getItem('cartShipping'));

          if (data && data > 0) {
            this.cart.shippingCost = data;
          }
        }
      }, {
        key: "getCartSubTotal",
        value: function getCartSubTotal() {
          var data = JSON.parse(localStorage.getItem('cartSubTotal'));

          if (data && data > 0) {
            this.cart.subTotal = data;
          }
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal() {
          var data = JSON.parse(localStorage.getItem('CartTotal'));

          if (data && data > 0) {
            this.cart.cartTotal = data;
          }
        }
      }, {
        key: "removeData",
        value: function removeData(id, attachment, name) {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure want to remove ' + name,
            imageUrl: this.resourcesBaseUrl + attachment[0],
            imageWidth: 200,
            imageHeight: 200,
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              for (var i = 0; i < _this3.cart.cartItems.length; i++) {
                if (_this3.cart.cartItems[i].id === id) {
                  var removedItem = _this3.cart.cartItems.splice(i, 1);

                  _this3.cart.subTotal -= removedItem[0].itemTotal;
                  _this3.cart.cartTotal -= removedItem[0].itemTotal;

                  _this3.updateCart();

                  localStorage.setItem('quantity', JSON.stringify(removedItem[0].product.quantity));
                }
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your item has been removed.', 'success');
            }
          });
        }
      }, {
        key: "updateCart",
        value: function updateCart() {
          localStorage.setItem('cartSubTotal', JSON.stringify(this.cart.subTotal));
          localStorage.setItem('cartShipping', JSON.stringify(this.cart.shippingCost));
          localStorage.setItem('CartTotal', JSON.stringify(this.cart.cartTotal));
          var tempArr = [];
          this.cart.cartItems.forEach(function (element) {
            tempArr.push(element.product);
          });
          localStorage.setItem('Items', JSON.stringify(tempArr)); // Swal.fire({
          //   icon: 'success',
          //   title: 'Cart Updated...',
          //   text: 'Your cart has been updated!',
          // });
        }
      }, {
        key: "addQty",
        value: function addQty(productId) {
          var item = this.cart.cartItems.find(function (it) {
            return it.id === productId;
          });

          if (item.product.quantity >= 1) {
            item.product.quantity++;
            item.itemTotal += item.product.price;
            this.cart.subTotal += item.product.price;
            this.calcCartTotal(item);
            this.updateCart();
            localStorage.setItem('quantity', JSON.stringify(item.product.quantity));
          }
        }
      }, {
        key: "subtractQty",
        value: function subtractQty(productId) {
          var item = this.cart.cartItems.find(function (it) {
            return it.id === productId;
          });

          if (item.product.quantity > 1) {
            item.product.quantity--;
            item.itemTotal -= item.product.price;
            this.cart.subTotal -= item.product.price;
            this.calcCartTotal(item);
            this.updateCart();
            localStorage.setItem('quantity', JSON.stringify(item.product.quantity));
          }
        }
      }, {
        key: "calcCartTotal",
        value: function calcCartTotal(item) {
          this.cart.flatRate = this.cart.flatRate * item.product.quantity;
          this.cart.shippingCost = item.product.quantity * this.cart.shippingCost;
          this.cart.cartTotal = this.cart.subTotal - this.cart.flatRate + this.cart.shippingCost;
        }
      }]);

      return CartComponent;
    }();

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.css":
  /*!*************************************************!*\
    !*** ./src/app/checkout/checkout.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/cart */
    "./src/app/models/cart.ts");
    /* harmony import */


    var _models_CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/CartItem */
    "./src/app/models/CartItem.ts");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent() {
        _classCallCheck(this, CheckoutComponent);
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.cart = new _models_cart__WEBPACK_IMPORTED_MODULE_3__["Cart"](1, [], 0, 0, 0);
          this.getCartItems().forEach(function (element) {
            var itemTotal = element.quantity * element.price;
            var cartItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](element.id, element, itemTotal);

            _this4.cart.cartItems.push(cartItem);
          });
          this.getCartShippingCost();
          this.getCartSubTotal();
          this.getCartTotal();
          var cartEmty = this.cart.cartItems.length;

          if (cartEmty === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Your Cart Is Empty',
              imageUrl: './../../assets/img/emptycart.png',
              imageWidth: 400,
              imageHeight: 300,
              text: name,
              footer: '<a href="">Lets Shopping</a>'
            });
          }
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return JSON.parse(localStorage.getItem('Items'));
        }
      }, {
        key: "getCartShippingCost",
        value: function getCartShippingCost() {
          var data = JSON.parse(localStorage.getItem('cartShipping'));

          if (data) {
            this.cart.shippingCost = data;
          }
        }
      }, {
        key: "getCartSubTotal",
        value: function getCartSubTotal() {
          var data = JSON.parse(localStorage.getItem('cartSubTotal'));

          if (data) {
            this.cart.subTotal = data;
          }
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal() {
          var data = JSON.parse(localStorage.getItem('CartTotal'));

          if (data) {
            this.cart.cartTotal = data;
          }
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.css */
      "./src/app/checkout/checkout.component.css"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/home-image-slider/home-image-slider.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/shared/home-image-slider/home-image-slider.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHomeImageSliderHomeImageSliderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nimg {\r\n    max-width: 80%;\r\n  }\r\n  \r\n  .container {\r\n    height:100%;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .img-container {\r\n    position: absolute;\r\n    left: 0;\r\n    opacity: 0;\r\n    height: auto !important;\r\n    background-size: cover;\r\n    background-position: center;\r\n    will-change: opacity;\r\n    transition: opacity .3s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .slide-button:hover, .slide-button-select {\r\n    width: 64px !important;\r\n    background-color: rgba(255,255,255,1) !important;\r\n    pointer-events: none;\r\n    transition: background-color .4s, width 4s cubic-bezier(0.190, 1.000, 0.220, 1.000) !important;\r\n  }\r\n  \r\n  .slide-button {\r\n    width: 30px;\r\n    height: 4px;\r\n    background-color: rgba(255,255,255,.5);\r\n    cursor: pointer;\r\n    position: absolute;\r\n  \r\n  }\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 80px;\r\n    opacity: 1;\r\n    min-width: 30px;\r\n  \r\n  }\r\n  \r\n  .slide-button-parent-container {\r\n    position: relative;\r\n    margin: 22px 0;\r\n    min-height: 4px;\r\n  }\r\n  \r\n  .select-box {\r\n    min-height: 10px;\r\n  }\r\n  \r\n  .text-container {\r\n  \r\n    height: 100vh;\r\n    justify-content: center;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .page-text {\r\n    min-height: 373px;\r\n    width: 50%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    font-weight: 300;\r\n    font-size: 90px;\r\n    color: white;\r\n  }\r\n  \r\n  .selected {\r\n    opacity: 1;\r\n    transition: 1s;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaG9tZS1pbWFnZS1zbGlkZXIvaG9tZS1pbWFnZS1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFJQTtJQUNFLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLDhGQUE4RjtFQUNoRzs7RUFHQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7O0VBRWpCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hvbWUtaW1hZ2Utc2xpZGVyL2hvbWUtaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuc2xpZGUtYnV0dG9uOmhvdmVyLCAuc2xpZGUtYnV0dG9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKSAhaW1wb3J0YW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC40cywgd2lkdGggNHMgY3ViaWMtYmV6aWVyKDAuMTkwLCAxLjAwMCwgMC4yMjAsIDEuMDAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2xpZGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWJ1dHRvbi1wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjJweCAwO1xyXG4gICAgbWluLWhlaWdodDogNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0LWJveCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1jb250YWluZXIge1xyXG4gIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAucGFnZS10ZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDM3M3B4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0ZWQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gIH1cclxuICBcclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/home-image-slider/home-image-slider.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/shared/home-image-slider/home-image-slider.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HomeImageSliderComponent */

  /***/
  function srcAppComponentsSharedHomeImageSliderHomeImageSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeImageSliderComponent", function () {
      return HomeImageSliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_image_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/image-slider.service */
    "./src/app/service/image-slider.service.ts");

    var HomeImageSliderComponent = /*#__PURE__*/function () {
      function HomeImageSliderComponent(data) {
        _classCallCheck(this, HomeImageSliderComponent);

        this.data = data;
        this.selectedIndex = 0;
        this.sliderArray = [];
        this.selectedIndex = 0;
        this.transform = 100;
      }

      _createClass(HomeImageSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.data.getData().subscribe(function (result) {
            _this5.sliderArray = result.sliderArray;
          });
        }
      }, {
        key: "selected",
        value: function selected(x) {
          this.downSelected(x);
          this.selectedIndex = x;
        }
      }, {
        key: "keySelected",
        value: function keySelected(x) {
          this.downSelected(x);
          this.selectedIndex = x;
        }
      }, {
        key: "downSelected",
        value: function downSelected(i) {
          this.transform = 100 - i * 50;
          this.selectedIndex = this.selectedIndex + 1;

          if (this.selectedIndex > 4) {
            this.selectedIndex = 0;
          }
        }
      }]);

      return HomeImageSliderComponent;
    }();

    HomeImageSliderComponent.ctorParameters = function () {
      return [{
        type: src_app_service_image_slider_service__WEBPACK_IMPORTED_MODULE_2__["ImageSliderDataService"]
      }];
    };

    HomeImageSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-image-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-image-slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/home-image-slider/home-image-slider.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-image-slider.component.css */
      "./src/app/components/shared/home-image-slider/home-image-slider.component.css"))["default"]]
    })], HomeImageSliderComponent);
    /***/
  },

  /***/
  "./src/app/customer-account-account-details/customer-account-account-details.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/customer-account-account-details/customer-account-account-details.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerAccountAccountDetailsCustomerAccountAccountDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQtYWNjb3VudC1kZXRhaWxzL2N1c3RvbWVyLWFjY291bnQtYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer-account-account-details/customer-account-account-details.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/customer-account-account-details/customer-account-account-details.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: CustomerAccountAccountDetailsComponent */

  /***/
  function srcAppCustomerAccountAccountDetailsCustomerAccountAccountDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAccountAccountDetailsComponent", function () {
      return CustomerAccountAccountDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var CustomerAccountAccountDetailsComponent = /*#__PURE__*/function () {
      function CustomerAccountAccountDetailsComponent(formBuilder) {
        _classCallCheck(this, CustomerAccountAccountDetailsComponent);

        this.formBuilder = formBuilder;
        this.name = "Ravindu";
        this.birthday = "1998/09/15";
        this.email = "ravindu@gmail.com";
        this.mobile = "0763468331";
        this.gender = "male";
        this.show = false;
        this.buttonName = 'EDIT PROFILE';
        this.submitted = false;
      }

      _createClass(CustomerAccountAccountDetailsComponent, [{
        key: "showk",
        value: function showk() {
          this.showModal = true; // Show-Hide Modal Check
        } //Bootstrap Modal Close event

      }, {
        key: "hide",
        value: function hide() {
          this.showModal = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confermPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          if (this.submitted) {
            this.showModal = false;
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.show = !this.show; // CHANGE THE NAME OF THE BUTTON.

          if (this.show) this.buttonName = "SAVE CHANGES";else this.buttonName = "EDIT PROFILE";
        }
      }, {
        key: "passwordChange",
        value: function passwordChange() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Password Changed!',
            icon: 'success',
            text: 'Your password changed succesfully'
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return CustomerAccountAccountDetailsComponent;
    }();

    CustomerAccountAccountDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CustomerAccountAccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-account-account-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-account-account-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-account-details/customer-account-account-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-account-account-details.component.css */
      "./src/app/customer-account-account-details/customer-account-account-details.component.css"))["default"]]
    })], CustomerAccountAccountDetailsComponent);
    /***/
  },

  /***/
  "./src/app/customer-account-payment-options/customer-account-payment-options.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/customer-account-payment-options/customer-account-payment-options.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerAccountPaymentOptionsCustomerAccountPaymentOptionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQtcGF5bWVudC1vcHRpb25zL2N1c3RvbWVyLWFjY291bnQtcGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer-account-payment-options/customer-account-payment-options.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/customer-account-payment-options/customer-account-payment-options.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: CustomerAccountPaymentOptionsComponent */

  /***/
  function srcAppCustomerAccountPaymentOptionsCustomerAccountPaymentOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAccountPaymentOptionsComponent", function () {
      return CustomerAccountPaymentOptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerAccountPaymentOptionsComponent = /*#__PURE__*/function () {
      function CustomerAccountPaymentOptionsComponent() {
        _classCallCheck(this, CustomerAccountPaymentOptionsComponent);
      }

      _createClass(CustomerAccountPaymentOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerAccountPaymentOptionsComponent;
    }();

    CustomerAccountPaymentOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-account-payment-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-account-payment-options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-payment-options/customer-account-payment-options.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-account-payment-options.component.css */
      "./src/app/customer-account-payment-options/customer-account-payment-options.component.css"))["default"]]
    })], CustomerAccountPaymentOptionsComponent);
    /***/
  },

  /***/
  "./src/app/customer-account-reviews/customer-account-reviews.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/customer-account-reviews/customer-account-reviews.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerAccountReviewsCustomerAccountReviewsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQtcmV2aWV3cy9jdXN0b21lci1hY2NvdW50LXJldmlld3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer-account-reviews/customer-account-reviews.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/customer-account-reviews/customer-account-reviews.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CustomerAccountReviewsComponent */

  /***/
  function srcAppCustomerAccountReviewsCustomerAccountReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAccountReviewsComponent", function () {
      return CustomerAccountReviewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerAccountReviewsComponent = /*#__PURE__*/function () {
      function CustomerAccountReviewsComponent() {
        _classCallCheck(this, CustomerAccountReviewsComponent);
      }

      _createClass(CustomerAccountReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerAccountReviewsComponent;
    }();

    CustomerAccountReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-account-reviews',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-account-reviews.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-reviews/customer-account-reviews.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-account-reviews.component.css */
      "./src/app/customer-account-reviews/customer-account-reviews.component.css"))["default"]]
    })], CustomerAccountReviewsComponent);
    /***/
  },

  /***/
  "./src/app/customer-account-wishlist/customer-account-wishlist.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/customer-account-wishlist/customer-account-wishlist.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerAccountWishlistCustomerAccountWishlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQtd2lzaGxpc3QvY3VzdG9tZXItYWNjb3VudC13aXNobGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer-account-wishlist/customer-account-wishlist.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/customer-account-wishlist/customer-account-wishlist.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CustomerAccountWishlistComponent */

  /***/
  function srcAppCustomerAccountWishlistCustomerAccountWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAccountWishlistComponent", function () {
      return CustomerAccountWishlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CustomerAccountWishlistComponent = /*#__PURE__*/function () {
      function CustomerAccountWishlistComponent() {
        _classCallCheck(this, CustomerAccountWishlistComponent);

        this.flatRate = 0;
        this.shoppingCart = [];
      }

      _createClass(CustomerAccountWishlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].resourcesBaseUrl;

          if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(JSON.parse(localStorage.getItem('Items')))) {
            var _JSON$parse, _JSON$parse2;

            this.shoppingCart = (_JSON$parse = JSON.parse(localStorage.getItem('Items')), _JSON$parse2 = _toArray(_JSON$parse), _JSON$parse);
          }

          this.cartData = this.getData();
          this.calcCartTotal();

          if (this.cartData != null && this.cartData.length === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Your Whishlist Is Empty',
              imageUrl: './../../assets/img/emptycart.png',
              imageWidth: 400,
              imageHeight: 300,
              text: name,
              footer: '<a href="">Lets Shopping</a>'
            });
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          return JSON.parse(localStorage.getItem('WishlistItems'));
        }
      }, {
        key: "removeData",
        value: function removeData(id, image, name) {
          var _this6 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure want to remove ' + name,
            imageUrl: this.resourcesBaseUrl + image[0],
            imageWidth: 200,
            imageHeight: 200,
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              for (var i = 0; i < _this6.cartData.length; i++) {
                if (_this6.cartData[i].id === id) {
                  _this6.cartData.splice(i, 1);

                  console.log('Item removed!');
                }
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your item has been removed.', 'success');
            }
          });
        }
      }, {
        key: "updateCart",
        value: function updateCart() {
          var _this7 = this;

          this.cartTotal = 0;
          this.cartData.forEach(function (item) {
            _this7.cartTotal += item.quantity * item.price;
          });
          localStorage.setItem('WishlistItems', JSON.stringify(this.cartData));
          localStorage.setItem('WishlistTotal', JSON.stringify(this.cartTotal));
          localStorage.setItem('WishlistQuantity', JSON.stringify(this.cartData.length));
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            icon: 'success',
            title: 'Cart Updated...',
            text: 'Your cart has been updated!'
          });
        }
      }, {
        key: "calcCartTotal",
        value: function calcCartTotal() {
          var _this8 = this;

          if (this.cartData != null) {
            this.cartTotal = 0;
            this.cartData.forEach(function (item) {
              _this8.cartTotal += item.quantity * item.price;
            });
          }
        }
      }, {
        key: "addTocart",
        value: function addTocart(f) {
          var productExists = false;

          for (var i in this.shoppingCart) {
            if (this.shoppingCart[i].id === f.id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You alredy added to cart!',
                footer: '<a href="/cart">View cart</a>'
              });
              productExists = true;
              return 0;
            }
          }

          if (!productExists) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'One Item Added To cart',
              icon: 'success',
              imageUrl: this.resourcesBaseUrl + f.attachment[0],
              imageWidth: 200,
              imageHeight: 200,
              text: f.product_name,
              footer: '<a href="/cart">View cart</a>'
            });
            this.shoppingCart.push({
              id: f.id,
              product_name: f.product_name,
              quantity: 1,
              attachment: f.attachment,
              price: f.price
            });
          }

          localStorage.setItem('Items', JSON.stringify(this.shoppingCart));
        }
      }]);

      return CustomerAccountWishlistComponent;
    }();

    CustomerAccountWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-account-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-account-wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account-wishlist/customer-account-wishlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-account-wishlist.component.css */
      "./src/app/customer-account-wishlist/customer-account-wishlist.component.css"))["default"]]
    })], CustomerAccountWishlistComponent);
    /***/
  },

  /***/
  "./src/app/customer-account/customer-account.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/customer-account/customer-account.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerAccountCustomerAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQvY3VzdG9tZXItYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer-account/customer-account.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer-account/customer-account.component.ts ***!
    \****************************************************************/

  /*! exports provided: CustomerAccountComponent */

  /***/
  function srcAppCustomerAccountCustomerAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAccountComponent", function () {
      return CustomerAccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerAccountComponent = /*#__PURE__*/function () {
      function CustomerAccountComponent() {
        _classCallCheck(this, CustomerAccountComponent);
      }

      _createClass(CustomerAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerAccountComponent;
    }();

    CustomerAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-account/customer-account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-account.component.css */
      "./src/app/customer-account/customer-account.component.css"))["default"]]
    })], CustomerAccountComponent);
    /***/
  },

  /***/
  "./src/app/direct-inquiry/direct-inquiry.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/direct-inquiry/direct-inquiry.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDirectInquiryDirectInquiryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".owl-thumb {    \r\n  width: 170px;\r\n  height: 120px;\r\n  background-size: cover;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  border: 2px solid lightgray;\r\n  margin-top: 4px;\r\n}\r\n\r\n.main-image-big {\r\n  width: 100%;\r\n  height: 250px;\r\n  background-size: cover;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  border: 1px solid lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0LWlucXVpcnkvZGlyZWN0LWlucXVpcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kaXJlY3QtaW5xdWlyeS9kaXJlY3QtaW5xdWlyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm93bC10aHVtYiB7ICAgIFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlLWJpZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/direct-inquiry/direct-inquiry.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/direct-inquiry/direct-inquiry.component.ts ***!
    \************************************************************/

  /*! exports provided: DirectInquiryComponent */

  /***/
  function srcAppDirectInquiryDirectInquiryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectInquiryComponent", function () {
      return DirectInquiryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/messangerInquiry.service */
    "./src/app/service/messangerInquiry.service.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var DirectInquiryComponent = /*#__PURE__*/function () {
      function DirectInquiryComponent(productService, route, msgi, service) {
        _classCallCheck(this, DirectInquiryComponent);

        this.productService = productService;
        this.route = route;
        this.msgi = msgi;
        this.service = service;
        this.oneProduct = {};
        this.customOptions = {
          loop: false,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          navText: ['', ''],
          responsive: {
            0: {
              items: 0
            },
            400: {
              items: 3
            },
            740: {
              items: 4
            },
            940: {
              items: 4
            }
          },
          nav: false
        };
      }

      _createClass(DirectInquiryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].resourcesBaseUrl;
          this.isLoading = true;
          this.route.params.subscribe(function (params) {
            _this9.id = params.id;
          });
          this.productService.getProduct(this.id).subscribe(function (res) {
            _this9.oneProduct = res.data;
            _this9.isLoading = false;
          });
        }
      }, {
        key: "handleAddToCart",
        value: function handleAddToCart(image, name) {
          var currentQty = localStorage.getItem('InquiryQuantity');
          var newQty = Number.parseInt(currentQty, 10) + 1;

          if (currentQty != null) {
            localStorage.setItem('InquiryQuantity', JSON.stringify(newQty));
          } else {
            localStorage.setItem('InquiryQuantity', JSON.stringify(1));
          }

          this.msgi.sendMsgInquiry(this.oneProduct);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'One Item Added',
            icon: 'success',
            imageUrl: this.resourcesBaseUrl + image[0],
            imageWidth: 200,
            imageHeight: 200,
            text: name,
            footer: '<a href="/inquirycart">View Inquiry</a>'
          });
        }
      }]);

      return DirectInquiryComponent;
    }();

    DirectInquiryComponent.ctorParameters = function () {
      return [{
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_4__["MessangerInquiryService"]
      }, {
        type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }];
    };

    DirectInquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-direct-inquiry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./direct-inquiry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/direct-inquiry/direct-inquiry.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./direct-inquiry.component.css */
      "./src/app/direct-inquiry/direct-inquiry.component.css"))["default"]]
    })], DirectInquiryComponent);
    /***/
  },

  /***/
  "./src/app/featured-products/featured-products.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/featured-products/featured-products.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturedProductsFeaturedProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto;\r\n    grid-gap: 40px;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/featured-products/featured-products.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/featured-products/featured-products.component.ts ***!
    \******************************************************************/

  /*! exports provided: FeaturedProductsComponent */

  /***/
  function srcAppFeaturedProductsFeaturedProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function () {
      return FeaturedProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/service/product.service.ts");

    var FeaturedProductsComponent = /*#__PURE__*/function () {
      function FeaturedProductsComponent(productService) {
        _classCallCheck(this, FeaturedProductsComponent);

        this.productService = productService;
        this.featuredProducts = [];
      }

      _createClass(FeaturedProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoading = true;
          this.getProducts();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this10 = this;

          this.productService.getFeaturedProducts().subscribe(function (featuredProducts) {
            _this10.featuredProducts = featuredProducts.data;
            _this10.isLoading = false;
          });
        }
      }]);

      return FeaturedProductsComponent;
    }();

    FeaturedProductsComponent.ctorParameters = function () {
      return [{
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    FeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-featured-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./featured-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-products/featured-products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./featured-products.component.css */
      "./src/app/featured-products/featured-products.component.css"))["default"]]
    })], FeaturedProductsComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/inquery-checkout/inquery-checkout.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/inquery-checkout/inquery-checkout.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInqueryCheckoutInqueryCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucXVlcnktY2hlY2tvdXQvaW5xdWVyeS1jaGVja291dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inquery-checkout/inquery-checkout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/inquery-checkout/inquery-checkout.component.ts ***!
    \****************************************************************/

  /*! exports provided: InqueryCheckoutComponent */

  /***/
  function srcAppInqueryCheckoutInqueryCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InqueryCheckoutComponent", function () {
      return InqueryCheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/cart */
    "./src/app/models/cart.ts");
    /* harmony import */


    var _models_CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/CartItem */
    "./src/app/models/CartItem.ts");

    var InqueryCheckoutComponent = /*#__PURE__*/function () {
      function InqueryCheckoutComponent() {
        _classCallCheck(this, InqueryCheckoutComponent);
      }

      _createClass(InqueryCheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.cart = new _models_cart__WEBPACK_IMPORTED_MODULE_3__["Cart"](1, [], 0, 0, 0);
          this.getCartItems().forEach(function (element) {
            var itemTotal = element.quantity * element.price;
            var cartItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](element.id, element, itemTotal);

            _this11.cart.cartItems.push(cartItem);
          });
          this.getCartSubTotal();
          this.getCartTotal();
          var cartEmty = this.cart.cartItems.length;

          if (cartEmty === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Your Cart Is Empty',
              imageUrl: './../../assets/img/emptycart.png',
              imageWidth: 400,
              imageHeight: 300,
              text: name,
              footer: '<a href="">Lets Shopping</a>'
            });
          }
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return JSON.parse(localStorage.getItem('InquiryItems'));
        }
      }, {
        key: "getCartSubTotal",
        value: function getCartSubTotal() {
          var data = JSON.parse(localStorage.getItem('InquirySubTotal'));

          if (data) {
            this.cart.subTotal = data;
          }
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal() {
          var data = JSON.parse(localStorage.getItem('InquiryTotal'));

          if (data) {
            this.cart.cartTotal = data;
          }
        }
      }]);

      return InqueryCheckoutComponent;
    }();

    InqueryCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inquery-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inquery-checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inquery-checkout/inquery-checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inquery-checkout.component.css */
      "./src/app/inquery-checkout/inquery-checkout.component.css"))["default"]]
    })], InqueryCheckoutComponent);
    /***/
  },

  /***/
  "./src/app/inquiry-cart-view/inquiry-cart-view.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/inquiry-cart-view/inquiry-cart-view.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInquiryCartViewInquiryCartViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucXVpcnktY2FydC12aWV3L2lucXVpcnktY2FydC12aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/inquiry-cart-view/inquiry-cart-view.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/inquiry-cart-view/inquiry-cart-view.component.ts ***!
    \******************************************************************/

  /*! exports provided: InquiryCartViewComponent */

  /***/
  function srcAppInquiryCartViewInquiryCartViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InquiryCartViewComponent", function () {
      return InquiryCartViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/cart */
    "./src/app/models/cart.ts");
    /* harmony import */


    var _models_CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/CartItem */
    "./src/app/models/CartItem.ts");

    var InquiryCartViewComponent = /*#__PURE__*/function () {
      function InquiryCartViewComponent() {
        _classCallCheck(this, InquiryCartViewComponent);

        this.flatRate = 0;
      }

      _createClass(InquiryCartViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resourcesBaseUrl;
          this.inqueryCart = new _models_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"](1, [], 0, 0, 0);
          var inqueryItems = this.getInqueryItems();

          if (inqueryItems != null && inqueryItems.length === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Your Inquery Cart Is Empty',
              imageUrl: './../../assets/img/emptycart.png',
              imageWidth: 400,
              imageHeight: 300,
              text: name,
              footer: '<a href="">Lets Shopping</a>'
            });
          } else {
            inqueryItems.forEach(function (element) {
              var itemTotal = element.quantity * element.price;
              var cartItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_5__["CartItem"](element.id, element, itemTotal);

              _this12.inqueryCart.cartItems.push(cartItem);

              _this12.inqueryCart.subTotal += cartItem.itemTotal;

              _this12.calcCartTotal(cartItem);
            });
            this.getCartSubTotal();
            this.getCartTotal();
          }
        }
      }, {
        key: "getInqueryItems",
        value: function getInqueryItems() {
          return JSON.parse(localStorage.getItem('InquiryItems'));
        }
      }, {
        key: "getCartSubTotal",
        value: function getCartSubTotal() {
          var data = JSON.parse(localStorage.getItem('cartSubTotal'));

          if (data && data > 0) {
            this.inqueryCart.subTotal = data;
          }
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal() {
          var data = JSON.parse(localStorage.getItem('CartTotal'));

          if (data && data > 0) {
            this.inqueryCart.cartTotal = data;
          }
        }
      }, {
        key: "removeData",
        value: function removeData(prod, image, name) {
          var _this13 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure want to remove ' + name,
            imageUrl: this.resourcesBaseUrl + image[0],
            imageWidth: 200,
            imageHeight: 200,
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              var index = _this13.inqueryCart.cartItems.indexOf(prod, 0);

              if (index > -1) {
                var removedItem = _this13.inqueryCart.cartItems.splice(index, 1);

                _this13.updateCart();

                _this13.inqueryCart.subTotal -= removedItem[0].itemTotal;
                _this13.inqueryCart.cartTotal -= removedItem[0].itemTotal;
                localStorage.setItem('InquiryQuantity', JSON.stringify(removedItem[0].product.quantity));
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your item has been removed.', 'success');
            }
          });
        }
      }, {
        key: "updateCart",
        value: function updateCart() {
          localStorage.setItem('InquirySubTotal', JSON.stringify(this.inqueryCart.subTotal));
          localStorage.setItem('InquiryTotal', JSON.stringify(this.inqueryCart.cartTotal));
          var tempArr = [];
          this.inqueryCart.cartItems.forEach(function (element) {
            tempArr.push(element.product);
          });
          localStorage.setItem('InquiryItems', JSON.stringify(tempArr)); // Swal.fire({
          //   icon: 'success',
          //   title: 'Cart Updated...',
          //   text: 'Your cart has been updated!',
          // });
        }
      }, {
        key: "addQty",
        value: function addQty(productId) {
          var item = this.inqueryCart.cartItems.find(function (it) {
            return it.id === productId;
          });

          if (item.product.quantity >= 1) {
            item.product.quantity++;
            item.itemTotal += item.product.price;
            this.inqueryCart.subTotal += item.product.price;
            this.calcCartTotal(item);
            this.updateCart();
            localStorage.setItem('InquiryQuantity', JSON.stringify(item.product.quantity));
          }
        }
      }, {
        key: "subtractQty",
        value: function subtractQty(productId) {
          var item = this.inqueryCart.cartItems.find(function (it) {
            return it.id === productId;
          });

          if (item.product.quantity > 1) {
            item.product.quantity--;
            item.itemTotal -= item.product.price;
            this.inqueryCart.subTotal -= item.product.price;
            this.calcCartTotal(item);
            this.updateCart();
            localStorage.setItem('InquiryQuantity', JSON.stringify(item.product.quantity));
          }
        }
      }, {
        key: "calcCartTotal",
        value: function calcCartTotal(item) {
          this.inqueryCart.flatRate = this.inqueryCart.flatRate * item.product.quantity;
          this.inqueryCart.shippingCost = item.product.quantity * this.inqueryCart.shippingCost;
          this.inqueryCart.cartTotal = this.inqueryCart.subTotal - this.inqueryCart.flatRate + this.inqueryCart.shippingCost;
        }
      }]);

      return InquiryCartViewComponent;
    }();

    InquiryCartViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inquiry-cart-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inquiry-cart-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart-view/inquiry-cart-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inquiry-cart-view.component.css */
      "./src/app/inquiry-cart-view/inquiry-cart-view.component.css"))["default"]]
    })], InquiryCartViewComponent);
    /***/
  },

  /***/
  "./src/app/inquiry-cart/inquiry-cart.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/inquiry-cart/inquiry-cart.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInquiryCartInquiryCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucXVpcnktY2FydC9pbnF1aXJ5LWNhcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/inquiry-cart/inquiry-cart.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/inquiry-cart/inquiry-cart.component.ts ***!
    \********************************************************/

  /*! exports provided: InquiryCartComponent */

  /***/
  function srcAppInquiryCartInquiryCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InquiryCartComponent", function () {
      return InquiryCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/messangerInquiry.service */
    "./src/app/service/messangerInquiry.service.ts");
    /* harmony import */


    var _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/cart-items.service */
    "./src/app/service/cart-items.service.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var InquiryCartComponent = /*#__PURE__*/function () {
      function InquiryCartComponent(msgi, cartItemService) {
        _classCallCheck(this, InquiryCartComponent);

        this.msgi = msgi;
        this.cartItemService = cartItemService;
        this.cartItems = [];
      }

      _createClass(InquiryCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].resourcesBaseUrl;

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(JSON.parse(localStorage.getItem('InquiryItems')))) {
            var _JSON$parse3, _JSON$parse4;

            this.cartItems = (_JSON$parse3 = JSON.parse(localStorage.getItem('InquiryItems')), _JSON$parse4 = _toArray(_JSON$parse3), _JSON$parse3);
          }

          this.msgi.getMsgInquiry().subscribe(function (product) {
            _this14.addProductToCart(product);
          });
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          var productExists = false;

          for (var i in this.cartItems) {
            if (this.cartItems[i].id === product.id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You alredy added to inquiry!',
                footer: '<a href>Why do I have this issue?</a>'
              });
              productExists = true;
              return 0;
            }
          }

          if (!productExists) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(JSON.parse(localStorage.getItem('InquiryItems')))) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'One Item Added To Inquiry',
                icon: 'success',
                imageUrl: "http://127.0.0.1:8000/storage/".concat(product.attachment[0]),
                imageWidth: 200,
                imageHeight: 200,
                text: product.product_name,
                footer: '<a href="/inquirycart">View Inquiry</a>'
              });
              this.cartItems.push({
                id: product.id,
                product_name: product.product_name,
                quantity: 1,
                imageUrl: product.attachment,
                price: product.price
              });
            } else if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(JSON.parse(localStorage.getItem('InquiryItems')))) {
              //  if(this.cartItems[0].supplier == product.supplier){
              if (this.cartItems[0] !== null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'One Item Added To Inquiry',
                  icon: 'success',
                  imageUrl: this.resourcesBaseUrl + product.attachment[0],
                  imageWidth: 200,
                  imageHeight: 200,
                  text: product.product_name,
                  footer: '<a href="/inquirycart">View Inquiry</a>'
                });
                this.cartItems.push({
                  id: product.id,
                  product_name: product.product_name,
                  quantity: 1,
                  attachment: product.attachment,
                  price: product.price,
                  supplier: product.supplier
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Faield To Add Product',
                  icon: 'error',
                  text: 'You can only add one supplier\'s products at one time.Pleace finish the deal or clear the inquiry to add this product',
                  imageUrl: "http://127.0.0.1:8000/storage/".concat(product.attachment[0]),
                  imageWidth: 200,
                  imageHeight: 200,
                  footer: '<a href="/inquirycart">View Inquiry</a>'
                });
              }
            }
          }

          localStorage.setItem('InquiryItems', JSON.stringify(this.cartItems));
          localStorage.setItem('SupplierName', JSON.stringify(product.supplier));
          localStorage.setItem('InquiryQuantity', JSON.stringify(this.cartItems.length));
        }
      }, {
        key: "whenUpdateQty",
        value: function whenUpdateQty(qty, total) {
          this.productTotal = total * qty;
        }
      }]);

      return InquiryCartComponent;
    }();

    InquiryCartComponent.ctorParameters = function () {
      return [{
        type: _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_2__["MessangerInquiryService"]
      }, {
        type: _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__["CartItemsService"]
      }];
    };

    InquiryCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inquiry-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inquiry-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inquiry-cart/inquiry-cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inquiry-cart.component.css */
      "./src/app/inquiry-cart/inquiry-cart.component.css"))["default"]]
    })], InquiryCartComponent);
    /***/
  },

  /***/
  "./src/app/item/item.component.css":
  /*!*****************************************!*\
    !*** ./src/app/item/item.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/item/item.component.ts":
  /*!****************************************!*\
    !*** ./src/app/item/item.component.ts ***!
    \****************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_messanger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/messanger.service */
    "./src/app/service/messanger.service.ts");
    /* harmony import */


    var _service_messengerWishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/messengerWishlist.service */
    "./src/app/service/messengerWishlist.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/messangerInquiry.service */
    "./src/app/service/messangerInquiry.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent(msg, msgw, msgi) {
        _classCallCheck(this, ItemComponent);

        this.msg = msg;
        this.msgw = msgw;
        this.msgi = msgi;
        this.isButtonVisible1 = true;
        this.isButtonVisible2 = false;
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].resourcesBaseUrl;
          this.displayButton();
        }
      }, {
        key: "handleAddToCart",
        value: function handleAddToCart(name, image) {
          this.msg.sendMsg(this.productItem);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'One Item Added To Cart',
            icon: 'success',
            imageUrl: image,
            imageWidth: 200,
            imageHeight: 200,
            text: name,
            footer: '<a href="/cart">View Cart</a>'
          });
        }
      }, {
        key: "handleAddToWishlist",
        value: function handleAddToWishlist() {
          this.msgw.sendMsgWishlist(this.productItem);
        }
      }, {
        key: "handleAddToInquiry",
        value: function handleAddToInquiry() {
          this.msgi.sendMsgInquiry(this.productItem);
        }
      }, {
        key: "displayButton",
        value: function displayButton() {
          if (this.productItem.supplier === 'AV') {
            this.isButtonVisible1 = true;
            this.isButtonVisible2 = false;
          }

          if (this.productItem.supplier !== 'AV') {
            this.isButtonVisible1 = false;
            this.isButtonVisible2 = true;
          }
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ctorParameters = function () {
      return [{
        type: _service_messanger_service__WEBPACK_IMPORTED_MODULE_2__["MessangerService"]
      }, {
        type: _service_messengerWishlist_service__WEBPACK_IMPORTED_MODULE_3__["MessangerWishlistService"]
      }, {
        type: _service_messangerInquiry_service__WEBPACK_IMPORTED_MODULE_5__["MessangerInquiryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemComponent.prototype, "productItem", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.component.css */
      "./src/app/item/item.component.css"))["default"]]
    })], ItemComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/CartItem.ts":
  /*!************************************!*\
    !*** ./src/app/models/CartItem.ts ***!
    \************************************/

  /*! exports provided: CartItem */

  /***/
  function srcAppModelsCartItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItem", function () {
      return CartItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CartItem = function CartItem(id, product, itemTotal) {
      _classCallCheck(this, CartItem);

      this.id = id;
      this.product = product;
      this.itemTotal = itemTotal;
    };
    /***/

  },

  /***/
  "./src/app/models/cart.ts":
  /*!********************************!*\
    !*** ./src/app/models/cart.ts ***!
    \********************************/

  /*! exports provided: Cart */

  /***/
  function srcAppModelsCartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Cart = function Cart(id, cartItems, subTotal, shippingCost, flatRate) {
      _classCallCheck(this, Cart);

      this.id = id;
      this.cartItems = cartItems;
      this.subTotal = subTotal;
      this.shippingCost = shippingCost;
      this.flatRate = flatRate;
      this.cartTotal = subTotal - flatRate + shippingCost;
    };
    /***/

  },

  /***/
  "./src/app/privacy-policy/privacy-policy.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/privacy-policy/privacy-policy.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
    \************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyComponent = /*#__PURE__*/function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.component.css */
      "./src/app/privacy-policy/privacy-policy.component.css"))["default"]]
    })], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/product-detail/product-detail.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailProductDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".owl-thumb {    \r\n  width: 170px;\r\n  height: 120px;\r\n  background-size: cover;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  border: 2px solid lightgray;\r\n  margin-top: 4px;\r\n}\r\n\r\n.main-image-big {\r\n  width: 100%;\r\n  height: 250px;\r\n  background-size: cover;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  border: 1px solid lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm93bC10aHVtYiB7ICAgIFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlLWJpZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/product-detail/product-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_messanger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/messanger.service */
    "./src/app/service/messanger.service.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ProductDetailComponent = /*#__PURE__*/function () {
      function ProductDetailComponent(productService, route, msg, service) {
        _classCallCheck(this, ProductDetailComponent);

        this.productService = productService;
        this.route = route;
        this.msg = msg;
        this.service = service;
        this.oneProduct = {};
        this.customOptions = {
          loop: false,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          navText: ['', ''],
          responsive: {
            0: {
              items: 0
            },
            400: {
              items: 3
            },
            740: {
              items: 4
            },
            940: {
              items: 4
            }
          },
          nav: false
        };
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].resourcesBaseUrl;
          this.isLoading = true;
          this.route.params.subscribe(function (params) {
            _this15.id = params.id;
          });
          this.productService.getProduct(this.id).subscribe(function (res) {
            _this15.oneProduct = res.data;
            _this15.isLoading = false;
          });
        }
      }, {
        key: "handleAddToCart",
        value: function handleAddToCart(image, name) {
          var currentQty = localStorage.getItem('quantity');
          var newQty = Number.parseInt(currentQty, 10) + 1;

          if (currentQty != null) {
            localStorage.setItem('quantity', JSON.stringify(newQty));
          } else {
            localStorage.setItem('quantity', JSON.stringify(1));
          }

          this.msg.sendMsg(this.oneProduct);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'One Item Added',
            icon: 'success',
            imageUrl: "http://127.0.0.1:8000/storage/".concat(image),
            imageWidth: 200,
            imageHeight: 200,
            text: name,
            footer: '<a href="/cart">View Cart</a>'
          });
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_messanger_service__WEBPACK_IMPORTED_MODULE_4__["MessangerService"]
      }, {
        type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }];
    };

    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-detail.component.css */
      "./src/app/product-detail/product-detail.component.css"))["default"]]
    })], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "log",
        value: function log(x) {
          console.log(x);
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/service/cart-items.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/cart-items.service.ts ***!
    \***********************************************/

  /*! exports provided: CartItemsService */

  /***/
  function srcAppServiceCartItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemsService", function () {
      return CartItemsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CartItemsService = /*#__PURE__*/function () {
      function CartItemsService() {
        _classCallCheck(this, CartItemsService);
      }

      _createClass(CartItemsService, [{
        key: "addItem",
        value: function addItem(cartItem) {
          var cartItems = [];

          if (localStorage.getItem('Items')) {
            cartItems = JSON.parse(localStorage.getItem('Items'));
            cartItems = [cartItem].concat(_toConsumableArray(cartItems));
          } else {
            cartItems = [cartItem];
          }

          localStorage.setItem('Items', JSON.stringify(cartItems));
        }
      }, {
        key: "getItemFromClass",
        value: function getItemFromClass() {
          return JSON.parse(localStorage.getItem('Items'));
        }
      }, {
        key: "updateCartCount",
        value: function updateCartCount() {
          return JSON.parse(localStorage.getItem('Items'));
        }
      }]);

      return CartItemsService;
    }();

    CartItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartItemsService);
    /***/
  },

  /***/
  "./src/app/service/image-slider.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/image-slider.service.ts ***!
    \*************************************************/

  /*! exports provided: ImageSliderDataService */

  /***/
  function srcAppServiceImageSliderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSliderDataService", function () {
      return ImageSliderDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var URL = '../assets/slider-data.json';

    var ImageSliderDataService = /*#__PURE__*/function () {
      function ImageSliderDataService(http) {
        _classCallCheck(this, ImageSliderDataService);

        this.http = http;
      }

      _createClass(ImageSliderDataService, [{
        key: "getData",
        value: function getData() {
          return this.http.get(URL);
        }
      }]);

      return ImageSliderDataService;
    }();

    ImageSliderDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ImageSliderDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ImageSliderDataService);
    /***/
  },

  /***/
  "./src/app/service/messanger.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/messanger.service.ts ***!
    \**********************************************/

  /*! exports provided: MessangerService */

  /***/
  function srcAppServiceMessangerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessangerService", function () {
      return MessangerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessangerService = /*#__PURE__*/function () {
      function MessangerService() {
        _classCallCheck(this, MessangerService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MessangerService, [{
        key: "sendMsg",
        value: function sendMsg(product) {
          // console.log(product);
          this.subject.next(product); // Triggering an event
        }
      }, {
        key: "getMsg",
        value: function getMsg() {
          return this.subject.asObservable();
        }
      }]);

      return MessangerService;
    }();

    MessangerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessangerService);
    /***/
  },

  /***/
  "./src/app/service/messangerInquiry.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/service/messangerInquiry.service.ts ***!
    \*****************************************************/

  /*! exports provided: MessangerInquiryService */

  /***/
  function srcAppServiceMessangerInquiryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessangerInquiryService", function () {
      return MessangerInquiryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessangerInquiryService = /*#__PURE__*/function () {
      function MessangerInquiryService() {
        _classCallCheck(this, MessangerInquiryService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MessangerInquiryService, [{
        key: "sendMsgInquiry",
        value: function sendMsgInquiry(product) {
          // console.log(product);
          this.subject.next(product); // Triggering an event
        }
      }, {
        key: "getMsgInquiry",
        value: function getMsgInquiry() {
          return this.subject.asObservable();
        }
      }]);

      return MessangerInquiryService;
    }();

    MessangerInquiryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessangerInquiryService);
    /***/
  },

  /***/
  "./src/app/service/messengerWishlist.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/messengerWishlist.service.ts ***!
    \******************************************************/

  /*! exports provided: MessangerWishlistService */

  /***/
  function srcAppServiceMessengerWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessangerWishlistService", function () {
      return MessangerWishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessangerWishlistService = /*#__PURE__*/function () {
      function MessangerWishlistService() {
        _classCallCheck(this, MessangerWishlistService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MessangerWishlistService, [{
        key: "sendMsgWishlist",
        value: function sendMsgWishlist(product) {
          // console.log(product);
          this.subject.next(product); //Triggering an event
        }
      }, {
        key: "getMsgWishlist",
        value: function getMsgWishlist() {
          return this.subject.asObservable();
        }
      }]);

      return MessangerWishlistService;
    }();

    MessangerWishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessangerWishlistService);
    /***/
  },

  /***/
  "./src/app/service/product.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/product.service.ts ***!
    \********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServiceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/observable/of */
    "./node_modules/rxjs/internal/observable/of.js");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
      }

      _createClass(ProductService, [{
        key: "getHeaders",
        value: function getHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          var token = localStorage.getItem('access_token');
          headers = headers.set('Authorization', 'Bearer ' + token);
          return headers;
        }
      }, {
        key: "login",
        value: function login(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          headers = headers.set('Content-Type', 'application/json');
          headers = headers.set('Accept', 'application/json');
          return this.http.post("".concat(this.BASE_URL, "+login"), data, {
            headers: headers
          });
        }
      }, {
        key: "setSession",
        value: function setSession(authResult) {
          console.log(authResult.token);
          var expiresAt = moment__WEBPACK_IMPORTED_MODULE_3__().add(authResult.data.expires_at, 'second');
          localStorage.setItem('access_token', authResult.token);
          localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
          localStorage.setItem('username', authResult.data.username);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('access_token');
          localStorage.removeItem('expires_at');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return moment__WEBPACK_IMPORTED_MODULE_3__().isBefore(this.getExpiration());
        }
      }, {
        key: "isLoggedOut",
        value: function isLoggedOut() {
          return !this.isLoggedIn();
        }
      }, {
        key: "getExpiration",
        value: function getExpiration() {
          var expiration = localStorage.getItem('expires_at');
          var expiresAt = JSON.parse(expiration);
          return moment__WEBPACK_IMPORTED_MODULE_3__(expiresAt);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          headers = this.getHeaders();
          headers = headers.set('Content-Type', 'application/json');
          headers = headers.set('Accept', 'application/json');
          return this.http.get("".concat(this.BASE_URL, "/products"), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
            return console.log('fetched products');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getProducts', [])));
        }
      }, {
        key: "getFeaturedProducts",
        value: function getFeaturedProducts() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          headers = this.getHeaders();
          headers = headers.set('Content-Type', 'application/json');
          headers = headers.set('Accept', 'application/json');
          return this.http.get("".concat(this.BASE_URL, "/products/latest"), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
            return console.log('fetched products');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getProducts', [])));
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          headers = this.getHeaders();
          headers = headers.set('Content-Type', 'application/json');
          headers = headers.set('Accept', 'application/json');
          return this.http.get("".concat(this.BASE_URL, "/products/").concat(id), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
            return console.log('fetched products');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getProducts', null)));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.

            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
          };
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/shared/conferm-equal-validator.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/conferm-equal-validator.directive.ts ***!
    \*************************************************************/

  /*! exports provided: ConfirmEqualValidatorDirective */

  /***/
  function srcAppSharedConfermEqualValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function () {
      return ConfirmEqualValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmEqualValidatorDirective_1;

    var ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = /*#__PURE__*/function () {
      function ConfirmEqualValidatorDirective() {
        _classCallCheck(this, ConfirmEqualValidatorDirective);
      }

      _createClass(ConfirmEqualValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var controlToCompare = control.parent.get(this.appConfirmEqualValidator);

          if (controlToCompare && controlToCompare.value !== control.value) {
            return {
              'notEqual': true
            };
          }

          return null;
        }
      }]);

      return ConfirmEqualValidatorDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[appConfirmEqualValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: ConfirmEqualValidatorDirective_1,
        multi: true
      }]
    })], ConfirmEqualValidatorDirective);
    /***/
  },

  /***/
  "./src/app/shop/shop.component.css":
  /*!*****************************************!*\
    !*** ./src/app/shop/shop.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopShopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShopComponent = /*#__PURE__*/function () {
      function ShopComponent() {
        _classCallCheck(this, ShopComponent);
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopComponent;
    }();

    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shop.component.css */
      "./src/app/shop/shop.component.css"))["default"]]
    })], ShopComponent);
    /***/
  },

  /***/
  "./src/app/shopping-cart/cart-item/cart-item.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/shopping-cart/cart-item/cart-item.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingCartCartItemCartItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shopping-cart/cart-item/cart-item.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shopping-cart/cart-item/cart-item.component.ts ***!
    \****************************************************************/

  /*! exports provided: CartItemComponent */

  /***/
  function srcAppShoppingCartCartItemCartItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemComponent", function () {
      return CartItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CartItemComponent = /*#__PURE__*/function () {
      function CartItemComponent() {
        _classCallCheck(this, CartItemComponent);
      }

      _createClass(CartItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartItemComponent.prototype, "cartItem", void 0);
    CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/cart-item/cart-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-item.component.css */
      "./src/app/shopping-cart/cart-item/cart-item.component.css"))["default"]]
    })], CartItemComponent);
    /***/
  },

  /***/
  "./src/app/shopping-cart/shopping-cart.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingCartShoppingCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shopping-cart/shopping-cart.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoppingCartComponent */

  /***/
  function srcAppShoppingCartShoppingCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
      return ShoppingCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_messanger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/messanger.service */
    "./src/app/service/messanger.service.ts");
    /* harmony import */


    var _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/cart-items.service */
    "./src/app/service/cart-items.service.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);

    var ShoppingCartComponent = /*#__PURE__*/function () {
      function ShoppingCartComponent(msg, cartItemService) {
        _classCallCheck(this, ShoppingCartComponent);

        this.msg = msg;
        this.cartItemService = cartItemService; // cartItems = []=JSON.parse(localStorage.getItem('Items'));

        this.cartItems = [];
        this.cartTotal = 0;
      }

      _createClass(ShoppingCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(JSON.parse(localStorage.getItem('Items')))) {
            var _JSON$parse5, _JSON$parse6;

            this.cartItems = (_JSON$parse5 = JSON.parse(localStorage.getItem('Items')), _JSON$parse6 = _toArray(_JSON$parse5), _JSON$parse5);
          }

          this.msg.getMsg().subscribe(function (product) {
            _this16.addProductToCart(product);
          });
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          var _this17 = this;

          var productExists = false;

          for (var i in this.cartItems) {
            if (this.cartItems[i].id === product.id) {
              this.cartItems[i].quantity++;
              productExists = true;
              break;
            }
          }

          if (!productExists) {
            this.cartItems.push({
              id: product.id,
              product_name: product.product_name,
              quantity: 1,
              attachment: product.attachment,
              price: product.price
            });
          }

          this.cartTotal = 0;
          this.cartItems.forEach(function (item) {
            _this17.cartTotal += item.quantity * item.price;
          });
          localStorage.setItem('Items', JSON.stringify(this.cartItems));
          localStorage.setItem('CartTotal', JSON.stringify(this.cartTotal));
          localStorage.setItem('quantity', JSON.stringify(this.cartItems.length));
        }
      }]);

      return ShoppingCartComponent;
    }();

    ShoppingCartComponent.ctorParameters = function () {
      return [{
        type: _service_messanger_service__WEBPACK_IMPORTED_MODULE_2__["MessangerService"]
      }, {
        type: _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__["CartItemsService"]
      }];
    };

    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-cart.component.css */
      "./src/app/shopping-cart/shopping-cart.component.css"))["default"]]
    })], ShoppingCartComponent);
    /***/
  },

  /***/
  "./src/app/template/footer/footer.component.css":
  /*!******************************************************!*\
    !*** ./src/app/template/footer/footer.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTemplateFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/template/footer/footer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/footer/footer.component.ts ***!
    \*****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppTemplateFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/template/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/template/header/header.component.css":
  /*!******************************************************!*\
    !*** ./src/app/template/header/header.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTemplateHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".visibe_main_menu{\n    display: block\n}\n.hide_main_menu{\n    display: none\n}\n.visible_cart{\n    display: block;\n}\n.hide_cart{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXNpYmVfbWFpbl9tZW51e1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG4uaGlkZV9tYWluX21lbnV7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4udmlzaWJsZV9jYXJ0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGlkZV9jYXJ0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/template/header/header.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/header/header.component.ts ***!
    \*****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppTemplateHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          var menuclass = document.getElementsByClassName('categories_menu_toggle')[0];
          menuclass.classList.add("hide_main_menu");
          this.interval = setInterval(function () {
            _this18.cartData = _this18.getData();
            _this18.totalcartValue = localStorage.getItem('CartTotal');
            _this18.WishlistQuantity = localStorage.getItem('WishlistQuantity');
            _this18.SupplierName = localStorage.getItem('SupplierName');
            _this18.InquryQuantity = localStorage.getItem('InquiryQuantity');
            _this18.quantity = localStorage.getItem('quantity');
          }, 5000);
        }
      }, {
        key: "getData",
        value: function getData() {
          return JSON.parse(localStorage.getItem('WishlistItems'));
        }
      }, {
        key: "visibleMainMenu",
        value: function visibleMainMenu() {
          var menuclass = document.getElementsByClassName('categories_menu_toggle')[0];

          if (menuclass.classList.contains("hide_main_menu")) {
            menuclass.classList.add("visibe_main_menu");
            menuclass.classList.remove("hide_main_menu");
          } else {
            menuclass.classList.remove("visibe_main_menu");
            menuclass.classList.add("hide_main_menu");
          }
        }
      }, {
        key: "visibleSideCart",
        value: function visibleSideCart() {
          var cartclass = document.getElementsByClassName('mini_cart')[0];

          if (cartclass.classList.contains("hide_main_menu")) {
            cartclass.classList.add("visible_cart");
            cartclass.classList.remove("hide_cart");
          } else {
            cartclass.classList.remove("visible_cart");
            cartclass.classList.add("hide_cart");
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/template/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/wishlist-cart/wishlist-cart.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/wishlist-cart/wishlist-cart.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistCartWishlistCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0LWNhcnQvd2lzaGxpc3QtY2FydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/wishlist-cart/wishlist-cart.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/wishlist-cart/wishlist-cart.component.ts ***!
    \**********************************************************/

  /*! exports provided: WishlistCartComponent */

  /***/
  function srcAppWishlistCartWishlistCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistCartComponent", function () {
      return WishlistCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_messengerWishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/messengerWishlist.service */
    "./src/app/service/messengerWishlist.service.ts");
    /* harmony import */


    var _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/cart-items.service */
    "./src/app/service/cart-items.service.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var WishlistCartComponent = /*#__PURE__*/function () {
      function WishlistCartComponent(msgw, cartItemService) {
        _classCallCheck(this, WishlistCartComponent);

        this.msgw = msgw;
        this.cartItemService = cartItemService; //cartItems = []=JSON.parse(localStorage.getItem('Items'));

        this.cartItems = [];
        this.cartTotal = 0;
      }

      _createClass(WishlistCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.resourcesBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].resourcesBaseUrl;

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(JSON.parse(localStorage.getItem('WishlistItems')))) {
            var _JSON$parse7, _JSON$parse8;

            this.cartItems = (_JSON$parse7 = JSON.parse(localStorage.getItem('WishlistItems')), _JSON$parse8 = _toArray(_JSON$parse7), _JSON$parse7);
          }

          this.msgw.getMsgWishlist().subscribe(function (product) {
            _this19.addProductToCart(product);
          });
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          var productExists = false;

          for (var i in this.cartItems) {
            if (this.cartItems[i].id == product.id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You alredy added to wishlist!',
                footer: '<a href>Why do I have this issue?</a>'
              });
              productExists = true;
              return 0;
            }
          }

          if (!productExists) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'One Item Added To Wishlist',
              icon: 'success',
              imageUrl: this.resourcesBaseUrl + product.attachment[0],
              imageWidth: 200,
              imageHeight: 200,
              text: product.product_name,
              footer: '<a href="/cart">View Wishlist</a>'
            });
            this.cartItems.push({
              id: product.id,
              product_name: product.product_name,
              quantity: 1,
              imageUrl: product.attachment,
              price: product.price
            });
          }

          localStorage.setItem('WishlistItems', JSON.stringify(this.cartItems)); // localStorage.setItem('WishlistTotal',JSON.stringify(this.cartTotal));

          localStorage.setItem('WishlistQuantity', JSON.stringify(this.cartItems.length));
        }
      }]);

      return WishlistCartComponent;
    }();

    WishlistCartComponent.ctorParameters = function () {
      return [{
        type: _service_messengerWishlist_service__WEBPACK_IMPORTED_MODULE_2__["MessangerWishlistService"]
      }, {
        type: _service_cart_items_service__WEBPACK_IMPORTED_MODULE_3__["CartItemsService"]
      }];
    };

    WishlistCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-cart/wishlist-cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist-cart.component.css */
      "./src/app/wishlist-cart/wishlist-cart.component.css"))["default"]]
    })], WishlistCartComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://127.0.0.1:8000/api',
      resourcesBaseUrl: 'http://127.0.0.1:8000/storage/'
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\BLiyanage\Documents\DevDir\WebProjects\angular\av-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map