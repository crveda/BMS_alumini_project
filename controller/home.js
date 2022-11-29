const path = require('path');
const ContactUs = require(path.join(__dirname,"..","model","contactUs.js"));
const User = require(path.join(__dirname,'..','model','User'));
const Events = require(path.join(__dirname,'..','model','events'));
const Jobs = require(path.join(__dirname,'..','model','jobs'));
const News = require(path.join(__dirname,'..','model','news'));
const notableAlumni = require(path.join(__dirname,'..','model','notableAlumni.js'));

exports.getHome = (req,res,next)=>{
    let eventHomeList = [];
    let newsHomeList = [];
    let jobHomeList = [];
    let count_4 = 0;
    Events.findAll()
    .then(events=>{
        count_4 = 0;
        for(let event of events){
            if(count_4 == 4){
                break;
            }
            eventHomeList.push(event);
            count_4 = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll()
    .then(jobs=>{
        count_4 = 0;
        for(let job of jobs){
            if(count_4 == 4){
                break;
            }
            jobHomeList.push(job);
            count_4 = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    })

    News.findAll()
    .then(news=>{
        count_4 = 0;
        for(let ne of news){
            if(count_4 == 4){
                break;
            }
            newsHomeList.push(ne);
            count_4 = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    })
    
    res.render("home.ejs",{
        jobHomeList:jobHomeList,
        eventHomeList:eventHomeList,
        newsHomeList:newsHomeList
    });
}

exports.getContactUs = (req,res,next)=>{
    res.render("contactUs.ejs");
}

exports.postContactUs = (req,res,next)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userName = req.body.userName;
    const msg = req.body.msg;

    ContactUs.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        userName:userName,
        msg : msg
    })
    .then(result=>{
        console.log("we recored ur resopnse ....we'll get to u soon");
        res.redirect("/home");
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getGallery = (req,res,next)=>{
    res.render("gallery.ejs");
}

exports.getAlumini = (req,res,next) =>{
    let List2020 = [];
    let List2019 = [];
    let List2018 = [];
    let ListNotable = [];
    let count_4 = 0;

    User.findAll({
        where:{
            batch:'2020'
        }
    })
    .then(users=>{
        count_4 = 0;
        for(let user of users){
            if(count_4 == 4){
                break;
            }
            List2020.push(user);
            count_4  = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    });

    User.findAll({
        where:{
            batch:'2019'
        }
    })
    .then(users=>{
        count_4 = 0;
        for(let user of users){
            if(count_4 == 4){
                break;
            }
            List2019.push(user);
            count_4  = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    });


    User.findAll({
        where:{
            batch:'2018'
        }
    })
    .then(users=>{
        count_4 = 0;
        for(let user of users){
            if(count_4 == 4){
                break;
            }
            List2018.push(user);
            count_4  = count_4 + 1;
        }
    })
    .catch(err=>{
        console.log(err);
    });

    notableAlumni.findAll()
    .then(users=>{
       for(let user of users){
        console.log(count_4)
        if(count_4 == 4){
            break;
        }
        ListNotable.push(user);
        count_4  = count_4 + 1;
       }
       res.render('alumini',{
        personListNotableAlumini:ListNotable,
        personList2020:List2020,
        personList2019:List2019,
        personList2020:List2018
    })
    })
    .catch(err=>{
        console.log(err);
    });    
}

exports.getContribution = (req,res,next)=>{
    res.render("contribution.ejs");
}