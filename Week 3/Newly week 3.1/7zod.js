// defining schema for an object
// {
//     email: 
//     password:   mininmum 8 
// }

const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "abhisschavan@gmail.com",
    password: "1234567"
})