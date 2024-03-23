const user ={
    username:"bidya",
    price:999,

   welcomeMessage: function(){
    console.log(`${this.username}, welcome to the website`)
    console.log(this)

}
// this.username == current context as in future the name can be change so for that we will be using whatever the name will change it will show the current username in the message

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//output is sam, as current context is changed

//console.log(this)

//this console gives empty braces {} 

// function chai(){
//     let username="bidya"
//     console.log(this.username) // undefined as this cannot be use under unction
// }
// chai()

const chai = () =>{
    let username="bidya"
    console.log(this.username)
    console.log(this) // this doesnt works under arrow function shows {} shoes empty value in empty braces

}


chai()

// ARROW FUNCTION

const addTwo =(num1,num2 ) => {
    return num1+num2
}

console.log(addTwo(2,3))

// another way to use arrow function that is implicit return , where we dont have to use parenthesis

// here we dont need to write return function

const addThree=(num1,num2) =>(num1+num2)

console.log(addThree(2,3))

// if we use parenthesis we dont need to write return statement 

//if we use curly braces we jave to write return statement

//explicity mein return statement

// to return an object

const addFour=(num1,num2) =>({username:"bidya"})

// here object is being returned bidya without the use of return statement as we are wrapping it with implicit way that is with parenthesis

console.log(addFour(2,3))

const myArray =[2,3,4,5]
myArray.forEach(()=>{})












