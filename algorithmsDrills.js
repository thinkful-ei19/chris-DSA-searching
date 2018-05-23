class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    count(key, count = 0) {
        if (this.key === key) {                
            return count;
        }
        else if (key < this.key && this.left) {
            count++
            return this.left.count(key, count)
        } else if (key > this.key && this.right) {
            count++
            return this.right.count(key, count);
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    findNode(key) {
        if (this.key == key) {
            return this;
        }
        else if (key < this.key && this.left) {
            return this.left.findNode(key);
        }
        else if (key > this.key && this.right) {
            return this.right.findNode(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    preOrderTraversal(node = this) {
        console.log(node.key)

        if (node.left) {
            this.preOrderTraversal(node.left)
        }
        if (node.right) {
            this.preOrderTraversal(node.right)
        }
    }

    inOrderTraversal(node = this) {

        if (node.left) {
            this.inOrderTraversal(node.left)
        }
        console.log(node.key)
        if (node.right) {
            this.inOrderTraversal(node.right)
        }
    }

    postOrderTraversal(node = this) {

        if (node.left) {
            this.postOrderTraversal(node.left)
        }
        if (node.right) {
            this.postOrderTraversal(node.right)
        }
        console.log(node.key)        
    }
}

let test = new BinarySearchTree();

let copyPaste = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22'
let arr = copyPaste.split(' ').map((item) => Number(item))

arr.forEach((item) => test.insert(item))

// test.preOrderTraversal()
// test.inOrderTraversal()
// test.postOrderTraversal()

/*
Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. 
If you had to buy shares in the company on one day, and sell the shares on one of the following days, 
write an algorithm to work out what the maximum profit you could make would be.
*/
//I really know absolutely nothing about this topic, and am not sure if my solution is even going to be right.

arr = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(arr) {
    arr = arr.sort((a,b) => a-b)
    min = arr[0]
    max = arr[arr.length-1]
    console.log(`Ideal profit: ${max-min}`)
}

maxProfit(arr)