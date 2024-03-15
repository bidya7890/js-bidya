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

myArr.unshift(9)
console.log(myArr)

// 9 is inserted at the start of the array, value gets shifted like suppose there are 10,000 values , optimisation is less

myArr.shift()

console.log(myArr)

// 9 is removed from the beggining of the array

console.log(myArr.includes(9))

// in this array 9 is included or not

console.log(myArr.indexOf(9))

// value is -1 as 9 is not in the array

console.log(myArr.indexOf(3))

//index is 3

const newArr = myArr.join()

// adds all the element in the array as string

console.log(newArr)

//output is 0,1,2,3,4,5 , datatype is string type

console.log(typeof newArr)


// slice , splice (IMPORATANT)

console.log("A", myArr)

//output is A [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)



// 1 and 2 is included but 3 is excluded

// slice returns a section of array

console.log(myn1)
//output is [ 1, 2 ]

console.log("B", myArr)

// output is B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3)
console.log("C",myArr)

//Here the original value is changed as output is C [ 0, 4, 5 ]
console.log(myn2)
//output is [1,2,3]

// here in splice last number is included, and yes components of arrays get manipualted hence should use slice instead of splice

































