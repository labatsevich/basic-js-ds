const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {


    constructor() {
        this.rootNode = null
    }

    root() {
        return this.rootNode
    }

    add(data) {
        this.rootNode = this.addRecursive(this.rootNode, data)
    }

    addRecursive(node, data) {

        if (!node) {
            return new Node(data)
        }

        if (data === node.data) {
            return node
        }


        if (data < node.data) node.left = this.addRecursive(node.left, data)
        if (data > node.data) node.right = this.addRecursive(node.right, data)

        return node

    }

    has(data) {

        if (!data) return false

        if (!this.rootNode) {
            return false
        }

        let current = this.rootNode

        while (current !== null) {

            if (data < current.data) { current = current.left } else if (data > current.data) { current = current.right } else if (data === current.data) return true

        }

        return false

    }



    find(data) {

        if (!this.rootNode) return null

        return this.findRecursive(this.rootNode, data)

    }

    findRecursive(node, data) {

        if (!node) return null

        if (data === node.data) return node

        if (data < node.data) return this.findRecursive(node.left, data)

        if (data > node.data) return this.findRecursive(node.right, data)


    }

    remove(data) {

        this.rootNode = this.removeRecursive(this.rootNode, data)

    }

    removeRecursive(node, data) {

        if (!node) return null

        if (data < node.data) {
            node.left = this.removeRecursive(node.left, data)
            return node
        } else if (data > node.data) {
            node.right = this.removeRecursive(node.right, data)
            return node
        } else {

            if (!node.left && !node.right) { return null } // leaf

            if (!node.left) {
                node = node.right
                return node
            }
            if (!node.right) {
                node = node.left
                return node
            }


            let minNode = node.right // min from right subtree

            while (minNode.left) {
                minNode = minNode.left
            }


            node.data = minNode.data

            node.right = this.removeRecursive(node.right, minNode.data)

            return node

        }


    }

    min() {
        if (!this.rootNode) return null
        return this.minRecursive(this.rootNode)
    }

    minRecursive(node) {
        if (!node.left) return node.data
        return this.minRecursive(node.left)
    }


    max() {
        if (!this.rootNode) return null
        return this.maxRecursive(this.rootNode)
    }

    maxRecursive(node) {
        if (!node.right) return node.data
        return this.maxRecursive(node.right)
    }
}

module.exports = {
    BinarySearchTree
};