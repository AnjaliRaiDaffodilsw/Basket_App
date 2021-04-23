
import Header from './components/Header';
import Main from './components/Main';
import Basket from "./components/Basket";
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const [datas, filterText ] = useState([]);

  const nameList = products
  .filter(name => {
    return name.name.toLowerCase().toLowerCase().indexOf(filterText.toLowerCase()) >= 0
  })
      .map(name => {
        return (
          <li key = {name.id}>
             {name.name}
           </li>
        )
      })

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header />
     <nav>
       <form>
         <input type = "text" name ={nameList} value = "filter for e.g. Apple onChange (not implemented)"/>
       </form>
     </nav>
      <div className="row">
        <Main
          onAdd={onAdd}
          products={products} />
        <Basket
        
          onRemove = {onRemove}
          cartItems={cartItems}
        />
      </div>
      <footer>
        <div>
          <span>All</span>
          ", "
          <a href>Pending</a>
          ", "
          <a href>Purchased</a>
        </div>
      </footer>
    </div>

  )
}

export default App
