This repo contains various boilerplate algorithms for sorting and manipulating data sets in js. It started as projects and additional exploration from The Odin Project's Full Stack JS course but I decided to add these here to showcase my current knowledge as well as have these for composition in other projects in the future.

Linked List Description of functions:

- append(value) adds a new node containing value to the end of the list
- prepend(value) adds a new node containing value to the start of the list
- size returns the total number of nodes in the list
- head returns the first node in the list
- tail returns the last node in the list
- at(index) returns the node at the given index
- pop removes the last element from the list
- contains(value) returns true if the passed in value is in the list and otherwise returns false.
- find(value) returns the index of the node containing value, or null if not found.
- toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
- insertAt(value, index) that inserts a new node with the provided value at the given index.
- removeAt(index) that removes the node at the given index.

Binary Search Tree Function List:

- insert: accepts a value and inserts as a leaf node
- delete: accepts a value and deletes the given node, also dealing with the children appropriately
- find: accepts a value and returns the node with the given value
- levelOrder: accepts a callback function and conducts a breadth-first traversal, applying the callback function to each node's data attribute. If no callback function is provided, the node.data is returned to the output array
- preorder: accepts a callback function and conducts a depth-first traversal in a recursive preorder method, applying the callback function to each node's data attribute. If no callback function is provided, the node.data is returned to the output array
- inorderRec: accepts a callback function and conducts a depth-first traversal in a recursive inorder method, applying the callback function to each node's data attribute. If no callback function is provided, the node.data is returned to the output array
- inorder: accepts a callback function and conducts a depth-first traversal in an iterative inorder method, applying the callback function to each node's data attribute. If no callback function is provided, the node.data is returned to the output array
- postorder: accepts a callback function and conducts a depth-first traversal in a recursive postorder method, applying the callback function to each node's data attribute. If no callback function is provided, the node.data is returned to the output array
- height: accepts a node and returns the height of the node (number of edges in the longest path to a leaf node from the given node)
- depth: accepts a node and returns the depth of the node in an iterative manner (number of edges in path to the tree root node from the given node)
- depthRec: accepts a node and returns the depth of the node in a recursive manner (number of edges in path to the tree root node from the given node)
- isBalanced: returns if the binary tree is balanced via a true/false repsonse
- rebalance: creates a new array with the tree node data attriburtes by traversing the tree with the preorder method and re-builds the tree in a balanced fashion using the buildTree method. Note the array is first sorted and set as it originally was when the initial buildTree method was called.
