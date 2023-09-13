import './App.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {name: "Pulla", price: 10},
    {name: "Porkkana", price: 5},
    {name: "Tomaatti", price: 3}
  ]);

  //function osta() {}
  const osta = (e, index) => {
    e.preventDefault();
    const product = products[index];
    setCart([...cart,product])

  }
  
  return (
    <div id="container">
      <h1>My Shopping Cart</h1>
      <p><FaShoppingCart />{cart.length}</p>
      {
        products.map((product, index) =>(
          <div id="item" key={index}>
            <form onSubmit={(e) => osta(e, index)}>
              <h3>{product.name}</h3>
              <p>{product.price}€</p>
              <button>Osta pois</button>
            </form>
          </div>
        ))
      }

    </div>
  );
}

export default App;
