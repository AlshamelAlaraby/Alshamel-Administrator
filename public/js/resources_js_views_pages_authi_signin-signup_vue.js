(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_authi_signin-signup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Auth component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/auth */ "./resources/js/views/layouts/auth.vue");


/**
 * Signin-signup component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Auth: _layouts_auth__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  page: {
    title: "Signin-signup",
    meta: [{
      name: "description",
      content: 'kjhj'
    }]
  },
  data: function data() {
    return {};
  },
  layout: "auth"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "account-pages mt-5 mb-5"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("footer", {
    staticClass: "footer footer-alt"
  }, [_vm._v("\n    " + _vm._s(new Date().getFullYear()) + " © " + _vm._s(_vm.$t("general.elshamel")) + "\n    "), _c("a", {
    attrs: {
      href: ""
    }
  }, [_vm._v("Themesbrand")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("Auth", [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-xl-10"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "text-center mb-4"
  }, [_c("div", {
    staticClass: "auth-logo"
  }, [_c("router-link", {
    staticClass: "logo logo-dark text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
      alt: "",
      height: "22"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "logo logo-light text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
      alt: "",
      height: "22"
    }
  })])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "p-sm-3"
  }, [_c("h4", {
    staticClass: "mt-0"
  }, [_vm._v("Sign In")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-4"
  }, [_vm._v("\n                  Enter your email address and password to access account.\n                ")]), _vm._v(" "), _c("form", {
    attrs: {
      action: "#"
    }
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "emailaddress"
    }
  }, [_vm._v("Email address")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "emailaddress",
      required: "",
      placeholder: "Enter your email"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("router-link", {
    staticClass: "text-muted font-13 float-right",
    attrs: {
      to: "/auth/recoverpwd"
    }
  }, [_vm._v("Forgot your password?")]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "password",
      required: "",
      id: "password",
      placeholder: "Enter your password"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("button", {
    staticClass: "btn btn-primary float-sm-right",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                      Log In\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "custom-control custom-checkbox pt-1 overflow-hidden"
  }, [_c("input", {
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      id: "checkbox-signin",
      checked: ""
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "custom-control-label",
    attrs: {
      "for": "checkbox-signin"
    }
  }, [_vm._v("Remember me")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "p-sm-3"
  }, [_c("h4", {
    staticClass: "mt-3 mt-lg-0"
  }, [_vm._v("Free Sign Up")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-4"
  }, [_vm._v("\n                  Don't have an account? Create your account, it takes less\n                  than a minute\n                ")]), _vm._v(" "), _c("form", {
    attrs: {
      action: "#"
    }
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "fullname"
    }
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "fullname",
      placeholder: "Enter your name",
      required: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "emailaddress2"
    }
  }, [_vm._v("Email address")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "emailaddress2",
      required: "",
      placeholder: "Enter your email"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "password2"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "password",
      required: "",
      id: "password2",
      placeholder: "Enter your password"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-0"
  }, [_c("button", {
    staticClass: "btn btn-success float-sm-right",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                      Sign Up\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "custom-control custom-checkbox pt-1 overflow-hidden"
  }, [_c("input", {
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      id: "checkbox-signup"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "custom-control-label",
    attrs: {
      "for": "checkbox-signup"
    }
  }, [_vm._v("\n                        I accept\n                        "), _c("a", {
    staticClass: "text-dark",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Terms and Conditions")])])])])])])])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/assets/images/logo-dark.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/images/logo-dark.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo-dark.png?f85dba6d884d32a2f6b6c5404bb19748";

/***/ }),

/***/ "./resources/js/assets/images/logo-light.png":
/*!***************************************************!*\
  !*** ./resources/js/assets/images/logo-light.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/logo-light.png?3f7305d328f1b7c3f96726eaf20a45d3";

/***/ }),

/***/ "./resources/js/views/layouts/auth.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/layouts/auth.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.vue?vue&type=template&id=327da226& */ "./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226&");
/* harmony import */ var _auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/auth.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__.render,
  _auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/auth.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/authi/signin-signup.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/authi/signin-signup.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-signup.vue?vue&type=template&id=080a241b& */ "./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b&");
/* harmony import */ var _signin_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin-signup.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _signin_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__.render,
  _signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/authi/signin-signup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/auth.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/auth.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./auth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signin-signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_327da226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./auth.vue?vue&type=template&id=327da226& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/auth.vue?vue&type=template&id=327da226&");


/***/ }),

/***/ "./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_signup_vue_vue_type_template_id_080a241b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signin-signup.vue?vue&type=template&id=080a241b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/authi/signin-signup.vue?vue&type=template&id=080a241b&");


/***/ })

}]);