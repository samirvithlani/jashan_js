const test =()=>{
    var textelm = document.getElementById("text")
    console.log(textelm)
    console.log(textelm.innerText) //access
    //replace
    textelm.innerText="Hi"
    textelm.style.color="red"
    
}

const changeColor =()=>{
    const box = document.getElementById("box") //<div>...
    box.style.backgroundColor="pink"
}