(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},24:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),i=a(3),o=a(4),c=a(6),u=a(5),d=a(7),m=a(22),h=a(2),p="REGISTER",g="LOGIN",v="REDIRECT_PAGE",E="SIGNOUT",b=[{name:"Le Hoang Vu",gender:"male",country:"viet%20nam",countryCode:"VN",username:"hoangvu100",password:"12345",isReceiMail:!0}],y={user:b,username:"",password:"",country:"",countryCode:"",valid:!1,view:"LOGIN"};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return b.push(t.payload),Object(h.a)({},e,{user:b,view:"LOGIN"});case g:return e.username=t.payload.username,e.password=t.payload.password,b.forEach(function(t){e.username.toUpperCase()===t.username.toUpperCase()&&e.password===t.password&&(e.valid=!0,e.password="*****",e.country=t.country,e.countryCode=t.countryCode,e.view="USERPAGE")}),e;case v:return Object(h.a)({},e,{view:t.view});case E:return Object(h.a)({},e,{username:t.payload.username,password:t.payload.password,valid:t.payload.valid,view:t.payload.view});default:return e}},w=Object(m.a)(f),k=a(10),x=a(1),S={errorUsername:"",errorPassword:"",errorRePassword:""};var C=function(e){return{type:"REGISTER",payload:e}};var O=function(){return r.a.createElement("div",null,r.a.createElement("select",{id:"country-list",style:{width:"150px",textAlign:"center"}},r.a.createElement("option",{value:"australia"},"Australia"),r.a.createElement("option",{value:"brazil"},"Brazil"),r.a.createElement("option",{value:"canada"},"Canada"),r.a.createElement("option",{value:"china"},"China"),r.a.createElement("option",{value:"france"},"France"),r.a.createElement("option",{value:"germany"},"Germany"),r.a.createElement("option",{value:"india"},"India"),r.a.createElement("option",{value:"japan"},"Japan"),r.a.createElement("option",{value:"Korea,%20Republic%20of"},"Korea, Republic of"),r.a.createElement("option",{value:"spain"},"Spain"),r.a.createElement("option",{value:"sweden"},"Sweden"),r.a.createElement("option",{value:"united%20kingdom"},"United Kingdom"),r.a.createElement("option",{value:"united%20states"},"United States"),r.a.createElement("option",{value:"viet%20nam"},"Viet Nam")))},j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getCountryCode=function(e){switch(e){case"australia":return"AU";case"brazil":return"BR";case"canada":return"CA";case"china":return"CN";case"france":return"FR";case"germany":return"DE";case"india":return"IN";case"japan":return"JP";case"Korea,%20Republic%20of":return"KR";case"spain":return"ES";case"sweden":return"SE";case"united%20kingdom":return"GB";case"united%20states":return"US";case"viet%20nam":return"VN";default:return"none"}},e.state={receiveMail:!1,username:"",gender:"male",country:"",password:"",repassword:"",strength:"",error:S},e.handleChange=e.handleChange.bind(Object(x.a)(Object(x.a)(e))),e.handleRegister=e.handleRegister.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){S.errorUsername="",S.errorPassword="",this.setState({receiveMail:!1,username:"",gender:"male",country:"",password:"",strength:"",error:S})}},{key:"handleChange",value:function(e){var t=document.getElementById("password"),a=document.getElementById("username"),n=document.getElementById("divWeak"),r=document.getElementById("divMedium"),s=document.getElementById("divStrong"),l=document.getElementById("password-strength-text"),i=e.target,o=i.name,c=i.value;"checkbox"===i.type?this.setState(Object(k.a)({},o,!this.state.receiveMail)):this.setState(Object(k.a)({},o,c)),""!==this.state.password.trim()?(this.state.password.length>=1&&this.state.password.length<4&&(this.setState({strength:"Too short"}),l.style.color="rgba(0,0,0,0.7)",n.style.backgroundColor="rgba(0,0,0,0.1)",r.style.backgroundColor="rgba(0,0,0,0.1)",s.style.backgroundColor="rgba(0,0,0,0.1)"),this.state.password.length<=5&&this.state.password.length>=4&&(this.setState({strength:"weak"}),l.style.color="#df2029",n.style.backgroundColor="#df2029",r.style.backgroundColor="rgba(0,0,0,0.1)"),this.state.password.length<=10&&this.state.password.length>5&&(this.setState({strength:"fair"}),l.style.color="#f39c12",n.style.backgroundColor="#f39c12",r.style.backgroundColor="#f39c12",s.style.backgroundColor="rgba(0,0,0,0.1)"),this.state.password.length>10&&(this.setState({strength:"strong"}),l.style.color="#728BFF",n.style.backgroundColor="#728BFF",r.style.backgroundColor="#728BFF",s.style.backgroundColor="#728BFF")):this.setState({strength:""}),this.state.username.length<4||this.state.username.length>15?a.style.border="2px solid #df2029":a.style.border="1px solid grey",this.state.username.includes(" ")&&this.state.username.length>=4&&this.state.username.length<=15?a.style.border="2px solid #df2029":!this.state.username.includes(" ")&&this.state.username.length>=4&&this.state.username.length<=15&&(a.style.border="1px solid grey"),this.state.password.length<4?t.style.border="2px solid #df2029":t.style.border="1px solid grey"}},{key:"handleRegister",value:function(e){for(var t=!1,a=!0,n=document.getElementById("country-list").value,r=this.getCountryCode(n),s=0;s<b.length;++s)this.state.username.toUpperCase()===b[s].username.toUpperCase()&&(t=!0);this.state.username.length<5||this.state.username.length>16?(S.errorUsername="Username length can't be over 16 characters or below 5 characters",this.setState({error:S}),a=!1):(S.errorUsername="",this.setState({error:S})),this.state.username.includes(" ")&&this.state.username.length>=5&&this.state.username.length<=16?(S.errorUsername="Username can't contains any blankspace",this.setState({error:S}),a=!1):!this.state.username.includes(" ")&&this.state.username.length>=5&&this.state.username.length<=16&&(S.errorUsername="",this.setState({error:S})),this.state.password.length<5?(S.errorPassword="Password minimum length is 5",this.setState({error:S}),a=!1):(S.errorPassword="",this.setState({error:S})),this.state.password.length>=5&&(this.state.password!==this.state.repassword?(S.errorRePassword="Password does not match",this.setState({error:S}),a=!1):(S.errorRePassword="",this.setState({error:S}))),!t&&a?(S.errorUsername="",S.errorPassword="",S.errorRePassword="",this.setState({error:S}),w.dispatch(C({name:this.state.name,gender:this.state.gender,country:n,countryCode:r,username:this.state.username,password:this.state.password,isReceiMail:this.state.receiveMail})),this.setState({name:"",gender:"male",username:"",password:"",repassword:"",receiveMail:!1})):t&&(S.errorUsername="Duplicated Username",this.setState({error:S})),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{id:"register-form"},r.a.createElement("form",{onSubmit:this.handleRegister},r.a.createElement("input",{className:"text-field",onChange:this.handleChange,value:this.state.name,type:"text",name:"name",placeholder:"Name (optional)"}),r.a.createElement("p",{className:"noti-error"},this.state.error.errorName),r.a.createElement("label",{className:"container"},r.a.createElement("input",{onChange:this.handleChange,type:"radio",name:"gender",value:"male",checked:"male"===this.state.gender}),"Male",r.a.createElement("span",{class:"checkmark"})),r.a.createElement("br",null),r.a.createElement("label",{className:"container"},r.a.createElement("input",{onChange:this.handleChange,type:"radio",name:"gender",value:"female",checked:"female"===this.state.gender}),"Female",r.a.createElement("span",{class:"checkmark"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,null),r.a.createElement("br",null),r.a.createElement("input",{id:"username",className:"text-field",onChange:this.handleChange,value:this.state.username,required:!0,type:"text",name:"username",placeholder:"Username"}),r.a.createElement("p",{className:"noti-error"},this.state.error.errorUsername),r.a.createElement("input",{id:"password",className:"text-field",required:!0,onChange:this.handleChange,placeholder:"Password",type:"password",name:"password",value:this.state.password}),r.a.createElement("p",{className:"noti-error"},this.state.error.errorPassword),r.a.createElement("input",{className:"text-field",required:!0,onChange:this.handleChange,placeholder:"Confirm password",type:"password",name:"repassword",value:this.state.repassword}),r.a.createElement("p",{className:"noti-error"},this.state.error.errorRePassword),r.a.createElement("p",{id:"strength-title"},"Password strength"),r.a.createElement("p",{id:"password-strength-text"},this.state.strength),r.a.createElement("br",null),r.a.createElement("div",{id:"password-strength"},r.a.createElement("div",{id:"divWeak"}),r.a.createElement("div",{id:"divMedium"}),r.a.createElement("div",{id:"divStrong"})),r.a.createElement("br",null),r.a.createElement("input",{id:"register-button",type:"submit",value:"Register"}),r.a.createElement("br",null),r.a.createElement("label",{id:"receive-mail"},r.a.createElement("input",{type:"checkbox",name:"receiveMail",checked:this.state.receiveMail,onChange:this.handleChange}),"Receive News Through Email"),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component);var R=function(e){return{type:"REDIRECT_PAGE",view:e}};var T=function(e){return{type:"LOGIN",payload:e}},N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={error:""},e.handleLogin=e.handleLogin.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleLogin",value:function(e){var t=e.target.username.value,a=e.target.password.value;w.dispatch(T({username:t,password:a})),w.getState().valid?this.setState({error:""}):this.setState({error:"Error Username or Password"}),e.preventDefault()}},{key:"componentDidMount",value:function(){w.dispatch(T({username:"",password:""}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"login-form"},r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"text-field",required:!0,type:"text",name:"username",placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"text-field",required:!0,placeholder:"Password",type:"password",name:"password"}),r.a.createElement("p",{id:"login-error-notice"},this.state.error),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{id:"login-button",type:"submit",value:"Login"})))}}]),t}(r.a.Component);var A=function(e){return{type:"SIGNOUT",payload:e}};var I=function(){var e,t,a;return"USERPAGE"===w.getState().view&&(e={filter:"brightness(120%)"}),"CHART"===w.getState().view&&(t={filter:"brightness(120%)"}),"ABOUT"===w.getState().view&&(a={filter:"brightness(120%)"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"navbar"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){w.dispatch(R("USERPAGE"))},style:e},"Home")),r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){w.dispatch(R("CHART"))},style:t},"Charts")),r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){w.dispatch(R("ABOUT"))},style:a},"Videos")))))},G=a(9),U=a.n(G),P=[];a(11);var B=function(e){return r.a.createElement("div",{id:"holder-chart"},r.a.createElement("div",null,r.a.createElement("img",{src:e.song.cover,alt:"cover"})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h3",null,e.song.position)),r.a.createElement("div",{id:"text-holder-chart",style:{textAlign:"left"}},r.a.createElement("h1",{onClick:function(){window.open(e.song.url)}},e.song.name),r.a.createElement("h2",{onClick:function(){window.open(e.song.artistUrl)}},e.song.artist)))},L=[];var M=function(e){return r.a.createElement("div",{onClick:function(){window.open(e.artist.url)}},r.a.createElement("div",null,r.a.createElement("img",{src:e.artist.image,alt:"cover"})),r.a.createElement("div",{id:"text-holder-chart"},r.a.createElement("h1",{style:{marginTop:"15px"},onClick:function(){window.open(e.artist.url)}},e.artist.name)))},F="f5352f03bdb1008ab36c91faeec4bc6a";window.Top10Track=P,window.TopArtist=L;var D=1,V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={top10track:P,topArtist:L},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"nextChart",value:function(){var e=document.getElementById("top-song");D>=-280?D-=40:D=-280,e.style.left="".concat(D,"%")}},{key:"prevChart",value:function(){var e=document.getElementById("top-song");D<=40?D+=40:D=0,e.style.left="".concat(D,"%")}},{key:"componentDidMount",value:function(){var e=this;Top10Track=[],TopArtist=[],U.a.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=".concat(F,"&format=json&limit=10&page=1")).then(function(t){var a=0,n=t.data.tracks.track;console.log(n);for(var r=0;r<n.length;++r)a+=1,Top10Track.push({name:n[r].name,cover:n[r].image[3]["#text"],artist:n[r].artist.name,artistUrl:n[r].artist.url,listeners:n[r].listeners,playcount:n[r].playcount,url:n[r].url,position:a});e.setState({top10track:Top10Track})}),U.a.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=".concat(F,"&format=json&limit=10&page=1")).then(function(t){for(var a=t.data.artists.artist,n=0;n<a.length;n++)TopArtist.push({position:n+1,name:a[n].name,url:a[n].url,image:a[n].image[4]["#text"]});e.setState({topArtist:TopArtist})})}},{key:"render",value:function(){var e=this.state.top10track.map(function(e){return r.a.createElement(B,{key:e.position,song:e})}),t=this.state.topArtist.map(function(e){return r.a.createElement(M,{key:e.position,artist:e})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"chart-section"},r.a.createElement("div",{id:"chart-title"}),r.a.createElement("div",{id:"title-top-song"},r.a.createElement("h1",null,"Top Tracks ",r.a.createElement("i",{class:"fas fa-compact-disc"}))),r.a.createElement("div",{id:"top-song"},e),r.a.createElement("div",{style:{top:"400px",left:"0%"},id:"title-top-song"},r.a.createElement("h1",{className:"chart-button",id:"next-button",onClick:this.prevChart},r.a.createElement("i",{class:"fas fa-chevron-left"}))),r.a.createElement("div",{style:{top:"400px",left:"97%"},id:"title-top-song"},r.a.createElement("h1",{className:"chart-button",id:"next-button",onClick:this.nextChart},r.a.createElement("i",{class:"fas fa-chevron-right"}))),r.a.createElement("div",{id:"chart-title"}),r.a.createElement("div",{id:"title-top-song",style:{top:"700px"}},r.a.createElement("h1",null,"Top Artists ",r.a.createElement("i",{class:"fas fa-microphone-alt"}))),r.a.createElement("div",{id:"top-artist",style:{top:"850px"}},t),r.a.createElement("div",{id:"red-gif"})))}}]),t}(r.a.Component),H=[];var _=function(e){return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){window.open(e.artist.url)}},r.a.createElement("img",{src:e.artist.img,alt:"cover"})),r.a.createElement("div",null,r.a.createElement("h3",null,e.artist.name),r.a.createElement("br",null),r.a.createElement("p",null,e.artist.listeners," listeners")))},q=[];var z=function(e){return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){window.open(e.song.url)}},r.a.createElement("img",{src:e.song.img,alt:"cover"})),r.a.createElement("div",null,r.a.createElement("h3",null,e.song.name),r.a.createElement("h4",null,e.song.artist),r.a.createElement("br",null),r.a.createElement("p",null,e.song.listeners," listeners")))},J=[];var K=function(e){return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){window.open(e.song.url)}},r.a.createElement("img",{src:""!==e.song.img?e.song.img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzffv9B8PWVOftHQkN3Q4C5aDAwcB4l4P_xJRv4eNilhwPwgq",alt:"cover"})),r.a.createElement("div",null,r.a.createElement("h3",null,e.song.name),r.a.createElement("h4",null,e.song.artist),r.a.createElement("br",null),r.a.createElement("p",null,e.song.listeners," listeners")))},W="f5352f03bdb1008ab36c91faeec4bc6a",Q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).moreResult=function(){var t=e.state.keyword,a=e.state.nextpage;U.a.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(t,"&api_key=").concat(W,"&limit=31&page=").concat(a,"&format=json")).then(function(t){for(var a=t.data.results.trackmatches.track,n=0;n<a.length;++n)a[n].name.length<=50&&""!==a[n].image[3]["#text"]&&J.push({name:a[n].name,artist:a[n].artist,url:a[n].url,img:a[n].image[3]["#text"],listeners:a[n].listeners});e.setState(Object(h.a)({},e.state,{results:J,nextPage:e.state.nextpage+1}))})},e.state={nextpage:2,toggleSearch:!1,topArtists:H,topSongs:q,country:"",switch:"SONGS->",category:"artists",keyword:"SEARCH SONG",results:J},e.switchTo=e.switchTo.bind(Object(x.a)(Object(x.a)(e))),e.handleChange=e.handleChange.bind(Object(x.a)(Object(x.a)(e))),e.searchSong=e.searchSong.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(h.a)({},this.state,Object(k.a)({},a,n)))}},{key:"searchSong",value:function(){var e=this;this.setState(Object(h.a)({},this.state,{results:this.state.results.filter(function(e){return""===e.name})})),J.splice(0,J.length);var t=this.state.keyword;""!==t.trim()?U.a.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(t,"&api_key=").concat(W,"&limit=32&page=1&format=json")).then(function(t){for(var a=t.data.results.trackmatches.track,n=0;n<a.length;++n)a[n].name.length<=50&&""!==a[n].image[3]["#text"]&&J.push({name:a[n].name,artist:a[n].artist,url:a[n].url,img:a[n].image[3]["#text"],listeners:a[n].listeners});e.setState(Object(h.a)({},e.state,{results:J}))}):alert("Kh\xf4ng nh\u1eadp g\xec sao ki\u1ebfm cho m\xe0y!?")}},{key:"switchTo",value:function(e){var t=this,a=document.getElementById("bg-home"),n=document.getElementById("top-song-base-country"),r=document.getElementById("top-artist-base-country");"SONGS->"===this.state.switch?(n.style.left="2%",n.style.filter="brightness(100%)",n.style.boxShadow="0px 0px 52px 2px rgba(0,0,0,0.75)",n.style.top="10%",r.style.filter="brightness(20%)",r.style.boxShadow="none",r.style.left="-100%",r.style.top="13%",a.style.backgroundColor="black",setTimeout(function(){t.setState(Object(h.a)({},t.state,{category:"songs",switch:"<-ARTISTS"}))},2e3)):"<-ARTISTS"===this.state.switch&&(n.style.left="100%",n.style.filter="brightness(50%)",n.style.boxShadow="none",n.style.top="13%",r.style.filter="brightness(100%)",r.style.boxShadow="0px 0px 52px 2px rgba(0,0,0,0.75)",r.style.left="0%",r.style.top="10%",a.style.backgroundColor="white",setTimeout(function(){t.setState(Object(h.a)({},t.state,{category:"artists",switch:"SONGS->"}))},2e3))}},{key:"componentDidMount",value:function(){var e=this;H.splice(0,H.length),q.splice(0,q.length),U.a.get("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=".concat(w.getState().country,"&api_key=").concat(W,"&limit=12&format=json")).then(function(t){for(var a=t.data.topartists.artist,n=t.data.topartists["@attr"].country,r=0;r<a.length;++r)H.push({name:a[r].name,url:a[r].url,img:a[r].image[4]["#text"],listeners:a[r].listeners});e.setState(Object(h.a)({},e.state,{topArtists:H,country:n})),localStorage.setItem("country",n)}),U.a.get("https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=".concat(w.getState().country,"&api_key=").concat(W,"&limit=12&format=json")).then(function(t){for(var a=t.data.tracks.track,n=0;n<a.length;++n)q.push({name:a[n].name,artist:a[n].artist.name,artistUrl:a[n].artist.url,url:a[n].url,img:a[n].image[3]["#text"],listeners:a[n].listeners});e.setState(Object(h.a)({},e.state,{topSongs:q}))}),J.splice(0,J.length);var t=this.state.keyword;U.a.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(t,"&api_key=").concat(W,"&limit=31&page=1&format=json")).then(function(t){for(var a=t.data.results.trackmatches.track,n=0;n<a.length;++n)a[n].name.length<=50&&""!==a[n].image[3]["#text"]&&J.push({name:a[n].name,artist:a[n].artist,url:a[n].url,img:a[n].image[3]["#text"],listeners:a[n].listeners});e.setState(Object(h.a)({},e.state,{results:J}))})}},{key:"render",value:function(){var e=this.state.topArtists.map(function(e){return r.a.createElement(_,{key:e.name,artist:e})}),t=this.state.topSongs.map(function(e){return r.a.createElement(z,{key:e.name,song:e})}),a=this.state.results.map(function(e){return r.a.createElement(K,{key:e.name,song:e})});return r.a.createElement("section",null,r.a.createElement("div",{id:"bg-home"},r.a.createElement("div",{id:"home-main-container"},r.a.createElement("h1",null,"Hi ",w.getState().username,". These are some popular",r.a.createElement("span",{style:{"box-shadow":"10px 10px 5px 0px rgba(0,0,0,0.75)",color:"#df2029",padding:"10px",backgroundColor:"white"}},this.state.category)," in ",r.a.createElement("span",{style:{textDecoration:"overline",color:"#df2029",backgroundColor:"white",padding:"10px","box-shadow":"10px 10px 5px 0px rgba(0,0,0,0.75)"}},this.state.country)),r.a.createElement("div",{id:"top-artist-base-country"},e),r.a.createElement("div",{id:"top-song-base-country"},t),r.a.createElement("button",{onClick:this.switchTo,id:"swich-to"},this.state.switch)),r.a.createElement("div",{id:"red-gif"}),r.a.createElement("h1",{id:"or"},"Or"),r.a.createElement("div",{id:"search-bar-holder"},r.a.createElement("input",{type:"text",value:this.state.keyword,onChange:this.handleChange,name:"keyword",placeholder:"SEARCH SONG"}),r.a.createElement("button",{onClick:this.searchSong},"SEARCH")),r.a.createElement("div",{id:"song-results"},a,r.a.createElement("h1",{onClick:this.moreResult,id:"more-text"},"More"),"}")))}}]),t}(r.a.Component);var X=20,Y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={videos:[]},e.nextVideo=e.nextVideo.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&videoCategoryId=10&maxResults=10&regionCode=".concat(w.getState().countryCode,"&key=").concat("AIzaSyBJAkRT_rADL34jq7a_Hoh1XEyc9FLV5dE")).then(function(t){for(var a=t.data.items,n=0;n<a.length;++n)e.setState(Object(h.a)({},e.state,{videos:e.state.videos.concat({id:"https://www.youtube.com/embed/"+a[n].id})}))})}},{key:"nextVideo",value:function(){var e=document.getElementById("video-section");X>=-570?X-=70:X=10,e.style.left="".concat(X,"%")}},{key:"prevVideo",value:function(){var e=document.getElementById("video-section");X<10?X+=70:X=-570,e.style.left="".concat(X,"%")}},{key:"render",value:function(){var e=this.state.videos.map(function(e){return r.a.createElement("div",null,r.a.createElement("iframe",{width:"100%",height:"100%",src:e.id,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))});return r.a.createElement("div",{id:"about-section"},r.a.createElement("div",{id:"home-main-container",style:{top:"-90px"}},r.a.createElement("h1",null,"Top Trending",r.a.createElement("span",{style:{"box-shadow":"10px 10px 5px 0px rgba(0,0,0,0.75)",color:"#df2029",padding:"10px",backgroundColor:"white"}},"Music Videos")," in ",r.a.createElement("span",{style:{textDecoration:"overline",color:"#df2029",backgroundColor:"white",padding:"10px","box-shadow":"10px 10px 5px 0px rgba(0,0,0,0.75)"}},localStorage.getItem("country")))),r.a.createElement("div",{id:"video-section"},e),r.a.createElement("h1",{id:"next-video-button",onClick:this.nextVideo},r.a.createElement("i",{class:"fas fa-chevron-right"})),r.a.createElement("h1",{id:"prev-video-button",onClick:this.prevVideo},r.a.createElement("i",{class:"fas fa-chevron-left"})))}}]),t}(r.a.Component),Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={isOpen:!1},e.showNav=e.showNav.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"showNav",value:function(e){var t=document.getElementById("nav-bar-userpage"),a=document.querySelector("#userpage-container>h1");this.state.isOpen?(t.style.display="none",t.style.opacity=0,a.style.color="white",this.setState({isOpen:!1})):(t.style.display="flex",t.style.opacity=1,a.style.color="white",this.setState({isOpen:!0}))}},{key:"signOut",value:function(e){H.splice(0,H.length),q.slice(0,q.length),w.dispatch(A({username:"",password:"",valid:!1,view:"LOGIN"})),e.preventDefault()}},{key:"render",value:function(){var e=this;return"USERPAGE"===w.getState().view?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"userpage-container"},r.a.createElement(I,null),r.a.createElement("h1",{onClick:function(t){return e.showNav(t)}},r.a.createElement("i",{id:"user-icon",class:"far fa-user-circle"})),r.a.createElement("div",{id:"nav-bar-userpage"},r.a.createElement("div",null,r.a.createElement("p",{style:{color:"black",fontSize:"11px",fontWeight:"bold"}},w.getState().username)),r.a.createElement("div",null,r.a.createElement("p",null,"Account")),r.a.createElement("div",{onClick:function(t){return e.signOut(t)},style:{borderRadius:"0px 0px 0px 10px"}},r.a.createElement("p",null,"Sign out"))),r.a.createElement(Q,null))):"CHART"===w.getState().view?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"userpage-container"},r.a.createElement(I,null),r.a.createElement("h1",{onClick:function(t){return e.showNav(t)}},r.a.createElement("i",{id:"user-icon",class:"far fa-user-circle"})),r.a.createElement("div",{id:"nav-bar-userpage"},r.a.createElement("div",null,r.a.createElement("p",{style:{color:"black",fontSize:"11px",fontWeight:"bold"}},w.getState().username)),r.a.createElement("div",null,r.a.createElement("p",null,"Account")),r.a.createElement("div",{onClick:function(t){return e.signOut(t)},style:{borderRadius:"0px 0px 0px 10px"}},r.a.createElement("p",null,"Sign out"))),r.a.createElement(V,null))):"ABOUT"===w.getState().view?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"userpage-container"},r.a.createElement(I,null),r.a.createElement("h1",{onClick:function(t){return e.showNav(t)}},r.a.createElement("i",{id:"user-icon",class:"far fa-user-circle"})),r.a.createElement("div",{id:"nav-bar-userpage"},r.a.createElement("div",null,r.a.createElement("p",{style:{color:"black",fontSize:"11px",fontWeight:"bold"}},w.getState().username)),r.a.createElement("div",null,r.a.createElement("p",null,"Account")),r.a.createElement("div",{onClick:function(t){return e.signOut(t)},style:{borderRadius:"0px 0px 0px 10px"}},r.a.createElement("p",null,"Sign out"))),r.a.createElement(Y,null),r.a.createElement("div",{id:"red-gif"}))):void 0}}]),t}(r.a.Component);a(49);window.store=w;var $=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"GoToPage",value:function(e){w.dispatch(R(e))}},{key:"render",value:function(){var e=this;return"LOGIN"===w.getState().view?r.a.createElement("div",{className:"login-register-container"},r.a.createElement("div",{id:"login-form-holder"},r.a.createElement("div",{id:"option-bar"},r.a.createElement("div",{style:{borderRadius:"10px 0px 0px 0px"},name:"login",value:"LOGIN",onClick:function(){e.GoToPage("LOGIN")},id:"current-option"},r.a.createElement("h1",null,"Login")),r.a.createElement("div",{style:{borderRadius:"0px 10px 0px 0px"},name:"register",id:"uncurrent-option",value:"REGISTER",onClick:function(){e.GoToPage("REGISTER")}},r.a.createElement("h1",null,"Register"))),r.a.createElement(N,null))):"REGISTER"===w.getState().view?r.a.createElement("div",{className:"login-register-container"},r.a.createElement("div",{id:"register-form-holder"},r.a.createElement("div",{id:"option-bar"},r.a.createElement("div",{style:{borderRadius:"10px 0px 0px 0px"},name:"login",id:"uncurrent-option",value:"LOGIN",onClick:function(){e.GoToPage("LOGIN")}},r.a.createElement("h1",null,"Login")),r.a.createElement("div",{style:{borderRadius:"0px 10px 0px 0px"},name:"register",value:"REGISTER",onClick:function(){e.GoToPage("REGISTER")},id:"current-option"},r.a.createElement("h1",null,"Register"))),r.a.createElement(j,null))):"USERPAGE"===w.getState().view||"CHART"===w.getState().view||"ABOUT"===w.getState().view?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null)):void 0}}]),t}(r.a.Component),ee=function(){return l.a.render(r.a.createElement($,null),document.getElementById("root"))};ee(),w.subscribe(ee)}},[[24,1,2]]]);
//# sourceMappingURL=main.e919a23a.chunk.js.map