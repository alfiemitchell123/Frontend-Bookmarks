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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var _ErrorIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorIcon */ \"./src/components/ErrorIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EmailSignup = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n        setEmailError(false);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!isValidEmail(email)) {\n            setEmailError(true);\n            return;\n        }\n    };\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;\n        return emailRegex.test(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mt-6 md:flex md:gap-4 md:justify-center\",\n            onSubmit: handleSubmit,\n            noValidate: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative \".concat(emailError ? \"bg-primary-red border-primary-red border-t-4 border-x-4 mb-4\" : \"mb-5\", \" rounded\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded w-[full] h-[45px] p-6 shadow-none outline-none md:py-4 md:px-12\",\n                            type: \"email\",\n                            name: \"email\",\n                            placeholder: \"john@smith.com\",\n                            pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\",\n                            required: true,\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold transition-all duration-500 \".concat(emailError ? \"\" : \"hidden\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Whoops, make sure it's an email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"bg-primary-red text-white w-full shadow-none md:py-3 md:text-sm active:ring-primary-red active:ring-2 active:text-primary-red\",\n                    label: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EmailSignup, \"k7cV3GYASXm+KRgi0vmgH3Jgn9w=\");\n_c = EmailSignup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSignup);\nvar _c;\n$RefreshReg$(_c, \"EmailSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFNpZ251cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNVO0FBRXhDLE1BQU1JLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3ZCSixTQUFTSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDdkJKLGNBQWM7SUFDbEI7SUFFQSxNQUFNSyxlQUFlLENBQUNIO1FBQ2xCQSxFQUFFSSxjQUFjO1FBRWhCLElBQUksQ0FBQ0MsYUFBYVYsUUFBUTtZQUN0QkcsY0FBYztZQUNkO1FBQ0o7SUFDSjtJQUVBLE1BQU1PLGVBQWUsQ0FBQ1Y7UUFDbEIsTUFBTVcsYUFBYTtRQUNuQixPQUFPQSxXQUFXQyxJQUFJLENBQUNaO0lBQzNCO0lBRUEscUJBQ0ksOERBQUNhO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUtELFdBQVU7WUFBMENFLFVBQVVSO1lBQWNTLFVBQVU7OzhCQUN4Riw4REFBQ0o7b0JBQUlDLFdBQVcsWUFBaUcsT0FBckZaLGFBQWEsaUVBQWlFLFFBQU87O3NDQUM3Ryw4REFBQ2dCOzRCQUNHSixXQUFVOzRCQUNWSyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxTQUFROzRCQUNSQyxRQUFROzRCQUNSaEIsT0FBT1A7NEJBQ1B3QixVQUFVcEI7Ozs7OztzQ0FFZCw4REFBQ1M7NEJBQUlDLFdBQVcsMEZBQXFILE9BQTNCWixhQUFhLEtBQUs7c0NBQ3hILDRFQUFDVzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWIsOERBQUNoQiwrQ0FBTUE7b0JBQUNpQixXQUFVO29CQUFnSVcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeks7R0FoRE0xQjtLQUFBQTtBQWtETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FbWFpbFNpZ251cC5qcz8xOWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IEVycm9ySWNvbiB9IGZyb20gXCIuL0Vycm9ySWNvblwiO1xuXG5jb25zdCBFbWFpbFNpZ251cCA9ICgpID0+IHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRFbWFpbEVycm9yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkRW1haWwoZW1haWwpKSB7XG4gICAgICAgICAgICBzZXRFbWFpbEVycm9yKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZEVtYWlsID0gKGVtYWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSQvO1xuICAgICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC02IG1kOmZsZXggbWQ6Z2FwLTQgbWQ6anVzdGlmeS1jZW50ZXJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtlbWFpbEVycm9yID8gJ2JnLXByaW1hcnktcmVkIGJvcmRlci1wcmltYXJ5LXJlZCBib3JkZXItdC00IGJvcmRlci14LTQgbWItNCcgOiAnbWItNSd9IHJvdW5kZWRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHctW2Z1bGxdIGgtWzQ1cHhdIHAtNiBzaGFkb3ctbm9uZSBvdXRsaW5lLW5vbmUgbWQ6cHktNCBtZDpweC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obkBzbWl0aC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwLTIgYmctcHJpbWFyeS1yZWQgdGV4dC13aGl0ZSB0ZXh0LXhzIGl0YWxpYyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCAke2VtYWlsRXJyb3IgPyAnJyA6ICdoaWRkZW4nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaG9vcHMsIG1ha2Ugc3VyZSBpdCdzIGFuIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RXJyb3JJY29uIGNsYXNzTmFtZT17YGFic29sdXRlIHJpZ2h0LTMgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LVsxLjZyZW1dYH0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1yZWQgdGV4dC13aGl0ZSB3LWZ1bGwgc2hhZG93LW5vbmUgbWQ6cHktMyBtZDp0ZXh0LXNtIGFjdGl2ZTpyaW5nLXByaW1hcnktcmVkIGFjdGl2ZTpyaW5nLTIgYWN0aXZlOnRleHQtcHJpbWFyeS1yZWRcIiBsYWJlbD17J0NvbnRhY3QgVXMnfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2lnbnVwOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRXJyb3JJY29uIiwiRW1haWxTaWdudXAiLCJlbWFpbCIsInNldEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJoYW5kbGVFbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZEVtYWlsIiwiZW1haWxSZWdleCIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicGF0dGVybiIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EmailSignup.js\n"));

/***/ })

});