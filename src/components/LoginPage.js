import React from 'react';
import {store} from '../stores/index';
import Login from '../actions/loginAction';

class LoginPage extends React.Component{
	constructor(){
		super();
		this.state={
			error:""
		}
		this.handleLogin = this.handleLogin.bind(this);
	}
	handleLogin(event){
		const username = event.target.username.value;
		const password = event.target.password.value;
		store.dispatch(Login({username:username,password:password}));
		if(store.getState().valid){
			this.setState({
				error:""
			});
		}else{
			this.setState({
				error:"Error Username or Password"
			})
		}
		event.preventDefault();
	}
	componentDidMount(){
		store.dispatch(Login({username:"",password:""}));
	}		
	render(){
		return(
			<div id="login-form">
				<form onSubmit={this.handleLogin}>
					<br/>
					<br/>
					<input className="text-field" required type="text" name="username" placeholder="Username"/>
					<br/>
					<br/>
					<input className="text-field" required placeholder="Password" type="password" name="password"/>
					<p id="login-error-notice">{this.state.error}</p>
					<br/>
					<br/>
					<br/>
					<input id="login-button" type="submit" value="Login"/>
				</form>
			</div>
			)
	}
}
export default LoginPage;