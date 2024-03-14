// const score= 400
// console.log(score)
//output is 400
// to explicit define datatype as number

// const balance  = new Number(100)
// console.log(balance)

//output is [Number :100]

// console.log(balance.toString().length)

//output is string and has 3 characters

// console.log(balance.toFixed(2))

//output is 100.00, for getting precision value upto two decimal values . generallu used in ecommerce website like gst calculation

// const otherName= 123.8966

// console.log(otherName.toPrecision(3))

// toPrecision() it gives  number of significant digits. Must be range 1-21, inclusive.
// It returns String

//for 23.8966 output is 23.9 , for 123.8966  output is 124
// according to the given precision value it focuses on those 3 digit and returns in those many digits

// const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// to know the number of 0 in US standards
//output is 1,000,000

// console.log(hundreds.toLocaleString('en-IN'))
//to know the numbers of 0 in Indian standards 
//output is 10,00,000

//++++++++++++ MATHS ++++++++++

// console.log(Math)
//Its an object with number of properties

// console.timeLog(Math.abs(-4))

//giving positive value, output is-4

// console.log(Math.round(4.3))

//output is 4

// console.log(Math.ceil(4.2))
//selecting the top value rather than rounding it to 4 it will give the upper value that is 5

// console.log(Math.floor(4.9))

// it will give minimum value that is 4

// console.log(Math.min(4,5,6))

//output is 4

// console.log(Math.max(4,5,6))

//output is 6

//important

// console.log(Math.random())

// it will always give value between 0 and 1

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)

//to get value between 10 and 20 and the value should be atleast minimum so plus min is added that is plus 10 is added


// important : 
//console.log(Math.floor(Math.random()*(max-min +1))+min)

























