import React from 'react';
import {store} from '../stores/index';
import RedirectPage from '../actions/redirectPageAction';
function Navbar(){
	let style1;
	let style2;
	let style3;
	if(store.getState().view==="USERPAGE"){
		style1={'filter':'brightness(120%)'};
	}
	if(store.getState().view==="CHART"){
		style2={'filter':'brightness(120%)'};
	}
	if(store.getState().view==="ABOUT"){
		style3={'filter':'brightness(120%)'};
	}
	return(
		<React.Fragment>
			<div id="navbar">
				<div>
					<div>
						<h1 onClick={()=>{store.dispatch(RedirectPage("USERPAGE"))}} style={style1}>Home</h1>
					</div>
					<div>
						<h1 onClick={()=>{store.dispatch(RedirectPage("CHART"))}} style={style2}>Charts</h1>
					</div>
					<div>
						<h1 onClick={()=>{store.dispatch(RedirectPage("ABOUT"))}} style={style3}>Videos</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
		);
}
export default Navbar;