const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// get /visitor => 기존 방명록을 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // SELECT * FROM visitor;
  Visitor.findAll().then(function(result){
    console.log("findAll(): ", result);
    // console.log("0번 인덱스의 유저네임 ",result[0].username); // dataValues 생략 가능
    res.render('visitor', { data: result});
  });
};

exports.postVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment
  }
  Visitor.create(data).then(function(result){
    console.log("결과", result);
    res.send(result);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("오류 발생")
  })
};

exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result){
    console.log("destroied? ", result);
    res.send({result: true})
  }).catch(function(err){
    console.log(err);
    res.status(500).send("오류 발생")
  })
};

exports.getVisitorById = (req, res) => {
  Visitor.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(result){
    console.log("findOne() is ", result);
    res.send(result);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("오류 발생")
  })
};

exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment
  }
  Visitor.update(data, {
    where: {
      id: req.body.id,
    }
  }).then(function(result){
    console.log("update() is ",result)
    res.send({result: true})
  })
};