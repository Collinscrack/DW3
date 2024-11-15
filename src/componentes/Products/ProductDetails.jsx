import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const foundProduct = products.find(product => product.id === id);
        setProduct(foundProduct || {});
    }, [id, products]);

    return (
        <div>
            <h1 className='d-flex justify-content-center'>Detalles del Producto</h1>
            {product ? (
                <>
                    <div className=' d-flex flex-wrap justify-content-center'>
                        <div className="card p-3 m-4" style={{ width: '42rem' }}>
                            <p className=''>ID: {product.id}</p>
                            <p>Nombre: {product.producto}</p>
                            <p>Precio: {product.precio}</p>
                            <img src={product.imgproducto} alt={product.producto} />
                            <div className='card-body botones-card-detalles'>
                                <button className='btn btn-warning text-white'><Link className='link' to={`/edit-product/${product.id}`}>Editar Producto</Link> </button>
                                <button className='btn btn-danger text-white'><Link className='link' to={`/delete-product/${product.id}`}>Eliminar Producto</Link></button>
                                <button className='btn btn-info text-white'><Link className='link' to="/">Volver</Link></button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ProductDetails;
