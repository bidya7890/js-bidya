// Objects in singleton, Constructor


//const tinderUser = new Object() // IT IS A SINGLETON OBJECT

//console.log(tinderUser)

// we get empty object that is {}

// const tinderUser={} // NON SINGLETON OBJECT
//console.log(tinderUser) 

//output is same  {}

const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

//output is { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Now objects k andar objects

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName:"bidya",
            lastName:"singh"
        }
    }
}

console.log(regularUser.fullname)

//output is { userFullName: { firstName: 'bidya', lastName: 'singh' } }
//console.log(regularUser.fullname?.userFullName.firstName)

//if the value fullname exists then give me the value , so to use this we use ?, or else we have to use if else condition

//To combine objects or to merge objects

const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}

//console.log(obj3)

//output is { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// same problems as arrays

const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3)

//{} optional parameter known as the target and obj1,obj2,obj4 acts as source, gives the exact value. Assign= it is known as object assign, returns modify target object with merging
// If we dont use {}, the values will go to obj1, so for better syntacally properly we should use {}
//output is { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// end at 11:09, video number 17



















