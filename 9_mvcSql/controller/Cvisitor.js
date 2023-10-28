const visitor = require("../model/Visitor.js");

exports.homePage = (req, res) => {
    res.render("index");
}

exports.visitor = (req, res) => {
    // const data = visitor.getVisitors();
    // res.render("visitor", {data: data});

    visitor.getVisitors((rows)=>{
        res.render("visitor", {data: rows});
    })
}