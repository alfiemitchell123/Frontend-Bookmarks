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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MobileMenu */ \"./src/components/MobileMenu.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenClick = ()=>{\n        setOpenMobileMenu(true);\n    };\n    const handleCloseClick = ()=>{\n        setOpenMobileMenu(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 md:px-24 md:py-14 flex items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                textFill: \"#242A45\",\n                circleFill: \"#5267DF\",\n                flagFill: \"#fff\"\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\"\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: \"18\",\n                    height: \"15\",\n                    onClick: handleOpenClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        fill: \"#242A45\",\n                        \"fill-rule\": \"evenodd\",\n                        d: \"M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            openMobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleCloseClick: handleCloseClick\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 33,\n                columnNumber: 32\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden md:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex gap-10 uppercase items-center tracking-wide md:text-sm md:gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"hover:text-primary-red cursor-pointer\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"hover:text-primary-red cursor-pointer\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"hover:text-primary-red cursor-pointer\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"bg-primary-red text-white px-6 py-2 tracking-wide active:ring-primary-red active:ring-2 active:text-primary-red\",\n                            label: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/sections/Header.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"1LjVcvc8QZsEn/VEHfP6rfZPelw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvSGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDSjtBQUNhO0FBQ1I7QUFFekMsTUFBTUssU0FBUzs7SUFDWCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1PLGtCQUFrQjtRQUNwQkQsa0JBQWtCO0lBQ3RCO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3JCRixrQkFBa0I7SUFDdEI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNULHdEQUFJQTtnQkFBQ1UsVUFBVTtnQkFBV0MsWUFBWTtnQkFBV0MsVUFBVTs7Ozs7OzBCQUU1RCw4REFBQ0o7Z0JBQUlDLFdBQVU7Ozs7OzswQkFFZiw4REFBQ0k7Z0JBQUlKLFdBQVU7MEJBQ1gsNEVBQUNLO29CQUNHQyxPQUFNO29CQUNOQyxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFTWjs4QkFFVCw0RUFBQ2E7d0JBQUtDLE1BQUs7d0JBQVVDLGFBQVU7d0JBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHbERsQixnQ0FBa0IsOERBQUNILDhEQUFVQTtnQkFBQ00sa0JBQWtCQTs7Ozs7OzBCQUVqRCw4REFBQ007Z0JBQUlKLFdBQVU7MEJBQ1gsNEVBQUNjO29CQUFHZCxXQUFVOztzQ0FDViw4REFBQ2U7NEJBQUdmLFdBQVU7c0NBQXdDOzs7Ozs7c0NBQ3RELDhEQUFDZTs0QkFBR2YsV0FBVTtzQ0FBd0M7Ozs7OztzQ0FDdEQsOERBQUNlOzRCQUFHZixXQUFVO3NDQUF3Qzs7Ozs7O3NDQUN0RCw4REFBQ1AsMERBQU1BOzRCQUFDTyxXQUFVOzRCQUFrSGdCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9KO0dBdkNNdEI7S0FBQUE7QUF5Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0hlYWRlci5qcz9mMTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dvIGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnQC9jb21wb25lbnRzL01vYmlsZU1lbnUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtvcGVuTW9iaWxlTWVudSwgc2V0T3Blbk1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlT3BlbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuTW9iaWxlTWVudSh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuTW9iaWxlTWVudShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIG1kOnB4LTI0IG1kOnB5LTE0IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8TG9nbyB0ZXh0RmlsbD17JyMyNDJBNDUnfSBjaXJjbGVGaWxsPXsnIzUyNjdERid9IGZsYWdGaWxsPXsnI2ZmZid9IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMyNDJBNDVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDBoMTh2M0gwVjB6bTAgNmgxOHYzSDBWNnptMCA2aDE4djNIMHYtM3pcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICB7b3Blbk1vYmlsZU1lbnUgJiYgPE1vYmlsZU1lbnUgaGFuZGxlQ2xvc2VDbGljaz17aGFuZGxlQ2xvc2VDbGlja30gLz59XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEwIHVwcGVyY2FzZSBpdGVtcy1jZW50ZXIgdHJhY2tpbmctd2lkZSBtZDp0ZXh0LXNtIG1kOmdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2hvdmVyOnRleHQtcHJpbWFyeS1yZWQgY3Vyc29yLXBvaW50ZXInPkZlYXR1cmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0naG92ZXI6dGV4dC1wcmltYXJ5LXJlZCBjdXJzb3ItcG9pbnRlcic+UHJpY2luZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2hvdmVyOnRleHQtcHJpbWFyeS1yZWQgY3Vyc29yLXBvaW50ZXInPkNvbnRhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnktcmVkIHRleHQtd2hpdGUgcHgtNiBweS0yIHRyYWNraW5nLXdpZGUgYWN0aXZlOnJpbmctcHJpbWFyeS1yZWQgYWN0aXZlOnJpbmctMiBhY3RpdmU6dGV4dC1wcmltYXJ5LXJlZFwiIGxhYmVsPXsnTG9naW4nfSAvPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dvIiwiTW9iaWxlTWVudSIsIkJ1dHRvbiIsIkhlYWRlciIsIm9wZW5Nb2JpbGVNZW51Iiwic2V0T3Blbk1vYmlsZU1lbnUiLCJoYW5kbGVPcGVuQ2xpY2siLCJoYW5kbGVDbG9zZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dEZpbGwiLCJjaXJjbGVGaWxsIiwiZmxhZ0ZpbGwiLCJuYXYiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsInBhdGgiLCJmaWxsIiwiZmlsbC1ydWxlIiwiZCIsInVsIiwibGkiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/Header.js\n"));

/***/ })

});