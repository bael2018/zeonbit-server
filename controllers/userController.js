const { User } = require("../models/models");

class UserController {
    async create(req, res) {
        try {
            const { email, name, message } = req.body;
            const user = await User.create({ email, name, message });

            if(!email || !name || !message){
                res.status(402).json({ message: 'Все поля должны быть заполнены!' })
            }

            res.json(user);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}

module.exports = new UserController();
