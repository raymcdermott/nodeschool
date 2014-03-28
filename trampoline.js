function trampoline(f) {
    while (f && f instanceof Function) {
        f = f.apply(f.context, f.args);
    }
    return f;
}

function repeat(operation, num) {
    function recur(operation, num) {
        if (num <= 0) return;
        operation();
        return recur.bind(null, operation, --num);
    }
    // Modify this so it doesn't cause a stack overflow!
    return trampoline(recur.bind(null, operation, num));
}

module.exports = repeat;

//repeat(function() { return 2 * 2 }, 10)