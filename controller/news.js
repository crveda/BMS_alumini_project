const path = require('path');
const News = require(path.join(__dirname,"..","model","news.js"));
const User = require(path.join(__dirname,"..","model","User.js"));

exports.getNewsFeed = (req,res,next)=>{
    News.findAll()
    .then(news=>{
        res.render("news.ejs",{
            newsList : news,
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getRegisterNews = (req,res,next) =>{
    // User.findAll({
    //     where:{
    //         userName : req.session.userName
    //     }
    // })
    // .then(users=>{
    //     res.render("postNews.ejs",{
    //         hostName : users[0].userName
    //     });
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    console.log(req.session.userName);
    res.render("postNews.ejs",{
        hostName : req.session.userName
    })
}

exports.postRegisterNews = (req,res,next)=>{
    const posterUrl = req.body.posterUrl;
    const title = req.body.title;
    const breif = req.body.breif;
    const link = req.body.link;
    console.log(posterUrl,title,breif,link);
    News.create({
        headings:title,
        describe:breif,
        link : link,
        posterUrl:posterUrl,
        userId : req.session.userId
    })
    .then(result=>{
        console.log("news is register succesfully");
        res.redirect("/News_feed");
    })
    .catch(err=>{
        console.log(err);
    })
}

