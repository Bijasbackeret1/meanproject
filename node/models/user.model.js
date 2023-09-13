

const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     id: String,
//     firstname: String,
//     lastname: String,
//     email: String,
//     phone: Number,
//     status: String
//     });
const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {type: String,
        unique: true
    },
    phone: { type:Number,
        unique: true
    },
    password: { type: String
    },
    role: { type: String,
        enum: ['admin', 'user'],
        default:'user'
    },
    status: { type:String,
        enum:['active','inactive'],
        default:'inactive'
    }
})


const User= mongoose.model('User', userSchema);
module.exports = User;
