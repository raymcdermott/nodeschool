var slice = Array.prototype.slice

function logger(namespace) {

    return function () {
        var finalList = [];
        finalList.push(namespace);
        slice.apply(arguments).forEach(function (arg) { finalList.push(arg); });

        console.log.apply(console, finalList);
    };

// official answer: ... if only I had known concat() ;-)
//    return function() {
//        console.log.apply(console, [namespace].concat(slice.call(arguments)))
//    }
}

module.exports = logger


//var info = logger('INFO:')
//info('this is an info message')
//// INFO: this is an info message
//
//var warn = logger('WARN:')
//warn('this is a warning message', 'with more info')
//// WARN: this is a warning message with more info
//
