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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"core-js/modules/es.array.join\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_infra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/infra */ \"./routes/infra.js\");\n/* harmony import */ var _routes_uni__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/uni */ \"./routes/uni.js\");\n/* harmony import */ var _routes_fabric__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/fabric */ \"./routes/fabric.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000; // view engine setup\n\napp.set('views', path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, 'wwwroot'));\napp.set('view engine', 'jade');\napp.set('port', port);\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.json({\n  limit: '50mb'\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  limit: '50mb',\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, 'dist')));\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use('/infra', _routes_infra__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/uni', _routes_uni__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/fabric', _routes_fabric__WEBPACK_IMPORTED_MODULE_10__[\"default\"]); // catch 404 and forward to error handler\n\napp.use(function (req, res, next) {\n  next(http_errors__WEBPACK_IMPORTED_MODULE_1___default()(404));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\nvar server = http__WEBPACK_IMPORTED_MODULE_7___default.a.createServer(app);\nserver.listen(port);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./routes/common.js":
/*!**************************!*\
  !*** ./routes/common.js ***!
  \**************************/
/*! exports provided: kGetAll, kGetById, kPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kGetAll\", function() { return kGetAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kGetById\", function() { return kGetById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kPost\", function() { return kPost; });\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"core-js/modules/es.array.find\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"core-js/modules/es.array.for-each\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"core-js/modules/es.array.includes\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes */ \"core-js/modules/es.string.includes\");\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_9___default.a.config();\nvar url = process.env.EXPRESS_MONGO_URI;\nvar dbName = \"kuninushi\";\nvar ObjectID = mongodb__WEBPACK_IMPORTED_MODULE_8___default.a.ObjectID; // GET /\n// 全エントリを取得。\n// サイズがでかいのでオブジェクトのid,type,dnのみ返す。\n\nfunction kGetAll(req, res, target) {\n  var client, resData, col, objects;\n  return regeneratorRuntime.async(function kGetAll$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          client = mongodb__WEBPACK_IMPORTED_MODULE_8___default.a.MongoClient(url, {\n            useNewUrlParser: true\n          });\n          resData = {};\n          _context.prev = 2;\n          _context.next = 5;\n          return regeneratorRuntime.awrap(client.connect());\n\n        case 5:\n          col = client.db(dbName).collection(target);\n          _context.next = 8;\n          return regeneratorRuntime.awrap(col.find({}).addCursorFlag('noCursorTimeout', true).toArray());\n\n        case 8:\n          objects = _context.sent;\n          objects.forEach(function (obj) {\n            delete obj.object;\n          });\n          resData = objects;\n\n        case 11:\n          _context.prev = 11;\n          client.close();\n          return _context.finish(11);\n\n        case 14:\n          return _context.abrupt(\"return\", resData);\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[2,, 11, 14]]);\n} // GET /:id\n// id指定でオブジェクトの実体を取得。\n\nfunction kGetById(req, res, target) {\n  var client, resData, id, col, object;\n  return regeneratorRuntime.async(function kGetById$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          client = mongodb__WEBPACK_IMPORTED_MODULE_8___default.a.MongoClient(url, {\n            useNewUrlParser: true\n          });\n          resData = {};\n          _context2.prev = 2;\n          _context2.next = 5;\n          return regeneratorRuntime.awrap(client.connect());\n\n        case 5:\n          id = req.params.id;\n          col = client.db(dbName).collection(target);\n          _context2.next = 9;\n          return regeneratorRuntime.awrap(col.findOne({\n            \"_id\": new ObjectID(id)\n          }));\n\n        case 9:\n          object = _context2.sent;\n          resData = object.object;\n\n        case 11:\n          _context2.prev = 11;\n          client.close();\n          return _context2.finish(11);\n\n        case 14:\n          return _context2.abrupt(\"return\", resData);\n\n        case 15:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, null, null, [[2,, 11, 14]]);\n} // POST /\n// ACIの各エントリを以下のBSONにしてmongodbにinsertmany.\n// {\n//     type: オブジェクトのタイプ(fvTenantとか),\n//     dn: オブジェクトのdn\n//     object: オブジェクトの実体。これをそのままPOSTすれば設定投入できる形とする。\n// }\n\nfunction kPost(req, res, target) {\n  var body, client, col, payload;\n  return regeneratorRuntime.async(function kPost$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          body = req.body;\n          client = mongodb__WEBPACK_IMPORTED_MODULE_8___default.a.MongoClient(url, {\n            useNewUrlParser: true\n          });\n          _context3.prev = 2;\n          _context3.next = 5;\n          return regeneratorRuntime.awrap(client.connect());\n\n        case 5:\n          col = client.db(dbName).collection(target); //いい感じにparseして保存.\n\n          payload = [];\n          body.forEach(function (obj) {\n            // Objectからtypeとdnを取得。APICのレスポンスJSON構成を見ろ。\n            var type = Object.keys(obj)[0];\n            var dn = obj[type].attributes.dn;\n            var data = {\n              type: type,\n              dn: dn,\n              object: obj\n            }; // データをuni, infra, fabricに分類。\n\n            if (target == \"uni\") {\n              if (!(data.dn.includes(\"uni/infra/\") || data.dn.includes(\"uni/fabric/\"))) {\n                payload.push(data);\n              }\n            } else if (target == \"infra\") {\n              if (data.dn.includes(\"uni/infra/\")) {\n                payload.push(data);\n              }\n            } else if (target == \"fabric\") {\n              if (data.dn.includes(\"uni/fabric/\")) {\n                payload.push(data);\n              }\n            }\n          });\n          _context3.next = 10;\n          return regeneratorRuntime.awrap(col.insertMany(payload));\n\n        case 10:\n          _context3.prev = 10;\n          client.close();\n          return _context3.finish(10);\n\n        case 13:\n          return _context3.abrupt(\"return\", {\n            \"message\": \"success\"\n          });\n\n        case 14:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, null, null, [[2,, 10, 13]]);\n}\n\n//# sourceURL=webpack:///./routes/common.js?");

/***/ }),

/***/ "./routes/fabric.js":
/*!**************************!*\
  !*** ./routes/fabric.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ \"./routes/common.js\");\n\n\n// 動作は全ルーターで共通。@/routes/common.js参照。\n\n\nvar router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\nrouter.get('/', function _callee(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetAll\"])(req, res, 'fabric'));\n\n        case 2:\n          resData = _context.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n});\nrouter.get('/:id', function _callee2(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetById\"])(req, res, 'fabric'));\n\n        case 2:\n          resData = _context2.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n});\nrouter.post('/', function _callee3(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kPost\"])(req, res, 'fabric'));\n\n        case 2:\n          resData = _context3.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/fabric.js?");

/***/ }),

/***/ "./routes/infra.js":
/*!*************************!*\
  !*** ./routes/infra.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ \"./routes/common.js\");\n\n\n// 動作は全ルーターで共通。@/routes/common.js参照。\n\n\nvar router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\nrouter.get('/', function _callee(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetAll\"])(req, res, 'infra'));\n\n        case 2:\n          resData = _context.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n});\nrouter.get('/:id', function _callee2(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetById\"])(req, res, 'infra'));\n\n        case 2:\n          resData = _context2.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n});\nrouter.post('/', function _callee3(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kPost\"])(req, res, 'infra'));\n\n        case 2:\n          resData = _context3.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/infra.js?");

/***/ }),

/***/ "./routes/uni.js":
/*!***********************!*\
  !*** ./routes/uni.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ \"./routes/common.js\");\n\n\n// 動作は全ルーターで共通。@/routes/common.js参照。\n\n\nvar router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\nrouter.get('/', function _callee(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetAll\"])(req, res, 'uni'));\n\n        case 2:\n          resData = _context.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n});\nrouter.get('/:id', function _callee2(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kGetById\"])(req, res, 'uni'));\n\n        case 2:\n          resData = _context2.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n});\nrouter.post('/', function _callee3(req, res) {\n  var resData;\n  return regeneratorRuntime.async(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return regeneratorRuntime.awrap(Object(_common_js__WEBPACK_IMPORTED_MODULE_3__[\"kPost\"])(req, res, 'uni'));\n\n        case 2:\n          resData = _context3.sent;\n          res.json(resData);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/uni.js?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "core-js/modules/es.array.find":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.find" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.find\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.find%22?");

/***/ }),

/***/ "core-js/modules/es.array.for-each":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.for-each" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.for-each\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.for-each%22?");

/***/ }),

/***/ "core-js/modules/es.array.includes":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.includes" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.includes\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.includes%22?");

/***/ }),

/***/ "core-js/modules/es.array.join":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.join" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.join\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.join%22?");

/***/ }),

/***/ "core-js/modules/es.object.keys":
/*!*************************************************!*\
  !*** external "core-js/modules/es.object.keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.keys\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.keys%22?");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.string.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.includes\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.includes%22?");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom-collections.for-each\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom-collections.for-each%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-promise-router":
/*!*****************************************!*\
  !*** external "express-promise-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-promise-router\");\n\n//# sourceURL=webpack:///external_%22express-promise-router%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });