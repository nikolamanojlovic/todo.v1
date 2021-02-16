import express from 'express';
import config from './src/config/config';
import AuthenticationController from './src/controllers/authenticationController';
import TodosController from './src/controllers/todosController';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

// Connect to DB
mongoose.connect("mongodb://" + config.db.host + ":" + config.db.port + "/" + config.db.name + "?authSource=admin", { useNewUrlParser: true })
.then(() => console.log("Connected to DB"))
.catch((error) => console.log('Connection to DB failed: ', error.message));


const authenticationController = new AuthenticationController();
const todosController = new TodosController();

// Enable CORS for all
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('aa  World!')
});

app.post('/v1/authenticate/login', (req, res) => {
    authenticationController.login(req, res);
});

app.post('/v1/authenticate/register', (req, res) => {
    authenticationController.register(req, res);
});

app.post('/v1/todos/save', (req, res) => {
    todosController.createOrUpdateTodosList(req, res);
});

app.listen(config.app.port, () => console.log("Server running on port", config.app.port));