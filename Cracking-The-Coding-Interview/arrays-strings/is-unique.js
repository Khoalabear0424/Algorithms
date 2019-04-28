// Objective
// Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures

//Using hashmap
function isUnique(str) {
    var letterCount = {};
    for (let i in str) {
        if (letterCount[str[i]]) return false
        else letterCount[str[i]] = str[i]
    }
    return true;
}
//Time Complexity : O(n^2)
//Space Complexity : O(1) (there will never be more than 128 keys in this object)


//Without other Data Structure
function isUnique(str) {
    while (str.length > 0) {
        var curr = str.slice(-1);
        str = str.slice(0, str.length - 1);
        if (str.includes(curr)) return false
    }
    return true;
}
//Time Complexity : O(n) + .includes()
//Space Complexity : O(1)


isUnique("hlo");