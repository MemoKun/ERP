webpackJsonp([6],{

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(575)
  __webpack_require__(577)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(579)
/* template */
var __vue_template__ = __webpack_require__(581)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c175f96e"
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
Component.options.__file = "resources/assets/js/views/login/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c175f96e", Component.options)
  } else {
    hotAPI.reload("data-v-c175f96e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(576);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("aa1f2228", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c175f96e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c175f96e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n", ""]);

// exports


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(578);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6d4c0c90", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c175f96e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c175f96e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.login-container[data-v-c175f96e] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container .login-form[data-v-c175f96e] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .tips[data-v-c175f96e] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-c175f96e]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-c175f96e] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-c175f96e] {\n      font-size: 20px;\n}\n.login-container .title[data-v-c175f96e] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-c175f96e] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.login-container .yzc[data-v-c175f96e] {\n    right: 0;\n    top: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index_js__ = __webpack_require__(42);
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  data: function data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        key: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      loading: false,
      pwdType: 'password',
      src: '',
      backgroundDiv: {
        backgroundImage: 'url(' + __webpack_require__(580) + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    };
  },

  methods: {
    //  显示密码
    showPwd: function showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = '';
      } else {
        this.pwdType = 'password';
      }
    },

    getCode: function getCode() {
      var _this = this;

      this.$post('/captchas').then(function (res) {
        _this.src = res.captcha_image_content;
        _this.loginForm.key = res.captcha_key;
        _this.loginForm.code = '';
        $('#yzCode').focus();
      });
    },
    submitForm: function submitForm(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var data = {
            username: _this2.loginForm.username,
            password: _this2.loginForm.password,
            captcha_key: _this2.loginForm.key,
            captcha_code: _this2.loginForm.code
          };
          _this2.$store.dispatch('Login', data).then(function () {
            _this2.$message({
              message: '登录成功',
              type: 'success'
            });
            _this2.$store.dispatch('Profile');
            __WEBPACK_IMPORTED_MODULE_0__router_index_js__["a" /* default */].push({
              path: "/",
              query: { redirect: __WEBPACK_IMPORTED_MODULE_0__router_index_js__["a" /* default */].currentRoute.fullPath }
            });
          }).catch(function (error) {
            if (error.response) {
              var msg = error.response.data.message;
              _this2.$message.error({
                message: msg
              });
              _this2.getCode();
              _this2.loginForm.code = '';
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted: function mounted() {
    this.getCode();
  }
});

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "/images/background.jpg?84aca450bf621072c8036445581a7d8a";

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-container", style: _vm.backgroundDiv },
    [
      _c(
        "el-form",
        {
          ref: "loginForm",
          staticClass: "login-form",
          attrs: {
            autoComplete: "on",
            model: _vm.loginForm,
            rules: _vm.loginRules,
            "label-position": "left"
          }
        },
        [
          _c("h1", { staticClass: "title" }, [_vm._v("简艺家居ERP系统")]),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c(
                "span",
                { staticClass: "svg-container svg-container_login" },
                [_c("svg-icon", { attrs: { "icon-class": "user" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "username",
                  type: "text",
                  color: "white",
                  autoComplete: "on",
                  placeholder: "请输入用户名"
                },
                model: {
                  value: _vm.loginForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "username", $$v)
                  },
                  expression: "loginForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c(
                "span",
                { staticClass: "svg-container" },
                [_c("svg-icon", { attrs: { "icon-class": "password" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "password",
                  type: _vm.pwdType,
                  placeholder: "请输入密码"
                },
                model: {
                  value: _vm.loginForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "password", $$v)
                  },
                  expression: "loginForm.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "show-pwd", on: { click: _vm.showPwd } },
                [_c("svg-icon", { attrs: { "icon-class": "eye" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "code" } },
            [
              _c("span", { staticClass: "svg-container" }, [
                _c("i", { staticClass: "iconfont bf-yzm" })
              ]),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "yzCode",
                  type: "text",
                  placeholder: "请输入验证码",
                  id: "yzCode"
                },
                model: {
                  value: _vm.loginForm.code,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "code", $$v)
                  },
                  expression: "loginForm.code"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "show-pwd yzc", on: { click: this.getCode } },
                [_c("img", { attrs: { src: _vm.src, alt: "" } })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticStyle: { width: "100%" },
                  attrs: { type: "primary", loading: _vm.loading },
                  on: {
                    click: function($event) {
                      return _vm.submitForm("loginForm")
                    }
                  }
                },
                [_vm._v("登录")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c175f96e", module.exports)
  }
}

/***/ })

});