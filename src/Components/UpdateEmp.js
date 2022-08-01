import React, { useState } from "react";

 

const UpdateEmp = () => {
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
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emp_id:inputs.emp_id, emp_name: inputs.emp_name,
            emp_age : inputs.emp_age,emp_address : inputs.emp_address, 
            emp_designation : inputs.emp_designation, mng_empid : inputs.mng_empid,
            emp_phno : inputs.emp_phno, emp_email : inputs.emp_email, emp_leaveBal : inputs.emp_leaveBal,
            leave_typeid : inputs.leave_typeid
         })
        };
        fetch('http://localhost:13874/api/empdatas/'+inputs.emp_id, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1));
    }

 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>EmployeeID</label><br></br>
                <input type="number" id="emp_id" onChange={handleChange}></input><br></br>
                <label>Name</label><br/>
                <input type="text" id="emp_name" onChange={handleChange}></input><br></br>
                <label >age</label><br/>
                <input type="number" id="emp_age" onChange={handleChange}></input><br/>
                <label>Address</label><br/>
                <input type="text" id="emp_address" onChange={handleChange}></input><br></br>
                <label>Designation</label><br/>
                <input type="text" id="emp_designation" onChange={handleChange}></input><br></br>
                <label>Manager's Emp ID</label><br/>
                <input type="number" id="mng_empid" onChange={handleChange}></input><br></br>
                <label>Phone Number</label><br/>
                <input type="number" id="emp_phno" onChange={handleChange}></input><br></br>
                <label>Email</label><br/>
                <input type="text" id="emp_email" onChange={handleChange}></input><br></br>
                <label>Leave Balance</label><br/>
                <input type="number" id="emp_leaveBal" onChange={handleChange}></input><br></br>
                <label>Leave Type ID</label><br/>
                <input type="number" id="leave_typeid" onChange={handleChange}></input><br></br>
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

 

export default UpdateEmp;
