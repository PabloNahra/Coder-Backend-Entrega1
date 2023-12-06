import { Router } from "express";

const productsRoutes = Router()

const products = []

productsRoutes.get('/', (req, res) => {
    // Cuerpo del get
    res.send(products)
    // res.send("products")
})

productsRoutes.post('/', (req, res) => {
    const product = req.body
    products.push(product)
    res.status(201).json("Creado correctamente")
})

export default productsRoutes