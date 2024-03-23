//var c=300 // global scope 

let a =300
if (true){
    let a =10
    const b =20
    //var c = 30
    console.log("inner a", a)
    
}// block scope



// avoid var to use 
// out of scope 
console.log(a)
//console.log(b)
//console.log(c)
