const { Crews } = require("../model");

exports.loginPage = function(req, res){
    res.render('login');
}

exports.signUpPage = function(req, res){
    res.render('sign-up');
}

exports.signUpProcess = function(req, res){
    Crews.create(req.body).then(function(result){
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
        if(result){
            req.session.crew=result.id
            res.send({result: true, id:result.id});
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
    if(!req.session.crew){
        res.redirect('/crew/login');
        return false;
    }
    Crews.findOne({
        where: {
            id: req.session.crew,
        }
    }).then(function(result){
        console.log("조회 ", result);
        if(result){
            res.render('profile', {data: result})
        }
        else{
            res.redirect('/crew/login');
        }
    }).catch(function(err){
        console.log(err);
        res.status(500).send("접근 오류 발생");
    })
}

exports.profileUpdateProcess = function(req, res){
    Crews.update(req.body, {
        where: {
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

exports.logoutProcess = function(req, res){
    if(req.session.crew){
        req.session.destroy(function(err){
            res.send({ result: true })
        })
    }
    else{
        res.send({ result: false })
    }
}