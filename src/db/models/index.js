
import category from "./category.js";
import product from "./product.js";
import productuser from './productuser.js'
import comment from './comment.js'
import cart from './cart.js'
import sequelize from 'sequelize'


product.belongsTo(category,{onDelete: "cascade",
foreignKey: { allowNull: false }})
category.hasMany(product,{onDelete: "cascade",
foreignKey: { allowNull: false }})

product.hasMany(comment)
comment.belongsTo(product)

productuser.belongsToMany(product, { through: { model: comment, unique: false } });
product.belongsToMany(productuser, { through: { model: comment, unique: false } });

productuser.hasMany(comment)
comment.belongsTo(productuser)

product.belongsToMany(productuser,{through:{model:cart,unique:false}})
productuser.belongsToMany(product,{through:{model:cart,unique:false}})


export default {sequelize,category,product,productuser,comment,cart}