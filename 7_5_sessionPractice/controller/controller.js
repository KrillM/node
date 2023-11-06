exports.homePage = (req, res) => {
    const user=req.session.user;
    if(user){
        res.render("main", {isLogin: true, user: user})
    }
    else {
        res.render("main", {isLogin: false})
    }
}

exports.login = function(req,res){
    req.session.user='krille';
    res.send(`
        <script>
            alert('로그인 성공');
            location.href='/';
        </script>
    `)
}

exports.logout = function(req,res){
    req.session.destroy(function(err){
        res.send(`
        <script>
            alert('로그아웃 성공');
            location.href='/';
        </script>
        `)
    })
}