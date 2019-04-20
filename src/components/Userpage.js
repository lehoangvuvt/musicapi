import React from 'react';
import {store} from '../stores/index';
import Signout from '../actions/signoutAction';
import Navbar from '../components/NavBar';
import ChartSection from '../components/ChartSection';
import Home from '../components/Home';
import Footer from '../components/Footer';
import TopArtistCountry from '../data/TopArtistCountryBase';
import TopSongCountry from '../data/TopSongCountryBase';
import About from '../components/About';
class UserPage extends React.Component{
	constructor(){
		super();
		this.state = {
			isOpen:false,
		}
		this.showNav = this.showNav.bind(this);
	}
	
	showNav(e){
		const nav = document.getElementById('nav-bar-userpage');
		const text= document.querySelector('#userpage-container>h1');
		if(!this.state.isOpen){
			nav.style.display='flex';
			nav.style.opacity=1;
			text.style.color='white';
			this.setState({
				isOpen:true
			})
		}else{
			nav.style.display = 'none';
			nav.style.opacity=0;
			text.style.color='white';
			this.setState({
				isOpen:false
			})
		}
	}
	signOut(e){
		TopArtistCountry.splice(0,TopArtistCountry.length);
		TopSongCountry.slice(0,TopSongCountry.length);
		store.dispatch(Signout({username:"",password:"",valid:false,view:"LOGIN"}));
		e.preventDefault();
	}
	render(){
		if(store.getState().view==="USERPAGE"){
			return(
				<React.Fragment>
					<div id="userpage-container">
						<Navbar/>
						<h1 onClick={(e)=>this.showNav(e)}><i id="user-icon" class="far fa-user-circle"></i></h1>
						<div id="nav-bar-userpage">
							<div>
								<p style={{'color':'black','fontSize':'11px','fontWeight':'bold'}}
								>{store.getState().username}</p>
							</div>
							<div>
								<p>Account</p>
							</div>
							<div onClick={(e)=>this.signOut(e)} style={{'borderRadius':'0px 0px 0px 10px'}}>
								<p>Sign out</p>
							</div>
						</div>
						<Home/>
					</div>
					
				</React.Fragment>
				)
		}else if(store.getState().view==="CHART"){
			return(
				<React.Fragment>
					<div id="userpage-container">
						<Navbar/>
						<h1 onClick={(e)=>this.showNav(e)}><i id="user-icon" class="far fa-user-circle"></i></h1>
						<div id="nav-bar-userpage">
							<div>
								<p style={{'color':'black','fontSize':'11px','fontWeight':'bold'}}
								>{store.getState().username}</p>
							</div>
							<div>
								<p>Account</p>
							</div>
							<div onClick={(e)=>this.signOut(e)} style={{'borderRadius':'0px 0px 0px 10px'}}>
								<p>Sign out</p>
							</div>
						</div>
						<ChartSection/>
					</div>
					
				</React.Fragment>
				)			
		}else if(store.getState().view==="ABOUT"){
			return(
				<React.Fragment>
					<div id="userpage-container">
						<Navbar/>
						<h1 onClick={(e)=>this.showNav(e)}><i id="user-icon" class="far fa-user-circle"></i></h1>
						<div id="nav-bar-userpage">
							<div>
								<p style={{'color':'black','fontSize':'11px','fontWeight':'bold'}}
								>{store.getState().username}</p>
							</div>
							<div>
								<p>Account</p>
							</div>
							<div onClick={(e)=>this.signOut(e)} style={{'borderRadius':'0px 0px 0px 10px'}}>
								<p>Sign out</p>
							</div>
						</div>
						<About/>
						<div id="red-gif">
						</div>	
					</div>
					
				</React.Fragment>
				)			
		}
	}
}
export default UserPage;