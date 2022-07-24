import { React, useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'


const Getmng = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var jsonObj

    const tem = sessionStorage.getItem("users");
    if (tem == null) {
        jsonObj = { id: null, name: "Tejas" }
    } else {
        jsonObj = JSON.parse(tem);
    }


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:13874/api/leaves")
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
            <>
                {items.map((item) => {

                    if (item.mgr_empid === jsonObj.mgr_empid) {
                        return (
                            <div>
                                <Table stripped bordered hover size="sm">
                                   

                                    <tr>
                                       
                                        <th>Sr No</th>
                                        <th>Emp ID</th>
                                        <th>Emp Name</th>
                                        <th>Leave Reason</th>
                                        <th>Leave Type ID</th>
                                        <th> From Date</th>
                                        <th>To Date</th>
                                        <th>Leave Status</th>
                                        <th>Manager Id</th>
                                    </tr>
                                    <tr>

                                        <td>{item.sr_No}</td>
                                        <td>{item.emp_id}</td>
                                        <td>{item.emp_name}</td>
                                        <td>{item.leave_Reason}</td>
                                        <td>{item.leave_Type_Id}</td>
                                        <td>{item.from_Date}</td>
                                        <td>{item.to_Date}</td>
                                        <td>{item.leave_status}</td>
                                        <td>{item.mgr_empid}</td>

                                    </tr>
                                </Table>
                            </div>
                        )
                    }
                    return null
                })}
            </>);
    }
};



export default Getmng;