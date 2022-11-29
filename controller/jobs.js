const path = require('path');
const Jobs = require(path.join(__dirname,"..","model","Jobs.js"));

exports.getJob = (req,res,next)=>{
    console.log("is logged in is "+req.session.isLoggedIn)
    let branchesApplyList = [];
    const jobsCount = {}
    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    console.log(jobsCount);

    Jobs.findAll()
    .then(jobs=>{
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        jobsCount["all"] = jobs.length;
        console.log(branchesApplyList);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err)
    })

}

exports.getPostAJob = (req,res,next)=>{
    res.render("postJob.ejs");
}

exports.postPostAjob = (req,res,next)=>{
    const companyName = req.body.companyName;
    const package = req.body.package;
    const field = req.body.field;
    const experence = req.body.experence;
    const workFromHome = req.body.workFromHome.toLowerCase();
    const branchesApply = req.body.branchesApply;
    const posterUrl = req.body.posterUrl;
    const shift  = req.body.shift.toLowerCase();
    const location = req.body.location;
    const msg = req.body.msg;
    const userId = req.session.userId;
    const linkRegister = req.body.linkRegister;
    let CS=false,IS=false,EC=false,EE=false,Civil=false,Mech=false,BioTech=false,Others=false;
    let fromHomeBoolean = false;
    if(workFromHome == 'yes'){
        fromHomeBoolean = true;
    }
    let branchesList = branchesApply.split(",");
    if(branchesList.includes('CS')){
        CS = true;
    }
    if(branchesList.includes('IS')){
        IS = true;
    }
    if(branchesList.includes('EC')){
        EC=true;
    }
    if(branchesList.includes('EE')){
        EE = true;
    }
    if(branchesList.includes('Civil')){
        Civil = true;
    }
    if(branchesList.includes('Mech')){
        Mech=true;
    }
    if(branchesList.includes('BioTech')){
        BioTech = true;
    }
    if(branchesList.includes('Others')){
        Others=true;
    }
    Jobs.create({
        companyName:companyName,
        package:package,
        experence:experence,
        workFromHome:fromHomeBoolean,
        field:field,
        posterUrl:posterUrl,
        location:location,
        shift:shift,
        msg:msg,
        cs:CS,
        is:IS,
        ec:EC,
        ee:EE,
        civil:Civil,
        mech:Mech,
        biotech:BioTech,
        others:Others,
        userId : userId,
        linkRegister : linkRegister
    })
    .then(result=>{
        console.log("job is posted succesfully");
        res.redirect("/jobs");
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getsoftware = (req,res,next)=>{
    let branchesApplyList = [];
    const jobsCount = {}

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })


    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })


    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        
        console.log(branchesApplyList);
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })

    
}

exports.getec = (req,res,next)=>{
    let branchesApplyList = [];
    const jobsCount = {}
    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })


    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getee = (req,res,next)=>{
    let branchesApplyList = [];
    const jobsCount = {}
    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })

}

exports.getcivil = (req,res,next)=>{
    let branchesApplyList = [];
    const jobsCount = {}
    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })

}

exports.getmech = (req,res,next) =>{
    let branchesApplyList = [];
    const jobsCount = {}

    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })


    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })

}

exports.getbio = (req,res,next) =>{
    let branchesApplyList = [];
    const jobsCount = {}
    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })

    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })


    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    

    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getother = (req,res,next) =>{
    let branchesApplyList = [];
    const jobsCount = {}

    Jobs.findAll()
    .then(jobs=>{
        jobsCount["all"] = jobs.length;
    })
    .catch(err=>{
        console.log(err)
    })

    Jobs.findAll({
        where:{
            cs:true,
            is:true
        }
    })
    .then(jobs=>{
        jobsCount["software"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ec:true
        }
    })
    .then(jobs=>{
        jobsCount["electronics"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
            ee:true
        }
    })
    .then(jobs=>{
        jobsCount["Electrical"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })

    Jobs.findAll({
        where:{
             civil:true  
        }
    })
    .then(jobs=>{
        jobsCount["civil"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             mech:true  
        }
    })
    .then(jobs=>{
        jobsCount["mech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    Jobs.findAll({
        where:{
             biotech:true  
        }
    })
    .then(jobs=>{
        jobsCount["bioTech"] = jobs.length;
    })
    .catch(err=>{
        console.log(err);
    })
    
    Jobs.findAll({
        where:{
            others:true  
        }
    })
    .then(jobs=>{
        jobsCount["others"] = jobs.length;
        for (let job of jobs){
            let listJob = ""
            if(job.cs) {listJob = listJob+'CS,';}
            if(job.is) {listJob = listJob+'IS,';}
            if(job.ec) {listJob = listJob+'EC,';}
            if(job.ee) {listJob = listJob+'EE,';}
            if(job.civil) {listJob = listJob+'CIVIL,';}
            if(job.mech) {listJob = listJob+'MECH,';}
            if(job.biotech) {listJob = listJob+'BioTech,';}
            if(job.others) {listJob = listJob+' Otheres branches ,';}
            branchesApplyList.push(listJob)
        }
        console.log(jobsCount);
        res.render("jobs.ejs",{
            jobsCount : jobsCount,
            jobsList : jobs,
            branchesApply : branchesApplyList,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getEditJob = (req,res,next)=>{
    const jobId = req.params.jobId;
    Jobs.findAll({
        id:jobId
    })
    .then(jobs=>{
        let branchesApply = "";
        if(jobs[0].cs){branchesApply+='CS, ';}
        if(jobs[0].is){branchesApply+='IS, ';}
        if(jobs[0].ec){branchesApply+='EC, ';}
        if(jobs[0].ee){branchesApply+='EE, ';}
        if(jobs[0].civil){branchesApply+='Civil, ';}
        if(jobs[0].mech){branchesApply+='Mech, ';}
        if(jobs[0].biotech){branchesApply+='BioTech, ';}
        if(jobs[0].others){branchesApply+='Others, ';}
        console.log(branchesApply);

        res.render("editJobs.ejs",{
            job : jobs[0],
            branchesApply : branchesApply
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postEditJob = (req,res,next)=>{
    const companyName = req.body.companyName;
    const package = req.body.package;
    const field = req.body.field;
    const experence = req.body.experence;
    const workFromHome = req.body.workFromHome.toLowerCase();
    const branchesApply = req.body.branchesApply;
    const posterUrl = req.body.posterUrl;
    const shift  = req.body.shift.toLowerCase();
    const location = req.body.location;
    const msg = req.body.msg;
    const userId = req.session.userId;
    let CS=false,IS=false,EC=false,EE=false,Civil=false,Mech=false,BioTech=false,Others=false;
    let fromHomeBoolean = false;
    if(workFromHome == 'yes'){
        fromHomeBoolean = true;
    }
    let branchesList = branchesApply.split(",");
    if(branchesList.includes('CS')){
        CS = true;
    }
    if(branchesList.includes('IS')){
        IS = true;
    }
    if(branchesList.includes('EC')){
        EC=true;
    }
    if(branchesList.includes('EE')){
        EE = true;
    }
    if(branchesList.includes('Civil')){
        Civil = true;
    }
    if(branchesList.includes('Mech')){
        Mech=true;
    }
    if(branchesList.includes('BioTech')){
        BioTech = true;
    }
    if(branchesList.includes('Others')){
        Others=true;
    }
    const jobId = req.body.jobId;

    Jobs.findAll({
        id:jobId
    })
    .then(jobs=>{
        jobs[0].companyName = companyName,
        jobs[0].package = package,
        jobs[0].experence = experence,
        jobs[0].workFromHome = workFromHome,
        jobs[0].field = field,
        jobs[0].posterUrl = posterUrl,
        jobs[0].location = location,
        jobs[0].shift = shift,
        jobs[0].msg = msg,
        jobs[0].cs = CS,
        jobs[0].is = IS,
        jobs[0].ec = EC,
        jobs[0].ee = EE,
        jobs[0].civil = Civil,
        jobs[0].mech = Mech,
        jobs[0].biotech = BioTech,
        jobs[0].others = Others
        return jobs[0].save();
     })
     .then(result=>{
        console.log("job is edited SUCCESFULLY");
        res.redirect("/jobs");
     })
    .catch(err=>{
        console.log(err);
    })

}

