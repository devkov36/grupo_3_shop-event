module.exports = (sequelize, dataTypes) => {

    let alias = 'locations';
    let cols = {
        id_locations: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: true
        },
        city: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
       country: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        
        recinto: {
            type: dataTypes.STRING(500),
            allowNull: true
        },
        address: {
            type: dataTypes.STRING(1000),
            allowNull: true
        },
        google_coordinantes: {
            type: dataTypes.STRING(1000),
            allowNull: true
        }
    };
    let config = {
        timestamps: false,       
        tableName: 'locations'
    }
    const Location = sequelize.define(alias, cols, config);

    return Location;
}; 