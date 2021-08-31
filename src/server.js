import cors from 'cors'
import express from 'express'
import db from './db/models/index.js'
import productRoutes from './services/products/index.js'
import categoryRoutes from './services/category/index.js'
const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/products',productRoutes)
app.use('/category',categoryRoutes)

db.sequelize.sync({force:true}).then(()=>{

    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`)
    })
    app.on('error',(error)=>{console.log('server crashed ' ,error)})
})
.catch((e)=>console.log(e))

