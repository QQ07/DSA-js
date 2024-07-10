// @ts-nocheck
class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  deleteFirst() {
    if (this.head) {
      let data = this.head.data;
      this.head = this.head.next;
      return data;
    }
  }
  deleteLast() {
    if (this.head && this.head.next) {
      let curr = this.head;
      while (curr.next.next != null) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
  }
  deleteKey(key) {
    //list is empty
    if (!this.head) return;

    //data at head
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    while (curr.next != null) {
      if (curr.next.data === key) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
    console.log("no node with key: " + key);
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  revverse() {
    let curr = this.head;
    let prev = null;
    let next = curr.next;

    while (next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = curr.next;
    }
    curr.next=prev;
    this.head=curr;
  }
}

//insert at beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  console.log("adding " + data);
  let newNode;
  try {
    newNode = new node(data, this.head);
  } catch (error) {
    newNode = new node(data);
  }
  this.head = newNode;
};

//insert at end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

LinkedList.prototype.showAll = function () {
  let curr = this.head;
  let res = "";
  while (curr?.next) {
    // console.log(curr.data);
    res += curr.data + " ";
    curr = curr.next;
  }
  // console.log(curr.data);
  res += curr.data;
  return res;
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("Prevnode cannot be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

let ll = new LinkedList();
ll.insertAtBeginning(10);
ll.insertAtBeginning(20);
ll.insertAtBeginning(50);
ll.insertAtEnd(30);
ll.insertAtEnd(40);

console.log("OG: " + ll.showAll());
ll.deleteFirst();
console.log("FD: " + ll.showAll());
ll.deleteLast();
console.log("LD: " + ll.showAll());
// console.log(ll);

ll.insertAtBeginning(10);
ll.insertAtEnd(5);
console.log("OG: " + ll.showAll());
ll.revverse();
console.log("RR: " + ll.showAll());
