class Element {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Chain {
    constructor() {
        this.start = null;
    }

    addElement(value) {
        const newElement = new Element(value);
        if (!this.start) {
            this.start = newElement;
        } else {
            let currentElement = this.start;

            while (currentElement.next) {
                currentElement = currentElement.next;
            }
            currentElement.next = newElement;
        }
    }

    displayChain() {
        let current = this.start;
        const result = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join("->"));
    }

    searchValue(target) {
        let current = this.start;

        while (current) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }
}

const chain = new Chain();
chain.addElement(1);
chain.addElement(2);
chain.addElement(3);
chain.addElement(4);
chain.addElement(5);
chain.displayChain();
console.log(chain.searchValue(3));
