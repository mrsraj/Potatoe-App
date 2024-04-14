import "./FilterPage.css";

function FilterPage() {

    return (
        <div class="selection-panel-container">
            <div className="checklist-container">
                <div class="checklist-heading">Product Type</div>
                <div className="checklist-items-container">

                    < form action="#" className="FilterForm">
                        <div className="checklist-list">
                            <input type="checkbox" class="checklist-item" name="Dairy" id="74" value="74" />

                            <label htmlFor="74">
                                Dairy
                            </label>

                        </div>

                        <div className="checklist-list">
                            <input className="checklist-item" type="checkbox" name="CHOCLATE" id="1346" value="1346" />
                            <label htmlFor="1346">
                                Chocolate
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input className="checklist-item" type="checkbox" name="Amul biscuits" id="1040" value="1040" />
                            <label htmlFor="1040">
                                Amul biscuits
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input className="checklist-item" type="checkbox" name="Butter" id="690" value="690" />
                            <label htmlFor="690">
                                Butter
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Milky chocolate" id="1340" value="1340" />
                            <label htmlFor="1340">
                                Milky chocolate
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input className="checklist-item" type="checkbox" name="Milky dairy chocolate" id="1341" value="1341"></input>
                            <label htmlFor="1341">
                                Milky dairy chocolate
                            </label>
                        </div>

                    </form >
                </div>
            </div>

            <div className="checklist-container">
                <div class="checklist-heading">Brand</div>
                <div className="checklist-items-container">

                    < form action="#" className="FilterForm">
                        <div className="checklist-list">

                            <input class="checklist-item" type="checkbox" name="Berryland" id="4615" value="4615" />
                            <label htmlFor="4615">
                                Berryland
                            </label>

                        </div>

                        <div className="checklist-list">

                            <input class="checklist-item" type="checkbox" name="XYLO" id="4784" value="4784" />

                            <label htmlFor="4784">
                                XYLO
                            </label>
                        </div>



                        <div className="checklist-list">

                            <input class="checklist-item" type="checkbox" name="Devgad mangoes" id="4614" value="4614"></input>
                            <label htmlFor="4614">
                                Devgad mangoes
                            </label>
                        </div>

                        <div className="checklist-list">

                            <input class="checklist-item" type="checkbox" name="BHINDI" id="4743" value="4743"></input>
                            <label htmlFor="4743">
                                BHINDI
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Surya" id="2145" value="2145"></input>
                            <label htmlFor="2145">
                                Surya
                            </label>
                        </div>

                    </form >
                </div>
            </div>


            <div className="checklist-container">
                <div class="checklist-heading">Color</div>
                <div className="checklist-items-container">

                    < form action="#" className="FilterForm">
                        <div className="checklist-list">

                            <input class="checklist-item" type="checkbox" name="Red" id="#f00" value="#f00" />
                            <label htmlFor="#f00" style={{ color: '#f00' }}>
                                Red
                            </label>

                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Green" id="#0f0" value="#0f0" />
                            <label htmlFor="#0f0" style={{ color: '#0f0' }}>
                                Green
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Orange" id="#f70" value="#f70" />
                            <label htmlFor="#f70" style={{ color: '#f70' }}>
                                Orange
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Blue" id="#00f" value="#00f" />
                            <label htmlFor="#00f" style={{ color: '#00f' }}>
                                Blue
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="Yellow" id="#ff0" value="#ff0" />
                            <label htmlFor="#ff0" style={{ color: '#ff0' }}>
                                Yellow
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input class="checklist-item" type="checkbox" name="RED" id="#FA0202" value="#FA0202"></input>
                            <label htmlFor="#FA0202" style={{ color: '#FA0202' }}>
                                RED
                            </label>
                        </div>

                        <div className="checklist-list">
                            <input className="checklist-item" type="checkbox" name="GREEN" id="#00FF01" value="#00FF01" />
                            <label htmlFor="#00FF01" style={{ color: '#00FF01' }}>
                                GREEN
                            </label>
                        </div>

                    </form >
                </div>
            </div>


        </div>
    );

}

export default FilterPage;