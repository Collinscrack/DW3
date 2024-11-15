import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { products, loading } = useContext(ProductContext);

    return (
        <div className="container pt-4">
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className="mb-0">Lista de Productos</h2>
                <button className='btn btn-primary agregar-btn'><Link className='linkadd text-white' to="/create-product">Agregar Producto</Link></button>
            </div>
            <div className="row justify-content-center">
                {loading ? (
                    <h2>Cargando...</h2>
                ) : (
                    products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card p-3 mb-4 shadow-sm">
                                <img src={product.imgproducto} className="card-img-top" alt={product.producto} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.producto}</h5>
                                    <p className="card-text">${product.precio}</p>
                                    <div className='d-flex justify-content-between'>
                                        <Link className='btn btn-info text-white' to={`/products/${product.id}`}>Detalles</Link>
                                        <Link className='btn btn-warning text-white' to={`/edit-product/${product.id}`}>Editar</Link>
                                        <Link className='btn btn-danger text-white' to={`/delete-product/${product.id}`}>Eliminar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;