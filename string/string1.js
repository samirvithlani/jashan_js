var data = "java"
console.log(data)
//index..
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])

//len
console.log("length. !!",data.length)

//assici value...

var x = data.charCodeAt(1) //a
console.log(x)
console.log("char...",String.fromCharCode(97))

//concat

var sname = "amit"
var reverseName = ""
console.log(sname)
//reverse....
for(let i=sname.length-1;i>=0;i--){
    
    reverseName = reverseName +sname[i]
}
console.log(reverseName)

//copy
var copyname = ""
for(let i=0;i<sname.length;i++){
    copyname+=sname[i]
}
console.log(copyname)

//uppercase- ->> without using upper functinp



