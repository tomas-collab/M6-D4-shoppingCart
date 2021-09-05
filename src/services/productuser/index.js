import express from "express"
import db from '../../db/models/index.js'

const Product = db.product
const productuser = db.productuser
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
       const data = await productuser.findAll({include:Product})
       res.send(data);
    } catch (error) {
         console.log(error)
         next(error)
    }
})
.post(async(req,res,next)=>{
    try {
        const data = await productuser.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})



router.route('/:id')
.get(async(req,res,next)=>{
    try {
      const data = await productuser.findByPk(req.params.id)
      res.send(data)  
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.put(async(req,res,next)=>{
    try {
        const data = await user.update(req.body,{
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
        const rows = await user.destroy({
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