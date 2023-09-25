/* Frequency Map Approach: Time Complexity = O(N) Space Complexity = O(N) */
function validAnagram(s, t) {
    if (s.length !== t.length){
        return false;
    }

    let map = {};

    for (let char of s){
    
        if(!map[char]){
            map[char] = 1;
        } else {
            map[char]++;
        }
    }

    for (let char of t){
        if(!map[char]){
            return false;
        }

        if(map[char]){
            map[char]--;
        }

        if(map[char] === 0){
            delete map[char];
        }
    }
    return Object.keys(map).length === 0;
};

console.log(validAnagram('listen', 'silent'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('pink', 'kint'));
console.log(validAnagram('ab', 'a'));
console.log(validAnagram('aacc', 'ccac'));


