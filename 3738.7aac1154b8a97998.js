"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3738],{

/***/ 3738:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-7t9T91bG.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var C_Users_rcpineda_Desktop_iOnic_Angular_mi_cv_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1890);
/* harmony import */ var _index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-B_U9CtaY.js */ 4917);
/* harmony import */ var _index_BlJTBdxG_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-BlJTBdxG.js */ 4898);
/* harmony import */ var _helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-1O4D2b7y.js */ 450);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_BlJTBdxG_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_1__.w)(/*#__PURE__*/(0,C_Users_rcpineda_Desktop_iOnic_Angular_mi_cv_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_BlJTBdxG_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ })

}]);
//# sourceMappingURL=3738.7aac1154b8a97998.js.map