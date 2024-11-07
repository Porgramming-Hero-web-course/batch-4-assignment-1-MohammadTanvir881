{
  /**
   Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
  // Sample Output:
  (1, 2, 3, 4, 5)
];
   */

    function removeDuplicates(param : number[]) : number[]{
        const newArray : number[] = [];
        for(const num of param){
            if(!newArray.includes(num)){
                newArray.push(num)
            }
        }
        return newArray;
       

        
    }

   const result =  removeDuplicates([1, 2, 2, 3, 4, 4, 5, 7,7,7 , 8,8]);
   console.log(result)

}
