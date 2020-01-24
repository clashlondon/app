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
    this.isMember = true;
    this.lossStreak = 0;
    this.winStreak = 0;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WarUser, [{
    key: "addToKey",
    value: function addToKey(key, value) {
      this[key] += value;
    }
  }, {
    key: "setMember",
    value: function setMember(state) {
      this.isMember = state;
    }
  }, {
    key: "winLoss",
    value: function winLoss(wins, losses) {
      if (losses > 0 && wins === 0) {
        this.lossStreak += losses;
        this.winStreak = 0;
      }

      if (wins > 0) {
        this.winStreak += wins;
        this.lossStreak = 0;
      }
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
      if (this.battles === 0) return 0;
      return (this.wins * (this.wins / this.battles) - this.battlesMissed * 2.5 * this.battlesMissed + this.wins * 0.5).toFixed(2);
    }
  }]);

  return WarUser;
}();

var processData = function processData(items, clan) {
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
      } // set is member


      userObj.setMember(clan.memberList.find(function (m) {
        return m.name === userObj.name;
      })); // record wins losses per war

      var losses = user.numberOfBattles - user.wins;
      userObj.winLoss(user.wins, losses);
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(processData(props.items, props.clan)),
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
    className: "jsx-1736245729" + " " + "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-1736245729" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-1736245729" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Score"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-1736245729" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-1736245729" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-1736245729" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('winStreak');
    },
    className: "jsx-1736245729" + " " + ((sort === 'winStreak' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Win Streak"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('lossStreak');
    },
    className: "jsx-1736245729" + " " + ((sort === 'lossStreak' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Loss Streak"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-1736245729" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "wins/battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-1736245729" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-1736245729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < -1 ? 'bg-danger' : p.score >= 8 ? 'table-warning' : p.score >= 2 ? 'table-success' : null;
    className += p.isMember ? ' member' : '';
    return __jsx("tr", {
      key: i,
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1736245729" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, p.winStreak), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, p.lossStreak), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-1736245729",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1736245729",
    __self: this
  }, ".table-responsive.jsx-1736245729{overflow-x:initial;}.table.jsx-1736245729{width:100%;}.table.jsx-1736245729 thead.jsx-1736245729{font-weight:bold;}.table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-1736245729 thead.jsx-1736245729 th.jsx-1736245729 span.jsx-1736245729{display:block;font-size:0.5rem;}.table.jsx-1736245729 thead.jsx-1736245729 th.active.jsx-1736245729{color:blue;}table.jsx-1736245729 tbody.jsx-1736245729 td.jsx-1736245729:first-child.jsx-1736245729:not(.member){-webkit-text-decoration:line-through;text-decoration:line-through;font-weight:bold;background-color:grey !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJa0IsQUFHOEIsQUFHUixBQUdNLEFBR0YsQUFPRCxBQUlILEFBR2tCLFdBbkIvQixBQWlCQSxHQUptQixDQVBELEVBSGxCLEVBTkEsWUFpQkEsd0JBUFEsTUFDVyxLQVlBLFlBWEYsS0FZa0IsVUFYbkMsdUJBWUEiLCJmaWxlIjoiL1VzZXJzL21icC9TaXRlcy9sb25kb24tY2xhc2gtbmV4dGpzL2NvbXBvbmVudHMvV2FyUGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBXYXJVc2VyIHtcbiAgY29uc3RydWN0b3Ioe25hbWUsIHdpbnMsIGJhdHRsZXNQbGF5ZWQsIGNhcmRzRWFybmVkLCBudW1iZXJPZkJhdHRsZXN9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMud2lucyA9IHdpbnNcbiAgICB0aGlzLmJhdHRsZXMgPSBiYXR0bGVzUGxheWVkXG4gICAgdGhpcy50b3RhbEJhdHRsZXMgPSBudW1iZXJPZkJhdHRsZXNcbiAgICB0aGlzLmNhcmRzID0gY2FyZHNFYXJuZWRcbiAgICB0aGlzLmlzTWVtYmVyID0gdHJ1ZVxuICAgIHRoaXMubG9zc1N0cmVhayA9IDBcbiAgICB0aGlzLndpblN0cmVhayA9IDBcbiAgfVxuXG4gIGFkZFRvS2V5KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzW2tleV0gKz0gdmFsdWVcbiAgfVxuXG4gIHNldE1lbWJlcihzdGF0ZSkge1xuICAgIHRoaXMuaXNNZW1iZXIgPSBzdGF0ZVxuICB9XG5cbiAgd2luTG9zcyh3aW5zLCBsb3NzZXMpIHtcbiAgICBpZiAobG9zc2VzID4gMCAmJiB3aW5zID09PSAwKSB7XG4gICAgICB0aGlzLmxvc3NTdHJlYWsgKz0gbG9zc2VzXG4gICAgICB0aGlzLndpblN0cmVhayA9IDBcbiAgICB9XG4gICAgaWYgKHdpbnMgPiAwKSB7XG4gICAgICB0aGlzLndpblN0cmVhayArPSB3aW5zXG4gICAgICB0aGlzLmxvc3NTdHJlYWsgPSAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGxvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmF0dGxlcyAtIHRoaXMud2luc1xuICB9XG5cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLndpbnMgLyB0aGlzLnRvdGFsQmF0dGxlc1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNNaXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxCYXR0bGVzIC0gdGhpcy5iYXR0bGVzXG4gIH1cblxuICBnZXQgaW5SZXNwZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnJhdGlvID49IDAuNzUgfHwgdGhpcy5sb3NzID09PSAwICYmIHRoaXMubWlzc2VkID09PSAwXG4gIH1cblxuICBnZXQgaW5EYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPD0gMC4yNSB8fCB0aGlzLmJhdHRsZXNNaXNzZWQgPj0gM1xuICB9XG5cbiAgZ2V0IHNjb3JlKCkge1xuICAgIGlmICh0aGlzLmJhdHRsZXMgPT09IDApIHJldHVybiAwXG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSAtICgodGhpcy5iYXR0bGVzTWlzc2VkICogMi41KSAqIHRoaXMuYmF0dGxlc01pc3NlZCkgKyAodGhpcy53aW5zICogMC41KSkudG9GaXhlZCgyKVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGl0ZW1zLCBjbGFuKSA9PiB7XG4gIGxldCBwYXJ0aWNpcGFudHMgPSBbXVxuICBjb25zdCBmaW5kVXNlciA9IChuYW1lKSA9PiBwYXJ0aWNpcGFudHMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgaXRlbXMuZm9yRWFjaCgod2FyLCBpKSA9PiB7XG4gICAgICB3YXIucGFydGljaXBhbnRzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICB2YXIgdXNlck9iaiA9IGZpbmRVc2VyKHVzZXIubmFtZSlcbiAgICAgICAgICBpZiAoISF1c2VyT2JqKSB7XG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2JhdHRsZXMnLCB1c2VyLmJhdHRsZXNQbGF5ZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3dpbnMnLCB1c2VyLndpbnMpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ2NhcmRzJywgdXNlci5jYXJkc0Vhcm5lZClcbiAgICAgICAgICAgICAgdXNlck9iai5hZGRUb0tleSgndG90YWxCYXR0bGVzJywgdXNlci5udW1iZXJPZkJhdHRsZXMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlck9iaiA9IG5ldyBXYXJVc2VyKHVzZXIpXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50cy5wdXNoKHVzZXJPYmopXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNldCBpcyBtZW1iZXJcbiAgICAgICAgICB1c2VyT2JqLnNldE1lbWJlcihjbGFuLm1lbWJlckxpc3QuZmluZChtID0+IG0ubmFtZSA9PT0gdXNlck9iai5uYW1lKSlcbiAgICAgICAgICAvLyByZWNvcmQgd2lucyBsb3NzZXMgcGVyIHdhclxuICAgICAgICAgIGxldCBsb3NzZXMgPSB1c2VyLm51bWJlck9mQmF0dGxlcyAtIHVzZXIud2luc1xuICAgICAgICAgIHVzZXJPYmoud2luTG9zcyh1c2VyLndpbnMsIGxvc3NlcylcbiAgICAgIH0pXG4gIH0pXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcbn1cblxuY29uc3Qgc29ydERhdGEgPSAoaXRlbXMsIGtleSwgYWx0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhbHQgPyBhW2tleV0gLSBiW2tleV0gOiBiW2tleV0gLSBhW2tleV0pXG59XG5cbmNvbnN0IFdhclBlcmZvcm1hbmNlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdzY29yZScpXG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvY2Vzc0RhdGEocHJvcHMuaXRlbXMsIHByb3BzLmNsYW4pKVxuXG4gIGNvbnN0IHNvcnRlZERhdGEgPSBzb3J0RGF0YShkYXRhLCBzb3J0LCBhbHQpXG5cbiAgY29uc3QgY2xpY2tTb3J0ID0gKG5ld1NvcnQpID0+IHtcbiAgICBpZiAobmV3U29ydCA9PT0gc29ydCkge1xuICAgICAgc2V0QWx0KCFhbHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNvcnQobmV3U29ydClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17J3RhYmxlIHRhYmxlLXNtJ30+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdzY29yZScgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3Njb3JlJykpfT5TY29yZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd0b3RhbEJhdHRsZXMnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd0b3RhbEJhdHRsZXMnKSl9PlRvdGFsIEJhdHRsZXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnd2lucycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3dpbnMnKSl9PldpbnM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnbG9zcycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2xvc3MnKSl9Pkxvc3NlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd3aW5TdHJlYWsnID8gJ2FjdGl2ZScgOiBudWxsfSBvbkNsaWNrPXsoKCkgPT4gY2xpY2tTb3J0KCd3aW5TdHJlYWsnKSl9PldpbiBTdHJlYWs8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnbG9zc1N0cmVhaycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2xvc3NTdHJlYWsnKSl9Pkxvc3MgU3RyZWFrPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMvYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAtMSA/ICdiZy1kYW5nZXInIDogcC5zY29yZSA+PSA4ID8gJ3RhYmxlLXdhcm5pbmcnIDogcC5zY29yZSA+PSAyID8gJ3RhYmxlLXN1Y2Nlc3MnIDogbnVsbFxuICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gcC5pc01lbWJlciA/ICcgbWVtYmVyJyA6ICcnXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntwLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5zY29yZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnRvdGFsQmF0dGxlc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5sb3NzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Aud2luU3RyZWFrfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AubG9zc1N0cmVha308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnJhdGlvLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5iYXR0bGVzTWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGguYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZDpub3QoLm1lbWJlcikge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXJQZXJmb3JtYW5jZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.f6f45e7fb93e8149aac2.hot-update.js.map