/* Brute Force Approach: Time Complexity = O(N^2) Space Complexity O(1) */
function containsDuplicate1(nums) {
    for (let i = 0; i < nums.length; i++){
     for (let j = i+1; j < nums.length; j++){
        if (nums[i] === nums[j]) {
           return true;
        }
       }
      }
     return false;
}

/* Test Cases */
console.log(containsDuplicate1([1,2,3,4]));
console.log(containsDuplicate1([1, 2, 3, 1]));
console.log(containsDuplicate1([]));
console.log(containsDuplicate1([1, 1, 1, 1]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('///////////////////////////////////////////////////////////////////////////////')

/* Hash Set Approach: Time Complexity = O(N) Space Complexity O(N)*/
function containsDuplicate2(nums) {
    const uniqueSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            return true;
        }
    }
    return false;
}

/* Test Cases */
console.log(containsDuplicate1([1,2,3,4]));
console.log(containsDuplicate1([1, 2, 3, 1]));
console.log(containsDuplicate1([]));
console.log(containsDuplicate1([1, 1, 1, 1]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('///////////////////////////////////////////////////////////////////////////////')

/* Sorting Approach: Time Complexity = O(N * logN) Space Complexity O(1) OR O(N)*/

function containsDuplicate3(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate3([1,2,3,4]));
console.log(containsDuplicate3([1, 2, 3, 1]));
console.log(containsDuplicate3([]));
console.log(containsDuplicate3([1, 1, 1, 1]));