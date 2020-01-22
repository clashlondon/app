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
      return this.wins + this.battles; // return ((this.wins * (this.wins / this.battles)) - (this.battlesMissed * 1.5)).toFixed(2)
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3728819475" + " " + "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-3728819475" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3728819475" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-3728819475" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "(wins * (wins / battlesPlayed)) - missedBattles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-3728819475" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-3728819475" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-3728819475" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-3728819475" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "wins/battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-3728819475" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score < 0 ? 'table-danger' : p.score > 3 ? 'table-success' : p.score > 7.5 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3728819475" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3728819475",
    __self: this
  }, ".table.jsx-3728819475{width:100%;}.table.jsx-3728819475 thead.jsx-3728819475{font-weight:bold;}.table.jsx-3728819475 thead.jsx-3728819475 th.jsx-3728819475{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-3728819475 thead.jsx-3728819475 th.jsx-3728819475 span.jsx-3728819475{display:block;font-size:0.5rem;}.table.jsx-3728819475 thead.jsx-3728819475 th.active.jsx-3728819475{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIa0IsQUFHc0IsQUFHTSxBQUdGLEFBT0QsQUFJSCxXQWhCYixBQWlCQSxHQUptQixDQVBELEVBSGxCLGNBV0Esd0JBUFEsTUFDVyxpQkFDRixlQUNqQiIsImZpbGUiOiIvVXNlcnMvbWJwL1NpdGVzL2xvbmRvbi1jbGFzaC1uZXh0anMvY29tcG9uZW50cy9XYXJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdhclVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgd2lucywgYmF0dGxlc1BsYXllZCwgY2FyZHNFYXJuZWQsIG51bWJlck9mQmF0dGxlc30pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy53aW5zID0gd2luc1xuICAgIHRoaXMuYmF0dGxlcyA9IGJhdHRsZXNQbGF5ZWRcbiAgICB0aGlzLnRvdGFsQmF0dGxlcyA9IG51bWJlck9mQmF0dGxlc1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkc0Vhcm5lZFxuICB9XG5cbiAgYWRkVG9LZXkoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXNba2V5XSArPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgKyB0aGlzLmJhdHRsZXNcbiAgICAvLyByZXR1cm4gKCh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSkgLSAodGhpcy5iYXR0bGVzTWlzc2VkICogMS41KSkudG9GaXhlZCgyKVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGl0ZW1zKSA9PiB7XG4gIGxldCBwYXJ0aWNpcGFudHMgPSBbXVxuICBjb25zdCBmaW5kVXNlciA9IChuYW1lKSA9PiBwYXJ0aWNpcGFudHMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgaXRlbXMuZm9yRWFjaCgod2FyLCBpKSA9PiB7XG4gICAgICB3YXIucGFydGljaXBhbnRzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICB2YXIgdXNlck9iaiA9IGZpbmRVc2VyKHVzZXIubmFtZSlcbiAgICAgICAgICBpZiAoISF1c2VyT2JqKSB7XG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2JhdHRsZXMnLCB1c2VyLmJhdHRsZXNQbGF5ZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3dpbnMnLCB1c2VyLndpbnMpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2NhcmRzJywgdXNlci5jYXJkc0Vhcm5lZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgndG90YWxCYXR0bGVzJywgdXNlci5udW1iZXJPZkJhdHRsZXMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlck9iaiA9IG5ldyBXYXJVc2VyKHVzZXIpXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50cy5wdXNoKHVzZXJPYmopXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xufVxuXG5jb25zdCBzb3J0RGF0YSA9IChpdGVtcywga2V5LCBhbHQpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGFsdCA/IGFba2V5XSAtIGJba2V5XSA6IGJba2V5XSAtIGFba2V5XSlcbn1cblxuY29uc3QgV2FyUGVyZm9ybWFuY2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgnc2NvcmUnKVxuICBjb25zdCBbYWx0LCBzZXRBbHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb2Nlc3NEYXRhKHByb3BzLml0ZW1zKSlcblxuICBjb25zdCBzb3J0ZWREYXRhID0gc29ydERhdGEoZGF0YSwgc29ydCwgYWx0KVxuXG4gIGNvbnN0IGNsaWNrU29ydCA9IChuZXdTb3J0KSA9PiB7XG4gICAgaWYgKG5ld1NvcnQgPT09IHNvcnQpIHtcbiAgICAgIHNldEFsdCghYWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTb3J0KG5ld1NvcnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyd0YWJsZSB0YWJsZS1zbSd9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9eydoZWFkZXInfT5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnc2NvcmUnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdzY29yZScpKX0+U2NvcmU8c3Bhbj4od2lucyAqICh3aW5zIC8gYmF0dGxlc1BsYXllZCkpIC0gbWlzc2VkQmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAndG90YWxCYXR0bGVzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgndG90YWxCYXR0bGVzJykpfT5Ub3RhbCBCYXR0bGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3dpbnMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5zJykpfT5XaW5zPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2xvc3MnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdsb3NzJykpfT5Mb3NzZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAncmF0aW8nID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdyYXRpbycpKX0+V2luIFJhdGlvPHNwYW4+d2lucy9iYXR0bGVzPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdiYXR0bGVzTWlzc2VkJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnYmF0dGxlc01pc3NlZCcpKX0+QmF0dGxlcyBNaXNzZWQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtzb3J0ZWREYXRhLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcC5zY29yZSA8IC0xID8gJ2JnLWRhbmdlcicgOiBwLnNjb3JlIDwgMCA/ICd0YWJsZS1kYW5nZXInIDogcC5zY29yZSA+IDMgPyAndGFibGUtc3VjY2VzcycgOiBwLnNjb3JlID4gNy41ID8gJ3RhYmxlLXdhcm5pbmcnIDogbnVsbFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Auc2NvcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC50b3RhbEJhdHRsZXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC53aW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AubG9zc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnJhdGlvLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5iYXR0bGVzTWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.b0c10fb6e154d05abeb0.hot-update.js.map