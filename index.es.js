/*!
  Copyright (c) 2017 Shy Alter.
  Licensed under the MIT License (MIT), see
  http://github.com:puemos/redux-generate-actions
*/
/* global define */

(function() {
    
    function toUpperCase(str = "") {
        return str.toUpperCase();
    }
    function reduceActions(prefix) {
        return function(actions, key) {
            return Object.assign({}, actions, { [key]: `${prefix}/${key}` });
        };
    }
    function generateActions(prefix = "", keys = []) {
        return keys.map(toUpperCase).reduce(reduceActions(prefix), {});
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = generateActions;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        // register as 'generateActions', consistent with npm package name
        define("redux-generate-actions", [], function() {
            return generateActions;
        });
    } else {
        window.generateActions = generateActions;
    }
})();
