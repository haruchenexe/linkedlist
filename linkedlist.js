// represent the creation of each individual nodes
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const NodeTest = new Node('test');
// console.log(NodeTest)


// linked list factor that represents the full list
class linkeList {

    constructor() {
        this.head = null;
        this.linksize = 0;
    }


    // adds a new node containing value to the end of the list
    append(data) {
        this.head = new Node(data, this.head);              // create a new node with the user inputted data. The new inputted data gets reclassified as the head
        this.linksize++;
    }

    // adds a new node containing value to the start of the list
    prepend(data) {
        // create a new node  and set a current variable
        let node = new Node(data);
        let current;

        // if there is this.head == null then set node to this.head otherwise reassign this.head = current
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.linksize++
    }

    // return the current head of the linked list
    gethead() {
        console.log(this.head.data)
    }

    gettail() {
        let current = this.head;

        while(current && current.next) {
            current = current.next;
        }
        let tail = current.data
        console.log(tail)
    }

    // returns the node at a given index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }

    pop() {
        let current = this.head;        
        let previous = null;

        while (current.next != null) {
            previous = current
            current = current.next
        }
        previous.next = null
        this.linksize--
    }

    // if value exist in linked list return true else false
    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.data == value) {
                console.log(true)
                return
            } 
            current = current.next
        }
        console.log(false)
    }

    find(value) {
        let current = this.head;
        let count = 0;

        while(current != null) {
            if (current.data == value) {
                console.log(count)
                return
            }
            current = current.next
            count++
        }
        console.log(null)
    }

    // print the size of the linked list
    size() {
        let current = this.head;
        let count = 0;

        while(current) {
            count++
            current = current.next;
        }
        console.log(count)
    }

    toString() {
        let current = this.head;
        let array = [];

        while(current) {
            array.push(`(${current.data}) -> `)
            current = current.next;
        }
        array.push('null');
        let stringtxt = array.join("");
        console.log(stringtxt)
    }

    // print linked list
    printListData() {
        let current = this.head
        
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

}

const ll = new linkeList();
console.log(ll);

ll.append(1);
ll.append(2);
ll.append(99);
ll.prepend(10);
ll.prepend(999);


ll.size();
ll.gethead();
ll.gettail();
ll.getAt(2);
ll.pop();
ll.contains(99);
ll.find(10);
ll.toString()
ll.printListData();


