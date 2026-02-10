var user =[
    {id:1,name:"jashan",age:20},
    {id:2,name:"raj",age:22},
    {id:3,name:"jaya",age:20}
]
console.log(user)

var users2 = user.map((user)=>user.name)
console.log(users2)

var users3 = user.map((user)=>{
    return {
        id:user.id+1000,
        name:user.name.toUpperCase(),
        age:user.age
    }
})
console.log(users3)


var companies=[
    {
        name:"google",
        employees:["sundar","larry","abc"]
    },
    {
        name:"facebook",
        employees:["mark","zuker","meta"]
    }
]

console.log(companies)

//var googleEmp = companies.find((c)=>c.name=="google").employees
var googleEmp = companies.find((c)=>c.name=="google").employees.map((emp)=>emp.toUpperCase())
console.log(googleEmp)