import React from "react";

const Products = ({ name, imagePath, updateItemCount }) => {
    const handleChange = (event) => {
        const currentValue = event.target.value;
        updateItemCount(name, currentValue);
    };
    return (
        <div style={{ textAlign: "center" }}>
            <img
                style={{ width: "75%", marginBottom: 10 }}
                src={`http://localhost:5000${imagePath}`}
                alt={`${name} product`}
            />
            <form>
                <label style={{ textAlign: "right" }}>{name}</label>
                <input
                    style={{ marginLeft: 7 }}
                    type="number"
                    name="quantity"
                    min="0"
                    defaultValue={0}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Products;
