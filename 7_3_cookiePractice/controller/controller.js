const cookieConfig = {
    // httpOnly: true, 
    maxAge: 100000,
};

exports.homePage = (req, res) => {
    res.render("index");
}

exports.setCookie = function(req,res){
    res.cookie("key1", "value1", cookieConfig);
    res.send(req.cookies)
}