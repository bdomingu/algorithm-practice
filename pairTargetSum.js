function pairTargetSum(arr, targetSum){
    let p1 = 0;
    let p2 = arr.length - 1;

    for (let i=0; i < arr.length; i++){
        if (arr[p1] + arr[p2] > targetSum){
            console.log(arr[p1] + arr[p2])
            p2--;
        } else if (arr[p1] + arr[p2] < targetSum){
            p1++;
        } else if (arr[p1] + arr[p2] === targetSum)
        return [p1, p2];
    }
}

console.log(pairTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairTargetSum([2, 5, 9, 11], 11))