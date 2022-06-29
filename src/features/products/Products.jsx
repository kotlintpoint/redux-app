import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from './productActions';
import ProductList from './ProductList';

function Products() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.productData);
    console.log('Data',data);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

  return (
    <div>
        <h1>Products</h1>
        
        { data.isLoading && <p>Fetching Data...</p> }
        { data.error && <p> { data.error } </p>}
        { data.products.length>0 && <ProductList products={data.products} /> }
    </div>
  )
}

export default Products