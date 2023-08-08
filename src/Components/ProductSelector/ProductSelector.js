import React, { useState } from 'react';
import './ProductSelector.css';



const ProductSelector = ({ onProductSelect }) => {
  
  const [selectedProducts, setSelectedProducts] = useState([]);
 

  // Function to handle product selection
  const handleProductSelect = (event) => {
    const productName = event.target.value;
    if (selectedProducts.includes(productName)) {
      setSelectedProducts(selectedProducts.filter((product) => product !== productName));
    } else {
      setSelectedProducts([...selectedProducts, productName]);
    }
    if (onProductSelect) {
      onProductSelect(selectedProducts); // Pass the updated selectedProducts array to the parent component
    }
  };


  const products = [
    {
      name: 'Product A',
      modules: ['Module A1', 'Module A2', 'Module A5']
    },
    {
      name: 'Product B',
      modules: ['Module B1', 'Module B2', 'Module B3']
    },
    {
      name: 'Product C',
      modules: ['Module C1']
    },
    {
      name: 'Product D',
      modules: ['Module D1', 'Module D3']
    }
  ];

  return (
    <div className='product-container'>
      <h4>Product Selector</h4>
      <div className='product-select'>
      {products.map((product) => (
        <div key={product.name}>
          <label>
            <input
              type="checkbox"
              value={product.name}
              checked={selectedProducts.includes(product.name)}
              onChange={handleProductSelect}
            />
            {product.name}
          </label>
          {selectedProducts.includes(product.name) && (
            <ul style={{ listStyleType: 'none'}}>
              {product.modules.map((module) => (
                <li key={module}>
                  <label>
                    <input
                      type="checkbox"
                      value={module}
                      checked={selectedProducts.includes(module)}
                      onChange={handleProductSelect}
                    />
                    {module}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default ProductSelector;
