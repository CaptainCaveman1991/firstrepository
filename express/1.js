let nbs = require("express");

let server=nbs();

function doSomething(a,b){


    console.log("hello world")
};

function manchester(request, response){

    response.send("it is very hot today")
}

server.get("/nbs",doSomething);
server.get("/qa",manchester);

server.listen(3000);

