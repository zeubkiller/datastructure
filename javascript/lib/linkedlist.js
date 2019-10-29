export class Node {
    constructor(){
        this.data = null;
        this.next = null;
    }

    get data() {return this.data;}

    get next() {return this.next;}

}

export class LinkedList {
    constructor(){
        this.head = null;
    }

    push(element) {return false;}

    pop() {return false;}

    display() {return null;}

    search() {return null;}

    delete(element) {return false;}
}

