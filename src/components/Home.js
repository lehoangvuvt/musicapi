import React from 'react';
import {store} from '../stores/index';
import axios from 'axios';
import TopArtistCountry from '../data/TopArtistCountryBase';
import TopArtistCountryView from '../components/TopArtistCountry';
import TopSongCountry from '../data/TopSongCountryBase';
import TopSongCountryView from '../components/TopSongCountry';
const API_KEY = "f5352f03bdb1008ab36c91faeec4bc6a";

class Home extends React.Component{
	constructor(){
		super();
		this.state={
			topArtists:TopArtistCountry,
			topSongs:TopSongCountry,
			country:"",
			switch:"SONGS->",
			category:"artists"
		}
		this.switchTo = this.switchTo.bind(this);
	}
	switchTo(e){
		let bg = document.getElementById('bg-home');
		let songField = document.getElementById('top-song-base-country');
		let artistField = document.getElementById('top-artist-base-country');
		if(this.state.switch==="SONGS->"){
			songField.style.left="2%";
			songField.style.filter="brightness(100%)";
			songField.style.boxShadow="0px 0px 52px 2px rgba(0,0,0,0.75)";
			songField.style.top="10%";
			artistField.style.filter="brightness(20%)";
			artistField.style.boxShadow="none";
			artistField.style.left="-100%";
			artistField.style.top="13%";
			bg.style.backgroundColor="black";
			setTimeout(()=>{
				this.setState({
					...this.state,
					category:"songs",
					switch:"<-ARTISTS"
				})
			},2000);
		}else if(this.state.switch==="<-ARTISTS"){
			songField.style.left="100%";
			songField.style.filter="brightness(50%)";
			songField.style.boxShadow="none";
			songField.style.top="13%";
			artistField.style.filter="brightness(100%)";
			artistField.style.boxShadow="0px 0px 52px 2px rgba(0,0,0,0.75)";
			artistField.style.left="0%";
			artistField.style.top="10%";
			bg.style.backgroundColor="white";
			setTimeout(()=>{
				this.setState({
					...this.state,
					category:"artists",
					switch:"SONGS->"
				})
			},2000);
		}
			
	}
	componentDidMount(){
		TopArtistCountry.splice(0,TopArtistCountry.length);
		TopSongCountry.splice(0,TopSongCountry.length);
		axios
		.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${store.getState().country}&api_key=${API_KEY}&limit=12&format=json`)
		.then(response=>{
			const artist=response.data.topartists.artist;
			const country = response.data.topartists['@attr'].country;
			for(let i=0;i<artist.length;++i){
				TopArtistCountry.push({name:artist[i].name,url:artist[i].url,
					img:artist[i].image[4]['#text'],listeners:artist[i].listeners});
				
			}
			this.setState({
					...this.state,
					topArtists:TopArtistCountry,
					country:country
				});
		})
		axios
		.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${store.getState().country}&api_key=${API_KEY}&limit=12&format=json`)
		.then(response=>{
			const songs = response.data.tracks.track;
			for(let i = 0;i<songs.length;++i){
				TopSongCountry.push({name:songs[i].name,artist:songs[i].artist.name,
					artistUrl:songs[i].artist.url,url:songs[i].url,img:songs[i].image[3]['#text'],
					listeners:songs[i].listeners});
			}
			this.setState({
				...this.state,
				topSongs:TopSongCountry
			});
		})
	}
	render(){
		const artistView = this.state.topArtists.map(artist=><TopArtistCountryView key={artist.name} artist={artist}/>);
		const songView = this.state.topSongs.map(song=><TopSongCountryView key={song.name} song={song}/>);
	return(
		<section>
			<div id="bg-home">
				<div id="home-main-container">
					<h1>Hi {store.getState().username}. These are some popular <span style={{'color':'#df2029','padding':'10px','backgroundColor':'white'}}>{this.state.category}</span> in <span style={{'textDecoration':'overline','color':'#df2029','backgroundColor':'white','padding':'10px'}}>{this.state.country}</span></h1>
					<div id="top-artist-base-country">
						{artistView}
					</div>
					<div id="top-song-base-country">
						{songView}
					</div>
					<button onClick={this.switchTo} id="swich-to">{this.state.switch}</button>
				</div>
			<div id="red-gif">
			</div>
			</div>
		</section>
		)	
	}
}
export default Home;