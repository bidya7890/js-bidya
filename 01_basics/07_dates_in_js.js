// DATES

let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// console.log(typeof myDate)
//object

//to declare specific date

// let myCreateDate = new Date(2023,0,23)
// console.log(myCreateDate.toDateString())

//output is day(monday) automatically says, month(jan) starts from 0 , date(23), year(2023)

// let myCreateDate = new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString())

//output is1/23/2023, 5:03:00 AM

// Now for specific format look below

// let myCreateDate = new Date("2024-01-14")
// console.log(myCreateDate.toLocaleString())

//output is1/14/2024, 12:00:00 AM, here month starts from 1

// here the format is yyyy-mm-dd


// for indian standards 
let myCreatedDate = new Date("01-14-2024")
//console.log(myCreatedDate.toLocaleString())

//mm-dd-yyyy


//timestamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // the current time while booking

// console.log(myCreatedDate.getTime()) // the first created date u want to book a hotel

//want to change the date value in seconds as by defualt it is in milli seconds
// console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getDay())


console.log(newDate.getMonth()+1)

//`${newDate.getDay()} and the time  `

//let myOwnDate=newDate.toLocaleString('default',{
  //  weekday:"long",
    //day:"2-digit",
    
//})


//we define object inside in this locale string , default = internalisation , customisation
//with the dates
