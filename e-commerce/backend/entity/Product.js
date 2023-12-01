const ProductModel = require('../db/Product')

module.exports.addProduct = async (data) => {
    try {
        let result = new ProductModel(data);
        let fresult = result.save();
        return fresult
    } catch (err) {
        return ({ err: err })
    }
}

module.exports.getProduct = async (data) => {
    try {
        let result = await ProductModel.find();
        if (result.length > 0) {
            return result
        } else {
            return "No products found"
        }
    } catch (err) {
        return "Internal server error"
    }
}


module.exports.deleteProduct = async (data) => {
    try {
        console.log("data", data);
        let result = await ProductModel.deleteOne({ _id: data });
        return result
    } catch (err) {
        return "Internal server error"
    }
}

module.exports.singleProduct = async (data) => {
    try {
        console.log("data", data);
        let result = await ProductModel.findOne({ _id: data });
        if (result) {
            return result
        } else {
            return "No data found"
        }
    } catch (err) {
        return "Internal server error"
    }
}

module.exports.updateProduct = async (data) => {
    try {
        console.log("data", data);
        let result = await ProductModel.updateOne(
            { _id: data.params.id },
            {
                $set: data.body
            }
        );
        return result
    } catch (err) {
        return "Internal server error"
    }
}

module.exports.search = async (data) => {
    console.log("data", data);
    let result = await ProductModel.find({
        "$or": [
            { name: { $regex: data } },
            { price: { $regex: data } },
            { category: { $regex: data } },
            { company: { $regex: data } },
        ]
    });

    return result
}