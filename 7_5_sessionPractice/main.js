const session = require('express-session')
const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', function(req, res){
    const user=req.session.user;

    if(user){
        res.render("main", {isLogin: true, user: user})
    }
    else {
        res.render("main", {isLogin: false})
    }
})

app.get('/login', function(req, res){
    req.session.user='krille';
    res.send(`
        <script>
            alert('로그인 성공');
            location.href='/';
        </script>
    `)
})

app.get('/logout', function(req, res){
    req.session.destroy(function(err){
        res.send(`
        <script>
            alert('로그아웃 성공');
            location.href='/';
        </script>
        `)
    })
})

app.listen(port, function(){
    console.log(`주소는 localhost:${port}`);
})