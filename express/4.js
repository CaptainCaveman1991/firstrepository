let nbs =require("express");
let server=nbs()

function homePage(req,res){

res.write("<h1> <centers> Welcome to My Home Page <centers> <h1>")
res.write("<b> List of departments <b><br>")
res.write("<A href='http://127.0.0.1:3000/department/101'> Human Resources Department <a> <br>")
res.write("<A href='http://127.0.0.1:3000/department/102'> IT Department <a> <br>")
res.write("<A href='http://127.0.0.1:3000/department/103'> Sales <a> <br>")
}
function employeesList(req,res){

    if (req.params.dept==101){
        departmentName="Human Resources Department"
    }
    if (req.params.dept==102){
        departmentName="IT Department"
    }
    if (req.params.dept==103){
        departmentName="Sales Department"
    }

    res.write("<h1> <centre>")
    res.write(departmentName)
    res.write("<h1> <centre>")
}

server.get("/",homePage)
server.get("/department/:dept",employeesList)

server.listen(3000)