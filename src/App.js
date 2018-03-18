import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import myPDF from './Resume2018.pdf';

//local
import './App.css';

class App extends Component {
  constructor(){
  	super();
	this.setState({bright: ""});
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  	//change height according to screen
    if (window.innerHeight > 300) {
        document.getElementById("App-header").style["height"] = window.innerHeight+"px";
    }
    let skills = 	{name:"me-Skills", data: document.getElementById("Skills").getBoundingClientRect()};
    let intro = 	{name:"me-Intro", data: document.getElementById("Intro").getBoundingClientRect()};
    let exp = 		{name:"me-Exp", data: document.getElementById("Exp").getBoundingClientRect()};
    let edu = 		{name:"me-Edu", data: document.getElementById("Edu").getBoundingClientRect()};
    let goal = 		{name:"me-Goal", data: document.getElementById("Goal").getBoundingClientRect()};
    let resume = 	{name:"me-Resume", data: document.getElementById("Resume").getBoundingClientRect()};
	let menu = [ skills, intro, exp, edu, goal, resume, menu];
	this.setState({menu});
	console.log(skills);
  }

  handleScroll(event){
  	console.log(window.pageYOffset);
	for (let ele of this.state.menu){
		if ( ele != undefined && window.pageYOffset > ele.data.top && window.pageYOffset < ele.data.bottom){
			this.brightUp(ele.name);
		}
	}
  } 

  brightUp(id){
  	if (this.state.bright != undefined) 
		document.getElementById(this.state.bright).style.color = "white";
  	document.getElementById(id).style.color = "orange";
	this.setState({bright:id});
  }

  render() {
    return (
      <div className="App">

        <header className="App-header" id="App-header">
          <img src="/me.jpeg" className="App-logo" alt="logo" style={{borderRadius:"50%"}} />
          <h1 className="App-title">Ken Nguyen</h1>
            <ul id="header-menu">
                <a href="#Intro"><li id="me-Intro">Introduction</li></a>
                <a href="#Skills"><li id="me-Skills">Skills</li></a>
                <a href="#Exp"><li id="me-Exp">Experience</li></a>
                <a href="#Edu"><li id="me-Edu">Education</li></a>
                <a href="#Goal"><li id="me-Goal">Goal</li></a>
                <a href="#Resume"><li id="me-Resume">Resume</li></a>
            </ul>
            <div className="end-menu">
                ikendoit1998@gmail.com
            </div>
        </header>

        <body className="body">
            <div id="introduction">
                <p> Programmer </p>
                <p>	Web Developer </p>
                <p>	Student </p>
            </div>

            <div id="Intro" className="Main"> 
                <h1 style={{textAlign:'center'}}> Introduction </h1>
                <p>I am an international student from Viet Nam, came to Canada at August 2016 and instantly fell in love with the people and the opportunities that no where else in the world can offer.</p>
                <p>I started getting into programming around the second semester in College, when I wanted to automate logging into 3 different school websites. That is the story behind my first project: <a href="https://github.com/ikendoit/PersonalAutoSelenium" target="_blank">Auto Login</a></p>
                <p> Since then, I have created many more projects and programs as well as phone applications and websites </p>
                <p> See me on: </p>
                <ul id="Intro-menu">
                    <li> Github: <a href="https://github.com/ikendoit" target="_blank">My Github</a></li>
                    <li> Linkedin: <a href="https://linkedin.com/in/ikenlinkin1998" target="_blank">My Linkedin </a></li>
                    <li> Youtube: <a href="https://www.youtube.com/user/virginman101" target="_blank">My Youtube</a></li>
                    <li> Hackerrank: <a href="https://hackerrank.com/ikendoit" target="_blank">My Hackerank</a></li>
                </ul>
            </div>

            <div id="Skills" className="Main">
                <h1 style={{textAlign:'center'}}> Skills </h1>
                <p> My skill set varies due to the diversity of work I have done in programming.</p>
                <a href="#Resume"> Please look at my resume</a> to see my main skills
                <p> Let talk about some projects </p>

                <p> <a href="https://stockmock.cf">Stock Mock</a> </p>
                <ul>
					<li> A stock market simulation, real-time stocks update, virtual money you can burn </li>
					<li> Hosted on a Google Cloud instance, always up and fast </li>
					<li> Backend: NodeJS, mongoDB, MySQL </li>
					<li> Frontend: reactJS/redux </li>
					<li> watch it on <a href="https://www.youtube.com/watch?v=Qujrvw_qHH0">My Youtube</a> </li>
                </ul>

                <p> <a href="https://www.youtube.com/watch?v=MWfDuXaSP6M&t=8s">Falcon Ridge</a> </p>
				<ul>
					<li> Cross Platform Phone Application </li>
					<li> Helps Students see courses information in the quickest and most convinient matter </li>
					<li> Back-end: Amazon AWS server, python django-rest-framework, 5 python web scrapers that runs with cron job </li>
					<li> Front-end: react-native </li>
				</ul>

                <p> <a href="https://www.youtube.com/watch?v=3Yff7ZRejtw">Cross Tube</a> </p>
				<ul>
					<li> Chrome Extension </li>
					<li> Provides the ability to move the youtube video around the browser, manipulate its position and size </li> 
					<li> Using Chrome API, vanilla javascript, HTML and CSS </li>
				</ul>

            </div>

            <div id="Exp" className="Main">
                <h1 style={{textAlign:'center'}}> Experience </h1>
                <p style={{color:"red", fontSize:"20px"}}> ESIVISA - Web Developer </p>
                <ul>
                    <li> Develop Esivisa Website using WordPress</li>
                    <li> Implemented Features in PHP</li>
                    <li> Help building the dual-language feature</li>
                    <li> Updated User Interface regularly, managed posts and new content.</li>
                </ul>
            </div>

            <div id="Edu" className="Main">
                <h1 style={{textAlign:'center'}}> Education </h1>
                <p style={{color:"red", fontSize:"20px"}}> Langara College</p>
                <ul>
                    <li> Diploma of Computer Science (Co-op) </li>
                    <li> Graduating Date: April 30th, 2019 </li>
                </ul>
            </div>

            <div id="Goal" className="Main">
                <h1 style={{textAlign:'center'}}> Goal </h1>
                <p> My Dream has always been to become the best Full Stack Developer, so that I can play with logic, solve puzzles,  do heavy lifting with my brain and help making the world a lot more technologically advanced </p> 
            </div>

            <div id="Resume" className="Main"> 	
                <h1 style={{textAlign:'center'}}> Resume </h1>
                <p style={{textAlign:'center'}}> You can click on my Resume to see it in pdf format</p> 
                <a href={myPDF} > <PDF file={myPDF}  /> </a>
            </div>
        </body>

      </div>
    );
  }
}

export default App;
