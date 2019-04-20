import React from 'react';
let left = 20;
class About extends React.Component{
	nextVideo(){
		let videos = document.getElementById('video-section');
		if(left>=-120){
			left-=70;
		}else{
			left=-170;
		}
		videos.style.left=`${left}%`;
	}

	prevVideo(){
		let videos = document.getElementById('video-section');
		if(left<20){
			left+=70;
		}else{
			left=20;
		}
		videos.style.left=`${left}%`;
	}
	render(){
	return(
		<div id="about-section">
			<div id="video-section">
				<div>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DyDfgMOUjCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				
				<div>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTRZJ-4EyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				
				<div>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PMivT7MJ41M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div>
					<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/nfs8NYg7yQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				</div>
			<h1 id="next-video-button"
			onClick={this.nextVideo}
			><i class="fas fa-chevron-right"></i></h1>

			<h1 id="prev-video-button"
			onClick={this.prevVideo}
			><i class="fas fa-chevron-left"></i></h1>
			</div>
		
		);
	}
}
export default About;