const express = require('express');
const router = express();
const ProductEntity = require('../entity/Product')
const { verifyToken } = require("../entity/User")
router.post("/addproduct", async (req, res) => {
    const response = await ProductEntity.addProduct(req.body);
    res.send(response);
});

router.get("/productlist", verifyToken, async (req, res) => {
    const response = await ProductEntity.getProduct();
    res.send(response);
});

router.delete("/deleteproduct/:id", verifyToken, async (req, res) => {
    const response = await ProductEntity.deleteProduct(req.params.id);
    res.send(response);
})

router.get("/singleproduct/:id", verifyToken, async (req, res) => {
    const response = await ProductEntity.singleProduct(req.params.id);
    res.send(response);
})

router.put("/updateProduct/:id", verifyToken, async (req, res) => {
    const response = await ProductEntity.updateProduct(req);
    res.send(response);
});

router.get("/search/:key", verifyToken, async (req, res) => {
    const response = await ProductEntity.search(req.params.key);
    res.send(response);
})

module.exports = router