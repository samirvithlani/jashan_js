const root = document.getElementById("root")
console.log(root)
const nameh1 = document.createElement("h1")
nameh1.innerHTML="Hello"
root.appendChild(nameh1)


var users = ["ram","shyam","amit","sumit","ajay"]
for(let i=0;i<users.length;i++){

    const nameh2 = document.createElement("h2")
    nameh2.innerHTML=users[i]
    root.appendChild(nameh2)
}