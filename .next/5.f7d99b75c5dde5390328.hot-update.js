webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Projects_containers__ = __webpack_require__("./components/Projects/containers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_scss_app_scss__ = __webpack_require__("./static/scss/app.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_scss_app_scss__);

var _jsxFileName = "/Users/tomchristian/www/folio/v7/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var contentful = __webpack_require__("./node_modules/contentful/dist/contentful.browser.js");

var SPACE_ID = 'aycig32znf0e';
var ACCESS_TOKEN = '24069045287934d23d1f203dbac3cf0089a3f7e0de31bbd1770e2ff74b22ca5e';
var POSTS_CONTENT_TYPE = '2wKn6yEnZewu2SCCkus4as';
var client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "tc-app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "skip-link sr-only",
        href: "#content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Skip to content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        className: "app-content container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
        className: "app-content__main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "app-content__body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Projects_containers__["a" /* Projects */], {
        posts: posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, posts;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return client.getEntries({
                  content_type: POSTS_CONTENT_TYPE
                }).then(function (response) {
                  return response.items;
                }).catch(function (error) {
                  console.log(chalk.red("\nError occurred while fetching posts"));
                });

              case 3:
                posts = _context.sent;
                return _context.abrupt("return", {
                  posts: posts
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.f7d99b75c5dde5390328.hot-update.js.map