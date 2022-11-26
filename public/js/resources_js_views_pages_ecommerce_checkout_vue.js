(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_ecommerce_checkout_vue"],{

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
  props: {
    title: {
      type: String,
      "default": ""
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/views/layouts/main.vue");
/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Page-header */ "./resources/js/components/Page-header.vue");





/**
 * Checkout component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  page: {
    title: "Checkout",
    meta: [{
      name: "description",
      content: 'kdjsd'
    }]
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__.FormWizard,
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__.TabContent,
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageHeader: _components_Page_header__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      title: "Checkout",
      items: [{
        text: "Minton"
      }, {
        text: "eCommerce"
      }, {
        text: "Checkout",
        active: true
      }]
    };
  },
  middleware: "router-auth"
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
  label: "menuitems.dashboard.text",
  icon: "ri-dashboard-line",
  badge: {
    variant: "success",
    text: "menuitems.dashboard.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 3,
    label: 'menuitems.dashboard.list.sales',
    link: '/'
  }, {
    id: 4,
    label: 'menuitems.dashboard.list.crm',
    link: '/dashboard/crm'
  }, {
    id: 5,
    label: 'menuitems.dashboard.list.analytics',
    link: '/dashboard/analytics'
  }]
}, {
  id: 6,
  label: "menuitems.apps.text",
  isTitle: true
}, {
  id: 7,
  label: "menuitems.chat.text",
  icon: "ri-message-2-line",
  link: '/apps/chat'
}, {
  id: 8,
  label: "menuitems.ecommerce.text",
  icon: "ri-shopping-cart-2-line",
  badge: {
    variant: "danger",
    text: "menuitems.ecommerce.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 9,
    label: "menuitems.ecommerce.list.products",
    link: "/ecommerce/products"
  }, {
    id: 10,
    label: "menuitems.ecommerce.list.productsgrid",
    link: "/ecommerce/products-grid"
  }, {
    id: 11,
    label: 'menuitems.ecommerce.list.productdetail',
    link: '/ecommerce/product-detail/1'
  }, {
    id: 12,
    label: 'menuitems.ecommerce.list.createproduct',
    link: '/ecommerce/product-create'
  }, {
    id: 13,
    label: "menuitems.ecommerce.list.customers",
    link: "/ecommerce/customers"
  }, {
    id: 14,
    label: "menuitems.ecommerce.list.orders",
    link: "/ecommerce/orders"
  }, {
    id: 15,
    label: "menuitems.ecommerce.list.orderdetail",
    link: "/ecommerce/order-detail"
  }, {
    id: 16,
    label: "menuitems.ecommerce.list.sellers",
    link: "/ecommerce/sellers"
  }, {
    id: 17,
    label: "menuitems.ecommerce.list.cart",
    link: "/ecommerce/cart"
  }, {
    id: 18,
    label: "menuitems.ecommerce.list.checkout",
    link: "/ecommerce/checkout"
  }]
}, {
  id: 19,
  label: 'menuitems.calendar.text',
  icon: 'ri-calendar-2-line',
  link: '/apps/calendar'
}, {
  id: 20,
  label: 'menuitems.email.text',
  icon: 'ri-mail-line',
  isMenuCollapsed: false,
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
  isMenuCollapsed: false,
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
  label: 'menuitems.ticket.text',
  icon: 'ri-customer-service-2-line',
  link: '/apps/tickets'
}, {
  id: 30,
  label: 'menuitems.contacts.text',
  icon: 'ri-profile-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 31,
    label: 'menuitems.contacts.list.members',
    link: '/contacts/list'
  }, {
    id: 32,
    label: 'menuitems.contacts.list.profile',
    link: '/contacts/profile'
  }]
}, {
  id: 33,
  label: 'menuitems.filemanager.text',
  icon: 'ri-folders-line',
  link: '/apps/file-manager'
}, {
  id: 34,
  label: "menuitems.custom.text",
  isTitle: true
}, {
  id: 35,
  label: 'menuitems.auth.text',
  icon: 'ri-shield-user-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 36,
    label: 'menuitems.auth.list.login',
    link: '/auth/login-1'
  }, {
    id: 37,
    label: 'menuitems.auth.list.login-2',
    link: '/auth/login-2'
  }, {
    id: 38,
    label: 'menuitems.auth.list.register',
    link: '/auth/register-1'
  }, {
    id: 39,
    label: 'menuitems.auth.list.register-2',
    link: '/auth/register-2'
  }, {
    id: 40,
    label: 'menuitems.auth.list.signin-signup',
    link: '/auth/signin-signup'
  }, {
    id: 41,
    label: 'menuitems.auth.list.signin-signup-2',
    link: '/auth/signin-signup-2'
  }, {
    id: 42,
    label: 'menuitems.auth.list.recoverpwd',
    link: '/auth/recoverpwd'
  }, {
    id: 43,
    label: 'menuitems.auth.list.recoverpwd-2',
    link: '/auth/recoverpwd-2'
  }, {
    id: 44,
    label: 'menuitems.auth.list.lock-screen',
    link: '/auth/lock-screen'
  }, {
    id: 45,
    label: 'menuitems.auth.list.lock-screen-2',
    link: '/auth/lock-screen-2'
  }, {
    id: 46,
    label: 'menuitems.auth.list.logout',
    link: '/auth/logout-1'
  }, {
    id: 47,
    label: 'menuitems.auth.list.logout-2',
    link: '/auth/logout-2'
  }, {
    id: 48,
    label: 'menuitems.auth.list.confirm-mail',
    link: '/auth/confirm-mail'
  }, {
    id: 49,
    label: 'menuitems.auth.list.confirm-mail-2',
    link: '/auth/confirm-mail-2'
  }]
}, {
  id: 50,
  label: 'menuitems.extrapages.text',
  icon: 'ri-pages-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 51,
    label: 'menuitems.extrapages.list.starter',
    link: '/extras/starter'
  }, {
    id: 52,
    label: 'menuitems.extrapages.list.timeline',
    link: '/extras/timeline'
  }, {
    id: 53,
    label: 'menuitems.extrapages.list.sitemap',
    link: '/extras/sitemap'
  }, {
    id: 54,
    label: 'menuitems.extrapages.list.invoice',
    link: '/extras/invoice'
  }, {
    id: 55,
    label: 'menuitems.extrapages.list.faqs',
    link: '/extras/faqs'
  }, {
    id: 56,
    label: 'menuitems.extrapages.list.search-results',
    link: '/extras/search-results'
  }, {
    id: 57,
    label: 'menuitems.extrapages.list.pricing',
    link: '/extras/pricing'
  }, {
    id: 58,
    label: 'menuitems.extrapages.list.maintenance',
    link: '/extras/maintenance'
  }, {
    id: 59,
    label: 'menuitems.extrapages.list.comingsoon',
    link: '/extras/coming-soon'
  }, {
    id: 60,
    label: 'menuitems.extrapages.list.lightbox',
    link: '/extras/lightbox'
  }, {
    id: 61,
    label: 'menuitems.extrapages.list.error404',
    link: '/error/404'
  }, {
    id: 61,
    label: 'menuitems.extrapages.list.error404-alt',
    link: '/error/404-alt'
  }, {
    id: 62,
    label: 'menuitems.extrapages.list.error500',
    link: '/error/500'
  }]
}, {
  id: 63,
  label: "menuitems.components.text",
  isTitle: true
}, {
  id: 64,
  label: 'menuitems.ui.text',
  icon: 'ri-pencil-ruler-2-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 65,
    label: 'menuitems.ui.list.avatars',
    link: '/ui/avatars'
  }, {
    id: 66,
    label: 'menuitems.ui.list.buttons',
    link: '/ui/buttons'
  }, {
    id: 67,
    label: 'menuitems.ui.list.cards',
    link: '/ui/cards'
  }, {
    id: 68,
    label: 'menuitems.ui.list.carousel',
    link: '/ui/carousel'
  }, {
    id: 69,
    label: 'menuitems.ui.list.dropdowns',
    link: '/ui/dropdowns'
  }, {
    id: 70,
    label: 'menuitems.ui.list.video',
    link: '/ui/video'
  }, {
    id: 71,
    label: 'menuitems.ui.list.general',
    link: '/ui/general'
  }, {
    id: 72,
    label: 'menuitems.ui.list.grid',
    link: '/ui/grid'
  }, {
    id: 73,
    label: 'menuitems.ui.list.images',
    link: '/ui/images'
  }, {
    id: 74,
    label: 'menuitems.ui.list.listgroup',
    link: '/ui/list-group'
  }, {
    id: 75,
    label: 'menuitems.ui.list.modals',
    link: '/ui/modals'
  }, {
    id: 76,
    label: 'menuitems.ui.list.notifications',
    link: '/ui/notifications'
  }, {
    id: 77,
    label: 'menuitems.ui.list.portlet',
    link: '/ui/portlets'
  }, {
    id: 78,
    label: 'menuitems.ui.list.progress',
    link: '/ui/progress'
  }, {
    id: 79,
    label: 'menuitems.ui.list.ribbons',
    link: '/ui/ribbons'
  }, {
    id: 80,
    label: 'menuitems.ui.list.spinners',
    link: '/ui/spinners'
  }, {
    id: 81,
    label: 'menuitems.ui.list.tabs',
    link: '/ui/tabs-accordions'
  }, {
    id: 82,
    label: 'menuitems.ui.list.tooltip',
    link: '/ui/tooltips-popovers'
  }, {
    id: 83,
    label: 'menuitems.ui.list.typography',
    link: '/ui/typography'
  }]
}, {
  id: 84,
  label: 'menuitems.extendedui.text',
  icon: 'ri-stack-line',
  badge: {
    variant: "primary",
    text: "menuitems.extendedui.badge"
  },
  isMenuCollapsed: false,
  subItems: [{
    id: 85,
    label: 'menuitems.extendedui.list.rangeslider',
    link: '/extended/rangeslider'
  }, {
    id: 86,
    label: 'menuitems.extendedui.list.sweetalert',
    link: '/extended/sweet-alert'
  }, {
    id: 87,
    label: 'menuitems.extendedui.list.tour',
    link: '/extended/tour'
  }, {
    id: 88,
    label: 'menuitems.extendedui.list.scrollspy',
    link: '/extended/scrollspy'
  }]
}, {
  id: 89,
  label: 'menuitems.widgets.text',
  icon: 'ri-honour-line',
  link: '/widgets'
}, {
  id: 90,
  label: 'menuitems.icons.text',
  icon: 'ri-markup-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 91,
    label: 'menuitems.icons.list.feather',
    link: '/icons/feather'
  }, {
    id: 92,
    label: 'menuitems.icons.list.remix',
    link: '/icons/remix'
  }, {
    id: 93,
    label: 'menuitems.icons.list.boxicons',
    link: '/icons/boxicons'
  }, {
    id: 94,
    label: 'menuitems.icons.list.materialdesign',
    link: '/icons/mdi'
  }, {
    id: 95,
    label: 'menuitems.icons.list.fontawesome',
    link: '/icons/font-awesome'
  }, {
    id: 96,
    label: 'menuitems.icons.list.weather',
    link: '/icons/weather'
  }]
}, {
  id: 97,
  label: 'menuitems.forms.text',
  icon: 'ri-eraser-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 98,
    label: 'menuitems.forms.list.elements',
    link: '/forms/elements'
  }, {
    id: 99,
    label: 'menuitems.forms.list.advanced',
    link: '/forms/advanced'
  }, {
    id: 100,
    label: 'menuitems.forms.list.validation',
    link: '/forms/validation'
  }, {
    id: 101,
    label: 'menuitems.forms.list.wizard',
    link: '/forms/wizard'
  }, {
    id: 102,
    label: 'menuitems.forms.list.mask',
    link: '/forms/mask'
  }, {
    id: 103,
    label: 'menuitems.forms.list.editor',
    link: '/forms/quill'
  }, {
    id: 104,
    label: 'menuitems.forms.list.fileupload',
    link: '/forms/file-uploads'
  }]
}, {
  id: 105,
  label: 'menuitems.tables.text',
  icon: 'ri-table-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 106,
    label: 'menuitems.tables.list.basic',
    link: '/tables/basic'
  }, {
    id: 107,
    label: 'menuitems.tables.list.advanced',
    link: '/tables/advanced'
  }]
}, {
  id: 108,
  label: 'menuitems.charts.text',
  icon: 'ri-bar-chart-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 109,
    label: 'menuitems.charts.list.apex',
    link: '/charts/apex'
  }, {
    id: 109,
    label: 'menuitems.charts.list.chartjs',
    link: '/charts/chartjs'
  }, {
    id: 109,
    label: 'menuitems.charts.list.c3',
    link: '/charts/c3'
  }, {
    id: 109,
    label: 'menuitems.charts.list.chartist',
    link: '/charts/chartist'
  }, {
    id: 109,
    label: 'menuitems.charts.list.knob',
    link: '/charts/knob'
  }]
}, {
  id: 110,
  label: 'menuitems.maps.text',
  icon: 'ri-map-pin-line',
  isMenuCollapsed: false,
  subItems: [{
    id: 111,
    label: 'menuitems.maps.list.googlemap',
    link: '/maps/google'
  }]
}, {
  id: 112,
  label: "menuitems.multilevel.text",
  icon: "ri-share-line",
  isMenuCollapsed: false,
  subItems: [{
    id: 113,
    label: "menuitems.multilevel.list.level1.1",
    link: "javascript: void(0);"
  }, {
    id: 114,
    label: "menuitems.multilevel.list.level1.2",
    isMenuCollapsed: false,
    subItems: [{
      id: 115,
      label: "menuitems.multilevel.list.level1.level2.1",
      link: "javascript: void(0);"
    }, {
      id: 116,
      label: "menuitems.multilevel.list.level1.level2.2",
      link: "javascript: void(0);"
    }]
  }]
}];

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css ***!
  \***************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".vue-form-wizard .wizard-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px}.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.vue-form-wizard *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue-form-wizard a{text-decoration:none}.vue-form-wizard .wizard-nav{margin-bottom:0;padding-left:0;list-style:none}.vue-form-wizard .wizard-nav>li{position:relative;display:block}.vue-form-wizard .wizard-nav>li>a{position:relative;display:block;padding:10px 15px}.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-form-wizard .wizard-nav>li.disabled>a{color:#777}.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.vue-form-wizard .wizard-progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:2px;background-color:transparent;font-size:14px;font-weight:600;padding:6px 12px;min-width:140px}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{outline:0!important}.vue-form-wizard .wizard-nav-pills{margin-top:0;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-positive:1;flex-grow:1}.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-form-wizard .wizard-nav-pills>li>a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0 auto;color:rgba(0,0,0,.2);position:relative;top:3px}.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{background-color:transparent;color:rgba(0,0,0,.2);outline:0!important}.vue-form-wizard .wizard-nav-pills>li>a.disabled{pointer-events:none;cursor:default}.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{background-color:transparent;-webkit-transition:font-size .2s linear;transition:font-size .2s linear}.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{color:#fff;font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .2s linear;transition:all .2s linear}.vue-form-wizard{padding-bottom:20px}.vue-form-wizard .is_error{border-color:#c84513!important}.vue-form-wizard .is_error .icon-container{background:#c84513!important}.vue-form-wizard.xs .wizard-icon-circle{width:40px;height:40px;font-size:16px}.vue-form-wizard.xs .wizard-icon-circle.tab_shape{height:25px}.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{font-size:16px}.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{position:relative;top:25px;height:4px}.vue-form-wizard.sm .wizard-icon-circle{width:50px;height:50px;font-size:20px}.vue-form-wizard.sm .wizard-icon-circle.tab_shape{height:30px}.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{font-size:20px}.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{position:relative;top:30px;height:4px}.vue-form-wizard.md .wizard-icon-circle{width:70px;height:70px;font-size:24px}.vue-form-wizard.md .wizard-icon-circle.tab_shape{height:40px}.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{font-size:24px}.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard.lg .wizard-icon-circle{width:90px;height:90px;font-size:28px}.vue-form-wizard.lg .wizard-icon-circle.tab_shape{height:50px}.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{font-size:28px}.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{position:relative;top:50px;height:4px}.vue-form-wizard .wizard-icon-circle{font-size:18px;border:3px solid #f3f2ee;border-radius:50%;font-weight:600;width:70px;height:70px;background-color:#fff;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.vue-form-wizard .wizard-icon-circle.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle.tab_shape{width:100%;min-width:100px;height:40px;border:none;background-color:#f3f2ee;border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;border-radius:40%}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-tab-content{min-height:100px;padding:30px 20px 10px}.vue-form-wizard .wizard-header{padding:15px;position:relative;border-radius:3px 3px 0 0;text-align:center}.vue-form-wizard .wizard-title{color:#252422;font-weight:300;margin:0;text-align:center}.vue-form-wizard .category{font-size:14px;font-weight:400;color:#9a9a9a;margin-bottom:0;text-align:center}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{-webkit-box-shadow:none;box-shadow:none;-webkit-transition:width .3s ease;transition:width .3s ease}.vue-form-wizard .clearfix:after{content:\"\";clear:both;display:table}.vue-form-wizard .wizard-card-footer{padding:0 20px}.vue-form-wizard .wizard-card-footer .wizard-footer-left{float:left}.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:right}@media screen and (max-width:350px){.vue-form-wizard .wizard-card-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:none;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-card-footer .wizard-footer-right button{margin-top:10px}}.vue-form-wizard.vertical .wizard-card-footer{display:block}.vue-form-wizard.vertical .wizard-nav-pills{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard.vertical .wizard-navigation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vue-form-wizard.vertical .wizard-card-footer{padding-top:30px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/images/brands/bitbucket.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/brands/bitbucket.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/bitbucket.png?76b6529966bdbafa60debd01d588f4d9";

/***/ }),

/***/ "./resources/js/assets/images/brands/dribbble.png":
/*!********************************************************!*\
  !*** ./resources/js/assets/images/brands/dribbble.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/dribbble.png?d51d4b7c2fd0b85ecfa36871ceefd4af";

/***/ }),

/***/ "./resources/js/assets/images/brands/dropbox.png":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/brands/dropbox.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/dropbox.png?e759033031a7a7cc4bba46ea8b5b0054";

/***/ }),

/***/ "./resources/js/assets/images/brands/g-suite.png":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/brands/g-suite.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/g-suite.png?1fc701f6766c814f9c3c53527e468e2c";

/***/ }),

/***/ "./resources/js/assets/images/brands/github.png":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/brands/github.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/github.png?2f72706ab490ff331ff7746006fc418f";

/***/ }),

/***/ "./resources/js/assets/images/brands/slack.png":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/brands/slack.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/slack.png?849553c3d38a735b99153b9a4141bec5";

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

/***/ "./resources/js/assets/images/products/product-1.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/products/product-1.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-1.png?19ed70821acc671c92797100fb55be99";

/***/ }),

/***/ "./resources/js/assets/images/products/product-6.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/products/product-6.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-6.png?d8a58ef2b40abb45c66b6a1d45be10cb";

/***/ }),

/***/ "./resources/js/assets/images/products/product-8.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/products/product-8.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-8.png?fd8ea3b0f8b236e05b2d8e34ec4e3daf";

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

/***/ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-form-wizard.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-form-wizard/dist/vue-form-wizard.js ***!
  \**************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,b=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),b(t,e)}):u.beforeCreate=b?[].concat(b,l):[l]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach(function(t){t.checked=!1}),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach(function(t){t.checked=!0})},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then(function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)}).catch(function(t){a.setLoading(!1),a.setValidationError(t)});else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find(function(a,n){var i=a.route===t;return i&&(e=n),i});if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach(function(t){t.active=!1})},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),r=a(11),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),r=a(13),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",function(){return n.a}),a.d(e,"TabContent",function(){return i.a}),a.d(e,"WizardButton",function(){return r.a}),a.d(e,"WizardStep",function(){return s.a});var o={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),r=a(15),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex(function(t){return t.tabId===e})}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=r,e.c=s},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})})],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var n=a(6),i=a(17),r=a(0),s=r(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:n,staticRenderFns:i};e.a=r}])});

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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ "./resources/js/views/pages/ecommerce/checkout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/ecommerce/checkout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=1e5ad342& */ "./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__.render,
  _checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/ecommerce/checkout.vue"
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

/***/ "./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_1e5ad342___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=template&id=1e5ad342& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342&");


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
      _c(
        "div",
        {
          staticClass: "page-title-box",
          class: {
            "page-title-box-alt":
              _vm.layoutType !== "vertical" && _vm.layoutType !== "two-column",
          },
        },
        [
          _c("h4", { staticClass: "page-title" }, [_vm._v(_vm._s(_vm.title))]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-title-right" },
            [
              _c("b-breadcrumb", {
                staticClass: "m-0",
                attrs: { items: _vm.items },
              }),
            ],
            1
          ),
        ]
      ),
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
                                                          "\r\n                                        "
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
          _c("li", { staticClass: "d-none d-lg-block" }, [
            _c("form", { staticClass: "app-search" }, [
              _c("div", { staticClass: "app-search-box" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "search",
                      placeholder: _vm.$t("navbar.search.text"),
                      id: "top-search",
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown d-inline-block d-lg-none" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-lg dropdown-menu-right p-0",
              },
              [
                _c("form", { staticClass: "p-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: _vm.$t("navbar.search.text"),
                      "aria-label": "Recipient's username",
                    },
                  }),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
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
              staticClass: "d-none d-lg-inline-block topbar-dropdown",
              attrs: {
                variant: "white",
                "toggle-class": "nav-link",
                right: "",
                "menu-class": "dropdown-lg p-0",
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [_c("i", { staticClass: "fe-grid noti-icon" })]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "px-lg-2" }, [
                _c("div", { staticClass: "row no-gutters" }, [
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/github.png */ "./resources/js/assets/images/brands/github.png"),
                            alt: "Github",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("navbar.dropdown.site.list.github"))
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/dribbble.png */ "./resources/js/assets/images/brands/dribbble.png"),
                            alt: "dribbble",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("navbar.dropdown.site.list.dribbble"))
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/slack.png */ "./resources/js/assets/images/brands/slack.png"),
                            alt: "slack",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("navbar.dropdown.site.list.slack"))
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row no-gutters" }, [
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/g-suite.png */ "./resources/js/assets/images/brands/g-suite.png"),
                            alt: "G Suite",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("navbar.dropdown.site.list.g-suite"))
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/bitbucket.png */ "./resources/js/assets/images/brands/bitbucket.png"),
                            alt: "bitbucket",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.$t("navbar.dropdown.site.list.bitbucket")
                            )
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-icon-item",
                        attrs: { href: "#" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../assets/images/brands/dropbox.png */ "./resources/js/assets/images/brands/dropbox.png"),
                            alt: "dropbox",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("navbar.dropdown.site.list.dropbox"))
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
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
                { staticClass: "dropdown-item", attrs: { href: "/logout" } },
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
          _vm._v(" "),
          _c("li", { staticClass: "dropdown notification-list" }, [
            _c(
              "a",
              {
                staticClass: "nav-link right-bar-toggle toggle-right",
                attrs: { href: "javascript:void(0);" },
                on: { click: _vm.toggleRightSidebar },
              },
              [_c("i", { staticClass: "fe-settings noti-icon toggle-right" })]
            ),
          ]),
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
              [_vm._m(2)]
            ),
          ]),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            { staticClass: "d-none d-lg-block" },
            [
              _c("template", { slot: "button-content" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.$t("navbar.dropdown.createnew.text")) +
                    "\n          "
                ),
                _c("i", { staticClass: "mdi mdi-chevron-down" }),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fe-briefcase mr-1" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("navbar.dropdown.createnew.list.projects"))
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fe-user mr-1" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("navbar.dropdown.createnew.list.users"))
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fe-bar-chart-line- mr-1" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("navbar.dropdown.createnew.list.revenue"))
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fe-settings mr-1" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("navbar.dropdown.createnew.list.settings"))
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fe-headphones mr-1" }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("navbar.dropdown.createnew.list.help"))),
                ]),
              ]),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "dropdown-mega d-none d-xl-block",
              attrs: { variant: "black", "menu-class": "dropdown-megamenu" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("navbar.dropdown.megamenu.text")) +
                          "\n          "
                      ),
                      _c("i", { staticClass: "mdi mdi-chevron-down" }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("h5", { staticClass: "text-dark mt-0" }, [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm.$t("navbar.dropdown.megamenu.uicontent.title")
                            ) +
                            "\n                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.widgets"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.nestable"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.rangeslider"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.masonry"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.sweetalert"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.treeview"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.uicontent.list.tour"
                                )
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("h5", { staticClass: "text-dark mt-0" }, [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm.$t(
                                "navbar.dropdown.megamenu.application.title"
                              )
                            ) +
                            "\n                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.ecommerce"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.crm"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.email"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.calendar"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.contacts"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.tasks"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.application.list.template"
                                )
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("h5", { staticClass: "text-dark mt-0" }, [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm.$t(
                                "navbar.dropdown.megamenu.extrapages.title"
                              )
                            ) +
                            "\n                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.leftsidebaruser"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.collapsed"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.leftsidebar"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.header"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.search"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.gallery"
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:void(0);" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "navbar.dropdown.megamenu.extrapages.list.maintenance"
                                )
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "text-center mt-3" }, [
                    _c("h3", { staticClass: "text-dark" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("navbar.dropdown.megamenu.discount")) +
                          "\n              "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        _vm._s(_vm.$t("navbar.dropdown.megamenu.subtext"))
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-primary btn-rounded mt-3" },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.$t("navbar.dropdown.megamenu.buttontext")
                            ) +
                            "\n              "
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ],
        1
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn", attrs: { type: "submit" } }, [
        _c("i", { staticClass: "fe-search" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "nav-link dropdown-toggle arrow-none waves-effect waves-light",
        attrs: {
          "data-toggle": "dropdown",
          href: "#",
          role: "button",
          "aria-haspopup": "false",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe-search noti-icon" })]
    )
  },
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
                                    attrs: {
                                      to: "/apps/calendar",
                                      to: { name: "calendar" },
                                    },
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
                                                  to: "/ecommerce/product-detail/1",
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
                                                  to: "/task/detail",
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
                                                  to: "/contacts/list",
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
                                                  to: "/contacts/profile",
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
  return _c(
    "div",
    [
      _vm.layoutType === "vertical"
        ? _c(
            "Vertical",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.layoutType === "horizontal"
        ? _c(
            "Horizontal",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.layoutType === "detached"
        ? _c(
            "Detached",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.layoutType === "two-column"
        ? _c(
            "TwoColumn",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
    ],
    1
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/ecommerce/checkout.vue?vue&type=template&id=1e5ad342& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("PageHeader", { attrs: { title: _vm.title, items: _vm.items } }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-8" },
                  [
                    _c(
                      "form-wizard",
                      { attrs: { color: "#3bafda" } },
                      [
                        _c(
                          "tab-content",
                          { attrs: { title: "Billing Info" } },
                          [
                            _c("div", [
                              _c("h4", { staticClass: "header-title" }, [
                                _vm._v("Billing Information"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "sub-header" }, [
                                _vm._v(
                                  "\n                      Fill the form below in order to send you the order's\n                      invoice.\n                    "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("form", [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "billing-first-name" },
                                        },
                                        [_vm._v("First Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your first name",
                                          id: "billing-first-name",
                                        },
                                      }),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "billing-last-name" } },
                                        [_vm._v("Last Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your last name",
                                          id: "billing-last-name",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "billing-email-address",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Email Address\n                              "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          placeholder: "Enter your email",
                                          id: "billing-email-address",
                                        },
                                      }),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "billing-phone" } },
                                        [
                                          _vm._v("Phone "),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "(xx) xxx xxxx xxx",
                                          id: "billing-phone",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "billing-address" } },
                                        [_vm._v("Address")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter full address",
                                          id: "billing-address",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "billing-town-city" } },
                                        [_vm._v("Town / City")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your city name",
                                          id: "billing-town-city",
                                        },
                                      }),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "billing-state" } },
                                        [_vm._v("State")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your state",
                                          id: "billing-state",
                                        },
                                      }),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "billing-zip-postal" },
                                        },
                                        [_vm._v("Zip Code")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your zip code",
                                          id: "billing-zip-postal",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [_vm._v("Country")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            "data-toggle": "select2",
                                            title: "Country",
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "0" } },
                                            [_vm._v("Select Country")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AF" } },
                                            [_vm._v("Afghanistan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AL" } },
                                            [_vm._v("Albania")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DZ" } },
                                            [_vm._v("Algeria")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AS" } },
                                            [_vm._v("American Samoa")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AD" } },
                                            [_vm._v("Andorra")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AO" } },
                                            [_vm._v("Angola")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AI" } },
                                            [_vm._v("Anguilla")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AQ" } },
                                            [_vm._v("Antarctica")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AR" } },
                                            [_vm._v("Argentina")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AM" } },
                                            [_vm._v("Armenia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AW" } },
                                            [_vm._v("Aruba")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AU" } },
                                            [_vm._v("Australia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AT" } },
                                            [_vm._v("Austria")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AZ" } },
                                            [_vm._v("Azerbaijan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BS" } },
                                            [_vm._v("Bahamas")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BH" } },
                                            [_vm._v("Bahrain")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BD" } },
                                            [_vm._v("Bangladesh")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BB" } },
                                            [_vm._v("Barbados")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BY" } },
                                            [_vm._v("Belarus")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BE" } },
                                            [_vm._v("Belgium")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BZ" } },
                                            [_vm._v("Belize")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BJ" } },
                                            [_vm._v("Benin")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BM" } },
                                            [_vm._v("Bermuda")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BT" } },
                                            [_vm._v("Bhutan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BO" } },
                                            [_vm._v("Bolivia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BW" } },
                                            [_vm._v("Botswana")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BV" } },
                                            [_vm._v("Bouvet Island")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BR" } },
                                            [_vm._v("Brazil")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BN" } },
                                            [_vm._v("Brunei Darussalam")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BG" } },
                                            [_vm._v("Bulgaria")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BF" } },
                                            [_vm._v("Burkina Faso")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "BI" } },
                                            [_vm._v("Burundi")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KH" } },
                                            [_vm._v("Cambodia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CM" } },
                                            [_vm._v("Cameroon")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CA" } },
                                            [_vm._v("Canada")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CV" } },
                                            [_vm._v("Cape Verde")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KY" } },
                                            [_vm._v("Cayman Islands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CF" } },
                                            [
                                              _vm._v(
                                                "\n                                Central African Republic\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TD" } },
                                            [_vm._v("Chad")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CL" } },
                                            [_vm._v("Chile")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CN" } },
                                            [_vm._v("China")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CX" } },
                                            [_vm._v("Christmas Island")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CC" } },
                                            [
                                              _vm._v(
                                                "\n                                Cocos (Keeling) Islands\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CO" } },
                                            [_vm._v("Colombia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KM" } },
                                            [_vm._v("Comoros")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CG" } },
                                            [_vm._v("Congo")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CK" } },
                                            [_vm._v("Cook Islands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CR" } },
                                            [_vm._v("Costa Rica")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CI" } },
                                            [_vm._v("Cote d'Ivoire")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "HR" } },
                                            [_vm._v("Croatia (Hrvatska)")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CU" } },
                                            [_vm._v("Cuba")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CY" } },
                                            [_vm._v("Cyprus")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CZ" } },
                                            [_vm._v("Czech Republic")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DK" } },
                                            [_vm._v("Denmark")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DJ" } },
                                            [_vm._v("Djibouti")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DM" } },
                                            [_vm._v("Dominica")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DO" } },
                                            [_vm._v("Dominican Republic")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "EC" } },
                                            [_vm._v("Ecuador")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "EG" } },
                                            [_vm._v("Egypt")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SV" } },
                                            [_vm._v("El Salvador")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GQ" } },
                                            [_vm._v("Equatorial Guinea")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ER" } },
                                            [_vm._v("Eritrea")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "EE" } },
                                            [_vm._v("Estonia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ET" } },
                                            [_vm._v("Ethiopia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FK" } },
                                            [
                                              _vm._v(
                                                "\n                                Falkland Islands (Malvinas)\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FO" } },
                                            [_vm._v("Faroe Islands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FJ" } },
                                            [_vm._v("Fiji")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FI" } },
                                            [_vm._v("Finland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FR" } },
                                            [_vm._v("France")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GF" } },
                                            [_vm._v("French Guiana")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PF" } },
                                            [_vm._v("French Polynesia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GA" } },
                                            [_vm._v("Gabon")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GM" } },
                                            [_vm._v("Gambia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GE" } },
                                            [_vm._v("Georgia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DE" } },
                                            [_vm._v("Germany")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GH" } },
                                            [_vm._v("Ghana")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GI" } },
                                            [_vm._v("Gibraltar")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GR" } },
                                            [_vm._v("Greece")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GL" } },
                                            [_vm._v("Greenland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GD" } },
                                            [_vm._v("Grenada")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GP" } },
                                            [_vm._v("Guadeloupe")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GU" } },
                                            [_vm._v("Guam")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GT" } },
                                            [_vm._v("Guatemala")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GN" } },
                                            [_vm._v("Guinea")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GW" } },
                                            [_vm._v("Guinea-Bissau")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GY" } },
                                            [_vm._v("Guyana")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "HT" } },
                                            [_vm._v("Haiti")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "HN" } },
                                            [_vm._v("Honduras")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "HK" } },
                                            [_vm._v("Hong Kong")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "HU" } },
                                            [_vm._v("Hungary")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IS" } },
                                            [_vm._v("Iceland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IN" } },
                                            [_vm._v("India")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ID" } },
                                            [_vm._v("Indonesia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IQ" } },
                                            [_vm._v("Iraq")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IE" } },
                                            [_vm._v("Ireland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IL" } },
                                            [_vm._v("Israel")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "IT" } },
                                            [_vm._v("Italy")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "JM" } },
                                            [_vm._v("Jamaica")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "JP" } },
                                            [_vm._v("Japan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "JO" } },
                                            [_vm._v("Jordan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KZ" } },
                                            [_vm._v("Kazakhstan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KE" } },
                                            [_vm._v("Kenya")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KI" } },
                                            [_vm._v("Kiribati")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KR" } },
                                            [_vm._v("Korea, Republic of")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KW" } },
                                            [_vm._v("Kuwait")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KG" } },
                                            [_vm._v("Kyrgyzstan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LV" } },
                                            [_vm._v("Latvia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LB" } },
                                            [_vm._v("Lebanon")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LS" } },
                                            [_vm._v("Lesotho")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LR" } },
                                            [_vm._v("Liberia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LY" } },
                                            [
                                              _vm._v(
                                                "\n                                Libyan Arab Jamahiriya\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LI" } },
                                            [_vm._v("Liechtenstein")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LT" } },
                                            [_vm._v("Lithuania")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LU" } },
                                            [_vm._v("Luxembourg")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MO" } },
                                            [_vm._v("Macau")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MG" } },
                                            [_vm._v("Madagascar")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MW" } },
                                            [_vm._v("Malawi")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MY" } },
                                            [_vm._v("Malaysia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MV" } },
                                            [_vm._v("Maldives")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ML" } },
                                            [_vm._v("Mali")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MT" } },
                                            [_vm._v("Malta")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MH" } },
                                            [_vm._v("Marshall Islands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MQ" } },
                                            [_vm._v("Martinique")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MR" } },
                                            [_vm._v("Mauritania")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MU" } },
                                            [_vm._v("Mauritius")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "YT" } },
                                            [_vm._v("Mayotte")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MX" } },
                                            [_vm._v("Mexico")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MD" } },
                                            [_vm._v("Moldova, Republic of")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MC" } },
                                            [_vm._v("Monaco")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MN" } },
                                            [_vm._v("Mongolia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MS" } },
                                            [_vm._v("Montserrat")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MA" } },
                                            [_vm._v("Morocco")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MZ" } },
                                            [_vm._v("Mozambique")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MM" } },
                                            [_vm._v("Myanmar")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NA" } },
                                            [_vm._v("Namibia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NR" } },
                                            [_vm._v("Nauru")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NP" } },
                                            [_vm._v("Nepal")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NL" } },
                                            [_vm._v("Netherlands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AN" } },
                                            [_vm._v("Netherlands Antilles")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NC" } },
                                            [_vm._v("New Caledonia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NZ" } },
                                            [_vm._v("New Zealand")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NI" } },
                                            [_vm._v("Nicaragua")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NE" } },
                                            [_vm._v("Niger")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NG" } },
                                            [_vm._v("Nigeria")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NU" } },
                                            [_vm._v("Niue")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NF" } },
                                            [_vm._v("Norfolk Island")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "MP" } },
                                            [
                                              _vm._v(
                                                "\n                                Northern Mariana Islands\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "NO" } },
                                            [_vm._v("Norway")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "OM" } },
                                            [_vm._v("Oman")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PW" } },
                                            [_vm._v("Palau")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PA" } },
                                            [_vm._v("Panama")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PG" } },
                                            [_vm._v("Papua New Guinea")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PY" } },
                                            [_vm._v("Paraguay")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PE" } },
                                            [_vm._v("Peru")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PH" } },
                                            [_vm._v("Philippines")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PN" } },
                                            [_vm._v("Pitcairn")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PL" } },
                                            [_vm._v("Poland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PT" } },
                                            [_vm._v("Portugal")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PR" } },
                                            [_vm._v("Puerto Rico")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "QA" } },
                                            [_vm._v("Qatar")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "RE" } },
                                            [_vm._v("Reunion")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "RO" } },
                                            [_vm._v("Romania")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "RU" } },
                                            [_vm._v("Russian Federation")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "RW" } },
                                            [_vm._v("Rwanda")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "KN" } },
                                            [
                                              _vm._v(
                                                "\n                                Saint Kitts and Nevis\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LC" } },
                                            [_vm._v("Saint LUCIA")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "WS" } },
                                            [_vm._v("Samoa")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SM" } },
                                            [_vm._v("San Marino")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ST" } },
                                            [
                                              _vm._v(
                                                "\n                                Sao Tome and Principe\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SA" } },
                                            [_vm._v("Saudi Arabia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SN" } },
                                            [_vm._v("Senegal")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SC" } },
                                            [_vm._v("Seychelles")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SL" } },
                                            [_vm._v("Sierra Leone")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SG" } },
                                            [_vm._v("Singapore")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SK" } },
                                            [
                                              _vm._v(
                                                "\n                                Slovakia (Slovak Republic)\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SI" } },
                                            [_vm._v("Slovenia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SB" } },
                                            [_vm._v("Solomon Islands")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SO" } },
                                            [_vm._v("Somalia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ZA" } },
                                            [_vm._v("South Africa")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ES" } },
                                            [_vm._v("Spain")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "LK" } },
                                            [_vm._v("Sri Lanka")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SH" } },
                                            [_vm._v("St. Helena")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "PM" } },
                                            [
                                              _vm._v(
                                                "\n                                St. Pierre and Miquelon\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SD" } },
                                            [_vm._v("Sudan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SR" } },
                                            [_vm._v("Suriname")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SZ" } },
                                            [_vm._v("Swaziland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SE" } },
                                            [_vm._v("Sweden")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CH" } },
                                            [_vm._v("Switzerland")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SY" } },
                                            [_vm._v("Syrian Arab Republic")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TW" } },
                                            [
                                              _vm._v(
                                                "\n                                Taiwan, Province of China\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TJ" } },
                                            [_vm._v("Tajikistan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TZ" } },
                                            [
                                              _vm._v(
                                                "\n                                Tanzania, United Republic of\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TH" } },
                                            [_vm._v("Thailand")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TG" } },
                                            [_vm._v("Togo")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TK" } },
                                            [_vm._v("Tokelau")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TO" } },
                                            [_vm._v("Tonga")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TT" } },
                                            [_vm._v("Trinidad and Tobago")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TN" } },
                                            [_vm._v("Tunisia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TR" } },
                                            [_vm._v("Turkey")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TM" } },
                                            [_vm._v("Turkmenistan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TC" } },
                                            [
                                              _vm._v(
                                                "\n                                Turks and Caicos Islands\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "TV" } },
                                            [_vm._v("Tuvalu")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "UG" } },
                                            [_vm._v("Uganda")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "UA" } },
                                            [_vm._v("Ukraine")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AE" } },
                                            [_vm._v("United Arab Emirates")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "GB" } },
                                            [_vm._v("United Kingdom")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "US" } },
                                            [_vm._v("United States")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "UY" } },
                                            [_vm._v("Uruguay")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "UZ" } },
                                            [_vm._v("Uzbekistan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VU" } },
                                            [_vm._v("Vanuatu")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VE" } },
                                            [_vm._v("Venezuela")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VN" } },
                                            [_vm._v("Viet Nam")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VG" } },
                                            [
                                              _vm._v(
                                                "\n                                Virgin Islands (British)\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VI" } },
                                            [
                                              _vm._v(
                                                "\n                                Virgin Islands (U.S.)\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "WF" } },
                                            [
                                              _vm._v(
                                                "\n                                Wallis and Futuna Islands\n                              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "EH" } },
                                            [_vm._v("Western Sahara")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "YE" } },
                                            [_vm._v("Yemen")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ZM" } },
                                            [_vm._v("Zambia")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "ZW" } },
                                            [_vm._v("Zimbabwe")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "customCheck2",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label",
                                              attrs: { for: "customCheck2" },
                                            },
                                            [
                                              _vm._v(
                                                "Ship to different address ?"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group mt-3" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "example-textarea" },
                                          },
                                          [_vm._v("Order Notes:")]
                                        ),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "example-textarea",
                                            rows: "3",
                                            placeholder: "Write some note..",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "pager wizard list-inline mt-2" },
                              [
                                _c(
                                  "li",
                                  { staticClass: "list-inline-item" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-secondary",
                                        attrs: { to: "/ecommerce/cart" },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "mdi mdi-arrow-left",
                                        }),
                                        _vm._v(
                                          " Back to Shopping\n                        Cart\n                      "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "next list-inline-item float-right",
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: { type: "button" },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "mdi mdi-truck-fast mr-1",
                                        }),
                                        _vm._v(
                                          " Proceed to\n                        Shipping\n                      "
                                        ),
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
                          "tab-content",
                          { attrs: { title: "Shipping Info" } },
                          [
                            _c("div", [
                              _c("h4", { staticClass: "header-title" }, [
                                _vm._v("Saved Address"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "sub-header" }, [
                                _vm._v(
                                  "\n                      Fill the form below in order to send you the order's\n                      invoice.\n                    "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "border p-3 rounded mb-3 mb-md-0",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-radio custom-control-inline",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "customRadio1",
                                              name: "customRadio",
                                              checked: "",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label font-16",
                                              attrs: { for: "customRadio1" },
                                            },
                                            [_vm._v("Home")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "float-right" },
                                        [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _c("i", {
                                              staticClass:
                                                "mdi mdi-square-edit-outline text-muted font-20",
                                            }),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h5", { staticClass: "mt-3" }, [
                                        _vm._v("Brent Rowe"),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-1" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Address:")]
                                        ),
                                        _vm._v(
                                          "\n                            3559 Roosevelt Wilson Lane San Bernardino, CA\n                            92405\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-1" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Phone:")]
                                        ),
                                        _vm._v(
                                          "\n                            (123) 456-7890\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Mobile:")]
                                        ),
                                        _vm._v(
                                          "\n                            (+01) 12345 67890\n                          "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "border p-3 rounded mb-3 mb-md-0",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-radio custom-control-inline",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "customRadio2",
                                              name: "customRadio",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label font-16",
                                              attrs: { for: "customRadio2" },
                                            },
                                            [_vm._v("Office")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "float-right" },
                                        [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _c("i", {
                                              staticClass:
                                                "mdi mdi-square-edit-outline text-muted font-20",
                                            }),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h5", { staticClass: "mt-3" }, [
                                        _vm._v("Brent Rowe"),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-1" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Address:")]
                                        ),
                                        _vm._v(
                                          "\n                            3559 Roosevelt Wilson Lane San Bernardino, CA\n                            92405\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-1" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Phone:")]
                                        ),
                                        _vm._v(
                                          "\n                            (123) 456-7890\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-semibold mr-2",
                                          },
                                          [_vm._v("Mobile:")]
                                        ),
                                        _vm._v(
                                          "\n                            (+01) 12345 67890\n                          "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("h4", { staticClass: "header-title mt-4" }, [
                                _vm._v("Shipping Method"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted mb-3" }, [
                                _vm._v(
                                  "\n                      Fill the form below in order to send you the order's\n                      invoice.\n                    "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c(
                                    "div",
                                    { staticClass: "border p-3 rounded mb-3" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-radio",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "shippingMethodRadio1",
                                              name: "shippingOptions",
                                              checked: "",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label font-16",
                                              attrs: {
                                                for: "shippingMethodRadio1",
                                              },
                                            },
                                            [_vm._v("Standard Delivery - FREE")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "mb-0 pl-3 pt-1" },
                                        [
                                          _vm._v(
                                            "\n                            Estimated 5-7 days shipping (Duties and tax may be\n                            due upon delivery)\n                          "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "border p-3 rounded" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-radio",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "shippingMethodRadio2",
                                              name: "shippingOptions",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label font-16",
                                              attrs: {
                                                for: "shippingMethodRadio2",
                                              },
                                            },
                                            [_vm._v("Fast Delivery - $25")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "mb-0 pl-3 pt-1" },
                                        [
                                          _vm._v(
                                            "\n                            Estimated 1-2 days shipping (Duties and tax may be\n                            due upon delivery)\n                          "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "tab-content",
                          { attrs: { title: "Payment Info" } },
                          [
                            _c("div", [
                              _c("h4", { staticClass: "header-title" }, [
                                _vm._v("Payment Selection"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "sub-header" }, [
                                _vm._v(
                                  "\n                      Fill the form below in order to send you the order's\n                      invoice.\n                    "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "border p-3 mb-3 rounded" },
                                [
                                  _c("div", { staticClass: "float-right" }, [
                                    _c("i", {
                                      staticClass:
                                        "fab fa-cc-paypal font-24 text-primary",
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-radio custom-control-inline",
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id: "BillingOptRadio2",
                                          name: "billingOptions",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control-label font-16",
                                          attrs: { for: "BillingOptRadio2" },
                                        },
                                        [_vm._v("Pay with Paypal")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0 pl-3 pt-1" }, [
                                    _vm._v(
                                      "\n                        You will be redirected to PayPal website to complete\n                        your purchase securely.\n                      "
                                    ),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "border p-3 mb-3 rounded" },
                                [
                                  _c("div", { staticClass: "float-right" }, [
                                    _c("i", {
                                      staticClass:
                                        "far fa-credit-card font-24 text-primary",
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-radio custom-control-inline",
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id: "BillingOptRadio1",
                                          name: "billingOptions",
                                          checked: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control-label font-16",
                                          attrs: { for: "BillingOptRadio1" },
                                        },
                                        [_vm._v("Credit / Debit Card")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0 pl-3 pt-1" }, [
                                    _vm._v(
                                      "\n                        Safe money transfer using your bank account. We\n                        support Mastercard, Visa, Discover and Stripe.\n                      "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row mt-4" }, [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "card-number" } },
                                          [_vm._v("Card Number")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "card-number",
                                            "data-toggle": "input-mask",
                                            "data-mask-format":
                                              "0000 0000 0000 0000",
                                            placeholder: "4242 4242 4242 4242",
                                          },
                                        }),
                                      ]),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "card-name-on" } },
                                          [_vm._v("Name on card")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "card-name-on",
                                            placeholder: "Master Name",
                                          },
                                        }),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-3" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "card-expiry-date" },
                                          },
                                          [_vm._v("Expiry date")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "card-expiry-date",
                                            "data-toggle": "input-mask",
                                            "data-mask-format": "00/00",
                                            placeholder: "MM/YY",
                                          },
                                        }),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-3" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "card-cvv" } },
                                          [_vm._v("CVV code")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "card-cvv",
                                            "data-toggle": "input-mask",
                                            "data-mask-format": "000",
                                            placeholder: "012",
                                          },
                                        }),
                                      ]),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "border p-3 mb-3 rounded" },
                                [
                                  _c("div", { staticClass: "float-right" }, [
                                    _c("i", {
                                      staticClass:
                                        "fas fa-money-bill-alt font-24 text-primary",
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-radio custom-control-inline",
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id: "BillingOptRadio4",
                                          name: "billingOptions",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control-label font-16",
                                          attrs: { for: "BillingOptRadio4" },
                                        },
                                        [_vm._v("Cash on Delivery")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0 pl-3 pt-1" }, [
                                    _vm._v(
                                      "\n                        Pay with cash when your order is delivered.\n                      "
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "header-title mb-3" }, [
                        _vm._v("Order Summary"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-centered table-nowrap mb-0",
                          },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", { staticStyle: { width: "80px" } }, [
                                  _c("img", {
                                    staticClass: "rounded",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../../assets/images/products/product-1.png */ "./resources/js/assets/images/products/product-1.png"),
                                      alt: "product-img",
                                      title: "product-img",
                                      height: "48",
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "text-body font-weight-semibold",
                                        attrs: {
                                          to: "/ecommerce/product-detail/1",
                                        },
                                      },
                                      [_vm._v("Blue color T-shirt")]
                                    ),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "d-block" }, [
                                      _vm._v("1 x $ 41"),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v("$ 41"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("img", {
                                    staticClass: "rounded",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../../assets/images/products/product-6.png */ "./resources/js/assets/images/products/product-6.png"),
                                      alt: "product-img",
                                      title: "product-img",
                                      height: "48",
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "text-body font-weight-semibold",
                                        attrs: {
                                          to: "/ecommerce/product-detail/1",
                                        },
                                      },
                                      [_vm._v("Blue Hoodie for men")]
                                    ),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "d-block" }, [
                                      _vm._v("2 x $ 45"),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v("$ 90"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("img", {
                                    staticClass: "rounded mr-2",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../../assets/images/products/product-8.png */ "./resources/js/assets/images/products/product-8.png"),
                                      alt: "product-img",
                                      title: "product-img",
                                      height: "48",
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "text-body font-weight-semibold",
                                        attrs: {
                                          to: "/ecommerce/product-detail/1",
                                        },
                                      },
                                      [_vm._v("Full sleeve Pink T-shirt")]
                                    ),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "d-block" }, [
                                      _vm._v("1 x $ 45"),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v("$ 45"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", { staticClass: "text-right" }, [
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _c("h6", { staticClass: "m-0" }, [
                                    _vm._v("Sub Total:"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v("$ 176"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", { staticClass: "text-right" }, [
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _c("h6", { staticClass: "m-0" }, [
                                    _vm._v("Shipping:"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v("FREE"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", { staticClass: "text-right" }, [
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _c("h5", { staticClass: "m-0" }, [
                                    _vm._v("Total:"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-right font-weight-semibold",
                                  },
                                  [
                                    _vm._v(
                                      "\n                            $ 176\n                          "
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);