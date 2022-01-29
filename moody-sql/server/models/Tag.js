const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Tag extends Model {}

Tag.init(
    {
        name: {
            type: DataTypes.STRING
        },  
    },
    {
        sequelize,
        timeStamps: false,
        modelName: "tag"
    }
);

module.exports = Tag;