webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WarPerformance.js":
/*!**************************************!*\
  !*** ./components/WarPerformance.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var WarUser =
/*#__PURE__*/
function () {
  function WarUser(_ref) {
    var name = _ref.name,
        wins = _ref.wins,
        battlesPlayed = _ref.battlesPlayed,
        cardsEarned = _ref.cardsEarned,
        numberOfBattles = _ref.numberOfBattles;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WarUser);

    this.name = name;
    this.wins = wins;
    this.battles = battlesPlayed;
    this.totalBattles = numberOfBattles;
    this.cards = cardsEarned;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WarUser, [{
    key: "addToKey",
    value: function addToKey(key, value) {
      this[key] += value;
    }
  }, {
    key: "loss",
    get: function get() {
      return this.battles - this.wins;
    }
  }, {
    key: "ratio",
    get: function get() {
      return this.wins / this.totalBattles;
    }
  }, {
    key: "battlesMissed",
    get: function get() {
      return this.totalBattles - this.battles;
    }
  }, {
    key: "inRespect",
    get: function get() {
      return this.ratio >= 0.75 || this.loss === 0 && this.missed === 0;
    }
  }, {
    key: "inDanger",
    get: function get() {
      return this.ratio <= 0.25 || this.battlesMissed >= 3;
    }
  }, {
    key: "score",
    get: function get() {
      return this.wins * (this.wins / this.battles) - this.battlesMissed;
    }
  }]);

  return WarUser;
}();

var processData = function processData(items) {
  var participants = [];

  var findUser = function findUser(name) {
    return participants.find(function (p) {
      return p.name === name;
    });
  };

  items.forEach(function (war, i) {
    war.participants.forEach(function (user) {
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

var sortData = function sortData(items, key, alt) {
  return items.sort(function (a, b) {
    return alt ? a[key] - b[key] : b[key] - a[key];
  });
};

var WarPerformance = function WarPerformance(props) {
  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('wins'),
      sort = _useState[0],
      setSort = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      alt = _useState2[0],
      setAlt = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(processData(props.items)),
      data = _useState3[0],
      setData = _useState3[1];

  var sortedData = sortData(data, sort, alt);

  var clickSort = function clickSort(newSort) {
    if (newSort === sort) {
      setAlt(!alt);
    } else {
      setSort(newSort);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("table", {
    className: "jsx-1852041768" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1852041768" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('cards');
    },
    className: "jsx-1852041768" + " " + ((sort === 'cards' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-1852041768" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-1852041768" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-1852041768" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "wins / battles played")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-1852041768" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Battles Missed"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-1852041768" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "(wins * win rate) - missed battles")))), __jsx("tbody", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < 0 ? 'bg-danger' : p.score < 0.3 ? 'table-danger' : p.score > 5 ? 'table-success' : p.score > 8 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1852041768" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.ratio), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.battlesMissed), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, p.score));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1852041768",
    __self: this
  }, ".table.jsx-1852041768{width:100%;}.table.jsx-1852041768 thead.jsx-1852041768{font-weight:bold;}.table.jsx-1852041768 thead.jsx-1852041768 th.jsx-1852041768{cursor:pointer;}.table.jsx-1852041768 thead.jsx-1852041768 th.jsx-1852041768 span.jsx-1852041768{display:block;font-size:0.5rem;}.table.jsx-1852041768 thead.jsx-1852041768 th.active.jsx-1852041768{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFHc0IsQUFHTSxBQUdGLEFBR0QsQUFJSCxXQVpiLEFBYUEsR0FKbUIsQ0FIbkIsRUFIQSxjQU9BIiwiZmlsZSI6Ii9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgV2FyVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtuYW1lLCB3aW5zLCBiYXR0bGVzUGxheWVkLCBjYXJkc0Vhcm5lZCwgbnVtYmVyT2ZCYXR0bGVzfSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLndpbnMgPSB3aW5zXG4gICAgdGhpcy5iYXR0bGVzID0gYmF0dGxlc1BsYXllZFxuICAgIHRoaXMudG90YWxCYXR0bGVzID0gbnVtYmVyT2ZCYXR0bGVzXG4gICAgdGhpcy5jYXJkcyA9IGNhcmRzRWFybmVkXG4gIH1cblxuICBhZGRUb0tleShrZXksIHZhbHVlKSB7XG4gICAgdGhpc1trZXldICs9IHZhbHVlXG4gIH1cblxuICBnZXQgbG9zcygpIHtcbiAgICByZXR1cm4gdGhpcy5iYXR0bGVzIC0gdGhpcy53aW5zXG4gIH1cblxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMud2lucyAvIHRoaXMudG90YWxCYXR0bGVzXG4gIH1cblxuICBnZXQgYmF0dGxlc01pc3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEJhdHRsZXMgLSB0aGlzLmJhdHRsZXNcbiAgfVxuXG4gIGdldCBpblJlc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPj0gMC43NSB8fCB0aGlzLmxvc3MgPT09IDAgJiYgdGhpcy5taXNzZWQgPT09IDBcbiAgfVxuXG4gIGdldCBpbkRhbmdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbyA8PSAwLjI1IHx8IHRoaXMuYmF0dGxlc01pc3NlZCA+PSAzXG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSkgLSB0aGlzLmJhdHRsZXNNaXNzZWRcbiAgfVxufVxuXG5jb25zdCBwcm9jZXNzRGF0YSA9IChpdGVtcykgPT4ge1xuICBsZXQgcGFydGljaXBhbnRzID0gW11cbiAgY29uc3QgZmluZFVzZXIgPSAobmFtZSkgPT4gcGFydGljaXBhbnRzLmZpbmQoKHApID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIGl0ZW1zLmZvckVhY2goKHdhciwgaSkgPT4ge1xuICAgICAgd2FyLnBhcnRpY2lwYW50cy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgdmFyIHVzZXJPYmogPSBmaW5kVXNlcih1c2VyLm5hbWUpXG4gICAgICAgICAgaWYgKCEhdXNlck9iaikge1xuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdiYXR0bGVzJywgdXNlci5iYXR0bGVzUGxheWVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd3aW5zJywgdXNlci53aW5zKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdjYXJkcycsIHVzZXIuY2FyZHNFYXJuZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3RvdGFsQmF0dGxlcycsIHVzZXIubnVtYmVyT2ZCYXR0bGVzKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVzZXJPYmogPSBuZXcgV2FyVXNlcih1c2VyKVxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMucHVzaCh1c2VyT2JqKVxuICAgICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcbn1cblxuY29uc3Qgc29ydERhdGEgPSAoaXRlbXMsIGtleSwgYWx0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhbHQgPyBhW2tleV0gLSBiW2tleV0gOiBiW2tleV0gLSBhW2tleV0pXG59XG5cbmNvbnN0IFdhclBlcmZvcm1hbmNlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc29sZS5sb2cocHJvcHMpXG5cbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ3dpbnMnKVxuICBjb25zdCBbYWx0LCBzZXRBbHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb2Nlc3NEYXRhKHByb3BzLml0ZW1zKSlcblxuICBjb25zdCBzb3J0ZWREYXRhID0gc29ydERhdGEoZGF0YSwgc29ydCwgYWx0KVxuXG4gIGNvbnN0IGNsaWNrU29ydCA9IChuZXdTb3J0KSA9PiB7XG4gICAgaWYgKG5ld1NvcnQgPT09IHNvcnQpIHtcbiAgICAgIHNldEFsdCghYWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTb3J0KG5ld1NvcnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17J3RhYmxlIHRhYmxlLXNtJ30+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPXsnaGVhZGVyJ30+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnY2FyZHMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdjYXJkcycpKX0+VG90YWwgQmF0dGxlczwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnd2lucycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3dpbnMnKSl9PldpbnM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2xvc3MnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdsb3NzJykpfT5Mb3NzZXM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMgLyBiYXR0bGVzIHBsYXllZDwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2JhdHRsZXNNaXNzZWQnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdiYXR0bGVzTWlzc2VkJykpfT5CYXR0bGVzIE1pc3NlZDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnc2NvcmUnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdzY29yZScpKX0+U2NvcmU8c3Bhbj4od2lucyAqIHdpbiByYXRlKSAtIG1pc3NlZCBiYXR0bGVzPC9zcGFuPjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtzb3J0ZWREYXRhLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAwID8gJ2JnLWRhbmdlcicgOiBwLnNjb3JlIDwgMC4zID8gJ3RhYmxlLWRhbmdlcicgOiBwLnNjb3JlID4gNSA/ICd0YWJsZS1zdWNjZXNzJyA6IHAuc2NvcmUgPiA4ID8gJ3RhYmxlLXdhcm5pbmcnIDogbnVsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLnRvdGFsQmF0dGxlc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC53aW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLmxvc3N9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3AucmF0aW99PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3AuYmF0dGxlc01pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC5zY29yZX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.70579891a8d5df848a2d.hot-update.js.map