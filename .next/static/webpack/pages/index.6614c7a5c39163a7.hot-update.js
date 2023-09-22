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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var _ErrorIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorIcon */ \"./src/components/ErrorIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EmailSignup = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n        setEmailError(false);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!isValidEmail(email)) {\n            setEmailError(true);\n            return;\n        }\n    };\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;\n        return emailRegex.test(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mt-6\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative mb-4 border-primary-red border-t-4 border-x-4 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded w-full h-[45px] p-6 shadow-none outline-none\",\n                            type: \"email\",\n                            name: \"email\",\n                            placeholder: \"john@smith.com\",\n                            pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\",\n                            required: true,\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        emailError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold\",\n                            children: \"Whoops, make sure it's an email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold\",\n                            children: \"Enter your email to be subscribed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"bg-primary-red text-white w-full shadow-none\",\n                    label: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EmailSignup, \"k7cV3GYASXm+KRgi0vmgH3Jgn9w=\");\n_c = EmailSignup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSignup);\nvar _c;\n$RefreshReg$(_c, \"EmailSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFNpZ251cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNVO0FBRXhDLE1BQU1JLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3ZCSixTQUFTSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDdkJKLGNBQWM7SUFDbEI7SUFFQSxNQUFNSyxlQUFlLENBQUNIO1FBQ2xCQSxFQUFFSSxjQUFjO1FBRWhCLElBQUksQ0FBQ0MsYUFBYVYsUUFBUTtZQUN0QkcsY0FBYztZQUNkO1FBQ0o7SUFDSjtJQUVBLE1BQU1PLGVBQWUsQ0FBQ1Y7UUFDbEIsTUFBTVcsYUFBYTtRQUNuQixPQUFPQSxXQUFXQyxJQUFJLENBQUNaO0lBQzNCO0lBRUEscUJBQ0ksOERBQUNhO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFVO1lBQU9DLFVBQVVSOzs4QkFDN0IsOERBQUNLO29CQUFJRSxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQ0dGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLFNBQVE7NEJBQ1JDLFFBQVE7NEJBQ1JmLE9BQU9QOzRCQUNQdUIsVUFBVW5COzs7Ozs7d0JBRWJGLDJCQUNHLDhEQUFDVzs0QkFBSUUsV0FBVTtzQ0FBNkQ7Ozs7O3NEQUc1RSw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQTZEOzs7Ozs7Ozs7Ozs7OEJBR3BGLDhEQUFDbEIsK0NBQU1BO29CQUFDa0IsV0FBVTtvQkFBK0NTLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhGO0dBaERNekI7S0FBQUE7QUFrRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1haWxTaWdudXAuanM/MTlmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgeyBFcnJvckljb24gfSBmcm9tIFwiLi9FcnJvckljb25cIjtcblxuY29uc3QgRW1haWxTaWdudXAgPSAoKSA9PiB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0RW1haWxFcnJvcihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgc2V0RW1haWxFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWRFbWFpbCA9IChlbWFpbCkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLztcbiAgICAgICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTQgYm9yZGVyLXByaW1hcnktcmVkIGJvcmRlci10LTQgYm9yZGVyLXgtNCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCB3LWZ1bGwgaC1bNDVweF0gcC02IHNoYWRvdy1ub25lIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obkBzbWl0aC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2VtYWlsRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1wcmltYXJ5LXJlZCB0ZXh0LXdoaXRlIHRleHQteHMgaXRhbGljIGZvbnQtc2VtaWJvbGRcIj5XaG9vcHMsIG1ha2Ugc3VyZSBpdCdzIGFuIGVtYWlsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bMTRweF0gcmlnaHQtWzI0cHhdXCI+PEVycm9ySWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctcHJpbWFyeS1yZWQgdGV4dC13aGl0ZSB0ZXh0LXhzIGl0YWxpYyBmb250LXNlbWlib2xkXCI+RW50ZXIgeW91ciBlbWFpbCB0byBiZSBzdWJzY3JpYmVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LXJlZCB0ZXh0LXdoaXRlIHctZnVsbCBzaGFkb3ctbm9uZVwiIGxhYmVsPXsnQ29udGFjdCBVcyd9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxTaWdudXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJFcnJvckljb24iLCJFbWFpbFNpZ251cCIsImVtYWlsIiwic2V0RW1haWwiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkRW1haWwiLCJlbWFpbFJlZ2V4IiwidGVzdCIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInBhdHRlcm4iLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/EmailSignup.js\n"));

/***/ })

});