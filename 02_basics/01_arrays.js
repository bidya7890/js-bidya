// array

const myArr= [0,1,2,3,4,5]

const myHeros=["shaktiman","naagraj"]


const myArr2= new Array(1,2,3,4)
// array is an object, collection of multiple iterms in single variable

//js arrays are resizable

//js can hace mix type datatype

// arrays cannot be accessed by arbitary elements

// to access value

console.log(myArr[0])

//zero based indexing

//when we do javascript array-copy operations it creates shallow copies, rather than deep copies

// shallow copies of an object is a copy whose properties hare the same references of the source object from whch the copy was made.
// hence when u change either the source or the copy, you may also cause the other obeject to change to change too

// where as in deep copy , the source copy and deep copy are completely independent

// the deep copy of an object is a copy whose properties do not share the same reference as those of the source object from which the copy was made.

// ARRAYS METHOD

myArr.push(6)
console.log(myArr)

//output is 1,2,3,4,5,6 
// 6 is pushed to the original array

myArr.pop() // to remove the last value of the array
console.log(myArr)

















