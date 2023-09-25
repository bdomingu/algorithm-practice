/* Two Pointer Approach: Time Complexity = O(N) Space Complexity O(N) */
function validPalindrome(sentence) {
    const sentenceArr = sentence.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let pointer1 = 0;
    let pointer2 = sentenceArr.length - 1;

    while (pointer1 < pointer2) {
        if (sentenceArr[pointer1] === sentenceArr[pointer2]){
            pointer1++;
            pointer2--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(validPalindrome("A man, a plan, a canal, Panama!"));
console.log(validPalindrome("Was it a car or a cat I saw?"));
console.log(validPalindrome("hi!"));
console.log(validPalindrome("Welcome to coding!"));
console.log(validPalindrome("Civic"));
console.log(validPalindrome("My gym"));