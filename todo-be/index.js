import express from 'express';
import config from './src/config/config';
import AuthenticationController from './src/controllers/authenticationController';
import UserRepository from './src/repositories/userRepository';

const app = express();

const userRepository = new UserRepository();
const authenticationController = new AuthenticationController(userRepository);

app.get('/', (req, res) => {
    res.send('aa  World!')
});

app.post('/authenticate', (req, res) => {
    authenticationController.authenticate(req, res);
});

app.listen(config.app.port, () => console.log("Server running on port", config.app.port));