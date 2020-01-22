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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: ClanData, WarLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanData", function() { return ClanData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarLog", function() { return WarLog; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const headers = {
  authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg2Y2RhNGFlLTEwYzktNGFlYy1hODk3LWM0ZGY5NjY3MjU0YSIsImlhdCI6MTU3OTYzMzUxOSwic3ViIjoiZGV2ZWxvcGVyLzY1M2FmYzA2LTlkYjAtMjU0NC03OWM3LTI5Yjk1N2U1MWIzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1LjY0LjI0NC4xNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.qsimTo_13OCE-t6fg88raG2wxqh118nreVEUl0iV85yIjl_9kZDMJ9HsyPBRjhAmb9JUXJDkUEPyl1ISFAUY-Q"}`
};
async function ClanData() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.clashroyale.com/v1/clans/%238G290Q0`, {
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

/***/ }),

/***/ "./components/WarPerformance.js":
/*!**************************************!*\
  !*** ./components/WarPerformance.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js";


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
  }

  addToKey(key, value) {
    this[key] += value;
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
    return (this.wins * (this.wins / this.battles) - this.battlesMissed * 2.5 * this.battlesMissed + this.wins * 0.5).toFixed(2);
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(processData(props.items));
  const sortedData = sortData(data, sort, alt);

  const clickSort = newSort => {
    if (newSort === sort) {
      setAlt(!alt);
    } else {
      setSort(newSort);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-309811624" + " " + "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "ClashLondon")), __jsx("div", {
    className: "jsx-309811624" + " " + "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("table", {
    className: "jsx-309811624" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("thead", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("th", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Name"), __jsx("th", {
    onClick: () => clickSort('score'),
    className: "jsx-309811624" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Score"), __jsx("th", {
    onClick: () => clickSort('totalBattles'),
    className: "jsx-309811624" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Total Battles"), __jsx("th", {
    onClick: () => clickSort('wins'),
    className: "jsx-309811624" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Wins"), __jsx("th", {
    onClick: () => clickSort('loss'),
    className: "jsx-309811624" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Losses"), __jsx("th", {
    onClick: () => clickSort('ratio'),
    className: "jsx-309811624" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Win Ratio", __jsx("span", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "wins/battles")), __jsx("th", {
    onClick: () => clickSort('battlesMissed'),
    className: "jsx-309811624" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, sortedData.map((p, i) => {
    let className = p.score < -1 ? 'bg-danger' : p.score <= 1 ? 'table-danger' : p.score >= 8 ? 'table-warning' : 'table-success';
    return __jsx("tr", {
      key: i,
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, __jsx("td", {
      className: "jsx-309811624" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, p.name), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, p.score), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, p.totalBattles), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, p.wins), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, p.loss), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "309811624",
    __self: undefined
  }, ".table-responsive.jsx-309811624{overflow-x:initial;}.table.jsx-309811624{width:100%;}.table.jsx-309811624 thead.jsx-309811624{font-weight:bold;}.table.jsx-309811624 thead.jsx-309811624 th.jsx-309811624{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-309811624 thead.jsx-309811624 th.jsx-309811624 span.jsx-309811624{display:block;font-size:0.5rem;}.table.jsx-309811624 thead.jsx-309811624 th.active.jsx-309811624{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ia0IsQUFHOEIsQUFHUixBQUdNLEFBR0YsQUFPRCxBQUlILFdBaEJiLEFBaUJBLEdBSm1CLENBUEQsRUFIbEIsRUFOQSxZQWlCQSx3QkFQUSxNQUNXLGlCQUNGLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgV2FyVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtuYW1lLCB3aW5zLCBiYXR0bGVzUGxheWVkLCBjYXJkc0Vhcm5lZCwgbnVtYmVyT2ZCYXR0bGVzfSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLndpbnMgPSB3aW5zXG4gICAgdGhpcy5iYXR0bGVzID0gYmF0dGxlc1BsYXllZFxuICAgIHRoaXMudG90YWxCYXR0bGVzID0gbnVtYmVyT2ZCYXR0bGVzXG4gICAgdGhpcy5jYXJkcyA9IGNhcmRzRWFybmVkXG4gIH1cblxuICBhZGRUb0tleShrZXksIHZhbHVlKSB7XG4gICAgdGhpc1trZXldICs9IHZhbHVlXG4gIH1cblxuICBnZXQgbG9zcygpIHtcbiAgICByZXR1cm4gdGhpcy5iYXR0bGVzIC0gdGhpcy53aW5zXG4gIH1cblxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMud2lucyAvIHRoaXMudG90YWxCYXR0bGVzXG4gIH1cblxuICBnZXQgYmF0dGxlc01pc3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEJhdHRsZXMgLSB0aGlzLmJhdHRsZXNcbiAgfVxuXG4gIGdldCBpblJlc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPj0gMC43NSB8fCB0aGlzLmxvc3MgPT09IDAgJiYgdGhpcy5taXNzZWQgPT09IDBcbiAgfVxuXG4gIGdldCBpbkRhbmdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbyA8PSAwLjI1IHx8IHRoaXMuYmF0dGxlc01pc3NlZCA+PSAzXG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSAtICgodGhpcy5iYXR0bGVzTWlzc2VkICogMi41KSAqIHRoaXMuYmF0dGxlc01pc3NlZCkgKyAodGhpcy53aW5zICogMC41KSkudG9GaXhlZCgyKVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGl0ZW1zKSA9PiB7XG4gIGxldCBwYXJ0aWNpcGFudHMgPSBbXVxuICBjb25zdCBmaW5kVXNlciA9IChuYW1lKSA9PiBwYXJ0aWNpcGFudHMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgaXRlbXMuZm9yRWFjaCgod2FyLCBpKSA9PiB7XG4gICAgICB3YXIucGFydGljaXBhbnRzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICB2YXIgdXNlck9iaiA9IGZpbmRVc2VyKHVzZXIubmFtZSlcbiAgICAgICAgICBpZiAoISF1c2VyT2JqKSB7XG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2JhdHRsZXMnLCB1c2VyLmJhdHRsZXNQbGF5ZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3dpbnMnLCB1c2VyLndpbnMpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2NhcmRzJywgdXNlci5jYXJkc0Vhcm5lZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgndG90YWxCYXR0bGVzJywgdXNlci5udW1iZXJPZkJhdHRsZXMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlck9iaiA9IG5ldyBXYXJVc2VyKHVzZXIpXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50cy5wdXNoKHVzZXJPYmopXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xufVxuXG5jb25zdCBzb3J0RGF0YSA9IChpdGVtcywga2V5LCBhbHQpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGFsdCA/IGFba2V5XSAtIGJba2V5XSA6IGJba2V5XSAtIGFba2V5XSlcbn1cblxuY29uc3QgV2FyUGVyZm9ybWFuY2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgnc2NvcmUnKVxuICBjb25zdCBbYWx0LCBzZXRBbHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb2Nlc3NEYXRhKHByb3BzLml0ZW1zKSlcblxuICBjb25zdCBzb3J0ZWREYXRhID0gc29ydERhdGEoZGF0YSwgc29ydCwgYWx0KVxuXG4gIGNvbnN0IGNsaWNrU29ydCA9IChuZXdTb3J0KSA9PiB7XG4gICAgaWYgKG5ld1NvcnQgPT09IHNvcnQpIHtcbiAgICAgIHNldEFsdCghYWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTb3J0KG5ld1NvcnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGgxPkNsYXNoTG9uZG9uPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyd0YWJsZSB0YWJsZS1zbSd9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnc2NvcmUnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdzY29yZScpKX0+U2NvcmU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAndG90YWxCYXR0bGVzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgndG90YWxCYXR0bGVzJykpfT5Ub3RhbCBCYXR0bGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3dpbnMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5zJykpfT5XaW5zPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2xvc3MnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdsb3NzJykpfT5Mb3NzZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAncmF0aW8nID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdyYXRpbycpKX0+V2luIFJhdGlvPHNwYW4+d2lucy9iYXR0bGVzPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdiYXR0bGVzTWlzc2VkJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnYmF0dGxlc01pc3NlZCcpKX0+QmF0dGxlcyBNaXNzZWQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtzb3J0ZWREYXRhLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcC5zY29yZSA8IC0xID8gJ2JnLWRhbmdlcicgOiBwLnNjb3JlIDw9IDEgPyAndGFibGUtZGFuZ2VyJyA6IHAuc2NvcmUgPj0gOCA/ICd0YWJsZS13YXJuaW5nJyA6ICd0YWJsZS1zdWNjZXNzJ1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Auc2NvcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC50b3RhbEJhdHRsZXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC53aW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AubG9zc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnJhdGlvLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5iYXR0bGVzTWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_WarPerformance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WarPerformance */ "./components/WarPerformance.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mbp/Sites/london-clash-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const HomePage = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_WarPerformance__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props.warlog, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})));

HomePage.getInitialProps = async function () {
  const warlog = await Object(_api__WEBPACK_IMPORTED_MODULE_1__["WarLog"])();
  return {
    warlog
  };
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mbp/Sites/london-clash-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "shards-react":
/*!*******************************!*\
  !*** external "shards-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map