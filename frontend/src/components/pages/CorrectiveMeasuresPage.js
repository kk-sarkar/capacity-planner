import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import SubMenu from '../layouts/SubMenu';
import CostEstimationPage from './CostEstimationPage';
import DeliveryVariancePage from './DeliveryVariancePage';
import ProjectPlanningPage from './ProjectPlanningPage';


class CorrectiveMeasuresPage extends Component {

	SubMenus = [
		{ name: 'Cost Estimation', url: '/correctivemeasures/costestimation', component: CostEstimationPage, icon:'funnel-dollar' },
		{ name: 'Delivery Variance', url: '/correctivemeasures/deliveryvariance', component: DeliveryVariancePage, icon:'superscript' },
		{ name: 'Project Planning', url: '/correctivemeasures/projectplanning', component: ProjectPlanningPage, icon:'tasks' }
	];

	render() {

		return (
			<div className="container">
			  
			  <SubMenu items={this.SubMenus}/>

			  	{
		    		this.SubMenus.map( 
		    			(item, index) => <Route path={item.url} component={item.component}/>
		    		)
		    	}

		    </div>
		);
	}
}

export default CorrectiveMeasuresPage;