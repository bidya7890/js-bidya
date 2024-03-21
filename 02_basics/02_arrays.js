const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

//here arrays dont get merge instead it comes like 
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// like arrays under array, [ 'superman', 'flash', 'batman' ] it takes as a single array that is thor is 0 ironman is 1 and spiderman is 2 and the whole array of dc is 3rd element of the array

//spiderman is the 2rd element

//console.log(marvel_heros[3][1])

//output is flash


// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros);

//output is [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// SPREAD OPERATOR

// const all_new_heros=[...marvel_heros,...dc_heros]

//console.log(all_new_heros)
//output is [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

//const real_another_array=another_array.flat(Infinity)

//console.log(real_another_array)

//output is [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("bidya"))

//output is false , bidya is not an array

//to convert it into Array
console.log(Array.from("bidya"))

//output is [ 'b', 'i', 'd', 'y', 'a' ]

console.log(Array.from({name:"bidya"})) //intresting

//output is [ 'b', 'i', 'd', 'y', 'a' ]
//[]

// gives an empty array is it doesnt understand what to convert into array

let score1=100
let score2=200
let score3=300

// to covert these values into arrays
console.log(Array.of(score1,score2,score3))

//output is [ 100, 200, 300 ]























