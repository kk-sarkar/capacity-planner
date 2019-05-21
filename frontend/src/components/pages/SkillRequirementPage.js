import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import '../../styles/SkillRequirementPage.css';
import Table from '../display/Table';
import Select from '../display/Select';
import { RequiredSkillHoursTableConfig } from '../../constants/tableConfig';

const DATA = [
	{ 
		employeeId: 'u614378', 
		employeeName: 'Kalyan', 
		skills: 'Full stack',
		expertise: 'Developer',
		yearsOfExp: 9,
		periodEndDate: '2019-08-08',
		hours: 60
	},
	{ 
		employeeId: 'u614379', 
		employeeName: 'Rahul', 
		skills: 'Javascript, React, Angular, SCSS',
		expertise: 'Developer',
		yearsOfExp: 6,
		periodEndDate: '2019-09-08',
		hours: 63
	}
];


class SkillRequirementPage extends Component {

	constructor(props) {

		super(props);

		this.state = {
			data: [],
			requiredSkill: 'Select Skill',
			requiredHours: ''
		}
	}

	render() {

		const { data, requiredSkill, requiredHours } = this.state;

		const skillOptions = ['Any','Java', 'React', 'SQL'];
		

		return (
			<div className="container-fluid mt-4">
				<div className="search-criteria">
					<div className="search-criterion">
						<label className="search-labels">REQUIRED SKILL</label>
						<div>
							<Select 
									options={skillOptions} 
									selected={requiredSkill}
									onSelect={ requiredSkill => this.setState( { requiredSkill } )}/>
						</div>
					</div>
					<div className="search-criterion">
						<label className="search-labels">REQUIRED HOURS</label>
						<div>
							<Form.Control 
										type="number"
										min="1"
										step="1"
										placeholder="Enter Required Hours" 
										value={requiredHours}
										onChange={(event) => this.setState({ requiredHours: event.target.value })}/>
						</div>
					</div>
					<div className="search-criterion btn-container">
						<Button variant="primary" className="submit-btn">Submit</Button>
					</div>
				</div>
				<Container className="graph-container">
					<Table data={DATA} config={RequiredSkillHoursTableConfig}/>
				</Container>
			</div>
		);
	}
}

export default SkillRequirementPage;