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
      return (this.wins * (this.wins / this.battles) - this.battlesMissed * 1.5).toFixed(2);
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
    class: "table-responsive",
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-2340027746" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2340027746" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-2340027746" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "(wins * (wins / battles played)) - missed battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-2340027746" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-2340027746" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-2340027746" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-2340027746" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "wins / battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-2340027746" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-2340027746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score < 0 ? 'table-danger' : p.score > 4 ? 'table-success' : p.score > 7.5 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2340027746" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-2340027746",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2340027746",
    __self: this
  }, ".table.jsx-2340027746{width:100%;}.table.jsx-2340027746 thead.jsx-2340027746{font-weight:bold;}.table.jsx-2340027746 thead.jsx-2340027746 th.jsx-2340027746{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;}.table.jsx-2340027746 thead.jsx-2340027746 th.jsx-2340027746 span.jsx-2340027746{display:block;font-size:0.5rem;}.table.jsx-2340027746 thead.jsx-2340027746 th.active.jsx-2340027746{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFHc0IsQUFHTSxBQUdGLEFBTUQsQUFJSCxXQWZiLEFBZ0JBLEdBSm1CLENBTkQsRUFIbEIsY0FVQSx3QkFOUSxNQUNXLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbWJwL1NpdGVzL2xvbmRvbi1jbGFzaC1uZXh0anMvY29tcG9uZW50cy9XYXJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdhclVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgd2lucywgYmF0dGxlc1BsYXllZCwgY2FyZHNFYXJuZWQsIG51bWJlck9mQmF0dGxlc30pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy53aW5zID0gd2luc1xuICAgIHRoaXMuYmF0dGxlcyA9IGJhdHRsZXNQbGF5ZWRcbiAgICB0aGlzLnRvdGFsQmF0dGxlcyA9IG51bWJlck9mQmF0dGxlc1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkc0Vhcm5lZFxuICB9XG5cbiAgYWRkVG9LZXkoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXNba2V5XSArPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIHJldHVybiAoKHRoaXMud2lucyAqICh0aGlzLndpbnMgLyB0aGlzLmJhdHRsZXMpKSAtICh0aGlzLmJhdHRsZXNNaXNzZWQgKiAxLjUpKS50b0ZpeGVkKDIpXG4gIH1cbn1cblxuY29uc3QgcHJvY2Vzc0RhdGEgPSAoaXRlbXMpID0+IHtcbiAgbGV0IHBhcnRpY2lwYW50cyA9IFtdXG4gIGNvbnN0IGZpbmRVc2VyID0gKG5hbWUpID0+IHBhcnRpY2lwYW50cy5maW5kKChwKSA9PiBwLm5hbWUgPT09IG5hbWUpO1xuICBpdGVtcy5mb3JFYWNoKCh3YXIsIGkpID0+IHtcbiAgICAgIHdhci5wYXJ0aWNpcGFudHMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgIHZhciB1c2VyT2JqID0gZmluZFVzZXIodXNlci5uYW1lKVxuICAgICAgICAgIGlmICghIXVzZXJPYmopIHtcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnYmF0dGxlcycsIHVzZXIuYmF0dGxlc1BsYXllZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnd2lucycsIHVzZXIud2lucylcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnY2FyZHMnLCB1c2VyLmNhcmRzRWFybmVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd0b3RhbEJhdHRsZXMnLCB1c2VyLm51bWJlck9mQmF0dGxlcylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1c2VyT2JqID0gbmV3IFdhclVzZXIodXNlcilcbiAgICAgICAgICAgICAgcGFydGljaXBhbnRzLnB1c2godXNlck9iailcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9KVxuICByZXR1cm4gcGFydGljaXBhbnRzXG59XG5cbmNvbnN0IHNvcnREYXRhID0gKGl0ZW1zLCBrZXksIGFsdCkgPT4ge1xuICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4gYWx0ID8gYVtrZXldIC0gYltrZXldIDogYltrZXldIC0gYVtrZXldKVxufVxuXG5jb25zdCBXYXJQZXJmb3JtYW5jZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdzY29yZScpXG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvY2Vzc0RhdGEocHJvcHMuaXRlbXMpKVxuXG4gIGNvbnN0IHNvcnRlZERhdGEgPSBzb3J0RGF0YShkYXRhLCBzb3J0LCBhbHQpXG5cbiAgY29uc3QgY2xpY2tTb3J0ID0gKG5ld1NvcnQpID0+IHtcbiAgICBpZiAobmV3U29ydCA9PT0gc29ydCkge1xuICAgICAgc2V0QWx0KCFhbHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNvcnQobmV3U29ydClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsndGFibGUgdGFibGUtc20nfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXsnaGVhZGVyJ30+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3Njb3JlJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnc2NvcmUnKSl9PlNjb3JlPHNwYW4+KHdpbnMgKiAod2lucyAvIGJhdHRsZXMgcGxheWVkKSkgLSBtaXNzZWQgYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAndG90YWxCYXR0bGVzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgndG90YWxCYXR0bGVzJykpfT5Ub3RhbCBCYXR0bGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3dpbnMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5zJykpfT5XaW5zPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2xvc3MnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdsb3NzJykpfT5Mb3NzZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAncmF0aW8nID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdyYXRpbycpKX0+V2luIFJhdGlvPHNwYW4+d2lucyAvIGJhdHRsZXM8L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2JhdHRsZXNNaXNzZWQnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdiYXR0bGVzTWlzc2VkJykpfT5CYXR0bGVzIE1pc3NlZDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3NvcnRlZERhdGEubWFwKChwLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBwLnNjb3JlIDwgLTEgPyAnYmctZGFuZ2VyJyA6IHAuc2NvcmUgPCAwID8gJ3RhYmxlLWRhbmdlcicgOiBwLnNjb3JlID4gNCA/ICd0YWJsZS1zdWNjZXNzJyA6IHAuc2NvcmUgPiA3LjUgPyAndGFibGUtd2FybmluZycgOiBudWxsXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntwLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5zY29yZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnRvdGFsQmF0dGxlc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5sb3NzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AucmF0aW8udG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLmJhdHRsZXNNaXNzZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGggc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FyUGVyZm9ybWFuY2U7XG4iXX0= */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.536b70bbb7b14fd4aed6.hot-update.js.map