// It's a lot easier with bind ;-)

function logger(namespace) {
    return console.log.bind(console, namespace);
};

module.exports = logger


var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info

