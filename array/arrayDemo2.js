var users = ["raj","parth","samir","amit","sumit","kunal"]
console.log(users)
//users.splice(1,1) //1st index delete 1 element
//users.splice(2,3) //2nd index delete 3 element
//users.splice(1,0,"kunal") //1st index delete 1 element
users.splice(2,1,"kunal","ajay","neha") //1st index delete 1 element
console.log(users)



//array
var marks =[22,23,24,21,20,21,24]
//#if any subject marks is >=24 return or print true 
//#if all subject marks is >=24 return or print true

var flag = marks.some((m)=>{
    return m>=24
})
var flag = marks.some((m)=>m>=24)
console.log(flag)
var flag2 = marks.every((m)=>m>=20)
console.log(flag2)



var users = ["raj","parth","samir","amit","sumit","kunal"]
//upperuser = ["RAJ",....]


//map will return all elements 
var upperuser = users.map((u)=>u.toUpperCase())
console.log(upperuser)


//loop ---> name len >4 new array push...

var filtuser = users.filter((u)=>u.length>4)
console.log(filtuser)


var sales= [100,200,222,345,679,890,778,1000,890,770,545]

//new sales with discount --> 300 up 10% dissount ---> new array sales

var s = sales.find((s)=>s==200)
console.log(s)

