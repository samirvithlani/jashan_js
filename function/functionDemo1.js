function test(){
    console.log("test called...")
}
test()
function add(a,b){
    console.log("add called..")
    console.log(a+b)
}
add(10,20)
add()

function average(a,b,c){
    return a+ b+ c
}
var ans = average(10,20,30)
console.log("ans=",ans)



//getData("",2,5) -->substring