import "./Container.css"
import Footer from './Footer.jsx';
import DairyProduct from "./DairyProduct.jsx";
import {ProductCategory,FootwearProduct,FruitsAndVegitable,Grocery} from "./ProductCategory.jsx";
import FeatureContainer from "./FeatureContainer.jsx";
// import FootwearItems from "./FootwearContainer.jsx";
import FootwearProducts from "./FootwearContainer.jsx";
import FruitAndVegitableProducts from "./Fruits&VegitablesContainer.jsx";
import GroceryContainer from "./GroceryContainer.jsx";


function Container(){
    return (

    <div className="Container">
        <FeatureContainer/>

        <ProductCategory />
        <DairyProduct/>

        <FootwearProduct />
        <FootwearProducts/>
        
        <FruitsAndVegitable/>
        <FruitAndVegitableProducts/>

        <Grocery/>
        <GroceryContainer/>
       
        <Footer/>
    </div>

    );
}

export default Container;
