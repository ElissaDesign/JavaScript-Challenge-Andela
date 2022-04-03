const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const isPrime = n => {
   if (n===1){
   return true;
   }else if(n === 2){
      return false;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return true;
         }
      }
      return false;
   };
};
const filterPrime = arr => {
   const filtered = arr.filter(el => !isPrime(el));
   return filtered;
};
console.log(filterPrime(arr));