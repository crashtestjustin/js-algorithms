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
}

function minValue(root) {
  let minV = root.data;
  while (root.left !== null) {
    minV = root.left.data;
    root = root.left;
  }
  return minV;
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
console.log(testTree.root);
console.log(testTree.insert(7));
prettyPrint(testTree.root);
console.log(testTree.root);
console.log(testTree.delete(7));
// console.log(testTree.delete(6));
prettyPrint(testTree.root);
