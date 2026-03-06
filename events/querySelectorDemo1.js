const getData =()=>{

    const id =document.getElementById("id1")
    const name = document.getElementsByName("name1")
    const class1 = document.getElementsByClassName("class1")

    console.log(id)
    console.log(name)
    console.log(class1)


    const qid  = document.querySelector("#id1")
    console.log(qid)
    const qclass = document.querySelector(".class1")
    console.log(qclass)
    const qname = document.querySelector("[name=name1]")
    console.log(qname)

    const ptag = document.querySelector("p")
    console.log(ptag)


}