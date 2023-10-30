const crews=require('../model/crews');

exports.homePage = function(req, res){
    res.render('main');
}

exports.signUpPage = function(req, res){
    res.render('sign-up');
}

exports.signUpProcess = function(req, res){
    crews.signUpProcess(req.body, ()=>{
        res.send({ result:true });
    })   
}

exports.loginProcess = function(req, res){
    crews.loginProcess(req.body, function(rows){
        console.log(rows[0]);
        if(rows.length > 0){
            res.send({ result: true, id:rows[0].id });
        }
        else{
            res.send({ result: false });
        }
    })
}

exports.profilePage = function(req, res){
    crews.getCrew(req.body.id, function(result){
        console.log("프로필", result);
        if(result.length>0){
            res.render("profile", {data:result[0]});
        }
        else{
            res.redirect('/sign-up');
        }
    })
}

exports.profileUpdateProcess = function(req, res){
    const data={
        ...req.body,
        id: req.params.id,
    }
    crews.updateProfileProcess(data, function(){
        res.send({result:true});
    })
}

exports.profileDelete = function(req, res){
    crews.deleteProcess(req.params.id, function(){
        res.send({result:true});
    })
}