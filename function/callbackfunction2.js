const calling = ()=>{
    console.log("calling called...")
}

const driver =(cb)=>{
    console.log("diver called...")
    console.log(cb)
    cb()
}

// driver(100)
// driver("java")
// driver(false)
driver(calling)