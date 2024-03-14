const name="bidya"
const repoCount=50

//console.log(name+repoCount+"Value")

//outdated



// `` it is knows as backtiks used for string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// ${} eske andar we can put variable
 // to declare string

 const gameName = new String('bidyahc-hc-hc')

 //new  used for using objects in javascript

 console.log(gameName[0])
 //output is b

 // Strings gets into key value pair 0: "b",1: "i".... length =7

 // to access prototype method
 //Using the prototype Property​​ The JavaScript prototype property allows you to add new properties to object constructors
 //Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
 console.log(gameName.__proto__)

 // we get empty object , outout is {}

 console.log(gameName.length)

 //output is 7

 console.log(gameName.toUpperCase())

 // toUpperCase() it is a fucntion

 console.log(gameName.charAt(2))

 // output is d

 // I want to where is the position of d

 console.log(gameName.indexOf('d'))

 //output is 2

 //store in variable and divide the game name into substring


 const newString= gameName.substring(0,4)

 //substring i have to give a starting number and an ending number

 console.log(newString)

 //output is bidy , three characters came that is 0,1,2 and 3 . 4th one is excluded

 const anotherString= gameName.slice(-8,4)
 console.log(anotherString)

 // in slice we can give negative value

 //output is dy 

 // string was bidyahc-hc , if we -8 backwards (going reverse) we get D and now to traverse 4 from front we get y

// substring wont take negative value only slice can take


// trim and replace method

const newString1 = "   bidya   "

console.log(newString1)
console.log(newString1.trim())

//trim is used for new lines characters and white space, there are trim start  (str.trim()) and trim end (trimEnd())

//REPLACE
const url="https://bidya.com/bidya%20aditya"

url.replace('%20','-')
console.log(url.replace('%20','-'))

//output is https://bidya.com/bidya-aditya

//includes check weather the given character or word is there or not

console.log(url.includes("bidya"))

//output is true

console.log(gameName.split('-'))

//output is [ 'bidyahc', 'hc', 'hc' ]













