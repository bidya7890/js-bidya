// Immediately  Invoked Function Expressions (IIFE)

(function chai () {
    //name iffe
    console.log('DB CONNECTED')

})();


// () this is for function defination , () this is for execution call 

//global scope k pollution k wajah sai we use iife so that value of global scopes doesnt pollutes the scope of our function
// +++++++++++++++ important note ::::we have TO USE ; SO THAT WE JS CAN KNOW WHERE TO STOP THE EXECUTION OF CURRENT CONTEXT IF WE ARE USING IIFE.

//Now to write this in arrow function

(   (name)=> {
    //unnamed iffe with parameter passing
    console.log(`DB IS CONNECTED ${name}`)
}) ('bidya')

// writing two iffe ek sath pehle iffe ko semicolon ; sai khatam karke next iffe likhna hai


