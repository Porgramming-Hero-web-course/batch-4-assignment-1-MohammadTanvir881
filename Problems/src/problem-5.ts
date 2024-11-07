{
  /**
     Problem 5:
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

Hints: Use keyof

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
     */

  const getProperty = <T extends { name: string }, Q extends keyof T>(
    obj: T,
    property: Q
  ): T[Q] => {
    const result = obj[property];
    return result;
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
