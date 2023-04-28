function LinkedList() {
  let Head = null;
  let len = 0;

  const append = (value) => {
    const newNode = Node(value);
    len++;
    if (Head === null) {
      Head = newNode;
      return Head;
    } else {
      let pointer = Head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    return newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    len++;
    if (Head === null) {
      Head = newNode;
      return Head;
    } else {
      newNode.next = Head;
      Head = newNode;
    }
    return Head;
  };

  const size = () => {
    if (!Head) {
      return 0;
    } else {
      return len;
    }
  };

  const head = () => {
    return Head.value;
  };

  const tail = () => {
    if (!Head) {
      return null;
    } else {
      let pointer = Head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      return pointer.value;
    }
  };

  const at = (index) => {
    if (!Head || index < 0 || index >= len) {
      return null;
    } else {
      let pointer = Head;
      for (let i = 0; i < index; i++) {
        pointer = pointer.next;
      }
      return pointer;
    }
  };

  const pop = () => {
    if (!Head) {
      return null;
    } else if (Head.next === null) {
      Head = null;
    } else {
      at(size() - 2).next = null;
      len--;
    }
  };

  const contains = (value) => {
    let pointer = Head;
    if (!Head) {
      return null;
    } else {
      for (let i = 0; i < size(); i++) {
        if (pointer.value === value) {
          return true;
        }
        pointer = pointer.next;
      }
      return false;
    }
  };

  const find = (value) => {
    let pointer = Head;
    if (!Head) {
      return null;
    } else {
      for (let i = 0; i < size(); i++) {
        if (pointer.value === value) {
          return i;
        }
        pointer = pointer.next;
      }
      return null;
    }
  };

  const toString = () => {
    if (!Head) {
      return "null";
    } else {
      let pointer = Head;
      let result = "";
      while (pointer !== null) {
        if (pointer.next !== null) {
          result = result.concat(`${pointer.value} --> `);
        } else {
          result = result.concat(`${pointer.value} --> null`);
        }
        pointer = pointer.next;
      }
      return result;
    }
  };

  const insertAt = (value, index) => {
    const newNode = Node(value);
    if (!Head) {
      newNode.next = null;
      return newNode;
    } else if (index > size()) {
      append(value);
    } else {
      let pointer = Head;
      for (let i = 0; i < index - 1; i++) {
        pointer = pointer.next;
      }
      len++;
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
    return newNode;
  };

  const removeAt = (index) => {
    let pointer = Head;
    let prev;
    if (!Head) {
      return null;
    } else if (index === 0) {
      Head = pointer.next;
    } else if (index >= size()) {
      return null;
    } else {
      prev = at(index - 1);
      pointer = prev.next;
      prev.next = pointer.next;
      len--;
    }
    return pointer;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

//Create Node

function Node(value) {
  return {
    value: value || null,
    next: null,
  };
}

//examples functions

const myList = LinkedList();
console.log(myList.append("test"));
console.log(myList.append("test99"));
console.log(myList.prepend("test2"));
console.log(myList.head());
console.log(myList.tail());
console.log(myList.append("test555"));
console.log(myList.find("test555"));
console.log(myList.insertAt("newNode", 3));
console.log(myList.toString());
console.log(myList.size());
console.log(myList.removeAt(4));
console.log(myList.toString());
console.log(myList.size());
