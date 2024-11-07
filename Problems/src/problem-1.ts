{
  /**
     Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

      // Sample Input:
      sumArray([1, 2, 3, 4, 5]);

     // Sample Output:
       15;
     */
     
    function sumArray(num : number[]) : number{
       const sumResult = num.reduce((sum : number , number : number) : number => sum + number , 0)
       return sumResult;
    }

   const result1 = sumArray([1,2,3,4,5,5,5]);
   console.log(result1)
  
}
