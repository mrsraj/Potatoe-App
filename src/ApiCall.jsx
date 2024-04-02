import React, { useState, useEffect } from 'react';

function ApiTest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://putatoetest-k3snqinenq-uc.a.run.app/v1/api/homepage_prodcuct_new_api/6", {
          headers: {
            'authtoken': 'NNHR6DQ6YJXYMV3RTNNLHAMOBNHYF6X51ZK5H0ZI05HCFAE1QE',
          }
        });


        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const productList = data.popularproduct['Dairy Products'].map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          imageUrl: product.imageUrl,
          price: product.price
        }));

        setProducts(productList);

      } 
      
      catch (error)
      {
        console.error('Error:', error);
      }

    };

    fetchData();

  }, []);

  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApiTest;