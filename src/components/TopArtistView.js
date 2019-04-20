import React from 'react';
import '../css/App.css';
function TopArtistsView(props){
		return(
				<div
					onClick={()=>{
							window.open(props.artist.url)
						}}>
					<div>
						<img src={props.artist.image} alt="cover"/>
					</div>
					
					<div id="text-holder-chart">
						<h1
						style={{'marginTop':'15px'}}
						 onClick={()=>{
							window.open(props.artist.url)
						}}>{props.artist.name}</h1>
					</div>
				</div>
			)
}

export default TopArtistsView;