/* Brute Force: Time Complexity = O(n^2), Space Complexity = O(1) */
function goodPairs(nums) {
   let pairCount = 0;
   for (let i=0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++){
        if (nums[i] === nums[j] ){
            pairCount += 1;
        }
    }
   }
   return pairCount;
}

console.log(goodPairs([1,2,3,1,1,3]));
console.log(goodPairs([1,1,1,1]));
console.log(goodPairs([1,2,3,4]));


function numGoodPairs(nums) {
      
}