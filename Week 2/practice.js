const express = require('express');
const app = express();

const users = [{
    name: 'John',
    kidneys : [{
        healthy: false
    }]
}];

app.use(express.json());

// We can check how many kidneys they have and their health
app.get("/",function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i< johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healhty: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
// wecan replace a kidney and make it healthy
app.put("/", function(req,res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
      res.json({})
})

app.delete("/", function (req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
    } else {
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i< users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(3000);