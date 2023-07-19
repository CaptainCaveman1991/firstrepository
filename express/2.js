let nbs = require("express");
let server=nbs();

function qaFunction(request,response){
    response.send("it is very hot today")

};

server.get("/nbs",function(request,response){

    response.send("Hello world")
});

server.get("/qa1",qaFunction);
server.get("/qa2",qaFunction);

server.listen(3000);