import cors from 'cors'
import express from 'express'
import db from './db/models/index.js'
import productRoutes from './services/product/index.js'
import categoryRoutes from './services/category/index.js'
import cartRoutes from './services/cart/index.js'
import commentRoutes from './services/comment/index.js'
import productuserRoutes from './services/productuser/index.js'
import { syncSequelize } from './db/index.js'
const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/product',productRoutes)
app.use('/category',categoryRoutes)
app.use('/productuser',productuserRoutes)
app.use('/comment',commentRoutes)
app.use('/cart',cartRoutes)



    app.listen(port,async()=>{
        await syncSequelize()
        console.log(`server is running on port : ${port}`)
    })
    app.on('error',(error)=>{console.log('server crashed ' ,error)})



