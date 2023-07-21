let Express=require("express")
let server=Express()
let MySql=require("mysql")

let db=MySql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nbs"
})
db.connect()

server.get("/",function(req,res){
    res.render("homepage.ejs")
    res.end()
})

server.get("/allemploymeeslist",function(req,res){
    db.query("select * from emplyees",function(eer,records){
        res.render("employeeslist.ejs",{emplyee:records})
        res.end
    })
})

server.get("/departments",function(req,res){
        db.query("Select distinct department from employees",function(err,records){
            res.render("departments.ejs",{ deptName:records})  
            res.end()

     })
 })

server.listen(3000)
    