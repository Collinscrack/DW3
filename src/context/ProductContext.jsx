import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://664ca0d435bbda10988132e7.mockapi.io/dw3/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addProduct = (newProduct) => {
        fetch('https://664ca0d435bbda10988132e7.mockapi.io/dw3/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        .then(response => response.json())
        .then(data => setProducts([...products, data]))
        .catch(error => console.error('Error adding product:', error));
    };

    const updateProduct = (id, updatedProduct) => {
        fetch(`https://664ca0d435bbda10988132e7.mockapi.io/dw3/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
        .then(() => {
            const updatedProducts = products.map(product => {
                if (product.id === id) {
                    return { ...product, ...updatedProduct };
                }
                return product;
            });
            setProducts(updatedProducts);
        })
        .catch(error => console.error('Error updating product:', error));
    };

    const deleteProduct = (id) => {
        fetch(`https://664ca0d435bbda10988132e7.mockapi.io/dw3/products/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
        })
        .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <ProductContext.Provider value={{ products, loading, addProduct, updateProduct, deleteProduct }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export { ProductContextProvider };