const buildTree = (array, start, end) => {
  if (start > end) {
    return null;
  } else {
    let mid = parseInt((start + end) / 2);
    let node = Node(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
  }
};

const Tree = (arr) => {
  let sorted = sortAndRemoveDuplicates(arr);
  let root = buildTree(sorted, 0, arr.length - 1);
  return root;
};

const Node = (data) => {
  return {
    data: data,
    left: null,
    right: null,
  };
};

//helper function

function sortAndRemoveDuplicates(array) {
  let sorted = [...new Set(array)].sort((a, b) => a - b);
  return sorted;
}

//TEST RUN

let testArray = [2, 9, 8, 5, 4, 7, 4, 3, 6, 1];
const testTree = Tree(testArray);

console.log(testTree);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(testTree);
