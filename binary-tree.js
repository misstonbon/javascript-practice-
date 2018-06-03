/// binary tree

function BinaryTree(val) {
   this.root = val;
   this.left = null;
   this.right = null; 
}

BinaryTree.prototype.insert = function(val) {
    if (val < this.root && this.left) {
       this.left.insert(val);
    }
    if (val < this.root && !this.left) {
        this.left = new BinaryTree(val);
     }
     if (val > this.root && this.right) {
        this.right.insert(val);
     }
     if (val > this.root && !this.right) {
        this.right = new BinaryTree(val);
     }
}

BinaryTree.prototype.contains = function(target){
    if (this.root === target) {
        return true;
    }
    return !!(this.left && this.left.contains(target)) 
    || !!(this.right && this.right.contains(target));
}

// !! takes falsey vals and returns false or if truthy vals, returns true 


