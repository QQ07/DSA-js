// @ts-nocheck
class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (!this.root) this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.key > node.key)
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  /**
   * @param {BSTNode} root
   * @param {number} key
   * @returns {BSTNode}
   */
  deleteNode(root, key) {
    if (root === null) return null;
    if (root.key < key) node.left = this.deleteNode(root.right, key);
    if (root.key > key) node.right = this.deleteNode(root.left, key);

    //if reached here, it means, we've reached the node to be deleted.

    if (root.left === null && root.right === null) {
      return null;
    }
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      let tempNode = this.smallest(root.right);
      root.key = tempNode.key;
      root.right = this.deleteNode(root.right, tempNode.key);
    }
    return node;
  }
  smallest(root) {
    if (root === null) return null;
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }
  /**
   * @returns {number[]}
   */
  inorderTraversal() {
    const result = [];
    this.inorder(this.root, result);
    return result;
  }
  inorder(node, result) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }
  preorderTraversal() {
    const result = [];
    this.preorder(this.root, result);
    return result;
  }
  preorder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
  }
  postorderTraversal() {
    const result = [];
    this.postorder(this.root, result);
    return result;
  }
  postorder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.postorder(node.left, result);
      this.postorder(node.right, result);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(7);
bst.insert(5);
bst.insert(1);
bst.insert(3);

let inn = bst.inorderTraversal();
let inOrder = inn.reverse().join(" ");
// let pre = bst.preorderTraversal();
// let preOrder = pre.reverse().join(" ")

console.log("Inorder: " + inOrder);
// console.log("Preorder: " + preOrder);

let d = new Date();

setInterval(updateTime, 1000);

function updateTime() {
  let m = d.getMinutes;
  let h = d.getHours();
  let s = d.getSeconds();
  if (h > 12) {
    h = h - 12;
  }
}
