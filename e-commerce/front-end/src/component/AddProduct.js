import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false)
    const handleProduct = async () => {
        console.log(name, price, category, company);
        if (!name || !price || !category || !company) {
            setError(true);
            return false
        }
        const UserId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/product/addproduct", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, UserId }),
            headers: {
                "Content-type": "application/json",
                authorization: JSON.parse(localStorage.getItem("token"))
            }
        });
        result = await result.json();
        console.log("result", result);
    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name" className="inputBox"
                value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input type="text" placeholder="Enter product price" className="inputBox"
                value={price} onChange={(e) => setPrice(e.target.value)} />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input type="text" placeholder="Enter product category" className="inputBox"
                value={category} onChange={(e) => setCategory(e.target.value)} />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input type="text" placeholder="Enter product company" className="inputBox"
                value={company} onChange={(e) => setCompany(e.target.value)} />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={handleProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct