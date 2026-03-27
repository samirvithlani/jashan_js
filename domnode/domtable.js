const table = document.getElementById("root")

const tableHader = document.createElement("thead")
const tableBody = document.createElement("tbody")
tableHader.innerHTML=""
const mainTr = document.createElement("tr")
table.appendChild(tableHader)
table.appendChild(tableBody)
const th1 = document.createElement("th")
th1.innerHTML="X"
mainTr.appendChild(th1)
for(i=1;i<=15;i++){
    const mainTh = document.createElement("th")
    mainTh.innerHTML = i
    mainTr.appendChild(mainTh)
}
tableHader.appendChild(mainTr)



for(let row =1;row<=15;row++){
    const tr = document.createElement("tr")
    const sideHeader =document.createElement("th")
    sideHeader.innerHTML = row
    tr.appendChild(sideHeader)

    //mul
    for(let col=1;col<=15;col++){
        const td = document.createElement("td")
        td.innerHTML = row * col;
        tr.appendChild(td)
    }
    tableBody.appendChild(tr)
}