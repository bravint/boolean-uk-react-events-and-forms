import React from "react";

import ColorSquare from "./ColorSquare";

function ProductForm({ productData, setProductData }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productData);
    };

    const handleChange = (event) => {
        if (event.target.name === "size")
            setProductData({ ...productData, size: event.target.value });
        if (event.target.id === "color")
            setProductData({ ...productData, color: event.target.value });
        if (event.target.name === "quantity")
            setProductData({ ...productData, quantity: event.target.value });
    };

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <label>Size</label>
            <input
                type="radio"
                id="size-sm"
                name="size"
                value="small"
                onChange={handleChange}
            />
            <label htmlFor="size-sm">S</label>
            <input
                type="radio"
                id="size-md"
                name="size"
                value="medium"
                onChange={handleChange}
            />
            <label htmlFor="size-md">M</label>
            <input
                type="radio"
                id="size-lg"
                name="size"
                value="large"
                onChange={handleChange}
            />
            <label htmlFor="size-lg">L</label>
            <label htmlFor="size">Color</label>
            <ColorSquare color={productData.color} />
            <select id="color" onChange={handleChange}>
                <option value="">Please Select a Color...</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green"> Green</option>
            </select>
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                required
                onChange={handleChange}
            />
            <button type="submit">Buy</button>
        </form>
    );
}

export default ProductForm;
