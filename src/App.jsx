import { useState } from 'react';
import { Header } from './components/producto/Header';
import { ProductList } from './components/producto/ProductList';
import Formulario from './components/formulario/form';
import Ingresa from './components/formulario/formIngresa';
import { UserProvider } from './components/formulario/userProvider';

import './App.css'
import Home from './components/home/home';
import Programacion from './components/programacion/Programacion';
import { NotFound } from './components/notfound/notfound';

import { Routes, Route} from 'react-router-dom';
import { Nav } from './components/nav/nav';

export const App = () => {

  const [allProducts, setAllProducts]=useState([]);
  const [total, setTotal]=useState(0);
  const [countProducts, setCountProducts]=useState(0);

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Header' element={[<Header  allProducts={allProducts} 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}/>,<ProductList allProducts={allProducts} 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}/> ]}/>
        <Route path='/Ingresa' element={<UserProvider><Ingresa/></UserProvider>} />
     
      <Route path='/Formulario' element={<Formulario/>}/>
      <Route path='/Programacion' element={<Programacion/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    </>
  );
}
