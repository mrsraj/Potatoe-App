
import './ServiceModel.css';

import { useState } from 'react';



function ServiceModel() {

    const [ShowModel, setShowModel] = useState(false);


    function MyModel() {
        return (
            <div className="ServiceModel">
                <button className='CancelModel' onClick={()=>{setShowModel(false)}}>X</button>
                <div className='ServiceHeader'><h4 className='ServiceHeader'>Choose Services Of Your Choice</h4></div>
                <div className='ModelContentDiv'>
    
                    <div className='A'>Agriculture & Farming</div>
                    <div className='A'>Beauty & Hygiene</div>
                    <div className='A'>Books & Stationery</div>
                    <div className='A'>Cleaning & Household Needs</div>
                    <div className='A'>Computer & IT Solutions</div>
                    <div className='A'>Construction</div>
                    <div className='A'>Consultancy</div>
                    <div className='A'>Daily Needs</div>
                    <div className='A'>Education</div>
                    <div className='A'>Electronics & Electrical Appliances</div>
                    <div className='A'>Event Management</div>
                    <div className='A'>Food & Beverages</div>
                    <div className='A'>Furniture & Supplies</div>
                    <div className='A'>GYM and Fitness</div>
                    <div className='A'>Handicrafts & Decoratives</div>
    
                </div>
            </div>
    
        );
    }

    return (
        <>
            <button className='ButtonShow' onClick={()=>{setShowModel(true)}}>Other Services</button>
            { ShowModel && <MyModel/>}
        </>
    );
}

export default ServiceModel;