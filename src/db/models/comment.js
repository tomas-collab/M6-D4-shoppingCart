import sequelize  from "../index.js";
import s from 'sequelize'
const {DataTypes} = s

const Comments = sequelize.define("comment",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
)

export default Comments