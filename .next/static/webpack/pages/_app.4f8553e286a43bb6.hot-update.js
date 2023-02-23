"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/components/app/state/actions/productsReducers.ts":
/*!*****************************************************************!*\
  !*** ./styles/components/app/state/actions/productsReducers.ts ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editProduct\": function() { return /* binding */ editProduct; },\n/* harmony export */   \"lessProductCart\": function() { return /* binding */ lessProductCart; },\n/* harmony export */   \"moreProductCart\": function() { return /* binding */ moreProductCart; },\n/* harmony export */   \"productCart\": function() { return /* binding */ productCart; },\n/* harmony export */   \"productList\": function() { return /* binding */ productList; },\n/* harmony export */   \"quantityProduct\": function() { return /* binding */ quantityProduct; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst initialState = {\n    products: [],\n    cart: [],\n    loading: true\n};\nconst productsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState,\n    reducers: {\n        productList (state, { payload  }) {\n            return {\n                ...state,\n                products: payload\n            };\n        },\n        productCart (state, action) {\n            state.cart.push(action.payload);\n        },\n        editProduct (state, action) {\n            const { name , id  } = action.payload;\n            const existingProduct = state?.products.find((product)=>product.id === id);\n            if (existingProduct) {\n                existingProduct.name = name;\n            }\n        },\n        quantityProduct (state, action) {\n            const { quantity , id  } = action.payload;\n            const existingProduct = state?.products.find((product)=>product.id === id);\n            if (existingProduct) {\n                existingProduct.quantity = parseInt(quantity);\n            }\n        },\n        moreProductCart (state, action) {\n            const { quantity , id  } = action.payload;\n            const existingProduct = state.cart.find((product)=>product.id === id);\n            if (existingProduct) {\n                existingProduct.quantity = quantity + 1;\n            }\n        },\n        lessProductCart (state, action) {\n            const { quantity , id  } = action.payload;\n            const existingProduct = state.cart.find((product)=>product.id === id);\n            if (existingProduct && quantity > 1) {\n                existingProduct.quantity = quantity - 1;\n            } else {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n                    title: \"Action isn't allowed\",\n                    text: `You can't have less than 1 unit`,\n                    icon: \"error\",\n                    confirmButtonText: \"Ok!\"\n                });\n            }\n        }\n    }\n});\nconst { productList , productCart , moreProductCart , lessProductCart , editProduct , quantityProduct  } = productsReducer.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsReducer.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY29tcG9uZW50cy9hcHAvc3RhdGUvYWN0aW9ucy9wcm9kdWN0c1JlZHVjZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUVoQjtBQUUvQixNQUFNRSxlQUFvQjtJQUN4QkMsVUFBVSxFQUFFO0lBQ1pDLE1BQU0sRUFBRTtJQUNSQyxTQUFTLElBQUk7QUFDZjtBQUVBLE1BQU1DLGtCQUFrQk4sNkRBQVdBLENBQUM7SUFDbENPLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNSQyxhQUFZQyxLQUFLLEVBQUUsRUFBRUMsUUFBTyxFQUFFLEVBQUU7WUFDOUIsT0FBTztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFUCxVQUFVUTtZQUFRO1FBQ3ZDO1FBQ0FDLGFBQVlGLEtBQUssRUFBRUcsTUFBTSxFQUFFO1lBQ3pCSCxNQUFNTixJQUFJLENBQUNVLElBQUksQ0FBQ0QsT0FBT0YsT0FBTztRQUNoQztRQUNBSSxhQUFZTCxLQUFLLEVBQUVHLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUVOLEtBQUksRUFBRVMsR0FBRSxFQUFFLEdBQUdILE9BQU9GLE9BQU87WUFDbkMsTUFBTU0sa0JBQWtCUCxPQUFPUCxTQUFTZSxJQUFJLENBQzFDLENBQUNDLFVBQWlCQSxRQUFRSCxFQUFFLEtBQUtBO1lBRW5DLElBQUlDLGlCQUFpQjtnQkFDbkJBLGdCQUFnQlYsSUFBSSxHQUFHQTtZQUN6QixDQUFDO1FBQ0g7UUFDQWEsaUJBQWdCVixLQUFLLEVBQUVHLE1BQU0sRUFBRTtZQUM3QixNQUFNLEVBQUVRLFNBQVEsRUFBRUwsR0FBRSxFQUFFLEdBQUdILE9BQU9GLE9BQU87WUFDdkMsTUFBTU0sa0JBQWtCUCxPQUFPUCxTQUFTZSxJQUFJLENBQzFDLENBQUNDLFVBQWlCQSxRQUFRSCxFQUFFLEtBQUtBO1lBRW5DLElBQUlDLGlCQUFpQjtnQkFDbkJBLGdCQUFnQkksUUFBUSxHQUFHQyxTQUFTRDtZQUN0QyxDQUFDO1FBQ0g7UUFDQUUsaUJBQWdCYixLQUFLLEVBQUVHLE1BQU0sRUFBRTtZQUM3QixNQUFNLEVBQUVRLFNBQVEsRUFBRUwsR0FBRSxFQUFFLEdBQUdILE9BQU9GLE9BQU87WUFDdkMsTUFBTU0sa0JBQWtCUCxNQUFNTixJQUFJLENBQUNjLElBQUksQ0FDckMsQ0FBQ0MsVUFBaUJBLFFBQVFILEVBQUUsS0FBS0E7WUFFbkMsSUFBSUMsaUJBQWlCO2dCQUNuQkEsZ0JBQWdCSSxRQUFRLEdBQUdBLFdBQVc7WUFDeEMsQ0FBQztRQUNIO1FBQ0FHLGlCQUFnQmQsS0FBSyxFQUFFRyxNQUFNLEVBQUU7WUFDN0IsTUFBTSxFQUFFUSxTQUFRLEVBQUVMLEdBQUUsRUFBRSxHQUFHSCxPQUFPRixPQUFPO1lBQ3ZDLE1BQU1NLGtCQUFrQlAsTUFBTU4sSUFBSSxDQUFDYyxJQUFJLENBQ3JDLENBQUNDLFVBQWlCQSxRQUFRSCxFQUFFLEtBQUtBO1lBRW5DLElBQUlDLG1CQUFtQkksV0FBVyxHQUFHO2dCQUNuQ0osZ0JBQWdCSSxRQUFRLEdBQUdBLFdBQVc7WUFDeEMsT0FBTztnQkFDTHBCLHVEQUFTLENBQUM7b0JBQ1J5QixPQUFPO29CQUNQQyxNQUFNLENBQUMsK0JBQStCLENBQUM7b0JBQ3ZDQyxNQUFNO29CQUNOQyxtQkFBbUI7Z0JBQ3JCO1lBQ0YsQ0FBQztRQUNIO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFDWHBCLFlBQVcsRUFDWEcsWUFBVyxFQUNYVyxnQkFBZSxFQUNmQyxnQkFBZSxFQUNmVCxZQUFXLEVBQ1hLLGdCQUFlLEVBQ2hCLEdBQUdkLGdCQUFnQndCLE9BQU8sQ0FBQztBQUU1QiwrREFBZXhCLGdCQUFnQnlCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvY29tcG9uZW50cy9hcHAvc3RhdGUvYWN0aW9ucy9wcm9kdWN0c1JlZHVjZXJzLnRzPzQ2MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IGFueSA9IHtcbiAgcHJvZHVjdHM6IFtdLFxuICBjYXJ0OiBbXSxcbiAgbG9hZGluZzogdHJ1ZVxufTtcblxuY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAncHJvZHVjdHMnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgcHJvZHVjdExpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHByb2R1Y3RDYXJ0KHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSxcbiAgICBlZGl0UHJvZHVjdChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlPy5wcm9kdWN0cy5maW5kKFxuICAgICAgICAocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmlkID09PSBpZFxuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QpIHtcbiAgICAgICAgZXhpc3RpbmdQcm9kdWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgIH0sXG4gICAgcXVhbnRpdHlQcm9kdWN0KHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIGNvbnN0IHsgcXVhbnRpdHksIGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlPy5wcm9kdWN0cy5maW5kKFxuICAgICAgICAocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmlkID09PSBpZFxuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QpIHtcbiAgICAgICAgZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ID0gcGFyc2VJbnQocXVhbnRpdHkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbW9yZVByb2R1Y3RDYXJ0KHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIGNvbnN0IHsgcXVhbnRpdHksIGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlLmNhcnQuZmluZChcbiAgICAgICAgKHByb2R1Y3Q6IGFueSkgPT4gcHJvZHVjdC5pZCA9PT0gaWRcbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgICAgIGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5ICsgMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxlc3NQcm9kdWN0Q2FydChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5LCBpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBzdGF0ZS5jYXJ0LmZpbmQoXG4gICAgICAgIChwcm9kdWN0OiBhbnkpID0+IHByb2R1Y3QuaWQgPT09IGlkXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdCAmJiBxdWFudGl0eSA+IDEpIHtcbiAgICAgICAgZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ID0gcXVhbnRpdHkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpb24gaXNuJ3QgYWxsb3dlZFwiLFxuICAgICAgICAgIHRleHQ6IGBZb3UgY2FuJ3QgaGF2ZSBsZXNzIHRoYW4gMSB1bml0YCxcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2shJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICBwcm9kdWN0TGlzdCxcbiAgcHJvZHVjdENhcnQsXG4gIG1vcmVQcm9kdWN0Q2FydCxcbiAgbGVzc1Byb2R1Y3RDYXJ0LFxuICBlZGl0UHJvZHVjdCxcbiAgcXVhbnRpdHlQcm9kdWN0XG59ID0gcHJvZHVjdHNSZWR1Y2VyLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzUmVkdWNlci5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiU3dhbCIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwiY2FydCIsImxvYWRpbmciLCJwcm9kdWN0c1JlZHVjZXIiLCJuYW1lIiwicmVkdWNlcnMiLCJwcm9kdWN0TGlzdCIsInN0YXRlIiwicGF5bG9hZCIsInByb2R1Y3RDYXJ0IiwiYWN0aW9uIiwicHVzaCIsImVkaXRQcm9kdWN0IiwiaWQiLCJleGlzdGluZ1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsInF1YW50aXR5UHJvZHVjdCIsInF1YW50aXR5IiwicGFyc2VJbnQiLCJtb3JlUHJvZHVjdENhcnQiLCJsZXNzUHJvZHVjdENhcnQiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/components/app/state/actions/productsReducers.ts\n"));

/***/ })

});