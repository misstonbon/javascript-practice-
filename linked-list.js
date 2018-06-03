function LinkedList() {
    this.head = null;
};

LinkedList.prototype.isEmpty = function() {
    return this.head === null
};

LinkedList.prototype.size = function() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
        count ++;
        current = current.next;
    }

};


//contains

LinkedList.prototype.contains = function(val) {
    let current = this.head;

    while (current !== null) {
        if (current.val === val) {
            return true
        }

        current = current.next;
    }

    return false ;
}

// prepend
// create a new node with some val
// make new node point to head
// move head from old head to new node

LinkedList.prototype.prepend = function(val) {
    let newNode = {
        data: val,
        next: this.head
    }

    this.head = newNode
}

// append
// create new node using val
// traverse to the end
// once we get to the end make the last node's val point to new node
//first check if list is empty

LinkedList.prototype.append = function(val) {
    let newNode = {
        data: val,
        next: null
    };

    if (this.isEmpty()) {
        this.head = newNode;
        return;
    };

    let current = this.head;

    while (current.next !== null) {
        // we don't want to go to null,
        // we want to stop before null and reassign last var to newNode
        current = current.next;
    }

    current.next = newNode;
}

// remove
// if head is being deleted make head be next

LinkedList.prototype.remove = function(val){
    if (!this.contains(val)) {
        return;
    }

    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }

    // make sure we keep track of current and previous

    let previous = null;
    let current = list.head;

    while (current.data != val) {
        previous = current;
        current = current.next;
    }

    previous.next = current.next ;
    // current gets removed
};


// print list

LinkedList.prototype.print = function() {
    let output = '[' ;
    var current = this.head;

    while (current !== null) {
        output += current.data;
        if (current.next !== null) {
            output += ', ';
        }
        current = current.next;
    }

    output += ']' ;
    console.log(output);

};

var list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(5);
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);

list.print();