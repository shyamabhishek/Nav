import React, { useState } from "react";

const ApproveLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const tem = sessionStorage.getItem('leave');
    var leave = JSON.parse(tem);

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sr_No : leave.sr_No,
                emp_id : leave.emp_id, 
                emp_name : leave.emp_name,
                leave_Reason : leave.leave_Reason,
                leave_Type_Id : leave.leave_Type_Id,
                from_Date : leave.from_Date,
                to_Date : leave.to_Date,
                leave_status : inputs.leave_status,
                mgr_empid : leave.mgr_empid
         })
        };
        fetch('http://localhost:13874/api/leaves/'+inputs.sr_No, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1)).then(window.location="/Leave");
    }

 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Id</label><br></br>
                <input type="number" id="sr_No" onChange={handleChange}></input><br></br>
                <label>Leave_status</label><br/>
                <input type="text" id="leave_status" onChange={handleChange}></input><br></br>
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

 

export default ApproveLeave;