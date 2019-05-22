webpackJsonp([12],{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(549)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(551)
/* template */
var __vue_template__ = __webpack_require__(552)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-366eba34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/dashboard/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-366eba34", Component.options)
  } else {
    hotAPI.reload("data-v-366eba34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "/images/background.jpg?84aca450bf621072c8036445581a7d8a";

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(550);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("e2606f54", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-366eba34\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-366eba34\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.dashboard-container[data-v-366eba34] {\n  margin: 30px;\n}\n.dashboard-text[data-v-366eba34] {\n  font-size: 30px;\n  line-height: 46px;\n}\n", ""]);

// exports


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  data: function data() {
    return {
      newOpt: [],
      title: "新增",
      backgroundDiv: {
        backgroundImage: "url(" + __webpack_require__(536) + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      formDialog: {
        title: "测试",
        dialogFormVisible: false,
        form: [{
          label: "名称",
          type: "text",
          formLabelWidth: "120px",
          name: "hh"
        }, {
          label: "代码",
          type: "text",
          formLabelWidth: "120px",
          name: "vv"
        }, {
          label: "状态",
          type: "select",
          formLabelWidth: "120px",
          ps: {
            s: "1"
          },
          status: [{
            label: "是",
            value: 1
          }, {
            label: "否",
            value: 0
          }]
        }]
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(["name", "roles"]), {
    getKey: function getKey() {
      var arr = this.formDialog.form.ps;
    }
  }),
  components: {
    // addM
  },
  methods: {
    toggle: function toggle() {
      this.formDialog.dialogFormVisible = !this.formDialog.dialogFormVisible;
    },
    confirmAdd: function confirmAdd() {
      console.log(1);
    },
    cancelAdd: function cancelAdd() {
      console.log(2);
    }
  },
  mounted: function mounted() {
    this.$store.state.opt.opts = this.newOpt;
  }
});

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.backgroundDiv }, [
    _c("div", { staticClass: "dashboard-container" }, [
      _c("h1", [_vm._v("欢迎回来！")]),
      _vm._v(" "),
      _c("p", { staticClass: "dashboard-text" }, [_vm._v(_vm._s(_vm.name))]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "dashboard-text" },
        [
          _vm._v("你的身份是：\n      "),
          _vm._l(_vm.roles, function(role) {
            return _c("span", { key: role }, [_vm._v(_vm._s(role))])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-366eba34", module.exports)
  }
}

/***/ })

});