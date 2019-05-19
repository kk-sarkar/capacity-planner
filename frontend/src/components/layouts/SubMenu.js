import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/SubMenu.css';


const SubMenu = ( { items } ) =>  {
	
	return (
			<div>
				<Navbar expand="lg">
			        <Nav className="mr-auto">

			        	{
			        		items.map( 
			        			(item, index) => 	<LinkContainer to={item.url} key={item.url}>
										              <NavItem className="submenu-items">
										              	<FontAwesomeIcon icon={item.icon} />
    													<span className="menu-name">{item.name}</span>
										              </NavItem>
										            </LinkContainer>
			        		)
			        	}

			        </Nav>
			    </Navbar>
			</div>
	)  ;
}
  

export default SubMenu;