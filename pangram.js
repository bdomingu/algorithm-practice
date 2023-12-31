/* Hash Set: Time Complexity = O(N) Space Complexity: O(1) because hash set can store at most 26 characters */
function checkIfPangram(sentence) {
    const sentenceSet = new Set()

    for (const currChar of sentence.toLowerCase()){
      if(currChar.match(/[a-z]/i)) {
        sentenceSet.add(currChar);
      }
    }
    return sentenceSet.size === 26;
}

console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));
console.log(checkIfPangram("This is not a pangram"));
console.log(checkIfPangram(""));
console.log(checkIfPangram("bcdef-ghijkl$mnopqr-stuvwxyz"));
