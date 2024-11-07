{
    // Problem - 8
    const validateKeys = <T extends object>(obj : T, keys: (keyof T)[]): boolean => {
        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i] in obj)) {
                return false;
            }
        }
        return true;
    };
    
    // Sample Input
    const person = { name: "Alice", age: 25, email: "Alice@email.com" };
    console.log(validateKeys(person, ["name", "age"])); // Expected Output: true
}

