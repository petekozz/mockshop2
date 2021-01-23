import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CategoriesList from './CategoriesList';
import {GET_PRODUCTS} from '../reducers/productsReducer';


function App() {
  return <>HELLO WORLD</>;
  
  useEffect( () => {
    dispatch(GET_PRODUCTS());
}

export default App;
