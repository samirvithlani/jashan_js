function add()
{

}

//arrow
const add1 = ()=>{
    console.log('add 1')

}

function avg (a,b,c){
    return a + b + c
}

var ans = avg(10,20,30)
console.log(ans)

const avg1 = (a,b,c)=>{
    return a + b+ c
}
//single 
const avg2 = (a,b,c)=>a+b+c
var ans = avg1(10,20,30)
console.log(ans)
var ans = avg2(10,20,30)
console.log(ans)


const findMax = (no1,no2)=>no1>no2?no1:no2
console.log("max....",findMax(100,20))

