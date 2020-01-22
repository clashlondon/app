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
      return this.wins / this.battles;
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
      return this.wins * this.ratio - this.battlesMissed;
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
    className: "jsx-4275466315" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-4275466315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-4275466315" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4275466315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('cards');
    },
    className: "jsx-4275466315" + " " + ((sort === 'cards' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-4275466315" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-4275466315" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-4275466315" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Win Ratio"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-4275466315" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Battles Missed"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-4275466315" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Score"))), __jsx("tbody", {
    className: "jsx-4275466315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < 0 ? 'bg-danger' : p.score < 0.3 ? 'table-danger' : p.score > 5 ? 'table-success' : p.score > 8 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-4275466315" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, p.ratio), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, p.battlesMissed), __jsx("td", {
      className: "jsx-4275466315",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, p.score));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4275466315",
    __self: this
  }, ".table.jsx-4275466315{width:100%;}.table.jsx-4275466315 thead.jsx-4275466315{font-weight:bold;}.table.jsx-4275466315 thead.jsx-4275466315 th.jsx-4275466315{cursor:pointer;}.table.jsx-4275466315 thead.jsx-4275466315 th.active.jsx-4275466315{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFHc0IsQUFHTSxBQUdGLEFBR0osV0FSYixBQVNBLElBSEEsRUFIQSIsImZpbGUiOiIvVXNlcnMvbWJwL1NpdGVzL2xvbmRvbi1jbGFzaC1uZXh0anMvY29tcG9uZW50cy9XYXJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdhclVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgd2lucywgYmF0dGxlc1BsYXllZCwgY2FyZHNFYXJuZWQsIG51bWJlck9mQmF0dGxlc30pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy53aW5zID0gd2luc1xuICAgIHRoaXMuYmF0dGxlcyA9IGJhdHRsZXNQbGF5ZWRcbiAgICB0aGlzLnRvdGFsQmF0dGxlcyA9IG51bWJlck9mQmF0dGxlc1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkc0Vhcm5lZFxuICB9XG5cbiAgYWRkVG9LZXkoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXNba2V5XSArPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLmJhdHRsZXNcbiAgfVxuXG4gIGdldCBiYXR0bGVzTWlzc2VkKCkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsQmF0dGxlcyAtIHRoaXMuYmF0dGxlc1xuICB9XG5cbiAgZ2V0IGluUmVzcGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbyA+PSAwLjc1IHx8IHRoaXMubG9zcyA9PT0gMCAmJiB0aGlzLm1pc3NlZCA9PT0gMFxuICB9XG5cbiAgZ2V0IGluRGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvIDw9IDAuMjUgfHwgdGhpcy5iYXR0bGVzTWlzc2VkID49IDNcbiAgfVxuXG4gIGdldCBzY29yZSgpIHtcbiAgICByZXR1cm4gKHRoaXMud2lucyAqIHRoaXMucmF0aW8pIC0gdGhpcy5iYXR0bGVzTWlzc2VkXG4gIH1cbn1cblxuY29uc3QgcHJvY2Vzc0RhdGEgPSAoaXRlbXMpID0+IHtcbiAgbGV0IHBhcnRpY2lwYW50cyA9IFtdXG4gIGNvbnN0IGZpbmRVc2VyID0gKG5hbWUpID0+IHBhcnRpY2lwYW50cy5maW5kKChwKSA9PiBwLm5hbWUgPT09IG5hbWUpO1xuICBpdGVtcy5mb3JFYWNoKCh3YXIsIGkpID0+IHtcbiAgICAgIHdhci5wYXJ0aWNpcGFudHMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgIHZhciB1c2VyT2JqID0gZmluZFVzZXIodXNlci5uYW1lKVxuICAgICAgICAgIGlmICghIXVzZXJPYmopIHtcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnYmF0dGxlcycsIHVzZXIuYmF0dGxlc1BsYXllZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnd2lucycsIHVzZXIud2lucylcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgnY2FyZHMnLCB1c2VyLmNhcmRzRWFybmVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd0b3RhbEJhdHRsZXMnLCB1c2VyLm51bWJlck9mQmF0dGxlcylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1c2VyT2JqID0gbmV3IFdhclVzZXIodXNlcilcbiAgICAgICAgICAgICAgcGFydGljaXBhbnRzLnB1c2godXNlck9iailcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9KVxuICByZXR1cm4gcGFydGljaXBhbnRzXG59XG5cbmNvbnN0IHNvcnREYXRhID0gKGl0ZW1zLCBrZXksIGFsdCkgPT4ge1xuICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4gYWx0ID8gYVtrZXldIC0gYltrZXldIDogYltrZXldIC0gYVtrZXldKVxufVxuXG5jb25zdCBXYXJQZXJmb3JtYW5jZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnNvbGUubG9nKHByb3BzKVxuXG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCd3aW5zJylcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9jZXNzRGF0YShwcm9wcy5pdGVtcykpXG5cbiAgY29uc3Qgc29ydGVkRGF0YSA9IHNvcnREYXRhKGRhdGEsIHNvcnQsIGFsdClcblxuICBjb25zdCBjbGlja1NvcnQgPSAobmV3U29ydCkgPT4ge1xuICAgIGlmIChuZXdTb3J0ID09PSBzb3J0KSB7XG4gICAgICBzZXRBbHQoIWFsdClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U29ydChuZXdTb3J0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyd0YWJsZSB0YWJsZS1zbSd9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT17J2hlYWRlcid9PlxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2NhcmRzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnY2FyZHMnKSl9PlRvdGFsIEJhdHRsZXM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3dpbnMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5zJykpfT5XaW5zPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdsb3NzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnbG9zcycpKX0+TG9zc2VzPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdyYXRpbycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3JhdGlvJykpfT5XaW4gUmF0aW88L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ2JhdHRsZXNNaXNzZWQnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdiYXR0bGVzTWlzc2VkJykpfT5CYXR0bGVzIE1pc3NlZDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnc2NvcmUnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCdzY29yZScpKX0+U2NvcmU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBwLnNjb3JlIDwgMCA/ICdiZy1kYW5nZXInIDogcC5zY29yZSA8IDAuMyA/ICd0YWJsZS1kYW5nZXInIDogcC5zY29yZSA+IDUgPyAndGFibGUtc3VjY2VzcycgOiBwLnNjb3JlID4gOCA/ICd0YWJsZS13YXJuaW5nJyA6IG51bGxcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3AubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC50b3RhbEJhdHRsZXN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Aud2luc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cC5sb3NzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLnJhdGlvfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwLmJhdHRsZXNNaXNzZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Auc2NvcmV9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.c5f207da5547ab8cacbd.hot-update.js.map