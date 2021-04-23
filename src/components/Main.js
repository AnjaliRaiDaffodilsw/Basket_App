import React from 'react'
import Product from './Product';

function Main(props) {
    const {products ,onAdd} = props;
    return (
      <>
      <main className="block2">          
            <h2>
                Groceries
           </h2>
           <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} 
          onAdd = {onAdd}></Product>
        ))}
      </div>
    </main>
    <br/>

    <button className ="rightDiv"> ❌  </button>
    </>
    )
}

export default Main
