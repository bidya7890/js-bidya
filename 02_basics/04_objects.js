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

//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3)

//{} optional parameter known as the target and obj1,obj2,obj4 acts as source, gives the exact value. Assign= it is known as object assign, returns modify target object with merging
// If we dont use {}, the values will go to obj1, so for better syntacally properly we should use {}
//output is { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// end at 11:09, video number 17

//continuation of video

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {}
]

users[1].email
//console.log(tinderUser)

//to give the values of all the keys


//console.log(Object.keys(tinderUser))

// output is[ 'id', 'name', 'isLoggedIn' ]

// to know the values
//console.log(Object.values(tinderUser))

//output is [ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser))

// It gives keys and its respective values in nested arrays as follows
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//output is true, sometimes in objects there are nested loops, and to get a certain values we hae to go through from these nested loops to get a value hence to check weather that value exists or not we check with the hasOwnProperty

// objects discssuion == api discussion

//destructuring of Object

const course ={

    coursename:"js in hindi",
    price : "999",
    courseInstructor :"bidya"
}

//course.courseInstructor 

//simple way as below

const{courseInstructor}= course
console.log(courseInstructor)
//output is bidya

//Similarly

const{courseInstructor:ins}=course
console.log(ins)

//output is bidya as now it is destructured


// const navbar=({company})=>{

// }

// navbar(company="bidya")


// json looks like {}

// {
//     "name":"bidya",
//     "coursename":"js in hindi",
//     "price" :"free"

// }
// in object we give name but in json they are simple datas key value type where both are treated as strings

//sometimes we get apis in object form

[
    {},
    {}
]










 





























