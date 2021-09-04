import express from "express"
import db from '../../db/models/index.js'
import Productuser from "../../db/models/Productuser.js"
const Product = db.Product
const cart= db.cart
import s from 'sequelize'

const {Op} = s

const router = express.Router()

router
.route('/')
.get(async(req,res,next)=>{
    try {
       const {name} = req.query 
       const filter = req.query.name
       ?{
           where:{
               name:{
                   [Op.iLike]:`%${name}$`,
               },
           },
       }
       :{}
       console.log({name:`%${name}`})
       const data = await cart.findAll({include:Product,Productuser})
       res.send(data);
    } catch (error) {
         console.log(error)
         next(error)
    }
})
.post(async(req,res,next)=>{
    try {
        const data = await cart.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})



router.route('/:id')
.get(async(req,res,next)=>{
    try {
      const data = await cart.findByPk(req.params.id)
      res.send(data)  
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.put(async(req,res,next)=>{
    try {
        const data = await cart.update(req.body,{
        where:{id:req.params.id},
        returning:true,
        })
        res.send(data[1][0])
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.delete(async(req,res,next)=>{
    try {
        const rows = await cart.destroy({
            where:{
                id:req.params.id,
            },
        })
        if(rows>0){
            res.send("ok")
        }else{
            res.status(404).send("not found")
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router