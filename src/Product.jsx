import React, { useState } from 'react';

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };
//hola
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleAddProduct = () => {
    if (!productName || !productPrice) return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: productPrice,
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product CRUD</h1>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductNameChange}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={handleProductPriceChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCRUD;