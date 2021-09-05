import sequelize from "../index.js";
import s from "sequelize";
const {DataTypes} = s;

const productuser = sequelize.define("productuser", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  surname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
},{
  schema: "development",
});

export default productuser;
