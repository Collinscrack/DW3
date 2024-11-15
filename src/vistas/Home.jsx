import React from 'react';

const Home = () => {
    return (
        <div className="container contenedor-home">
            <div className="jumbotron text-center bg-light mb-4">
                <h1 className="display-4">Bienvenido a E-commerce</h1>
                <p className="lead">Encuentra los mejores productos al mejor precio.</p>
                <hr className="my-4" />
                <p>Explora nuestra amplia variedad de productos y encuentra lo que necesitas.</p>
            </div>
            <div className="row text-center">
                <div className="col-md-4 col-sm-12">
                    <h2>Calidad Garantizada</h2>
                    <p>Ofrecemos productos de la más alta calidad para asegurar la satisfacción de nuestros clientes.</p>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <h2>Precios Competitivos</h2>
                    <p>Tenemos precios inigualables para que puedas obtener más por tu dinero.</p>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <h2>Envío Rápido</h2>
                    <p>Disfruta de nuestro servicio de envío rápido y seguro a todo el país.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;