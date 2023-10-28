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

// 방명록 등록
exports.postVisitor = (req, res) => {
    console.log("req.body", req.body);
    visitor.insertVisitor(req.body, (id)=>{
        console.log("controller postVisitor", id);
        res.send({
            ...req.body, id
        });
    });
}

// 방명록 수정

// 방명록 삭제