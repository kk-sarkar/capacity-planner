import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import PieGraph from '../display/PieGraph';
import '../../styles/AUBudgetingPage.css';
import Table from '../display/Table';
import StackedHorizontalBar from '../display/StackedHorizontalBar';
import { AUBudgetingTableConfig } from '../../constants/tableConfig';
import { AUBudgetingChartConfig } from '../../constants/chartConfig';

const DATA = [
			{
				"au" : "AU1",
				"projectId": "PJ1",
				"projectName" : "Project 1",
				"estimatedHours": 200,
				"cost" : 456000
			},
			{
				"au" : "AU2",
				"projectId": "PJ2",
				"projectName" : "Project 2",
				"estimatedHours": 150,
				"cost" : 356790
			},
			{
				"au" : "AU3",
				"projectId": "PJ3",
				"projectName" : "Project 3",
				"estimatedHours": 280,
				"cost" : 109090
			}	
		];


class AUBudgetingPage extends Component {

	constructor(props) {

		super(props);

		this.state = {
			show : 'both',
			data: [],
			loading: false,
			errors: ''
		}
	}

	componentDidMount() {
    	
  	}

  	getAUWiseBudgeting = (user) =>  {
  		
  	}

  	addPercentages = (data=[]) => {
  		let totalCost = 0;
  		data.forEach( item  => totalCost+=item.cost);
  		return data.map( item => 
  			({ ...item, percentage: totalCost != 0 ?  Math.round(item.cost/totalCost * 10000) / 100 : 0 }) );
  	}

	render() {

		let { show, data, loading } = this.state;
		data = DATA;
		data = this.addPercentages(data);

		return (
			<div className="container-fluid mt-4">
				{
					loading && 
					<div>
						<Spinner animation="border" role="status" size="sm"/>
						Loading .. 
					</div>
				}
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
					    	<Table data={data} config={AUBudgetingTableConfig}/>
					    </Col>
					    <Col 
					    	className={`chart-container ${show !== 'table'? '' : 'd-none'}`} 
					    	xs={12} md={show === 'table'? 12 : 6}>
					    	<PieGraph data={data} config={AUBudgetingChartConfig}/>
					    </Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AUBudgetingPage;