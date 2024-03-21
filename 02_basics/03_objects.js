// To declare objects there are two ways that is litreal and constructor 

//singleton is made only from constructor 

//object litreals , to declare object
//constructor Object.create 

const mySym=Symbol("key1")

const JsUser={
    name:"bidya",
    "full name":"bidyashree",  //no way to access this with dot value
    [mySym]:"mykey1",
    age:18,
    location:"Bhubaneswar",
    email:"bidya@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]

}
//myArray=["h","i"]

//myArr[1]

// while in obejcts we can define through keys or through values

// to access object

console.log(JsUser.email)
console.log(JsUser["email"])

//as email is taken as string in 2nd case we have to type it as string

//bidya@gmail.com
//bidya@gmail.com

// cannot access full name with dot console.log(JsUser."full name")
//console.log(JsUser["full name"])



// make a symbol key1 and add it in the object

//console.log(JsUser.mySym) undefined

//output is mykey1

//but it doesnt takes datatype as symbol

//console.log(JsUser[mySym])

//gives output as string but it should have given the datatype as string 

// to use it as SYMBOL use it as [mySym]:"mykey1"

JsUser.email="bidya"

JsUser.email="bidya@chatgpt.com"

//to change the values


// now to lock the values

//Object.freeze(JsUser)

JsUser.email="bidya@microsoft.com"

//console.log(JsUser.email)

//output is bidya@chatgpt.com, the value didnt get overwrite as we locked the value of the object by using freeze

//console.log(JsUser)


//functions 
JsUser.greeting=function(){

    console.log("Hello JS User")
}

//console.log(JsUser.greeting)

//OUTPUT IS UNDEFINED

//console.log(JsUser.greeting())

//output gives error that it is not yet function as we had use the freeze function to lock the values of the object

//console.log(JsUser.greeting)

//output is function anonymous , as function is not executed

//to refer the name of the oject in this function

JsUser.greeting2=function(){

    console.log(`Hello JS User,${this.name}`)


}

// same object ko reference karna hai  like mujhe JsUser object k mein jeetna kuch value hai uska janna hai, we use this

console.log(JsUser.greeting())
console.log(JsUser.greeting2())





