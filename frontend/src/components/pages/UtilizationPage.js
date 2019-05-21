import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import '../../styles/UtilizationPage.css';
import Table from '../display/Table';
import Select from '../display/Select';
import StackedHorizontalBar from '../display/StackedHorizontalBar';
import { utilization } from '../../services/dashboardServices';
import { UtilizationTableConfig } from '../../constants/tableConfig';
import { UtilizationChartConfig } from '../../constants/chartConfig';

class UtilizationPage extends Component {

	constructor(props) {

		super(props);

		this.state = {
			show : 'both',
			data: [],
			loading: false,
			errors: '',
			selectedStampCriteria: '2019-08-17',
			selectedLOB: 'LOB1'
		}
	}

	componentDidMount() {
    	this.getUtilization(this.props.user);
  	}

  	getUtilization = (user) =>  {
  		this.setState({ loading: true })
  		utilization(user).then(data => this.setState({ data , loading: false}))
  						 .catch(err =>  this.setState({ errors: err.response.data, loading: false }));
  	}

	render() {

		const { show, data, loading, selectedStampCriteria, selectedLOB } = this.state;

		const stampOptions = ['2019-08-17', '2019-09-18', '2019-07-06'];
		const lobOptions = ['LOB1', 'LOB2', 'LOB3'];

		return (
			<div className="container-fluid mt-4">
				<div className="search-criteria">
					<div className="search-criterion">
						<label className="search-labels">STAMP END DATE</label>
						<div>
							<Select 
									options={stampOptions} 
									selected={selectedStampCriteria}
									onSelect={ selectedStampCriteria => this.setState( { selectedStampCriteria } )}/>
						</div>
					</div>
					<div className="search-criterion">
						<label className="search-labels">LOB</label>
						<div>
							<Select 
									options={lobOptions} 
									selected={selectedLOB}
									onSelect={ selectedLOB => this.setState( { selectedLOB } )}/>
						</div>
					</div>
					<div className="search-criterion btn-container">
						<Button variant="primary" className="submit-btn">Submit</Button>
					</div>
				</div>
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
					    	<Table data={data} config={UtilizationTableConfig}/>
					    </Col>
					    <Col 
					    	className={`chart-container ${show !== 'table'? '' : 'd-none'}`} 
					    	xs={12} md={show === 'table'? 12 : 6}>
					    	<StackedHorizontalBar data={data} config={UtilizationChartConfig}/>
					    </Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default UtilizationPage;