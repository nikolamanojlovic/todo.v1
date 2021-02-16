import { Typography, Paper, Button, IconButton, Divider, InputBase } from "@material-ui/core";
import { Fragment, useContext, useState } from "react";
import { ThemeContext, UserContext } from "../contexts/contexts";
import { useSpaceStyles } from "../style/space";
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import { useFormStyles } from "../style/forms";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const Space = () => {
    const classes = useSpaceStyles(useContext(ThemeContext));
    const formStyle = useFormStyles(useContext(ThemeContext));

    const [choosenTodo, setChoosenTodo] = useState(undefined);

    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const handleNew = () => {
        setChoosenTodo({
            headline: 'Untitled',
            tasks: []
        });
    };

    const handleNewTask = () => {
        var tasks = choosenTodo.tasks;
        var newTask = {
            id: choosenTodo.tasks.length + 1,
            description: 'New task',
            completed: false
        };
        tasks.push(newTask)
        setChoosenTodo({ ...choosenTodo, tasks: tasks });
    }

    const renderEmptyTodoEditor = () => {
        return (
            <div className={classes.editorEmpty}>
                <Typography variant='h5'>Select <b>ToDo</b> list to get started.</Typography>
            </div>
        );
    }

    const renderTasks = () => {

        const handleRemoveTask = (e) => {
            var tasks = choosenTodo.tasks.filter((el) => el.id != e.currentTarget.value);
            setChoosenTodo({ ...choosenTodo, tasks: tasks });
        }

        const handleCompletedTask = (e) => {
            var index = choosenTodo.tasks.findIndex((el) => el.id == e.currentTarget.value);
            var tasks = choosenTodo.tasks;

            tasks[index] = { ...tasks[index], completed: true }

            setChoosenTodo({ ...choosenTodo, tasks: tasks });
        }

        const handleChange = (e) => {
            var index = choosenTodo.tasks.findIndex((el) => el.id == e.currentTarget.id);
            var tasks = choosenTodo.tasks;

            tasks[index] = { ...tasks[index], description: e.currentTarget.value }

            setChoosenTodo({ ...choosenTodo, tasks: tasks });
        }

        return (
            <div className={classes.todoListTasks}>
                {
                    choosenTodo.tasks.map((task) =>
                        <Paper className={classes.task} style={task.completed ? { backgroundColor: theme.palette.success.main } : {}}>
                            <InputBase className={classes.taskDescription} value={task.description} style={task.completed ? { color: theme.palette.secondary.main } : {}} id={task.id} onChange={(e) => handleChange(e)} disabled={task.completed} />
                            {task.completed ? <Fragment /> : <IconButton className={classes.taskBtn} value={task.id} onClick={(e) => handleCompletedTask(e)}><CheckCircleOutlineRoundedIcon /></IconButton>}
                            <IconButton className={classes.taskBtn} value={task.id} onClick={(e) => { handleRemoveTask(e) }}>
                                <HighlightOffRoundedIcon />
                            </IconButton>
                        </Paper>
                    )
                }
            </div>
        );
    }

    const renderTodoEditor = () => {
        return (
            <div className={classes.editor}>
                <div className={classes.todoListHeadline}>
                    <InputBase className={classes.todoListHeadlineInput} value={choosenTodo.headline} onChange={(e) => setChoosenTodo({ ...choosenTodo, headline: e.target.value })} required />
                    <Divider className={classes.divider} />
                </div>
                {renderTasks()}
                <div className={classes.todoListControls}>
                    <IconButton className={classes.controlButtons} onClick={() => handleNewTask()}>
                        <AddIcon />
                    </IconButton>
                    <IconButton className={classes.controlButtons}>
                        <SaveIcon />
                    </IconButton>
                </div>
            </div>
        );
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.lists}>
                <div className={classes.todos}>
                </div>
                <div className={classes.control}>
                    <Button className={classes.createBtn} variant='contained' color='secondary' startIcon={<AddIcon />} onClick={() => handleNew()}>Create list</Button>
                </div>
            </div>
            {choosenTodo ? renderTodoEditor() : renderEmptyTodoEditor()}
        </Paper>
    );
}

export default Space;