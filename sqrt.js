function sqrt(x) {
   if (x < 2){
    return x;
   } 

   let left = 1;
   let right = x;

   while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid === x){
            return mid;
        } else if (mid * mid > x) {
                right = mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        }

   }
   return left - 1;
}

console.log(sqrt(8));
console.log(sqrt(4));
console.log(sqrt(2));
console.log(sqrt(15));
console.log(sqrt(3));

