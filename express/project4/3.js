let cookieparser=require("cookie-parser")
let nbs = require("express")
let server=nbs()

server.set("view engine","ejs")
server.use(cookieparser())


server.get("/",function(req,res){
        res.render("homepage.ejs")
            res.end()
})

server.get("/selectRange/:number",function(req,res){
        let num= req.params.number
            res.cookie("timestable",num)
                res.render("range.ejs")
                    res.end()
})

server.get("/timestable/:number",function(req,res){
        res.cookie("range",req.params.number)
            res.render("sure.ejs")
                res.end()
})

server.get("/sure",function(req,res){
        let numT= req.cookies.timestable
            let numR= req.cookies.range
                res.render("timestable.ejs",{Tnum:numT,R:numR})
                    res.end()
})

server.listen(3000)