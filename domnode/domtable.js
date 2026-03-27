const table = document.getElementById("root")

const tableHader = document.createElement("thead")
const tableBody = document.createElement("tbody")
tableHader.innerHTML=""
const mainTr = document.createElement("tr")
table.appendChild(tableHader)
for(i=1;i<=10;i++){
    const mainTh = document.createElement("th")
    mainTh.innerHTML = i
    mainTr.appendChild(mainTh)
}
tableHader.appendChild(mainTr)

