import { useNavigate } from 'react-router-dom';
import './header.css'
import logo from './logo192.png';

function Header(){
    const navigate = useNavigate()
    const logout = () =>{
        navigate('/login')
    }
    return <div className="header">
        <span href="#default" className="logo"><img src={logo} style={{height:'40px'} } alt=''/></span>
        <div className="header-right">
            <a href="home">Home</a>
            <a href="contact">Contact</a>
            <a href="login" onClick={logout}>Logout</a>
        </div>
    </div>
}

export default Header;