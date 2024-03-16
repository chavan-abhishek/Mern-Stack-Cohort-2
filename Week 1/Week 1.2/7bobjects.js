// Array of objects

const allusers = [{
    firstName : "abhishek",
    gender : "male"
},  {
    firstName : "harkirat",
    gender : "male"
},  {
    firstName : "Alexa",
    gender : "female"
}]

for (let i = 0; i < allusers.length; i++){
    if (allusers[i]["gender"] == "male") {
        console.log(allusers[i]["firstName"])
    }
}