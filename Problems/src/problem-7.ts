{
    // Problem 7

    const currentYear : number = new Date().getFullYear();

    class Car {
        make : string;
        model : string;
        year : number;

        constructor(make : string , model : string , year : number){
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge(){
            if(currentYear >= this.year){
                // console.log(`${currentYear - this.year} (Assuming Current Year is ${currentYear})`)
                const carAge = currentYear - this.year
                console.log(carAge , "( Assuming Current year is :" , currentYear , ")" )
            }
            else {
                console.log("This car is not release yet")
            }
            
        }
    }

    const car = new Car("honda" , "civic" , 2019)
    car.getCarAge()
}