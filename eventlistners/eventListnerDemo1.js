const btn = document.querySelector("#btn")
console.log(btn)
btn.addEventListener("click",()=>{
    alert("button clicked..")
})
btn.addEventListener("mouseleave",()=>{
    btn.style.background="red"
})
btn.addEventListener("mouseenter",()=>{
    btn.style.background="green"
})
