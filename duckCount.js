function duckCount() {
    var argumentArray = Array.prototype.slice.apply(arguments);
    return argumentArray.reduce(function (prev, curr) {
        if (Object.prototype.hasOwnProperty.call(curr, 'quack'))
            return prev + 1;
        else
            return prev;
    }, 0);

// official answer ... also uses call on slice and prefers filter over reduce
//
//    return Array.prototype.slice.call(arguments).filter(function(obj) {
//        return Object.prototype.hasOwnProperty.call(obj, 'quack')
//    }).length
}

module.exports = duckCount


//var notDuck = Object.create({quack: true})
//var duck = {quack: true}
//console.log(duckCount(duck, notDuck)); // 1

