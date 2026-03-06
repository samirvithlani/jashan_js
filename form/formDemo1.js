const submitHandler=(event)=>{
    event.preventDefault(); //prevent default actiion --> action.. it wont refresh pae...
    console.log("form subbmited..")
    const name = document.getElementById("name")
    console.log(name.value)

}