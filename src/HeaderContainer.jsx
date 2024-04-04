import './HeaderContainer.css';
import LogoDiv from './HeaderLogo.jsx';
import CompanyLocation from './CompanyLocation.jsx';
import Search from './Search.jsx';
import LogIn from './LogIn.jsx';
import NotificationContaier from './NotificationContainer.jsx';

function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <LogoDiv/>
            <CompanyLocation/>
            <Search/>
            <NotificationContaier/>
            <LogIn/>
            
        </div>
    );
}

export default HeaderContainer;