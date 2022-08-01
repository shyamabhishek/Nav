import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from './Login';

import AllEmp from './AllEmp';
import AddEmp from './AddEmp';
import UpdateEmp from './UpdateEmp';
import DeleteEmp from './DeleteEmp';
import Home from './Home';
import ApplyLeave from './ApplyLeave';
import Leave from './Leave';
import ApproveLeave from './ApproveLeave';
import ShowEmp from './ShowEmp';
import Dashboard from './Dashboard';
import Managerlogin from './Managerlogin';
import Manager from './Manager';
import Getmng from './Getmng';









export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Hexaware Leave Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                               
                                <NavDropdown title="Employee Details" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/AllEmp">All Employee</NavDropdown.Item>
                                <NavDropdown.Item href="/AddEmp">Add Employee</NavDropdown.Item>
                                <NavDropdown.Item href="/UpdateEmp">Update Employee</NavDropdown.Item>
                                <NavDropdown.Item href="/DeleteEmp">Delete Employee</NavDropdown.Item>
                            
                                </NavDropdown>
                                
                                <Nav.Link as={Link} to="/ApplyLeave"></Nav.Link>
                                
                                <Nav.Link as={Link} to="/Leave"> Leave Status</Nav.Link>
                                <Nav.Link as={Link} to="/Manager">Manager</Nav.Link>
                                <Nav.Link as={Link} to="/ApproveLeave"></Nav.Link>
                                


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                       
                        <Route path="/AllEmp" element={<AllEmp />} />
                        <Route path="/AllEmp" element={<AllEmp />} />
                        <Route path="/AddEmp" element={<AddEmp />} />
                        <Route path="/UpdateEmp" element={<UpdateEmp />} />
                        <Route path="/DeleteEmp" element={<DeleteEmp />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Home/Login" element={<Login />} />
                        <Route path="/ShowEmp" element={<ShowEmp />} />
                        <Route path="/ApplyLeave" element={<ApplyLeave />} />
                        <Route path="/Leave" element={<Leave />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/Managerlogin" element={<Managerlogin />} />
                        <Route path="/ApproveLeave" element={<ApproveLeave />} />
                        <Route path="/Manager" element={<Manager />} />
                        <Route path="/Manager/Managerlogin" element={<Managerlogin />} />
                        <Route path="/Getmng" element={<Getmng />} />
                        



                       
                        

                    </Routes>
                </div>
                
            </Router>
            
        )
    }
}
