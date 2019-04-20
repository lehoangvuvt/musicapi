import React from 'react'
import {store} from '../stores/index';
function Footer(){
	let styles={};
	if(store.getState().view==="USERPAGE"){
		styles={'top':'150%','backgroundColor':'white'};
	}else{
		styles={'top':'200%','backgroundColor':'black'};
	}
	return(
		<div style={styles} id="footer">
		</div>
		)
}
export default Footer;