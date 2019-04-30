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

//Constant Space
function compress(str) {
    var consecutiveLetter = 0;
    var result = "";
    for (var i in str) {
        consecutiveLetter++;
        if (str[i] != str[parseInt(i) + 1]) {
            console.log(`str[i] = ${str[i]}, str[i+1] = ${str[i + 1]}`)
            result += str[i] + consecutiveLetter;
            consecutiveLetter = 0;
        }
    }
    return result
}

compress('aaaabbbbrrrccc');