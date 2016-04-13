'use strict';

// classes for:
// - package
// - message
// - field
// - import

const propNodeType = Symbol('type');
const propNodeChildren = Symbol('children');
const propNodeParent = Symbol('parent');

class Node {
    constructor(type, parent) {
        this[propNodeType] = type;
        this[propNodeChildren] = new WeakSet();
        this[propNodeParent] = parent || null;
    }

    getType() {
        return this[propNodeType];
    }
}

const propPackagePathArr = Symbol('path_arr');
const propPackagePathName = Symbol('path_name');

class Package extends Node {
    constructor(path) {
        super('package');
        this[propPackagePathArr] = path.split('.');
        this[propPackagePathName] = path;
    }
}

module.exports = {
    Package: Package
};
