import React, { useState } from "react";

 

const DeleteEmp = () => {
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
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
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
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

 

export default DeleteEmp;