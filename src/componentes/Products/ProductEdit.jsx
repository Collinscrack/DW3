import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, updateProduct } = useContext(ProductContext);
    const [producto, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [imgProducto, setImgProducto] = useState('');

    useEffect(() => {
        const foundProduct = products.find(product => product.id === id);
        if (foundProduct) {
            setProducto(foundProduct.producto);
            setPrecio(foundProduct.precio);
            setImgProducto(foundProduct.imgproducto);
        }
    }, [id, products]);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateProduct(id, { producto, precio, imgproducto: imgProducto });
        navigate(`/products/${id}`);
    };

    return (


        <div className='contenedor vh-100'>
            <form className='formulario' onSubmit={handleUpdate}>
                <h2>Editar Producto</h2>
                <div className='campo'>
                    <label>Nombre:</label>
                    <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} />
                </div>
                <div className='campo'>
                    <label>Precio:</label>
                    <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div className='campo'>
                    <label>Imagen:</label>
                    <input type="text" value={imgProducto} onChange={(e) => setImgProducto(e.target.value)} />
                </div>
                <div className="boton-agregar campo">
                    <button type="submit">Actualizar</button>
                </div>
            </form>
        </div>

    );
};

export default ProductEdit;