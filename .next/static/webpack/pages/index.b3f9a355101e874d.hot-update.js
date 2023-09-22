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

/***/ "./src/components/EmailSignup.js":
/*!***************************************!*\
  !*** ./src/components/EmailSignup.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var _ErrorIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorIcon */ \"./src/components/ErrorIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EmailSignup = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n        setEmailError(false);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!isValidEmail(email)) {\n            setEmailError(true);\n            return;\n        }\n    };\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;\n        return emailRegex.test(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mt-6 md:flex md:gap-4 md:justify-center\",\n            onSubmit: handleSubmit,\n            noValidate: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative \".concat(emailError ? \"bg-primary-red border-primary-red border-t-4 border-x-4 mb-4\" : \"mb-5\", \" rounded\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded w-[120%] h-[45px] p-6 shadow-none outline-none\",\n                            type: \"email\",\n                            name: \"email\",\n                            placeholder: \"john@smith.com\",\n                            pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\",\n                            required: true,\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold transition-all duration-500 \".concat(emailError ? \"\" : \"hidden\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Whoops, make sure it's an email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorIcon__WEBPACK_IMPORTED_MODULE_3__.ErrorIcon, {\n                                    className: \"absolute right-3 top-1/2 transform -translate-y-[1.6rem]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"bg-primary-red text-white w-full shadow-none md:py-3.5 md:text-sm active:ring-primary-red active:ring-2 active:text-primary-red\",\n                    label: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EmailSignup, \"k7cV3GYASXm+KRgi0vmgH3Jgn9w=\");\n_c = EmailSignup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSignup);\nvar _c;\n$RefreshReg$(_c, \"EmailSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFNpZ251cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNVO0FBRXhDLE1BQU1JLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3ZCSixTQUFTSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDdkJKLGNBQWM7SUFDbEI7SUFFQSxNQUFNSyxlQUFlLENBQUNIO1FBQ2xCQSxFQUFFSSxjQUFjO1FBRWhCLElBQUksQ0FBQ0MsYUFBYVYsUUFBUTtZQUN0QkcsY0FBYztZQUNkO1FBQ0o7SUFDSjtJQUVBLE1BQU1PLGVBQWUsQ0FBQ1Y7UUFDbEIsTUFBTVcsYUFBYTtRQUNuQixPQUFPQSxXQUFXQyxJQUFJLENBQUNaO0lBQzNCO0lBRUEscUJBQ0ksOERBQUNhO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUtELFdBQVU7WUFBMENFLFVBQVVSO1lBQWNTLFVBQVU7OzhCQUN4Riw4REFBQ0o7b0JBQUlDLFdBQVcsWUFBaUcsT0FBckZaLGFBQWEsaUVBQWlFLFFBQU87O3NDQUM3Ryw4REFBQ2dCOzRCQUNHSixXQUFVOzRCQUNWSyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxTQUFROzRCQUNSQyxRQUFROzRCQUNSaEIsT0FBT1A7NEJBQ1B3QixVQUFVcEI7Ozs7OztzQ0FFZCw4REFBQ1M7NEJBQUlDLFdBQVcsMEZBQXFILE9BQTNCWixhQUFhLEtBQUs7OzhDQUN4SCw4REFBQ1c7OENBQUk7Ozs7Ozs4Q0FHTCw4REFBQ2YsaURBQVNBO29DQUFDZ0IsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUcvQiw4REFBQ2pCLCtDQUFNQTtvQkFBQ2lCLFdBQVU7b0JBQWtJVyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzSztHQWhETTFCO0tBQUFBO0FBa0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VtYWlsU2lnbnVwLmpzPzE5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgRXJyb3JJY29uIH0gZnJvbSBcIi4vRXJyb3JJY29uXCI7XG5cbmNvbnN0IEVtYWlsU2lnbnVwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldEVtYWlsRXJyb3IoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRFbWFpbChlbWFpbCkpIHtcbiAgICAgICAgICAgIHNldEVtYWlsRXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSAoZW1haWwpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JC87XG4gICAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTYgbWQ6ZmxleCBtZDpnYXAtNCBtZDpqdXN0aWZ5LWNlbnRlclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2VtYWlsRXJyb3IgPyAnYmctcHJpbWFyeS1yZWQgYm9yZGVyLXByaW1hcnktcmVkIGJvcmRlci10LTQgYm9yZGVyLXgtNCBtYi00JyA6ICdtYi01J30gcm91bmRlZGB9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgdy1bMTIwJV0gaC1bNDVweF0gcC02IHNoYWRvdy1ub25lIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obkBzbWl0aC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwLTIgYmctcHJpbWFyeS1yZWQgdGV4dC13aGl0ZSB0ZXh0LXhzIGl0YWxpYyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCAke2VtYWlsRXJyb3IgPyAnJyA6ICdoaWRkZW4nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaG9vcHMsIG1ha2Ugc3VyZSBpdCdzIGFuIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtgYWJzb2x1dGUgcmlnaHQtMyB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktWzEuNnJlbV1gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnktcmVkIHRleHQtd2hpdGUgdy1mdWxsIHNoYWRvdy1ub25lIG1kOnB5LTMuNSBtZDp0ZXh0LXNtIGFjdGl2ZTpyaW5nLXByaW1hcnktcmVkIGFjdGl2ZTpyaW5nLTIgYWN0aXZlOnRleHQtcHJpbWFyeS1yZWRcIiBsYWJlbD17J0NvbnRhY3QgVXMnfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2lnbnVwOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRXJyb3JJY29uIiwiRW1haWxTaWdudXAiLCJlbWFpbCIsInNldEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJoYW5kbGVFbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZEVtYWlsIiwiZW1haWxSZWdleCIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicGF0dGVybiIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EmailSignup.js\n"));

/***/ })

});