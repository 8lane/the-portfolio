webpackHotUpdate(5,{

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainCTAs__ = __webpack_require__("./components/MainCTAs.jsx");
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Header.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.state = {
      siteTitle: 'Tom Christian',
      siteDescription: '<p class="header__description-first">Freelance Javascript &amp; React Front-end Developer from London, UK</p><p class="header__description-third">With nearly a decade worth of experience in multiple industries, I specialise in building accessible, test driven enterprise applications & responsive frameworks. Fan of all things <span class="header__description-logo-react">React</span><span class="header__description-logo-es6">Javascript</span><span class="header__description-logo-sass">Sass</span></p>',
      siteURL: '#'
    };
    _this.setVideoWidth = _this.setVideoWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setVideoListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeVideoListeners();
    }
  }, {
    key: "setVideoListeners",
    value: function setVideoListeners() {
      var _this2 = this;

      this.setVideoWidth();
      window.addEventListener('resize', this.setVideoWidth);
      this.videoRef.addEventListener('loadeddata', function () {
        window.setTimeout(function () {
          _this2.videoRef.play();
        }, 2800);
      }, false);
    }
  }, {
    key: "setVideoWidth",
    value: function setVideoWidth() {
      this.videoRef.width = window.outerWidth;
      this.videoRef.height = window.outerHeight;
    }
  }, {
    key: "removeVideoListeners",
    value: function removeVideoListeners() {
      this.videoRef.removeEventListener('loadeddata');
      window.removeEventListener('resize', this.setVideoWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          siteTitle = _state.siteTitle,
          siteDescription = _state.siteDescription,
          siteURL = _state.siteURL;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header__bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        ref: function ref(video) {
          _this3.videoRef = video;
        },
        className: "header__video",
        muted: true,
        loop: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
        src: "/static/header-video.mp4",
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
        src: "/static/header-video.ogv",
        type: "video/ogg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header__content container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "header__link",
        href: siteURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "header__title display-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, siteTitle)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header__description",
        dangerouslySetInnerHTML: {
          __html: siteDescription
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MainCTAs__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.0a316c2e6408d4a479bc.hot-update.js.map