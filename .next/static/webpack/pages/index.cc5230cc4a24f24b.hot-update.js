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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components */ \"./src/components/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/types */ \"./src/types/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/layouts */ \"./src/layouts/index.ts\");\n\n\n\n\n\n\nvar Event = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ~/components/Event.component */ \"./src/components/Event.component.tsx\")).then(function(param) {\n        var Event = param.Event;\n        return Event;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"~/components/Event.component\"\n        ]\n    },\n    ssr: false\n});\n_c = Event;\nvar ACTIONS = [\n    {\n        type: _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK,\n        href: \"/projects\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            className: \"mr-3\",\n            icon: \"feather:copy\"\n        }, void 0, false, {\n            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined),\n        text: \"Projects\"\n    },\n    {\n        type: _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK,\n        external: true,\n        href: \"https://github.com/ankitpanchaal\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            className: \"mr-3\",\n            icon: \"feather:github\"\n        }, void 0, false, {\n            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined),\n        text: \"GitHub\"\n    },\n    {\n        type: _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK,\n        href: \"/contact\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            className: \"mr-3\",\n            icon: \"material-symbols:contact-page-outline\"\n        }, void 0, false, {\n            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined),\n        text: \"Contact\"\n    },\n    {\n        type: _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK,\n        external: true,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            className: \"mr-3\",\n            icon: \"solar:document-bold\"\n        }, void 0, false, {\n            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined),\n        href: \"https://docs.google.com/document/d/1q2IvvZ9HE8OXxETbpondCAYmf7q-IHNcU03jDbq8QMM/edit?usp=sharing\",\n        text: \"Resume\"\n    },\n    {\n        type: _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK,\n        external: true,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            className: \"mr-3\",\n            icon: \"mdi:linkedin\"\n        }, void 0, false, {\n            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, undefined),\n        href: \"https://www.linkedin.com/in/ankit-panchal-a46ba4242/\",\n        text: \"Linkedin\"\n    }, \n];\nfunction HomePage() {\n    var _this = this;\n    var today = new Date();\n    //const birthday = new Date('2003-09-07');\n    var isBirthday = true;\n    //\ttoday.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();\n    var description = \"I am a software engineer & front end developer\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_5__.Layout.Default, {\n        children: [\n            isBirthday && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Event, {\n                event: _types__WEBPACK_IMPORTED_MODULE_4__.EventType.BIRTHDAY\n            }, void 0, false, {\n                fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex items-center justify-center py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Animate, {\n                            as: \"h1\",\n                            animation: {\n                                opacity: [\n                                    0,\n                                    1\n                                ],\n                                scale: [\n                                    0.75,\n                                    1\n                                ]\n                            },\n                            className: \"text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold\",\n                            children: [\n                                \"Hey \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"inline-block origin-70 hover:animate-wave\",\n                                    children: \"\\uD83D\\uDC4B\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, this),\n                                \" \",\n                                \"I'm Shivam Dubey, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden sm:block\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 30\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Pill.Standard, {\n                                    className: \"mt-4 text-[60px]\",\n                                    children: \"A Full Stack Developer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Animate, {\n                            as: \"p\",\n                            animation: {\n                                opacity: [\n                                    0,\n                                    1\n                                ],\n                                scale: [\n                                    0.75,\n                                    1\n                                ]\n                            },\n                            className: \"max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl\",\n                            transition: {\n                                delay: 0.5\n                            },\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4\",\n                            children: ACTIONS.map(function(action, index) {\n                                if (action.type !== _types__WEBPACK_IMPORTED_MODULE_4__.NavigationItemType.LINK) return null;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Animate, {\n                                    animation: {\n                                        y: [\n                                            50,\n                                            0\n                                        ],\n                                        opacity: [\n                                            0,\n                                            1\n                                        ]\n                                    },\n                                    className: \"w-full sm:w-auto\",\n                                    transition: {\n                                        delay: 0.1 * (index + 2) + 0.5\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Button.Outline, {\n                                        href: action.href,\n                                        target: action.external && \"_blank\",\n                                        children: [\n                                            action.icon,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: action.text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 10\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 9\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shivdubey/Desktop/dev.shivam/src/pages/index.tsx\",\n        lineNumber: 64,\n        columnNumber: 3\n    }, this);\n}\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Event\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ3ZCLElBQUk7MERBQ1osOERBQUNpQixNQUFJOzBEQUFFTSxNQUFNLENBQUNyQixJQUFJOzs7OztxREFBUTs7Ozs7OzZDQUNWO21DQVRac0IsS0FBSzs7Ozt5Q0FVRCxDQUNUOzRCQUNILENBQUMsQ0FBQzs7Ozs7Z0NBQ0c7Ozs7Ozt3QkFDRDs7Ozs7b0JBQ0Q7Ozs7OztZQUNVLENBQ2hCO0FBQ0gsQ0FBQztBQW5FdUJwQixNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcblxuaW1wb3J0IHsgQW5pbWF0ZSwgQnV0dG9uLCBQaWxsIH0gZnJvbSAnfi9jb21wb25lbnRzJztcbmltcG9ydCB7IEV2ZW50VHlwZSwgTmF2aWdhdGlvbkl0ZW1UeXBlIH0gZnJvbSAnfi90eXBlcyc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2xheW91dHMnO1xuXG5pbXBvcnQgdHlwZSB7IEV2ZW50UHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvRXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB0eXBlIHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICd+L3R5cGVzJztcblxuY29uc3QgRXZlbnQgPSBkeW5hbWljPEV2ZW50UHJvcHM+KFxuXHQoKSA9PiBpbXBvcnQoJ34vY29tcG9uZW50cy9FdmVudC5jb21wb25lbnQnKS50aGVuKCh7IEV2ZW50IH0pID0+IEV2ZW50KSxcblx0e1xuXHRcdHNzcjogZmFsc2UsXG5cdH0sXG4pO1xuXG5jb25zdCBBQ1RJT05TOiBBcnJheTxOYXZpZ2F0aW9uSXRlbT4gPSBbXG5cblx0e1xuXHRcdHR5cGU6IE5hdmlnYXRpb25JdGVtVHlwZS5MSU5LLFxuXHRcdGhyZWY6ICcvcHJvamVjdHMnLFxuXHRcdGljb246IDxJY29uIGNsYXNzTmFtZT1cIm1yLTNcIiBpY29uPVwiZmVhdGhlcjpjb3B5XCIgLz4sXG5cdFx0dGV4dDogJ1Byb2plY3RzJyxcblx0fSxcblx0e1xuXHRcdHR5cGU6IE5hdmlnYXRpb25JdGVtVHlwZS5MSU5LLFxuXHRcdGV4dGVybmFsOiB0cnVlLFxuXHRcdGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vYW5raXRwYW5jaGFhbCcsXG5cdFx0aWNvbjogPEljb24gY2xhc3NOYW1lPVwibXItM1wiIGljb249XCJmZWF0aGVyOmdpdGh1YlwiIC8+LFxuXHRcdHRleHQ6ICdHaXRIdWInLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogTmF2aWdhdGlvbkl0ZW1UeXBlLkxJTkssXG5cdFx0aHJlZjogJy9jb250YWN0Jyxcblx0XHRpY29uOiA8SWNvbiBjbGFzc05hbWU9XCJtci0zXCIgaWNvbj1cIm1hdGVyaWFsLXN5bWJvbHM6Y29udGFjdC1wYWdlLW91dGxpbmVcIiAvPixcblx0XHR0ZXh0OiAnQ29udGFjdCcsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiBOYXZpZ2F0aW9uSXRlbVR5cGUuTElOSyxcblx0XHRleHRlcm5hbDogdHJ1ZSxcblx0XHRpY29uOiA8SWNvbiBjbGFzc05hbWU9XCJtci0zXCIgaWNvbj1cInNvbGFyOmRvY3VtZW50LWJvbGRcIiAvPixcblx0XHRocmVmOiAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xcTJJdnZaOUhFOE9YeEVUYnBvbmRDQVltZjdxLUlITmNVMDNqRGJxOFFNTS9lZGl0P3VzcD1zaGFyaW5nJyxcblx0XHR0ZXh0OiAnUmVzdW1lJyxcblx0fSxcblx0e1xuXHRcdHR5cGU6IE5hdmlnYXRpb25JdGVtVHlwZS5MSU5LLFxuXHRcdGV4dGVybmFsOiB0cnVlLFxuXHRcdGljb246IDxJY29uIGNsYXNzTmFtZT1cIm1yLTNcIiBpY29uPVwibWRpOmxpbmtlZGluXCIgLz4sXG5cdFx0aHJlZjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbmtpdC1wYW5jaGFsLWE0NmJhNDI0Mi8nLFxuXHRcdHRleHQ6ICdMaW5rZWRpbicsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0Ly9jb25zdCBiaXJ0aGRheSA9IG5ldyBEYXRlKCcyMDAzLTA5LTA3Jyk7XG5cdGNvbnN0IGlzQmlydGhkYXkgPSAgdHJ1ZTtcblx0Ly9cdHRvZGF5LmdldERhdGUoKSA9PT0gYmlydGhkYXkuZ2V0RGF0ZSgpICYmIHRvZGF5LmdldE1vbnRoKCkgPT09IGJpcnRoZGF5LmdldE1vbnRoKCk7XG5cblx0Y29uc3QgZGVzY3JpcHRpb24gPSBgSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyICYgZnJvbnQgZW5kIGRldmVsb3BlcmA7XG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0LkRlZmF1bHQ+XG5cdFx0XHR7aXNCaXJ0aGRheSAmJiA8RXZlbnQgZXZlbnQ9e0V2ZW50VHlwZS5CSVJUSERBWX0gLz59XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHNtOm1heC13LWxnIG1kOnNtOm1heC13LTJ4bCBsZzpzbTptYXgtdy0zeGwgdy1mdWxsIHNwYWNlLXktOCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxBbmltYXRlXG5cdFx0XHRcdFx0XHRhcz1cImgxXCJcblx0XHRcdFx0XHRcdGFuaW1hdGlvbj17e1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0XHRcdHNjYWxlOiBbMC43NSwgMV0sXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC01eGwgc206dGV4dC02eGwgbWQ6dGV4dC02eGwgbGc6dGV4dC04eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGRcIj5cblx0XHRcdFx0XHRcdEhleSA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgb3JpZ2luLTcwIGhvdmVyOmFuaW1hdGUtd2F2ZVwiPvCfkYs8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdEkmYXBvczttIFNoaXZhbSBEdWJleSwgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiIC8+eycgJ31cblx0XHRcdFx0XHRcdDxQaWxsLlN0YW5kYXJkIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1bNjBweF1cIj5BIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9QaWxsLlN0YW5kYXJkPlxuXHRcdFx0XHRcdDwvQW5pbWF0ZT5cblxuXHRcdFx0XHRcdDxBbmltYXRlXG5cdFx0XHRcdFx0XHRhcz1cInBcIlxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uPXt7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRcdFx0c2NhbGU6IFswLjc1LCAxXSxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYXgtdy14cyBtdC00IG1kOm10LTggbXgtYXV0byB0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMCBzbTp0ZXh0LWxnIG1kOnRleHQteGwgbWQ6bWF4LXctM3hsXCJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDAuNSxcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdDwvQW5pbWF0ZT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206c3BhY2UteC00IHNwYWNlLXktNCBzbTpzcGFjZS15LTAgdy1mdWxsIG10LTggc206bXQtNFwiPlxuXHRcdFx0XHRcdFx0e0FDVElPTlMubWFwKChhY3Rpb24sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChhY3Rpb24udHlwZSAhPT0gTmF2aWdhdGlvbkl0ZW1UeXBlLkxJTkspIHJldHVybiBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PEFuaW1hdGVcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBbNTAsIDBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxheTogMC4xICogKGluZGV4ICsgMikgKyAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24uT3V0bGluZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXthY3Rpb24uaHJlZn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PXthY3Rpb24uZXh0ZXJuYWwgJiYgJ19ibGFuayd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YWN0aW9uLmljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnthY3Rpb24udGV4dH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbi5PdXRsaW5lPlxuXHRcdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGF5b3V0LkRlZmF1bHQ+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIkljb24iLCJBbmltYXRlIiwiQnV0dG9uIiwiUGlsbCIsIkV2ZW50VHlwZSIsIk5hdmlnYXRpb25JdGVtVHlwZSIsIkxheW91dCIsIkV2ZW50IiwidGhlbiIsInNzciIsIkFDVElPTlMiLCJ0eXBlIiwiTElOSyIsImhyZWYiLCJpY29uIiwiY2xhc3NOYW1lIiwidGV4dCIsImV4dGVybmFsIiwiSG9tZVBhZ2UiLCJ0b2RheSIsIkRhdGUiLCJpc0JpcnRoZGF5IiwiZGVzY3JpcHRpb24iLCJEZWZhdWx0IiwiZXZlbnQiLCJCSVJUSERBWSIsImRpdiIsImFzIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNjYWxlIiwic3BhbiIsImJyIiwiU3RhbmRhcmQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJtYXAiLCJhY3Rpb24iLCJpbmRleCIsInkiLCJPdXRsaW5lIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});