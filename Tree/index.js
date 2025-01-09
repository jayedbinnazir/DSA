class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(root) {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    console.log("delete");
    this.root = this.deleteNode(this.root, value);
    console.log("deleted");
  }
  deleteNode(root, value) {
    console.log(`line:116-->Entering deleteNode`);
    if (root === null) {
      console.log("line:118--->root = null");
      return this.root;
    }
    if (value < root.value) {
      console.log(`line:122-->Go left from ${root.value}`);
      root.left = this.deleteNode(root.left, value);
      console.log(
        `line:124-->Go back to call stack${
          root.value
        } & updated the left child by ${root.left ? root.left.value : null}`
      );
    } else if (value > root.value) {
      console.log(`line:126-->Go right from ${root.value}`);
      root.right = this.deleteNode(root.right, value);
      console.log(
        `line:128-->Go back to call stack${root.value} & updated the right child by ${root.right.value}`
      );
    } else {
      console.log(`line:130-> mathced node ${root.value} is found to delete`);
      if (!root.left && !root.right) {
        console.log(`root ${root.value} has no child`);
        return null;
      }
      if (!root.left) {
        console.log(`root ${root.value} has only right child`);
        return root.right;
      } else if (!root.right) {
        console.log(`root ${root.value} has only left child`);
        return root.left;
      }
      console.log("The node has two child");
      root.value = this.min(root.right);
      console.log(`line:150-->root is now-->${root.value}`);
      root.right = this.deleteNode(root.right, root.value);
    }
    console.log(`line:147-->${root.value} root is returned`);
    return root;
  }
}

const bst = new BinarySearchTree();

console.log("Tree is empty", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(16);
bst.insert(19);

console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 20));
bst.preOrder(bst.root);
console.log("inorder");
bst.inOrder(bst.root);
console.log("post order");
bst.postOrder(bst.root);

console.log("Level Order");

bst.levelOrder(bst.root);

console.log("Min , Max");

console.log("min", bst.min(bst.root));
console.log("max", bst.max(bst.root));

// bst.delete(3);
bst.delete(15);

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(3));
// console.log(factorial(3));
