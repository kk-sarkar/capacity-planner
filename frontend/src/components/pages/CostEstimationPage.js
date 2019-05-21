import React,{ Component } from 'react';
import Table from '../display/Table';
import '../../styles/CostEstimationPage.css';
import { CostEstimationTableConfig } from '../../constants/tableConfig';

const data1 = [
	{ 
		projectId: 'P1', 
		projectName: 'Project 1', 
		startDate: '2018-08-01',
		endDate: '2019-07-02',
		estimatedHour: 4560,
		estimatedCost: 345678 
	},
	{ 
		projectId: 'P2', 
		projectName: 'Project 2', 
		startDate: '2016-12-03',
		endDate: '2019-06-06',
		estimatedHour: 3456,
		estimatedCost: 45678 
	},
	{ 
		projectId: 'P1', 
		projectName: 'Project 1', 
		startDate: '2019-08-01',
		endDate: '2019-09-02',
		estimatedHour: 90,
		estimatedCost: 456 
	}
];


class CostEstimationPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
				<div className="container-fluid mt-4">
					<div className="cost-est-table-container">
						<Table data={data1} config={CostEstimationTableConfig}/>
					</div>
				</div>
			);
	}
}

export default CostEstimationPage;