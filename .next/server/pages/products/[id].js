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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Product({ product  }) {\n    if (product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"id: \",\n                        product.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                    lineNumber: 5,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"id: \",\n                        product.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                    lineNumber: 6,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Product not found \"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Behtarino\\\\fake store\\\\pages\\\\products\\\\[id].js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this);\n    }\n};\nasync function getServerSideProps({ params  }) {\n    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((r)=>r.json()\n    );\n    console.log(product);\n    return {\n        props: {\n            product\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFlLFNBQVNBLE9BQU8sQ0FBQyxFQUFFQyxPQUFPLEdBQUUsRUFBRTtJQUN6QyxJQUFJQSxPQUFPLEVBQUU7UUFDVCxxQkFDSSw4REFBQ0MsS0FBRzs7OEJBQ0EsOERBQUNDLElBQUU7O3dCQUFDLE1BQUk7d0JBQUVGLE9BQU8sQ0FBQ0csRUFBRTs7Ozs7O3dCQUFPOzhCQUMzQiw4REFBQ0QsSUFBRTs7d0JBQUMsTUFBSTt3QkFBRUYsT0FBTyxDQUFDSSxLQUFLOzs7Ozs7d0JBQU87Ozs7OztnQkFDNUIsQ0FDVDtLQUNKLE1BQU07UUFDSCxxQkFDSSw4REFBQ0gsS0FBRztzQkFDQSw0RUFBQ0MsSUFBRTswQkFBQyxxQkFBbUI7Ozs7O29CQUFLOzs7OztnQkFDMUIsQ0FDVDtLQUNKO0NBQ0o7QUFFTSxlQUFlRyxrQkFBa0IsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUNqRCxNQUFNTixPQUFPLEdBQUcsTUFBTU8sS0FBSyxDQUFDLENBQUMsa0NBQWtDLEVBQUVELE1BQU0sQ0FBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxDQUFDO0lBQ2pHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osT0FBTyxDQUFDLENBQUM7SUFDckIsT0FBTztRQUNIYSxLQUFLLEVBQUU7WUFDSGIsT0FBTztTQUNWO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zha2Utc3RvcmUvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzPzk4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPmlkOiB7IHByb2R1Y3QuaWQgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+aWQ6IHsgcHJvZHVjdC50aXRsZSB9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPiBQcm9kdWN0IG5vdCBmb3VuZCA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvJHtwYXJhbXMuaWR9YCkudGhlbihyID0+IHIuanNvbigpKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiZGl2IiwiaDEiLCJpZCIsInRpdGxlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

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