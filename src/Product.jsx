import React, { useState } from 'react';
import './styles.css';


const Product = ({ product, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);



  const handleUpdate = () => {
    onUpdate({ id: product.id, description, price, quantity });
    setEditing(false);
  };

  return (
    <>
 
      <tr>
        <td>{product.id}</td>
        <td>
          {editing ? (
            <input
              type="text"
              className="input-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <span>{product.description}</span>
          )}
        </td>
        <td>
          {editing ? (
            <input
              type="number"
              className="input-field"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          ) : (
            <span>{product.price}</span>
          )}
        </td>
        <td>
          {editing ? (
            <input
              type="number"
              className="input-field"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          ) : (
            <span>{product.quantity}</span>
          )}
        </td>
        <td>{price * quantity}</td>
        <td>
          {editing ? (
            <button className="update-btn" onClick={handleUpdate}>
              Actualizar
            </button>
          ) : (
            <div className="button-container">
              <button className="delete-btn" onClick={() => onDelete(product.id)}>
                Eliminar
              </button>
              <button className="edit-btn" onClick={() => setEditing(true)}>
                Editar
              </button>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

const AddProductForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ description, price, quantity });
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit" className="add-btn">
        Agregar Producto
      </button>
    </form>
  );
};

const ProductTable = ({ products, onDelete, onUpdate, onAdd }) => {
  return (
    <div>
      
      <h2>Tabla de Productos</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
      <AddProductForm onAdd={onAdd} />
    </div>
  );
};



const App = () => {
  const [products, setProducts] = useState([
    { id: 1, description: 'Mesa', price: 10, quantity: 5 },
    { id: 2, description: 'Silla', price: 20, quantity: 10 },
  ]);

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  const handleAdd = (newProduct) => {
    const productId = products.length + 1;
    setProducts([...products, { id: productId, ...newProduct }]);
  };

  return (
    <div className="container">
      <h1 className="title">CRUD de Productos</h1>
      <ProductTable products={products} onDelete={handleDelete} onUpdate={handleUpdate} onAdd={handleAdd} />
    </div>
  );
};


export default App;