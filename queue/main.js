class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    if (this.isEmpty()) return "Underflow";
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
