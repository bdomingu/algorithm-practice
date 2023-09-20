function reverseVowels(s) {
    const stringArray = s.split('')

    let pointer1 = 0;
    let pointer2 = stringArray.length - 1;

    while (pointer1 !== pointer2) {
        if (stringArray[pointer1].match(/[aeiou]/gi) && stringArray[pointer2].match(/[aeiou]/gi)){
            let temp = stringArray[pointer1];
            stringArray[pointer1] = stringArray[pointer2];
            stringArray[pointer2] = temp;
            pointer1++;
            pointer2--;
        } else if (!stringArray[pointer1].match(/[aeiou]/gi)){
            pointer1++;
        } else if (!stringArray[pointer2].match(/[aeiou]/gi)){
            pointer2--;
        }
    }
    return stringArray.join('');
}

console.log(reverseVowels('hello'));
console.log(reverseVowels("AEIOU"));
console.log(reverseVowels("DesignGUrus"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("Hippo"));


