{
  /**
    Problem 7:
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
    */

  const currentYear: number = new Date().getFullYear();

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge() {
      if (currentYear >= this.year) {
        // console.log(`${currentYear - this.year} (Assuming Current Year is ${currentYear})`)
        const carAge = currentYear - this.year;
        console.log(carAge, "( Assuming Current year is :", currentYear, ")");
      } else {
        console.log("This car is not release yet");
      }
    }
  }

  const car = new Car("Honda", "Civic", 2018 ,)
  car.getCarAge();
}
