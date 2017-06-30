"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
  Copyright (c) 2017 Shy Alter.
  Licensed under the MIT License (MIT), see
  http://github.com:puemos/redux-generate-actions
*/
/* global define */

(function () {

    function toUpperCase() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        return str.toUpperCase();
    }
    function reduceActions(prefix) {
        return function (actions, key) {
            return Object.assign({}, actions, _defineProperty({}, key, prefix + "/" + key));
        };
    }
    function generateActions() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        return keys.map(toUpperCase).reduce(reduceActions(prefix), {});
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = generateActions;
    } else if (typeof define === "function" && _typeof(define.amd) === "object" && define.amd) {
        // register as 'generateActions', consistent with npm package name
        define("redux-generate-actions", [], function () {
            return generateActions;
        });
    } else {
        window.generateActions = generateActions;
    }
})();
