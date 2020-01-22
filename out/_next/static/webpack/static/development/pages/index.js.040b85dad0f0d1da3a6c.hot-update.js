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
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-3728819475" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3728819475" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-3728819475" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "(wins*(wins/battlesPlayed))-missedBattles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-3728819475" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-3728819475" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-3728819475" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-3728819475" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "wins/battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-3728819475" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-3728819475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score < 0 ? 'table-danger' : p.score > 4 ? 'table-success' : p.score > 7.5 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3728819475" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-3728819475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3728819475",
    __self: this
  }, ".table.jsx-3728819475{width:100%;}.table.jsx-3728819475 thead.jsx-3728819475{font-weight:bold;}.table.jsx-3728819475 thead.jsx-3728819475 th.jsx-3728819475{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-3728819475 thead.jsx-3728819475 th.jsx-3728819475 span.jsx-3728819475{display:block;font-size:0.5rem;}.table.jsx-3728819475 thead.jsx-3728819475 th.active.jsx-3728819475{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFHc0IsQUFHTSxBQUdGLEFBT0QsQUFJSCxXQWhCYixBQWlCQSxHQUptQixDQVBELEVBSGxCLGNBV0Esd0JBUFEsTUFDVyxpQkFDRixlQUNqQiIsImZpbGUiOiIvVXNlcnMvbWJwL1NpdGVzL2xvbmRvbi1jbGFzaC1uZXh0anMvY29tcG9uZW50cy9XYXJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdhclVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgd2lucywgYmF0dGxlc1BsYXllZCwgY2FyZHNFYXJuZWQsIG51bWJlck9mQmF0dGxlc30pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy53aW5zID0gd2luc1xuICAgIHRoaXMuYmF0dGxlcyA9IGJhdHRsZXNQbGF5ZWRcbiAgICB0aGlzLnRvdGFsQmF0dGxlcyA9IG51bWJlck9mQmF0dGxlc1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkc0Vhcm5lZFxuICB9XG5cbiAgYWRkVG9LZXkoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXNba2V5XSArPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIHJldHVybiAoKHRoaXMud2lucyAqICh0aGlzLndpbnMgLyB0aGlzLmJhdHRsZXMpKSAtICh0aGlzLmJhdHRsZXNNaXNzZWQgKiAxLjUpKS50b0ZpeGVkKDIpXG4gIH1cbn1cblxuY29uc3QgcHJvY2Vzc0RhdGEgPSAoaXRlbXMpID0+IHtcbiAgbGV0IHBhcnRpY2lwYW50cyA9IFtdXG4gIGNvbnN0IGZpbmRVc2VyID0gKG5hbWUpID0+IHBhcnRpY2lwYW50cy5maW5kKChwKSA9PiBwLm5hbWUgPT09IG5hbWUpO1xuICBpdGVtcy5mb3JFYWNoKCh3YXIsIGkpID0+IHtcbiAgICAgIHdhci5wYXJ0aWNpcGFudHMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgIHZhciB1c2VyT2JqID0gZmluZFVzZXIodXNlci5uYW1lKVxuICAgICAgICAgIGlmICghIXVzZXJPYmopIHtcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnYmF0dGxlcycsIHVzZXIuYmF0dGxlc1BsYXllZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnd2lucycsIHVzZXIud2lucylcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnY2FyZHMnLCB1c2VyLmNhcmRzRWFybmVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd0b3RhbEJhdHRsZXMnLCB1c2VyLm51bWJlck9mQmF0dGxlcylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1c2VyT2JqID0gbmV3IFdhclVzZXIodXNlcilcbiAgICAgICAgICAgICAgcGFydGljaXBhbnRzLnB1c2godXNlck9iailcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9KVxuICByZXR1cm4gcGFydGljaXBhbnRzXG59XG5cbmNvbnN0IHNvcnREYXRhID0gKGl0ZW1zLCBrZXksIGFsdCkgPT4ge1xuICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4gYWx0ID8gYVtrZXldIC0gYltrZXldIDogYltrZXldIC0gYVtrZXldKVxufVxuXG5jb25zdCBXYXJQZXJmb3JtYW5jZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdzY29yZScpXG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvY2Vzc0RhdGEocHJvcHMuaXRlbXMpKVxuXG4gIGNvbnN0IHNvcnRlZERhdGEgPSBzb3J0RGF0YShkYXRhLCBzb3J0LCBhbHQpXG5cbiAgY29uc3QgY2xpY2tTb3J0ID0gKG5ld1NvcnQpID0+IHtcbiAgICBpZiAobmV3U29ydCA9PT0gc29ydCkge1xuICAgICAgc2V0QWx0KCFhbHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNvcnQobmV3U29ydClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsndGFibGUgdGFibGUtc20nfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXsnaGVhZGVyJ30+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3Njb3JlJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnc2NvcmUnKSl9PlNjb3JlPHNwYW4+KHdpbnMqKHdpbnMvYmF0dGxlc1BsYXllZCkpLW1pc3NlZEJhdHRsZXM8L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3RvdGFsQmF0dGxlcycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3RvdGFsQmF0dGxlcycpKX0+VG90YWwgQmF0dGxlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd3aW5zJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnd2lucycpKX0+V2luczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdsb3NzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnbG9zcycpKX0+TG9zc2VzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMvYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAtMSA/ICdiZy1kYW5nZXInIDogcC5zY29yZSA8IDAgPyAndGFibGUtZGFuZ2VyJyA6IHAuc2NvcmUgPiA0ID8gJ3RhYmxlLXN1Y2Nlc3MnIDogcC5zY29yZSA+IDcuNSA/ICd0YWJsZS13YXJuaW5nJyA6IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3AubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnNjb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AudG90YWxCYXR0bGVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Aud2luc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLmxvc3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5yYXRpby50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AuYmF0dGxlc01pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIG1pbi13aWR0aDogOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGggc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FyUGVyZm9ybWFuY2U7XG4iXX0= */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.040b85dad0f0d1da3a6c.hot-update.js.map