import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../styles/LoginForm.css";
import InlineError from '../messages/InlineError';

class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: {
				userId:'',
				password:''
			},
			loading: false,
			errors: ''
		};
	}

	validateForm() {
	   return this.state.data.userId.length > 0 && this.state.data.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			data: { ...this.state.data, [event.target.id]: event.target.value }
		});
    }

	handleSubmit = event => {
	    event.preventDefault();
	    this.setState( {loading: true} );
	    this.props.submit(this.state.data)
	    	.catch(err =>  this.setState({ errors: err.response.data, loading: false }));
	}

	render() {
		const { data, errors, loading } = this.state;

		return (
			<div className="Login">
		        <form onSubmit={this.handleSubmit}>
		          <FormGroup controlId="userId">
		            <FormLabel>User Id</FormLabel>
		            <FormControl
		              autoFocus
		              type="text"
		              value={data.userId}
		              onChange={this.handleChange}
		            />
		          </FormGroup>
		          <FormGroup controlId="password">
		            <FormLabel>Password</FormLabel>
		            <FormControl
		              value={data.password}
		              onChange={this.handleChange}
		              type="password"
		            />
		          </FormGroup>
		          <Button
		            block
		            disabled={!this.validateForm()}
		            type="submit"
		          >
		            {
		            	loading ?
			            <div className="spinner-border text-light" role="status">
						</div> : <div>Login</div>
					}
		          </Button>
		          <InlineError text={errors} />
		        </form>
		      </div>
		);
	}

}

export default LoginForm;