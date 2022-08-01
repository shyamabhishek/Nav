import  {React, useState, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import Table from 'react-bootstrap/Table'


 

const Leave = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

 

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:13874/api/leaves/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    var EmpId=0;
    var tId=0;
    const handleClick = event => {
        EmpId=event.currentTarget.id;
        console.log(EmpId);
        sessionStorage.setItem("Sr_No",EmpId);
        sessionStorage.setItem("leave",JSON.stringify(items[EmpId]))

      };

 

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="table-welcome">
               <Table stripped bordered hover size="sm">
                    <thead>
                            <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Employee's Manager ID</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Leave Reason</th>
                            <th scope="col">Leave Type ID</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Leave Status</th>
                            
                            
                            </tr>  
                    </thead>
               
                    
                    {items.map(item => (
                        
                        <tr>
                        <td>
                            {item.sr_No}
                        </td>
                        <td>
                            {item.emp_id} 
                        </td>
                        <td>
                            {item.mgr_empid}
                        </td>
                        <td> 
                            {item.emp_name}
                        </td>
                        <td>
                            {item.leave_Reason}
                        </td>
                    
                        <td>
                            {item.leave_Type_Id}
                        </td>
                        <td>
                            {item.from_Date}
                        </td>
                        <td>
                            {item.to_Date}
                        </td>
                        <td>
                            {item.leave_status}
                        </td>
                        <td > <Link to="ApproveLeave"><button id={tId++} onClick={handleClick}>Approve/Reject</button></Link>
                        </td>
                        </tr>
                        
                    ))}
                    
                </Table>
            </div>
        );
    }
};

export default Leave;