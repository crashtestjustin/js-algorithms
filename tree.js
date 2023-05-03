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

  //implemented iteratively
  preorder(callbackFunc) {
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

  //implemented recursively
  inorderRec(callbackFunc) {
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

  //implemented iteratively
  inorder(callbackFunc) {
    const stack = [];
    const result = [];
    let current = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      result.push(callbackFunc ? callbackFunc(current) : current.data);
      current = current.right;
    }

    return result;
  }

  //implemented recursively
  postorder(callbackFunc) {
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

  height(node) {
    if (node === null || node === undefined) {
      return -1;
    }
    const leftH = this.height(node.left);
    const rightH = this.height(node.right);
    return Math.max(leftH, rightH) + 1;
  }

  //implemented iteratively
  depth(node) {
    if (node === null || node === undefined) {
      return -1;
    }
    let currentNode = this.root;
    let counter = 0;
    while (currentNode.data !== node.data) {
      if (currentNode.data > node.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      counter++;
    }
    return counter;
  }

  //implemented recursively
  depthRec(node, currentNode = this.root, counter = 0) {
    if (node === null || node === undefined) {
      return -1;
    }
    if (currentNode.data === node.data) {
      return counter;
    }
    if (currentNode.data > node.data) {
      return this.depth(node, currentNode.left, counter + 1);
    } else {
      return this.depth(node, currentNode.right, counter + 1);
    }
  }

  isBalanced(currentNode = this.root) {
    if (currentNode === null) {
      return true;
    }

    const leftHeight = this.getHeight(currentNode.left);
    const rightHeight = this.getHeight(currentNode.right);
    const heightDiff = Math.abs(leftHeight - rightHeight);

    if (heightDiff > 1) {
      return false;
    }

    return (
      this.isBalanced(currentNode.left) && this.isBalanced(currentNode.right)
    );
  }

  getHeight(currentNode) {
    if (currentNode === null) {
      return 0;
    }

    const leftHeight = this.getHeight(currentNode.left);
    const rightHeight = this.getHeight(currentNode.right);

    return 1 + Math.max(leftHeight, rightHeight);
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
// console.log(testTree.inorderRec(timesOneHundo)); // 100 200 300 400 500 700 800 900
// console.log(testTree.postorder(timesOneHundo)); // 100 300 200 500 900 800 700 400
console.log(testTree.height(testTree.find(4)));
console.log(testTree.depth(testTree.find(9)));
console.log(testTree.isBalanced());
