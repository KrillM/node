const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// get /visitor => 기존 방명록을 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // SELECT * FROM visitor;
  Visitor.findAll().then(function(result){
    console.log("findAll(): ", result);
    console.log("0번 인덱스의 유저네임 ",result[0].username); // dataValues 생략 가능
    res.render('visitor', { data: result});
  });
};

exports.postVisitor = (req, res) => {

};

exports.deleteVisitor = (req, res) => {

};

exports.getVisitorById = (req, res) => {

};

exports.patchVisitor = (req, res) => {

};