//// [subtypingWithObjectMembers5.ts]
interface Base {
    foo: string;
}

interface Derived extends Base {
    bar: string;
}

// N and M have the same name, same accessibility, same optionality, and N is a subtype of M
// foo properties are valid, bar properties cause errors in the derived class declarations
module NotOptional {
    interface A {
        foo: Base;
    }

    class B implements A {
        fooo: Derived; // error
    }

    interface A2 {
        1: Base;
    }

    class B2 implements A2 {
        2: Derived; // error
    }

    interface A3 {
        '1': Base;
    }

    class B3 implements A3 {
        '1.0': Derived; // error
    }
}

// same cases as above but with optional
module Optional {
    interface A {
        foo?: Base;
    }

    class B implements A {
        fooo: Derived; // ok
    }

    interface A2 {
        1?: Base;
    }

    class B2 implements A2 {
        2: Derived; // ok
    }

    interface A3 {
        '1'?: Base;
    }

    class B3 implements A3 {
        '1.0': Derived; // ok
    }
}

//// [subtypingWithObjectMembers5.js]
// N and M have the same name, same accessibility, same optionality, and N is a subtype of M
// foo properties are valid, bar properties cause errors in the derived class declarations
var NotOptional;
(function (NotOptional) {
    var B = (function () {
        function B() {
        }
        return B;
    })();
    var B2 = (function () {
        function B2() {
        }
        return B2;
    })();
    var B3 = (function () {
        function B3() {
        }
        return B3;
    })();
})(NotOptional || (NotOptional = {}));
// same cases as above but with optional
var Optional;
(function (Optional) {
    var B = (function () {
        function B() {
        }
        return B;
    })();
    var B2 = (function () {
        function B2() {
        }
        return B2;
    })();
    var B3 = (function () {
        function B3() {
        }
        return B3;
    })();
})(Optional || (Optional = {}));
