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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fgKE");


/***/ }),

/***/ "Dc/Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


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
    this.isMember = true;
    this.lossStreak = 0;
    this.winStreak = 0;
  }

  addToKey(key, value) {
    this[key] += value;
  }

  setMember(state) {
    this.isMember = state;
  }

  winLoss(wins, losses) {
    if (losses > 0 && wins === 0) {
      this.lossStreak += losses;
      this.winStreak = 0;
    }

    if (wins > 0) {
      this.winStreak += wins;
      this.lossStreak = 0;
    }
  }

  get loss() {
    return this.battles - this.wins;
  }

  get ratio() {
    return this.wins / this.totalBattles;
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
    if (this.battles === 0) return 0;
    return (this.wins * (this.wins / this.battles) - this.battlesMissed * 2.5 * this.battlesMissed + this.wins * 0.5).toFixed(2);
  }

}

const processData = (items, clan) => {
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
      } // set is member


      userObj.setMember(clan.memberList.find(m => m.name === userObj.name)); // record wins losses per war

      let losses = user.numberOfBattles - user.wins;
      userObj.winLoss(user.wins, losses);
    });
  });
  return participants;
};

const sortData = (items, key, alt) => {
  return items.sort((a, b) => alt ? a[key] - b[key] : b[key] - a[key]);
};

const WarPerformance = props => {
  const {
    0: sort,
    1: setSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('score');
  const {
    0: alt,
    1: setAlt
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(processData(props.items, props.clan));
  const sortedData = sortData(data, sort, alt);

  const clickSort = newSort => {
    if (newSort === sort) {
      setAlt(!alt);
    } else {
      setSort(newSort);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1736245729" + " " + "table-responsive"
  }, __jsx("table", {
    className: "jsx-1736245729" + " " + 'table table-sm'
  }, __jsx("thead", {
    className: "jsx-1736245729"
  }, __jsx("tr", {
    className: "jsx-1736245729"
  }, __jsx("th", {
    className: "jsx-1736245729"
  }, "Name"), __jsx("th", {
    onClick: () => clickSort('score'),
    className: "jsx-1736245729" + " " + ((sort === 'score' ? 'active' : null) || "")
  }, "Score"), __jsx("th", {
    onClick: () => clickSort('totalBattles'),
    className: "jsx-1736245729" + " " + ((sort === 'totalBattles' ? 'active' : null) || "")
  }, "Total Battles"), __jsx("th", {
    onClick: () => clickSort('wins'),
    className: "jsx-1736245729" + " " + ((sort === 'wins' ? 'active' : null) || "")
  }, "Wins"), __jsx("th", {
    onClick: () => clickSort('loss'),
    className: "jsx-1736245729" + " " + ((sort === 'loss' ? 'active' : null) || "")
  }, "Losses"), __jsx("th", {
    onClick: () => clickSort('winStreak'),
    className: "jsx-1736245729" + " " + ((sort === 'winStreak' ? 'active' : null) || "")
  }, "Win Streak"), __jsx("th", {
    onClick: () => clickSort('lossStreak'),
    className: "jsx-1736245729" + " " + ((sort === 'lossStreak' ? 'active' : null) || "")
  }, "Loss Streak"), __jsx("th", {
    onClick: () => clickSort('ratio'),
    className: "jsx-1736245729" + " " + ((sort === 'ratio' ? 'active' : null) || "")
  }, "Win Ratio", __jsx("span", {
    className: "jsx-1736245729"
  }, "wins/battles")), __jsx("th", {
    onClick: () => clickSort('battlesMissed'),
    className: "jsx-1736245729" + " " + ((sort === 'battlesMissed' ? 'active' : null) || "")
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-1736245729"
  }, sortedData.map((p, i) => {
    let className = p.score < -1 ? 'bg-danger' : p.score >= 8 ? 'table-warning' : p.score >= 2 ? 'table-success' : null;
    className += p.isMember ? ' member' : '';
    return __jsx("tr", {
      key: i,
      className: "jsx-1736245729"
    }, __jsx("td", {
      className: "jsx-1736245729" + " " + (className || "")
    }, p.name), __jsx("td", {
      className: "jsx-1736245729"
    }, p.score), __jsx("td", {
      className: "jsx-1736245729"
    }, p.totalBattles), __jsx("td", {
      className: "jsx-1736245729"
    }, p.wins), __jsx("td", {
      className: "jsx-1736245729"
    }, p.loss), __jsx("td", {
      className: "jsx-1736245729"
    }, p.winStreak), __jsx("td", {
      className: "jsx-1736245729"
    }, p.lossStreak), __jsx("td", {
      className: "jsx-1736245729"
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-1736245729"
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1736245729"
  }, [".table-responsive.jsx-1736245729{overflow-x:initial;}", ".table.jsx-1736245729{width:100%;}", ".table.jsx-1736245729 thead.jsx-1736245729{font-weight:bold;}", ".table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}", ".table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729 span.jsx-1736245729{display:block;font-size:0.5rem;}", ".table.jsx-1736245729 thead.jsx-1736245729 th.active.jsx-1736245729{color:blue;}", "table.jsx-1736245729 tbody.jsx-1736245729 td.jsx-1736245729:first-child.jsx-1736245729:not(.member){-webkit-text-decoration:line-through;text-decoration:line-through;font-weight:bold;background-color:grey !important;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (WarPerformance);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "bMwp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clan; });
/* unused harmony export Members */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WarLog; });
/* unused harmony export CurrentWar */
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const headers = {
  authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg2Y2RhNGFlLTEwYzktNGFlYy1hODk3LWM0ZGY5NjY3MjU0YSIsImlhdCI6MTU3OTYzMzUxOSwic3ViIjoiZGV2ZWxvcGVyLzY1M2FmYzA2LTlkYjAtMjU0NC03OWM3LTI5Yjk1N2U1MWIzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1LjY0LjI0NC4xNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.qsimTo_13OCE-t6fg88raG2wxqh118nreVEUl0iV85yIjl_9kZDMJ9HsyPBRjhAmb9JUXJDkUEPyl1ISFAUY-Q"}`
};
async function Clan() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.clashroyale.com/v1/clans/%238G290Q0`, {
    headers
  });
  const data = await res.json();
  return data;
}
async function Members() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.clashroyale.com/v1/clans/%238G290Q0/members`, {
    headers
  });
  const data = await res.json();
  return data;
}
async function WarLog() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.clashroyale.com/v1/clans/%238G290Q0/warlog`, {
    headers
  });
  const data = await res.json();
  return data;
}
async function CurrentWar() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.clashroyale.com/v1/clans/%238G290Q0/currentwar`, {
    headers
  });
  const data = await res.json();
  return data;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fgKE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bMwp");
/* harmony import */ var _components_WarPerformance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dc/Y");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const WarPage = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
  className: "p-4"
}, __jsx("h1", null, "War Stats")), __jsx(_components_WarPerformance__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({
  clan: props.clan
}, props.warlog)));

WarPage.getInitialProps = async function () {
  const warlog = await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* WarLog */ "b"])(); // const currentwar = await CurrentWar()

  const clan = await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* Clan */ "a"])(); // warlog.items.push(currentwar)

  return {
    warlog,
    clan
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WarPage);

/***/ })

/******/ });