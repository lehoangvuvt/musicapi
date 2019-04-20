import React from 'react';
import '../css/App.css';
function Top10SongView(props){
	
		return(
				<div id="holder-chart">
					
					<div>
						<img src={props.song.cover} alt="cover"/>
					</div>
					<div style={{'textAlign':'center'}}>
						<h3>{props.song.position}</h3>
						</div>
					<div id="text-holder-chart" style={{'textAlign':'left'}}>
						<h1 onClick={()=>{
							window.open(props.song.url)
						}}>{props.song.name}</h1>
						<h2
						onClick={()=>{window.open(props.song.artistUrl)}}
						>{props.song.artist}</h2>
					</div>
				</div>
			)
	}

export default Top10SongView;