import { useEffect, useState } from "react"
import React from 'react';
import './product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "./serviceCall/app";
import yesno from "yesno-dialog";


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

  const cancelData = ()=>{
      setSubmit(false);
      setUserName('');
      setEmail('');
      setAddress('');
      setContact('');
  }


  const deleteData = async event =>{
    const yes = await yesno({
      labelYes: "Yes",
      labelNo: "No",
      bodyText: "Are you sure! you want to delete this record?"
    });
    if (yes) {
      try {
        let apiData  = await api.delete('students/'+id);
        let res = await apiData.data;
        toast.info(res.message);
        getUserList();
      } catch (error) {
        console.log(error);
      }
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
                
                <form >  
                  <label >Name: </label>
                  <input id="fname" type="text" value={userName} onChange={userNameChange} />
                  <br/><br/>
                  <label>Email: </label>
                  <input id="email" type="email" value={email} onChange={emailChange} />
                  <br/><br/>
                  <label>phone: </label>
                  <input id="contact" type="text" value={contact} onChange={contactChange} />
                  <br/><br/>
                  <label>userAddress: </label>
                  <input id="lname" type="text" value={userAddress} onChange={userAddressChange} />
                  <br/><br/>
                  {
                  isEdit ? <button type="submit" style={{width:"50%"}} disabled={isSubmit} onClick={onSubmit}> {isSubmit ? "Loading..." : "Edit data"} </button> : <button type="submit"  onClick={onSubmit} disabled={isSubmit}> {isSubmit ? "Loading..." : "Submit"} </button>  
                }
                {
                  isEdit ?<button type="submit"  style={{width:"47%",marginLeft:'10px'}} onClick={cancelData}>cancel</button>:null
                }
                </form>
          </div>

      <div className="absolute">
        <h1 style={{padding:'10px'}}>Table List</h1>
        <div style={{padding: '20px'}}>
                   <div>
        {isLoading ? (<div className="mainDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>)  :
          <table className="customers">
          <thead className="thead-dark">
            <tr>
              <th>Index</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th style={{textAlign:'center'}}>Action</th>
            </tr>
          </thead>
           <tbody >
            {userList.map((x,i) => (
              <tr key={i}>
                <td key={i + 1}>{i + 1}</td>
                <td key={x.name}>{x.name}</td>
                <td key={x.email}>{x.email}</td>
                <td key={x.phone}>{x.phone}</td>
                <td key={x.address}>{x.address}</td>
                <td>
                  <span
                    style={{    cursor: 'pointer'}} onClick={()=>{
                      setUserName(x.name);
                      setAddress(x.address);
                      setEmail(x.email);
                      setContact(x.phone);
                      setEdit(true);
                      setId(x._id)
                  }}>Edit
                  </span>
                  <span style={{ cursor: 'pointer',marginLeft:'10px'}} onClick={()=>{
                    setId(x._id);
                    deleteData();
                }}>Delete
                  </span>
                </td>
                {/* <td style={{    cursor: 'pointer'}} onClick={()=>{
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
                }}>Delete</td> */}
              </tr>
            ))}
            {userList.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
          
        </table>
          }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product