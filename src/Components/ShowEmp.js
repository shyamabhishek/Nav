import  {React, useEffect, useState} from "react";




const ShowEmp = (props)=>{
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
    return (<>
        <div >
       
        <h2> Employee Section </h2>
        <table width="100%" height="0" border="1" cellspacing="0" cellpadding="5"> 
              <td>  Employee ID : { jsonObj.emp_id}</td>
                    
              <td>  Employee Name :{ jsonObj.emp_name }</td>
                    
              <td>  Employee Department :{ jsonObj.emp_designation}</td>
                    
              <td> Employee Phone :{jsonObj.emp_phno}</td>
        
              <td>  Employee Email :{ jsonObj.emp_email}</td>
        
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
     </div>}
     </>
  )
};
export default ShowEmp;