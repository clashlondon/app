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
      return this.wins * (this.wins / this.battles) - this.battlesMissed * 1.5;
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('score'),
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
      lineNumber: 83
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1852041768" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('cards');
    },
    className: "jsx-1852041768" + " " + ((sort === 'cards' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-1852041768" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-1852041768" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-1852041768" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "wins / battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-1852041768" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Battles Missed"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-1852041768" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "(wins * (wins / battles played)) - missed battles")))), __jsx("tbody", {
    className: "jsx-1852041768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score < 0 ? 'table-danger' : p.score > 4 ? 'table-success' : p.score > 7.5 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1852041768" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.ratio), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.battlesMissed), __jsx("td", {
      className: "jsx-1852041768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.score));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1852041768",
    __self: this
  }, ".table.jsx-1852041768{width:100%;}.table.jsx-1852041768 thead.jsx-1852041768{font-weight:bold;}.table.jsx-1852041768 thead.jsx-1852041768 th.jsx-1852041768{cursor:pointer;}.table.jsx-1852041768 thead.jsx-1852041768 th.jsx-1852041768 span.jsx-1852041768{display:block;font-size:0.5rem;}.table.jsx-1852041768 thead.jsx-1852041768 th.active.jsx-1852041768{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHa0IsQUFHc0IsQUFHTSxBQUdGLEFBR0QsQUFJSCxXQVpiLEFBYUEsR0FKbUIsQ0FIbkIsRUFIQSxjQU9BIiwiZmlsZSI6Ii9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgV2FyVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtuYW1lLCB3aW5zLCBiYXR0bGVzUGxheWVkLCBjYXJkc0Vhcm5lZCwgbnVtYmVyT2ZCYXR0bGVzfSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLndpbnMgPSB3aW5zXG4gICAgdGhpcy5iYXR0bGVzID0gYmF0dGxlc1BsYXllZFxuICAgIHRoaXMudG90YWxCYXR0bGVzID0gbnVtYmVyT2ZCYXR0bGVzXG4gICAgdGhpcy5jYXJkcyA9IGNhcmRzRWFybmVkXG4gIH1cblxuICBhZGRUb0tleShrZXksIHZhbHVlKSB7XG4gICAgdGhpc1trZXldICs9IHZhbHVlXG4gIH1cblxuICBnZXQgbG9zcygpIHtcbiAgICByZXR1cm4gdGhpcy5iYXR0bGVzIC0gdGhpcy53aW5zXG4gIH1cblxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMud2lucyAvIHRoaXMudG90YWxCYXR0bGVzXG4gIH1cblxuICBnZXQgYmF0dGxlc01pc3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEJhdHRsZXMgLSB0aGlzLmJhdHRsZXNcbiAgfVxuXG4gIGdldCBpblJlc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPj0gMC43NSB8fCB0aGlzLmxvc3MgPT09IDAgJiYgdGhpcy5taXNzZWQgPT09IDBcbiAgfVxuXG4gIGdldCBpbkRhbmdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbyA8PSAwLjI1IHx8IHRoaXMuYmF0dGxlc01pc3NlZCA+PSAzXG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSkgLSAodGhpcy5iYXR0bGVzTWlzc2VkICogMS41KVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGl0ZW1zKSA9PiB7XG4gIGxldCBwYXJ0aWNpcGFudHMgPSBbXVxuICBjb25zdCBmaW5kVXNlciA9IChuYW1lKSA9PiBwYXJ0aWNpcGFudHMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgaXRlbXMuZm9yRWFjaCgod2FyLCBpKSA9PiB7XG4gICAgICB3YXIucGFydGljaXBhbnRzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICB2YXIgdXNlck9iaiA9IGZpbmRVc2VyKHVzZXIubmFtZSlcbiAgICAgICAgICBpZiAoISF1c2VyT2JqKSB7XG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2JhdHRsZXMnLCB1c2VyLmJhdHRsZXNQbGF5ZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3dpbnMnLCB1c2VyLndpbnMpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2NhcmRzJywgdXNlci5jYXJkc0Vhcm5lZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgndG90YWxCYXR0bGVzJywgdXNlci5udW1iZXJPZkJhdHRsZXMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlck9iaiA9IG5ldyBXYXJVc2VyKHVzZXIpXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50cy5wdXNoKHVzZXJPYmopXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xufVxuXG5jb25zdCBzb3J0RGF0YSA9IChpdGVtcywga2V5LCBhbHQpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGFsdCA/IGFba2V5XSAtIGJba2V5XSA6IGJba2V5XSAtIGFba2V5XSlcbn1cblxuY29uc3QgV2FyUGVyZm9ybWFuY2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgnc2NvcmUnKVxuICBjb25zdCBbYWx0LCBzZXRBbHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb2Nlc3NEYXRhKHByb3BzLml0ZW1zKSlcblxuICBjb25zdCBzb3J0ZWREYXRhID0gc29ydERhdGEoZGF0YSwgc29ydCwgYWx0KVxuXG4gIGNvbnN0IGNsaWNrU29ydCA9IChuZXdTb3J0KSA9PiB7XG4gICAgaWYgKG5ld1NvcnQgPT09IHNvcnQpIHtcbiAgICAgIHNldEFsdCghYWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTb3J0KG5ld1NvcnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17J3RhYmxlIHRhYmxlLXNtJ30+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPXsnaGVhZGVyJ30+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnY2FyZHMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdjYXJkcycpKX0+VG90YWwgQmF0dGxlczwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnd2lucycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3dpbnMnKSl9PldpbnM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2xvc3MnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdsb3NzJykpfT5Mb3NzZXM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMgLyBiYXR0bGVzPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdzY29yZScgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3Njb3JlJykpfT5TY29yZTxzcGFuPih3aW5zICogKHdpbnMgLyBiYXR0bGVzIHBsYXllZCkpIC0gbWlzc2VkIGJhdHRsZXM8L3NwYW4+PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3NvcnRlZERhdGEubWFwKChwLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcC5zY29yZSA8IC0xID8gJ2JnLWRhbmdlcicgOiBwLnNjb3JlIDwgMCA/ICd0YWJsZS1kYW5nZXInIDogcC5zY29yZSA+IDQgPyAndGFibGUtc3VjY2VzcycgOiBwLnNjb3JlID4gNy41ID8gJ3RhYmxlLXdhcm5pbmcnIDogbnVsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLnRvdGFsQmF0dGxlc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC53aW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLmxvc3N9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3AucmF0aW99PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3AuYmF0dGxlc01pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC5zY29yZX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.a6710c84cf032868f520.hot-update.js.map