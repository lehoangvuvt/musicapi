import React from 'react';
import {store} from '../stores/index';
import {ErrorObj} from '../data/ErrorObj';
import Register from '../actions/registerAction';
import User from '../data/user';
import CountryList from '../components/country-list';

class RegisterPage extends React.Component{
	constructor(){
		super();
		this.state={
			receiveMail:false,
			username:"",
			gender:"male",
			country:"",
			password:"",
			repassword:"",
			strength:"",
			error: ErrorObj
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}
	componentDidMount(){
		ErrorObj.errorUsername="";
		ErrorObj.errorPassword="";
		this.setState({
			receiveMail:false,
			username:"",
			gender:"male",
			country:"",
			password:"",
			strength:"",
			error: ErrorObj
		})
	}
	handleChange(event){
		let passwordField = document.getElementById('password');
		let usernameField = document.getElementById('username');
		const divWeak =  document.getElementById('divWeak');
		const divMedium = document.getElementById('divMedium');
		const divStrong = document.getElementById('divStrong');
		const passwordStrengthText = document.getElementById('password-strength-text');
		const {name,value,type} =event.target;
		if(type==="checkbox")	{
			this.setState({[name]:!this.state.receiveMail});
		}else{
			this.setState({[name]:value});
		}
		if(this.state.password.trim()!==""){
			if(this.state.password.length>=1 && this.state.password.length<4){
				this.setState({
					strength:"Too short"
				})
				passwordStrengthText.style.color="rgba(0,0,0,0.7)";
				divWeak.style.backgroundColor='rgba(0,0,0,0.1)';
				divMedium.style.backgroundColor='rgba(0,0,0,0.1)';
				divStrong.style.backgroundColor='rgba(0,0,0,0.1)';
			}
			if(this.state.password.length<=5 && this.state.password.length>=4){
				this.setState({
					strength:"weak"
				});
				passwordStrengthText.style.color="#df2029";
				divWeak.style.backgroundColor='#df2029';
				divMedium.style.backgroundColor='rgba(0,0,0,0.1)';
			}
			if(this.state.password.length<=10 && this.state.password.length>5){
				this.setState({
					strength:"fair"
				})
				passwordStrengthText.style.color="#f39c12";
				divWeak.style.backgroundColor='#f39c12';
				divMedium.style.backgroundColor='#f39c12';
				divStrong.style.backgroundColor='rgba(0,0,0,0.1)';
			}
			if(this.state.password.length>10){
				this.setState({
					strength:"strong"
				})
				passwordStrengthText.style.color="#728BFF";
				divWeak.style.backgroundColor='#728BFF';
				divMedium.style.backgroundColor='#728BFF';
				divStrong.style.backgroundColor='#728BFF';
			}
		}else{
			this.setState({strength:""});
		}
		if(this.state.username.length<4 || this.state.username.length>15){
			usernameField.style.border="2px solid #df2029";
		}else{
			usernameField.style.border="1px solid grey";
		}
		if(this.state.username.includes(" ") && this.state.username.length>=4 && this.state.username.length<=15){
			usernameField.style.border="2px solid #df2029";
		}else if(!this.state.username.includes(" ") && this.state.username.length>=4 && this.state.username.length<=15){
			usernameField.style.border="1px solid grey";
		}
		if(this.state.password.length<4){
			passwordField.style.border="2px solid #df2029";
		}else{
			passwordField.style.border="1px solid grey";
		}		
	}
	handleRegister(event){
		let dupID=false;
		let valid = true;
		const country = document.getElementById('country-list').value;
		for(let i = 0;i<User.length;++i){
			if(this.state.username.toUpperCase() === User[i].username.toUpperCase()){
				dupID = true;
			}
		}
		if(this.state.username.length<5 || this.state.username.length>16){
			ErrorObj.errorUsername = "Username length can't be over 16 characters or below 5 characters";
			this.setState({error:ErrorObj});
			valid=false;
		}else{
			ErrorObj.errorUsername="";
			this.setState({error:ErrorObj});
		}
		if(this.state.username.includes(" ") && this.state.username.length>=5 && this.state.username.length<=16){
			ErrorObj.errorUsername = "Username can't contains any blankspace";
			this.setState({error:ErrorObj});
			valid=false;
		}else if(!this.state.username.includes(" ") && this.state.username.length>=5 && this.state.username.length<=16){
			ErrorObj.errorUsername="";
			this.setState({error:ErrorObj});
		}
		if(this.state.password.length<5){
			ErrorObj.errorPassword = "Password minimum length is 5";
			this.setState({error:ErrorObj});
			valid=false;
		}else{
			ErrorObj.errorPassword = "";
			this.setState({error:ErrorObj});
		}
		if(this.state.password.length>=5){
			if(this.state.password!==this.state.repassword){
				ErrorObj.errorRePassword="Password does not match";
				this.setState({error:ErrorObj});
				valid=false;
			}else{
				ErrorObj.errorRePassword="";
				this.setState({error:ErrorObj});
			}
		}
		if(!dupID && valid){
			ErrorObj.errorUsername="";
			ErrorObj.errorPassword="";
			ErrorObj.errorRePassword="";
			this.setState({error:ErrorObj});
			store.dispatch(Register({name:this.state.name,gender:this.state.gender,country:country,
				username:this.state.username,password:this.state.password,
				isReceiMail:this.state.receiveMail}));	
			this.setState({
				name:"",
				gender:"male",
				username:"",
				password:"",
				repassword:"",
				receiveMail:false
			});
		}else{
			if(dupID){
				ErrorObj.errorUsername="Duplicated Username";
				this.setState({error:ErrorObj});
			}
		}
		event.preventDefault();
	}
	render(){
		return(
			<div id="register-form">
				<form onSubmit={this.handleRegister}>
					<input className="text-field" onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Name (optional)"/>
					<p className="noti-error">{this.state.error.errorName}</p>
					<label className="container">
						<input  onChange={this.handleChange} type="radio" name="gender" value="male" checked={this.state.gender==="male"}/>Male
						 <span class="checkmark"></span>
					</label>
					<br/>
					<label className="container">
						<input  onChange={this.handleChange} type="radio" name="gender" value="female" checked={this.state.gender==="female"}/>Female
						 <span class="checkmark"></span>
					</label>
					<br/>
					<br/>
					<CountryList/>
					<br/>
					<input id="username" className="text-field" onChange={this.handleChange} value={this.state.username} required type="text" name="username" placeholder="Username"/>
					<p className="noti-error">{this.state.error.errorUsername}</p>
					<input id="password" className="text-field" required onChange={this.handleChange} placeholder="Password" type="password" name="password" value={this.state.password}/>
					<p className="noti-error">{this.state.error.errorPassword}</p>
					<input className="text-field" required onChange={this.handleChange} placeholder="Confirm password" type="password" name="repassword" value={this.state.repassword}/>
					<p className="noti-error">{this.state.error.errorRePassword}</p>
					<p id="strength-title">Password strength</p>
					<p id='password-strength-text'>{this.state.strength}</p>
						<br/>
					<div id="password-strength">
						<div id="divWeak"></div>
						<div id="divMedium"></div>
						<div id="divStrong"></div>
					</div>
					<br/>
					<input id="register-button" type="submit" value="Register"/>
					<br/>
					<label id="receive-mail">
					<input type="checkbox" name="receiveMail" checked={this.state.receiveMail} onChange={this.handleChange}/>Receive News Through Email
					</label>
					<br/>
					<br/>
				</form>
			</div>
			);
	}	
}
export default RegisterPage;