function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return;
    operation;
    return setImmediate(function () {
        repeat(operation, --num);
    })
}


module.exports = repeat

//repeat(function () {
//    return 2 * 2;
//}, 10000);