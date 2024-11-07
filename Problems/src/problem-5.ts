{
 
    // Problem - 05;

const getProperty = <T extends {name : string} , Q extends keyof T> (obj : T , property : Q) : T[Q] =>{
   const result = obj[property];
   return result;
}

const person = { name: "Alice", age: 30 , hobby : "hurray" };
console.log(getProperty(person, "name"));




















}

