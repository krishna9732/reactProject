import { useNavigate } from 'react-router-dom';
import './header.css'

function Header(){
    const navigate = useNavigate()
    const logout = () =>{
        navigate('/login')
    }
    return <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
            <a href="home">Home</a>
            <a href="contact">Contact</a>
            <a href="login" onClick={logout}>Logout</a>
        </div>
    </div>
}

export default Header;