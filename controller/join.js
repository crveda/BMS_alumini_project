const path = require('path');
const User = require(path.join(__dirname,"..","model","User.js"));
const bcrypt = require('bcrypt');
exports.getJoin = (req,res,next)=>{
    res.render("join.ejs");
}

exports.postLogin = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    const userName = req.body.userName;
   User.findAll({
        where:{
            userName : userName
        }
   })
   .then(users=>{
        console.log(users.length);
        bcrypt.compare(password,users[0].password)
        .then(match=>{
            console.log(match);
            if(match){
                req.session.isLoggedIn = true;
                req.session.userName= users[0].userName;
                req.session.email = users[0].email;
                req.session.userId = users[0].id;
                req.session.save(err=>{
                    if(err==null){
                        console.log("loged in sucesfully");
                        return res.redirect("/home");
                        // later to home pages
                    }
                })
            }else{
                console.log("check password ");
                return res.redirect("/join");
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

exports.postSignup = (req,res,next)=>{
    const fullName = req.body.fullName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const field = req.body.field;
    const profilePic =req.body.profilePic;
    const occupation = req.body.occupation;
    const facebookLink = req.body.facebookLink;
    const twitterLink = req.body.twitterLink;
    const googlePlusLink = req.body.googlePlusLink;
    const linkedinLink = req.body.linkedinLink;
    const batch = req.body.batch;
    let cryptedPassword = "";
    let  teacher , student ;
    if(!profilePic){
        console.log('upload the proper profilePic')
    }else{
        if (field == 'teacher'){
            teacher = true;
            student = false;
        }else{
            teacher = false;
            student = true;
        }
        if(password == confirmPassword){
            bcrypt.hash(password,12)
            .then(encryptedPassword =>{
                cryptedPassword = encryptedPassword;
                User.findAll({
                    where:{
                        userName : userName
                    }
                })
                .then(users=>{
                    if(users.length == 0){
                        User.create({
                            userName : userName,
                            fullName:fullName,
                            email:email,
                            password:cryptedPassword,
                            teacher : teacher,
                            student:student,
                            profilePic : profilePic.path,
                            ccupation :occupation,
                            facebookLink :facebookLink,
                            twitterLink : twitterLink,
                            googlePlusLink : googlePlusLink,
                            linkedinLink : linkedinLink,
                            batch : batch
                        })
                        .then(result=>{
                            console.log("user is created succesfully");
                            return res.redirect("/join");
                        })
                    }else{
                        console.log("user already exit pls login");
                        return res.redirect("/join");
                    }
                })
            })
            .catch(error=>{
                console.log(error);
            })
        }else{
            console.log("password is not crt...re enter it -- ");
            res.redirect("/join");
        }
    }
}

exports.getLogOut= (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect("/home");
    })
}
