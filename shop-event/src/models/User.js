const fs = require('fs');

const User = {

    fileName: '../data/user.json',

    getUsers: function(){
        return JSON.parse(fs.readFileSync)
    }

};

module.exports = User;