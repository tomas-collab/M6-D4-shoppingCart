import sequelize  from "../index.js";
import s from 'sequelize'
const {DataTypes} = s

const comment = sequelize.define(
    "category",
    {
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement:true
        },
        comment:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rate:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        // product_id:{
        //     type:DataTypes.STRING,
        //     allowNull:false
        // },
    }
)
export default comment