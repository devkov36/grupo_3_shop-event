// module.exports = (sequelize, dataTypes) => {

//     let alias = 'Event';
//     let cols = {
//         id: {
//             type: dataTypes.INT,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: dataTypes.STRING(100),
//             allowNull: false
//         },
//         main_img: {
//             type: dataTypes.STRING(160),
//             allowNull: true
//         },
//         start_date: {
//             type: dataTypes.DATE,
//             allowNull: false
//         },
//         end_date: {
//             type: dataTypes.DATE,
//             allowNull: false
//         },
//         category: {
//             type: dataTypes.STRING(100),
//             allowNull: true
//         },
//         cost: {
//             type: dataTypes.STRING(50),
//             allowNull: false
//         },
//         description: {
//             type: dataTypes.TEXT,
//             allowNull: true
//         },
//         location: {
//             type: dataTypes.STRING(120),
//             allowNull: false
//         }
//     };
//     let config = {
//         timestamps: true,
//         createdAt: 'created_at',
//         updatedAt: 'updated_at',
//         tableName: 'events'
//     }
//     const Event = sequelize.define(alias, cols, config);


//     return Event;

// };