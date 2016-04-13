'use strict';

const propParent = Symbol('parent');
const propType = Symbol('type');
const propName = Symbol('name');
const propChildren = Symbol('children');

class Node {
    constructor(parent, type, name) {
        this[propParent] = parent || null;
        this[propType] = type || null;
        this[propName] = name;
        this[propChildren] = new Set();
    }

    getType() {
        return this[propType];
    }

    getName() {
        return this[propName];
    }
}

module.exports = Node;
