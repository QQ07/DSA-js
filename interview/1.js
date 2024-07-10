class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is Empty";
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  front() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  printElements() {
    if (this.isEmpty()) return "Queue is Empty";
    return this.items.join(" ");
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

console.log(q.front());
console.log(q.dequeue());
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());
console.log(q.printElements());
q.clear();
console.log(q.printElements());
