/*
 * Create SLQueue method enqueue(val) to add the given value to end of our queue. 
 * Remember, SLQueue uses a singly linked list (not an array).
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

function SLQueue() {
  var head = null;
  var tail = null;
}

SLQueue.prototype.enqueue = function(val) {
  var newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    var run = this.head;
    while (run.next) {
      run = run.next;
    }
    run.next = newNode;
  }
};
