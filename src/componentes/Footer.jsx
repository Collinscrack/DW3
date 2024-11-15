import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="footer bg-dark text-white ">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h5>E-commerce</h5>
                        <p>© 2024 E-commerce. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link className='text-white'>Acerca de</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className='text-white'>Términos de servicio</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className='text-white'>Política de privacidad</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;