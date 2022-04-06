import './login.css';

function Hee() {
    const loginData= {
        username:'krishna',
        pass:'1234'
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(loginData.username === event.target[0].value && loginData.pass === event.target[1].value){
            <h2>Welcome {event.target[0].value}</h2>
        }else{
            <h2 className='wr'> Wrong input</h2>
        }
        console.log(event.target[0].value)
    console.log(event.target[1].value)
    }
    const pageName = "Login Page"

    const loginForm = (<div className='contain'>
    <h1>{pageName}</h1>
    <form className='form-design' onSubmit={handleSubmit}>
        <div>
            <label>User name </label>
            <input type="text" name="name"/>
        </div>

        <div className='content-div'>
            <label>Password</label>
            <input type="password" name= "pass" />
        </div>
        
        <div className='content-div'>
            <input className='sub' type="submit"/>
        </div>
    </form>
</div>)

    return loginForm
}


export default Hee;