import React, { Component } from 'react';

//local
import './App.css';

class Bus extends Component {
  constructor(){
  	super();
	this.setState({bright: ""});
  }

  componentWillMount(){
  	this.setState({data:""});
  }

  fetchIt(e){
  	e.preventDefault();
  	let message = '"'+e.target["stop_id"].value+" "+e.target["bus_id"].value+'"';
	console.log(message)
    fetch("http://35.199.154.222:5000/api?query="+message)
		.then((value)=> value.json())
		.then((valueJSON)=>{
			let datas = [];

			//process valid data
			//parse each bus
			for (let data of valueJSON){
				if (typeof(data) != "number"){
					let cur_bus = [];
					cur_bus.push(
						<h3> {data["name"]} </h3>
					)

					//parse each schedule 
					for (let sched of data["schedules"]){
						if (sched["stopcancel"] == "false" && sched["tripcancel"] == "false"){
							console.log(sched["time"]);
							cur_bus.push(
								<p> {sched["time"]} </p>
							);
						}
					}

					datas.push(cur_bus);
				}
			}

			//add processed data to state
			this.setState({data: datas});
        });
  }

  render() {
    return (
      <div className="App">

        <header className="App-header" id="App-header" style={{height:"100%"}}>
			<h1> checking bus </h1>
        </header>

        <body className="Bus" id="Intro" style={{padding:"11px"}}>
            <form onSubmit={this.fetchIt.bind(this)}> 
                <p> Bus Stop ID eg: 50077</p>
                    <input type="text" name="stop_id" placeHolder="50077" value="50077"/>  
                <p> Prefered Bus ID eg: 200 211 232</p>
                    <input type="text" name="bus_id" placeHolder="201 211 212"/>  
				<p> </p>
				<input type="submit" value="search schedules" style={{width:"200px", height:'30px'}}/>
            </form>

			{this.state.data}

        </body>

		<div style={{backgroundColor:"lightgray", padding:"18px", marginLeft:"12.5%"}}> 
			<p> NOTE: </p>
			<p> Granville place back home: 50077 </p>
			<p> OutSide House place: 54091 </p>
			<p> 211 nearest (Near Stongs Market) place: 54059 </p>
		</div>

      </div>
    );
  }
}

export default Bus;
