module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Eyjp":
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./api/index.js

const headers = {
  authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg2Y2RhNGFlLTEwYzktNGFlYy1hODk3LWM0ZGY5NjY3MjU0YSIsImlhdCI6MTU3OTYzMzUxOSwic3ViIjoiZGV2ZWxvcGVyLzY1M2FmYzA2LTlkYjAtMjU0NC03OWM3LTI5Yjk1N2U1MWIzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1LjY0LjI0NC4xNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.qsimTo_13OCE-t6fg88raG2wxqh118nreVEUl0iV85yIjl_9kZDMJ9HsyPBRjhAmb9JUXJDkUEPyl1ISFAUY-Q"}`
};
async function ClanData() {
  const res = await external_isomorphic_unfetch_default()(`https://api.clashroyale.com/v1/clans/%238G290Q0`, {
    headers
  });
  const data = await res.json();
  return data;
}
async function WarLog() {
  const res = await external_isomorphic_unfetch_default()(`https://api.clashroyale.com/v1/clans/%238G290Q0/warlog`, {
    headers
  });
  const data = await res.json();
  return data;
}
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/WarPerformance.js


var __jsx = external_react_default.a.createElement;


class WarUser {
  constructor({
    name,
    wins,
    battlesPlayed,
    cardsEarned,
    numberOfBattles
  }) {
    this.name = name;
    this.wins = wins;
    this.battles = battlesPlayed;
    this.totalBattles = numberOfBattles;
    this.cards = cardsEarned;
  }

  addToKey(key, value) {
    this[key] += value;
  }

  get loss() {
    return this.battles - this.wins;
  }

  get ratio() {
    return this.wins / this.battles;
  }

  get battlesMissed() {
    return this.totalBattles - this.battles;
  }

  get inRespect() {
    return this.ratio >= 0.75 || this.loss === 0 && this.missed === 0;
  }

  get inDanger() {
    return this.ratio <= 0.25 || this.battlesMissed >= 3;
  }

  get score() {
    return this.wins * this.ratio - this.battlesMissed;
  }

}

const processData = items => {
  let participants = [];

  const findUser = name => participants.find(p => p.name === name);

  items.forEach((war, i) => {
    war.participants.forEach(user => {
      var userObj = findUser(user.name);

      if (!!userObj) {
        userObj.addToKey('battles', user.battlesPlayed);
        userObj.addToKey('wins', user.wins);
        userObj.addToKey('cards', user.cardsEarned);
        userObj.addToKey('totalBattles', user.numberOfBattles);
      } else {
        userObj = new WarUser(user);
        participants.push(userObj);
      }
    });
  });
  return participants;
};

const sortData = (items, key, alt) => {
  return items.sort((a, b) => alt ? a[key] - b[key] : b[key] - a[key]);
};

const WarPerformance = props => {
  console.log(props);
  const {
    0: sort,
    1: setSort
  } = Object(external_react_["useState"])('wins');
  const {
    0: alt,
    1: setAlt
  } = Object(external_react_["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(processData(props.items));
  const sortedData = sortData(data, sort, alt);

  const clickSort = newSort => {
    if (newSort === sort) {
      setAlt(!alt);
    } else {
      setSort(newSort);
    }
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("table", {
    className: "jsx-4275466315" + " " + 'table table-sm'
  }, __jsx("thead", {
    className: "jsx-4275466315"
  }, __jsx("tr", {
    className: "jsx-4275466315" + " " + 'header'
  }, __jsx("th", {
    className: "jsx-4275466315"
  }, "Name"), __jsx("th", {
    onClick: () => clickSort('cards'),
    className: "jsx-4275466315" + " " + ((sort === 'cards' ? 'active' : null) || "")
  }, "Total Battles"), __jsx("th", {
    onClick: () => clickSort('wins'),
    className: "jsx-4275466315" + " " + ((sort === 'wins' ? 'active' : null) || "")
  }, "Wins"), __jsx("th", {
    onClick: () => clickSort('loss'),
    className: "jsx-4275466315" + " " + ((sort === 'loss' ? 'active' : null) || "")
  }, "Losses"), __jsx("th", {
    onClick: () => clickSort('ratio'),
    className: "jsx-4275466315" + " " + ((sort === 'ratio' ? 'active' : null) || "")
  }, "Win/Loss Ratio"), __jsx("th", {
    onClick: () => clickSort('battlesMissed'),
    className: "jsx-4275466315" + " " + ((sort === 'battlesMissed' ? 'active' : null) || "")
  }, "Battles Missed"), __jsx("th", {
    onClick: () => clickSort('score'),
    className: "jsx-4275466315" + " " + ((sort === 'score' ? 'active' : null) || "")
  }, "Score"))), __jsx("tbody", {
    className: "jsx-4275466315"
  }, sortedData.map((p, i) => {
    let className = p.score < 0 ? 'bg-danger' : p.score < 0.3 ? 'table-danger' : p.score > 5 ? 'table-success' : p.score > 8 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-4275466315"
    }, __jsx("td", {
      className: "jsx-4275466315" + " " + (className || "")
    }, p.name), __jsx("td", {
      className: "jsx-4275466315"
    }, p.totalBattles), __jsx("td", {
      className: "jsx-4275466315"
    }, p.wins), __jsx("td", {
      className: "jsx-4275466315"
    }, p.loss), __jsx("td", {
      className: "jsx-4275466315"
    }, p.ratio), __jsx("td", {
      className: "jsx-4275466315"
    }, p.battlesMissed), __jsx("td", {
      className: "jsx-4275466315"
    }, p.score));
  }))), __jsx(style_default.a, {
    id: "4275466315"
  }, [".table.jsx-4275466315{width:100%;}", ".table.jsx-4275466315 thead.jsx-4275466315{font-weight:bold;}", ".table.jsx-4275466315 thead.jsx-4275466315 th.jsx-4275466315{cursor:pointer;}", ".table.jsx-4275466315 thead.jsx-4275466315 th.active.jsx-4275466315{color:blue;}"]));
};

/* harmony default export */ var components_WarPerformance = (WarPerformance);
// EXTERNAL MODULE: external "shards-react"
var external_shards_react_ = __webpack_require__("Eyjp");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;





const HomePage = props => pages_jsx(external_react_default.a.Fragment, null, pages_jsx(components_WarPerformance, props.warlog));

HomePage.getInitialProps = async function () {
  const warlog = await WarLog();
  return {
    warlog
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });