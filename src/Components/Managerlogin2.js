import React, { Component } from "react";
//import "./Login.css";
import {Link} from "react-router-dom";
export default class Login extends Component {
    render() {
        const tem=sessionStorage.getItem("users");
    if (tem==null){
      var jsonObj={id:null,name:"Somdutta"}
    }else{
      jsonObj = JSON.parse(tem);
    }
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h3>Login</h3>
                        <div className="mb-3">
                            <label>Manager ID</label>
                            <input
                                defaultValue={jsonObj.mgr_empid}
                                type="name"
                                className="form-control"
                                placeholder="Enter Employee ID"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex">
                        <Link to="/"><button className="btn btn-primary">Cancel</button></Link>
                        <Link to="/Getmng"><button className="btn btn-primary">Login</button></Link>
                            
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}