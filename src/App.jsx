import { useState } from 'react';
import { Header } from './components/header';
import { ProductList } from './components/ProductList';

import './App.css'
import Home from './assets/components/home/home'

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
    </>
  );
}

export default App;
