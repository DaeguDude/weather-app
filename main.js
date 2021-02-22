/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  ========================================\n  Reset\n  ========================================\n*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}\n\ninput:focus,\nbutton:focus {\n  outline: none;\n}\n\nbutton {\n  border: none;\n}\n\n/*\n  ========================================\n  Custom Setup\n  ========================================\n*/\n\n:root {\n  --main-bg-color: #1b1e25;\n  --main-orange-color: #ff8c00;\n}\n\n::placeholder {\n  color: #626262;\n}\n\nbutton:active {\n  cursor: pointer;\n  transform: scale(0.95);\n}\n\n/*\n  ========================================\n  Main Styling\n  ========================================\n*/\n\nbody {\n  min-height: 100vh;\n  font-family: 'Roboto', sans-serif;\n  background: var(--main-bg-color);\n  padding: 2.5rem 0;\n}\n\n.container {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.header {\n  margin-bottom: 1rem;\n\n  display: flex;\n  align-items: center;\n}\n\n.header h1 {\n  color: #fff;\n  font-size: 2rem;\n}\n\n.weather {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.search-box {\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n\n.search-box form {\n  display: flex;\n}\n\n.search-box input[name=\"search-city\"] {\n  width: 70%;\n  height: 44px;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #bdbdbd;\n  font-size: 23px;\n  font-weight: 500;\n  color: #fff;\n  margin-right: 15px;\n}\n\n.search-city-btn {\n  height: 44px;\n  width: 65px;\n  background: var(--main-orange-color);\n  border-radius: 5px;\n}\n\n.fa-search {\n  font-size: 1.3rem;\n  color: #fff;\n}\n\n.error {\n  display: none;\n  color: #f14444;\n}\n\n.error--active {\n  display: block;\n}\n\n/*\n  ========================================\n  Slider\n  ========================================\n*/\n\n.convert-switch {\n  align-self: flex-end;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d07301;\n  transition: .4s;\n  color: white;\n  z-index: -1;\n}\n\n/* What is before? */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  background-color: #fff;\n  opacity: 1;\n  -webkit-transition: .4s;\n  transition: .4s;\n  text-align: center;\n\n  z-index: 0;\n}\n\n/* if input is checked, .slider is... */\ninput:checked + .slider {\n  background-color: #FF8C00;\n  opacity: .9;\n  z-index: -1;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(25px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n\n  display: flex;\n  align-items: center;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.metric {\n  z-index: 1;\n  flex: 1 0 0;\n  text-align: center;\n  margin-left: 1.5px;\n}\n\n.metric--checked {\n  color: var(--main-orange-color);\n}\n\n.imperial {\n  z-index: 1;\n  flex: 1 0 0;\n  text-align: center;\n  margin-left: 1.5px;\n}\n\n.imperial--checked {\n  color: var(--main-orange-color);\n}\n\n/*\n  ========================================\n  main\n  ========================================\n*/\n\nsection main {\n  margin-top: 20px;\n  flex: 1 0 0;\n}\n\n/*\n  ========================================\n  City Weather \n  ========================================\n*/\n\n.cities {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.city {\n  position: relative;\n  background: #fff;\n  border-radius: 1rem;\n\n  min-width: 270px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 3rem;  \n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.city__name {\n  align-self: flex-start;\n  font-size: 1.5rem;\n  color: #53627c;\n}\n\n.city__country {\n  background: var(--main-orange-color);\n  font-size: 0.75rem;\n  padding: 0 3px;\n  color: #fff;\n  border-radius: 1rem;\n}\n\n.city__weather {\n  position: relative;\n  font-weight: bold;\n}\n\n.degree {\n  font-size: 3rem;\n}\n\n.unit {\n  font-size: 1.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n\n.city__icon {\n  text-align: center;\n}\n\n.city__info {\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #53627c;\n}\n\n.city__close {\n  cursor: pointer;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  height: 20px;\n  width: 20px;\n  background: #d0d0d0;\n  color: #53627c;\n  border-radius: 50%;\n  text-align: center;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fa-times {\n  font-size: 0.75rem;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n  ========================================\n  Reset\n  ========================================\n*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}\n\ninput:focus,\nbutton:focus {\n  outline: none;\n}\n\nbutton {\n  border: none;\n}\n\n/*\n  ========================================\n  Custom Setup\n  ========================================\n*/\n\n:root {\n  --main-bg-color: #1b1e25;\n  --main-orange-color: #ff8c00;\n}\n\n::placeholder {\n  color: #626262;\n}\n\nbutton:active {\n  cursor: pointer;\n  transform: scale(0.95);\n}\n\n/*\n  ========================================\n  Main Styling\n  ========================================\n*/\n\nbody {\n  min-height: 100vh;\n  font-family: 'Roboto', sans-serif;\n  background: var(--main-bg-color);\n  padding: 2.5rem 0;\n}\n\n.container {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.header {\n  margin-bottom: 1rem;\n\n  display: flex;\n  align-items: center;\n}\n\n.header h1 {\n  color: #fff;\n  font-size: 2rem;\n}\n\n.weather {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.search-box {\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n\n.search-box form {\n  display: flex;\n}\n\n.search-box input[name=\"search-city\"] {\n  width: 70%;\n  height: 44px;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #bdbdbd;\n  font-size: 23px;\n  font-weight: 500;\n  color: #fff;\n  margin-right: 15px;\n}\n\n.search-city-btn {\n  height: 44px;\n  width: 65px;\n  background: var(--main-orange-color);\n  border-radius: 5px;\n}\n\n.fa-search {\n  font-size: 1.3rem;\n  color: #fff;\n}\n\n.error {\n  display: none;\n  color: #f14444;\n}\n\n.error--active {\n  display: block;\n}\n\n/*\n  ========================================\n  Slider\n  ========================================\n*/\n\n.convert-switch {\n  align-self: flex-end;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d07301;\n  transition: .4s;\n  color: white;\n  z-index: -1;\n}\n\n/* What is before? */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  background-color: #fff;\n  opacity: 1;\n  -webkit-transition: .4s;\n  transition: .4s;\n  text-align: center;\n\n  z-index: 0;\n}\n\n/* if input is checked, .slider is... */\ninput:checked + .slider {\n  background-color: #FF8C00;\n  opacity: .9;\n  z-index: -1;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(25px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n\n  display: flex;\n  align-items: center;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.metric {\n  z-index: 1;\n  flex: 1 0 0;\n  text-align: center;\n  margin-left: 1.5px;\n}\n\n.metric--checked {\n  color: var(--main-orange-color);\n}\n\n.imperial {\n  z-index: 1;\n  flex: 1 0 0;\n  text-align: center;\n  margin-left: 1.5px;\n}\n\n.imperial--checked {\n  color: var(--main-orange-color);\n}\n\n/*\n  ========================================\n  main\n  ========================================\n*/\n\nsection main {\n  margin-top: 20px;\n  flex: 1 0 0;\n}\n\n/*\n  ========================================\n  City Weather \n  ========================================\n*/\n\n.cities {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.city {\n  position: relative;\n  background: #fff;\n  border-radius: 1rem;\n\n  min-width: 270px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 3rem;  \n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.city__name {\n  align-self: flex-start;\n  font-size: 1.5rem;\n  color: #53627c;\n}\n\n.city__country {\n  background: var(--main-orange-color);\n  font-size: 0.75rem;\n  padding: 0 3px;\n  color: #fff;\n  border-radius: 1rem;\n}\n\n.city__weather {\n  position: relative;\n  font-weight: bold;\n}\n\n.degree {\n  font-size: 3rem;\n}\n\n.unit {\n  font-size: 1.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n\n.city__icon {\n  text-align: center;\n}\n\n.city__info {\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #53627c;\n}\n\n.city__close {\n  cursor: pointer;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  height: 20px;\n  width: 20px;\n  background: #d0d0d0;\n  color: #53627c;\n  border-radius: 50%;\n  text-align: center;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fa-times {\n  font-size: 0.75rem;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/city.js":
/*!*********************!*\
  !*** ./src/city.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ City)
/* harmony export */ });
class City {
  constructor(weatherInfo) {
    const { name, country, temperature, icon, description } = weatherInfo;
    this.name = name;
    this.country = country;
    this.temperature = temperature;
    this.icon = icon;
    this.description = description;

    this.elem = null;
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  render(tempUnit) {
    const result = document.createRange().createContextualFragment(`
      <li class="city">
        <span class="city__name"
          >${this.name} <sup class="city__country">${this.country}</sup></span
        >

        <div class="city__weather">
          <span class="degree">${this.temperature}</span>
          <sup class="unit">°${tempUnit === "metric" ? "C" : "F"}</span>
        </div>
        <img class="city__icon" src="https://openweathermap.org/img/wn/${
          this.icon
        }@2x.png">
        <span class="city__info">${this.description}</span>
        <button class="city__close"><i class="fas fa-times"></i></button>
      </li>
    `);

    this.elem = result.querySelector(".city");
    result
      .querySelector(".city__close")
      .addEventListener("click", this.deleteHandler);
    return result;
  }

  deleteHandler() {
    this.elem.remove();
  }
}


/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Error {
  constructor() {
    this.elem = document.querySelector(".error");
  }

  show() {
    this.elem.classList.add("error--active");
  }

  hide() {
    this.elem.classList.remove("error--active");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserInput": () => (/* binding */ getUserInput),
/* harmony export */   "resetSearchInput": () => (/* binding */ resetSearchInput)
/* harmony export */ });
function getUserInput() {
  return document.querySelector('input[name="search-city"]').value;
}

function resetSearchInput() {
  document.querySelector('input[name="search-city"]').value = "";
}




/***/ }),

/***/ "./src/tempUnit.js":
/*!*************************!*\
  !*** ./src/tempUnit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TempUnit)
/* harmony export */ });
class TempUnit {
  constructor() {
    this.convertSwitch = document.querySelector(".convert-switch");
    this.checkBox = document.querySelector('.switch input[type="checkbox"]');

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  start() {
    this.checkBox.addEventListener("change", this.onChangeHandler);
  }

  onChangeHandler() {
    if (this.checkBox.checked) {
      document.querySelector(".metric").classList.remove("metric--checked");
      document.querySelector(".imperial").classList.add("imperial--checked");
      this.changeDisplayToImperial();
    } else {
      document.querySelector(".metric").classList.add("metric--checked");
      document.querySelector(".imperial").classList.remove("imperial--checked");
      this.changeDisplayToMetric();
    }
  }

  changeDisplayToImperial() {
    document.querySelectorAll(".degree").forEach((degree) => {
      const metric = Number(degree.innerText);
      degree.innerText = this.convertToImperial(metric);

      document.querySelectorAll(".unit").forEach((unit) => {
        unit.innerText = "°F";
      });
    });
  }

  changeDisplayToMetric() {
    document.querySelectorAll(".degree").forEach((degree) => {
      const imperial = Number(degree.innerText);
      console.log(imperial);
      degree.innerText = this.convertToMetric(imperial);

      document.querySelectorAll(".unit").forEach((unit) => {
        unit.innerText = "°C";
      });
    });
  }

  convertToImperial(metric) {
    return Math.trunc(1.8 * metric + 32);
  }

  convertToMetric(imperial) {
    return Math.trunc((imperial - 32) / 1.8);
  }

  getCheckedUnit() {
    const input = document.querySelector('.switch input[type="checkbox"]');
    if (!input.checked) {
      return "metric";
    }

    return "imperial";
  }
}


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStatus": () => (/* binding */ checkStatus),
/* harmony export */   "getWeatherJson": () => (/* binding */ getWeatherJson),
/* harmony export */   "getPrimaryWeatherInfo": () => (/* binding */ getPrimaryWeatherInfo)
/* harmony export */ });
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error("City Not Found"));
  }
}

function getWeatherJson(response) {
  return response.json();
}

function getPrimaryWeatherInfo(weatherJson) {
  const name = weatherJson.name;
  const country = weatherJson.sys.country;
  const temperature = Math.trunc(weatherJson.main.temp);
  const icon = weatherJson.weather[0].icon;
  const description = weatherJson.weather[0].description;

  return { name, country, temperature, icon, description };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city */ "./src/city.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _tempUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tempUnit */ "./src/tempUnit.js");







function startApp() {
  const tempUnit = new _tempUnit__WEBPACK_IMPORTED_MODULE_5__.default();
  tempUnit.start();
  const error = new _error__WEBPACK_IMPORTED_MODULE_3__.default();

  activateSearchCityBtn(error, tempUnit);
}

function activateSearchCityBtn(error, tempUnit) {
  const searchCityBtn = document.querySelector(".search-city-btn");
  searchCityBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityToFind = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.getUserInput)();
    const unit = tempUnit.getCheckedUnit();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityToFind}&units=${unit}&appid=962edb7f9ab1add3416718398c95a830`
    )
      .then(_weather__WEBPACK_IMPORTED_MODULE_1__.checkStatus)
      .then(_weather__WEBPACK_IMPORTED_MODULE_1__.getWeatherJson)
      .then(_weather__WEBPACK_IMPORTED_MODULE_1__.getPrimaryWeatherInfo)
      .then((primaryInfo) => {
        const cities = document.querySelector(".cities");
        const city = new _city__WEBPACK_IMPORTED_MODULE_2__.default(primaryInfo);

        cities.appendChild(city.render(unit));
        error.hide();
        (0,_helper__WEBPACK_IMPORTED_MODULE_4__.resetSearchInput)();
      })
      .catch(function (err) {
        error.show();
      });
  });
}

startApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVtcFVuaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0s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SyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FB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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFJlc2V0XFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEN1c3RvbSBTZXR1cFxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjMWIxZTI1O1xcbiAgLS1tYWluLW9yYW5nZS1jb2xvcjogI2ZmOGMwMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzYyNjI2MjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgTWFpbiBTdHlsaW5nXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAyLjVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0W25hbWU9XFxcInNlYXJjaC1jaXR5XFxcIl0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JkYmRiZDtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnNlYXJjaC1jaXR5LWJ0biB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICB3aWR0aDogNjVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZhLXNlYXJjaCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiAjZjE0NDQ0O1xcbn1cXG5cXG4uZXJyb3ItLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFNsaWRlclxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLmNvbnZlcnQtc3dpdGNoIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA3MzAxO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIFdoYXQgaXMgYmVmb3JlPyAqL1xcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLyogaWYgaW5wdXQgaXMgY2hlY2tlZCwgLnNsaWRlciBpcy4uLiAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBvcGFjaXR5OiAuOTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWV0cmljIHtcXG4gIHotaW5kZXg6IDE7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVweDtcXG59XFxuXFxuLm1ldHJpYy0tY2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UtY29sb3IpO1xcbn1cXG5cXG4uaW1wZXJpYWwge1xcbiAgei1pbmRleDogMTtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xcbn1cXG5cXG4uaW1wZXJpYWwtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlLWNvbG9yKTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIG1haW5cXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbnNlY3Rpb24gbWFpbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBDaXR5IFdlYXRoZXIgXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4uY2l0aWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgbWluLXdpZHRoOiAyNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTsgIFxcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jaXR5X19uYW1lIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjNTM2MjdjO1xcbn1cXG5cXG4uY2l0eV9fY291bnRyeSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZS1jb2xvcik7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNpdHlfX3dlYXRoZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWdyZWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udW5pdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG5cXG4uY2l0eV9faWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5X19pbmZvIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjNTM2MjdjO1xcbn1cXG5cXG4uY2l0eV9fY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICNkMGQwZDA7XFxuICBjb2xvcjogIzUzNjI3YztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYS10aW1lcyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Q0FJQztBQUNEO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjs7RUFFbEIsVUFBVTtBQUNaOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFJlc2V0XFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEN1c3RvbSBTZXR1cFxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjMWIxZTI1O1xcbiAgLS1tYWluLW9yYW5nZS1jb2xvcjogI2ZmOGMwMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzYyNjI2MjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgTWFpbiBTdHlsaW5nXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAyLjVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0W25hbWU9XFxcInNlYXJjaC1jaXR5XFxcIl0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JkYmRiZDtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnNlYXJjaC1jaXR5LWJ0biB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICB3aWR0aDogNjVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZhLXNlYXJjaCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiAjZjE0NDQ0O1xcbn1cXG5cXG4uZXJyb3ItLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFNsaWRlclxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLmNvbnZlcnQtc3dpdGNoIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA3MzAxO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIFdoYXQgaXMgYmVmb3JlPyAqL1xcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLyogaWYgaW5wdXQgaXMgY2hlY2tlZCwgLnNsaWRlciBpcy4uLiAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBvcGFjaXR5OiAuOTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWV0cmljIHtcXG4gIHotaW5kZXg6IDE7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVweDtcXG59XFxuXFxuLm1ldHJpYy0tY2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UtY29sb3IpO1xcbn1cXG5cXG4uaW1wZXJpYWwge1xcbiAgei1pbmRleDogMTtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xcbn1cXG5cXG4uaW1wZXJpYWwtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlLWNvbG9yKTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIG1haW5cXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbnNlY3Rpb24gbWFpbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBDaXR5IFdlYXRoZXIgXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4uY2l0aWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgbWluLXdpZHRoOiAyNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTsgIFxcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jaXR5X19uYW1lIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjNTM2MjdjO1xcbn1cXG5cXG4uY2l0eV9fY291bnRyeSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZS1jb2xvcik7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNpdHlfX3dlYXRoZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWdyZWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udW5pdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG5cXG4uY2l0eV9faWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5X19pbmZvIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjNTM2MjdjO1xcbn1cXG5cXG4uY2l0eV9fY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICNkMGQwZDA7XFxuICBjb2xvcjogIzUzNjI3YztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYS10aW1lcyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2l0eSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXJJbmZvKSB7XG4gICAgY29uc3QgeyBuYW1lLCBjb3VudHJ5LCB0ZW1wZXJhdHVyZSwgaWNvbiwgZGVzY3JpcHRpb24gfSA9IHdlYXRoZXJJbmZvO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICB0aGlzLmVsZW0gPSBudWxsO1xuICAgIHRoaXMuZGVsZXRlSGFuZGxlciA9IHRoaXMuZGVsZXRlSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKHRlbXBVbml0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgICAgPGxpIGNsYXNzPVwiY2l0eVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHlfX25hbWVcIlxuICAgICAgICAgID4ke3RoaXMubmFtZX0gPHN1cCBjbGFzcz1cImNpdHlfX2NvdW50cnlcIj4ke3RoaXMuY291bnRyeX08L3N1cD48L3NwYW5cbiAgICAgICAgPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXR5X193ZWF0aGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWdyZWVcIj4ke3RoaXMudGVtcGVyYXR1cmV9PC9zcGFuPlxuICAgICAgICAgIDxzdXAgY2xhc3M9XCJ1bml0XCI+wrAke3RlbXBVbml0ID09PSBcIm1ldHJpY1wiID8gXCJDXCIgOiBcIkZcIn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2l0eV9faWNvblwiIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke1xuICAgICAgICAgIHRoaXMuaWNvblxuICAgICAgICB9QDJ4LnBuZ1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHlfX2luZm9cIj4ke3RoaXMuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2l0eV9fY2xvc2VcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgYCk7XG5cbiAgICB0aGlzLmVsZW0gPSByZXN1bHQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIHJlc3VsdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eV9fY2xvc2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kZWxldGVIYW5kbGVyKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVsZXRlSGFuZGxlcigpIHtcbiAgICB0aGlzLmVsZW0ucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImNsYXNzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoXCJlcnJvci0tYWN0aXZlXCIpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImVycm9yLS1hY3RpdmVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iLCJmdW5jdGlvbiBnZXRVc2VySW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2VhcmNoLWNpdHlcIl0nKS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTZWFyY2hJbnB1dCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlYXJjaC1jaXR5XCJdJykudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRVc2VySW5wdXQsIHJlc2V0U2VhcmNoSW5wdXQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBVbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb252ZXJ0U3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb252ZXJ0LXN3aXRjaFwiKTtcbiAgICB0aGlzLmNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9uQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXRyaWNcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1ldHJpYy0tY2hlY2tlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1wZXJpYWxcIikuY2xhc3NMaXN0LmFkZChcImltcGVyaWFsLS1jaGVja2VkXCIpO1xuICAgICAgdGhpcy5jaGFuZ2VEaXNwbGF5VG9JbXBlcmlhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1ldHJpY1wiKS5jbGFzc0xpc3QuYWRkKFwibWV0cmljLS1jaGVja2VkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbXBlcmlhbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW1wZXJpYWwtLWNoZWNrZWRcIik7XG4gICAgICB0aGlzLmNoYW5nZURpc3BsYXlUb01ldHJpYygpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpc3BsYXlUb0ltcGVyaWFsKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVncmVlXCIpLmZvckVhY2goKGRlZ3JlZSkgPT4ge1xuICAgICAgY29uc3QgbWV0cmljID0gTnVtYmVyKGRlZ3JlZS5pbm5lclRleHQpO1xuICAgICAgZGVncmVlLmlubmVyVGV4dCA9IHRoaXMuY29udmVydFRvSW1wZXJpYWwobWV0cmljKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bml0XCIpLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgdW5pdC5pbm5lclRleHQgPSBcIsKwRlwiO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VEaXNwbGF5VG9NZXRyaWMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWdyZWVcIikuZm9yRWFjaCgoZGVncmVlKSA9PiB7XG4gICAgICBjb25zdCBpbXBlcmlhbCA9IE51bWJlcihkZWdyZWUuaW5uZXJUZXh0KTtcbiAgICAgIGNvbnNvbGUubG9nKGltcGVyaWFsKTtcbiAgICAgIGRlZ3JlZS5pbm5lclRleHQgPSB0aGlzLmNvbnZlcnRUb01ldHJpYyhpbXBlcmlhbCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudW5pdFwiKS5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgIHVuaXQuaW5uZXJUZXh0ID0gXCLCsENcIjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29udmVydFRvSW1wZXJpYWwobWV0cmljKSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoMS44ICogbWV0cmljICsgMzIpO1xuICB9XG5cbiAgY29udmVydFRvTWV0cmljKGltcGVyaWFsKSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKGltcGVyaWFsIC0gMzIpIC8gMS44KTtcbiAgfVxuXG4gIGdldENoZWNrZWRVbml0KCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICBpZiAoIWlucHV0LmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBcIm1ldHJpY1wiO1xuICAgIH1cblxuICAgIHJldHVybiBcImltcGVyaWFsXCI7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDaXR5IE5vdCBGb3VuZFwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckpzb24ocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpbWFyeVdlYXRoZXJJbmZvKHdlYXRoZXJKc29uKSB7XG4gIGNvbnN0IG5hbWUgPSB3ZWF0aGVySnNvbi5uYW1lO1xuICBjb25zdCBjb3VudHJ5ID0gd2VhdGhlckpzb24uc3lzLmNvdW50cnk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gTWF0aC50cnVuYyh3ZWF0aGVySnNvbi5tYWluLnRlbXApO1xuICBjb25zdCBpY29uID0gd2VhdGhlckpzb24ud2VhdGhlclswXS5pY29uO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJKc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgcmV0dXJuIHsgbmFtZSwgY291bnRyeSwgdGVtcGVyYXR1cmUsIGljb24sIGRlc2NyaXB0aW9uIH07XG59XG5cbmV4cG9ydCB7IGNoZWNrU3RhdHVzLCBnZXRXZWF0aGVySnNvbiwgZ2V0UHJpbWFyeVdlYXRoZXJJbmZvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjaGVja1N0YXR1cywgZ2V0V2VhdGhlckpzb24sIGdldFByaW1hcnlXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCBDaXR5IGZyb20gXCIuL2NpdHlcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHsgcmVzZXRTZWFyY2hJbnB1dCwgZ2V0VXNlcklucHV0IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgVGVtcFVuaXQgZnJvbSBcIi4vdGVtcFVuaXRcIjtcblxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGNvbnN0IHRlbXBVbml0ID0gbmV3IFRlbXBVbml0KCk7XG4gIHRlbXBVbml0LnN0YXJ0KCk7XG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgYWN0aXZhdGVTZWFyY2hDaXR5QnRuKGVycm9yLCB0ZW1wVW5pdCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2VhcmNoQ2l0eUJ0bihlcnJvciwgdGVtcFVuaXQpIHtcbiAgY29uc3Qgc2VhcmNoQ2l0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWNpdHktYnRuXCIpO1xuICBzZWFyY2hDaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5VG9GaW5kID0gZ2V0VXNlcklucHV0KCk7XG4gICAgY29uc3QgdW5pdCA9IHRlbXBVbml0LmdldENoZWNrZWRVbml0KCk7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlUb0ZpbmR9JnVuaXRzPSR7dW5pdH0mYXBwaWQ9OTYyZWRiN2Y5YWIxYWRkMzQxNjcxODM5OGM5NWE4MzBgXG4gICAgKVxuICAgICAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbihnZXRXZWF0aGVySnNvbilcbiAgICAgIC50aGVuKGdldFByaW1hcnlXZWF0aGVySW5mbylcbiAgICAgIC50aGVuKChwcmltYXJ5SW5mbykgPT4ge1xuICAgICAgICBjb25zdCBjaXRpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdGllc1wiKTtcbiAgICAgICAgY29uc3QgY2l0eSA9IG5ldyBDaXR5KHByaW1hcnlJbmZvKTtcblxuICAgICAgICBjaXRpZXMuYXBwZW5kQ2hpbGQoY2l0eS5yZW5kZXIodW5pdCkpO1xuICAgICAgICBlcnJvci5oaWRlKCk7XG4gICAgICAgIHJlc2V0U2VhcmNoSW5wdXQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBlcnJvci5zaG93KCk7XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbnN0YXJ0QXBwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9