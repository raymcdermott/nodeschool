function getShortMessages(messages) {
    return messages.filter(function (msg) {
        if (msg.message.length < 50) return(msg);
    }).map(function (msg) {
            return msg.message;
        });
}

//var example_messages = [
//    { message: '1 some stuff' },
//    { message: '2 x x x x x x x x x x x x x x x x x x x x x x x x x some stuff' },
//    { message: '3 some stuff' },
//    { message: '4 some stuff' },
//    { message: '5 some stuff' }
//];

// var newArray = getShortMessages(example_messages);

module.exports = getShortMessages;
