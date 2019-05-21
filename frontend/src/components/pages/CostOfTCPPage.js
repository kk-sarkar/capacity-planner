import React,{ Component } from 'react';
import Table from '../display/Table';
import '../../styles/CostOfTCPPage.css';
import { TCPEstimatedCostTableConfig } from '../../constants/tableConfig';
import { TCPEstimatedCostBurndownTableConfig } from '../../constants/tableConfig';

const data1 = [
	{ projectId: 'P1', projectName: 'Project 1', estimatedCost: 345678 },
	{ projectId: 'P2', projectName: 'Project 2', estimatedCost: 456789 },
	{ projectId: 'P3', projectName: 'Project 3', estimatedCost: 454545 }
];

const data2 = [
		{ 	
			employeeId: 'u614378', 
			employeeName: 'ABC', 
			billedPeriod: 345678,
			lob: 'LOB1',
			location: 'Bengaluru',
			skills: 'Skill 1',
			hours: 34,
			cost:  4567
		},
		{ 	
			employeeId: 'u614377', 
			employeeName: 'DEF', 
			billedPeriod: 345678,
			lob: 'LOB2',
			location: 'Chennai',
			skills: 'Skill 1',
			hours: 42,
			cost:  8970
		},
		{ 	
			employeeId: 'u614379', 
			employeeName: 'XYZ', 
			billedPeriod: 345300,
			lob: 'LOB3',
			location: 'Delhi',
			skills: 'Skill 4',
			hours: 54,
			cost:  90909
		}
	
];

class CostOfTCPPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
				<div className="container-fluid mt-4">
					<div className="sections">
						<h6>Estimated Cost</h6>
						<div className="est-cost-table-container">
							<Table data={data1} config={TCPEstimatedCostTableConfig}/>
						</div>
					</div>
					<div className="sections">
						<h6>Cost Burndown on TCP Activity</h6>
						<div>
							<Table data={data2} config={TCPEstimatedCostBurndownTableConfig}/>
						</div>
					</div>
				</div>
			);
	}
}

export default CostOfTCPPage;