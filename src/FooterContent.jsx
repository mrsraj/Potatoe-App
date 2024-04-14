
import "./footerContent.css";

function FooterContent() {
    return (
        <div className="footerContent">

            <div className="footerText">
                <h2 className="hp">USEFUL LINKS</h2>
                <p className="P">Recharge & Payments</p>
                <p className="P">Jobs & internships</p>
                <p className="P">Blog Posts</p>
                <p className="P">Promotions</p>
                <p className="P">Loans</p>
            </div>

            <div className="footerText">
                
                <h2 className="hp">ABOUT POTATOE</h2>
                <p className="P">About us</p>
                <p className="P">Contact us</p>
                <p className="P">Terms and conditions</p>


            </div>

            <div className="footerText">
                <h2 className="hp">POPULAR SEARCH</h2>
                <a className="P" href="#">Grocery</a><br />
                <a className="P" href="#">Construction</a><br />
                <a className="P" href="#">Daily Needs</a><br />
                <a className="P" href="#">Courier Service</a><br />
                <a className="P" href="#">Education</a><br />
                <a className="P" href="#">Laundry Service</a><br />
            </div>

            <div className="footerText">
                <h2 className="hp">CONNECT WITH US</h2>
            </div>

        </div>
    );
}

export default FooterContent;