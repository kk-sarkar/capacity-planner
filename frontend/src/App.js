import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import './styles/App.css';
import { login } from './services/auth';
import _ from 'lodash';
import AuthenticatedRoute from './components/routes/AuthenticatedRoute';
import Header from './components/layouts/Header';
import DashboardPage from './components/pages/DashboardPage';
import CorrectiveMeasuresPage from './components/pages/CorrectiveMeasuresPage';
import GraphsPage from './components/pages/GraphsPage';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {}
		}
	}

	login = (data) => login(data).then(user => this.setState({ user }));

	logout = (user={}) => this.setState({ user });

	render() {

		const { user } = this.state;

		return (
			<div className="">
		      <Router>
		      		<Header user={user} logout={this.logout}/>
		      		<Switch>
			      		<Route path="/" exact render={( props ) => <LandingPage {...props} login={this.login} />} />
			      		<AuthenticatedRoute path="/dashboard" 
			      							component={DashboardPage} 
			      							isAuthenticated={!_.isEmpty(user)}
			      							user={user}/>
			      		<AuthenticatedRoute path="/correctivemeasures" 
			      							component={CorrectiveMeasuresPage} 
			      							isAuthenticated={!_.isEmpty(user)}/>
			      		<AuthenticatedRoute path="/graphs" 
			      							component={GraphsPage} 
			      							isAuthenticated={!_.isEmpty(user)}/>
			      		<Redirect to="/" />
		      		 </Switch>
		      </Router>
		    </div>
		);
	}

}

export default App;
