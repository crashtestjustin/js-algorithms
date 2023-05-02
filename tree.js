class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sorted, 0, sorted.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) {
      return null;
    } else {
      let mid = parseInt((start + end) / 2);
      let node = new Node(array[mid]);
      node.left = this.buildTree(array, start, mid - 1);
      node.right = this.buildTree(array, mid + 1, end);
      return node;
    }
  }

  insert(data, root = this.root) {
    if (root === null) {
      root = new Node(data);
      return root;
    }
    if (root.data > data) {
      root.left = this.insert(data, root.left);
    } else if (root.data < data) {
      root.right = this.insert(data, root.right);
    }
    return root;
  }

  delete(data, root = this.root) {
    if (root === null) {
      return root;
    }
    if (root.data > data) {
      root.left = this.delete(data, root.left);
    } else if (root.data < data) {
      root.right = this.delete(data, root.right);
    } else {
      if (root.left === null && root.right === null) {
        return null;
      }
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      root.data = minValue(root.right);
      root.right = this.delete(root.data, root.right);
    }
    return root;
  }

  find(data, root = this.root) {
    if (root === null) {
      return undefined;
    }
    if (root.data === data) {
      return root;
    } else if (root.data > data) {
      return this.find(data, root.left);
    } else if (root.data < data) {
      return this.find(data, root.right);
    }
  }

  levelOrder(callbackFunc) {
    let queue = [this.root];
    let result = [];
    if (!this.root) {
      return undefined;
    }
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (callbackFunc) {
        let callbackResult = callbackFunc(currentNode);
        result.push(callbackResult);
      } else {
        result.push(currentNode.data);
      }
    }
    return result;
  }

  preorder(callbackFunc) {
    //implemented iteratively
    let stack = [this.root];
    let result = [];
    if (!this.root) {
      return undefined;
    }
    while (stack.length > 0) {
      let currentNode = stack.pop();
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (callbackFunc) {
        let callbackResult = callbackFunc(currentNode);
        result.push(callbackResult);
      } else {
        result.push(currentNode.data);
      }
    }
    return result;
  }

  inorder(callbackFunc) {
    //implemented recursively
    const result = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(callbackFunc ? callbackFunc(node) : node.data);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postOrder(callbackFunc) {
    //implemented recursively
    const result = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(callbackFunc ? callbackFunc(node) : node.data);
      }
    }
    traverse(this.root);
    return result;
  }
}

function minValue(root) {
  let minV = root.data;
  while (root.left !== null) {
    minV = root.left.data;
    root = root.left;
  }
  return minV;
}

function timesOneHundo(input) {
  return input.data * 100;
}

//TEST RUN

let testArray = [2, 9, 8, 5, 4, 4, 3, 6, 1];
let testTree = new Tree(testArray);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null && node.right !== undefined) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null && node.left !== undefined) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(testTree.root);
console.log(testTree.insert(7)); //4 2 6 1 3 5 8 7 9
prettyPrint(testTree.root);
console.log(testTree.delete(6)); //4 2 7 1 3 4 8 9
prettyPrint(testTree.root);
// console.log(testTree.levelOrder(timesOneHundo)); // 400 200 700 100 300 500 800 900
// console.log(testTree.preorder(timesOneHundo)); // 400 200 100 300 700 500 800 900
// console.log(testTree.inorder(timesOneHundo)); // 100 200 300 400 500 700 800 900
// console.log(testTree.postOrder(timesOneHundo)); // 100 300 200 500 900 800 700 400
