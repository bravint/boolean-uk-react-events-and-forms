import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductInfo from "./components/ProductInfo";

function ProductSection() {
    const [productData, setProductData] = useState({
        size: "",
        color: "",
        quantity: 0,
    });

    return (
        <section className="shadow pad-lg">
            <h2>Awesome T-Shirt</h2>
            <ProductInfo />
            <ProductForm
                productData={productData}
                setProductData={setProductData}
            />
        </section>
    );
}

export default ProductSection;
