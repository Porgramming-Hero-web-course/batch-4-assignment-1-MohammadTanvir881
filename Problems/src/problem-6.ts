{
    // Problem 6

    interface Profile {
        name : string;
        age : number;
        email : string;
    }

    type Partial = PartialUpdate1 | PartialUpdate2 | PartialUpdate3;


    interface PartialUpdate1 {
        name : string
    }
    interface PartialUpdate2 {
        age : number
    }

    interface PartialUpdate3 {
        email : string;
    }
    
   
    const updateProfile = (param1 : Profile , param2 : Partial) : Profile | string =>{
        const userProfile = param1;
        const partialUpdate = param2;
        
        if("age" in partialUpdate){
            userProfile.age = partialUpdate.age
            
        }
        else if ("name" in partialUpdate){
            userProfile.name = partialUpdate.name
            
        }
        else if ("email" in partialUpdate){
            userProfile.email = partialUpdate.email
           
        }
        else {
            return "Wrong Input please Enter the valid Input"
        }
        return userProfile
        
    }

    const myProfile = {name : "Fardin" , age : 26 , email : "b@gmail.com "};
    console.log(updateProfile(myProfile ,  {name : "Tanvir"}) )
    console.log(updateProfile(myProfile ,  {email : "toto@gmail.com"}) )
    console.log(updateProfile(myProfile ,  {age : 15}) )
}