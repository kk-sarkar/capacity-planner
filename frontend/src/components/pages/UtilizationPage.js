import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import '../../styles/UtilizationPage.css';
import Table from '../display/Table';
import StackedHorizontalBar from '../display/StackedHorizontalBar';
import { utilization } from '../../services/dashboardServices';

class UtilizationPage extends Component {

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
    	this.getUtilization(this.props.user);
  	}

  	getUtilization = (user) =>  {
  		this.setState({ loading: true })
  		utilization(user).then(data => this.setState({ data , loading: false}))
  						 .catch(err =>  this.setState({ errors: err.response.data, loading: false }));
  	}

	render() {

		const { show, data, loading } = this.state;

		return (
			<div className="container-fluid mt-4">
				<div className="search-criteria">
					<div className="search-criterion">
						<label className="search-labels">STAMP time</label>
						<div>field</div>
					</div>
					<div className="search-criterion">
						<label className="search-labels">LOB</label>
						<div>field</div>
					</div>
					<div className="search-criterion">
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
					    	<Table data={data} />
					    </Col>
					    <Col 
					    	className={`chart-container ${show !== 'table'? '' : 'd-none'}`} 
					    	xs={12} md={show === 'table'? 12 : 6}>
					    	<StackedHorizontalBar data={data} />
					    </Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default UtilizationPage;