import { Link } from 'react-router-dom';
import './signup.css';

function Register(){
    const pageName = "Create Student Account";

    const HandleSubmit = (event) =>{
        event.preventDefault();
        const registerData = {
            name: event.target[0].value,
            email:event.target[1].value,
            pass:event.target[3].value
        }

        console.log('registerdata', registerData);
    }

    const signUpForm = (<div className='containRB'>
    <h1 >{pageName}</h1>
    <form className='form-designR' onSubmit={HandleSubmit}>
        <div>
            <label>Full Name : </label>
            <input className='ABCR' type="text" name="name"/>
        </div>

        <div className='content-divR'>
            <label>Email : </label>
            <input className='ABCR' type="email" name="name"/>
        </div>

        <div className='content-divR'>
            <label>Password : </label>
            <input className='ABCR' type="password" name= "pass" />
        </div>
        
        <div className='content-divR '>
            <input className='subR' type="submit"/>
        </div>
        <div  className='regR'>
            <Link to="/login">login</Link>
        </div>
    </form>
</div>)
    return signUpForm
}

export default Register;