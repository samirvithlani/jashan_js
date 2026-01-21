//let is having block scope
//const is having block scope
let a = 20
console.log("value of a outside block = ",a)

{
    console.log("value of a inside block = ",a)
    let b = 22
    console.log("value of b inside block = ",b)
}
console.log("value of b outside block = ",b)