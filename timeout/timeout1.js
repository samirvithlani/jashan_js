
console.log("load")
const callafter3  =()=>{
    console.log("after 3 seocnds")
}

// callafter3()
setTimeout(()=>{
    callafter3()
},3000)

var count =0;
const id = setInterval(()=>{
    count++
    console.log("here...",count)
    if(count>5){
        clearInterval(id)
    }
},1000)