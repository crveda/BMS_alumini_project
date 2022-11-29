const path = require('path');
const Event = require(path.join(__dirname,"..","model","events.js"));
const Sequelize  = require('sequelize');
const User = require(path.join(__dirname,"..","model","User.js"));
const EventRegister = require(path.join(__dirname,"..","model","eventsRegister.js"));

exports.getEvents = (req,res,next)=>{
    // console.log(req.session.userName);
    // console.log(req.session.userEmail);
    const dataNow = Date.now();
    const events = {};
    const offlineMode = "offline";
    const onlineMode = "online";
    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.lt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["pastCount"] = eventsList.length ;
    })
    .catch(error=>{
        console.log(error)
    });


    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.gt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["upcomingCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });

    Event.findAll({where:{
         eventMode:{
            [Sequelize.Op.like]: offlineMode   
        },
    }})
    .then(eventsList => {
        events["offlineCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });
    

    Event.findAll({where:{
        eventMode:{
           [Sequelize.Op.like]: onlineMode  
       },
   }})
   .then(eventsList => {
       events["onlineCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error)
   });

   Event.findAll()
   .then(eventsList=>{
       events["allCount"] = eventsList.length;
       console.log(events);
       res.render("events.ejs",{
           eventsList:eventsList,
           events : events,
           userId : req.session.userId,
           isLoggedIn : req.session.isLoggedIn
       });
   })
   .catch(error=>{
       console.log(error);
   });
}

exports.getHostEvent = (req,res,next)=>{
    User.findAll({
        where:{
            userName : req.session.userName
        }
    })
    .then(users=>{
        res.render(path.join(__dirname,"..","views","hostEvent.ejs"),{
            hostName : users[0].userName
         });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postEvent = (req,res,next) =>{
    const eventName = req.body.eventName;
    const posterUrl = req.body.posterUrl;
    const hostName = req.body.hostName;
    const eventMode = req.body.eventMode;
    const price = req.body.eventPrice;
    const eventStartingTime = req.body.eventStartingTime;
    const eventEndingTime = req.body.eventEndingTime;
    const location = req.body.location;
    const msg = req.body.msg;
     
    Event.create({
        eventName: eventName,
        posterUrl:posterUrl,
        hostName:hostName,
        eventMode:eventMode.toLowerCase(),
        price:price,
        location: location,
        eventStartingTime:eventStartingTime,
        eventEndingTime:eventEndingTime,
        userId : req.session.userId,
        msg : msg
    })
    .then(result=>{
        console.log("values inserted in EVENTS table SUCCESFULLY" );
    })
    .catch(error=>{
        console.log(error);
    })
    res.redirect("/events");
}

exports.getPastEvents = (req,res,next)=>{
    const dataNow = Date.now();
    const events = {};

    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.gt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["upcomingCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });

    Event.findAll({where:{
         eventMode:{
            [Sequelize.Op.eq]:"offline"   
        },
    }})
    .then(eventsList => {
        events["offlineCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });
    

    Event.findAll({where:{
        eventMode:{
           [Sequelize.Op.eq]:"offline"   
       },
   }})
   .then(eventsList => {
       events["onlineCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error)
   });

   Event.findAll()
   .then(eventList=>{
       events["allCount"] = eventList.length;
   })
   .catch(error=>{
       console.log(error);
   });

   Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.lt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["pastCount"] = eventsList.length ; 
        console.log(events); 
        res.render("events.ejs",{
            eventsList:eventsList,
            events : events,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        });
    })
    .catch(error=>{
        console.log(error)
    });
}

exports.getUpComingEvents = (req,res,next)=>{
    const dataNow = Date.now();
    const events = {};

    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.lt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["pastCount"] = eventsList.length ;
    })
    .catch(error=>{
        console.log(error)
    });

    Event.findAll({where:{
         eventMode:{
            [Sequelize.Op.eq]:"offline"   
        },
    }})
    .then(eventsList => {
        events["offlineCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });
    

    Event.findAll({where:{
        eventMode:{
           [Sequelize.Op.eq]:"offline"   
       },
   }})
   .then(eventsList => {
       events["onlineCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error)
   });

   Event.findAll()
   .then(eventList=>{
       events["allCount"] = eventList.length;
   })
   .catch(error=>{
       console.log(error);
   });

   Event.findAll({where:{
    eventStartingTime :{
        [Sequelize.Op.gt]:dataNow 
    },
    }})
    .then(eventsList => {
        events["upcomingCount"] = eventsList.length;
        res.render("events.ejs",{
            eventsList:eventsList,
            events : events,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        });
    })
    .catch(error=>{
        console.log(error)
    });
}

exports.getOnlineEvents = (req,res,next)=>{
    const dataNow = Date.now();
    const events = {};

    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.lt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["pastCount"] = eventsList.length ;
    })
    .catch(error=>{
        console.log(error)
    });


    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.gt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["upcomingCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });

    Event.findAll({where:{
         eventMode:{
            [Sequelize.Op.eq]: "offline"   
        },
    }})
    .then(eventsList => {
        events["offlineCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });
    
   Event.findAll()
   .then(eventsList=>{
       events["allCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error);
   });

   Event.findAll({where:{
    eventMode:{
       [Sequelize.Op.eq]:"online" 
   },
    }})
    .then(eventsList => {
        events["onlineCount"] = eventsList.length;
        console.log(events);
        res.render("events.ejs",{
            eventsList:eventsList,
            events : events,
            userId : req.session.userId,
            isLoggedIn : req.session.isLoggedIn
        });
    })
    .catch(error=>{
        console.log(error)
    });
}

exports.getOfflineEvents = (req,res,next)=>{
    const dataNow = Date.now();
    const events = {};

    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.lt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["pastCount"] = eventsList.length ;
    })
    .catch(error=>{
        console.log(error)
    });


    Event.findAll({where:{
        eventStartingTime :{
            [Sequelize.Op.gt]:dataNow   
        },
    }})
    .then(eventsList => {
        events["upcomingCount"] = eventsList.length;
    })
    .catch(error=>{
        console.log(error)
    });

    Event.findAll({where:{
        eventMode:{
           [Sequelize.Op.eq]:"online"   
       },
   }})
   .then(eventsList => {
       events["onlineCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error)
   });

   Event.findAll()
   .then(eventsList=>{
       events["allCount"] = eventsList.length;
   })
   .catch(error=>{
       console.log(error);
   });

   Event.findAll({where:{
    eventMode:{
       [Sequelize.Op.eq]:"offline"   
   },
    }})
        .then(eventsList => {
            events["offlineCount"] = eventsList.length;
            res.render("events.ejs",{
                eventsList:eventsList,
                events : events,
                userId : req.session.userId,
                isLoggedIn : req.session.isLoggedIn
            });
    })
    .catch(error=>{
        console.log(error)
    });
}


exports.getEditEvent = (req,res,next)=>{
    const eventId = req.params.eventId;
    Event.findAll({
        where:{
            id:eventId
        }
    })
    .then(events=>{
        res.render("eventEdit.ejs",{
            event:events[0]
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postEditEvents = (req,res,next)=>{
    const eventName = req.body.eventName;
    const posterUrl = req.body.posterUrl;
    const hostName = req.body.hostName;
    const eventMode = req.body.eventMode;
    const price = req.body.eventPrice;
    const eventStartingTime = req.body.eventStartingTime;
    const eventEndingTime = req.body.eventEndingTime;
    const location = req.body.location;
    const msg = req.body.msg;
    const eventId  = req.body.eventId;
    Event.findAll({
        where:{
            id:eventId
        }
    })
    .then(events=>{
        events[0].eventName = eventName,
        events[0].posterUrl = posterUrl,
        events[0].hostName = hostName,
        events[0].eventMode = eventMode,
        events[0].price = price,
        events[0].eventStartingTime = eventStartingTime,
        events[0].eventEndingTime = eventEndingTime,
        events[0].location = location,
        events[0].msg = msg
        return events[0].save();
    })
    .then(result=>{
        console.log("events is edited SUCCESSFULLY");
        res.redirect("/events");
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getRegisterEvent = (req,res,next) =>{
    const eventId = req.params.eventId;
    const userId = req.session.userId;
    const email = req.session.email;
    const userName = req.session.userName;

    Event.findAll({
        where:{
            id:eventId
        }
    })
    .then(events=>{
        res.render("eventRegister.ejs",{
            event:events[0],
            userName:userName,
            userEmail:email
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postRegisterEvent = (req,res,next) =>{
    const eventId = req.body.eventId;
    const userId = req.session.userId;
    EventRegister.create({
        userId : userId,
        eventId: eventId
    })
    .then(result=>{
        console.log("Event is register SUCCESFULLY");
        res.redirect("/events");
    })
    .catch(err=>{
        console.log(err);
    })
}

