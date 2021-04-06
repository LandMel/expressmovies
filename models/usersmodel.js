const Mongoose = require("mongoose");

let Schema = Mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String
    }
})


exports.UserModel = Mongoose.model("User", UserSchema);