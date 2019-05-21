import React,{ Component } from 'react';
import Table from '../display/Table';
import '../../styles/CapacityMapPage.css';
import { CapacityMapSkillsTableConfig } from '../../constants/tableConfig';
import { CapacityMapExpertiseTableConfig } from '../../constants/tableConfig';
import { CapacityMapCertificationTableConfig } from '../../constants/tableConfig';
import { CapacityMapYearsExpTableConfig } from '../../constants/tableConfig';

const data1 = [
	{ skill: 'Java', count: 120 },
	{ skill: 'Javascript', count: 56 },
	{ skill: 'SQL', count: 80 },
	{ skill: 'Machine Learning', count: 9 }

];


const data2 = [
	{ expertise: 'Java', count: 120 },
	{ expertise: 'Javascript', count: 56 },
	{ expertise: 'SQL', count: 80 },
	{ expertise: 'Machine Learning', count: 9 }

];

const data3 = [
	{ certification: 'Java', count: 120 },
	{ certification: 'Javascript', count: 56 },
	{ certification: 'SQL', count: 80 },
	{ certification: 'Machine Learning', count: 9 }

];

const data4 = [
	{ yearsOfExp: 5, count: 120 },
	{ yearsOfExp: 7, count: 56 },
	{ yearsOfExp: 12, count: 80 },
	{ yearsOfExp: 18, count: 9 }

];

class CapacityMapPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
				<div className="container-fluid mt-4 cntr-flex">
					<div className="sections">
						<h6>Skill</h6>
						<div>
							<Table data={data1} config={CapacityMapSkillsTableConfig}/>
						</div>
					</div>
					<div className="sections">
						<h6>Expertise</h6>
						<div>
							<Table data={data2} config={CapacityMapExpertiseTableConfig}/>
						</div>
					</div>
					<div className="sections">
						<h6>Certification</h6>
						<div>
							<Table data={data3} config={CapacityMapCertificationTableConfig}/>
						</div>
					</div>
					<div className="sections">
						<h6>Years of Experience</h6>
						<div>
							<Table data={data4} config={CapacityMapYearsExpTableConfig}/>
						</div>
					</div>
				</div>
			);
	}
}

export default CapacityMapPage;