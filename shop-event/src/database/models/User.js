module.exports = (sequelize, dataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        last_name: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        username: {
            type: dataTypes.STRING(200),
            allowNull: true
        }, 
        email: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        category: {
            type: dataTypes.STRING(30),
            allowNull: true
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',     
        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config);

    return User;
}; 