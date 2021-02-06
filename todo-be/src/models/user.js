import mongoose, {Schema} from "mongoose";
import Bcrypt from "bcryptjs";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function name(next) {
    if (this.isModified("password")) {
        this.password = Bcrypt.hashSync(this.password, 10);
    }
    return next();
});

var UserModel = mongoose.model('User', userSchema, 'users');

export default UserModel;