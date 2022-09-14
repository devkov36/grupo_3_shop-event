const db = require('../../database/models');

const usersController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: "api/users",
                    },
                    data: users
                });
            });
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
    }
}

module.exports = usersController;