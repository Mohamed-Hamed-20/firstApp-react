

// src/App.js
import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Import your images
import laptopImage from './assets/laptop.jpg';
import smartphoneImage from './assets/iphone.jpg';
import headphonesImage from './assets/Headphones.webp';
import keyboardImage from './assets/keyboard.webp';
import mouseImage from './assets/mouse.jpg';
import monitorImage from './assets/monitor.jpg';
import webcamImage from './assets/webcam.webp';
import printerImage from './assets/printer.avif';


const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const initialProducts = [
      { id: 1, name: 'Laptop', price: 999.99, imageUrl: laptopImage },
      { id: 2, name: 'iPhone', price: 699.00, imageUrl: smartphoneImage },
      { id: 3, name: 'Headphones', price: 149.50, imageUrl: headphonesImage },
      { id: 4, name: 'Keyboard', price: 79.99, imageUrl: keyboardImage },
      { id: 5, name: 'Mouse', price: 29.99, imageUrl: mouseImage },
      { id: 6, name: 'Monitor', price: 249.00, imageUrl:monitorImage },
      { id: 7, name: 'Webcam', price: 59.99, imageUrl: webcamImage },
      { id: 8, name: 'Printer', price: 179.50, imageUrl: printerImage},
    ];
    setProducts(initialProducts);
  }, []);

  const handleUpdatePrice = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, price: product.price + 1 } : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Product List</h1>
      <Search onSearch={handleSearch} />
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <ProductCard
              product={product}
              onUpdatePrice={handleUpdatePrice}
              onDelete={handleDeleteProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;