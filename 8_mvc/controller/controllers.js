const {getCommentInfos} = require("../model/comment.js")

exports.main = (req, res)=>{
    res.render("index.ejs");
};

exports.comments = (req, res)=>{
    const commentData = getCommentInfos();
    res.render("comments.ejs", {
        getCommentInfos: commentData
    });
};