import React, { useState } from "react";

 

const ApproveLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

 

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  emp_id : inputs.emp_id, 
                emp_name : inputs.emp_name, Leave_Reason : inputs.Leave_Reason, 
                Leave_Type_Id : inputs.Leave_Type_Id, From_Date : inputs.From_Date,
                To_Date : inputs.To_Date, Leave_status : inputs.Leave_status,
                mgr_empid : inputs.mgr_empid
         })
        };
        fetch('http://localhost:13874/api/leaves/', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.Sr_No));
    }


    return (
    
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Employee ID</label><br/>
                    <input type="number" id="emp_id" onChange={handleChange}></input><br></br>
                    <label>Employee Name</label><br/>
                    <input type="text" id="emp_name" onChange={handleChange}></input><br></br>
                    <label>Leave Reason</label><br/>
                    <input type="text" id="Leave_Reason" onChange={handleChange}></input><br></br>
                    <label>Leave Type Id</label><br/>
                    <input type="number" id="Leave_Type_Id" onChange={handleChange}></input><br></br>
                    <label>From Date</label><br/>
                    <input type="date" id="From_Date" onChange={handleChange}></input><br></br>
                    <label>To Date</label><br/>
                    <input type="date" id="To_Date" onChange={handleChange}></input><br></br>
                    <label>Your Manager Id</label><br/>
                    <input type="number" id="mgr_empid" onChange={handleChange}></input><br></br>
                    <label>Leave Status</label><br/>
                    <input type="text" id="Leave_status" onChange={handleChange}></input><br></br>
                    <input type="submit"></input><br/>

                    {submit && 
                        <label>Response Submitted</label>
                    }
                </form>
            </div>
    );
}



export default ApproveLeave;