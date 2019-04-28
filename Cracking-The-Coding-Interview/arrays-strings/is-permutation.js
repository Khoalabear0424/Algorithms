//-------------1.2------------//
// Objective:
// Given two strings, write a method to see if one is a permutation of the other

//Using HahMap for both str
function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    var letCount1 = {}, letCount2 = {};

    for (let i in str1) {
        letCount1[str1[i]] = (letCount1[str1[i]] || 0) + 1;
    }
    for (let i in str2) {
        letCount2[str2[i]] = (letCount2[str2[i]] || 0) + 1;
    }
    console.log(letCount1)
    console.log(letCount2)

    if (letCount1.length !== letCount2.length) return false;
    for (let i in str1) {
        if (letCount1[str1[i]] !== letCount2[str1[i]]) return false;
    }
    return true;
}
//Time Complexity : O(3n) == O(n)
//Space Complexity : O(n^2)

//Using XOR
function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false
    var result = 0;
    for (let i in str1) {
        result *= str1.charCodeAt(i);
        result *= str2.charCodeAt(i);
    }
    return result === 0 ? true : false;
}
//Time Complexity : O(n)
//Space Complexity : O(1)

isPermutation("ddg", "gdd");
