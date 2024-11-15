import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductContextProvider } from './context/ProductContext';
import ProductDetails from './componentes/Products/ProductDetails';
import ProductForm from './componentes/Products/ProductForm';
import ProductEdit from './componentes/Products/ProductEdit';
import ProductDelete from './componentes/Products/ProductDelete';
import Layout from './componentes/Layout';
import Home from './vistas/Home';
import Contacto from './vistas/Contacto';
import Productos from './vistas/Productos';
import './App.css';

const App = () => {
  return (
    <ProductContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/create-product" element={<ProductForm />} />
            <Route path="/edit-product/:id" element={<ProductEdit />} />
            <Route path="/delete-product/:id" element={<ProductDelete />} />
          </Routes>
        </Layout>
      </Router>
    </ProductContextProvider>
  );
};

export default App;