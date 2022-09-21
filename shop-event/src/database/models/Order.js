module.exports = (sequelize, dataTypes) => {

    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: dataTypes.FLOAT,
            allowNull: true
        },
        ship_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ship_address: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        city: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        state: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(50)  
        },        
        users_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
    };
    let config = {
        timestamps: false,
        tableName: 'orders'
    }

    const Order = sequelize.define(alias, cols, config);

    return Order;
}; 