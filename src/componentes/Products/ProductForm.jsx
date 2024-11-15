import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';


const ProductForm = () => {
    const { addProduct } = useContext(ProductContext);
    const [producto, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [imgProducto, setImgProducto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { producto, precio, imgproducto: imgProducto };
        addProduct(newProduct);
        setProducto('');
        setPrecio('');
        setImgProducto('');
    };

    return (
        <div className='contenedor vh-100'>
            <form className='formulario' onSubmit={handleSubmit}>
                <h2>Agregar Producto</h2>
                <div className='campo'>
                    <label>Nombre Producto:</label>
                    <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} required/>
                </div>
                <div className='campo'>
                    <label >Precio:</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required/>
                </div>
                <div className='campo'>
                    <label>Imagen:</label>
                    <input type="text" value={imgProducto} onChange={(e) => setImgProducto(e.target.value)} required/>
                </div>
                <div className='boton-agregar campo'>
                    <button type="submit">Agregar</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
