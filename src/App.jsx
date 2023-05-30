import { useState } from 'react';
import { Header } from './components/producto/Header';
import { ProductList } from './components/producto/ProductList';
import Formulario from './components/formulario/form';

import './App.css'
import Home from './components/home/home';

function App() {

  const [allProducts, setAllProducts]=useState([]);
  const [total, setTotal]=useState(0);
  const [countProducts, setCountProducts]=useState(0);

  return (
    <>
      <Header 
        allProducts={allProducts} 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList 
        allProducts={allProducts} 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Home></Home>

      
      <Formulario></Formulario>
    </>
  );
}

export default App;
