
import "./FilterCss.css";
import ReceiverComponent from "./ProductDetails";
import FilterPage from "./FilterPage";

function FilterData() {
    return (
        <div className="FilterData">
            <div className="filterDataDiv">
                <ReceiverComponent />
            </div>
            <div className="filterCkeckBox">
                <FilterPage />
            </div>

        </div>
    );
}

export default FilterData;