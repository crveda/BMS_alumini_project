const path = require('path');
const NotableUser = require(path.join(__dirname,'..','model','notableAlumni'));
// const NotableUser = notableAlumni.NotableUser;
let notable = (fullName,profilePic,occupation,facebookLink,twitterLink,googlePlusLink,linkedinLink,batch)=>{
    NotableUser.create({
        fullName:fullName,
        profilePic : profilePic,
        occupation :occupation,
        facebookLink :facebookLink,
        twitterLink : twitterLink,
        googlePlusLink : googlePlusLink,
        linkedinLink : linkedinLink,
        batch : batch
    })
    .then(result=>{
        console.log("notable alumni is created succesfully");
    }).catch(err=>
        console.log(err))}

let createNotable = ()=>{
    notable('aaaaaaa','pplink','uuuuuuuuu','uuuuuuu','oooooooo','iiiiiiiii','iiiiiiii','kkkkkkkkk','ddddddddd');
    notable('aaaaaaa','pplink','uuuuuuuuu','uuuuuuu','oooooooo','iiiiiiiii','iiiiiiii','kkkkkkkkk','ddddddddd');
    notable('aaaaaaa','pplink','uuuuuuuuu','uuuuuuu','oooooooo','iiiiiiiii','iiiiiiii','kkkkkkkkk','ddddddddd');
    notable('aaaaaaa','pplink','uuuuuuuuu','uuuuuuu','oooooooo','iiiiiiiii','iiiiiiii','kkkkkkkkk','ddddddddd')
}


module.exports = createNotable;