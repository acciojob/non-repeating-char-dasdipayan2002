function firstNonRepeatedChar(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] == 1) {
            return char;
        }
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
