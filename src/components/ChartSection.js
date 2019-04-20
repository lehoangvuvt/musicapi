
import React from 'react';
import axios from 'axios';
import Top10Track from '../data/Top10Track';
import Top10SongView from '../components/Top10SongView';
import TopArtist from '../data/TopArtists';
import TopArtistsView from '../components/TopArtistView';
const API_KEY = "f5352f03bdb1008ab36c91faeec4bc6a";
window.Top10Track = Top10Track;	
window.TopArtist = TopArtist;
let left=1;
class ChartSection extends React.Component{
	constructor(){
		super();
		this.state = {
			top10track:Top10Track,
			topArtist : TopArtist
		}
	}
	nextChart(){
		let chart = document.getElementById('top-song');
		if(left>=-280){
			left-=40;
		}else{
			left=-280;
		}
		chart.style.left=`${left}%`;
	}
	prevChart(){
		let chart = document.getElementById('top-song');
		if(left<=40){
			left+=40;
		}else{
			left=0;
		}
		chart.style.left=`${left}%`;
	}

	componentDidMount(){
		Top10Track = [];
		TopArtist = [];
		axios
		.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=10&page=1`)
		.then(response=>{
			let pos = 0;
			const tracks = response.data.tracks.track;
			console.log(tracks);
			for(let i=0;i<tracks.length;++i){
				pos = pos+1;
				Top10Track.push({name:tracks[i].name,cover:tracks[i].image[3]['#text'],artist:tracks[i].artist.name,
					artistUrl:tracks[i].artist.url,listeners:tracks[i].listeners,playcount:tracks[i].playcount,
					url:tracks[i].url,position:pos});
			}
			this.setState({
				top10track:Top10Track
			})
		});
		axios
		.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10&page=1`)
		.then(response=>{
			const artists = response.data.artists.artist;
			for(let i = 0;i<artists.length;i++){
				TopArtist.push({position:i+1,name:artists[i].name,url:artists[i].url,image:artists[i].image[4]['#text']});
			}
			this.setState({
				topArtist : TopArtist
			});
		});
		
	}
	render(){
		const TopSong = this.state.top10track.map(song=><Top10SongView key={song.position} song={song}/>);
		const TopArtist = this.state.topArtist.map(artist=><TopArtistsView key={artist.position} artist={artist}/>);
		return(
			<React.Fragment>
					<div id="chart-section">
						<div id="chart-title">
							
						</div>
						<div id="title-top-song">
							<h1>Top Tracks <i class="fas fa-compact-disc"></i></h1>
							</div>
						<div id="top-song">
							{TopSong}
						</div>
						<div style={{'top':'400px','left':'0%'}} id="title-top-song">
							<h1 className="chart-button" id="next-button" onClick={this.prevChart}><i class="fas fa-chevron-left"></i></h1>
						</div>
						<div style={{'top':'400px','left':'97%'}} id="title-top-song">
							<h1 className="chart-button" id="next-button" onClick={this.nextChart}><i class="fas fa-chevron-right"></i></h1>
						</div>

							<div id="chart-title">
							
						</div>
						<div id="title-top-song" style={{'top':'700px'}}>
							<h1>Top Artists <i class="fas fa-microphone-alt"></i></h1>
							</div>
						<div id="top-artist" style={{'top':'850px'}}>
							{TopArtist}
						</div>
					<div id="red-gif">
					</div>
					</div>

			</React.Fragment>
			)
	}
}
export default ChartSection;