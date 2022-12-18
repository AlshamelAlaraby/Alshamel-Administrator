(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_module_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Footer Component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _horizontal_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-menu */ "./resources/js/components/horizontal-menu.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



/**
 * Horiontal-navbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: _horizontal_menu__WEBPACK_IMPORTED_MODULE_0__.menuItems
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["layout"]),
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "horizontal");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.activateParentDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this.activateParentDropdown();
    });
  },
  methods: {
    activateParentDropdown: function activateParentDropdown() {
      var resetParent = function resetParent(el) {
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.remove("active");
            var parent3 = parent2.parentElement;
            parent3.classList.remove("show");
            if (parent3) {
              parent3.classList.remove("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                }
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
          matchingMenuItem = links[i];
          break;
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add("active");
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.add("active");
                }
              }
            }
          }
        }
      }
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick: function onMenuClick(event) {
      event.preventDefault();
      var nextEl = event.target.nextSibling;
      var isHorizontal = document.getElementById("wrapper").hasAttribute("layout");
      if (isHorizontal) {
        nextEl.parentElement.classList.add("show");
        nextEl.nextSibling.classList.add("show");
      } else {
        if (nextEl && nextEl.classList && !nextEl.classList.contains("show")) {
          var parentEl = event.target.parentNode;
          if (parentEl) {
            parentEl.classList.remove("show");
          }
          nextEl.classList.add("show");
        } else if (nextEl && nextEl.classList) {
          nextEl.classList.remove("show");
        }
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/helpers */ "./resources/js/state/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Page-header component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/helpers */ "./resources/js/state/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Right-sidebar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      },
      checked: false,
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      sidebarType: this.$store ? this.$store.state.layout.leftSidebarType : {} || {},
      sidebarSize: this.$store ? this.$store.state.layout.leftSidebarSize : {} || {},
      menu: this.$store ? this.$store.state.layout.menuPosition : {} || {}
    };
  },
  methods: _objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutMethods), {}, {
    handleRightBarClick: function handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    middleware: function middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout: function changeLayout(layout) {
      this.$store.dispatch("layout/changeLayoutType", {
        layoutType: layout
      });
    },
    changeWidth: function changeWidth(width) {
      this.$store.dispatch("layout/changeLayoutWidth", {
        layoutWidth: width
      });
    },
    changeTopbartype: function changeTopbartype(value) {
      this.$store.dispatch("layout/changeTopbar", {
        topbar: value
      });
    },
    changeType: function changeType(type) {
      this.$store.dispatch("layout/changeLeftSidebarType", {
        leftSidebarType: type
      });
    },
    changeSize: function changeSize(size) {
      this.$store.dispatch("layout/changeLeftSidebarSize", {
        leftSidebarSize: size
      });
    },
    changemenuPosition: function changemenuPosition(position) {
      this.$store.dispatch("layout/changeMenuPosition", {
        menuPosition: position
      });
    },
    enableInfo: function enableInfo() {
      if (this.checked) document.body.setAttribute("data-sidebar-showuser", "true");else document.body.removeAttribute("data-sidebar-showuser");
    },
    reset: function reset() {
      this.width = "fluid";
      this.menu = "fixed";
      this.sidebarType = "light";
      this.sidebarSize = "default";
      this.topbar = "dark";
      this.checked = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/js/components/menu.js");



/**
 * Sidebar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["layout"]),
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this._activateMenuDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this._activateMenuDropdown();
    });
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Topbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      languages: [{
        flag: "/assets/images/us.jpg",
        language: "en",
        title: "English"
      }, {
        flag: "/assets/images/arabic.png",
        language: "ar",
        title: "Arabic"
      }],
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.value = this.languages.find(function (x) {
      return x.language === _this.$i18n.locale;
    });
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    /**
     * Full screen
     */
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (!document.fullscreenElement && /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    /**
     * Set languages
     */
    setLanguage: function setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.text = country;
      this.flag = flag;
      localStorage.setItem("lang", locale);
      if (locale == 'ar') {
        document.body.style.textAlign = 'right';
        document.body.classList.add('rtl');
        document.querySelector('html').style.direction = 'rtl';
        document.querySelector('html').setAttribute('lang', locale || 'ar');
        var style_dashboard = document.getElementById('style_dashboard');
        style_dashboard.setAttribute('href', window.location.origin + "/css/custom.css");
      } else {
        document.body.style.textAlign = 'left';
        document.body.classList.remove('rtl');
        document.querySelector('html').style.direction = 'ltr';
        document.querySelector('html').setAttribute('lang', locale || 'ar');
        var _style_dashboard = document.getElementById('style_dashboard');
        _style_dashboard.setAttribute('href', '');
      }
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu: function horizonalmenu() {
      var element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    /**
     *  Logout Dashboard
     */
    logout: function logout() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/auth/logout").then(function (res) {
                  _this2.$store.commit('auth/logoutToken');
                  return _this2.$router.push({
                    name: 'login'
                  });
                })["catch"](function (err) {
                  _this2.$store.commit('auth/logoutToken');
                  return _this2.$router.push({
                    name: 'login'
                  });
                })["finally"](function () {});
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activetab: 1
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this._activateMenuDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this._activateMenuDropdown();
    });
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "loader",
  props: {
    size: {
      "default": 'small',
      type: String,
      validator: function validator(value) {
        return ['large', 'small', 'middle'].indexOf(value) != -1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "errorMessage"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Detached layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "detached");
    document.body.setAttribute("data-sidebar-showuser", "true");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Horizontal-navbar */ "./resources/js/components/Horizontal-navbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Horizontal layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_1__["default"],
    HorizontalNavbar: _components_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "horizontal");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical */ "./resources/js/views/layouts/vertical.vue");
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ "./resources/js/views/layouts/horizontal.vue");
/* harmony import */ var _detached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detached */ "./resources/js/views/layouts/detached.vue");
/* harmony import */ var _two_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./two-column */ "./resources/js/views/layouts/two-column.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Main layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Vertical: _vertical__WEBPACK_IMPORTED_MODULE_1__["default"],
    Horizontal: _horizontal__WEBPACK_IMPORTED_MODULE_2__["default"],
    Detached: _detached__WEBPACK_IMPORTED_MODULE_3__["default"],
    TwoColumn: _two_column__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Two-column-sidebar */ "./resources/js/components/Two-column-sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Two-column layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TwoColumnSidebar: _components_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "two-column");
    document.body.setAttribute("data-topbar-color", "light");
    document.body.removeAttribute("data-sidebar-showuser");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Vertical layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.removeAttribute("data-layout-mode");
    document.body.removeAttribute("data-sidebar-showuser");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/views/layouts/main.vue");
/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Page-header */ "./resources/js/components/Page-header.vue");
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var vue_switches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-switches */ "./node_modules/vue-switches/src/switches.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_widgets_errorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/widgets/errorMessage */ "./resources/js/components/widgets/errorMessage.vue");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/loader */ "./resources/js/components/loader.vue");
/* harmony import */ var _helper_alphaArabic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helper/alphaArabic */ "./resources/js/helper/alphaArabic.js");
/* harmony import */ var _helper_alphaEnglish__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helper/alphaEnglish */ "./resources/js/helper/alphaEnglish.js");
/* harmony import */ var _helper_tableSort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helper/tableSort */ "./resources/js/helper/tableSort.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













/**
 * Advanced Table component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  page: {
    title: "Module",
    meta: [{
      name: "description",
      content: 'Module'
    }]
  },
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageHeader: _components_Page_header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Switches: vue_switches__WEBPACK_IMPORTED_MODULE_3__["default"],
    ErrorMessage: _components_widgets_errorMessage__WEBPACK_IMPORTED_MODULE_5__["default"],
    loader: _components_loader__WEBPACK_IMPORTED_MODULE_6__["default"],
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_10___default())
  },
  data: function data() {
    return {
      per_page: 50,
      search: '',
      debounce: {},
      modulesPagination: {},
      modules: [],
      parents: [],
      enabled3: false,
      isLoader: false,
      create: {
        name: '',
        name_e: '',
        parent_id: null,
        is_active: 'active',
        search: ''
      },
      edit: {
        name: '',
        name_e: '',
        parent_id: null,
        is_active: 'active',
        search: ''
      },
      setting: {
        name: true,
        name_e: true,
        parent_id: true,
        is_active: true
      },
      filterSetting: ['name', 'name_e'],
      errors: {},
      isCheckAll: false,
      checkAll: [],
      is_disabled: false,
      current_page: 1
    };
  },
  validations: {
    create: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.minLength)(3),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.maxLength)(100),
        alphaArabic: _helper_alphaArabic__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      name_e: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.minLength)(3),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.maxLength)(100),
        alphaEnglish: _helper_alphaEnglish__WEBPACK_IMPORTED_MODULE_8__["default"]
      },
      is_active: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required
      }
    },
    edit: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.minLength)(3),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.maxLength)(100),
        alphaArabic: _helper_alphaArabic__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      name_e: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.minLength)(3),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.maxLength)(100),
        alphaEnglish: _helper_alphaEnglish__WEBPACK_IMPORTED_MODULE_8__["default"]
      },
      is_active: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_11__.required
      }
    }
  },
  watch: {
    /**
     * watch per_page
     */
    per_page: function per_page(after, befour) {
      this.getData();
    },
    /**
     * watch search
     */
    search: function search(after, befour) {
      var _this = this;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        _this.getData();
      }, 400);
    },
    /**
     * watch check All table
     */
    isCheckAll: function isCheckAll(after, befour) {
      var _this2 = this;
      if (after) {
        this.modules.forEach(function (el) {
          if (!_this2.checkAll.includes(el.id)) {
            _this2.checkAll.push(el.id);
          }
        });
      } else {
        this.checkAll = [];
      }
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    /**
     *  get Data module
     */
    getData: function getData() {
      var _this3 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoader = true;
      var filter = '';
      for (var i = 0; i > this.filterSetting.length; ++i) {
        filter += "columns[".concat(i, "]=").concat(this.filterSetting[i], "&");
      }
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/modules?page=".concat(page, "&per_page=").concat(this.per_page, "&search=").concat(this.search, "&").concat(filter)).then(function (res) {
        var l = res.data;
        _this3.modules = l.data;
        _this3.modulesPagination = l.pagination;
        _this3.current_page = l.pagination.current_page;
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          icon: 'error',
          title: "".concat(_this3.$t('general.Error')),
          text: "".concat(_this3.$t('general.Thereisanerrorinthesystem'))
        });
      })["finally"](function () {
        _this3.isLoader = false;
      });
    },
    getDataCurrentPage: function getDataCurrentPage() {
      var _this4 = this;
      if (this.current_page <= this.modulesPagination.last_page && this.current_page != this.modulesPagination.current_page && this.current_page) {
        this.isLoader = true;
        var filter = '';
        for (var i = 0; i > this.filterSetting.length; ++i) {
          filter += "columns[".concat(i, "]=").concat(this.filterSetting[i], "&");
        }
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/modules?page=".concat(this.current_page, "&per_page=").concat(this.per_page, "&search=").concat(this.search, "&").concat(filter)).then(function (res) {
          var l = res.data;
          _this4.modules = l.data;
          _this4.modulesPagination = l.pagination;
          _this4.current_page = l.pagination.current_page;
        })["catch"](function (err) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            icon: 'error',
            title: "".concat(_this4.$t('general.Error')),
            text: "".concat(_this4.$t('general.Thereisanerrorinthesystem'))
          });
        })["finally"](function () {
          _this4.isLoader = false;
        });
      }
    },
    /**
     *  delete module
     */
    deleteModule: function deleteModule(id) {
      var _this5 = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: "".concat(this.$t('general.Areyousure')),
        text: "".concat(this.$t('general.Youwontbeabletoreverthis')),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "".concat(this.$t('general.Yesdeleteit')),
        cancelButtonText: "".concat(this.$t('general.Nocancel')),
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ml-2 mt-2",
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          _this5.isLoader = true;
          _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/modules/".concat(id)).then(function (res) {
            _this5.getData();
            _this5.checkAll = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'success',
              title: "".concat(_this5.$t('general.Deleted')),
              text: "".concat(_this5.$t('general.Yourrowhasbeendeleted')),
              showConfirmButton: false,
              timer: 1500
            });
          })["catch"](function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'error',
              title: "".concat(_this5.$t('general.Error')),
              text: "".concat(_this5.$t('general.Thereisanerrorinthesystem'))
            });
          })["finally"](function () {
            _this5.isLoader = false;
          });
        }
      });
    },
    /**
     *  reset Modal (create)
     */
    resetModalHidden: function resetModalHidden() {
      var _this6 = this;
      this.create = {
        name: '',
        name_e: '',
        parent_id: null,
        is_active: 'active'
      };
      this.$nextTick(function () {
        _this6.$v.$reset();
      });
      this.errors = {};
      this.parents = [];
      this.$bvModal.hide("create");
    },
    /**
     *  hidden Modal (create)
     */
    resetModal: function resetModal() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this7.getParent();
              case 2:
                _this7.create = {
                  name: '',
                  name_e: '',
                  parent_id: null,
                  is_active: 'active'
                };
                _this7.is_disabled = false;
                _this7.$nextTick(function () {
                  _this7.$v.$reset();
                });
                _this7.errors = {};
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     *  create module
     */
    resetForm: function resetForm() {
      var _this8 = this;
      this.create = {
        name: '',
        name_e: '',
        parent_id: null,
        is_active: 'active'
      };
      this.is_disabled = false;
      this.$nextTick(function () {
        _this8.$v.$reset();
      });
    },
    AddSubmit: function AddSubmit() {
      var _this9 = this;
      this.$v.create.$touch();
      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;
        if (!this.create.parent_id) {
          this.create.parent_id = 0;
        }
        ;
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/modules", this.create).then(function (res) {
          _this9.getData();
          _this9.is_disabled = true;
          setTimeout(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'success',
              text: "".concat(_this9.$t('general.Addedsuccessfully')),
              showConfirmButton: false,
              timer: 1500
            });
          }, 500);
        })["catch"](function (err) {
          if (err.response.data) {
            _this9.errors = err.response.data.errors;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'error',
              title: "".concat(_this9.$t('general.Error')),
              text: "".concat(_this9.$t('general.Thereisanerrorinthesystem'))
            });
          }
        })["finally"](function () {
          _this9.isLoader = false;
        });
      }
    },
    /**
     *  edit module
     */
    editSubmit: function editSubmit(id) {
      var _this10 = this;
      this.$v.edit.$touch();
      if (this.$v.edit.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        if (!this.edit.parent_id) {
          this.edit.parent_id = 0;
        }
        ;
        var _this$edit = this.edit,
          name = _this$edit.name,
          name_e = _this$edit.name_e,
          parent_id = _this$edit.parent_id,
          is_active = _this$edit.is_active;
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"].put("/modules/".concat(id), {
          name: name,
          name_e: name_e,
          parent_id: parent_id,
          is_active: is_active
        }).then(function (res) {
          _this10.$bvModal.hide("modal-edit-".concat(id));
          _this10.getData();
          setTimeout(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'success',
              text: "".concat(_this10.$t('general.Editsuccessfully')),
              showConfirmButton: false,
              timer: 1500
            });
          }, 500);
        })["catch"](function (err) {
          if (err.response.data) {
            _this10.errors = err.response.data.errors;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              icon: 'error',
              title: "".concat(_this10.$t('general.Error')),
              text: "".concat(_this10.$t('general.Thereisanerrorinthesystem'))
            });
          }
        })["finally"](function () {
          _this10.isLoader = false;
        });
      }
    },
    /**
     *  get parent
     */
    getParent: function getParent() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api_adminAxios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/modules?parent_id=".concat(0, "&is_active=active")).then(function (res) {
                  _this11.parents = res.data.data;
                })["catch"](function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: 'error',
                    title: "".concat(_this11.$t('general.Error')),
                    text: "".concat(_this11.$t('general.Thereisanerrorinthesystem'))
                  });
                });
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /**
     *   show Modal (edit)
     */
    resetModalEdit: function resetModalEdit(id) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var module;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                module = _this12.modules.find(function (e) {
                  return id == e.id;
                });
                _context3.next = 3;
                return _this12.getParent();
              case 3:
                _this12.edit.name = module.name;
                _this12.edit.name_e = module.name_e;
                _this12.edit.is_active = module.is_active;
                _this12.edit.parent_id = module.parent_id;
                _this12.errors = {};
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit: function resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        name: '',
        name_e: '',
        parent_id: null,
        is_active: 'active'
      };
      this.parents = [];
    },
    /**
     *  start  dynamicSortString
     */
    sortString: function sortString(value) {
      return (0,_helper_tableSort__WEBPACK_IMPORTED_MODULE_9__.dynamicSortString)(value);
    },
    checkRow: function checkRow(id) {
      if (!this.checkAll.includes(id)) {
        this.checkAll.push(id);
      } else {
        var index = this.checkAll.indexOf(id);
        this.checkAll.splice(index, 1);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/horizontal-menu.js":
/*!****************************************************!*\
  !*** ./resources/js/components/horizontal-menu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
var menuItems = [{
  id: 1,
  label: 'menuitems.dashboard.text',
  icon: 'ri-dashboard-line',
  subItems: [{
    id: 2,
    label: 'menuitems.dashboard.list.sales',
    link: '/'
  }, {
    id: 3,
    label: 'menuitems.dashboard.list.crm',
    link: '/dashboard/crm'
  }, {
    id: 4,
    label: 'menuitems.dashboard.list.analytics',
    link: '/dashboard/analytics'
  }]
}, {
  id: 5,
  label: 'menuitems.apps.text',
  icon: 'ri-apps-2-line',
  subItems: [{
    id: 7,
    label: 'menuitems.calendar.text',
    icon: 'ri-calendar-2-line',
    link: '/apps/calendar'
  }, {
    id: 8,
    label: "menuitems.chat.text",
    icon: "ri-message-2-line",
    link: '/apps/chat'
  }, {
    id: 9,
    label: "menuitems.ecommerce.text",
    icon: "ri-shopping-cart-2-line",
    subItems: [{
      id: 10,
      label: "menuitems.ecommerce.list.products",
      link: "/ecommerce/products"
    }, {
      id: 11,
      label: "menuitems.ecommerce.list.productsgrid",
      link: "/ecommerce/products-grid"
    }, {
      id: 12,
      label: 'menuitems.ecommerce.list.productdetail',
      link: '/ecommerce/product-detail/1'
    }, {
      id: 13,
      label: 'menuitems.ecommerce.list.createproduct',
      link: '/ecommerce/product-create'
    }, {
      id: 14,
      label: "menuitems.ecommerce.list.customers",
      link: "/ecommerce/customers"
    }, {
      id: 15,
      label: "menuitems.ecommerce.list.orders",
      link: "/ecommerce/orders"
    }, {
      id: 16,
      label: "menuitems.ecommerce.list.orderdetail",
      link: "/ecommerce/order-detail"
    }, {
      id: 17,
      label: "menuitems.ecommerce.list.sellers",
      link: "/ecommerce/sellers"
    }, {
      id: 18,
      label: "menuitems.ecommerce.list.cart",
      link: "/ecommerce/cart"
    }, {
      id: 19,
      label: "menuitems.ecommerce.list.checkout",
      link: "/ecommerce/checkout"
    }]
  }, {
    id: 20,
    label: 'menuitems.email.text',
    icon: 'ri-mail-line',
    subItems: [{
      id: 21,
      label: 'menuitems.email.list.inbox',
      link: '/email/inbox'
    }, {
      id: 22,
      label: 'menuitems.email.list.reademail',
      link: '/email/reademail/1'
    }, {
      id: 23,
      label: 'menuitems.email.list.template',
      link: '/email/templates'
    }]
  }, {
    id: 24,
    label: 'menuitems.companies.text',
    icon: 'ri-building-4-line',
    link: '/apps/companies'
  }, {
    id: 25,
    label: 'menuitems.tasks.text',
    icon: 'ri-task-line',
    subItems: [{
      id: 26,
      label: 'menuitems.tasks.list.list',
      link: '/task/list'
    }, {
      id: 27,
      label: 'menuitems.tasks.list.detail',
      link: '/task/detail'
    }, {
      id: 28,
      label: 'menuitems.tasks.list.kanban',
      link: '/task/kanban'
    }]
  }, {
    id: 29,
    label: 'menuitems.contacts.text',
    icon: 'ri-profile-line',
    subItems: [{
      id: 30,
      label: 'menuitems.contacts.list.members',
      link: '/contacts/list'
    }, {
      id: 31,
      label: 'menuitems.contacts.list.profile',
      link: '/contacts/profile'
    }]
  }, {
    id: 32,
    label: 'menuitems.filemanager.text',
    icon: 'ri-folders-line',
    link: '/apps/file-manager'
  }, {
    id: 33,
    label: 'menuitems.ticket.text',
    icon: 'ri-customer-service-2-line',
    link: '/apps/tickets'
  }]
}, {
  id: 34,
  label: 'menuitems.ui.text',
  icon: 'ri-pencil-ruler-2-line',
  subItems: [{
    id: 35,
    label: 'menuitems.ui.list.avatars',
    link: '/ui/avatars'
  }, {
    id: 36,
    label: 'menuitems.ui.list.buttons',
    link: '/ui/buttons'
  }, {
    id: 37,
    label: 'menuitems.ui.list.cards',
    link: '/ui/cards'
  }, {
    id: 38,
    label: 'menuitems.ui.list.carousel',
    link: '/ui/carousel'
  }, {
    id: 39,
    label: 'menuitems.ui.list.dropdowns',
    link: '/ui/dropdowns'
  }, {
    id: 40,
    label: 'menuitems.ui.list.video',
    link: '/ui/video'
  }, {
    id: 41,
    label: 'menuitems.ui.list.general',
    link: '/ui/general'
  }, {
    id: 42,
    label: 'menuitems.ui.list.grid',
    link: '/ui/grid'
  }, {
    id: 43,
    label: 'menuitems.ui.list.images',
    link: '/ui/images'
  }, {
    id: 44,
    label: 'menuitems.ui.list.listgroup',
    link: '/ui/list-group'
  }, {
    id: 45,
    label: 'menuitems.ui.list.modals',
    link: '/ui/modals'
  }, {
    id: 46,
    label: 'menuitems.ui.list.notifications',
    link: '/ui/notifications'
  }, {
    id: 47,
    label: 'menuitems.ui.list.portlet',
    link: '/ui/portlets'
  }, {
    id: 48,
    label: 'menuitems.ui.list.progress',
    link: '/ui/progress'
  }, {
    id: 49,
    label: 'menuitems.ui.list.ribbons',
    link: '/ui/ribbons'
  }, {
    id: 50,
    label: 'menuitems.ui.list.spinners',
    link: '/ui/spinners'
  }, {
    id: 51,
    label: 'menuitems.ui.list.tabs',
    link: '/ui/tabs-accordions'
  }, {
    id: 52,
    label: 'menuitems.ui.list.tooltip',
    link: '/ui/tooltips-popovers'
  }, {
    id: 53,
    label: 'menuitems.ui.list.typography',
    link: '/ui/typography'
  }]
}, {
  id: 54,
  label: 'menuitems.components.text',
  icon: 'ri-stack-line',
  subItems: [{
    id: 55,
    label: 'menuitems.extendedui.text',
    icon: 'ri-stack-line',
    subItems: [{
      id: 56,
      label: 'menuitems.extendedui.list.rangeslider',
      link: '/extended/rangeslider'
    }, {
      id: 57,
      label: 'menuitems.extendedui.list.sweetalert',
      link: '/extended/sweet-alert'
    }, {
      id: 58,
      label: 'menuitems.extendedui.list.tour',
      link: '/extended/tour'
    }, {
      id: 59,
      label: 'menuitems.extendedui.list.scrollspy',
      link: '/extended/scrollspy'
    }]
  }, {
    id: 60,
    label: 'menuitems.widgets.text',
    icon: 'ri-honour-line',
    link: '/widgets'
  }, {
    id: 61,
    label: 'menuitems.forms.text',
    icon: 'ri-eraser-line',
    subItems: [{
      id: 62,
      label: 'menuitems.forms.list.elements',
      link: '/forms/elements'
    }, {
      id: 63,
      label: 'menuitems.forms.list.advanced',
      link: '/forms/advanced'
    }, {
      id: 64,
      label: 'menuitems.forms.list.validation',
      link: '/forms/validation'
    }, {
      id: 65,
      label: 'menuitems.forms.list.wizard',
      link: '/forms/wizard'
    }, {
      id: 66,
      label: 'menuitems.forms.list.mask',
      link: '/forms/mask'
    }, {
      id: 67,
      label: 'menuitems.forms.list.editor',
      link: '/forms/quill'
    }, {
      id: 68,
      label: 'menuitems.forms.list.fileupload',
      link: '/forms/file-uploads'
    }]
  }, {
    id: 69,
    label: 'menuitems.charts.text',
    icon: 'ri-bar-chart-line',
    subItems: [{
      id: 70,
      label: 'menuitems.charts.list.apex',
      link: '/charts/apex'
    }, {
      id: 71,
      label: 'menuitems.charts.list.chartjs',
      link: '/charts/chartjs'
    }, {
      id: 72,
      label: 'menuitems.charts.list.c3',
      link: '/charts/c3'
    }, {
      id: 73,
      label: 'menuitems.charts.list.chartist',
      link: '/charts/chartist'
    }, {
      id: 74,
      label: 'menuitems.charts.list.knob',
      link: '/charts/knob'
    }]
  }, {
    id: 75,
    label: 'menuitems.tables.text',
    icon: 'ri-table-line',
    subItems: [{
      id: 76,
      label: 'menuitems.tables.list.basic',
      link: '/tables/basic'
    }, {
      id: 77,
      label: 'menuitems.tables.list.advanced',
      link: '/tables/advanced'
    }]
  }, {
    id: 78,
    label: 'menuitems.icons.text',
    icon: 'ri-markup-line',
    subItems: [{
      id: 79,
      label: 'menuitems.icons.list.feather',
      link: '/icons/feather'
    }, {
      id: 80,
      label: 'menuitems.icons.list.remix',
      link: '/icons/remix'
    }, {
      id: 81,
      label: 'menuitems.icons.list.boxicons',
      link: '/icons/boxicons'
    }, {
      id: 82,
      label: 'menuitems.icons.list.materialdesign',
      link: '/icons/mdi'
    }, {
      id: 83,
      label: 'menuitems.icons.list.fontawesome',
      link: '/icons/font-awesome'
    }, {
      id: 84,
      label: 'menuitems.icons.list.weather',
      link: '/icons/weather'
    }]
  }, {
    id: 85,
    label: 'menuitems.maps.text',
    icon: 'ri-map-pin-line',
    subItems: [{
      id: 86,
      label: 'menuitems.maps.list.googlemap',
      link: '/maps/google'
    }]
  }]
}, {
  id: 87,
  label: 'menuitems.pages.text',
  icon: 'ri-pages-line',
  subItems: [{
    id: 88,
    label: 'menuitems.authstyle.text',
    subItems: [{
      id: 89,
      label: 'menuitems.auth.list.login',
      link: '/auth/login-1'
    }, {
      id: 90,
      label: 'menuitems.auth.list.register',
      link: '/auth/register-1'
    }, {
      id: 91,
      label: 'menuitems.auth.list.signin-signup',
      link: '/auth/signin-signup'
    }, {
      id: 92,
      label: 'menuitems.auth.list.recoverpwd',
      link: '/auth/recoverpwd'
    }, {
      id: 93,
      label: 'menuitems.auth.list.lock-screen',
      link: '/auth/lock-screen'
    }, {
      id: 94,
      label: 'menuitems.auth.list.logout',
      link: '/auth/logout-1'
    }, {
      id: 95,
      label: 'menuitems.auth.list.confirm-mail',
      link: '/auth/confirm-mail'
    }]
  }, {
    id: 96,
    label: 'menuitems.authstyle2.text',
    subItems: [{
      id: 97,
      label: 'menuitems.auth.list.login-2',
      link: '/auth/login-2'
    }, {
      id: 98,
      label: 'menuitems.auth.list.register-2',
      link: '/auth/register-2'
    }, {
      id: 99,
      label: 'menuitems.auth.list.signin-signup-2',
      link: '/auth/signin-signup-2'
    }, {
      id: 100,
      label: 'menuitems.auth.list.recoverpwd-2',
      link: '/auth/recoverpwd-2'
    }, {
      id: 101,
      label: 'menuitems.auth.list.lock-screen-2',
      link: '/auth/lock-screen-2'
    }, {
      id: 102,
      label: 'menuitems.auth.list.logout-2',
      link: '/auth/logout-2'
    }, {
      id: 103,
      label: 'menuitems.auth.list.confirm-mail',
      link: '/auth/confirm-mail-2'
    }]
  }, {
    id: 104,
    label: 'menuitems.errors.text',
    subItems: [{
      id: 105,
      label: 'menuitems.extrapages.list.error404',
      link: '/error/404'
    }, {
      id: 106,
      label: 'menuitems.extrapages.list.error404-alt',
      link: '/error/404-alt'
    }, {
      id: 107,
      label: 'menuitems.extrapages.list.error500',
      link: '/error/500'
    }]
  }, {
    id: 108,
    label: 'menuitems.utility.text',
    subItems: [{
      id: 109,
      label: 'menuitems.extrapages.list.starter',
      link: '/extras/starter'
    }, {
      id: 110,
      label: 'menuitems.extrapages.list.timeline',
      link: '/extras/timeline'
    }, {
      id: 111,
      label: 'menuitems.extrapages.list.sitemap',
      link: '/extras/sitemap'
    }, {
      id: 112,
      label: 'menuitems.extrapages.list.invoice',
      link: '/extras/invoice'
    }, {
      id: 113,
      label: 'menuitems.extrapages.list.faqs',
      link: '/extras/faqs'
    }, {
      id: 114,
      label: 'menuitems.extrapages.list.search-results',
      link: '/extras/search-results'
    }, {
      id: 115,
      label: 'menuitems.extrapages.list.pricing',
      link: '/extras/pricing'
    }, {
      id: 116,
      label: 'menuitems.extrapages.list.maintenance',
      link: '/extras/maintenance'
    }, {
      id: 117,
      label: 'menuitems.extrapages.list.comingsoon',
      link: '/extras/coming-soon'
    }, {
      id: 118,
      label: 'menuitems.extrapages.list.lightbox',
      link: '/extras/lightbox'
    }]
  }]
}];

/***/ }),

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
var menuItems = [{
  id: 1,
  label: "menuitems.navigation.text",
  isTitle: true
}, {
  id: 2,
  label: 'menuitems.partner.text',
  icon: 'far fa-user-circle',
  link: '/partner'
}, {
  id: 3,
  label: 'menuitems.company.text',
  icon: 'ri-building-4-line',
  link: '/company'
}, {
  id: 4,
  label: 'menuitems.module.text',
  icon: 'fab fa-medium-m',
  link: '/module'
}, {
  id: 1115,
  label: "menuitems.dashboard.text",
  icon: "ri-dashboard-line",
  badge: {
    variant: "success",
    text: "menuitems.dashboard.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 1114,
    label: 'menuitems.dashboard.list.sales',
    link: '/'
  }, {
    id: 1113,
    label: 'menuitems.dashboard.list.crm',
    link: '/dashboard/crm'
  }, {
    id: 1115,
    label: 'menuitems.dashboard.list.analytics',
    link: '/dashboard/analytics'
  }]
}, {
  id: 1114,
  label: "menuitems.apps.text",
  isTitle: true
}, {
  id: 11113,
  label: "menuitems.chat.text",
  icon: "ri-message-2-line",
  link: '/apps/chat'
}, {
  id: 1112,
  label: "menuitems.ecommerce.text",
  icon: "ri-shopping-cart-2-line",
  badge: {
    variant: "danger",
    text: "menuitems.ecommerce.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 1111,
    label: "menuitems.ecommerce.list.products",
    link: "/ecommerce/products"
  }, {
    id: 1110,
    label: "menuitems.ecommerce.list.productsgrid",
    link: "/ecommerce/products-grid"
  }, {
    id: 1109,
    label: 'menuitems.ecommerce.list.productdetail',
    link: '/ecommerce/product-detail/1'
  }, {
    id: 1108,
    label: 'menuitems.ecommerce.list.createproduct',
    link: '/ecommerce/product-create'
  }, {
    id: 1107,
    label: "menuitems.ecommerce.list.customers",
    link: "/ecommerce/customers"
  }, {
    id: 1106,
    label: "menuitems.ecommerce.list.orders",
    link: "/ecommerce/orders"
  }, {
    id: 1105,
    label: "menuitems.ecommerce.list.orderdetail",
    link: "/ecommerce/order-detail"
  }, {
    id: 1104,
    label: "menuitems.ecommerce.list.sellers",
    link: "/ecommerce/sellers"
  }, {
    id: 1103,
    label: "menuitems.ecommerce.list.cart",
    link: "/ecommerce/cart"
  }, {
    id: 1102,
    label: "menuitems.ecommerce.list.checkout",
    link: "/ecommerce/checkout"
  }]
}, {
  id: 1101,
  label: 'menuitems.calendar.text',
  icon: 'ri-calendar-2-line',
  link: '/apps/calendar'
}, {
  id: 1100,
  label: 'menuitems.email.text',
  icon: 'ri-mail-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1099,
    label: 'menuitems.email.list.inbox',
    link: '/email/inbox'
  }, {
    id: 1098,
    label: 'menuitems.email.list.reademail',
    link: '/email/reademail/1'
  }, {
    id: 1097,
    label: 'menuitems.email.list.template',
    link: '/email/templates'
  }]
}, {
  id: 1096,
  label: 'menuitems.companies.text',
  icon: 'ri-building-4-line',
  link: '/apps/companies'
}, {
  id: 1095,
  label: 'menuitems.tasks.text',
  icon: 'ri-task-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1093,
    label: 'menuitems.tasks.list.list',
    link: '/task/list'
  }, {
    id: 1092,
    label: 'menuitems.tasks.list.detail',
    link: '/task/detail'
  }, {
    id: 1091,
    label: 'menuitems.tasks.list.kanban',
    link: '/task/kanban'
  }]
}, {
  id: 1090,
  label: 'menuitems.ticket.text',
  icon: 'ri-customer-service-2-line',
  link: '/apps/tickets'
}, {
  id: 1089,
  label: 'menuitems.contacts.text',
  icon: 'ri-profile-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1088,
    label: 'menuitems.contacts.list.members',
    link: '/contacts/list'
  }, {
    id: 1087,
    label: 'menuitems.contacts.list.profile',
    link: '/contacts/profile'
  }]
}, {
  id: 1086,
  label: 'menuitems.filemanager.text',
  icon: 'ri-folders-line',
  link: '/apps/file-manager'
}, {
  id: 1085,
  label: "menuitems.custom.text",
  isTitle: true
}, {
  id: 1084,
  label: 'menuitems.auth.text',
  icon: 'ri-shield-user-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1083,
    label: 'menuitems.auth.list.login',
    link: '/auth/login-1'
  }, {
    id: 1082,
    label: 'menuitems.auth.list.login-2',
    link: '/auth/login-2'
  }, {
    id: 1081,
    label: 'menuitems.auth.list.register',
    link: '/auth/register-1'
  }, {
    id: 1080,
    label: 'menuitems.auth.list.register-2',
    link: '/auth/register-2'
  }, {
    id: 1079,
    label: 'menuitems.auth.list.signin-signup',
    link: '/auth/signin-signup'
  }, {
    id: 1078,
    label: 'menuitems.auth.list.signin-signup-2',
    link: '/auth/signin-signup-2'
  }, {
    id: 1077,
    label: 'menuitems.auth.list.recoverpwd',
    link: '/auth/recoverpwd'
  }, {
    id: 1076,
    label: 'menuitems.auth.list.recoverpwd-2',
    link: '/auth/recoverpwd-2'
  }, {
    id: 1075,
    label: 'menuitems.auth.list.lock-screen',
    link: '/auth/lock-screen'
  }, {
    id: 1074,
    label: 'menuitems.auth.list.lock-screen-2',
    link: '/auth/lock-screen-2'
  }, {
    id: 1073,
    label: 'menuitems.auth.list.logout',
    link: '/auth/logout-1'
  }, {
    id: 1072,
    label: 'menuitems.auth.list.logout-2',
    link: '/auth/logout-2'
  }, {
    id: 1072,
    label: 'menuitems.auth.list.confirm-mail',
    link: '/auth/confirm-mail'
  }, {
    id: 1072,
    label: 'menuitems.auth.list.confirm-mail-2',
    link: '/auth/confirm-mail-2'
  }]
}, {
  id: 1071,
  label: 'menuitems.extrapages.text',
  icon: 'ri-pages-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1070,
    label: 'menuitems.extrapages.list.starter',
    link: '/extras/starter'
  }, {
    id: 1069,
    label: 'menuitems.extrapages.list.timeline',
    link: '/extras/timeline'
  }, {
    id: 1068,
    label: 'menuitems.extrapages.list.sitemap',
    link: '/extras/sitemap'
  }, {
    id: 1067,
    label: 'menuitems.extrapages.list.invoice',
    link: '/extras/invoice'
  }, {
    id: 1066,
    label: 'menuitems.extrapages.list.faqs',
    link: '/extras/faqs'
  }, {
    id: 1065,
    label: 'menuitems.extrapages.list.search-results',
    link: '/extras/search-results'
  }, {
    id: 1064,
    label: 'menuitems.extrapages.list.pricing',
    link: '/extras/pricing'
  }, {
    id: 1063,
    label: 'menuitems.extrapages.list.maintenance',
    link: '/extras/maintenance'
  }, {
    id: 1062,
    label: 'menuitems.extrapages.list.comingsoon',
    link: '/extras/coming-soon'
  }, {
    id: 1061,
    label: 'menuitems.extrapages.list.lightbox',
    link: '/extras/lightbox'
  }, {
    id: 1060,
    label: 'menuitems.extrapages.list.error404',
    link: '/error/404'
  }, {
    id: 1059,
    label: 'menuitems.extrapages.list.error404-alt',
    link: '/error/404-alt'
  }, {
    id: 1058,
    label: 'menuitems.extrapages.list.error500',
    link: '/error/500'
  }]
}, {
  id: 1057,
  label: "menuitems.components.text",
  isTitle: true
}, {
  id: 1056,
  label: 'menuitems.ui.text',
  icon: 'ri-pencil-ruler-2-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1055,
    label: 'menuitems.ui.list.avatars',
    link: '/ui/avatars'
  }, {
    id: 1054,
    label: 'menuitems.ui.list.buttons',
    link: '/ui/buttons'
  }, {
    id: 1053,
    label: 'menuitems.ui.list.cards',
    link: '/ui/cards'
  }, {
    id: 1052,
    label: 'menuitems.ui.list.carousel',
    link: '/ui/carousel'
  }, {
    id: 1051,
    label: 'menuitems.ui.list.dropdowns',
    link: '/ui/dropdowns'
  }, {
    id: 1050,
    label: 'menuitems.ui.list.video',
    link: '/ui/video'
  }, {
    id: 1049,
    label: 'menuitems.ui.list.general',
    link: '/ui/general'
  }, {
    id: 1048,
    label: 'menuitems.ui.list.grid',
    link: '/ui/grid'
  }, {
    id: 1047,
    label: 'menuitems.ui.list.images',
    link: '/ui/images'
  }, {
    id: 1046,
    label: 'menuitems.ui.list.listgroup',
    link: '/ui/list-group'
  }, {
    id: 1045,
    label: 'menuitems.ui.list.modals',
    link: '/ui/modals'
  }, {
    id: 1044,
    label: 'menuitems.ui.list.notifications',
    link: '/ui/notifications'
  }, {
    id: 1043,
    label: 'menuitems.ui.list.portlet',
    link: '/ui/portlets'
  }, {
    id: 1042,
    label: 'menuitems.ui.list.progress',
    link: '/ui/progress'
  }, {
    id: 1041,
    label: 'menuitems.ui.list.ribbons',
    link: '/ui/ribbons'
  }, {
    id: 1040,
    label: 'menuitems.ui.list.spinners',
    link: '/ui/spinners'
  }, {
    id: 1039,
    label: 'menuitems.ui.list.tabs',
    link: '/ui/tabs-accordions'
  }, {
    id: 1038,
    label: 'menuitems.ui.list.tooltip',
    link: '/ui/tooltips-popovers'
  }, {
    id: 1037,
    label: 'menuitems.ui.list.typography',
    link: '/ui/typography'
  }]
}, {
  id: 1036,
  label: 'menuitems.extendedui.text',
  icon: 'ri-stack-line',
  badge: {
    variant: "primary",
    text: "menuitems.extendedui.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 1035,
    label: 'menuitems.extendedui.list.rangeslider',
    link: '/extended/rangeslider'
  }, {
    id: 1034,
    label: 'menuitems.extendedui.list.sweetalert',
    link: '/extended/sweet-alert'
  }, {
    id: 1033,
    label: 'menuitems.extendedui.list.tour',
    link: '/extended/tour'
  }, {
    id: 1032,
    label: 'menuitems.extendedui.list.scrollspy',
    link: '/extended/scrollspy'
  }]
}, {
  id: 1031,
  label: 'menuitems.widgets.text',
  icon: 'ri-honour-line',
  link: '/widgets'
}, {
  id: 1024,
  label: 'menuitems.icons.text',
  icon: 'ri-markup-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1025,
    label: 'menuitems.icons.list.feather',
    link: '/icons/feather'
  }, {
    id: 1026,
    label: 'menuitems.icons.list.remix',
    link: '/icons/remix'
  }, {
    id: 1027,
    label: 'menuitems.icons.list.boxicons',
    link: '/icons/boxicons'
  }, {
    id: 1028,
    label: 'menuitems.icons.list.materialdesign',
    link: '/icons/mdi'
  }, {
    id: 1029,
    label: 'menuitems.icons.list.fontawesome',
    link: '/icons/font-awesome'
  }, {
    id: 1030,
    label: 'menuitems.icons.list.weather',
    link: '/icons/weather'
  }]
}, {
  id: 1023,
  label: 'menuitems.forms.text',
  icon: 'ri-eraser-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1022,
    label: 'menuitems.forms.list.elements',
    link: '/forms/elements'
  }, {
    id: 1021,
    label: 'menuitems.forms.list.advanced',
    link: '/forms/advanced'
  }, {
    id: 1020,
    label: 'menuitems.forms.list.validation',
    link: '/forms/validation'
  }, {
    id: 1019,
    label: 'menuitems.forms.list.wizard',
    link: '/forms/wizard'
  }, {
    id: 1018,
    label: 'menuitems.forms.list.mask',
    link: '/forms/mask'
  }, {
    id: 1017,
    label: 'menuitems.forms.list.editor',
    link: '/forms/quill'
  }, {
    id: 1016,
    label: 'menuitems.forms.list.fileupload',
    link: '/forms/file-uploads'
  }]
}, {
  id: 1015,
  label: 'menuitems.tables.text',
  icon: 'ri-table-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1014,
    label: 'menuitems.tables.list.basic',
    link: '/tables/basic'
  }, {
    id: 1013,
    label: 'menuitems.tables.list.advanced',
    link: '/tables/advanced'
  }]
}, {
  id: 1012,
  label: 'menuitems.charts.text',
  icon: 'ri-bar-chart-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1007,
    label: 'menuitems.charts.list.apex',
    link: '/charts/apex'
  }, {
    id: 1008,
    label: 'menuitems.charts.list.chartjs',
    link: '/charts/chartjs'
  }, {
    id: 1009,
    label: 'menuitems.charts.list.c3',
    link: '/charts/c3'
  }, {
    id: 1010,
    label: 'menuitems.charts.list.chartist',
    link: '/charts/chartist'
  }, {
    id: 1011,
    label: 'menuitems.charts.list.knob',
    link: '/charts/knob'
  }]
}, {
  id: 1006,
  label: 'menuitems.maps.text',
  icon: 'ri-map-pin-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 1005,
    label: 'menuitems.maps.list.googlemap',
    link: '/maps/google'
  }]
}, {
  id: 1004,
  label: "menuitems.multilevel.text",
  icon: "ri-share-line",
  isMenuCollapsed: false,
  subItems: [{
    id: 1003,
    label: "menuitems.multilevel.list.level1.1",
    link: "javascript: void(0);"
  }, {
    id: 1002,
    label: "menuitems.multilevel.list.level1.2",
    isMenuCollapsed: false,
    subItems: [{
      id: 1001,
      label: "menuitems.multilevel.list.level1.level2.1",
      link: "javascript: void(0);"
    }, {
      id: 1000,
      label: "menuitems.multilevel.list.level1.level2.2",
      link: "javascript: void(0);"
    }]
  }]
}];

/***/ }),

/***/ "./resources/js/helper/alphaArabic.js":
/*!********************************************!*\
  !*** ./resources/js/helper/alphaArabic.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var re = /^[\u0621-\u064A ]+$/;
  return re.test(value);
}

/***/ }),

/***/ "./resources/js/helper/alphaEnglish.js":
/*!*********************************************!*\
  !*** ./resources/js/helper/alphaEnglish.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var re = /^[a-zA-Z ]+$/;
  return re.test(value);
}

/***/ }),

/***/ "./resources/js/helper/tableSort.js":
/*!******************************************!*\
  !*** ./resources/js/helper/tableSort.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dynamicSortDate": () => (/* binding */ dynamicSortDate),
/* harmony export */   "dynamicSortNumber": () => (/* binding */ dynamicSortNumber),
/* harmony export */   "dynamicSortString": () => (/* binding */ dynamicSortString)
/* harmony export */ });
function dynamicSortString(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
;
function dynamicSortNumber(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
;
function dynamicSortDate(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
;

/***/ }),

/***/ "./resources/js/state/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/state/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authComputed": () => (/* binding */ authComputed),
/* harmony export */   "authFackMethods": () => (/* binding */ authFackMethods),
/* harmony export */   "authMethods": () => (/* binding */ authMethods),
/* harmony export */   "layoutComputed": () => (/* binding */ layoutComputed),
/* harmony export */   "layoutMethods": () => (/* binding */ layoutMethods),
/* harmony export */   "notificationMethods": () => (/* binding */ notificationMethods)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authComputed = _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('auth', {
  currentUser: function currentUser(state) {
    return state.currentUser;
  }
})), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['loggedIn']));
var layoutComputed = _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('layout', {
  layoutType: function layoutType(state) {
    return state.layoutType;
  },
  leftSidebarType: function leftSidebarType(state) {
    return state.leftSidebarType;
  },
  layoutWidth: function layoutWidth(state) {
    return state.layoutWidth;
  },
  leftSidebarSize: function leftSidebarSize(state) {
    return state.leftSidebarSize;
  },
  menuPosition: function menuPosition(state) {
    return state.menuPosition;
  },
  topbar: function topbar(state) {
    return state.topbar;
  },
  loader: function loader(state) {
    return state.loader;
  }
}));
var authMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logIn', 'logOut', 'register', 'resetPassword']);
var layoutMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('layout', ['changeLayoutType', 'changeLayoutWidth', 'changeLeftSidebarType', 'changeLeftSidebarSize', 'changeTopbar', 'changeLoaderValue', 'changeMenuPosition']);
var authFackMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('authfack', ['login', 'registeruser', 'logout']);
var notificationMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('notification', ['success', 'error', 'clear']);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-title-box {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loader[data-v-155ec09e] {\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    opacity: .6;\n    z-index: 100;\n}\n.loader-large[data-v-155ec09e] {\n    width: 4rem;\n    height: 4rem\n}\n.loader-small[data-v-155ec09e] {\n    width: 1rem;\n    height: 1rem\n}\n.loader-middle[data-v-155ec09e] {\n    width: 2.25rem;\n    height: 2.25rem\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-fluid {\n    padding: unset;\n    margin: unset;\n}\n.content-page {\n    padding: 70px 0 65px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Default\n */\n/**\n * Bulma\n */\n/**\n * Bootstrap\n */\n.vue-switcher {\n  position: relative;\n  display: inline-block;\n}\n.vue-switcher__label {\n    display: block;\n    font-size: 10px;\n    margin-bottom: 5px;\n}\n.vue-switcher input {\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n}\n.vue-switcher div {\n    height: 15px;\n    width: 36px;\n    position: relative;\n    border-radius: 30px;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    cursor: pointer;\n    transition: linear .2s, background-color linear .2s;\n}\n.vue-switcher div:after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      border-radius: 100px;\n      display: block;\n      transition: linear .15s, background-color linear .15s;\n      position: absolute;\n      left: 100%;\n      margin-left: -18px;\n      cursor: pointer;\n      top: -3px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.vue-switcher--unchecked div {\n    justify-content: flex-end;\n}\n.vue-switcher--unchecked div:after {\n      left: 15px;\n}\n.vue-switcher--disabled div {\n    opacity: .3;\n}\n.vue-switcher--disabled input {\n    cursor: not-allowed;\n}\n.vue-switcher--bold div {\n    top: -8px;\n    height: 26px;\n    width: 51px;\n}\n.vue-switcher--bold div:after {\n      margin-left: -24px;\n      top: 3px;\n}\n.vue-switcher--bold--unchecked div:after {\n    left: 28px;\n}\n.vue-switcher--bold .vue-switcher__label span {\n    padding-bottom: 7px;\n    display: inline-block;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div {\n    background-color: #b7b7b7;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div:after {\n      background-color: #9d9d9d;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #aaa;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #c4c4c4;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div {\n    background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div:after {\n      background-color: #539bb9;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #c0dae5;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div {\n    background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div:after {\n      background-color: #b95353;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #e5c0c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div {\n    background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div:after {\n      background-color: #bab353;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #e6e3c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div {\n    background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div:after {\n      background-color: #b97953;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div {\n    background-color: #e5cec0;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after {\n      background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div {\n    background-color: #77c88d;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div:after {\n      background-color: #53b96e;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #c0e5ca;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #77c88d;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div {\n    background-color: gainsboro;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #e8e8e8;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div {\n    background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div:after {\n      background-color: #00d1b2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #6bffe9;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div {\n    background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div:after {\n      background-color: #3273dc;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #b5ccf2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div {\n    background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div:after {\n      background-color: #ff3860;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #ffd1da;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div {\n    background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after {\n      background-color: #ffdd57;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #fffcf0;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div {\n    background-color: #3dde75;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div:after {\n      background-color: #22c65b;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #94edb3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #3dde75;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div {\n    background-color: #e6e6e6;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: whitesmoke;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div {\n    background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after {\n      background-color: #337ab7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #9fc4e4;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div {\n    background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after {\n      background-color: #5cb85c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div {\n    background-color: #c7e6c7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after {\n      background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div {\n    background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after {\n      background-color: #5bc0de;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div {\n    background-color: #daf1f8;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after {\n      background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div {\n    background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after {\n      background-color: #f0ad4e;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div {\n    background-color: #fceedb;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after {\n      background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div {\n    background-color: #d9534f;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after {\n      background-color: #c9302c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div {\n    background-color: #eba5a3;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after {\n      background-color: #d9534f;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/assets/images/logo-sm-dark.png":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/logo-sm-dark.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm-dark.png?3acb546899038322f9b0bf5fc0f038ba";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/logo-sm.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm.png?d0b4aaf8358a778085086603d32d666e";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-1.jpg?cefbe3d21660cf096fd067ef2dc5b773";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-10.jpg":
/*!********************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-10.jpg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-10.jpg?36fcf292e489198725b24e95176ced89";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-2.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-2.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-2.jpg?d8247dbf6a9e498e033f445ef6992b64";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-4.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-4.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-4.jpg?a2e1eb529e4e11f36fb1765321c57ec0";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-5.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-5.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-5.jpg?59af67849fd28e58abe9dfc634772192";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-6.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-6.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-6.jpg?d98a113b0a21674ffd70a754735b7ecc";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-7.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-7.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-7.jpg?3fec102cae56f3caa3f62758767a5763";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-8.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-8.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-8.jpg?40b8158c02ea476b9c54cac14387b8cb";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-9.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-9.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-9.jpg?effcd89f3d82672513777065799fcfec";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_155ec09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_155ec09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_155ec09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v10.16.9
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  var applyStyles = function applyStyles(icon, params) {
    for (var iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    warnAboutDeprecation('Swal.queue()', "async/await");
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }

      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = _extends({}, defaultParams.showClass, params.showClass);
    params.hideClass = _extends({}, defaultParams.hideClass, params.hideClass); // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.16.9';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:column;align-items:stretch;width:auto;padding:1.25em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;margin:0 .625em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container{padding:.625em 0 0}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex:1;flex-basis:auto!important;align-self:stretch;width:auto;height:2.2em;height:auto;margin:0 .3125em;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue":
/*!****************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");
/* harmony import */ var _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
/* harmony import */ var _dist_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dist/switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.render,
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-switches/src/switches.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'switches',

    props: {
        typeBold: {
            default: false
        },

        value: {
            default: false
        },

        disabled: {
            default: false
        },

        label: {
            default: ''
        },

        textEnabled: {
            default: ''
        },

        textDisabled: {
            default: ''
        },

        color: {
            default: 'default'
        },

        theme: {
            default: 'default'
        },

        emitOnMount: {
            default: true
        }
    },

    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },

    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },

    computed: {
        classObject () {

            const { color, value, theme, typeBold, disabled } = this;

            return {
                'vue-switcher' : true,
                ['vue-switcher--unchecked'] : !value,
                ['vue-switcher--disabled'] : disabled,
                ['vue-switcher--bold']: typeBold,
                ['vue-switcher--bold--unchecked']: typeBold && !value,
                [`vue-switcher-theme--${theme}`] : color,
                [`vue-switcher-color--${color}`] : color,
            };

        },

        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
});



/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=template&id=cea5fb04& */ "./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&");
/* harmony import */ var _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.render,
  _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Horizontal-navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page-header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Page-header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page-header.vue?vue&type=template&id=7182f8f0& */ "./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&");
/* harmony import */ var _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page-header.vue?vue&type=script&lang=js& */ "./resources/js/components/Page-header.vue?vue&type=script&lang=js&");
/* harmony import */ var _Page_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page-header.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page-header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Rightbar.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Rightbar.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=template&id=1c913662& */ "./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&");
/* harmony import */ var _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Rightbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Rightbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Topbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Topbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar.vue?vue&type=template&id=57e4246e& */ "./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&");
/* harmony import */ var _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Topbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Topbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=template&id=174b4c31& */ "./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&");
/* harmony import */ var _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.render,
  _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Two-column-sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loader.vue":
/*!********************************************!*\
  !*** ./resources/js/components/loader.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=155ec09e&scoped=true& */ "./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true&");
/* harmony import */ var _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.vue?vue&type=script&lang=js& */ "./resources/js/components/loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _loader_vue_vue_type_style_index_0_id_155ec09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& */ "./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "155ec09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/errorMessage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/widgets/errorMessage.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true& */ "./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true&");
/* harmony import */ var _errorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorMessage.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _errorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78cbd98a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/errorMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detached.vue?vue&type=template&id=7032c937& */ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");
/* harmony import */ var _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detached.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render,
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/detached.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal.vue?vue&type=template&id=29c46cae& */ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");
/* harmony import */ var _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render,
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/horizontal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/main.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/layouts/main.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=de3c3304& */ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two-column.vue?vue&type=template&id=ffe4ac08& */ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");
/* harmony import */ var _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-column.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render,
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/two-column.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical.vue?vue&type=template&id=7397033b& */ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");
/* harmony import */ var _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
/* harmony import */ var _vertical_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render,
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/vertical.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/module/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/pages/module/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=54f21bce& */ "./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/module/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/module/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Rightbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Rightbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Topbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Topbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_errorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./errorMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_errorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/module/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/pages/module/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_155ec09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=style&index=0&id=155ec09e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");


/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");


/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=template&id=cea5fb04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&");


/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=template&id=7182f8f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&");


/***/ }),

/***/ "./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=template&id=1c913662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&");


/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");


/***/ }),

/***/ "./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=template&id=57e4246e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&");


/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=template&id=174b4c31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&");


/***/ }),

/***/ "./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_155ec09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=155ec09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_errorMessage_vue_vue_type_template_id_78cbd98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true&");


/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=template&id=7032c937& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");


/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=template&id=29c46cae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");


/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=de3c3304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");


/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=template&id=ffe4ac08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=template&id=7397033b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");


/***/ }),

/***/ "./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54f21bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=54f21bce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { class: _vm.classObject }, [
    _vm.shouldShowLabel
      ? _c("span", { staticClass: "vue-switcher__label" }, [
          _vm.label
            ? _c("span", { domProps: { textContent: _vm._s(_vm.label) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && _vm.value
            ? _c("span", { domProps: { textContent: _vm._s(_vm.textEnabled) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && !_vm.value
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.textDisabled) },
              })
            : _vm._e(),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      attrs: { type: "checkbox", disabled: _vm.disabled },
      domProps: { checked: _vm.value },
      on: { change: _vm.trigger },
    }),
    _vm._v(" "),
    _c("div"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _vm._v(
            "\r\n                " +
              _vm._s(new Date().getFullYear()) +
              " © Minton theme by "
          ),
          _c("a", { attrs: { href: "" } }, [_vm._v("Themesbrand")]),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        { staticClass: "text-md-right footer-links d-none d-sm-block" },
        [
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v("About Us"),
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "javascript:void(0);" } }, [_vm._v("Help")]),
          _vm._v(" "),
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v("Contact Us"),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "topnav" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "nav",
          { staticClass: "navbar navbar-light navbar-expand-lg topnav-menu" },
          [
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "topnav-menu-content" },
              },
              [
                _c(
                  "ul",
                  { staticClass: "navbar-nav" },
                  _vm._l(_vm.menuItems, function (item, index) {
                    return _c(
                      "li",
                      { key: index, staticClass: "nav-item dropdown" },
                      [
                        !item.subItems
                          ? _c(
                              "router-link",
                              {
                                staticClass:
                                  "nav-link dropdown-toggle arrow-none side-nav-link-ref",
                                attrs: { tag: "a", to: item.link },
                              },
                              [
                                _c("i", { class: item.icon + " mr-1" }),
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(_vm.$t(item.label)) +
                                    "\r\n                            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.subItems
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "nav-link dropdown-toggle arrow-none",
                                attrs: {
                                  href: "javascript: void(0);",
                                  id: "topnav-components",
                                  role: "button",
                                },
                                on: { click: _vm.onMenuClick },
                              },
                              [
                                _c("i", { class: item.icon + " mr-1" }),
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(_vm.$t(item.label)) +
                                    "\r\n                                "
                                ),
                                _c("div", { staticClass: "arrow-down" }),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasItems(item)
                          ? _c(
                              "div",
                              {
                                staticClass: "dropdown-menu row",
                                attrs: {
                                  "aria-labelledby": "topnav-dashboard",
                                },
                              },
                              [
                                _vm._l(
                                  item.subItems,
                                  function (subitem, index) {
                                    return [
                                      !_vm.hasItems(subitem)
                                        ? _c(
                                            "router-link",
                                            {
                                              key: index,
                                              staticClass:
                                                "col dropdown-item side-nav-link-ref",
                                              attrs: { to: subitem.link },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t(subitem.label))
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hasItems(subitem)
                                        ? _c(
                                            "div",
                                            {
                                              key: index,
                                              staticClass: "dropdown",
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "dropdown-item dropdown-toggle",
                                                  attrs: {
                                                    href: "javascript: void(0);",
                                                  },
                                                  on: {
                                                    click: _vm.onMenuClick,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            " +
                                                      _vm._s(
                                                        _vm.$t(subitem.label)
                                                      ) +
                                                      "\r\n                                            "
                                                  ),
                                                  _c("div", {
                                                    staticClass: "arrow-down",
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "dropdown-menu",
                                                },
                                                _vm._l(
                                                  subitem.subItems,
                                                  function (subSubitem, index) {
                                                    return _c(
                                                      "router-link",
                                                      {
                                                        key: index,
                                                        staticClass:
                                                          "dropdown-item side-nav-link-ref",
                                                        attrs: {
                                                          to: subSubitem.link,
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              subSubitem.label
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                1
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  }
                                ),
                              ],
                              2
                            )
                          : _vm._e(),
                      ],
                      1
                    )
                  }),
                  0
                ),
              ]
            ),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", {
        staticClass: "page-title-box",
        class: {
          "page-title-box-alt":
            _vm.layoutType !== "vertical" && _vm.layoutType !== "two-column",
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "click-outside",
            rawName: "v-click-outside",
            value: _vm.config,
            expression: "config",
          },
        ],
        staticClass: "right-bar",
      },
      [
        _c(
          "simplebar",
          { staticClass: "h-100" },
          [
            _c(
              "b-tabs",
              {
                staticClass: "nav-bordered",
                attrs: { "content-class": "pt-0", justified: "" },
              },
              [
                _c(
                  "b-tab",
                  {
                    scopedSlots: _vm._u([
                      {
                        key: "title",
                        fn: function () {
                          return [
                            _c("i", {
                              staticClass:
                                "mdi mdi-message-text-outline d-block font-22 my-1",
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c("form", { staticClass: "search-bar p-3" }, [
                      _c("div", { staticClass: "position-relative" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Search..." },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "mdi mdi-magnify" }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium px-3 mt-2 text-uppercase",
                      },
                      [_vm._v("\n            Group Chats\n          ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-2" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-reset notification-item pl-3 mb-2 d-block",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("i", {
                            staticClass:
                              "mdi mdi-checkbox-blank-circle-outline mr-1 text-success",
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mb-0 mt-1" }, [
                            _vm._v("App Development"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-reset notification-item pl-3 mb-2 d-block",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("i", {
                            staticClass:
                              "mdi mdi-checkbox-blank-circle-outline mr-1 text-warning",
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mb-0 mt-1" }, [
                            _vm._v("Office Work"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-reset notification-item pl-3 mb-2 d-block",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("i", {
                            staticClass:
                              "mdi mdi-checkbox-blank-circle-outline mr-1 text-danger",
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mb-0 mt-1" }, [
                            _vm._v("Personal Group"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-reset notification-item pl-3 d-block",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("i", {
                            staticClass:
                              "mdi mdi-checkbox-blank-circle-outline mr-1",
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mb-0 mt-1" }, [
                            _vm._v("Freelance"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium px-3 mt-3 text-uppercase",
                      },
                      [
                        _vm._v("\n            Favourites\n            "),
                        _c(
                          "a",
                          {
                            staticClass: "font-18 text-danger",
                            attrs: { href: "javascript: void(0);" },
                          },
                          [
                            _c("i", {
                              staticClass: "float-right mdi mdi-plus-circle",
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-2" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-10.jpg */ "./resources/js/assets/images/users/avatar-10.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Andrew Mackie"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      It will seem like simplified English.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Rory Dalyell"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      To an English person, it will seem like simplified\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status busy" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-9.jpg */ "./resources/js/assets/images/users/avatar-9.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Jaxon Dunhill"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      To achieve this, it would be necessary.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium px-3 mt-3 text-uppercase",
                      },
                      [
                        _vm._v("\n            Other Chats\n            "),
                        _c(
                          "a",
                          {
                            staticClass: "font-18 text-danger",
                            attrs: { href: "javascript: void(0);" },
                          },
                          [
                            _c("i", {
                              staticClass: "float-right mdi mdi-plus-circle",
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-2 pb-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", {
                                  staticClass: "user-status online",
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-2.jpg */ "./resources/js/assets/images/users/avatar-2.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Jackson Therry"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      Everyone realizes why a new common language.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status away" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-4.jpg */ "./resources/js/assets/images/users/avatar-4.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Charles Deakin"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      The languages only differ in their grammar.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", {
                                  staticClass: "user-status online",
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-5.jpg */ "./resources/js/assets/images/users/avatar-5.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Ryan Salting"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      If several languages coalesce the grammar of the\n                      resulting.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", {
                                  staticClass: "user-status online",
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-6.jpg */ "./resources/js/assets/images/users/avatar-6.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Sean Howse"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      It will seem like simplified English.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status busy" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-7.jpg */ "./resources/js/assets/images/users/avatar-7.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Dean Coward"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      The new common language will be more simple.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset notification-item",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("div", { staticClass: "media" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative mr-2" },
                              [
                                _c("span", { staticClass: "user-status away" }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "rounded-circle avatar-sm",
                                  attrs: {
                                    src: __webpack_require__(/*! ../assets/images/users/avatar-8.jpg */ "./resources/js/assets/images/users/avatar-8.jpg"),
                                    alt: "user-pic",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body overflow-hidden" },
                              [
                                _c("h6", { staticClass: "mt-0 mb-1 font-14" }, [
                                  _vm._v("Hayley East"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-13 text-muted" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 text-truncate" },
                                      [
                                        _vm._v(
                                          "\n                      One could refuse to pay expensive translators.\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center mt-3" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-white",
                            attrs: { href: "javascript:void(0);" },
                          },
                          [
                            _c("i", {
                              staticClass: "mdi mdi-spin mdi-loading mr-2",
                            }),
                            _vm._v(
                              "\n                Load more\n              "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  {
                    scopedSlots: _vm._u([
                      {
                        key: "title",
                        fn: function () {
                          return [
                            _c("i", {
                              staticClass:
                                "mdi mdi-format-list-checkbox d-block font-22 my-1",
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium p-3 m-0 text-uppercase",
                      },
                      [_vm._v("\n            Working Tasks\n          ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "px-2" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                App Development"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("75%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-success",
                                staticStyle: { width: "75%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "75",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                Database Repair"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("37%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-info",
                                staticStyle: { width: "37%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "37",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                Backup Create"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("52%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-warning",
                                staticStyle: { width: "52%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "52",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium px-3 mb-0 mt-4 text-uppercase",
                      },
                      [_vm._v("\n            Upcoming Tasks\n          ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-2" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                Sales Reporting"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("12%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-danger",
                                staticStyle: { width: "12%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "12",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                Redesign Website"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("67%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-primary",
                                staticStyle: { width: "67%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "67",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "text-reset item-hovered d-block p-2",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v("\n                New Admin Design"),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("84%"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-2",
                              staticStyle: { height: "4px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar bg-success",
                                staticStyle: { width: "84%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "84",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-3 mt-2" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-success btn-block waves-effect waves-light",
                          attrs: { href: "javascript: void(0);" },
                        },
                        [_vm._v("Create Task")]
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  {
                    attrs: { active: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "title",
                        fn: function () {
                          return [
                            _c("i", {
                              staticClass:
                                "mdi mdi-cog-outline d-block font-22 my-1",
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light",
                      },
                      [
                        _c("span", { staticClass: "d-block py-1" }, [
                          _vm._v("Theme Settings"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "p-3" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "alert alert-warning",
                            attrs: { role: "alert" },
                          },
                          [
                            _c("strong", [_vm._v("Customize ")]),
                            _vm._v(
                              " the overall color scheme, sidebar\n              menu, etc.\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "font-weight-medium font-14 mt-4 mb-2 pb-1",
                          },
                          [_vm._v("Layout")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-radio-group",
                          {
                            attrs: { stacked: "" },
                            on: {
                              input: function ($event) {
                                return _vm.changeLayout($event)
                              },
                            },
                            model: {
                              value: _vm.layout,
                              callback: function ($$v) {
                                _vm.layout = $$v
                              },
                              expression: "layout",
                            },
                          },
                          [
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "vertical" },
                              },
                              [_vm._v("Vertical")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "horizontal" },
                              },
                              [_vm._v("Horizontal")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "detached" },
                              },
                              [_vm._v("Detached")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "two-column" },
                              },
                              [_vm._v("Two Column")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "font-weight-medium font-14 mt-4 mb-2 pb-1",
                          },
                          [_vm._v("Width")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-radio-group",
                          {
                            attrs: { stacked: "" },
                            on: {
                              input: function ($event) {
                                return _vm.changeWidth($event)
                              },
                            },
                            model: {
                              value: _vm.width,
                              callback: function ($$v) {
                                _vm.width = $$v
                              },
                              expression: "width",
                            },
                          },
                          [
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "fluid" },
                              },
                              [_vm._v("Fluid")]
                            ),
                            _vm._v(" "),
                            _c("b-form-radio", { attrs: { value: "boxed" } }, [
                              _vm._v("Boxed"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "font-weight-medium font-14 mt-4 mb-2 pb-1",
                          },
                          [_vm._v("Topbar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-radio-group",
                          {
                            attrs: { stacked: "" },
                            on: {
                              input: function ($event) {
                                return _vm.changeTopbartype($event)
                              },
                            },
                            model: {
                              value: _vm.topbar,
                              callback: function ($$v) {
                                _vm.topbar = $$v
                              },
                              expression: "topbar",
                            },
                          },
                          [
                            _c(
                              "b-form-radio",
                              { staticClass: "mb-1", attrs: { value: "dark" } },
                              [_vm._v("Dark")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "light" },
                              },
                              [_vm._v("Light")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "font-weight-medium font-14 mt-4 mb-2 pb-1",
                          },
                          [
                            _vm._v("\n              Menus Positon "),
                            _c("small", [_vm._v("(Leftsidebar and Topbar)")]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-radio-group",
                          {
                            attrs: { stacked: "" },
                            on: {
                              input: function ($event) {
                                return _vm.changemenuPosition($event)
                              },
                            },
                            model: {
                              value: _vm.menu,
                              callback: function ($$v) {
                                _vm.menu = $$v
                              },
                              expression: "menu",
                            },
                          },
                          [
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "fixed" },
                              },
                              [_vm._v("Fixed")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-radio",
                              {
                                staticClass: "mb-1",
                                attrs: { value: "scrollable" },
                              },
                              [_vm._v("Scrollable")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.layout !== "horizontal"
                          ? _c(
                              "div",
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "font-weight-medium font-14 mt-4 mb-2 pb-1",
                                  },
                                  [
                                    _vm._v(
                                      "\n                Left Sidebar Color\n              "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-radio-group",
                                  {
                                    attrs: { stacked: "" },
                                    on: {
                                      input: function ($event) {
                                        return _vm.changeType($event)
                                      },
                                    },
                                    model: {
                                      value: _vm.sidebarType,
                                      callback: function ($$v) {
                                        _vm.sidebarType = $$v
                                      },
                                      expression: "sidebarType",
                                    },
                                  },
                                  [
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "dark" },
                                      },
                                      [_vm._v("Dark")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "light" },
                                      },
                                      [_vm._v("Light")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "brand" },
                                      },
                                      [_vm._v("Brand")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "gradient" },
                                      },
                                      [_vm._v("Gradient")]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "font-weight-medium font-14 mt-4 mb-2 pb-1",
                                  },
                                  [
                                    _vm._v(
                                      "\n                Left Sidebar Size\n              "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-radio-group",
                                  {
                                    attrs: { stacked: "" },
                                    on: {
                                      input: function ($event) {
                                        return _vm.changeSize($event)
                                      },
                                    },
                                    model: {
                                      value: _vm.sidebarSize,
                                      callback: function ($$v) {
                                        _vm.sidebarSize = $$v
                                      },
                                      expression: "sidebarSize",
                                    },
                                  },
                                  [
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "default" },
                                      },
                                      [_vm._v("Default")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "condensed" },
                                      },
                                      [
                                        _vm._v("Condensed "),
                                        _c("small", [
                                          _vm._v("(Extra Small size)"),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { value: "compact" },
                                      },
                                      [
                                        _vm._v("Compact "),
                                        _c("small", [_vm._v("(Small size)")]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "font-weight-medium font-14 mt-4 mb-2 pb-1",
                          },
                          [
                            _vm._v(
                              "\n              Sidebar User Info\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-checkbox",
                          {
                            attrs: { name: "check-button", switch: "" },
                            on: {
                              input: function ($event) {
                                return _vm.enableInfo()
                              },
                            },
                            model: {
                              value: _vm.checked,
                              callback: function ($$v) {
                                _vm.checked = $$v
                              },
                              expression: "checked",
                            },
                          },
                          [_vm._v("\n              Enable\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-block mt-4",
                            attrs: { id: "resetBtn" },
                            on: {
                              click: function ($event) {
                                return _vm.reset()
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n              Reset to Default\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-danger btn-block mt-2",
                            attrs: {
                              href: "https://wrapbootstrap.com/theme/minton-admin-dashboard-landing-template-WB0858DB6?ref=themesbrand",
                              target: "_blank",
                            },
                          },
                          [
                            _c("i", { staticClass: "mdi mdi-basket mr-1" }),
                            _vm._v(" Purchase Now"),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "rightbar-overlay" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "left-side-menu" },
    [
      _c(
        "div",
        { staticClass: "logo-box" },
        [
          _c(
            "router-link",
            { staticClass: "logo logo-dark text-center", attrs: { to: "/" } },
            [
              _c("span", { staticClass: "logo-sm" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-sm-dark.png */ "./resources/js/assets/images/logo-sm-dark.png"),
                    alt: "",
                    height: "24",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "logo-lg" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
                    alt: "",
                    height: "20",
                  },
                }),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "logo logo-light text-center", attrs: { to: "/" } },
            [
              _c("span", { staticClass: "logo-sm" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
                    alt: "",
                    height: "24",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "logo-lg" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
                    alt: "",
                    height: "20",
                  },
                }),
              ]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "simplebar",
        { staticClass: "h-100", attrs: { "data-simplebar": "" } },
        [
          _c("div", { staticClass: "user-box text-center" }, [
            _c("img", {
              staticClass: "rounded-circle avatar-md",
              attrs: {
                src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
                alt: "user-img",
                title: "Mat Helme",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown" }, [
              _c(
                "a",
                {
                  staticClass:
                    "text-reset dropdown-toggle h5 mt-2 mb-1 d-block",
                  attrs: {
                    href: "javascript: void(0);",
                    "data-toggle": "dropdown",
                  },
                },
                [_vm._v("Nik Patel")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-menu user-pro-dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("i", { staticClass: "fe-user mr-1" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("My Account")]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("i", { staticClass: "fe-settings mr-1" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Settings")]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("i", { staticClass: "fe-lock mr-1" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Lock Screen")]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("i", { staticClass: "fe-log-out mr-1" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Logout")]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-reset" }, [_vm._v("Admin Head")]),
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "sidebar-menu" } }, [
            _c(
              "ul",
              { staticClass: "list-unstyled", attrs: { id: "side-menu" } },
              [
                _vm._l(_vm.menuItems, function (item) {
                  return [
                    item.isTitle
                      ? _c("li", { key: item.id, staticClass: "menu-title" }, [
                          _vm._v(_vm._s(_vm.$t(item.label))),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !item.isTitle && !item.isLayout
                      ? _c(
                          "li",
                          { key: item.id },
                          [
                            _vm.hasItems(item)
                              ? _c(
                                  "a",
                                  {
                                    class: {
                                      "has-arrow": !item.badge,
                                      "has-dropdown": item.badge,
                                    },
                                    attrs: { href: "javascript:void(0);" },
                                    on: {
                                      click: function ($event) {
                                        item.isMenuCollapsed =
                                          !item.isMenuCollapsed
                                      },
                                    },
                                  },
                                  [
                                    item.icon
                                      ? _c("i", { class: "" + item.icon })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(_vm._s(_vm.$t(item.label))),
                                    ]),
                                    _vm._v(" "),
                                    !item.badge
                                      ? _c("span", {
                                          staticClass: "menu-arrow",
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.badge
                                      ? _c(
                                          "span",
                                          {
                                            class:
                                              "badge badge-pill badge-" +
                                              item.badge.variant +
                                              " float-right",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t(item.badge.text))
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.hasItems(item)
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "side-nav-link-ref",
                                    attrs: { to: item.link },
                                  },
                                  [
                                    item.icon
                                      ? _c("i", { class: "" + item.icon })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(_vm._s(_vm.$t(item.label))),
                                    ]),
                                    _vm._v(" "),
                                    item.badge
                                      ? _c(
                                          "span",
                                          {
                                            class:
                                              "badge badge-pill badge-" +
                                              item.badge.variant +
                                              " float-right",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t(item.badge.text))
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse",
                                class: { show: item.isMenuCollapsed },
                                attrs: { id: "sidebarTasks" },
                              },
                              [
                                _vm.hasItems(item)
                                  ? _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "sub-menu nav-second-level",
                                        attrs: { "aria-expanded": "false" },
                                      },
                                      _vm._l(
                                        item.subItems,
                                        function (subitem, index) {
                                          return _c(
                                            "li",
                                            { key: index },
                                            [
                                              !_vm.hasItems(subitem)
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "side-nav-link-ref",
                                                      attrs: {
                                                        to: subitem.link,
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(subitem.label)
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.hasItems(subitem)
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "side-nav-link-a-ref has-arrow",
                                                      attrs: {
                                                        href: "javascript:void(0);",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          subitem.isMenuCollapsed =
                                                            !subitem.isMenuCollapsed
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(subitem.label)
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                      _c("span", {
                                                        staticClass:
                                                          "menu-arrow",
                                                      }),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "collapse",
                                                  class: {
                                                    show: subitem.isMenuCollapsed,
                                                  },
                                                },
                                                [
                                                  _vm.hasItems(subitem)
                                                    ? _c(
                                                        "ul",
                                                        {
                                                          staticClass:
                                                            "sub-menu",
                                                          attrs: {
                                                            "aria-expanded":
                                                              "false",
                                                          },
                                                        },
                                                        _vm._l(
                                                          subitem.subItems,
                                                          function (
                                                            subSubitem,
                                                            index
                                                          ) {
                                                            return _c(
                                                              "li",
                                                              { key: index },
                                                              [
                                                                _c(
                                                                  "router-link",
                                                                  {
                                                                    staticClass:
                                                                      "side-nav-link-ref",
                                                                    attrs: {
                                                                      to: subSubitem.link,
                                                                    },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          subSubitem.label
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        0
                                                      )
                                                    : _vm._e(),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                      0
                                    )
                                  : _vm._e(),
                              ]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" }),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "navbar-custom" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "ul",
        { staticClass: "list-unstyled topnav-menu float-right mb-0" },
        [
          _c("li", { staticClass: "dropdown d-none d-lg-inline-block" }, [
            _c(
              "a",
              {
                staticClass:
                  "nav-link dropdown-toggle arrow-none waves-effect waves-light",
                attrs: { "data-toggle": "fullscreen", href: "#" },
                on: { click: _vm.initFullScreen },
              },
              [_c("i", { staticClass: "fe-maximize noti-icon" })]
            ),
          ]),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "d-none d-lg-inline-block",
              attrs: {
                variant: "white",
                right: "",
                "toggle-class": "header-item",
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("img", {
                        attrs: {
                          src: _vm.flag,
                          alt: "Header Language",
                          height: "16",
                        },
                      }),
                      _vm._v("\n          " + _vm._s(_vm.text) + "\n        "),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _vm._l(_vm.languages, function (entry, i) {
                return _c(
                  "b-dropdown-item",
                  {
                    key: "Lang" + i,
                    staticClass: "notify-item",
                    attrs: {
                      value: entry,
                      "link-class": {
                        active: entry.language === _vm.current_language,
                      },
                    },
                    on: {
                      click: function ($event) {
                        return _vm.setLanguage(
                          entry.language,
                          entry.title,
                          entry.flag
                        )
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "mr-1",
                      attrs: {
                        src: "" + entry.flag,
                        alt: "user-image",
                        height: "12",
                      },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v(_vm._s(entry.title)),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "notification-list",
              attrs: { right: "", "menu-class": "dropdown-lg" },
            },
            [
              _c(
                "template",
                {
                  staticClass: "nav-link dropdown-toggle",
                  slot: "button-content",
                },
                [
                  _c("i", { staticClass: "fe-bell noti-icon" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "badge badge-danger rounded-circle noti-icon-badge",
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("navbar.dropdown.notification.badge"))
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item noti-title",
                  attrs: { href: "#" },
                },
                [
                  _c("h5", { staticClass: "m-0" }, [
                    _c("span", { staticClass: "float-right" }, [
                      _c(
                        "a",
                        { staticClass: "text-dark", attrs: { href: "" } },
                        [
                          _c("small", [
                            _vm._v(
                              _vm._s(
                                _vm.$t("navbar.dropdown.notification.subtext")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("navbar.dropdown.notification.text")) +
                        "\n          "
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("simplebar", { staticStyle: { "max-height": "230px" } }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item active",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "notify-icon bg-soft-primary text-primary",
                      },
                      [
                        _c("i", {
                          staticClass: "mdi mdi-comment-account-outline",
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.1.title")
                          ) +
                          "\n              "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.1.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("div", { staticClass: "notify-icon" }, [
                      _c("img", {
                        staticClass: "img-fluid rounded-circle",
                        attrs: {
                          src: __webpack_require__(/*! ../assets/images/users/avatar-2.jpg */ "./resources/js/assets/images/users/avatar-2.jpg"),
                          alt: "",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.2.title")
                          ) +
                          "\n            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted mb-0 user-msg" }, [
                      _c("small", [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.2.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("div", { staticClass: "notify-icon" }, [
                      _c("img", {
                        staticClass: "img-fluid rounded-circle",
                        attrs: {
                          src: __webpack_require__(/*! ../assets/images/users/avatar-4.jpg */ "./resources/js/assets/images/users/avatar-4.jpg"),
                          alt: "",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.3.title")
                          ) +
                          "\n            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted mb-0 user-msg" }, [
                      _c("small", [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.3.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "notify-icon bg-soft-warning text-warning",
                      },
                      [_c("i", { staticClass: "mdi mdi-account-plus" })]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.4.title")
                          ) +
                          "\n              "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.4.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-info" }, [
                      _c("i", {
                        staticClass: "mdi mdi-comment-account-outline",
                      }),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.5.title")
                          ) +
                          "\n              "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.5.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" },
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-secondary" }, [
                      _c("i", { staticClass: "mdi mdi-heart" }),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("navbar.dropdown.notification.6.title")
                          ) +
                          "\n              "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(
                          _vm._s(_vm.$t("navbar.dropdown.notification.6.text"))
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "dropdown-item text-center text-primary notify-item notify-all",
                  attrs: { href: "javascript:void(0);" },
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.$t("navbar.dropdown.notification.button")) +
                      "\n          "
                  ),
                  _c("i", { staticClass: "fi-arrow-right" }),
                ]
              ),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "notification-list topbar-dropdown",
              attrs: {
                right: "",
                "menu-class": "profile-dropdown",
                "toggle-class": "p-0",
              },
            },
            [
              _c(
                "template",
                {
                  staticClass: "nav-link dropdown-toggle",
                  slot: "button-content",
                },
                [
                  _c("div", { staticClass: "nav-user mr-0" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
                        alt: "user-image",
                      },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "pro-user-name ml-1" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.$t("navbar.dropdown.name.text")) +
                          "\n              "
                      ),
                      _c("i", { staticClass: "mdi mdi-chevron-down" }),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("b-dropdown-header", [
                _c("h6", { staticClass: "text-overflow m-0 py-2" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("navbar.dropdown.name.list.greet")) +
                      "\n          "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "remixicon-account-circle-line" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.account"))),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "remixicon-settings-3-line" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.settings"))),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "remixicon-wallet-line" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("navbar.dropdown.name.list.mywallet")) +
                      "\n            "
                  ),
                  _c(
                    "span",
                    { staticClass: "badge badge-success float-right" },
                    [_vm._v("3")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "remixicon-lock-line" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("navbar.dropdown.name.list.lockscreen"))
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.logout.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fe-log-out mr-1" }),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.logout"))),
                  ]),
                ]
              ),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "logo-box" },
        [
          _c(
            "router-link",
            { staticClass: "logo logo-dark text-center", attrs: { to: "/" } },
            [
              _c("span", { staticClass: "logo-sm" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-sm-dark.png */ "./resources/js/assets/images/logo-sm-dark.png"),
                    alt: "",
                    height: "24",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "logo-lg" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
                    alt: "",
                    height: "20",
                  },
                }),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "logo logo-light text-center", attrs: { to: "/" } },
            [
              _c("span", { staticClass: "logo-sm" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
                    alt: "",
                    height: "24",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "logo-lg" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
                    alt: "",
                    height: "20",
                  },
                }),
              ]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-unstyled topnav-menu topnav-menu-left m-0" },
        [
          _c("li", [
            _c(
              "button",
              {
                staticClass: "button-menu-mobile waves-effect waves-light",
                on: { click: _vm.toggleMenu },
              },
              [_c("i", { staticClass: "fe-menu" })]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "navbar-toggle nav-link",
                attrs: {
                  "data-toggle": "collapse",
                  "data-target": "#topnav-menu-content",
                },
                on: {
                  click: function ($event) {
                    return _vm.horizonalmenu()
                  },
                },
              },
              [_vm._m(0)]
            ),
          ]),
          _vm._v(" "),
          _vm._m(1),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lines" }, [
      _c("span"),
      _vm._v(" "),
      _c("span"),
      _vm._v(" "),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-route-related d-none d-md-block" }, [
      _c("div", [
        _c("ul", { staticClass: "list-unstyled" }, [
          _c("li", { staticClass: "d-inline" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Module"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-inline" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Company"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-inline" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Partner"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-inline" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Accounting"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "left-side-menu" }, [
    _c("div", { staticClass: "h-100" }, [
      _c(
        "div",
        { staticClass: "sidebar-content" },
        [
          _c(
            "simplebar",
            {
              staticClass: "sidebar-icon-menu h-100",
              attrs: { "data-simplebar": "" },
            },
            [
              _c("a", { staticClass: "logo", attrs: { href: "/" } }, [
                _c("span", [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
                      alt: "",
                      height: "28",
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "nav",
                {
                  staticClass: "nav flex-column",
                  attrs: { id: "two-col-sidenav-main" },
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: [_vm.activetab === 1 ? "active" : ""],
                      attrs: {
                        href: "javascript: void(0);",
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "Dashboard",
                        "data-trigger": "hover",
                      },
                      on: {
                        click: function ($event) {
                          _vm.activetab = 1
                        },
                      },
                    },
                    [_c("i", { staticClass: "ri-dashboard-line" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: [_vm.activetab === 2 ? "active" : ""],
                      attrs: {
                        href: "javascript: void(0);",
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "Apps",
                        "data-trigger": "hover",
                      },
                      on: {
                        click: function ($event) {
                          _vm.activetab = 2
                        },
                      },
                    },
                    [_c("i", { staticClass: "ri-apps-2-line" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: [_vm.activetab === 3 ? "active" : ""],
                      attrs: {
                        href: "javascript: void(0);",
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "Pages",
                        "data-trigger": "hover",
                      },
                      on: {
                        click: function ($event) {
                          _vm.activetab = 3
                        },
                      },
                    },
                    [_c("i", { staticClass: "ri-pages-line" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: [_vm.activetab === 4 ? "active" : ""],
                      attrs: {
                        href: "javascript: void(0);",
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "UI Elements",
                        "data-trigger": "hover",
                      },
                      on: {
                        click: function ($event) {
                          _vm.activetab = 4
                        },
                      },
                    },
                    [_c("i", { staticClass: "ri-pencil-ruler-2-line" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: [_vm.activetab === 5 ? "active" : ""],
                      attrs: {
                        href: "javascript: void(0);",
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "Components",
                        "data-trigger": "hover",
                      },
                      on: {
                        click: function ($event) {
                          _vm.activetab = 5
                        },
                      },
                    },
                    [_c("i", { staticClass: "ri-stack-line" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { staticClass: "nav-link", attrs: { to: "/widgets" } },
                    [_c("i", { staticClass: "ri-honour-line align-middle" })]
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sidebar-main-menu" },
            [
              _c(
                "simplebar",
                {
                  staticClass: "h-100",
                  attrs: { id: "two-col-menu", "data-simplebar": "" },
                },
                [
                  _vm.activetab === 1
                    ? _c(
                        "div",
                        {
                          staticClass: "twocolumn-menu-item d-block",
                          attrs: { id: "dashboard" },
                        },
                        [
                          _c("div", { staticClass: "title-box" }, [
                            _c("h5", { staticClass: "menu-title" }, [
                              _vm._v("Dashboards"),
                            ]),
                            _vm._v(" "),
                            _c("ul", { staticClass: "nav flex-column" }, [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "home" } },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                        Sales\r\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "crm-dashboard" },
                                        to: "/dashboard/crm",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                        CRM\r\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: "/dashboard/analytics",
                                        to: { name: "analytics-dashboard" },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                        Analytics\r\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activetab === 2
                    ? _c(
                        "div",
                        {
                          staticClass: "twocolumn-menu-item d-block",
                          attrs: { id: "apps" },
                        },
                        [
                          _c("h5", { staticClass: "menu-title" }, [
                            _vm._v("Apps"),
                          ]),
                          _vm._v(" "),
                          _c("ul", { staticClass: "nav flex-column" }, [
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link side-nav-link-ref",
                                    attrs: { to: { name: "calendar" } },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                    Calendar\r\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link side-nav-link-ref",
                                    attrs: { to: { name: "chat" } },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                    Chat\r\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.sidebarEcommerce",
                                        modifiers: { sidebarEcommerce: true },
                                      },
                                    ],
                                    staticClass: "nav-link",
                                    attrs: {
                                      href: "javascript: void(0);",
                                      "data-toggle": "collapse",
                                    },
                                  },
                                  [
                                    _c("span", [_vm._v("Ecommerce")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-arrow" }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  { attrs: { id: "sidebarEcommerce" } },
                                  [
                                    _c(
                                      "ul",
                                      { staticClass: "nav-second-level" },
                                      [
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "products" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Products List\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "products-grid" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Products Grid\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: {
                                                    name: "product-detail",
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Product Detail\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: {
                                                    name: "product-create",
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Create Product\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "customers" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Customers\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "orders" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Orders\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "order-detail" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Order Detail\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "sellers" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Sellers\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: { to: { name: "cart" } },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Shopping Cart\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "checkout" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Checkout\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.sidebarEmail",
                                        modifiers: { sidebarEmail: true },
                                      },
                                    ],
                                    staticClass: "nav-link",
                                    attrs: {
                                      href: "#sidebarEmail",
                                      "data-toggle": "collapse",
                                    },
                                  },
                                  [
                                    _c("span", [_vm._v("Email")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-arrow" }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  { attrs: { id: "sidebarEmail" } },
                                  [
                                    _c(
                                      "ul",
                                      { staticClass: "nav-second-level" },
                                      [
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "email-inbox" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Inbox\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "reademail" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Read Email\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: "/email/templates",
                                                  to: {
                                                    name: "email-templates",
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Email Templates\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link side-nav-link-ref",
                                    attrs: {
                                      to: "companies",
                                      to: { name: "" },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                    Companies\r\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.sidebarTasks",
                                        modifiers: { sidebarTasks: true },
                                      },
                                    ],
                                    staticClass: "nav-link",
                                    attrs: {
                                      href: "#sidebarTasks",
                                      "data-toggle": "collapse",
                                    },
                                  },
                                  [
                                    _c("span", [_vm._v("Tasks")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-arrow" }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  { attrs: { id: "sidebarTasks" } },
                                  [
                                    _c(
                                      "ul",
                                      { staticClass: "nav-second-level" },
                                      [
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "task-list" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                List\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "task-detail" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Details\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "kanban-board" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Kanban Board\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.sidebarContacts",
                                        modifiers: { sidebarContacts: true },
                                      },
                                    ],
                                    staticClass: "nav-link",
                                    attrs: {
                                      href: "javascript: void(0);",
                                      "data-toggle": "collapse",
                                    },
                                  },
                                  [
                                    _c("span", [_vm._v("Contacts")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-arrow" }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  { attrs: { id: "sidebarContacts" } },
                                  [
                                    _c(
                                      "ul",
                                      { staticClass: "nav-second-level" },
                                      [
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: { name: "contacts-list" },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Members List\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "side-nav-link-ref",
                                                attrs: {
                                                  to: {
                                                    name: "contacts-profile",
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Profile\r\n                                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link side-nav-link-ref",
                                    attrs: { to: { name: "file-manager" } },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                    File Manager\r\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link side-nav-link-ref",
                                    attrs: { to: { name: "tickets" } },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                    Tickets\r\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activetab === 3
                    ? _c(
                        "div",
                        {
                          staticClass: "twocolumn-menu-item d-block",
                          attrs: { id: "pages" },
                        },
                        [
                          _c("div", { staticClass: "title-box" }, [
                            _c("h5", { staticClass: "menu-title" }, [
                              _vm._v("Pages"),
                            ]),
                            _vm._v(" "),
                            _c("ul", { staticClass: "nav flex-column" }, [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "extras-starter" } },
                                    },
                                    [_vm._v("Starter")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "extras-timeline" },
                                      },
                                    },
                                    [_vm._v("Timeline")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "extras-sitemap" } },
                                    },
                                    [_vm._v("Sitemap")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "extras-invoice" } },
                                    },
                                    [_vm._v("Invoice")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "extras-faqs" } },
                                    },
                                    [_vm._v("FAQs")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "extras-search-results" },
                                      },
                                    },
                                    [_vm._v("Search Results")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "extras-pricing" } },
                                    },
                                    [_vm._v("Pricing")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "extras-maintenance" },
                                      },
                                    },
                                    [_vm._v("Maintenance")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "extras-coming-soon" },
                                      },
                                    },
                                    [_vm._v("Coming Soon")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "extras-lightbox" },
                                      },
                                    },
                                    [_vm._v("Lightbox")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarAuth",
                                          modifiers: { sidebarAuth: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Auth Pages")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    {
                                      staticClass: "collapse",
                                      attrs: { id: "sidebarAuth" },
                                    },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-login-1",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Log In")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-login-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Log In 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-register-1",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Register")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-register-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Register 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-signin-signup",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Signin - Signup")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-signin-signup-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Signin - Signup 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-recoverpwd",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Recover Password")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-recoverpwd-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Recover Password 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-lock-screen",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Lock Screen")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-lock-screen-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Lock Screen 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-logout-1",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Logout")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "auth-logout-2",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Logout 2")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarErrors",
                                          modifiers: { sidebarErrors: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                        Error Pages\r\n                                        "
                                      ),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarErrors" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: { name: "error-404" },
                                                  },
                                                },
                                                [_vm._v("Error 404")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "error-404-alt",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Error 404-alt")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: { name: "error-500" },
                                                  },
                                                },
                                                [_vm._v("Error 500")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activetab === 4
                    ? _c(
                        "div",
                        {
                          staticClass: "twocolumn-menu-item d-block",
                          attrs: { id: "uielements" },
                        },
                        [
                          _c("div", { staticClass: "title-box" }, [
                            _c("h5", { staticClass: "menu-title" }, [
                              _vm._v("UI Elements"),
                            ]),
                            _vm._v(" "),
                            _c("ul", { staticClass: "nav flex-column" }, [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-avatars" } },
                                    },
                                    [_vm._v("Avatars")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-buttons" } },
                                    },
                                    [_vm._v("Buttons")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-cards" } },
                                    },
                                    [_vm._v("Cards")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-carousel" } },
                                    },
                                    [_vm._v("Carousel")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-dropdowns" } },
                                    },
                                    [_vm._v("Dropdowns")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-video" } },
                                    },
                                    [_vm._v("Embed Video")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-general" } },
                                    },
                                    [_vm._v("General UI")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-grid" } },
                                    },
                                    [_vm._v("Grid")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-images" } },
                                    },
                                    [_vm._v("Images")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-list-group" } },
                                    },
                                    [_vm._v("List Group")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-modals" } },
                                    },
                                    [_vm._v("Modals")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "ui-notifications" },
                                      },
                                    },
                                    [_vm._v("Notifications")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-portlets" } },
                                    },
                                    [_vm._v("Portlets")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-progress" } },
                                    },
                                    [_vm._v("Progress")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-ribbons" } },
                                    },
                                    [_vm._v("Ribbons")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-spinners" } },
                                    },
                                    [_vm._v("Spinners")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "ui-tabs-accordions" },
                                      },
                                    },
                                    [_vm._v("Tabs & Accordions")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: {
                                        to: { name: "ui-tooltips-popovers" },
                                      },
                                    },
                                    [_vm._v("Tooltips & Popovers")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link side-nav-link-ref",
                                      attrs: { to: { name: "ui-typography" } },
                                    },
                                    [_vm._v("Typography")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activetab === 5
                    ? _c(
                        "div",
                        {
                          staticClass: "twocolumn-menu-item d-block",
                          attrs: { id: "components" },
                        },
                        [
                          _c("div", { staticClass: "title-box" }, [
                            _c("h5", { staticClass: "menu-title" }, [
                              _vm._v("Components"),
                            ]),
                            _vm._v(" "),
                            _c("ul", { staticClass: "nav flex-column" }, [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName:
                                            "v-b-toggle.sidebarExtendedui",
                                          modifiers: {
                                            sidebarExtendedui: true,
                                          },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-info float-right",
                                        },
                                        [_vm._v("Hot")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Extended UI")]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarExtendedui" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "rangeslider" },
                                                  },
                                                },
                                                [_vm._v("Range Slider")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "sweet-alert" },
                                                  },
                                                },
                                                [_vm._v("Sweet Alert")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "tour" },
                                                  },
                                                },
                                                [_vm._v("Tour Page")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "scrollspy" },
                                                  },
                                                },
                                                [_vm._v("Scrollspy")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarIcons",
                                          modifiers: { sidebarIcons: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Icons")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarIcons" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "feather" },
                                                  },
                                                },
                                                [_vm._v("Feather")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "remix" },
                                                  },
                                                },
                                                [_vm._v("Remix")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "boxicons" },
                                                  },
                                                },
                                                [_vm._v("Boxicons")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "mdi" },
                                                  },
                                                },
                                                [_vm._v("Material Design")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: {
                                                      name: "font-awesome",
                                                    },
                                                  },
                                                },
                                                [_vm._v("Font Awesome 5")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "weather" },
                                                  },
                                                },
                                                [_vm._v("Weather")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarForms",
                                          modifiers: { sidebarForms: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Forms")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarForms" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "elements" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    General Elements\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: {
                                                      name: "advanced-form",
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Advanced\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "validation" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Validation\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "wizard" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Wizard\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "mask" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Masks\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "quill" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Quill Editor\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: "/forms/file-uploads",
                                                    to: {
                                                      name: "file-uploads",
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    File Uploads\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarTables",
                                          modifiers: { sidebarTables: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Tables")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarTables" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "basic" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Basic Tables\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "advanced" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Advanced Tables\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarCharts",
                                          modifiers: { sidebarCharts: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Charts")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarCharts" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "charts-apex" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Apex Charts\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: {
                                                      name: "charts-chartjs",
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Chartjs Charts\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "charts-c3" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    C3 Charts\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: {
                                                      name: "charts-chartist",
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Chartist Charts\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "charts-knob" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Knob Charts\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebarMaps",
                                          modifiers: { sidebarMaps: true },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Maps")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    { attrs: { id: "sidebarMaps" } },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "side-nav-link-ref",
                                                  attrs: {
                                                    to: { name: "maps-google" },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Google Maps\r\n                                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName:
                                            "v-b-toggle.sidebarMultilevel",
                                          modifiers: {
                                            sidebarMultilevel: true,
                                          },
                                        },
                                      ],
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "javascript: void(0);",
                                        "data-toggle": "collapse",
                                      },
                                    },
                                    [
                                      _c("span", [_vm._v("Multi Level")]),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "menu-arrow" }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    {
                                      staticClass: "collapse",
                                      attrs: { id: "sidebarMultilevel" },
                                    },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "nav-second-level" },
                                        [
                                          _c(
                                            "li",
                                            [
                                              _c(
                                                "a",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.sidebarMultilevel2",
                                                      modifiers: {
                                                        sidebarMultilevel2: true,
                                                      },
                                                    },
                                                  ],
                                                  attrs: {
                                                    href: "javascript: void(0);",
                                                    "data-toggle": "collapse",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    Second Level\r\n                                                    "
                                                  ),
                                                  _c("span", {
                                                    staticClass: "menu-arrow",
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-collapse",
                                                {
                                                  attrs: {
                                                    id: "sidebarMultilevel2",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "nav-second-level",
                                                    },
                                                    [
                                                      _c("li", [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "javascript: void(0);",
                                                            },
                                                          },
                                                          [_vm._v("Item 1")]
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("li", [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "javascript: void(0);",
                                                            },
                                                          },
                                                          [_vm._v("Item 2")]
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "#sidebarMultilevel3",
                                                  "data-toggle": "collapse",
                                                },
                                              },
                                              [_vm._v("Second Level 1")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" }),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader.vue?vue&type=template&id=155ec09e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "d-flex justify-content-center align-items-center position-absolute loader",
    },
    [
      _c("b-spinner", {
        class: ["m-2", "loader-" + _vm.size],
        attrs: { variant: "success", role: "status" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/errorMessage.vue?vue&type=template&id=78cbd98a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-danger" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Sidebar", {
        attrs: {
          type: _vm.leftSidebarType,
          width: _vm.layoutWidth,
          size: _vm.leftSidebarSize,
          menu: _vm.menuPosition,
          topbar: _vm.topbar,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-page" },
        [
          _c(
            "div",
            { staticClass: "content" },
            [
              _c("Topbar"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_vm._t("default")],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("Footer"),
        ],
        1
      ),
      _vm._v(" "),
      _c("Rightbar"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Topbar"),
      _vm._v(" "),
      _c("HorizontalNavbar", {
        attrs: {
          type: _vm.topbar,
          width: _vm.layoutWidth,
          menu: _vm.menuPosition,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-page" },
        [
          _c("div", { staticClass: "content" }, [
            _c(
              "div",
              { staticClass: "container-fluid" },
              [_vm._t("default")],
              2
            ),
          ]),
          _vm._v(" "),
          _c("Footer"),
        ],
        1
      ),
      _vm._v(" "),
      _c("Rightbar"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("Vertical", [_vm._t("default")], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Topbar"),
      _vm._v(" "),
      _c("TwoColumnSidebar", {
        attrs: {
          type: _vm.leftSidebarType,
          width: _vm.layoutWidth,
          size: _vm.leftSidebarSize,
          menu: _vm.menuPosition,
          topbar: _vm.topbar,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-page" },
        [
          _c("div", { staticClass: "content" }, [
            _c(
              "div",
              { staticClass: "container-fluid" },
              [_vm._t("default")],
              2
            ),
          ]),
          _vm._v(" "),
          _c("Footer"),
        ],
        1
      ),
      _vm._v(" "),
      _c("Rightbar"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Sidebar", {
        attrs: {
          type: _vm.leftSidebarType,
          width: _vm.layoutWidth,
          size: _vm.leftSidebarSize,
          menu: _vm.menuPosition,
          topbar: _vm.topbar,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-page" },
        [
          _c(
            "div",
            { staticClass: "content" },
            [
              _c("Topbar"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_vm._t("default")],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("Footer"),
        ],
        1
      ),
      _vm._v(" "),
      _c("Rightbar"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/module/index.vue?vue&type=template&id=54f21bce& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    [
      _c("PageHeader"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "row justify-content-between align-items-center mb-2",
                  },
                  [
                    _c("h4", { staticClass: "header-title" }, [
                      _vm._v(" " + _vm._s(_vm.$t("module.ModulesTable"))),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-xs-10 col-md-9 col-lg-7",
                        staticStyle: { "font-weight": "500" },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-inline-block",
                            staticStyle: { width: "22.2%" },
                          },
                          [
                            _c(
                              "b-dropdown",
                              {
                                ref: "dropdown",
                                staticClass: "btn-block setting-search",
                                attrs: {
                                  variant: "primary",
                                  text: _vm.$t("general.searchSetting"),
                                },
                              },
                              [
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    attrs: { value: "name" },
                                    model: {
                                      value: _vm.filterSetting,
                                      callback: function ($$v) {
                                        _vm.filterSetting = $$v
                                      },
                                      expression: "filterSetting",
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("general.Name")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    attrs: { value: "name_e" },
                                    model: {
                                      value: _vm.filterSetting,
                                      callback: function ($$v) {
                                        _vm.filterSetting = $$v
                                      },
                                      expression: "filterSetting",
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("general.Name_en")))]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-inline-block position-relative",
                            staticStyle: { width: "77%" },
                          },
                          [
                            _c(
                              "span",
                              {
                                class: [
                                  "search-custom position-absolute",
                                  _vm.$i18n.locale == "ar"
                                    ? "search-custom-ar"
                                    : "",
                                ],
                              },
                              [_c("i", { staticClass: "fe-search" })]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.search,
                                  expression: "search",
                                  modifiers: { trim: true },
                                },
                              ],
                              staticClass: "form-control",
                              staticStyle: {
                                display: "block",
                                width: "93%",
                                "padding-top": "3px",
                              },
                              attrs: {
                                type: "text",
                                placeholder: _vm.$t("general.Search") + "...",
                              },
                              domProps: { value: _vm.search },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.search = $event.target.value.trim()
                                },
                                blur: function ($event) {
                                  return _vm.$forceUpdate()
                                },
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "row justify-content-between align-items-center mb-2 px-1",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-3 d-flex align-items-center mb-1 mb-xl-0",
                      },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.create",
                                modifiers: { create: true },
                              },
                            ],
                            staticClass: "btn-sm mx-1 font-weight-bold",
                            attrs: { variant: "primary" },
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.$t("general.Create")) +
                                "\n                                "
                            ),
                            _c("i", { staticClass: "fas fa-plus" }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "d-inline-flex" }, [
                          _c(
                            "button",
                            { staticClass: "custom-btn-dowonload" },
                            [_c("i", { staticClass: "fas fa-file-download" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "custom-btn-dowonload" },
                            [_c("i", { staticClass: "fe-printer" })]
                          ),
                          _vm._v(" "),
                          _vm.checkAll.length == 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "custom-btn-dowonload",
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.show(
                                        "modal-edit-" + _vm.checkAll[0]
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "mdi mdi-square-edit-outline",
                                  }),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.checkAll.length > 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "custom-btn-dowonload",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.deleteModule(_vm.checkAll)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-trash-alt" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.checkAll.length == 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "custom-btn-dowonload",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.deleteModule(_vm.checkAll)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-trash-alt" })]
                              )
                            : _vm._e(),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-xs-10 col-md-9 col-lg-7 d-flex align-items-center justify-content-end",
                      },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "b-button",
                              { staticClass: "mx-1 custom-btn-background" },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.$t("general.filter")) +
                                    "\n                                    "
                                ),
                                _c("i", { staticClass: "fas fa-filter" }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { staticClass: "mx-1 custom-btn-background" },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.$t("general.group")) +
                                    "\n                                    "
                                ),
                                _c("i", { staticClass: "fe-menu" }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                ref: "dropdown",
                                staticClass: "dropdown-custom-ali",
                                attrs: {
                                  variant: "primary",
                                  html:
                                    _vm.$t("general.setting") +
                                    " <i class='fe-settings'></i>",
                                },
                              },
                              [
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    model: {
                                      value: _vm.setting.name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.setting, "name", $$v)
                                      },
                                      expression: "setting.name",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("general.Name")) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    model: {
                                      value: _vm.setting.name_e,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.setting, "name_e", $$v)
                                      },
                                      expression: "setting.name_e",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(_vm.$t("general.Name_en")) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    model: {
                                      value: _vm.setting.parent_id,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.setting, "parent_id", $$v)
                                      },
                                      expression: "setting.parent_id",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(_vm.$t("general.IdParent")) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    staticClass: "mb-1",
                                    model: {
                                      value: _vm.setting.is_active,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.setting, "is_active", $$v)
                                      },
                                      expression: "setting.is_active",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(_vm.$t("general.Status")) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex justify-content-end" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        attrs: { href: "javascript:void(0)" },
                                      },
                                      [_vm._v("Apply")]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-inline-flex align-items-center pagination-custom",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "d-inline-block",
                                    staticStyle: { "font-size": "15px" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(_vm.modulesPagination.from) +
                                        "-" +
                                        _vm._s(_vm.modulesPagination.to) +
                                        " / " +
                                        _vm._s(_vm.modulesPagination.total) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "d-inline-block" }, [
                                  _c(
                                    "a",
                                    {
                                      style: {
                                        "pointer-events":
                                          _vm.modulesPagination.current_page ==
                                          1
                                            ? "none"
                                            : "",
                                      },
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.getData(
                                            _vm.modulesPagination.current_page -
                                              1
                                          )
                                        },
                                      },
                                    },
                                    [_c("span", [_vm._v("<")])]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.current_page,
                                        expression: "current_page",
                                      },
                                    ],
                                    staticClass: "pagination-current-page",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.current_page },
                                    on: {
                                      keyup: function ($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        return _vm.getDataCurrentPage()
                                      },
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.current_page = $event.target.value
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      style: {
                                        "pointer-events":
                                          _vm.modulesPagination.last_page ==
                                          _vm.modulesPagination.current_page
                                            ? "none"
                                            : "",
                                      },
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.getData(
                                            _vm.modulesPagination.current_page +
                                              1
                                          )
                                        },
                                      },
                                    },
                                    [_c("span", [_vm._v(">")])]
                                  ),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "create",
                      title: _vm.$t("module.addmodule"),
                      "title-class": "font-18",
                      "body-class": "p-4 ",
                      "hide-footer": true,
                      size: "lg",
                    },
                    on: { show: _vm.resetModal, hidden: _vm.resetModalHidden },
                  },
                  [
                    _c("form", [
                      _c(
                        "div",
                        { staticClass: "mb-3 d-flex justify-content-end" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "font-weight-bold px-2",
                              attrs: {
                                variant: "success",
                                disabled: !_vm.is_disabled,
                                type: "button",
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.resetForm.apply(null, arguments)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.$t("general.AddNewRecord")) +
                                  "\n                                "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.isLoader && !_vm.is_disabled
                            ? _c(
                                "b-button",
                                {
                                  staticClass: "mx-1",
                                  attrs: { variant: "success", type: "submit" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.AddSubmit.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.$t("general.Add")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _c(
                                "b-button",
                                {
                                  staticClass: "mx-1",
                                  attrs: { variant: "success", disabled: "" },
                                },
                                [
                                  _c("b-spinner", { attrs: { small: "" } }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sr-only" }, [
                                    _vm._v(
                                      _vm._s(_vm.$t("login.Loading")) + "..."
                                    ),
                                  ]),
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "danger", type: "button" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.resetModalHidden.apply(
                                    null,
                                    arguments
                                  )
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.$t("general.Cancel")) +
                                  "\n                                "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-6 direction",
                            attrs: { dir: "rtl" },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label",
                                    attrs: { for: "field-1" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("general.Name")) +
                                        "\n                                            "
                                    ),
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.$v.create.name.$model,
                                      expression: "$v.create.name.$model",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.create.name.$error ||
                                      _vm.errors.name,
                                    "is-valid":
                                      !_vm.$v.create.name.$invalid &&
                                      !_vm.errors.name,
                                  },
                                  attrs: { type: "text", id: "field-1" },
                                  domProps: {
                                    value: _vm.$v.create.name.$model,
                                  },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.create.name,
                                        "$model",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                !_vm.$v.create.name.minLength
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("general.Itmustbeatleast")
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm.$v.create.name.$params
                                                .minLength.min
                                            ) +
                                            " " +
                                            _vm._s(_vm.$t("general.letters"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.$v.create.name.maxLength
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("general.Itmustbeatmost")
                                          ) +
                                            "  " +
                                            _vm._s(
                                              _vm.$v.create.name.$params
                                                .maxLength.max
                                            ) +
                                            " " +
                                            _vm._s(_vm.$t("general.letters"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.$v.create.name.alphaArabic
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("general.alphaArabic"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.errors.name
                                  ? _vm._l(
                                      _vm.errors.name,
                                      function (errorMessage, index) {
                                        return _c(
                                          "ErrorMessage",
                                          { key: index },
                                          [_vm._v(_vm._s(errorMessage))]
                                        )
                                      }
                                    )
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-6 direction-ltr",
                            attrs: { dir: "ltr" },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label",
                                    attrs: { for: "field-2" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("general.Name_en")) +
                                        "\n                                            "
                                    ),
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.$v.create.name_e.$model,
                                      expression: "$v.create.name_e.$model",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.create.name_e.$error ||
                                      _vm.errors.name_e,
                                    "is-valid":
                                      !_vm.$v.create.name_e.$invalid &&
                                      !_vm.errors.name_e,
                                  },
                                  attrs: { type: "text", id: "field-2" },
                                  domProps: {
                                    value: _vm.$v.create.name_e.$model,
                                  },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.create.name_e,
                                        "$model",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                !_vm.$v.create.name_e.minLength
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("general.Itmustbeatleast")
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm.$v.create.name_e.$params
                                                .minLength.min
                                            ) +
                                            " " +
                                            _vm._s(_vm.$t("general.letters"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.$v.create.name_e.maxLength
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("general.Itmustbeatmost")
                                          ) +
                                            "  " +
                                            _vm._s(
                                              _vm.$v.create.name_e.$params
                                                .maxLength.max
                                            ) +
                                            " " +
                                            _vm._s(_vm.$t("general.letters"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.$v.create.name_e.alphaEnglish
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("general.alphaEnglish"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.errors.name_e
                                  ? _vm._l(
                                      _vm.errors.name_e,
                                      function (errorMessage, index) {
                                        return _c(
                                          "ErrorMessage",
                                          { key: index },
                                          [_vm._v(_vm._s(errorMessage))]
                                        )
                                      }
                                    )
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6 position-relative" },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "my-1 mr-2" }, [
                                  _vm._v(_vm._s(_vm.$t("general.IdParent"))),
                                ]),
                                _vm._v(" "),
                                _c("multiselect", {
                                  attrs: {
                                    options: _vm.parents.map(function (type) {
                                      return type.id
                                    }),
                                    "custom-label": function (opt) {
                                      return _vm.$i18n.locale
                                        ? _vm.parents.find(function (x) {
                                            return x.id == opt
                                          }).name
                                        : _vm.parents.find(function (x) {
                                            return x.id == opt
                                          }).name_e
                                    },
                                  },
                                  model: {
                                    value: _vm.create.parent_id,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.create, "parent_id", $$v)
                                    },
                                    expression: "create.parent_id",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.errors.parent_id
                                  ? _vm._l(
                                      _vm.errors.parent_id,
                                      function (errorMessage, index) {
                                        return _c(
                                          "ErrorMessage",
                                          { key: index },
                                          [_vm._v(_vm._s(errorMessage))]
                                        )
                                      }
                                    )
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { staticClass: "mr-2 mb-2" }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("general.Status")) +
                                    "\n                                            "
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  class: {
                                    "is-invalid":
                                      _vm.$v.create.is_active.$error ||
                                      _vm.errors.is_active,
                                    "is-valid":
                                      !_vm.$v.create.is_active.$invalid &&
                                      !_vm.errors.is_active,
                                  },
                                },
                                [
                                  _c(
                                    "b-form-radio",
                                    {
                                      staticClass: "d-inline-block",
                                      attrs: {
                                        name: "some-radios",
                                        value: "active",
                                      },
                                      model: {
                                        value: _vm.$v.create.is_active.$model,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.$v.create.is_active,
                                            "$model",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "$v.create.is_active.$model",
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("general.Active")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      staticClass: "d-inline-block m-1",
                                      attrs: {
                                        name: "some-radios",
                                        value: "inactive",
                                      },
                                      model: {
                                        value: _vm.$v.create.is_active.$model,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.$v.create.is_active,
                                            "$model",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "$v.create.is_active.$model",
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("general.Inactive")))]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.errors.is_active
                                ? _vm._l(
                                    _vm.errors.is_active,
                                    function (errorMessage, index) {
                                      return _c(
                                        "ErrorMessage",
                                        { key: index },
                                        [
                                          _vm._v(
                                            _vm._s(errorMessage) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  )
                                : _vm._e(),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "table-responsive mb-3 custom-table-theme position-relative",
                  },
                  [
                    _vm.isLoader
                      ? _c("loader", { attrs: { size: "large" } })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-borderless table-hover table-centered m-0",
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c(
                              "th",
                              {
                                staticStyle: { width: "0" },
                                attrs: { scope: "col" },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "form-check custom-control" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.isCheckAll,
                                          expression: "isCheckAll",
                                        },
                                      ],
                                      staticClass: "form-check-input",
                                      staticStyle: {
                                        width: "17px",
                                        height: "17px",
                                      },
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(_vm.isCheckAll)
                                          ? _vm._i(_vm.isCheckAll, null) > -1
                                          : _vm.isCheckAll,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$a = _vm.isCheckAll,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.isCheckAll = $$a.concat([
                                                  $$v,
                                                ]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.isCheckAll = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.isCheckAll = $$c
                                          }
                                        },
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.setting.name
                              ? _c("th", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-center",
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.$t("general.Name"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "arrow-sort" }, [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-up",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("name")
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("-name")
                                              )
                                            },
                                          },
                                        }),
                                      ]),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.setting.name_e
                              ? _c("th", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-center",
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.$t("general.Name_en"))
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "arrow-sort" }, [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-up",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("name_e")
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("-name_e")
                                              )
                                            },
                                          },
                                        }),
                                      ]),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.setting.is_active
                              ? _c("th", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-center",
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.$t("general.Status"))
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "arrow-sort" }, [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-up",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("name_e")
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down",
                                          on: {
                                            click: function ($event) {
                                              _vm.modules.sort(
                                                _vm.sortString("-name_e")
                                              )
                                            },
                                          },
                                        }),
                                      ]),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.$t("general.Action")) +
                                  "\n                                "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("i", { staticClass: "fas fa-ellipsis-v" }),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm.modules.length > 0
                          ? _c(
                              "tbody",
                              _vm._l(_vm.modules, function (data, index) {
                                return _c(
                                  "tr",
                                  {
                                    key: data.id,
                                    staticClass: "body-tr-custom",
                                    on: {
                                      "!click": function ($event) {
                                        return _vm.checkRow(data.id)
                                      },
                                      dblclick: function ($event) {
                                        $event.preventDefault()
                                        return _vm.$bvModal.show(
                                          "modal-edit-" + data.id
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("td", [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "form-check custom-control",
                                          staticStyle: {
                                            "min-height": "1.9em",
                                          },
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.checkAll,
                                                expression: "checkAll",
                                              },
                                            ],
                                            staticClass: "form-check-input",
                                            staticStyle: {
                                              width: "17px",
                                              height: "17px",
                                            },
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: data.id,
                                              checked: Array.isArray(
                                                _vm.checkAll
                                              )
                                                ? _vm._i(
                                                    _vm.checkAll,
                                                    data.id
                                                  ) > -1
                                                : _vm.checkAll,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.checkAll,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = data.id,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.checkAll =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.checkAll = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.checkAll = $$c
                                                }
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.setting.name
                                      ? _c("td", [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "m-0 font-weight-normal",
                                            },
                                            [_vm._v(_vm._s(data.name))]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.setting.name_e
                                      ? _c("td", [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "m-0 font-weight-normal",
                                            },
                                            [_vm._v(_vm._s(data.name_e))]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.setting.is_active
                                      ? _c("td", [
                                          _c(
                                            "span",
                                            {
                                              class: [
                                                data.is_active == "active"
                                                  ? "text-success"
                                                  : "text-danger",
                                                "badge",
                                              ],
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    data.is_active == "active"
                                                      ? "" +
                                                          _vm.$t(
                                                            "general.Active"
                                                          )
                                                      : "" +
                                                          _vm.$t(
                                                            "general.Inactive"
                                                          )
                                                  ) +
                                                  "\n                                    "
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "btn-group" },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm dropdown-toggle dropdown-coustom",
                                                attrs: {
                                                  type: "button",
                                                  "data-toggle": "dropdown",
                                                  "aria-expanded": "false",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.$t("general.commands")
                                                    ) +
                                                    "\n                                            "
                                                ),
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-angle-down",
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "dropdown-menu dropdown-menu-custom",
                                              },
                                              [
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.$bvModal.show(
                                                          "modal-edit-" +
                                                            data.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-between align-items-center text-black",
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "general.edit"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          staticClass:
                                                            "mdi mdi-square-edit-outline text-info",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "dropdown-item text-black",
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function ($event) {
                                                        $event.preventDefault()
                                                        return _vm.deleteModule(
                                                          data.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-between align-items-center text-black",
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "general.delete"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-times text-danger",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-modal",
                                          {
                                            ref: "edit-" + data.id,
                                            refInFor: true,
                                            attrs: {
                                              id: "modal-edit-" + data.id,
                                              title:
                                                _vm.$t("module.editmodule"),
                                              "title-class": "font-18",
                                              "body-class": "p-4",
                                              size: "lg",
                                              "hide-footer": true,
                                            },
                                            on: {
                                              show: function ($event) {
                                                return _vm.resetModalEdit(
                                                  data.id
                                                )
                                              },
                                              hidden: function ($event) {
                                                return _vm.resetModalHiddenEdit(
                                                  data.id
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("form", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "mb-3 d-flex justify-content-end",
                                                },
                                                [
                                                  !_vm.isLoader
                                                    ? _c(
                                                        "b-button",
                                                        {
                                                          staticClass: "mx-1",
                                                          attrs: {
                                                            variant: "success",
                                                            type: "submit",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.editSubmit(
                                                                data.id
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "general.Edit"
                                                                )
                                                              ) +
                                                              "\n                                                "
                                                          ),
                                                        ]
                                                      )
                                                    : _c(
                                                        "b-button",
                                                        {
                                                          staticClass: "mx-1",
                                                          attrs: {
                                                            variant: "success",
                                                            disabled: "",
                                                          },
                                                        },
                                                        [
                                                          _c("b-spinner", {
                                                            attrs: {
                                                              small: "",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "sr-only",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "login.Loading"
                                                                  )
                                                                ) + "..."
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-button",
                                                    {
                                                      attrs: {
                                                        variant: "danger",
                                                        type: "button",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.$bvModal.hide(
                                                            "modal-edit-" +
                                                              data.id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "general.Cancel"
                                                            )
                                                          ) +
                                                          "\n                                                "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "row" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-md-6 direction",
                                                      attrs: { dir: "rtl" },
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "control-label",
                                                              attrs: {
                                                                for: "field-u-1",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "general.Name"
                                                                    )
                                                                  ) +
                                                                  "\n                                                            "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.$v.edit
                                                                    .name
                                                                    .$model,
                                                                expression:
                                                                  "$v.edit.name.$model",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            class: {
                                                              "is-invalid":
                                                                _vm.$v.edit.name
                                                                  .$error ||
                                                                _vm.errors.name,
                                                              "is-valid":
                                                                !_vm.$v.edit
                                                                  .name
                                                                  .$invalid &&
                                                                !_vm.errors
                                                                  .name,
                                                            },
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "general.Name"
                                                                ),
                                                              id: "field-u-1",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.$v.edit.name
                                                                  .$model,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.$v.edit
                                                                    .name,
                                                                  "$model",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name
                                                            .alphaArabic
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.alphaArabic"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name
                                                            .minLength
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Itmustbeatleast"
                                                                      )
                                                                    ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$v
                                                                          .edit
                                                                          .name
                                                                          .$params
                                                                          .minLength
                                                                          .min
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "general.letters"
                                                                        )
                                                                      )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name
                                                            .maxLength
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Itmustbeatmost"
                                                                      )
                                                                    ) +
                                                                      "  " +
                                                                      _vm._s(
                                                                        _vm.$v
                                                                          .edit
                                                                          .name
                                                                          .$params
                                                                          .maxLength
                                                                          .max
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "general.letters"
                                                                        )
                                                                      )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _vm.errors.name
                                                            ? _vm._l(
                                                                _vm.errors.name,
                                                                function (
                                                                  errorMessage,
                                                                  index
                                                                ) {
                                                                  return _c(
                                                                    "ErrorMessage",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errorMessage
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                }
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-md-6 direction-ltr",
                                                      attrs: { dir: "ltr" },
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "control-label",
                                                              attrs: {
                                                                for: "field-u-2",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "general.Name_en"
                                                                    )
                                                                  ) +
                                                                  "\n                                                            "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.$v.edit
                                                                    .name_e
                                                                    .$model,
                                                                expression:
                                                                  "$v.edit.name_e.$model",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            class: {
                                                              "is-invalid":
                                                                _vm.$v.edit
                                                                  .name_e
                                                                  .$error ||
                                                                _vm.errors
                                                                  .name_e,
                                                              "is-valid":
                                                                !_vm.$v.edit
                                                                  .name_e
                                                                  .$invalid &&
                                                                !_vm.errors
                                                                  .name_e,
                                                            },
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "general.Name_en"
                                                                ),
                                                              id: "field-u-2",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.$v.edit
                                                                  .name_e
                                                                  .$model,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.$v.edit
                                                                    .name_e,
                                                                  "$model",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name_e
                                                            .minLength
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Itmustbeatleast"
                                                                      )
                                                                    ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$v
                                                                          .edit
                                                                          .name_e
                                                                          .$params
                                                                          .minLength
                                                                          .min
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "general.letters"
                                                                        )
                                                                      )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name_e
                                                            .maxLength
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Itmustbeatmost"
                                                                      )
                                                                    ) +
                                                                      "  " +
                                                                      _vm._s(
                                                                        _vm.$v
                                                                          .edit
                                                                          .name_e
                                                                          .$params
                                                                          .maxLength
                                                                          .max
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "general.letters"
                                                                        )
                                                                      )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          !_vm.$v.edit.name_e
                                                            .alphaEnglish
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.alphaEnglish"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _vm.errors.name_e
                                                            ? _vm._l(
                                                                _vm.errors
                                                                  .name_e,
                                                                function (
                                                                  errorMessage,
                                                                  index
                                                                ) {
                                                                  return _c(
                                                                    "ErrorMessage",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errorMessage
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                }
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-md-6" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "my-1 mr-2",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "general.IdParent"
                                                                  )
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("multiselect", {
                                                            attrs: {
                                                              options:
                                                                _vm.parents.map(
                                                                  function (
                                                                    type
                                                                  ) {
                                                                    return type.id
                                                                  }
                                                                ),
                                                              "custom-label":
                                                                function (opt) {
                                                                  return _vm
                                                                    .$i18n
                                                                    .locale
                                                                    ? _vm.parents.find(
                                                                        function (
                                                                          x
                                                                        ) {
                                                                          return (
                                                                            x.id ==
                                                                            opt
                                                                          )
                                                                        }
                                                                      ).name
                                                                    : _vm.parents.find(
                                                                        function (
                                                                          x
                                                                        ) {
                                                                          return (
                                                                            x.id ==
                                                                            opt
                                                                          )
                                                                        }
                                                                      ).name_e
                                                                },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.edit
                                                                  .parent_id,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.edit,
                                                                    "parent_id",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "edit.parent_id",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _vm.errors.parent_id
                                                            ? _vm._l(
                                                                _vm.errors
                                                                  .parent_id,
                                                                function (
                                                                  errorMessage,
                                                                  index
                                                                ) {
                                                                  return _c(
                                                                    "ErrorMessage",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errorMessage
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                }
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-md-6" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "mr-2 mb-2",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "general.Status"
                                                                    )
                                                                  ) +
                                                                  "\n                                                            "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              class: {
                                                                "is-invalid":
                                                                  _vm.$v.edit
                                                                    .is_active
                                                                    .$error ||
                                                                  _vm.errors
                                                                    .is_active,
                                                                "is-valid":
                                                                  !_vm.$v.edit
                                                                    .is_active
                                                                    .$invalid &&
                                                                  !_vm.errors
                                                                    .is_active,
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-radio",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block",
                                                                  attrs: {
                                                                    name: "some-radios",
                                                                    value:
                                                                      "active",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.$v
                                                                        .edit
                                                                        .is_active
                                                                        .$model,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.$v
                                                                            .edit
                                                                            .is_active,
                                                                          "$model",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "$v.edit.is_active.$model",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Active"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "b-form-radio",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block m-1",
                                                                  attrs: {
                                                                    name: "some-radios",
                                                                    value:
                                                                      "inactive",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.$v
                                                                        .edit
                                                                        .is_active
                                                                        .$model,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.$v
                                                                            .edit
                                                                            .is_active,
                                                                          "$model",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "$v.edit.is_active.$model",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "general.Inactive"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.errors.is_active
                                                            ? _vm._l(
                                                                _vm.errors
                                                                  .is_active,
                                                                function (
                                                                  errorMessage,
                                                                  index
                                                                ) {
                                                                  return _c(
                                                                    "ErrorMessage",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errorMessage
                                                                        ) +
                                                                          "\n                                                            "
                                                                      ),
                                                                    ]
                                                                  )
                                                                }
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fe-info",
                                        staticStyle: { "font-size": "22px" },
                                      }),
                                    ]),
                                  ]
                                )
                              }),
                              0
                            )
                          : _c("tbody", [
                              _c("tr", [
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-center",
                                    attrs: { colspan: "6" },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("general.notDataFound"))
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(c)return!1;return f?-1:l||c?c:w}}},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h)}},function(t,e,n){"use strict";function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var r=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return!!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},h=function(t){delete y[t]},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1))}:v&&v.now?i=function(t){v.now(s(m,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i)}catch(t){c&&!s&&c.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1))}catch(t){F.call(i,t)}}):(n._v=t,n._s=1,D(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1))}catch(t){F.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1)},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V)})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";function i(t){n(99)}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u}},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(a)n=function(){s.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l)}}else n=function(){r.call(i,l)};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o}])});

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ })

}]);