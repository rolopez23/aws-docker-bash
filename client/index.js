import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary.jsx'


const App = () => {
  const [products, setProducts] = useState([])
  useEffect(async ()=>{
    try {
      const response  = await axios.get('/atelier4/products');
      setProducts(response.data)
    } catch(err) {
      console.log(err)
      throw err
    }

  }, [])

  return (
    <ErrorBoundary>
      <h1>These are your products</h1>
      <ul>
        {products.map((product)=>(<li key={product.id}>{product.id}</li>))}
      </ul>
    </ErrorBoundary>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
