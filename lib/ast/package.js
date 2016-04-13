'use strict';

const Node = require('./node');

class Package extends Node {
    constructor(tree, name) {
        super(tree, 'package', name);
    }
}

module.exports = Package;
