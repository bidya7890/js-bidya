let score = "33abc"
console.log(typeof score)
console.log(typeof(score))
 let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber );
//output is string,string,number,Nan


let score1=null
console.log(typeof score1)
console.log(typeof (score1))
let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//output is object,object,number,0

let score2=undefined
console.log(typeof score2)
console.log(typeof (score2))
let valueInNumber3=Number(score2)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

//output is undefined,undefined,number,Nan

//"33" =>33
//"33abc" =>Nan
//true => 1, false =>0
//bidya=>Nan


let isLoggedIn= 1;
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn)
//output is true

let isLoggedIn1=""
let boolenIsLoggedIn1= Boolean(isLoggedIn1)
console.log(boolenIsLoggedIn1)
//output is false

let isLoggedIn2= "bidya"
let boolenIsLoggedIn2=Boolean(isLoggedIn2)
console.log(boolenIsLoggedIn2)
//output is true

//1=true;
//0=>false
//" "=>false
//"bidya"=>true

let someNumber=33;
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
//output is 33 (in string), string



// OPERATIONS //

// let value =3
// let negvalue= -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2*3)
//console.log(2%3)

//Tricks//

// let str1="hello"
// let str2=" bidya"
// let str3=str1+str2
// console.log(str3)
//OUTPUT IS hello bidya

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+"2")
// console.log("1"+2+2)
// console.log(2+2+"1")

//output is 12,12,12,122,41
// console.log(true)
// console.log(+true)
//output is true,1
//console.log(true+) //invalid js wont recognise

// console.log(+"")
//output is 0

// let gameCounter =100
// gameCounter++
// console.log(gameCounter)

//output is 101

// let gameCounter1=100
// ++gameCounter1
// console.log(gameCounter1)

//output is 101







