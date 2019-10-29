export class Node {
    constructor(data, next){
        this._data = data;
        this._next = next;
    }

    get data() {return this._data;}
    //set data(data) {this.data = data;}

    get next() {return this._next;}
    set next(next) {this._next = next}

}

export class LinkedList {
    constructor(){
        this.head = null;
    }

    _getLastNode() {
        let currentNode = this.head;
        while(currentNode.next !== null)
            currentNode = currentNode.next;

        return currentNode;
    }

    _getNodeBeforeLastNode() {
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return previousNode;
    }

    push(element) {
        if(element === null || element === undefined)
            return false;

        if(this.head === null) {
            this.head = new Node(element, null);
        } else {
            this._getLastNode().next = new Node(element, null);
        }

        return true;
    }

    pop() {
        if(this.head === null)
            return false;
        
        let nodeBeforeNode = this._getNodeBeforeLastNode();
        if(nodeBeforeNode === null)
            this.head = null;
        else
            nodeBeforeNode.next = null;

        return true;
    }

    display() {
        if(this.head === null)
            return [];

        let stringArray = [this.head.data];
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
            stringArray.push(currentNode.data);
        }

        return stringArray;
    }

    search() {return null;}

    delete(element) {return false;}
}

