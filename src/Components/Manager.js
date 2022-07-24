import  {React ,useState, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";

const Home = (props)=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:13874/api/managerDatas/")
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
        sessionStorage.setItem("mgr_empid",EmpId);
        sessionStorage.setItem("users",JSON.stringify(items[EmpId]))
      };
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="table-welcome">
            <h1 >Welcome to Manager Portal</h1>
            <table class="table table-striped table-dark">
            <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      
                     
                    </tr>  
            </thead>
                
                {items.map(item => (
                    
                    <tr >
                    <td >
                        {item.mgr_empid}
                    </td>
                    <td>
                        {item.mgr_name} 
                    </td>
                   
                   
                    <td > <Link to="Managerlogin"><button id={tId++} onClick={handleClick}>Login</button></Link>
                    </td>
                    </tr>
                    
                ))}
                
            </table>
            <Outlet/>
            </div>
        );
    }
};
export default Home;