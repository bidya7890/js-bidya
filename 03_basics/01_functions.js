


function sayMyName(){
console.log("B")
console.log("I")
console.log("D")
console.log("Y")
console.log("A")

}

//sayMyName()

//() known as execution or 

//out put is B
//I
//D
//Y
//A

function addTwoNumbers(number1,number2){
    console.log(number1+number2)

}

//addTwoNumbers(3,2)

//ouput is Nan (non a number if arguements are not given)
// Now output is 5

//addTwoNumbers(3,"4")
//output is 34

//addTwoNumbers(3,"a")
//output is 3a

//(number1,number2) parameters, when values are passed they are known as arguements

//addTwoNumbers(3,5)

//now i can save this value in variable

//const result=addTwoNumbers(3,5)
//console.log(result)
//result value is undefined

//here functions doesnt return the value to console



function addTwoNumbers1(num1,num2){
    // let result1=num1+num2 // inner scope
    // return result1

    return num1+num2
}

const result1=addTwoNumbers1(3,5) //outer scope
//console.log("result1: ", result1)

//output is result1:  8

function logInUserMessage(userName = "sam"){ // so that the value will never be undefined
    if (userName ===undefined || !userName ){
        console.log("please enter a username")
        return // not to go the the next scope that is not to return just logged in so the output will be please ebter a username , undefined

    }
    return`${userName} just Logged In` 
}
// (logInUserMessage("bidya"))

//nothing is returned as we didnt write console 

//console.log(logInUserMessage("bidya"))

//output is bidya just logged in

//console.log(logInUserMessage(""))

//output is just logged in

//console.log(logInUserMessage("bidya"))
// if nothing is passed we get value as undefined

function calculateCartPrice(val1,val2,...num1){

    return num1

}
console.log(calculateCartPrice(200,2000,3000))

// ... rest operator that is how many values are there give them all in one bundle 
//output is [ 200, 2000, 3000 ]

//fucntion mein multiple values passed by rest operator

//after using val1,val2 before num1 and rest operator he values 200 and 2000 are stored in those varaibles hence 3000 is only returned

//++++++++++++++++++++++++ V E R Y I M P O R T A N T++++++++++++++++++++++++++++++++++++++++PLEASE NOTE IT
const user ={
    userName: "bidya",
    price:199
}

//TO PASS THE OBJECT IN FUNCTION

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.price}`)


}



//handleObject(user)

handleObject({
    userName:"sam",
    price:399

})

const myNewArray=[200,300,400]
// make a function who accepts array and returns its 2nd value

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
//output is 300

console.log(returnSecondValue([200,300,400]))
//output is same


















