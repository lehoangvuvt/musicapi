import React from 'react';

function TopArtistCountryView(props){
	return(
		<div>
			<div onClick={()=>{window.open(props.artist.url)}}>
				<img src={props.artist.img} alt="cover"/>	
			</div>
			<div>
				<h3>{props.artist.name}</h3>
				<br/>
				<p>{props.artist.listeners} listeners</p>
			</div>
		</div>
		)
}
export default TopArtistCountryView;