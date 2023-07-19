let Express =require("express");
let server=Express()
let bodyparser=require("body-parser")
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended:true}));
server.post("/process",function(req,res){
    let name=req.body.na
    let salery=parseInt(req.body.sal)
    let tax=0
    if (salery<1000){
        tax=0
    }else if(salery>=1000 && salery<2000){
        tax=salery*16/100
    }else if(salery>=2000){
        tax=salery*21/100
    }

    res.write("<h1> <center> SalerySlip of:")
    res.write(name)
    res.write("</centre><h1>")
    res.write("<br>Tax"+tax)

    res.end()
})

server.listen(3000)