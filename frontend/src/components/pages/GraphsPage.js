import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import SubMenu from '../layouts/SubMenu';
import BurndownPage from './BurndownPage';
import SkillRequirementPage from './SkillRequirementPage';
import CapacityMapPage from './CapacityMapPage';


class GraphsPage extends Component {

	SubMenus = [
		{ name: 'Burndown', url: '/graphs/burndown', component: BurndownPage, icon: 'chart-area' },
		{ name: 'Resource to Skill', url: '/graphs/skillreq', component: SkillRequirementPage, icon: 'search-plus' },
		{ name: 'Capacity Map', url: '/graphs/capacitymap', component: CapacityMapPage, icon: 'chart-line' }
	];

	render() {

		return (
			<div className="container">
			  
			  <SubMenu items={this.SubMenus}/>

			  	{
		    		this.SubMenus.map( 
		    			(item, index) => <Route path={item.url} component={item.component} key={item.url}/>
		    		)
		    	}

		    </div>
		);
	}
}

export default GraphsPage;