{
  /**
     Problem 6:
Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
     */

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial = PartialUpdate1 | PartialUpdate2 | PartialUpdate3;

  interface PartialUpdate1 {
    name: string;
  }
  interface PartialUpdate2 {
    age: number;
  }

  interface PartialUpdate3 {
    email: string;
  }

  const updateProfile = (
    param1: Profile,
    param2: Partial
  ): Profile | string => {
    const userProfile = param1;
    const partialUpdate = param2;

    if ("age" in partialUpdate) {
      userProfile.age = partialUpdate.age;
    } else if ("name" in partialUpdate) {
      userProfile.name = partialUpdate.name;
    } else if ("email" in partialUpdate) {
      userProfile.email = partialUpdate.email;
    } else {
      return "Wrong Input please Enter the valid Input";
    }
    return userProfile;
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, {age : 26}));

}
