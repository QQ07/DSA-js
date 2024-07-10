class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  printQueue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.join(" ");
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.size());

console.log(queue.printQueue());
queue.clear();
console.log(queue.printQueue());
