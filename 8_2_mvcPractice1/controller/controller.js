const {checkAccount} = require("../model/account.js")

exports.main = (req, res)=>{
    res.render("index.ejs");
};

exports.postAxios = (req, res)=>{
    const accountData = checkAccount(req, res);
    //res.send({checkAccount: accountData});

    console.log(req.body);
    if (req.body.name == accountData.name && req.body.password == accountData.password) {
        res.send({checkAccount: accountData, success:true, message: "success!", name:accountData.name });
    } else {
        res.send({checkAccount: accountData, success: false, message: "fail..." });
    }
};