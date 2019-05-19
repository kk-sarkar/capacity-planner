import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import SubMenu from '../layouts/SubMenu';
import UtilizationPage from './UtilizationPage';
import AUBudgetingPage from './AUBudgetingPage';
import CostOfTCPPage from './CostOfTCPPage';


class DashboardPage extends Component {

	SubMenus = [
		{ name: 'Utilization', url: '/dashboard/utilization', component: UtilizationPage, icon:'chart-bar' },
		{ name: 'AU Wise Budgeting', url: '/dashboard/aubudgeting', component: AUBudgetingPage, icon:'money-check-alt' },
		{ name: 'Cost of TCP', url: '/dashboard/costoftcp', component: CostOfTCPPage, icon:'file-invoice-dollar' }
	];

	render() {
		const parentProps = this.props;

		return (
			<div className="container">
			  
			  <SubMenu items={this.SubMenus}/>

			  	{
		    		this.SubMenus.map( 
		    			(item, index) => {

		    				const Component = item.component;

		    				return (
		    						<Route 
	    								path={item.url} 
	    								render={(props) => <Component {...props} {...parentProps}/> }
	    								key={item.url}/>
		    				);
		    				
		    		    }
		    		)
		    	}

		    	

		    </div>
		);
	}
}

export default DashboardPage;