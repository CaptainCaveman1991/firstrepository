console.log("Hello World")

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017").then(() => {


    console.log("connected")

    carModel.create({
        carReg:"KI579IL",
        carAge:14,
        carMake:"Ford",
        carModel:"Fiesta",
        carColour:"Silver"
    }).then(()=>{

        carModel.find({}).then(res=>{
            for(let car of res){
                console.log(car);
            }
            
            mongoose.disconnect()

        })
    })

}).catch(err => {
    console.log("there was an error")
    console.log(err)

})

const   carSechema = new mongoose.Schema({
    carReg:String,
    carAge:{type:Number, required:true},
    carMake:String,
    carModel:String,
    carColour:String
})

const carModel = mongoose.model("car", carSechema);







