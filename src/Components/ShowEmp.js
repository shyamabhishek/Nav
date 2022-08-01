import  {React, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";



const ShowEmp = (props)=>{
  const [items, setItems] = useState([]);
    const tem=sessionStorage.getItem("users");
    var [ManagerDetails, SetManagerDetails]  = useState(null) 
    var jsonObj
    if (tem==null){
      jsonObj={id:null,name:"Somdutta"}
    }else{
      jsonObj = JSON.parse(tem);
    
    }
    useEffect(() => {
      console.log(jsonObj.mng_empid)
      fetch("http://localhost:13874/api/empdatas/"+jsonObj.mng_empid)
      .then(res => res.json())
      .then((result) => {
            SetManagerDetails(result)
            console.log(result["emp_id"])
      })
      .catch((error) => {console.log(error)})
    }, [])
    var EmpId=0;
    var tId=0;
    const handleClick = event => {
        EmpId=event.currentTarget.id;
        console.log(EmpId);
        sessionStorage.setItem("Sr_No",EmpId);
        sessionStorage.setItem("leave",JSON.stringify(items[EmpId]))

      };

    return (<>
        <div >
       
        <h2> Employee Section </h2>
        <table width="100%" height="0" border="1" cellspacing="0" cellpadding="5"> 
              <td>  Employee ID : { jsonObj.emp_id }</td>
                    
              <td>  Employee Name :{ jsonObj.emp_name }</td>
                    
              <td>  Employee Department :{ jsonObj.emp_designation }</td>
                    
              <td> Employee Phone :{jsonObj.emp_phno }</td>
        
              <td>  Employee Email :{ jsonObj.emp_email }</td>
              <td>  Leave Balance :{ jsonObj.emp_leaveBal }</td>
        
        
            </table>
      </div>
     { ManagerDetails && <div>
       <h2> Manager Section </h2>
       <table width="100%" height="0" border="1" cellspacing="0" cellpadding="5"> 
             <td>  Manager ID : { ManagerDetails.emp_id}</td>
                   
             <td>  Manager Name :{ ManagerDetails.emp_name }</td>
                   
             
                   
             <td> Manager Phone :{ManagerDetails.emp_phno}</td>
       
             <td>  Manager Email :{ ManagerDetails.emp_email}</td>
       
           </table>
           
           <td > <Link to="/ApplyLeave"><button style={{width:170,backgroundColor:'#FFB6C1',marginLeft:550,}} onClick={handleClick}>Apply For Leave</button></Link>
                        </td>
     </div>}
     </>
  )
};
export default ShowEmp;
