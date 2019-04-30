//-------------1.6------------//
//Using hashMap
function compress(str) {
    var letterCount = {}
    var result = ""
    for (let i in str) {
        letterCount[str[i]] = (letterCount[str[i]] || 0) + 1;
    }
    for (let i in letterCount) {
        result = i + letterCount[i] + result;
    }
    console.log(result);
}
//Time Complexity : O(2n) -> O(n)
//Space Complexity : O(n) 

compress('aaaabbbbrrrccc');