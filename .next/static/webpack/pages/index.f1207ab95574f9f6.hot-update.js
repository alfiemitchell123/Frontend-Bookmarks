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

/***/ "./src/components/FAQTabs.js":
/*!***********************************!*\
  !*** ./src/components/FAQTabs.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArrowIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowIcon */ \"./src/components/ArrowIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FAQTabs = (param)=>/*#__PURE__*/ {\n    let { title, content, isOpen, onClick } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                onClick: onClick,\n                children: [\n                    title,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowIcon__WEBPACK_IMPORTED_MODULE_2__.ArrowIcon, {}, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 11,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FAQTabs;\nconst FAQSection = ()=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleTab = (index)=>{\n        if (activeTab === index) {\n            setActiveTab(null);\n        } else {\n            setActiveTab(index);\n        }\n    };\n    const faqData = [\n        {\n            title: \"What is Bookmark?\",\n            content: \"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n        },\n        {\n            title: \"How can I request a new browser?\",\n            content: \"At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\"\n        },\n        {\n            title: \"Is there a mobile app?\",\n            content: \"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n        },\n        {\n            title: \"What about other Chromium browsers?\",\n            content: \"Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: faqData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQTabs, {\n                title: item.title,\n                content: item.content,\n                isOpen: activeTab === index,\n                onClick: ()=>toggleTab(index)\n            }, index, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FAQSection, \"VFB5QCtmvHdEFS4J94Fr3P5SAn0=\");\n_c1 = FAQSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"FAQTabs\");\n$RefreshReg$(_c1, \"FAQSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GQVFUYWJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtXQUNoRCw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTtnQkFBT0YsU0FBU0E7O29CQUMxQkg7a0NBQ0QsOERBQUNJO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNQLGlEQUFTQTs7Ozs7Ozs7Ozs7WUFFYkksd0JBQVUsOERBQUNFOzBCQUFLSDs7Ozs7Ozs7Ozs7O0FBQ2hCO0tBUkhGO0FBV04sTUFBTU8sYUFBYTs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVksWUFBWSxDQUFDQztRQUNmLElBQUlILGNBQWNHLE9BQU87WUFDckJGLGFBQWE7UUFDakIsT0FBTztZQUNIQSxhQUFhRTtRQUNqQjtJQUNKO0lBRUEsTUFBTUMsVUFBVTtRQUNaO1lBQ0lYLE9BQU87WUFDUEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsT0FBTztZQUNQQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxPQUFPO1lBQ1BDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELE9BQU87WUFDUEMsU0FBUztRQUNiO0tBQ0g7SUFFRCxxQkFDSSw4REFBQ0c7a0JBQ0lPLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNSCxzQkFDaEIsOERBQUNYO2dCQUVHQyxPQUFPYSxLQUFLYixLQUFLO2dCQUNqQkMsU0FBU1ksS0FBS1osT0FBTztnQkFDckJDLFFBQVFLLGNBQWNHO2dCQUN0QlAsU0FBUyxJQUFNTSxVQUFVQztlQUpwQkE7Ozs7Ozs7Ozs7QUFTekI7R0EzQ01KO01BQUFBO0FBNkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZBUVRhYnMuanM/NzZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFycm93SWNvbiB9IGZyb20gXCIuL0Fycm93SWNvblwiO1xuXG5jb25zdCBGQVFUYWJzID0gKHsgdGl0bGUsIGNvbnRlbnQsIGlzT3Blbiwgb25DbGljayB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPEFycm93SWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzT3BlbiAmJiA8ZGl2Pntjb250ZW50fTwvZGl2Pn1cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IEZBUVNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgdG9nZ2xlVGFiID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT09IGluZGV4KSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZhcURhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2hhdCBpcyBCb29rbWFyaz8nLFxuICAgICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaSBlbGl0LCBzZWQgZWl1c21vZCB0ZW1wb3IgaW5jaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydW0gZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4IGVhIGNvbW1vZGkgY29uc2VxdWF0dXIuIFF1aXMgYXV0ZSBpdXJlIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9iY2FlY2F0IGN1cGlkaXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdIb3cgY2FuIEkgcmVxdWVzdCBhIG5ldyBicm93c2VyPycsXG4gICAgICAgICAgICBjb250ZW50OiAnQXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cywgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSwgcXVvcyBkb2xvcmVzIGV0IHF1YXMgbW9sZXN0aWFzIGV4Y2VwdHVyaSBzaW50LCBvYmNhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50LCBzaW1pbGlxdWUgc3VudCBpbiBjdWxwYSwgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0lzIHRoZXJlIGEgbW9iaWxlIGFwcD8nLFxuICAgICAgICAgICAgY29udGVudDogJ1RlbXBvcmlidXMgYXV0ZW0gcXVpYnVzZGFtIGV0IGF1dCBvZmZpY2lpcyBkZWJpdGlzIGF1dCByZXJ1bSBuZWNlc3NpdGF0aWJ1cyBzYWVwZSBldmVuaWV0LCB1dCBldCB2b2x1cHRhdGVzIHJlcHVkaWFuZGFlIHNpbnQgZXQgbW9sZXN0aWFlIG5vbiByZWN1c2FuZGFlLiBJdGFxdWUgZWFydW0gcmVydW0gaGljIHRlbmV0dXIgYSBzYXBpZW50ZSBkZWxlY3R1cywgdXQgYXV0IHJlaWNpZW5kaXMgdm9sdXB0YXRpYnVzIG1haW9yZXMgYWxpYXMgY29uc2VxdWF0dXIgYXV0IHBlcmZlcmVuZGlzIGRvbG9yaWJ1cyBhc3BlcmlvcmVzIHJlcGVsbGF0LicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2hhdCBhYm91dCBvdGhlciBDaHJvbWl1bSBicm93c2Vycz8nLFxuICAgICAgICAgICAgY29udGVudDogJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtW2RdIGV4ZXJjaXRhdGlvbmVtIHVsbGFtIGNvcnBvcmlzIHN1c2NpcGl0IGxhYm9yaW9zYW0sIG5pc2kgdXQgYWxpcXVpZCBleCBlYSBjb21tb2RpIGNvbnNlcXVhdHVyPyBbRF1RdWlzIGF1dGVtIHZlbCBldW0gaVtyXXVyZSByZXByZWhlbmRlcml0LCBxdWkgaW4gZWEgdm9sdXB0YXRlIHZlbGl0IGVzc2UsIHF1YW0gbmloaWwgbW9sZXN0aWFlIGNvbnNlcXVhdHVyLCB2ZWwgaWxsdW0sIHF1aSBkb2xvcmVtIGV1bSBmdWdpYXQsIHF1byB2b2x1cHRhcyBudWxsYSBwYXJpYXR1cj8nLFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmFxRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZBUVRhYnNcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXthY3RpdmVUYWIgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUYWIoaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGQVFTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXJyb3dJY29uIiwiRkFRVGFicyIsInRpdGxlIiwiY29udGVudCIsImlzT3BlbiIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJGQVFTZWN0aW9uIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidG9nZ2xlVGFiIiwiaW5kZXgiLCJmYXFEYXRhIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FAQTabs.js\n"));

/***/ })

});