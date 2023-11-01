const { Visitor }=require('../model');

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
    Visitor.create(data).then(function(result){
        res.send(result);
    }).catch(function(err){
        console.log(err);
        res.status(500).send("등록 오류 발생");
    })
}

exports.loginProcess = function(req, res){
    Visitor.findOne({
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
    Visitor.findOne({
        where: {
            id: req.body.id,
        }
    }).then(function(result){
        console.log("결과, ", result);
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

}

exports.profileDelete = function(req, res){

}