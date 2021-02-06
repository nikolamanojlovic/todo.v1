import UserModel from "../models/user";
import Bcrypt from "bcryptjs";

class AuthenticationController {

    login = (req, res) => {
        UserModel.findOne({ email: req.body.email }, function (error, user) {
            if (error) {
                res.status(401).json('Something went wrong.').send();
                return;
            }

            if (user) {
                if (Bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(200).json(user).send();
                    return;
                }
                res.status(401).json('Wrong credentials.').send();
            } else {
                res.status(401).json('User could not be found.').send();
            }
        });
    }

    register = (req, res) => {
        let user = new UserModel({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password });
        user.save(function (error, user) {
            console.log(user)
            if (error) {
                res.status(500).json('Something went wrong.').send();
                return;
            }
            res.status(201).json(user).send();
        });
    }

}

export default AuthenticationController;