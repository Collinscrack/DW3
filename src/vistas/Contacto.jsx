import React from 'react';


const Contacto = () => {
    return (
        <div className="container d-flex flex-column justify-content-between pt-5 contenedor-contacto">
            <div className="jumbotron text-center bg-light p-5 mb-4">
                <h1 className="display-4">Contáctanos</h1>
                <p className="lead">Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                <hr className="my-4" />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Tu email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="4" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;