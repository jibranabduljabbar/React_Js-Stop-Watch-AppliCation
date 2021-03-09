import React from 'react';
import '../App.css';

class Stop_Watch extends React.Component{
    constructor(){
        super()
        this.state = {

msec: 0,
sec: 0,
min: 0,
hour: 0,
day: 0,
Intervel: 0,
rmsec: 0,
rsec: 0,
rmin: 0,
rhour: 0,
rday: 0,
lab: [],
isDisabled: false
        
}
    }



Timer = () => {

    this.setState({
        msec: this.state.msec+1
    })

    if(this.state.msec >= 100){
        this.setState({
            sec: this.state.sec+1
        })
        this.state.msec = 0
    }
    if(this.state.sec >= 60){
        this.setState({
            min: this.state.min+1
        })
        this.state.sec = 0
    }
    if(this.state.min >= 60){
        this.setState({
            hour: this.state.hour+1
        })
        this.state.min = 0
    }
    if(this.state.hour >= 24){
        this.setState({
            day: this.state.day+1
        })
        this.state.hour = 0
    }
}

Active = () => {
this.state.Intervel = setInterval(() => {
    this.Timer() 
 }, 10);

 this.setState({
     isDisabled: true
 })
}  

Stop = () => {
clearInterval(this.state.Intervel)
this.setState({
    isDisabled: false
})
}

Reset = () => {
this.setState({
    day: this.state.rday,
    hour: this.state.rhour,
    min: this.state.rmin,
    sec: this.state.rsec,
    msec: this.state.rmsec
})    
this.Stop()

this.setState({
    lab: []
})
    }

Lab = () => {
    this.state.lab = [...this.state.lab,`${this.state.day} : ${this.state.hour} : ${this.state.min} : ${this.state.sec} : ${this.state.msec}`]

    this.setState({
      lab: this.state.lab
  })
}

    render(){
    return(

    <div className="main">

<h1>⏱️_Stop_Watch AppliCation_⏱️</h1>
<br />
<br />
<br />
<br />
<div className="div">
<hr/>
<hr/>
<h3 className="d">DaY</h3>
<hr/>
<h3 className="h">HouR</h3>
<hr/>
<h3 className="m">MinutE</h3>
<hr/>
<h3 className="s">SeconD</h3>
<hr/>
<h3 className="ms">MiliseconD</h3>
<hr/>
<hr/></div>
<br/>
<br/>
<br/>
<br/>
<div className="div1">
<hr/>
< hr style={{fontWeight:"900"}}/>
<h3 className="d">{this.state.day}</h3>    
<hr/>
<h3 className="h">{this.state.hour}</h3>
<hr/>
<h3 className="m">{this.state.min}</h3>
<hr/>
<h3 className="s">{this.state.sec}</h3>
<hr/>
<h3 className="ms">{this.state.msec}</h3>
<hr/>
<hr/>
</div>
<br/>
<br/>
<br/>
<div className="button">
<button className="button4" onClick={this.Active} disabled={this.state.isDisabled} >Active</button>
<button className="button1" onClick={this.Stop}>⏹️Stop⏹️</button>
<button className="button2" onClick={this.Reset}>Reset</button>
<button className="button3" onClick={this.Lab}>Lab</button>
</div>
<br/>
<br/>
<h1 className="his">HistorY</h1>

<ul>
{this.state.lab.map((e,i) => {
    return <li key={i}>{e}</li>
})}
</ul>
    </div>
    )}
}

export default Stop_Watch;