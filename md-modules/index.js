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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./md-modules/md-loader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./md-modules/BlockMath.jsx":
/*!**********************************!*\
  !*** ./md-modules/BlockMath.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InlineMath_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineMath.jsx */ \"./md-modules/InlineMath.jsx\");\n\n // import 'katex/dist/katex.min.css'\n\n\n\nconst BlockMath = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](S.Root, null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_InlineMath_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: props.text\n  }));\n};\n\nconst S = {\n  Root: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    display: flex;\n    justify-content: center;\n  `\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockMath);\n\n//# sourceURL=webpack://md-loader/./md-modules/BlockMath.jsx?");

/***/ }),

/***/ "./md-modules/InlineMath.jsx":
/*!***********************************!*\
  !*** ./md-modules/InlineMath.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! katex */ \"katex\");\n/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_1__);\n\n // import 'katex/dist/katex.min.css';\n\nconst InlineMath = (_ref) => {\n  let text = _ref.text;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    style: {\n      fontSize: 18\n    },\n    dangerouslySetInnerHTML: {\n      __html: katex__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(text, {\n        throwOnError: false\n      })\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InlineMath);\n\n//# sourceURL=webpack://md-loader/./md-modules/InlineMath.jsx?");

/***/ }),

/***/ "./md-modules/Note.jsx":
/*!*****************************!*\
  !*** ./md-modules/Note.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nconst Note = props => {\n  const _React$useState = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](false),\n        _React$useState2 = _slicedToArray(_React$useState, 2),\n        visible = _React$useState2[0],\n        setVisible = _React$useState2[1];\n\n  const onClick = () => setVisible(!visible);\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](S.Box, {\n    onClick: onClick\n  }, \"[\", props.num, \"]\", react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](S.Note, {\n    style: {\n      display: visible ? 'block' : 'none'\n    }\n  }, props.children));\n};\n\nconst S = {\n  Box: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`\n    position: relative;\n    vertical-align: super;\n    font-size: 12px;\n    color: blue;\n    cursor: pointer;\n  `,\n  Note: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n    position: absolute;\n    color: black;\n    font-size: 16px;\n    width: 300px;\n    border: 1px solid black;\n    border-radius: 4px;\n    padding: 4px;\n  `\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\n\n//# sourceURL=webpack://md-loader/./md-modules/Note.jsx?");

/***/ }),

/***/ "./md-modules/md-loader.js":
/*!*********************************!*\
  !*** ./md-modules/md-loader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlockMath_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockMath.jsx */ \"./md-modules/BlockMath.jsx\");\n/* harmony import */ var _InlineMath_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InlineMath.jsx */ \"./md-modules/InlineMath.jsx\");\n/* harmony import */ var _Note_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Note.jsx */ \"./md-modules/Note.jsx\");\n\n\n\n\n\nlet noteCount = 0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (md) {\n  function note(state) {\n    // [x][foo bar]\n    const match = state.src.substring(state.pos).match(/\\[x\\]\\[([^\\]]+)\\]/);\n\n    if (match == null) {\n      return false;\n    }\n\n    console.log(match);\n    console.log(state.src.substring(state.pos));\n    let token = state.push('html_inline', '', 0);\n    token.content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      num: 0\n    }, match[1]));\n    state.pos += match[0].length;\n    return true;\n  }\n\n  function inlinemath(state) {\n    // Starting $\n    if (state.src[state.pos] !== '$') {\n      return false;\n    }\n\n    const idx = state.src.indexOf('$', state.pos + 1); // Ending $\n\n    if (idx === -1) {\n      return false;\n    }\n\n    const math = state.src.substring(state.pos + 1, idx);\n    let token = state.push('html_inline', '', 0);\n    token.content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InlineMath_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      text: math\n    }));\n    state.pos = idx + 1;\n    return true;\n  }\n\n  function blockmath(state, startLine) {\n    const line = state.getLines(startLine, startLine + 1, 0, false);\n    const match = line.match(/^\\$\\$([^$]+)\\$\\$\\n?$/);\n\n    if (match == null) {\n      return false;\n    } // Tokenize block math\n\n\n    const math = match[1];\n    state.line += 1;\n    let token = state.push('html_block', '', 0);\n    token.map = [startLine, state.line];\n    token.content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockMath_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      text: math\n    }));\n    return true;\n  }\n\n  md.inline.ruler.push('inline_math', inlinemath);\n  md.inline.ruler.push('note', note);\n  md.block.ruler.before('paragraph', 'block_math', blockmath);\n});\n\n//# sourceURL=webpack://md-loader/./md-modules/md-loader.js?");

/***/ }),

/***/ "katex":
/*!************************!*\
  !*** external "katex" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"katex\");\n\n//# sourceURL=webpack://md-loader/external_%22katex%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://md-loader/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://md-loader/external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack://md-loader/external_%22styled-components%22?");

/***/ })

/******/ });