class Queue1 {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.size = 0;
    this.rear = 0;
    this.front = 0;
  }

  queue(element) {
    this.items[this.rear] = element;
    this.rear++;
    this.size++;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.capacity - this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
    }

    let str = "";

    for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }

    console.log(str);
  }
}
