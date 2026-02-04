var users = ["raj","parth","samir","amit","sumit","kunal"]
console.log(users)

console.log(users[0])
console.log(users[1])

// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }


//manuplate
users.push("ajay")
console.log(users)
var removedelm = users.pop()
console.log("removing...",removedelm)
console.log(users)

users.unshift("priyanka")
console.log(users)
var removedelm = users.shift()
console.log("removing...",removedelm)
console.log(users)