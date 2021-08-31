import sequelize from "../index.js";
import category from "./category.js";
import comment from "./comments.js";
import Product from "./product.js";
import Users from "./users.js";



Product.belongsTo(category)
category.hasMany(Product)

Product.hasMany(comment)
comment.belongsTo(Product)

Product.belongsToMany(Users, { through: { model: userProduct, unique: false } });
Users.belongsToMany(Product, { through: { model: userProduct, unique: false } });

Users.hasMany(comment)
comment.belongsTo(Users)


export default {category,sequelize,Product}