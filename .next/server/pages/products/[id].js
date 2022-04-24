"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Product({ product  }) {\n    if (product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                            lineNumber: 8,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: `${product.description}`\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"id: \",\n                        product.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"id: \",\n                        product.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Product not found \"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this);\n    }\n};\nasync function getServerSideProps({ params  }) {\n    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((r)=>r.json()\n    );\n    console.log(product);\n    return {\n        props: {\n            product\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBRWQsU0FBU0MsT0FBTyxDQUFDLEVBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQ3pDLElBQUlBLE9BQU8sRUFBRTtRQUNULHFCQUNJLDhEQUFDQyxLQUFHOzs4QkFDQSw4REFBQ0gsa0RBQUk7O3NDQUNELDhEQUFDSSxPQUFLO3NDQUFFRixPQUFPLENBQUNFLEtBQUs7Ozs7O2dDQUFTO3NDQUM5Qiw4REFBQ0MsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLGFBQWE7NEJBQUNDLE9BQU8sRUFBRSxDQUFDLEVBQUVMLE9BQU8sQ0FBQ00sV0FBVyxDQUFDLENBQUM7Ozs7O2dDQUFHOzs7Ozs7d0JBQzFEOzhCQUNQLDhEQUFDQyxJQUFFOzt3QkFBQyxNQUFJO3dCQUFFUCxPQUFPLENBQUNRLEVBQUU7Ozs7Ozt3QkFBTzs4QkFDM0IsOERBQUNELElBQUU7O3dCQUFDLE1BQUk7d0JBQUVQLE9BQU8sQ0FBQ0UsS0FBSzs7Ozs7O3dCQUFPOzs7Ozs7Z0JBQzVCLENBQ1Q7S0FDSixNQUFNO1FBQ0gscUJBQ0ksOERBQUNELEtBQUc7c0JBQ0EsNEVBQUNNLElBQUU7MEJBQUMscUJBQW1COzs7OztvQkFBSzs7Ozs7Z0JBQzFCLENBQ1Q7S0FDSjtDQUNKO0FBRU0sZUFBZUUsa0JBQWtCLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7SUFDakQsTUFBTVYsT0FBTyxHQUFHLE1BQU1XLEtBQUssQ0FBQyxDQUFDLGtDQUFrQyxFQUFFRCxNQUFNLENBQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsQ0FBQztJQUNqR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixPQUFPLENBQUMsQ0FBQztJQUNyQixPQUFPO1FBQ0hpQixLQUFLLEVBQUU7WUFDSGpCLE9BQU87U0FDVjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWtlLXN0b3JlLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qcz85OGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvZHVjdC50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3Byb2R1Y3QuZGVzY3JpcHRpb259YH0vPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGgxPmlkOiB7IHByb2R1Y3QuaWQgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+aWQ6IHsgcHJvZHVjdC50aXRsZSB9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPiBQcm9kdWN0IG5vdCBmb3VuZCA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvJHtwYXJhbXMuaWR9YCkudGhlbihyID0+IHIuanNvbigpKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJQcm9kdWN0IiwicHJvZHVjdCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJoMSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].js"));
module.exports = __webpack_exports__;

})();