const {checkAccount} = require("../model/user.js")

exports.main = (req, res)=>{
    res.render("index2.ejs");
};

exports.postAxios = (req, res)=>{
    const accountData = checkAccount(req, res);
    console.log(req.body);
    
    if (req.body.name == accountData.name1 && req.body.password == accountData.password1) {
        res.send({checkAccount: accountData, success:true, message: "success!", name:accountData.nickname1 });
    }
    else if(req.body.name == accountData.name2 && req.body.password == accountData.password2){
        res.send({checkAccount: accountData, success:true, message: "success!", name:accountData.nickname2 });
    } 
    else if(req.body.name == accountData.name3 && req.body.password == accountData.password3){
        res.send({checkAccount: accountData, success:true, message: "success!", name:accountData.nickname3 });
    }
    else {
        res.send({checkAccount: accountData, success: false, message: "fail..." });
    }
};