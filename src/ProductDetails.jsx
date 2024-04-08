import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import AddCardBtn from "./AddCardBtn.jsx";
import "./DairyItemsCards.css";

function ReceiverComponent() {
    const [filterData, setfilterData] = useState([]);

    const location = useLocation();
    const receivedData = location.state && location.state.userData;

    const productTypeId = receivedData.producttype_id; //Product id for filter related product
    const subServiceId=receivedData.sub_service_id;


    async function apidata() {
        const apiUrl = "https://putatoetest-k3snqinenq-uc.a.run.app/v1/api/ProductAccordingToSubServiceFilter_withcolor/0";
        const payload = {
            brand_id: [],
            quantity_id: [],
            rating: null,
            service_id: "6",
            sort_by: null,
            sub_service_id: subServiceId,
            color_code: [],
            product_type_id: [1445],
        };
        const authToken = "RSLWI15YALYAWDZH46A29DKHXC96BELUYNRKIHCGMGAF6NTOAF";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authtoken: authToken,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            let data = await response.json();

            setfilterData(data.product_list);

            console.log("Data1 = ", filterData);
            console.log("Data1 id = ", receivedData.producttype_id,"ID = ", receivedData.service_id,"ID1 = ",sunServiceId);
            console.log("productTypeId c = ",productTypeId);


        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    useEffect(() => {
        apidata();
    }, []);

    return (
        <>
            {filterData.map((element, index) => (
                <div className="filterDatacard" key={index}>
                    <div className="dairyItems">
                        <img className="productImage" src={element.logo} alt="productImage" />
                    </div>
                    <h3 className="brandName">{element.brand}</h3>
                    <h3 className="productName">{element.product_name}</h3>
                    <h4 className="productType">{element.producttype}</h4>
                    <p className="p3"> <b>Rs. {element.price}</b> <span> M.R.P Rs.{element.qty_list[0].actual_price}</span></p>
                    <p>{element.discount} % OFF</p>
                    <p className="p4">{element.stock_status} </p>
                    <p>Unit: {element.qty_list[0].units}</p>
                    <AddCardBtn />
                </div>
            ))}
        </>
    );
}

export default ReceiverComponent;