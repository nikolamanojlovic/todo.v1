import users from "../models/user";
import Bcrypt from "bcryptjs";

class UserRepository {

    findUserByCredentials = (email, password) => {
        var user = users.findOne({ email: email });
        if (user) {
            if (Bcrypt.compareSync(user.password, password)) {
                return user;
            }
            throw new Error("authentication.wrong.credentials");
        }
        throw new Error("authentication.user.doesnt.exist");
    }

}

export default UserRepository;