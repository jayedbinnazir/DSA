class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepened(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  appened(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;

      this.size++;
    }
  }

  insert(value, index) {
    if (index < 0 || index > list.getSize()) {
      console.log("Invalid Index");
      return;
    }
    if (index === 0) {
      // node.next = this.head
      // this.head = node

      this.prepened(value);
    } else {
      let node = new Node(value);

      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > list.getSize()) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return removedNode.value;
      } else {
        return null;
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  print() {
    if (list.isEmpty()) {
      console.log("List is empty");
    } else {
      let listValues = "";
      let curr = this.head;
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();

console.log("list size is", list.getSize());
console.log("list is empty", list.isEmpty());

list.prepened(5);
list.prepened(10);
list.prepened(15);
list.prepened(20);
list.appened(30);
list.appened(40);
list.insert(2, 4);

console.log("list size is", list.getSize());
console.log("list is empty", list.isEmpty());
console.log("removed", list.removeFrom(4));
console.log("asdsasd", list.removeValue(0));

console.log("search 10", list.search(10));

list.print();
list.reverse();
list.print();

class LinkedList1 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      let removedNode = this.head;
      this.head = removedNode.next;
      this.size--;
      return removedNode.value;
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return value;
  }

  print() {
    let listValues = "";
    let curr = this.head;
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const list2 = new LinkedList1();
console.log(" ");
console.log("list2 is created");
console.log(" ");

list2.prepend(10);
list2.prepend(12);
list2.prepend(15);
list2.prepend(51);
list2.prepend(19);
list2.append(31);
list2.append(35);

console.log("list 2 size is ", list2.getSize());
console.log("list 2  is empty", list2.isEmpty());
list2.print();
console.log("size is ", list2.getSize());
console.log("value removed", list2.removeFromFront());
list2.print();
console.log("size is ", list2.getSize());
console.log("removeFrom end", list2.removeFromEnd());
list2.print();
console.log("size is ", list2.getSize());

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

const user2 = users[1];
user2.name = "Junayed";

let user = users.find((item) => item.id == 1);
user.name = "jayed";

console.log(users);

console.log("0", 0 % 10);
console.log("1", 1 % 10);
console.log("2", 2 % 10);
console.log("3", 3 % 10);
console.log("4", 4 % 10);
console.log("5", 5 % 10);
console.log("6", 6 % 10);
console.log("7", 7 % 10);
console.log("8", 8 % 10);
console.log("9", 9 % 10);
console.log("10", 10 % 10);
console.log("11", 11 % 10);
console.log("12", 12 % 10);
console.log("13", 13 % 10);
console.log("14", 14 % 10);
console.log("15", 15 % 10);
console.log("20", 20 % 10);
console.log("21", 21 % 10);
console.log("22", 22 % 10);
