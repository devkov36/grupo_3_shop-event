module.exports = (sequelize, dataTypes) => {

    let alias = 'eventos';
    let cols = {
        id_event: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        cost: {
            type: dataTypes.FLOAT(11,2),
            allowNull: false
        },
        event_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        
        event_end_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        id_usuario: {
            type: dataTypes.INTEGER  
        },        
        title: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true
        },
        id_location: {
            type: dataTypes.INTEGER            
        },
        tickets: {
            type: dataTypes.INTEGER            
            
        },         
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',        
        tableName: 'eventos'
    }
    const Event = sequelize.define(alias, cols, config);

    return Event;
}; 