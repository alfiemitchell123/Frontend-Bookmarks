"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FeaturesTab.js":
/*!***************************************!*\
  !*** ./src/components/FeaturesTab.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IllustrationFeaturesTab1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IllustrationFeaturesTab1 */ \"./src/components/IllustrationFeaturesTab1.js\");\n/* harmony import */ var _IllustrationFeaturesTab2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IllustrationFeaturesTab2 */ \"./src/components/IllustrationFeaturesTab2.js\");\n/* harmony import */ var _IllustrationFeaturesTab3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IllustrationFeaturesTab3 */ \"./src/components/IllustrationFeaturesTab3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FeaturesTab = ()=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const activeTabIndicator = \"after:content[''] after:w-full\";\n    const renderActiveSVG = ()=>{\n        switch(activeTab){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IllustrationFeaturesTab1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                    lineNumber: 13,\n                    columnNumber: 24\n                }, undefined);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IllustrationFeaturesTab2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                    lineNumber: 15,\n                    columnNumber: 24\n                }, undefined);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IllustrationFeaturesTab3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                    lineNumber: 17,\n                    columnNumber: 24\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-1 p-6 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"py-4 border-b \".concat(activeTab === 1 ? activeTabIndicator : \"\"),\n                            onClick: ()=>setActiveTab(1),\n                            children: \"Simple Bookmarking\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"py-4 \".concat(activeTab === 2 ? activeTabIndicator : \"\"),\n                            onClick: ()=>setActiveTab(2),\n                            children: \"Speedy Searching\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"py-4 \".concat(activeTab === 3 ? activeTabIndicator : \"\"),\n                            onClick: ()=>setActiveTab(3),\n                            children: \"Easy Sharing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden w-auto h-auto\",\n                    children: renderActiveSVG()\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FeaturesTab.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FeaturesTab, \"BWY5R9M9pvKcIff1cAnch9Xqh+Y=\");\n_c = FeaturesTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturesTab);\nvar _c;\n$RefreshReg$(_c, \"FeaturesTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlc1RhYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ0E7QUFDQTtBQUVsRSxNQUFNSyxjQUFjOztJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTU8scUJBQXNCO0lBRTVCLE1BQU1DLGtCQUFrQjtRQUNwQixPQUFRSDtZQUNKLEtBQUs7Z0JBQ0QscUJBQU8sOERBQUNKLGlFQUF3QkE7Ozs7O1lBQ3BDLEtBQUs7Z0JBQ0QscUJBQU8sOERBQUNDLGlFQUF3QkE7Ozs7O1lBQ3BDLEtBQUs7Z0JBQ0QscUJBQU8sOERBQUNDLGlFQUF3QkE7Ozs7O1lBQ3BDO2dCQUNJLE9BQU87UUFDZjtJQUNKO0lBRUEscUJBQ0ksOERBQUNNO2tCQUNHLDRFQUFDQTs7OEJBQ0csOERBQUNDO29CQUFHQyxXQUFVOztzQ0FDViw4REFBQ0Y7Ozs7O3NDQUNELDhEQUFDRzs0QkFBR0QsV0FBVyxpQkFBMkQsT0FBMUNOLGNBQWMsSUFBSUUscUJBQXFCOzRCQUFNTSxTQUFTLElBQU1QLGFBQWE7c0NBQUk7Ozs7OztzQ0FDN0csOERBQUNNOzRCQUFHRCxXQUFXLFFBQWtELE9BQTFDTixjQUFjLElBQUlFLHFCQUFxQjs0QkFBTU0sU0FBUyxJQUFNUCxhQUFhO3NDQUFJOzs7Ozs7c0NBQ3BHLDhEQUFDTTs0QkFBR0QsV0FBVyxRQUFrRCxPQUExQ04sY0FBYyxJQUFJRSxxQkFBcUI7NEJBQU1NLFNBQVMsSUFBTVAsYUFBYTtzQ0FBSTs7Ozs7O3NDQUNwRyw4REFBQ0c7Ozs7Ozs7Ozs7OzhCQUVMLDhEQUFDQTtvQkFBSUUsV0FBVTs4QkFDVkg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBakNNSjtLQUFBQTtBQW1DTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlc1RhYi5qcz80M2YzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElsbHVzdHJhdGlvbkZlYXR1cmVzVGFiMSBmcm9tIFwiLi9JbGx1c3RyYXRpb25GZWF0dXJlc1RhYjFcIjtcbmltcG9ydCBJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjIgZnJvbSBcIi4vSWxsdXN0cmF0aW9uRmVhdHVyZXNUYWIyXCI7XG5pbXBvcnQgSWxsdXN0cmF0aW9uRmVhdHVyZXNUYWIzIGZyb20gXCIuL0lsbHVzdHJhdGlvbkZlYXR1cmVzVGFiM1wiO1xuXG5jb25zdCBGZWF0dXJlc1RhYiA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgYWN0aXZlVGFiSW5kaWNhdG9yID0gYGFmdGVyOmNvbnRlbnRbJyddIGFmdGVyOnctZnVsbGA7XG5cbiAgICBjb25zdCByZW5kZXJBY3RpdmVTVkcgPSAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjEgLz47XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjIgLz47XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjMgLz47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHktNCBib3JkZXItYiAke2FjdGl2ZVRhYiA9PT0gMSA/IGFjdGl2ZVRhYkluZGljYXRvciA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigxKX0+U2ltcGxlIEJvb2ttYXJraW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHB5LTQgJHthY3RpdmVUYWIgPT09IDIgPyBhY3RpdmVUYWJJbmRpY2F0b3IgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoMil9PlNwZWVkeSBTZWFyY2hpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHktNCAke2FjdGl2ZVRhYiA9PT0gMyA/IGFjdGl2ZVRhYkluZGljYXRvciA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigzKX0+RWFzeSBTaGFyaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHctYXV0byBoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckFjdGl2ZVNWRygpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXNUYWI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjEiLCJJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjIiLCJJbGx1c3RyYXRpb25GZWF0dXJlc1RhYjMiLCJGZWF0dXJlc1RhYiIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImFjdGl2ZVRhYkluZGljYXRvciIsInJlbmRlckFjdGl2ZVNWRyIsImRpdiIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FeaturesTab.js\n"));

/***/ })

});