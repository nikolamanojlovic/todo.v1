import UserModel from "../models/user";

class TodosController {

    createOrUpdateTodosList = (req, res) => {
        UserModel.findOne({ email: req.body.email }, function (error, user) {
            if (error) {
                res.status(400).json('Something went wrong.').send();
                return;
            }

            if (user) {

                var index = user.todos.findIndex((el) => el.id == req.body.todo.id);

                if (index < 0) {
                    user.todos.push({
                        id: req.body.todo.id,
                        headline: req.body.todo.headline,
                        date: new Date(),
                        tasks: req.body.todo.tasks
                    });
                } else {
                    user.todos[index].headline = req.body.todo.headline;
                    user.todos[index].tasks = req.body.todo.tasks;
                }


                user.save(function (error, user) {
                    if (error) {
                        res.status(400).json('New list could not be saved.').send();
                        return;
                    }
                    res.status(200).json(user);
                });
            } else {
                res.status(400).json('User could not be found.').send();
            }
        });
    }

}

export default TodosController;