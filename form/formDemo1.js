const submitHandler=(event)=>{
    event.preventDefault(); //prevent default actiion --> action.. it wont refresh pae...
    console.log("form subbmited..")
    const name = document.getElementById("name")
    console.log(name.value)

    const gender = document.getElementsByName("gender")
    console.log(gender)
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            console.log(gender[i].value)
        }
    }

}