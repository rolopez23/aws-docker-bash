import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



const App = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(async ()=>{
    try {
      const response  = await axios.get('/atelier/products');
      setProducts(response.data)
    } catch(err) {
      setError(err)
    }

  }, [])
  if(error) {
    return <h1>Oops...</h1>
  }
  return (
    <>
      <h1>These are your products</h1>
      <ul>
        {products.map((product)=>(<li key={product.id}>{product.id}</li>))}
      </ul>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
