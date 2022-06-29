import { useEffect, useState } from "react"
import React from 'react';
import './product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "./serviceCall/app";

function Product() {
  const [userName, setUserName] = useState('');
  const [userAddress, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading,setLoader] = useState('');
  const [isSubmit,setSubmit] = useState('');
  const [id,setId] = useState('');
  const [isEdit,setEdit] = useState(false);

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
    // {
      isEdit ? editData() : saveData()
    // }
  };
  const editData = async event =>{
    const reqData = {
      "name":userName,
      "email":email,
      "phone":contact,
      "address":userAddress
    }
    const data =JSON.stringify(reqData);
    let apiData = await api.patch('students/'+id,data);
    let res = await apiData.data;
    console.log(res);
      toast.success(res.message);
      getUserList();
      setSubmit(false);
      setUserName('');
      setEmail('');
      setAddress('');
      setContact('');
      setEdit(false);
  }
  
  const saveData = async event =>{
    const reqData = {
      "name":userName,
      "email":email,
      "phone":contact,
      "address":userAddress
    }
  const data =JSON.stringify(reqData);
    try {
      let apiData = await api.post('students',data);
      let res = await apiData.data;
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
  const deleteData = async event =>{
      try {
        let apiData  = await api.delete('students/'+id);
        let res = await apiData.data;
        toast.info(res.message);
        getUserList();
      } catch (error) {
        console.log(error);
      }
  }



  const getUserList= async event => {
    try {
      setLoader(true)
      let apiData = await api.get("students");
      setLoader(false);
      let res = await apiData.data;
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
    <div >
          <div className="proDe">
                {isEdit ? <h1>Edit Employee</h1> :<h1>Save Employee</h1>}
                
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
                  {
                  isEdit ? <button type="submit" disabled={isSubmit}> {isSubmit ? "Loading..." : "Edit data"} </button> : <button type="submit" disabled={isSubmit}> {isSubmit ? "Loading..." : "Submit"} </button>  
                }
                </form>
          </div>

      <div className="absolute">
        <h1 style={{padding:'10px'}}>Table List</h1>
        <div style={{padding: '20px'}}>
                   <div>
          <table className="customers">
          <thead className="thead-dark">
            <th>Index</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
            <th></th>
          </thead>
          {isLoading ? <div className="mainDiv"><div class="lds-facebook"><div></div><div></div><div></div></div></div>  : <tbody >
            {userList.map((x,i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>{x.address}</td>
                <td style={{    cursor: 'pointer'}} onClick={()=>{
                    setUserName(x.name);
                    setAddress(x.address);
                    setEmail(x.email);
                    setContact(x.phone);
                    setEdit(true);
                    setId(x._id)
                }}>Edit</td>
                <td style={{    cursor: 'pointer'}} onClick={()=>{
                    setId(x._id);
                    deleteData();
                }}>Delete</td>
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