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

// We can add a new kidney
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

// We can replace a kidney and make it healthy
app.put("/", function(req, res) {
    for(let i = 0; i <users[0].kidneys.length; i++) { 
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res) {
    // you should return 411
    // only if atleast one unhealthy kidney is there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++) {
           if(users[0].kidneys[i].healthy){
              newKidneys.push({
                healthy: true
              })
           }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done!"})
    } else{
        res.status(411).json({
            msg:"You have no bad kidneys"  // you are telling me to delete all the unhealhty kidneys when there are none
        });
    }

})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;    // none exists
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;     // if i find even one tthen it becomes true
        }
    }
    return atleastOneUnhealthyKidney


}

app.listen(3000);