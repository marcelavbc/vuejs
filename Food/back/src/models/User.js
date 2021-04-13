import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        recipes: []

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.method('encryptPassword', function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
})

userSchema.method('comparePassword', function (password, savedPass) {
    return bcrypt.compare(password, savedPass)
})

// userSchema.method({
//     encryptPassword: function (password) {
//         return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
//     },
//     comparePassword: function (password) {
//         return bcrypt.compareSync(password, receivedPassword);
//     }
// })

export default model("User", userSchema);