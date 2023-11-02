const { Visitor, Crews} = require("../model");

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

exports.homePage = function(req, res){
    res.render('main');
}

exports.signUpPage = function(req, res){
    res.render('sign-up');
}

exports.signUpProcess = function(req, res){
    const data={
        nickname: req.body.nickname,
        password: req.body.password,
        name: req.body.name,
        introduction: req.body.introduction
    }
    Crews.create(data).then(function(result){
        res.send(result);
    }).catch(function(err){
        console.log(err);
        res.status(500).send("등록 오류 발생");
    })
}

exports.loginProcess = function(req, res){
  Crews.findOne({
        where: {
            nickname: req.body.nickname,
            password: req.body.password,
        }
    }).then(function(result){
        if(result != null){
            res.send({result: true, id:result.dataValues.id});
        }
        else{
            res.send({result: false});
        }
    }).catch(function(err){
        console.log(err);
        res.status(500).send("로그인 오류 발생");
    })
}

exports.profilePage = function(req, res){
    console.log("아이디 ",req.body.id);
    Crews.findOne({
        where: {
            id: req.body.id,
        }
    }).then(function(result){
        console.log("조회 ", result);
        if(result != null){
            res.render('profile', {data: result})
        }
        else{
            res.redirect('/sign-up');
        }
    }).catch(function(err){
        console.log(err);
        res.status(500).send("접근 오류 발생");
    })
}

exports.profileUpdateProcess = function(req, res){
    const data={
        nickname: req.body.nickname,
        password: req.body.password,
        name: req.body.name,
        introduction: req.body.introduction
    }
    Crews.update(data, {
        where: {
            // 어떨때는 body를 어떨때는 param을 인식하는데 그 기준이 무엇인지?
            id: req.params.id
        }
    }).then(function(result){
        console.log("수정 ", result);
        res.send({result: true});
    }).catch(function(err){
        console.log(err);
        res.status(400).send();
    })
}

exports.profileDelete = function(req, res){
  Crews.destroy({
        where:{
            id: req.params.id
        }
    }).then(function(result){
        console.log("삭제 ",result);
        res.send({result:true})
    }).catch(function(err){
        console.log(err);
        res.status(400).send();
    })
}