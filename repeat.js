function repeat(operation, num) {
    if (num <= 0) return;

    operation();

    console.log('Called function ' + num + ' times.');

    return repeat(operation, --num);
}

module.exports = repeat;
