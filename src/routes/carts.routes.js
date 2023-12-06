import { Router } from "express";

const cartsRoutes = Router()

const carts = []

cartsRoutes.get('/', (req, res) => {
    res.send(carts)
})

cartsRoutes.post('/', (req, res) => {
    const cart = req.body
    carts.push(cart)
    res.status(201).json("Carrito creado correctamente")
})

export default cartsRoutes