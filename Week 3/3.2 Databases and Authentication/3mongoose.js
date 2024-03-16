const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abhismongodb:abhismern%407781@cluster0.tufl2ah.mongodb.net/userappnew?retryWrites=true&w=majority",)

const users = mongoose.model('users',{name: String, email: String, password: String});

const user = new users({
  name: 'Chavan', 
  email: 'abhi@gmail.com', 
  password: '123456'
});
user.save();