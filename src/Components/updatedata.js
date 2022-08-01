import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [leave_status, setleave_status] = useState("");
  
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:13874/api/leaves/").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setleave_status(resp[0].name)
        setUserId(resp[0].id)
      })
    })
  }

  
  function selectUser(id)
  {
    let item=users[id-1];
    setleave_status(item.leave_status)
        
  }
  function updateUser()
  {
    let item={leave_status}
    console.warn("item",item)
    fetch(`http://localhost:13874/api/leaves${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <label>Id</label><br></br>
                <input type="number" id="Sr_No" onChange={handleChange}></input><br></br>
                <label>Leave_status</label><br/>
                <input type="text" id="leave_status" onChange={handleChange}></input><br></br>
                
                {/* <label>Name</label><br/>
                <input type="text" id="name" onChange={handleChange}></input><br></br>
                <label >Description</label><br/>
                <input type="number" id="age" onChange={handleChange}></input><br/> */} 
                <button onClick={updateUser} >Update User</button>  
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
  );
}
export default App;
