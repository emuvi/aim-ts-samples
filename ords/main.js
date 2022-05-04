"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child = exports.Father = void 0;
class Father {
    constructor(options) {
        this._options = options;
    }
    printName() {
        console.log(this._options.name);
    }
}
exports.Father = Father;
class Child extends Father {
    constructor() {
        super(test());
    }
}
exports.Child = Child;
function test() {
    return {
        name: "Ords",
    };
}
new Child().printName();
//# sourceMappingURL=main.js.map