var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return;

  if (
    this.stack[this.stack.length - 1] == this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.pop();
  }

  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length == 0) return null;

  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.minStack.length === 0) return null;

  return this.minStack[this.minStack.length - 1];
};
