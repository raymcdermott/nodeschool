function checkUsersValid(goodUsers) {

    return function (submittedUsers) {
        // is every id from array submittedUsers in goodUsers
        return submittedUsers.every(function (su, su_idx) {
            return goodUsers.some(function (gu, gu_idx) {
                return gu.id === submittedUsers[su_idx].id;
            });
        });
    };
}

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

var goodUsers_mixed = [
    { id: 3 },
    { id: 2 },
    { id: 1 }
];

// Subset - true
var testUsers_1 = [
    { id: 1 },
    { id: 3 }
];

// Mismatch - false
var testUsers_2 = [
    { id: 1 },
    { id: 4 }
];

//var testValidUsers = checkUsersValid(goodUsers);
//
//if (testValidUsers(goodUsers)) {
//    console.log('gu - ok');
//} else {
//    console.log('gu - fail');
//}
//
//if (testValidUsers(goodUsers_mixed)) {
//    console.log('gu mixed - ok');
//} else {
//    console.log('gu mixed - fail');
//}
//
//if (testValidUsers(testUsers_1)) {
//    console.log('1 - ok');
//} else {
//    console.log('1 - fail');
//}
//
//if (testValidUsers(testUsers_2)) {
//    console.log('2 - ok');
//} else {
//    console.log('2 - fail');
//}

module.exports = checkUsersValid;