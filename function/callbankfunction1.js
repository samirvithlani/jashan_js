
//function as object...
const demo=()=>{
    console.log("demo called..")
    return 100
}

//var x = demo()
var x = demo
console.log(x)
var ans = x()
console.log(ans)
