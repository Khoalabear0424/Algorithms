//-------------1.4------------//
//Using includes
function isPermutationOfPalindrome(str) {
    str = str.replace(/\s+/g, "");
    var counter = 0;
    var letCount = {};
    for (let i in str) {
        letCount[str[i]] = (letCount[str[i]] || 1) * -1;
    }
    for (let i in letCount) {
        if (letCount[i] < 0) {
            counter++;
            console.log(letCount[i])
        }
    }
    console.log(counter)
    return counter > 1 ? false : true;
}

isPermutationOfPalindrome('racedcarff')