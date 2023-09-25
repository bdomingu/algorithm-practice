function shortestWordDistance(words, word1, word2) {
    let word1Index =-1;
    let word2Index = -1;
    let min = words.length;

    if (words.length <= 1){
        return 0;
    }

    for (let i = 0; i < words.length; i++){
        if (words[i] === word1) {
            word1Index = i
        }
        if (words[i] === word2) {
            word2Index = i
        }

        if (word1Index !== -1 && word2Index !== -1){
            min = Math.min(min, Math.abs(word1Index - word2Index));
        }
    }

    if (word1Index === -1 || word2Index === -1){
        return -1
    }

    return min;
}
console.log(shortestWordDistance(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], "fox", "dog" ));
console.log(shortestWordDistance(["a", "c", "d", "b", "a"], "a", "b" ));
console.log(shortestWordDistance(["a", "a", "b", "b"], "a", "b" ));
console.log(shortestWordDistance(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], "she", "he" ));
console.log(shortestWordDistance([], "hi", "bye")); // Expected output: 0
console.log(shortestWordDistance(["word1"], "word1", "word2")); // Expected output: 0
console.log(shortestWordDistance(["apple", "banana", "orange", "apple", "banana"], "apple", "banana")); // Expected output: 1



