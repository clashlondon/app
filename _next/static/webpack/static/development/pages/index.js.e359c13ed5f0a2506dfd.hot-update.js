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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    class: "table-responsive",
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-668970446" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-668970446" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-668970446" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Score", __jsx("span", {
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "(wins * (wins / battles played)) - missed battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-668970446" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-668970446" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-668970446" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-668970446" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "wins / battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-668970446" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-668970446",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score < 0 ? 'table-danger' : p.score > 4 ? 'table-success' : p.score > 7.5 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-668970446" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.ratio), __jsx("td", {
      className: "jsx-668970446",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "668970446",
    __self: this
  }, ".table.jsx-668970446{width:100%;}.table.jsx-668970446 thead.jsx-668970446{font-weight:bold;position:-webkit-sticky;position:sticky;top:0;}.table.jsx-668970446 thead.jsx-668970446 th.jsx-668970446{cursor:pointer;}.table.jsx-668970446 thead.jsx-668970446 th.jsx-668970446 span.jsx-668970446{display:block;font-size:0.5rem;}.table.jsx-668970446 thead.jsx-668970446 th.active.jsx-668970446{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFHc0IsQUFHTSxBQUtGLEFBR0QsQUFJSCxXQWRiLEFBZUEsR0FKbUIsQ0FIbkIsRUFMa0IsY0FTbEIsMEJBUlEsTUFDUiIsImZpbGUiOiIvVXNlcnMvbWJwL1NpdGVzL2xvbmRvbi1jbGFzaC1uZXh0anMvY29tcG9uZW50cy9XYXJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdhclVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgd2lucywgYmF0dGxlc1BsYXllZCwgY2FyZHNFYXJuZWQsIG51bWJlck9mQmF0dGxlc30pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy53aW5zID0gd2luc1xuICAgIHRoaXMuYmF0dGxlcyA9IGJhdHRsZXNQbGF5ZWRcbiAgICB0aGlzLnRvdGFsQmF0dGxlcyA9IG51bWJlck9mQmF0dGxlc1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkc0Vhcm5lZFxuICB9XG5cbiAgYWRkVG9LZXkoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXNba2V5XSArPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIHJldHVybiAodGhpcy53aW5zICogKHRoaXMud2lucyAvIHRoaXMuYmF0dGxlcykpIC0gKHRoaXMuYmF0dGxlc01pc3NlZCAqIDEuNSlcbiAgfVxufVxuXG5jb25zdCBwcm9jZXNzRGF0YSA9IChpdGVtcykgPT4ge1xuICBsZXQgcGFydGljaXBhbnRzID0gW11cbiAgY29uc3QgZmluZFVzZXIgPSAobmFtZSkgPT4gcGFydGljaXBhbnRzLmZpbmQoKHApID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIGl0ZW1zLmZvckVhY2goKHdhciwgaSkgPT4ge1xuICAgICAgd2FyLnBhcnRpY2lwYW50cy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgdmFyIHVzZXJPYmogPSBmaW5kVXNlcih1c2VyLm5hbWUpXG4gICAgICAgICAgaWYgKCEhdXNlck9iaikge1xuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdiYXR0bGVzJywgdXNlci5iYXR0bGVzUGxheWVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd3aW5zJywgdXNlci53aW5zKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdjYXJkcycsIHVzZXIuY2FyZHNFYXJuZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3RvdGFsQmF0dGxlcycsIHVzZXIubnVtYmVyT2ZCYXR0bGVzKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVzZXJPYmogPSBuZXcgV2FyVXNlcih1c2VyKVxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMucHVzaCh1c2VyT2JqKVxuICAgICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcbn1cblxuY29uc3Qgc29ydERhdGEgPSAoaXRlbXMsIGtleSwgYWx0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhbHQgPyBhW2tleV0gLSBiW2tleV0gOiBiW2tleV0gLSBhW2tleV0pXG59XG5cbmNvbnN0IFdhclBlcmZvcm1hbmNlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ3Njb3JlJylcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9jZXNzRGF0YShwcm9wcy5pdGVtcykpXG5cbiAgY29uc3Qgc29ydGVkRGF0YSA9IHNvcnREYXRhKGRhdGEsIHNvcnQsIGFsdClcblxuICBjb25zdCBjbGlja1NvcnQgPSAobmV3U29ydCkgPT4ge1xuICAgIGlmIChuZXdTb3J0ID09PSBzb3J0KSB7XG4gICAgICBzZXRBbHQoIWFsdClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U29ydChuZXdTb3J0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyd0YWJsZSB0YWJsZS1zbSd9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9eydoZWFkZXInfT5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnc2NvcmUnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdzY29yZScpKX0+U2NvcmU8c3Bhbj4od2lucyAqICh3aW5zIC8gYmF0dGxlcyBwbGF5ZWQpKSAtIG1pc3NlZCBiYXR0bGVzPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd0b3RhbEJhdHRsZXMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd0b3RhbEJhdHRsZXMnKSl9PlRvdGFsIEJhdHRsZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnd2lucycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3dpbnMnKSl9PldpbnM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnbG9zcycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2xvc3MnKSl9Pkxvc3NlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdyYXRpbycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3JhdGlvJykpfT5XaW4gUmF0aW88c3Bhbj53aW5zIC8gYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAtMSA/ICdiZy1kYW5nZXInIDogcC5zY29yZSA8IDAgPyAndGFibGUtZGFuZ2VyJyA6IHAuc2NvcmUgPiA0ID8gJ3RhYmxlLXN1Y2Nlc3MnIDogcC5zY29yZSA+IDcuNSA/ICd0YWJsZS13YXJuaW5nJyA6IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3AubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnNjb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AudG90YWxCYXR0bGVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Aud2luc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLmxvc3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5yYXRpb308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLmJhdHRsZXNNaXNzZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGggc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FyUGVyZm9ybWFuY2U7XG4iXX0= */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.e359c13ed5f0a2506dfd.hot-update.js.map