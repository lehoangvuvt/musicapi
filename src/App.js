import React from 'react';
import {store} from './stores/index';
import RegisterPage from  './components/RegisterPage';
import RedirectPage from './actions/redirectPageAction';
import LoginPage from './components/LoginPage';
import UserPage from './components/Userpage';
import './css/App.css';
import './css/all.css';
window.store = store;
class App extends React.Component{
	GoToPage(view){
		store.dispatch(RedirectPage(view));
	}

	render(){
		if(store.getState().view==="LOGIN"){
			return(
					<div className="login-register-container">
						<div id="login-form-holder">
						<div id="option-bar">
							<div style={{'borderRadius':'10px 0px 0px 0px'}} name="login" value="LOGIN" onClick={()=>{this.GoToPage("LOGIN")}} id="current-option"><h1>Login</h1></div>
							<div style={{'borderRadius':'0px 10px 0px 0px'}} name="register" id="uncurrent-option" value="REGISTER" onClick={()=>{this.GoToPage("REGISTER")}}><h1>Register</h1></div>
						</div>
							<LoginPage/>
						</div>
					</div>
					)
		}else if(store.getState().view==="REGISTER"){
			return(
				<div className="login-register-container">
					<div id="register-form-holder">
					<div id="option-bar">
						<div style={{'borderRadius':'10px 0px 0px 0px'}} name="login" id="uncurrent-option" value="LOGIN" onClick={()=>{this.GoToPage("LOGIN")}}><h1>Login</h1></div>
						<div style={{'borderRadius':'0px 10px 0px 0px'}} name="register" value="REGISTER" onClick={()=>{this.GoToPage("REGISTER")}} id="current-option"><h1>Register</h1></div>
					</div>
					<RegisterPage/>
					</div>
				</div>
				)
		}else if(store.getState().view==="USERPAGE" || store.getState().view==="CHART"
					|| store.getState().view==="ABOUT"){
			return(
			<React.Fragment>
				<UserPage/>
			</React.Fragment>
			)
		}

	}
}
export default App;
