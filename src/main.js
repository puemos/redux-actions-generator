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
const reduceActions = prefix => (actions, key) => ({
  ...actions,
  [key]: `${prefix}/${key}`
});

/**
 * @function createActions
 * @param  {string} prefix {A prefix to put before each one of the actions}
 * @param  {Array<string>} keys = []   {array of actions string}
 * @return {object} {The final actions object}
 */
const createActions = (prefix = "", keys = []) => {
  return keys.map(toUpperCase).reduce(reduceActions(prefix), {});
};

export default createActions