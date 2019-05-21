import React,{ Component } from 'react';
import Table from '../display/Table';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import '../../styles/DeliveryVariancePage.css';
import { DeliveryVarianceTableConfig } from '../../constants/tableConfig';
import StackedHorizontalBar from '../display/StackedHorizontalBar';
import { DeliveryVarianceChartConfig } from '../../constants/chartConfig';

const DATA = [
	{ 
		projectId: 'P1', 
		projectName: 'Project 1', 
		sdlcStage: 'Development',
		estimatedCost: 4000,
		burndownCost: 3560,
		variance: -440 
	},
	{ 
		projectId: 'P2', 
		projectName: 'Project 2', 
		sdlcStage: 'UAT',
		estimatedCost: 5000,
		burndownCost: 5400,
		variance: 400 
	},
	{ 
		projectId: 'P3', 
		projectName: 'Project 3', 
		sdlcStage: 'Maintenance',
		estimatedCost: 2000,
		burndownCost: 1900,
		variance: -100 
	}
];

class DeliveryVariancePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show : 'both'
		}
	}

	getPosNegVariance = (data=[]) => {
  		return data.map( item => 
  			({ ...item, 
  				negVariance: item.variance < 0? item.variance: 0, 
  				posVariance: item.variance >= 0? item.variance: 0 }) );
  	}

	render() {

		const { show } = this.state

		const data = this.getPosNegVariance(DATA);

		return (
				<div className="container-fluid mt-4">
					<Container className="graph-container">
					  	<Form className="display-selector">
					  		  <Form.Check inline label="Table" name="selector" 
					  		  				type="radio" id="table" className="radio-btn" 
					  		  				onChange={() => this.setState( { show: 'table' } )}/>
					  		  <Form.Check inline label="Chart" name="selector" 
					  		  				type="radio" id="chart" className="radio-btn" 
					  		  				onChange={() => this.setState( { show: 'chart' } )}/>
					  		  <Form.Check inline label="Both" name="selector" 
					  		  				type="radio" id="both" className="radio-btn" defaultChecked 
					  		  				onChange={() => this.setState( { show: 'both' } )}/>
						</Form>
						<Row className="w-100">
						    <Col 
						    	className={`table-container ${show !== 'chart'? '' : 'd-none'}`} 
						    	xs={12} md={show === 'table'? 12 : 6}>
						    	<Table data={data} config={DeliveryVarianceTableConfig}/>
						    </Col>
						    <Col 
						    	className={`chart-container ${show !== 'table'? '' : 'd-none'}`} 
						    	xs={12} md={show === 'table'? 12 : 6}>	
					    		<StackedHorizontalBar data={data} config={DeliveryVarianceChartConfig}/>
						    </Col>
						</Row>
					</Container>
			</div>
			);
	}
}

export default DeliveryVariancePage;