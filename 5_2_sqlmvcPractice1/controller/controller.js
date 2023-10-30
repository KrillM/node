const crew = require("../model/datas.js");

exports.homePage = (req, res) => {
    res.render("main.ejs");
}

exports.crew = (req, res) => {
    crew.getCrews((rows)=>{
        res.render("crew", {data: rows});
    })
}

exports.addCrew = (req, res) => {
    console.log("req.body", req.body);
    crew.addCrew(req.body, (id)=>{
        console.log("controller addCrew", id);
        res.send({
            ...req.body, id
        });
    });
}

exports.deleteCrew = (req, res) => {
    console.log(req.params);
    crew.deleteCrew(req.params.id, (result)=>{
        res.send({result: result});
    });
}

exports.logInHaranMariya = (req, res) => {
    console.log("req.body", req.body);
    crew.checkCrew(req.body, (result)=>{
        if(result.length==0){
            res.send({success: false, message: "fail..."});
        }
        else{
            res.send({success:true, message: "success!", name:req.body.name});
        }
    });
}