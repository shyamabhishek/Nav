import  {React, useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
//import "./All.css";

 

const AllEmp = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

 

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:13874/api/empdatas/")
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

 

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <table>
                
                {items.map(item => (
                    
                    <Table stripped bordered hover size="sm">


                    <tr>
                       
                       
                        <th>Employee ID</th>
                        <th>EmpLoyee Name</th>
                        <th>Employee Age</th>
                        <th>Employee Address</th>
                        <th>Employee Designation</th>
                        <th>Manager Employee ID</th>
                        <th>Employee Phone Number</th>
                        <th>Employee Email</th>
                        <th>Employee Leave Balance</th>
                    </tr>
                    <tr>

                        
                        <td>{item.emp_id}</td>
                        <td>{item.emp_name}</td>
                        <td>{item.emp_age}</td>
                        <td>{item.emp_address}</td>
                        <td>{item.emp_designation}</td>
                        <td>{item.mng_empid}</td>
                        <td>{item.emp_phno}</td>
                        <td>{item.emp_email}</td>
                        <td>{item.emp_leaveBal}</td>

                    </tr>
                </Table>
                ))}
                
            </table>
            </div>
        );
    }
};

export default AllEmp;