import UserModel from "../models/user";

class TodosController {

    createTodosList = (req, res) => {
        UserModel.findOne({ email: req.body.email }, function (error, user) {
            if (error) {
                res.status(400).json('Something went wrong.').send();
                return;
            }

            if (user) {
                user.todos.todos.push({
                    heading: req.body.heading,
                    date: new Date(),
                });
                user.save(function (error, user) {
                    if (error) {
                        res.status(400).json('New list could not be saved.').send();
                        return;
                    }
                    res.status(200).json(user.todos);
                });
            } else {
                res.status(400).json('User could not be found.').send();
            }
        });
    }

    deleteTodosList = (req, res) => {
        UserModel.findOne({ email: req.body.email }, function (error, user) {
            if (error) {
                res.status(400).json('Something went wrong.').send();
                return;
            }

            if (user) {
                // user.todos.todos.push({
                //     heading: req.body.heading,
                //     date: new Date(),
                // });
                user.save(function (error, user) {
                    if (error) {
                        res.status(400).json('New list could not be saved.').send();
                        return;
                    }
                    res.status(200).json(user.todos);
                });
            } else {
                res.status(400).json('User could not be found.').send();
            }
        });
    }

}

export default TodosController;