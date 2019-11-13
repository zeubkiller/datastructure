export class Node {
    constructor(data, next){
        this._data = data;
        this._next = next;
    }

    get data() {return this._data;}
    //set data(data) {this.data = data;}

    get next() {return this._next;}
    set next(next) {this._next = next}

    display() {
        return `Data:${this.data}, Next:${this.next}`;
    }

    compare(other) {
        return this.data === other.data && this.next === other.next;
    }
}

export class LinkedList {
    constructor(){
        this.head = null;
        this._lastNode = null;
    }

    _getLastNode() {
        return this._lastNode;
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
            this._lastNode = this.head;
        } else {
            const newNode = new Node(element, null);
            this._getLastNode().next = newNode;
            this._lastNode = newNode;
        }

        return true;
    }

    pop() {
        if(this.head === null)
            return null;
        
        let nodeBeforeNode = this._getNodeBeforeLastNode();
        let nodeFound = null;
        if(nodeBeforeNode === null) {
            nodeFound = this.head;
            this.head = null;
            this._lastNode = null;
        }
        else {
            nodeFound = nodeBeforeNode.next;
            nodeBeforeNode.next = null;
            this._lastNode = nodeBeforeNode;
        }

        return nodeFound;
    }

    display() {
        let stringArray = [];
        let currentNode = this.head;
        while(currentNode !== null){
            stringArray.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return stringArray;
    }

    _search(element) {
        let currentNode = this.head;
        let previousNodeBeforeSearchedNode = null;
        let searchedNode = null;
        while(currentNode != null && searchedNode === null) {
            if(currentNode.data === element) {
                searchedNode = currentNode;
                break;
            }

            previousNodeBeforeSearchedNode = currentNode;
            currentNode = currentNode.next;
        }

        return [searchedNode, previousNodeBeforeSearchedNode];
    }

    search(element) {
        return this._search(element)[0] !== null;
    }

    delete(element) {
        if(this.head === null)
            return false;
        
        const foundNode = this._search(element);
        const searchedNode = foundNode[0];
        const previousNode = foundNode[1];

        if(searchedNode === null)
            return false;

        if(searchedNode === this.head) {//First element
            this.head = searchedNode.next;
        }
        else if(searchedNode.next === null) {//Last element
            this._getNodeBeforeLastNode().next = null;
        }
        else { //Element in the middle
            previousNode.next = searchedNode.next;
        }
            
        return true;
    }
}

