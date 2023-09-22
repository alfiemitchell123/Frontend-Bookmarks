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

/***/ "./src/sections/Header.js":
/*!********************************!*\
  !*** ./src/sections/Header.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MobileMenu */ \"./src/components/MobileMenu.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenClick = ()=>{\n        setOpenMobileMenu(true);\n    };\n    const handleCloseClick = ()=>{\n        setOpenMobileMenu(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 md:px-24 md:py-14 flex items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                textFill: \"#242A45\",\n                circleFill: \"#5267DF\",\n                flagFill: \"#fff\"\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\"\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: \"18\",\n                    height: \"15\",\n                    onClick: handleOpenClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        fill: \"#242A45\",\n                        \"fill-rule\": \"evenodd\",\n                        d: \"M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            openMobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleCloseClick: handleCloseClick\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 33,\n                columnNumber: 32\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden md:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex gap-10 uppercase items-center tracking-wide md:text-xs\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"bg-primary-red text-white px-6 py-2 tracking-wide\",\n                            label: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"1LjVcvc8QZsEn/VEHfP6rfZPelw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvSGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDSjtBQUNhO0FBQ1I7QUFFekMsTUFBTUssU0FBUzs7SUFDWCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1PLGtCQUFrQjtRQUNwQkQsa0JBQWtCO0lBQ3RCO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3JCRixrQkFBa0I7SUFDdEI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNULHdEQUFJQTtnQkFBQ1UsVUFBVTtnQkFBV0MsWUFBWTtnQkFBV0MsVUFBVTs7Ozs7OzBCQUU1RCw4REFBQ0o7Z0JBQUlDLFdBQVU7Ozs7OzswQkFFZiw4REFBQ0k7Z0JBQUlKLFdBQVU7MEJBQ1gsNEVBQUNLO29CQUNHQyxPQUFNO29CQUNOQyxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFTWjs4QkFFVCw0RUFBQ2E7d0JBQUtDLE1BQUs7d0JBQVVDLGFBQVU7d0JBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHbERsQixnQ0FBa0IsOERBQUNILDhEQUFVQTtnQkFBQ00sa0JBQWtCQTs7Ozs7OzBCQUVqRCw4REFBQ007Z0JBQUlKLFdBQVU7MEJBQ1gsNEVBQUNjO29CQUFHZCxXQUFVOztzQ0FDViw4REFBQ2U7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ3RCLDBEQUFNQTs0QkFBQ08sV0FBVTs0QkFBb0RnQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRztHQXZDTXRCO0tBQUFBO0FBeUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9IZWFkZXIuanM/ZjEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICdAL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJ0AvY29tcG9uZW50cy9Nb2JpbGVNZW51JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbb3Blbk1vYmlsZU1lbnUsIHNldE9wZW5Nb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZU9wZW5DbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbk1vYmlsZU1lbnUodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbk1vYmlsZU1lbnUoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCBtZDpweC0yNCBtZDpweS0xNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPExvZ28gdGV4dEZpbGw9eycjMjQyQTQ1J30gY2lyY2xlRmlsbD17JyM1MjY3REYnfSBmbGFnRmlsbD17JyNmZmYnfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPjwvZGl2PlxuXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5DbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMjQyQTQ1XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAwaDE4djNIMFYwem0wIDZoMTh2M0gwVjZ6bTAgNmgxOHYzSDB2LTN6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAge29wZW5Nb2JpbGVNZW51ICYmIDxNb2JpbGVNZW51IGhhbmRsZUNsb3NlQ2xpY2s9e2hhbmRsZUNsb3NlQ2xpY2t9IC8+fVxuXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC0xMCB1cHBlcmNhc2UgaXRlbXMtY2VudGVyIHRyYWNraW5nLXdpZGUgbWQ6dGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+RmVhdHVyZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UHJpY2luZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LXJlZCB0ZXh0LXdoaXRlIHB4LTYgcHktMiB0cmFja2luZy13aWRlXCIgbGFiZWw9eydMb2dpbid9IC8+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ28iLCJNb2JpbGVNZW51IiwiQnV0dG9uIiwiSGVhZGVyIiwib3Blbk1vYmlsZU1lbnUiLCJzZXRPcGVuTW9iaWxlTWVudSIsImhhbmRsZU9wZW5DbGljayIsImhhbmRsZUNsb3NlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0RmlsbCIsImNpcmNsZUZpbGwiLCJmbGFnRmlsbCIsIm5hdiIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwicGF0aCIsImZpbGwiLCJmaWxsLXJ1bGUiLCJkIiwidWwiLCJsaSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/Header.js\n"));

/***/ })

});