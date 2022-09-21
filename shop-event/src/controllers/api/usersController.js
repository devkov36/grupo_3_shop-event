const db = require('../../database/models');

const usersController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                let listUsers = [];
                users.forEach((user)=>{
                    let data = {};
                    data['id'] = user.id
                    data['first_name'] = user.first_name
                    data['last_name'] = user.last_name
                    data['email'] = user.email
                    data['username'] = user.username,
                    data['avatar'] = user.avatar
                    listUsers.push(data);
                });
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: "api/users",
                    },
                    data: listUsers
                });
            })
            .catch(error => {
                res.status(404).json({
                    meta: {
                        status: 404,
                        url: "api/users"
                    },
                    data: "Not found"
                });
            });
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: "api/users/{id}"
                    },
                    data: {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        username: user.username,
                        email: user.email,
                        avatar: user.avatar
                    }
                });
            })
            .catch(error => {
                res.status(404).json({
                    meta: {
                        status: 404,
                        url: "api/users/{id}"
                    },
                    data: "Not found"
                });
            });
    }
}

module.exports = usersController;