module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Errors/components/Errors.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Errors/components/Errors.jsx";


var Errors = function Errors(_ref) {
  var messages = _ref.messages;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, messages.map(function (message, idx) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, message);
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ "./components/Errors/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__("./components/Errors/components/Errors.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Errors__["a"]; });



/***/ }),

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Footer.jsx";

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "footer text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "footer__contact text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), " Interested in working with me?", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "btn btn-sm btn-primary footer__link footer__link--contact",
    href: "mailto:hello@elseif.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Let's chat")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "footer__social list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "footer__item footer__item--social list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__icon footer__icon--linkedin",
    href: "https://uk.linkedin.com/in/tomchristian1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "LinkedIn"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "footer__item footer__item--social list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__icon footer__icon--github",
    href: "https://github.com/tctc91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Github"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "footer__item footer__item--social list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__icon footer__icon--twitter",
    href: "https://twitter.com/tomchristian91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Twitter"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "footer__item footer__item--social list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__icon footer__icon--medium",
    href: "https://medium.com/@tomchristian91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon-medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Medium")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "footer__credits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "footer__link footer__link--credit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__link footer__link--copyright",
    href: "<?php echo get_home_url(); ?>",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\xA9 Tom Christian"), " \u2013 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "footer__link footer__link--github",
    href: "https://github.com/tctc91/portfolio-v6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Created with Now, Next & Contentful")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "footer__link footer__link--credit footer__link--video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Footage from ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UC0BcBb8gTlHW6_EtRqwKY7g",
    target: "_blank",
    rel: "external",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "The Soan Age \u2192")))));
});

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
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
      siteDescription: '<p class="header__description-first">Freelance Javascript &amp; React Developer from London, UK</p><p class="header__description-third">With nearly a decade worth of experience in multiple industries, I specialise in building accessible, test driven enterprise applications & responsive frameworks. Fan of all things <span class="header__description-logo-react">React</span><span class="header__description-logo-es6">Javascript</span><span class="header__description-logo-sass">Sass</span></p>',
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



/***/ }),

/***/ "./components/MainCTAs.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/MainCTAs.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "scrollToElement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, id) {
        e.preventDefault();
        var element = document.getElementById(id);

        _this.SmoothScroll().animateScroll(element);
      }
    });
    _this.SmoothScroll = null;
    _this.cvDownloadUrl = 'https://www.dropbox.com/s/4m28soy02jkc4zf/tc2017.pdf?dl=0';
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.SmoothScroll = __webpack_require__("smooth-scroll");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var btnClass = function btnClass() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'secondary';
        return "btn btn-outline-".concat(type, " btn-lg");
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-ctas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-ctas__btn main-ctas__btn--folio ".concat(btnClass('success')),
        href: "#tc-projects",
        onClick: function onClick(e) {
          return _this2.scrollToElement(e, 'tc-projects');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "View projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "main-ctas__sep hidden-xs-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "or"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-ctas__btn main-ctas__btn--cv ".concat(btnClass()),
        href: this.cvDownloadUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Download CV"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Projects/components/ProjectCTAs.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ProjectCTAs.jsx";


var ProjectCTAs = function ProjectCTAs(_ref) {
  var liveDemoUrl = _ref.liveDemoUrl,
      websiteUrl = _ref.websiteUrl;
  return liveDemoUrl || liveDemoUrl ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "project-ctas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, liveDemoUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "project-ctas__btn btn btn-outline-primary btn-lg",
    href: liveDemoUrl,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "View live demo"), websiteUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "project-ctas__btn btn btn-outline-primary btn-lg",
    href: websiteUrl,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "See website")) : null;
};

ProjectCTAs.defaultProps = {
  liveDemoUrl: null,
  websiteUrl: null
};
ProjectCTAs.propTypes = {// liveDemoUrl: React.PropTypes.string,
  // websiteUrl: React.PropTypes.string,
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectCTAs);

/***/ }),

/***/ "./components/Projects/components/ProjectCloseBtn.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ProjectCloseBtn.jsx";


var ProjectCloseBtn = function ProjectCloseBtn() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "project-listing__close-btn btn-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "project-listing__close-btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "\xD7"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Close project"));
};

/* harmony default export */ __webpack_exports__["a"] = (ProjectCloseBtn);

/***/ }),

/***/ "./components/Projects/components/ProjectInfoBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tags__ = __webpack_require__("./components/Tags/index.js");
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ProjectInfoBar.jsx";




var ProjectInfoBar = function ProjectInfoBar(_ref) {
  var client = _ref.client,
      date = _ref.date,
      tags = _ref.tags;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "project-info-bar row list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "col-xs-12 col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "project-info-bar__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Client"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "project-info-bar__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, client)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "col-xs-12 col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "project-info-bar__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Date"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "project-info-bar__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, date)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "col-xs-12 col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "project-info-bar__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Tech"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Tags__["a" /* Tags */], {
    items: tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })));
};

ProjectInfoBar.defaultProps = {
  client: null,
  date: null,
  tags: []
};
ProjectInfoBar.propTypes = {
  client: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  date: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tags: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectInfoBar);

/***/ }),

/***/ "./components/Projects/components/ProjectListing.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("./components/Projects/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__("./components/Projects/helpers/index.jsx");
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ProjectListing.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ProjectListing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectListing, _React$Component);

  function ProjectListing(props) {
    var _this;

    _classCallCheck(this, ProjectListing);

    _this = _possibleConstructorReturn(this, (ProjectListing.__proto__ || Object.getPrototypeOf(ProjectListing)).call(this, props));
    _this.sr = {
      reveal: function reveal() {}
    };
    _this.state = {
      hasLoaded: false,
      isAnimated: false
    };
    _this.calculateProjectHeight = _this.calculateProjectHeight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProjectListing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sr = __webpack_require__("scrollreveal")();
      window.addEventListener('resize', this.calculateProjectHeight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calculateProjectHeight);
    }
  }, {
    key: "setProjectHeight",
    value: function setProjectHeight() {
      this.listingRef.style.maxHeight = "".concat(this.listingRef.firstElementChild.clientHeight, "px");
    }
  }, {
    key: "calculateProjectHeight",
    value: function calculateProjectHeight() {
      if (this.listingRef && this.listingRef.classList.contains('project-listing__detailed--toggled')) {
        this.setProjectHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          metadata = _props.project.metadata,
          project = _props.project,
          showCategory = _props.showCategory,
          isToggled = _props.isToggled,
          onToggleMore = _props.onToggleMore;
      var _state = this.state,
          hasLoaded = _state.hasLoaded,
          isAnimated = _state.isAnimated;
      var scrollConfig = {
        duration: 400,
        delay: 150,
        beforeReveal: function beforeReveal() {
          return _this2.setState({
            isAnimated: true
          });
        }
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        ref: function ref(element) {
          return element && _this2.sr.reveal(element, scrollConfig);
        },
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('project-listing', {
          'project-listing--toggled': isToggled,
          'project-listing--animated': isAnimated
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, showCategory ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "project-listing__date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* default */])(project)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "project-listing__body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "project-listing__preview row",
        href: "./".concat(project.slug),
        onClick: function onClick(evt) {
          return onToggleMore(evt, project.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["b" /* ProjectCloseBtn */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xs-12 col-md-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["e" /* ProjectThumbnail */], {
        lazyLoad: !!isAnimated,
        alt: project.title,
        src: "/static/project-thumbnails/".concat(project.slug, ".jpg"),
        srcset: "/static/project-thumbnails/".concat(project.slug, "@2x.jpg 2x"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xs-12 col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "project-listing__preview-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "project-listing__preview-title display-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, project.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "project-listing__preview-excerpt",
        dangerouslySetInnerHTML: {
          __html: project.excerpt
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this2.listingRef = element;

          if (_this2.listingRef && !hasLoaded) {
            _this2.setState({
              hasLoaded: true
            });

            _this2.setProjectHeight();
          }
        },
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('project-listing__detailed', {
          'project-listing__detailed--toggled': isToggled,
          'project-listing__detailed--loaded': hasLoaded
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "project-listing__detailed-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["c" /* ProjectInfoBar */], {
        client: project.clientName,
        date: project.duration,
        tags: project.tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["a" /* ProjectCTAs */], {
        liveDemoUrl: project.liveDemo && project.liveDemo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "project-listing__excerpt-full",
        dangerouslySetInnerHTML: {
          __html: project.body.replace(/\n/g, '<br />')
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["f" /* ViewMoreBtn */], {
        url: project.slug,
        isVisible: project.caseStudy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })))));
    }
  }]);

  return ProjectListing;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ProjectListing.defaultProps = {
  showCategory: false,
  isToggled: false
};
ProjectListing.propTypes = {
  project: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    slug: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    date: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    excerpt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tags: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
    body: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    clientName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    caseStudy: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    liveDemo: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  }).isRequired,
  showCategory: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isToggled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onToggleMore: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectListing);

/***/ }),

/***/ "./components/Projects/components/ProjectThumbnail.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ProjectThumbnail.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProjectThumbnail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectThumbnail, _React$Component);

  function ProjectThumbnail(props) {
    var _this;

    _classCallCheck(this, ProjectThumbnail);

    _this = _possibleConstructorReturn(this, (ProjectThumbnail.__proto__ || Object.getPrototypeOf(ProjectThumbnail)).call(this, props));
    _this.state = {
      imageLoaded: false
    };
    return _this;
  }

  _createClass(ProjectThumbnail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var imageLoaded = this.state.imageLoaded;
      var _props = this.props,
          src = _props.src,
          alt = _props.alt,
          srcset = _props.srcset,
          lazyLoad = _props.lazyLoad;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, lazyLoad ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('project-thumbnail__img img-fluid', {
          'project-thumbnail__img--loaded': imageLoaded
        }),
        alt: alt,
        src: src,
        srcSet: srcset,
        onLoad: function onLoad() {
          return _this2.setState({
            imageLoaded: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }) : null, !imageLoaded ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "project-thumbnail__ghost",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }) : null);
    }
  }]);

  return ProjectThumbnail;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ProjectThumbnail.defaultProps = {
  src: null,
  srcset: null,
  alt: '',
  lazyLoad: false
};
ProjectThumbnail.propTypes = {// src: React.PropTypes.string,
  // srcset: React.PropTypes.string,
  // alt: React.PropTypes.string,
  // lazyLoad: React.PropTypes.bool,
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectThumbnail);

/***/ }),

/***/ "./components/Projects/components/ViewMoreBtn.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/components/ViewMoreBtn.jsx";


var ViewMoreBtn = function ViewMoreBtn(_ref) {
  var url = _ref.url,
      isVisible = _ref.isVisible;
  return isVisible ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "./".concat(url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "View more") : null;
};

ViewMoreBtn.defaultProps = {
  isVisible: false
};
ViewMoreBtn.propTypes = {// url: React.PropTypes.string.isRequired,
  // isVisible: React.PropTypes.bool,
};
/* harmony default export */ __webpack_exports__["a"] = (ViewMoreBtn);

/***/ }),

/***/ "./components/Projects/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectListing__ = __webpack_require__("./components/Projects/components/ProjectListing.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectInfoBar__ = __webpack_require__("./components/Projects/components/ProjectInfoBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProjectCTAs__ = __webpack_require__("./components/Projects/components/ProjectCTAs.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProjectThumbnail__ = __webpack_require__("./components/Projects/components/ProjectThumbnail.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProjectCloseBtn__ = __webpack_require__("./components/Projects/components/ProjectCloseBtn.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ViewMoreBtn__ = __webpack_require__("./components/Projects/components/ViewMoreBtn.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__ProjectListing__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ProjectInfoBar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ProjectCTAs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__ProjectThumbnail__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__ProjectCloseBtn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__ViewMoreBtn__["a"]; });








/***/ }),

/***/ "./components/Projects/containers/Projects.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("./components/helpers.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Errors_components__ = __webpack_require__("./components/Errors/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("./components/Projects/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Timeline__ = __webpack_require__("./components/Timeline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__("./components/Projects/helpers/index.jsx");
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Projects/containers/Projects.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Projects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));
    _this.state = {
      toggledProject: null,
      errors: []
    };
    return _this;
  }

  _createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toggledProject = _state.toggledProject,
          errors = _state.errors;
      var posts = Array.from(this.props.posts).sort(function (a, b) {
        return new Date(b.fields.date) - new Date(a.fields.date);
      });
      var currentYear = Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* default */])(posts[0].fields);
      var categories = [currentYear];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick(e) {
          return Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* scrollToElement */])(e, 'tc-projects');
        },
        href: "#tc-projects",
        className: "timeline-cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Timeline__["a" /* TimelineCircle */], {
        size: 93,
        half: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Timeline__["a" /* TimelineCircle */], {
        size: 93,
        half: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "timeline-cta__label display-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, currentYear), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Timeline__["b" /* TimelineStem */], {
        height: 33,
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), errors.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Errors_components__["a" /* Errors */], {
        messages: errors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "tc-projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, posts.map(function (_ref) {
        var fields = _ref.fields;
        var showCategory = false;

        if (categories.indexOf(Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* default */])(fields)) < 0) {
          categories.push(Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* default */])(fields));
          showCategory = true;
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["d" /* ProjectListing */], {
          key: fields.slug,
          project: {
            title: fields.title,
            date: fields.date,
            duration: fields.duration,
            slug: fields.slug,
            excerpt: fields.excerpt,
            body: fields.body,
            tags: fields.tags,
            clientName: fields.clientName,
            caseStudy: fields.caseStudy,
            liveDemo: fields.liveDemo
          },
          showCategory: showCategory,
          isToggled: fields.slug === toggledProject,
          onToggleMore: function onToggleMore(evt, id) {
            evt.preventDefault();

            if (id === toggledProject) {
              _this2.setState({
                toggledProject: null
              });
            } else {
              _this2.setState({
                toggledProject: id
              });
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        });
      }))));
    }
  }]);

  return Projects;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Projects, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    posts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object)
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Projects);

/***/ }),

/***/ "./components/Projects/containers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects__ = __webpack_require__("./components/Projects/containers/Projects.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Projects__["a"]; });



/***/ }),

/***/ "./components/Projects/helpers/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (project) {
  return new Date(project.date).getFullYear();
});

/***/ }),

/***/ "./components/Tags/components/TagItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Tags/components/TagItem.jsx";



var TagItem = function TagItem(_ref) {
  var name = _ref.name,
      slug = _ref.slug,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "tag tag--".concat(slug, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, name);
};

TagItem.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  slug: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TagItem);

/***/ }),

/***/ "./components/Tags/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagItem__ = __webpack_require__("./components/Tags/components/TagItem.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__TagItem__["a"]; });



/***/ }),

/***/ "./components/Tags/containers/Tags.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./components/Tags/components/index.js");
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Tags/containers/Tags.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Tags =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tags, _React$Component);

  function Tags() {
    _classCallCheck(this, Tags);

    return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).apply(this, arguments));
  }

  _createClass(Tags, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "project-tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, items && items.map(function (tag) {
        var slug = tag.replace(/\s/g, '-').toLowerCase();
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* TagItem */], {
          key: tag,
          name: tag,
          slug: slug,
          className: "project-tags__tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        });
      }));
    }
  }]);

  return Tags;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Tags.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Tags);

/***/ }),

/***/ "./components/Tags/containers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tags__ = __webpack_require__("./components/Tags/containers/Tags.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Tags__["a"]; });



/***/ }),

/***/ "./components/Tags/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers__ = __webpack_require__("./components/Tags/containers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./components/Tags/components/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__containers__["a"]; });
/* unused harmony reexport TagItem */




/***/ }),

/***/ "./components/Timeline/TimelineCircle.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Timeline/TimelineCircle.jsx";


var TimelineCircle = function TimelineCircle(_ref) {
  var size = _ref.size,
      half = _ref.half;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    className: "timeline-circle timeline-circle--".concat(half),
    width: size / 2,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 84.1 168.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, half === 'left' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "timeline-circle__path timeline-circle__path--".concat(half),
    d: "M84.1 1A83.1 83.1 0 0 0 1 84.1a83.1 83.1 0 0 0 83.1 83.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "timeline-circle__path timeline-circle__path--".concat(half),
    d: "M0,1H0A83.1,83.1,0,0,1,83.1,84.1h0A83.1,83.1,0,0,1,0,167.2H0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
};

TimelineCircle.propTypes = {// size: React.PropTypes.number.isRequired,
  // half: React.PropTypes.string.isRequired,
};
/* harmony default export */ __webpack_exports__["a"] = (TimelineCircle);

/***/ }),

/***/ "./components/Timeline/TimelineStem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomchristian/www/folio/v7/components/Timeline/TimelineStem.jsx";


var TimelineStem = function TimelineStem(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    width: width,
    height: height,
    className: "timeline-stem",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2 36.62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "timeline-stem__path",
    d: "M1 0v36.62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })));
};

TimelineStem.propTypes = {// height: React.PropTypes.number.isRequired,
  // width: React.PropTypes.number.isRequired,
};
/* harmony default export */ __webpack_exports__["a"] = (TimelineStem);

/***/ }),

/***/ "./components/Timeline/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimelineStem__ = __webpack_require__("./components/Timeline/TimelineStem.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimelineCircle__ = __webpack_require__("./components/Timeline/TimelineCircle.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__TimelineStem__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__TimelineCircle__["a"]; });




/***/ }),

/***/ "./components/helpers.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollToElement; });
/* unused harmony export extractErrors */
/* global document */
var scrollToElement = function scrollToElement(e, id) {
  var SmoothScroll = __webpack_require__("smooth-scroll");

  e.preventDefault();
  var element = document.getElementById(id);
  SmoothScroll().animateScroll(element);
};

var extractErrors = function extractErrors(error) {
  console.log(error);
};



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
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







var contentful = __webpack_require__("contentful");

var SPACE_ID = '';
var ACCESS_TOKEN = '';
var POSTS_CONTENT_TYPE = '';
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



/***/ }),

/***/ "./static/scss/app.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "contentful":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "scrollreveal":
/***/ (function(module, exports) {

module.exports = require("scrollreveal");

/***/ }),

/***/ "smooth-scroll":
/***/ (function(module, exports) {

module.exports = require("smooth-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map