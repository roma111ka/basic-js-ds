const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}class Queue {
  constructor() {
    this.left = null;
    this.right = null;
  }

  getUnderlyingList() {
    return this.left;
  }

  enqueue(value) {
    const item = new ListNode(value);
    if (this.right !== null) {
      this.right.next = item;
    } else {
      this.left = item;
    }
    this.right = item;
  }

  dequeue() {
    if (this.left === null) {
      return null;
    }
    const result = this.left.value;
    this.left = this.left.next;
    return result;
  }
}

module.exports = {
  Queue
};
