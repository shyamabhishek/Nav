import React, { useState } from "react";

 

const ApproveLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const [Leave_status, setLeave_status] = useState("");

    useEffect(() => {
        getUsers();
      }, [])
      function getUsers() {
        fetch("http://localhost:4000/todo").then((result) => {
          result.json().then((resp) => {
            // console.warn(resp)
            setUser(resp)
            setName(resp[0].name)
            setMobile(resp[0].mobile)
            setEmail(resp[0].email)
            setUserId(resp[0].id)
          })
        })
      }
    
      function deleteUser(id) {
        fetch(`http://localhost:4000/todo/${id}`, {
          method: 'DELETE'
        }).then((result) => {
          result.json().then((resp) => {
            console.warn(resp)
            getUsers()
          })
        })
      }
      function selectUser(id)
      {
        let item=users[id-1];
        setName(item.name)
            setEmail(item.email)
            setMobile(item.mobile);
            setUserId(item.id)
      }
      function updateUser()
      {
        let item={name,mobile,email}
        console.warn("item",item)
        fetch(`http://localhost:4000/todo/${userId}`, {
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
    
        // alert(inputs.desc);

 

        


  
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Leave Status</label><br/>
                    
                    
                    <input type="text" value={Leave_status} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />

                    
                    <button onClick={updateUser} >Submit</button> 
                    
                    <input type="submit"></input><br/>
                    

                    {submit && 
                        <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

 

 export default ApproveLeave;