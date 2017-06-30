/*!
  Copyright (c) 2017 Shy Alter.
  Licensed under the MIT License (MIT), see
  http://github.com:puemos/redux-generate-actions
*/
/* global define */

(function() {
    /**
    * @function toUpperCase
    * @param  {string} str
    * @return {string} {uppercase sting}
    */
    const toUpperCase = (str = "") => {
        return str.toUpperCase();
    };

    /**
    * @function reduceActions
    * @param  {string} prefix {A prefix to put before each one of the actions}
    * @return {funvtion} {a function that returns the action object plus the next generate action}
    */
    const reduceActions = prefix => (actions, key) => ({ ...actions, [key]: `${prefix}/${key}` });

    /**
    * @function createActions
    * @param  {string} prefix {A prefix to put before each one of the actions}
    * @param  {Array<string>} keys = []   {array of actions string}
    * @return {object} {The final actions object}
    */
    const createActions = (prefix = "", keys = []) => {
        return keys.map(toUpperCase).reduce(reduceActions(prefix), {});
    };


    // handle the export
    if (typeof module !== "undefined" && module.exports) {
        module.exports = createActions;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        // register as 'createActions', consistent with npm package name
        define("redux-generate-actions", [], function() {
            return createActions;
        });
    }
})();
