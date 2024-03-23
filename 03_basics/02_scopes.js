//var c=300 // global scope 

let a =300
if (true){
    let a =10
    const b =20
    //var c = 30
   // console.log("inner a", a)
    
}// block scope



// avoid var to use 
// out of scope 
//console.log(a)
//console.log(b)
//console.log(c)


// nested scope

function one(){
    const username="bidya"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    //two()

}

//one()

if (true){
    const username ="bidya"
    if(username ==="bidya"){
        const website="youtube"
        //console.log(username+website)
    }
    //console.log(website)

}
//console.log(username)

///++++++++++++++++I N T E R E S T I N G
addone(5)
console.log(addone(5)) // here we can access as we are not storing the value of function in any variable
function addone(num){

    return num+1

}


console.log(addTwo(5)) // problem of hositing because now function is store in variable const thats why we cant accept it , as we are accessing it before declartion
const addTwo = function(num){
    return num+2
}



