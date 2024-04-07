import "./FeatureContainer.css";
import { Link } from "react-router-dom";

function FeatureContainer() {
    return (
        <div className="FeatureContainer">
            <div className="MobileRecharge">
                <a href="/Recharge">
                    <div className="Feature-image">
                        <img src="https://putatoetest.web.app/static/media/MobileRecharge.b28a4f43e33ff77a2d47591ef5c5d3bd.svg" alt="Recharge" />
                    </div>
                    <div className="Feature-text">RECHARGE</div>
                </a>
            </div>

            <div className="MobileRecharge">
                <a href="/BillPage">
                    <div className="Feature-image">
                        <img src="https://putatoetest.web.app/static/media/DTHrecharge.cc6eb273fb6bfff240daf749a2a444be.svg" alt="Bill Payment" />
                    </div>
                    <div className="Feature-text">BILL</div>
                </a>
            </div>

            <div className="MobileRecharge">
                <a href="#">
                    <div className="Feature-image">
                        <img src="https://putatoetest.web.app/static/media/Loan.f569309cacbcd1bd5e5d04724bc14df7.svg" alt="LOAN" />
                    </div>
                    <div className="Feature-text">LOAN</div>
                </a>
            </div>

            <div className="MobileRecharge">
                <a href="#">
                    <div className="Feature-image">
                        <img src="https://putatoetest.web.app/static/media/news.2e1df0dad7ad4b3cdae918ef0db8b65e.svg" alt="NEWS" />
                    </div>
                    <div className="Feature-text">NEWS</div>
                </a>
            </div>

            <div className="MobileRecharge">
                <a href="/JobsPage">
                    <div className="Feature-image">
                        <img className="Jobs" src="https://putatoetest.web.app/static/media/applyjob.4460d9567a4c3aac7f2cfd8a1ea5708b.svg" alt="JOBS" />
                    </div>
                    <div className="Feature-text">JOBS</div>
                </a>
            </div>

            <div className="MobileRecharge">
                <a href="/BlogsPage">
                    <div className="Feature-image">
                        <img src="https://putatoetest.web.app/static/media/blog.204e84112a700d5909c0adc0299276b5.svg" alt="BLOGS" />
                    </div>
                    <div className="Feature-text">BLOGS</div>
                </a>
            </div>


        </div>
    );
}

export default FeatureContainer;