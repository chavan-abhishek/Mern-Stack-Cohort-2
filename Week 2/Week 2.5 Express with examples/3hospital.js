/*
get: User can check how many kidneys they have and their health
post: User can add a new kidney
put: user can replace a kidney , make it healthy
delete: User can remove a kidney
 */

const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < numberOfKidneys; i++) {
        if(user[0].kidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const UnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        UnhealthyKidneys
    })

})

app.post("/add", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res) {
    for(let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }

    res.json({});
})

app.delete("/", function(req, res) {
    //you should return 411 if unhealthy kidneys are not there
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for(let i = 0; i < user[0].kidneys.length; i++) {
            if(user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({
            msg:"deleted all unhealthy kidneys"
        })
    } 
    else {
        res.status(411).json({
            msg:"You dont have unhealhty kidney"
        })
    }
   
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < user[0].kidneys.length; i++) {
        if(!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3001);