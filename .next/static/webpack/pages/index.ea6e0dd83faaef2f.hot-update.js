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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArrowIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowIcon */ \"./src/components/ArrowIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FAQTabs = (param)=>/*#__PURE__*/ {\n    let { title, content, isOpen, onClick } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex p-6\",\n                onClick: onClick,\n                children: [\n                    title,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowIcon__WEBPACK_IMPORTED_MODULE_2__.ArrowIcon, {}, void 0, false, {\n                        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 11,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FAQTabs;\nconst FAQSection = ()=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleTab = (index)=>{\n        if (activeTab === index) {\n            setActiveTab(null);\n        } else {\n            setActiveTab(index);\n        }\n    };\n    const faqData = [\n        {\n            title: \"What is Bookmark?\",\n            content: \"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n        },\n        {\n            title: \"How can I request a new browser?\",\n            content: \"At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\"\n        },\n        {\n            title: \"Is there a mobile app?\",\n            content: \"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n        },\n        {\n            title: \"What about other Chromium browsers?\",\n            content: \"Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: faqData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQTabs, {\n                title: item.title,\n                content: item.content,\n                isOpen: activeTab === index,\n                onClick: ()=>toggleTab(index)\n            }, index, false, {\n                fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/FAQTabs.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FAQSection, \"VFB5QCtmvHdEFS4J94Fr3P5SAn0=\");\n_c1 = FAQSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"FAQTabs\");\n$RefreshReg$(_c1, \"FAQSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GQVFUYWJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtXQUNoRCw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTtnQkFBV0YsU0FBU0E7O29CQUM5Qkg7a0NBQ0QsOERBQUNJO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNQLGlEQUFTQTs7Ozs7Ozs7Ozs7WUFFYkksd0JBQVUsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUFRSjs7Ozs7Ozs7Ozs7O0FBQ2pDO0tBUkhGO0FBV04sTUFBTU8sYUFBYTs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVksWUFBWSxDQUFDQztRQUNmLElBQUlILGNBQWNHLE9BQU87WUFDckJGLGFBQWE7UUFDakIsT0FBTztZQUNIQSxhQUFhRTtRQUNqQjtJQUNKO0lBRUEsTUFBTUMsVUFBVTtRQUNaO1lBQ0lYLE9BQU87WUFDUEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsT0FBTztZQUNQQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxPQUFPO1lBQ1BDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELE9BQU87WUFDUEMsU0FBUztRQUNiO0tBQ0g7SUFFRCxxQkFDSSw4REFBQ0c7a0JBQ0lPLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNSCxzQkFDaEIsOERBQUNYO2dCQUVHQyxPQUFPYSxLQUFLYixLQUFLO2dCQUNqQkMsU0FBU1ksS0FBS1osT0FBTztnQkFDckJDLFFBQVFLLGNBQWNHO2dCQUN0QlAsU0FBUyxJQUFNTSxVQUFVQztlQUpwQkE7Ozs7Ozs7Ozs7QUFTekI7R0EzQ01KO01BQUFBO0FBNkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZBUVRhYnMuanM/NzZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFycm93SWNvbiB9IGZyb20gXCIuL0Fycm93SWNvblwiO1xuXG5jb25zdCBGQVFUYWJzID0gKHsgdGl0bGUsIGNvbnRlbnQsIGlzT3Blbiwgb25DbGljayB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNlwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj48L2Rpdj5cbiAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc09wZW4gJiYgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+e2NvbnRlbnR9PC9kaXY+fVxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgRkFRU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCB0b2dnbGVUYWIgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVRhYiA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYihudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYihpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZmFxRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXaGF0IGlzIEJvb2ttYXJrPycsXG4gICAgICAgICAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpIGVsaXQsIHNlZCBlaXVzbW9kIHRlbXBvciBpbmNpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1bSBleGVyY2l0YXRpb25lbSB1bGxhbSBjb3Jwb3JpcyBzdXNjaXBpdCBsYWJvcmlvc2FtLCBuaXNpIHV0IGFsaXF1aWQgZXggZWEgY29tbW9kaSBjb25zZXF1YXR1ci4gUXVpcyBhdXRlIGl1cmUgcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2JjYWVjYXQgY3VwaWRpdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvdyBjYW4gSSByZXF1ZXN0IGEgbmV3IGJyb3dzZXI/JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBdCB2ZXJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzLCBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpIGF0cXVlIGNvcnJ1cHRpLCBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQsIG9iY2FlY2F0aSBjdXBpZGl0YXRlIG5vbiBwcm92aWRlbnQsIHNpbWlsaXF1ZSBzdW50IGluIGN1bHBhLCBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXRpYSBhbmltaSwgaWQgZXN0IGxhYm9ydW0gZXQgZG9sb3J1bSBmdWdhLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSXMgdGhlcmUgYSBtb2JpbGUgYXBwPycsXG4gICAgICAgICAgICBjb250ZW50OiAnVGVtcG9yaWJ1cyBhdXRlbSBxdWlidXNkYW0gZXQgYXV0IG9mZmljaWlzIGRlYml0aXMgYXV0IHJlcnVtIG5lY2Vzc2l0YXRpYnVzIHNhZXBlIGV2ZW5pZXQsIHV0IGV0IHZvbHVwdGF0ZXMgcmVwdWRpYW5kYWUgc2ludCBldCBtb2xlc3RpYWUgbm9uIHJlY3VzYW5kYWUuIEl0YXF1ZSBlYXJ1bSByZXJ1bSBoaWMgdGVuZXR1ciBhIHNhcGllbnRlIGRlbGVjdHVzLCB1dCBhdXQgcmVpY2llbmRpcyB2b2x1cHRhdGlidXMgbWFpb3JlcyBhbGlhcyBjb25zZXF1YXR1ciBhdXQgcGVyZmVyZW5kaXMgZG9sb3JpYnVzIGFzcGVyaW9yZXMgcmVwZWxsYXQuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXaGF0IGFib3V0IG90aGVyIENocm9taXVtIGJyb3dzZXJzPycsXG4gICAgICAgICAgICBjb250ZW50OiAnVXQgZW5pbSBhZCBtaW5pbWEgdmVuaWFtLCBxdWlzIG5vc3RydW1bZF0gZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4IGVhIGNvbW1vZGkgY29uc2VxdWF0dXI/IFtEXVF1aXMgYXV0ZW0gdmVsIGV1bSBpW3JddXJlIHJlcHJlaGVuZGVyaXQsIHF1aSBpbiBlYSB2b2x1cHRhdGUgdmVsaXQgZXNzZSwgcXVhbSBuaWhpbCBtb2xlc3RpYWUgY29uc2VxdWF0dXIsIHZlbCBpbGx1bSwgcXVpIGRvbG9yZW0gZXVtIGZ1Z2lhdCwgcXVvIHZvbHVwdGFzIG51bGxhIHBhcmlhdHVyPycsXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmYXFEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RkFRVGFic1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e2FjdGl2ZVRhYiA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRhYihpbmRleCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZBUVNlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcnJvd0ljb24iLCJGQVFUYWJzIiwidGl0bGUiLCJjb250ZW50IiwiaXNPcGVuIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsIkZBUVNlY3Rpb24iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGVUYWIiLCJpbmRleCIsImZhcURhdGEiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FAQTabs.js\n"));

/***/ })

});