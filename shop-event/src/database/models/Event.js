module.exports = (sequelize, dataTypes) => {

    let alias = 'Event';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        cost: {
            type: dataTypes.STRING(30),
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
        title: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        id_usuario: {
            type: dataTypes.INTEGER  
        },        
        description: {
            type: dataTypes.TEXT,
            allowNull: true
        },
        tickets: {
            type: dataTypes.INTEGER            
            
        }, 
        ubication: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        banner_img: {
            type: dataTypes.STRING(300),
            allowNull: true          
        },      
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',       
        tableName: 'events'
    }
    const Event = sequelize.define(alias, cols, config);

    return Event;
}; 