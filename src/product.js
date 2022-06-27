import { useEffect, useState } from "react"
import React from 'react';
import './product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const [userName, setUserName] = useState('');
  const [userAddress, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading,setLoader] = useState('');
  const [isSubmit,setSubmit] = useState('');

  const [userList, setUserList] = useState([]);


  const userNameChange = event => {
    setUserName(event.target.value);
  };

  const userAddressChange = event => {
    setAddress(event.target.value);
  }

  const emailChange = event => {
    setEmail(event.target.value);
  };

  const contactChange = event => {
    setContact(event.target.value);
  }


  const onSubmit = event => {
    setSubmit(true);
    event.preventDefault();
    
    saveData()
  };
  
  const saveData = async event =>{
    const reqData = {
      "name":userName,
      "email":email,
      "phone":contact,
      "address":userAddress
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqData)
  };
    try {
      let apiData = await fetch("http://localhost:3001/students",requestOptions);
      let res = await apiData.json();
      console.log(res);
      toast.success(res.message);
      getUserList();
      setSubmit(false);
      setUserName('');
      setEmail('');
      setAddress('');
      setContact('');
    } catch (error) {
      console.log(error);
    }
  }

  const getUserList= async event => {
    try {
      setLoader(true)
      let apiData = await fetch("http://localhost:3001/students");
      setLoader(false);
      let res = await apiData.json();
      setUserList(res );
       
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserList();
  }, [])
  

  return (
    <>
   <ToastContainer
   style={{position: 'absolute',zIndex:'9999'}}
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <div style={{border:'2px solid rebeccapurple'}}>
          <div className="container">
                <h1>Save Employee</h1>
                <form onSubmit={onSubmit}>  
                  <label for="fname">Name: </label>
                  <input id="fname" type="text" value={userName} onChange={userNameChange} />
                  <br/><br/>
                  <label for="email">Email: </label>
                  <input id="email" type="email" value={email} onChange={emailChange} />
                  <br/><br/>
                  <label for="contact">phone: </label>
                  <input id="contact" type="text" value={contact} onChange={contactChange} />
                  <br/><br/>
                  <label for="lname">userAddress: </label>
                  <input id="lname" type="text" value={userAddress} onChange={userAddressChange} />
                  <br/><br/>
                  <button type="submit" disabled={isSubmit}> {isSubmit ? "Loading..." : "Submit"} </button>
                </form>
          </div>

      <div className="absolute">
        <h1>Table List</h1>
        <div style={{padding: '20px'}}>
          <button
            onClick={getUserList}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get User List"}
          </button>

          <div>
          <table className="customers">
          <thead className="thead-dark">
            <th>Index</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </thead>
          {isLoading ? <div className="mainDiv"><div class="lds-facebook"><div></div><div></div><div></div></div></div>  : <tbody >
            {userList.map((x,i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>
                {x.address}
                </td>
              </tr>
            ))}
            {userList.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>}
          
        </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product