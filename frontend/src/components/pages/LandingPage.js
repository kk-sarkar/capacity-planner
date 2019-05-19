import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';

class LandingPage extends Component {

	submit = (data) => 
		this.props.login(data).then(() => this.props.history.push('/dashboard/utilization'));

	render() {

		return (
			<div className="">
			  <LoginForm submit={this.submit}/>
			</div>
		);
	}

}

export default LandingPage;