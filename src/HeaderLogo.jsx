import "./HeaderLogo.css";

function LogoDiv() {
    return (
        <div className="LogoDiv">
           <img className="LogoImg" src="https://putatoetest.web.app/static/media/logo.aa9da4f6375a03f8abbe.png" alt="COMPANY-LOGO" />
           <section className="logo-text">
            <h1 className="Logoh1">PUTATOE</h1>
            <span className="Logoh1-lower">One Solution</span>
           </section>
        </div>
    );
}

export default LogoDiv;