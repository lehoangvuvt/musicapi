import React from 'react';

function TopSongCountryView(props){
	return(
		<div>
			<div onClick={()=>{window.open(props.song.url)}}>
				<img src={props.song.img} alt="cover"/>	
			</div>
			<div>
				<h3>{props.song.name}</h3>
				<h4>{props.song.artist}</h4>
								<br/>
				<p>{props.song.listeners} listeners</p>
			</div>
		</div>
		)
}
export default TopSongCountryView;