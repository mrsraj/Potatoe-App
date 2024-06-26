import "./DairyItemsCards.css";
import AddCardBtn from "./AddCardBtn.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function FruitsVegitaleItems() {
  const [FruitsVegitale, setFruitsVegitale] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://putatoetest-k3snqinenq-uc.a.run.app/v1/api/homepage_prodcuct_new_api/6", {
          headers: {
            'authtoken': "NNHR6DQ6YJXYMV3RTNNLHAMOBNHYF6X51ZK5H0ZI05HCFAE1QE",
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.popularproduct && data.popularproduct['Fruits & Vegetables']) {
          setFruitsVegitale(data.popularproduct['Fruits & Vegetables'].products);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, []);

  function handleClick(userData) {
    navigate('/receiver', { state: { userData } });
  }

  return (
    <>
      {isLoading ? (
        <div className="loader">
          Loading...
        </div>
      ) : (
        <>
          {FruitsVegitale.map((product) => (
            <div className="DairyItemsCards" key={product.id} onClick={() => handleClick(product)}>
              <div className="dairyItems">
                
                <img className="productImage" src={product.logo} alt="productImage" />
              </div>
              <h3 className="brandName">{product.bran_name}</h3>
              <h3 className="productName">{product.name}</h3>
              <h4 className="productType">{product.product_type}</h4>
              <p className="p1">{product.description}</p>
              <p className="p2">{product.brand}</p>
              <p className="p3"> <b>Rs. {product.price}</b> <span> M.R.P Rs.{product.qty_list[0].actual_price}</span></p>
              <p>{product.discount} % OFF</p>
                  
              <p>{product.brand}</p>
              <p className="p4">{product.stock_status} </p>
              <p>Unit: {product.qty_list[0].units}</p>
              <AddCardBtn />
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default FruitsVegitaleItems;