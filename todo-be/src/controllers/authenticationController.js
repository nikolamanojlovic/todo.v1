class AuthenticationController {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    authenticate = (req, res) => {
        try {
            var user = this.userRepository.findUserByCredentials(req.body.email, req.body.password);
            res.send(user);
        } catch(error) {
            res.status(401).send(error.message);
        }
    }

}

export default AuthenticationController;