// primitive (call by value) changes in the copy

// 7 categories: Strings , Number,Boolean, null,undefined,Symbol,BigInt

// Reference (Non primitive)

// Arrays, Objects, Functions

//Js is dynamically typed language

const score=100
const scoreValue=100.3
const isLoggedIn= false
const outSideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')
//return type symbol

console.log(id===anotherId)
//output is false as they are different even if the value is different

const bigNumber=348888888878348732784n
//n is used to use big Int


//References (Non primitive)

//Arrays, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
//arrays

    let myObj={
    name:"bidya",
    age:22,
    }
//objects

//functions as variables

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof bigNumber)
console.log(myFunction) // functions returns object functions

// arrays and objects returns function 











