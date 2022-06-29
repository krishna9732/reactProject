import { Link } from "react-router-dom";
import './resetPass.css'

function Reset(){
    const HandleSubmit = (event) =>{

    }
    
    const resetPass=(<div className="containF">
                <form className='form-design' onSubmit={HandleSubmit}>
                <h1>Reset Password</h1>
                <div>
                    <label>Old Password: </label>
                    <input className='ABC' type="text" name="name"/>
                </div>

                <div className='content-divF'>
                    <label>New Password : </label>
                    <input className='ABC' type="text" name= "pass" />
                </div>
                
                <div className='content-divF '>
                    <input className='subF' type="submit"/>
                </div>
                <div  className='regF'>
                    <Link to="/login">login</Link>
                </div>
            </form>
    </div>)

    return resetPass;
}

export default Reset;