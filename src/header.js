import { useNavigate } from 'react-router-dom';
import './header.css'

function Header(){
    const navigate = useNavigate()
    const logout = () =>{
        navigate('/login')
    }
    return <div class="header">
        <a href="#default" class="logo">CompanyLogo</a>
        <div class="header-right">
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#logout" onClick={logout}>Logout</a>
        </div>
    </div>
}

export default Header;