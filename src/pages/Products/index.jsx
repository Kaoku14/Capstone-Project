import { useState, useEffect, } from 'react';
import records from '../../assets/Products/Products.json';
import SearchBar from '../../components/SearchBar';
import '../Products/app.css'


function Products() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    setProducts(records); 
  }, []); 

  const handleSearch = (searchTerm) => {
    
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} /> 
      {filteredProducts.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          {filteredProducts.map((product) => (
            <div key={product.name} className="box">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>All Products</h2>
          {products.map((product) => (
            <div key={product.id || product.name} className="box">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
