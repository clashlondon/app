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
/*! exports provided: Clan, Members, WarLog, CurrentWar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clan", function() { return Clan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarLog", function() { return WarLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWar", function() { return CurrentWar; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
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
    className: "jsx-1736245729" + " " + "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("table", {
    className: "jsx-1736245729" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("thead", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("th", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Name"), __jsx("th", {
    onClick: () => clickSort('score'),
    className: "jsx-1736245729" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Score"), __jsx("th", {
    onClick: () => clickSort('totalBattles'),
    className: "jsx-1736245729" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Total Battles"), __jsx("th", {
    onClick: () => clickSort('wins'),
    className: "jsx-1736245729" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Wins"), __jsx("th", {
    onClick: () => clickSort('loss'),
    className: "jsx-1736245729" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Losses"), __jsx("th", {
    onClick: () => clickSort('winStreak'),
    className: "jsx-1736245729" + " " + ((sort === 'winStreak' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Win Streak"), __jsx("th", {
    onClick: () => clickSort('lossStreak'),
    className: "jsx-1736245729" + " " + ((sort === 'lossStreak' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "Loss Streak"), __jsx("th", {
    onClick: () => clickSort('ratio'),
    className: "jsx-1736245729" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Win Ratio", __jsx("span", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "wins/battles")), __jsx("th", {
    onClick: () => clickSort('battlesMissed'),
    className: "jsx-1736245729" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, sortedData.map((p, i) => {
    let className = p.score < -1 ? 'bg-danger' : p.score >= 8 ? 'table-warning' : p.score >= 2 ? 'table-success' : null;
    className += p.isMember ? ' member' : '';
    return __jsx("tr", {
      key: i,
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: undefined
    }, __jsx("td", {
      className: "jsx-1736245729" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, p.name), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, p.score), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
    }, p.totalBattles), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: undefined
    }, p.wins), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }, p.loss), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, p.winStreak), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, p.lossStreak), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1736245729",
    __self: undefined
  }, ".table-responsive.jsx-1736245729{overflow-x:initial;}.table.jsx-1736245729{width:100%;}.table.jsx-1736245729 thead.jsx-1736245729{font-weight:bold;}.table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729 span.jsx-1736245729{display:block;font-size:0.5rem;}.table.jsx-1736245729 thead.jsx-1736245729 th.active.jsx-1736245729{color:blue;}table.jsx-1736245729 tbody.jsx-1736245729 td.jsx-1736245729:first-child.jsx-1736245729:not(.member){-webkit-text-decoration:line-through;text-decoration:line-through;font-weight:bold;background-color:grey !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJa0IsQUFHOEIsQUFHUixBQUdNLEFBR0YsQUFPRCxBQUlILEFBR2tCLFdBbkIvQixBQWlCQSxHQUptQixDQVBELEVBSGxCLEVBTkEsWUFpQkEsd0JBUFEsTUFDVyxLQVlBLFlBWEYsS0FZa0IsVUFYbkMsdUJBWUEiLCJmaWxlIjoiL1VzZXJzL21icC9TaXRlcy9sb25kb24tY2xhc2gtbmV4dGpzL2NvbXBvbmVudHMvV2FyUGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBXYXJVc2VyIHtcbiAgY29uc3RydWN0b3Ioe25hbWUsIHdpbnMsIGJhdHRsZXNQbGF5ZWQsIGNhcmRzRWFybmVkLCBudW1iZXJPZkJhdHRsZXN9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMud2lucyA9IHdpbnNcbiAgICB0aGlzLmJhdHRsZXMgPSBiYXR0bGVzUGxheWVkXG4gICAgdGhpcy50b3RhbEJhdHRsZXMgPSBudW1iZXJPZkJhdHRsZXNcbiAgICB0aGlzLmNhcmRzID0gY2FyZHNFYXJuZWRcbiAgICB0aGlzLmlzTWVtYmVyID0gdHJ1ZVxuICAgIHRoaXMubG9zc1N0cmVhayA9IDBcbiAgICB0aGlzLndpblN0cmVhayA9IDBcbiAgfVxuXG4gIGFkZFRvS2V5KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzW2tleV0gKz0gdmFsdWVcbiAgfVxuXG4gIHNldE1lbWJlcihzdGF0ZSkge1xuICAgIHRoaXMuaXNNZW1iZXIgPSBzdGF0ZVxuICB9XG5cbiAgd2luTG9zcyh3aW5zLCBsb3NzZXMpIHtcbiAgICBpZiAobG9zc2VzID4gMCAmJiB3aW5zID09PSAwKSB7XG4gICAgICB0aGlzLmxvc3NTdHJlYWsgKz0gbG9zc2VzXG4gICAgICB0aGlzLndpblN0cmVhayA9IDBcbiAgICB9XG4gICAgaWYgKHdpbnMgPiAwKSB7XG4gICAgICB0aGlzLndpblN0cmVhayArPSB3aW5zXG4gICAgICB0aGlzLmxvc3NTdHJlYWsgPSAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIGlmICh0aGlzLmJhdHRsZXMgPT09IDApIHJldHVybiAwXG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSAtICgodGhpcy5iYXR0bGVzTWlzc2VkICogMi41KSAqIHRoaXMuYmF0dGxlc01pc3NlZCkgKyAodGhpcy53aW5zICogMC41KSkudG9GaXhlZCgyKVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGl0ZW1zLCBjbGFuKSA9PiB7XG4gIGxldCBwYXJ0aWNpcGFudHMgPSBbXVxuICBjb25zdCBmaW5kVXNlciA9IChuYW1lKSA9PiBwYXJ0aWNpcGFudHMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgaXRlbXMuZm9yRWFjaCgod2FyLCBpKSA9PiB7XG4gICAgICB3YXIucGFydGljaXBhbnRzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICB2YXIgdXNlck9iaiA9IGZpbmRVc2VyKHVzZXIubmFtZSlcbiAgICAgICAgICBpZiAoISF1c2VyT2JqKSB7XG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2JhdHRsZXMnLCB1c2VyLmJhdHRsZXNQbGF5ZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3dpbnMnLCB1c2VyLndpbnMpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2NhcmRzJywgdXNlci5jYXJkc0Vhcm5lZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgndG90YWxCYXR0bGVzJywgdXNlci5udW1iZXJPZkJhdHRsZXMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlck9iaiA9IG5ldyBXYXJVc2VyKHVzZXIpXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50cy5wdXNoKHVzZXJPYmopXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNldCBpcyBtZW1iZXJcbiAgICAgICAgICB1c2VyT2JqLnNldE1lbWJlcihjbGFuLm1lbWJlckxpc3QuZmluZChtID0+IG0ubmFtZSA9PT0gdXNlck9iai5uYW1lKSlcbiAgICAgICAgICAvLyByZWNvcmQgd2lucyBsb3NzZXMgcGVyIHdhclxuICAgICAgICAgIGxldCBsb3NzZXMgPSB1c2VyLm51bWJlck9mQmF0dGxlcyAtIHVzZXIud2luc1xuICAgICAgICAgIHVzZXJPYmoud2luTG9zcyh1c2VyLndpbnMsIGxvc3NlcylcbiAgICAgIH0pXG4gIH0pXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcbn1cblxuY29uc3Qgc29ydERhdGEgPSAoaXRlbXMsIGtleSwgYWx0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhbHQgPyBhW2tleV0gLSBiW2tleV0gOiBiW2tleV0gLSBhW2tleV0pXG59XG5cbmNvbnN0IFdhclBlcmZvcm1hbmNlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdzY29yZScpXG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvY2Vzc0RhdGEocHJvcHMuaXRlbXMsIHByb3BzLmNsYW4pKVxuXG4gIGNvbnN0IHNvcnRlZERhdGEgPSBzb3J0RGF0YShkYXRhLCBzb3J0LCBhbHQpXG5cbiAgY29uc3QgY2xpY2tTb3J0ID0gKG5ld1NvcnQpID0+IHtcbiAgICBpZiAobmV3U29ydCA9PT0gc29ydCkge1xuICAgICAgc2V0QWx0KCFhbHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNvcnQobmV3U29ydClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17J3RhYmxlIHRhYmxlLXNtJ30+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdzY29yZScgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3Njb3JlJykpfT5TY29yZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd0b3RhbEJhdHRsZXMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd0b3RhbEJhdHRsZXMnKSl9PlRvdGFsIEJhdHRsZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnd2lucycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3dpbnMnKSl9PldpbnM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnbG9zcycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2xvc3MnKSl9Pkxvc3NlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd3aW5TdHJlYWsnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5TdHJlYWsnKSl9PldpbiBTdHJlYWs8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnbG9zc1N0cmVhaycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2xvc3NTdHJlYWsnKSl9Pkxvc3MgU3RyZWFrPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMvYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAtMSA/ICdiZy1kYW5nZXInIDogcC5zY29yZSA+PSA4ID8gJ3RhYmxlLXdhcm5pbmcnIDogcC5zY29yZSA+PSAyID8gJ3RhYmxlLXN1Y2Nlc3MnIDogbnVsbFxuICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gcC5pc01lbWJlciA/ICcgbWVtYmVyJyA6ICcnXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntwLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5zY29yZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnRvdGFsQmF0dGxlc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5sb3NzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Aud2luU3RyZWFrfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AubG9zc1N0cmVha308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnJhdGlvLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5iYXR0bGVzTWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZDpub3QoLm1lbWJlcikge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
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
var _jsxFileName = "/Users/mbp/Sites/london-clash-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const ClanPage = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Warlog")), __jsx(_components_WarPerformance__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    clan: props.clan
  }, props.warlog, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })));
};

ClanPage.getInitialProps = async function () {
  const warlog = await Object(_api__WEBPACK_IMPORTED_MODULE_1__["WarLog"])();
  warlog.items.reverse(); // flip order or wars oldest first

  const clan = await Object(_api__WEBPACK_IMPORTED_MODULE_1__["Clan"])();
  return {
    warlog,
    clan
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ClanPage);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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