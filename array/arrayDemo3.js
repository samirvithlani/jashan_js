var user =[
    {id:1,name:"jashan",age:20},
    {id:2,name:"raj",age:22},
    {id:3,name:"jaya",age:21}
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

var user4 = user.filter((u)=>u.age>21)
console.log(user4)


var companies=[
    {
        name:"google",
        employees:["sundar","larry","abc"],
        revenue:19,
    },
    {
        name:"facebook",
        employees:["mark","zuker","meta"],
        revenue:20
    }
]

//19 -->employees..
console.log(companies)

//var googleEmp = companies.find((c)=>c.name=="google").employees
var googleEmp = companies.find((c)=>c.name=="google").employees.map((emp)=>emp.toUpperCase())
console.log(googleEmp)

var countries =[
    {
        name:"india",
        states:[
            {
                name:"gujrat",
                cities:["Ahmedabad","Surat","rajkot"],
                population:6

            },
            {
                name:"MAh",
                cities:["Mumbai","Pune"],
                population:9

            }
        ]
    },
    {
        name:"UK",
        states:[
            {
                name:"London",
                cities:["myland"]
            },
            {
                name:"Oxford",
                cities:["abcd","pqr"]
            }
        ]
    }
]

//print all gujrat city in upper new array
//print all uk states in upper new array

//cities -> state population 7 cros >>