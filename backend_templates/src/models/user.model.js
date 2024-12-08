import mongoose from 'mongoose'
import bcrypt from "bcryptjs";


export const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    userRole: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    status: {
        type: String
    }
}, {
    timestamps: true
})

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  };

  userSchema.methods.validPassword = function (reqPassword, UserPassword) {
    return bcrypt.compareSync(reqPassword, UserPassword);
  };

export const User = mongoose.model('users', userSchema);