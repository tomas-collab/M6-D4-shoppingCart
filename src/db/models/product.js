import sequelize from '../index.js'
import s from 'sequelize'
const {DataTypes} = s

const Product = sequelize.define(
    "product",
    {
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement:true,
        },
         name:{
            
                type:DataTypes.STRING,
                allowNull:false,
            
        },
        // category_id:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false
        // },
        image:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }
)

export default Product