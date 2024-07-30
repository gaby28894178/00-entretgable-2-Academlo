const express = require('express');
const userRouter = require('./users.Routers');
const productosRouter = require('./productos.Routers')
const router = express.Router();

// colocar las rutas aquí
router.use('/users',userRouter)
router.use('/productos',productosRouter)

module.exports = router;