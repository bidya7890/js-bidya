//+++++++++++++++++++++++++//

// Their are two types of memory STACK AND HEAP

// Stack ( Primitive), Heap (Non - primitive)

// Stack memeory when used we get the copy of the variable

// when object is used in heap we get the reference value , any changes will change the original value


//example

// let myYouTubename="bidya.com"


// // this will go in stack 

// let anothername= myYouTubename

// anothername= "chaiaurcode"
// console.log(myYouTubename)
// console.log(anothername)

let userOne ={
    email:"user@gooogle.com",
    upi:"user@ybl.com"
}

let userTwo = userOne

userTwo.email= "bidya@google.com"
console.log(userOne.email)
console.log(userTwo.email)
