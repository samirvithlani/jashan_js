//js file block..
//var is having global scope
var a = 100
console.log("value of a outside of block ",a)

{
    console.log("value of a inside of block ",a)
    var b = 200
    console.log("value of b inside of block ",b)
}

console.log("value of b outside of block ",b)

