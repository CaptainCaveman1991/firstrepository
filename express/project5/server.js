let Express=require("express")
let server=Express()
let MySql=require("mysql")

let db=MySql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nbs"
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


server.get("/addEmployee",funcion(re,res){
        res.render("Forms.ejs")

})

server.get("/employeesOfDepartment/:dept",function(req,res){
    let sql1="select * from employees where department='"+req.params.dept+"'"
    db.query(sql1,function(err,records){
    res.render("employeeslist.ejs",{employees:records})
    res.end()
})
})

server.get("/deleteEmployee/:empno",function(req,res){
    let deleteSQL="delete from employees where empno="+ req.params.empno
    db.query(deleteSQL,function(err,data){

db.query("select * from employees",function(err,records){
res.render("employeeslist.ejs",{employees:records}
res.end()

})
})
})

server.get("/",function(req,res){
})
})
