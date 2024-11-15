import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { deleteProduct } = useContext(ProductContext);

    const handleDelete = () => {
        deleteProduct(id);
        navigate('/products');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center" style={{ width: '28rem' }}>
                <div className="card-body">
                    <h1 className="card-title">Eliminar Producto</h1>
                    <p className="card-text">¿Estás seguro de que quieres eliminar este producto?</p>
                    <div className="d-flex justify-content-around mt-4">
                        <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                        <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDelete;