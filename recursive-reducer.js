
function reduce(arr, fn, accum) {
    if (arr.length === 0)
        return accum;

    var prev = accum;
    var head = arr[0];
    var tail = arr.slice(1);

    var result = fn(prev, head, arr.length - tail.length, arr);

    return reduce(tail, fn, result);
}

module.exports = reduce


//console.log('result = ' + reduce([1,2,3], function(prev, curr, index, arr) {
//    return prev + curr
//}, 0));