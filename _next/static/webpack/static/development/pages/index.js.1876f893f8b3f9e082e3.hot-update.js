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
      return (this.wins * (this.wins / this.battles) - this.battlesMissed * this.battlesMissed + this.wins * 0.5).toFixed(2);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("header", {
    className: "jsx-309811624" + " " + "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "ClashLondon"), __jsx("h2", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Score Calculation"), __jsx("code", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "wins * (wins / battles) - (battlesMissed * 2) + (wins * 0.5)")), __jsx("div", {
    className: "jsx-309811624" + " " + "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-309811624" + " " + 'table table-sm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Name"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('score');
    },
    className: "jsx-309811624" + " " + ((sort === 'score' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Score"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('totalBattles');
    },
    className: "jsx-309811624" + " " + ((sort === 'totalBattles' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Total Battles"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('wins');
    },
    className: "jsx-309811624" + " " + ((sort === 'wins' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Wins"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('loss');
    },
    className: "jsx-309811624" + " " + ((sort === 'loss' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Losses"), __jsx("th", {
    onClick: function onClick() {
      return clickSort('ratio');
    },
    className: "jsx-309811624" + " " + ((sort === 'ratio' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Win Ratio", __jsx("span", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "wins/battles")), __jsx("th", {
    onClick: function onClick() {
      return clickSort('battlesMissed');
    },
    className: "jsx-309811624" + " " + ((sort === 'battlesMissed' ? 'active' : null) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Battles Missed"))), __jsx("tbody", {
    className: "jsx-309811624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, sortedData.map(function (p, i) {
    var className = p.score < 0 ? 'bg-danger' : p.score <= 1 ? 'table-danger' : p.score >= 6 && p.score < 8 ? 'table-success' : p.score >= 8 ? 'table-warning' : null;
    return __jsx("tr", {
      key: i,
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-309811624" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, p.name), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, p.score), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, p.totalBattles), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, p.wins), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, p.loss), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, p.ratio.toFixed(2)), __jsx("td", {
      className: "jsx-309811624",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, p.battlesMissed));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "309811624",
    __self: this
  }, ".table-responsive.jsx-309811624{overflow-x:initial;}.table.jsx-309811624{width:100%;}.table.jsx-309811624 thead.jsx-309811624{font-weight:bold;}.table.jsx-309811624 thead.jsx-309811624 th.jsx-309811624{cursor:pointer;position:-webkit-sticky;position:sticky;top:0;background:white;min-width:8rem;}.table.jsx-309811624 thead.jsx-309811624 th.jsx-309811624 span.jsx-309811624{display:block;font-size:0.5rem;}.table.jsx-309811624 thead.jsx-309811624 th.active.jsx-309811624{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHOEIsQUFHUixBQUdNLEFBR0YsQUFPRCxBQUlILFdBaEJiLEFBaUJBLEdBSm1CLENBUEQsRUFIbEIsRUFOQSxZQWlCQSx3QkFQUSxNQUNXLGlCQUNGLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tYnAvU2l0ZXMvbG9uZG9uLWNsYXNoLW5leHRqcy9jb21wb25lbnRzL1dhclBlcmZvcm1hbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgV2FyVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtuYW1lLCB3aW5zLCBiYXR0bGVzUGxheWVkLCBjYXJkc0Vhcm5lZCwgbnVtYmVyT2ZCYXR0bGVzfSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLndpbnMgPSB3aW5zXG4gICAgdGhpcy5iYXR0bGVzID0gYmF0dGxlc1BsYXllZFxuICAgIHRoaXMudG90YWxCYXR0bGVzID0gbnVtYmVyT2ZCYXR0bGVzXG4gICAgdGhpcy5jYXJkcyA9IGNhcmRzRWFybmVkXG4gIH1cblxuICBhZGRUb0tleShrZXksIHZhbHVlKSB7XG4gICAgdGhpc1trZXldICs9IHZhbHVlXG4gIH1cblxuICBnZXQgbG9zcygpIHtcbiAgICByZXR1cm4gdGhpcy5iYXR0bGVzIC0gdGhpcy53aW5zXG4gIH1cblxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMud2lucyAvIHRoaXMudG90YWxCYXR0bGVzXG4gIH1cblxuICBnZXQgYmF0dGxlc01pc3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEJhdHRsZXMgLSB0aGlzLmJhdHRsZXNcbiAgfVxuXG4gIGdldCBpblJlc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW8gPj0gMC43NSB8fCB0aGlzLmxvc3MgPT09IDAgJiYgdGhpcy5taXNzZWQgPT09IDBcbiAgfVxuXG4gIGdldCBpbkRhbmdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbyA8PSAwLjI1IHx8IHRoaXMuYmF0dGxlc01pc3NlZCA+PSAzXG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpbnMgKiAodGhpcy53aW5zIC8gdGhpcy5iYXR0bGVzKSAtICh0aGlzLmJhdHRsZXNNaXNzZWQgKiB0aGlzLmJhdHRsZXNNaXNzZWQpICsgKHRoaXMud2lucyAqIDAuNSkpLnRvRml4ZWQoMilcbiAgfVxufVxuXG5jb25zdCBwcm9jZXNzRGF0YSA9IChpdGVtcykgPT4ge1xuICBsZXQgcGFydGljaXBhbnRzID0gW11cbiAgY29uc3QgZmluZFVzZXIgPSAobmFtZSkgPT4gcGFydGljaXBhbnRzLmZpbmQoKHApID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIGl0ZW1zLmZvckVhY2goKHdhciwgaSkgPT4ge1xuICAgICAgd2FyLnBhcnRpY2lwYW50cy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgdmFyIHVzZXJPYmogPSBmaW5kVXNlcih1c2VyLm5hbWUpXG4gICAgICAgICAgaWYgKCEhdXNlck9iaikge1xuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdiYXR0bGVzJywgdXNlci5iYXR0bGVzUGxheWVkKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCd3aW5zJywgdXNlci53aW5zKVxuICAgICAgICAgICAgICB1c2VyT2JqLmFkZFRvS2V5KCdjYXJkcycsIHVzZXIuY2FyZHNFYXJuZWQpXG4gICAgICAgICAgICAgIHVzZXJPYmouYWRkVG9LZXkoJ3RvdGFsQmF0dGxlcycsIHVzZXIubnVtYmVyT2ZCYXR0bGVzKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVzZXJPYmogPSBuZXcgV2FyVXNlcih1c2VyKVxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMucHVzaCh1c2VyT2JqKVxuICAgICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcbn1cblxuY29uc3Qgc29ydERhdGEgPSAoaXRlbXMsIGtleSwgYWx0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhbHQgPyBhW2tleV0gLSBiW2tleV0gOiBiW2tleV0gLSBhW2tleV0pXG59XG5cbmNvbnN0IFdhclBlcmZvcm1hbmNlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ3Njb3JlJylcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9jZXNzRGF0YShwcm9wcy5pdGVtcykpXG5cbiAgY29uc3Qgc29ydGVkRGF0YSA9IHNvcnREYXRhKGRhdGEsIHNvcnQsIGFsdClcblxuICBjb25zdCBjbGlja1NvcnQgPSAobmV3U29ydCkgPT4ge1xuICAgIGlmIChuZXdTb3J0ID09PSBzb3J0KSB7XG4gICAgICBzZXRBbHQoIWFsdClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U29ydChuZXdTb3J0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxoMT5DbGFzaExvbmRvbjwvaDE+XG4gICAgICAgIDxoMj5TY29yZSBDYWxjdWxhdGlvbjwvaDI+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIHdpbnMgKiAod2lucyAvIGJhdHRsZXMpIC0gKGJhdHRsZXNNaXNzZWQgKiAyKSArICh3aW5zICogMC41KVxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsndGFibGUgdGFibGUtc20nfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3Njb3JlJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnc2NvcmUnKSl9PlNjb3JlPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3RvdGFsQmF0dGxlcycgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ3RvdGFsQmF0dGxlcycpKX0+VG90YWwgQmF0dGxlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICd3aW5zJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnd2lucycpKX0+V2luczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3NvcnQgPT09ICdsb3NzJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgnbG9zcycpKX0+TG9zc2VzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c29ydCA9PT0gJ3JhdGlvJyA/ICdhY3RpdmUnIDogbnVsbH0gb25DbGljaz17KCgpID0+IGNsaWNrU29ydCgncmF0aW8nKSl9PldpbiBSYXRpbzxzcGFuPndpbnMvYmF0dGxlczwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzb3J0ID09PSAnYmF0dGxlc01pc3NlZCcgPyAnYWN0aXZlJyA6IG51bGx9IG9uQ2xpY2s9eygoKSA9PiBjbGlja1NvcnQoJ2JhdHRsZXNNaXNzZWQnKSl9PkJhdHRsZXMgTWlzc2VkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c29ydGVkRGF0YS5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHAuc2NvcmUgPCAwID8gJ2JnLWRhbmdlcicgOiBwLnNjb3JlIDw9IDEgPyAndGFibGUtZGFuZ2VyJyA6IHAuc2NvcmUgPj0gNiAmJiBwLnNjb3JlIDwgOCA/ICd0YWJsZS1zdWNjZXNzJyA6IHAuc2NvcmUgPj0gOCA/ICd0YWJsZS13YXJuaW5nJyA6IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3AubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLnNjb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AudG90YWxCYXR0bGVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3Aud2luc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntwLmxvc3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57cC5yYXRpby50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3AuYmF0dGxlc01pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICAgIG92ZXJmbG93LXg6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIG1pbi13aWR0aDogOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUgdGhlYWQgdGggc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FyUGVyZm9ybWFuY2U7XG4iXX0= */\n/*@ sourceURL=/Users/mbp/Sites/london-clash-nextjs/components/WarPerformance.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WarPerformance);

/***/ })

})
//# sourceMappingURL=index.js.1876f893f8b3f9e082e3.hot-update.js.map