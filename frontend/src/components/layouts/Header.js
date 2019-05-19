import React from 'react';
import logo from '../../images/Wells_Fargo_Bank.png';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import '../../styles/Header.css';
import _ from 'lodash';

const Header = ({ user, logout }) =>  {
	
	return (
			<header className="header">
		      <Navbar expand="lg">
		        <Navbar.Brand>
		         	<img className="logo" src={logo} alt="WF Logo" />
		        	<span className="app-name">Capacity Planner</span>
		        </Navbar.Brand>
		        {
		        	!_.isEmpty(user) &&
		        	<React.Fragment>
			        	<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			        	<Navbar.Collapse id="basic-navbar-nav">
				          <Nav className="ml-auto ">
				          	<LinkContainer to="/dashboard/utilization">
				              <NavItem>Dashboard</NavItem>
				            </LinkContainer>
				            <LinkContainer to="/correctivemeasures/costestimation">
				              <NavItem>Corrective Measures</NavItem>
				            </LinkContainer>
				            <LinkContainer to="/graphs/burndown">
				              <NavItem>Graphs</NavItem>
				            </LinkContainer>
				            <NavDropdown className="user" title={`Welcome, ${user.userName}`} id="basic-nav-dropdown">
				               <LinkContainer to="/logout">
							      <NavItem className="logout" onClick={() => logout()}>Logout</NavItem>    
							   </LinkContainer>  
				             
				            </NavDropdown>
				          </Nav>
				        </Navbar.Collapse>
		        	</React.Fragment> 	
		        }
		      </Navbar>
		    </header>
	)  ;
}
  

export default Header;