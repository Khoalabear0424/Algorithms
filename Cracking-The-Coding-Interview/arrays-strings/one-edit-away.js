//-------------1.5------------//
//Using hashMap
function oneEditAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    var letterCount = {}
    var counter = 0;
    for (let i in str1) {
        letterCount[str1[i]] = (letterCount[str1[i]] || 1) * -1;
    }
    for (let i in str2) {
        letterCount[str2[i]] = (letterCount[str2[i]] || 1) * -1;
    }
    for (let i in letterCount) {
        if (letterCount[i] < 1) counter++
    }
    console.log(letterCount);
    return counter > 2 ? false : true;
}
//Time Complexity : O(3n) -> O(n)
//Space Complexity : O(2n) -> O(n)

oneEditAway("pale", "bae");