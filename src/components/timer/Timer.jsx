import React, { Component } from 'react';
import Clock from 'components/clock/Clock';
import Controls from 'components/controls/Controls';
import Input from './Input';


class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			time: "", 
			focus: false, 
			isRuning: false,
			timeString: "",
			visible: true
		}

		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggle = this.toggle.bind(this);
		this.reset = this.reset.bind(this);
		this.start = this.start.bind(this);
	}

	componentDidMount() {
		this.handleFocus();
		this.clock = setInterval(() => {
			let {isRuning, time, focus} = this.state;
			if(isRuning && time) this.updateTime();
			if(time == 0 && !focus) this.reset();
		}, 1000);
	}

	componentWillUnmount() {
		if(this.clock) {
			this.reset();
			clearInterval(this.clock);
		}
	}

	updateTime() {
		this.setState(({time}) => ({
			time: time - 1,
			timeString: this.toString(time - 1)
		}))
	}

	start() {
		if(this.state.timeString) {
			this.setState(({time}) => ({
				isRuning: true,
			}))
		}
	}

	pause() {
		this.setState({isRuning: false})
	}

	reset() {
		this.setState({time: 0, isRuning: false, timeString: ""})
	}

	toggle() {
		const {isRuning} = this.state;
		if(isRuning) this.pause();
		else this.start();
	}


	toSeconds(time) {
		const seconds = String(time).slice(-2);
		const minutes = String(time).slice(-4, -2);
		const hours = String(time).slice(-6, -4);
		return +(hours * 60 * 60) + +(minutes * 60) + +seconds;
	}

	toString(input) {
		let sec_num = parseInt(input, 10);
		let hours   = Math.floor(sec_num / 3600);
		let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		let seconds = sec_num - (hours * 3600) - (minutes * 60);

		if(minutes && seconds < 10) seconds = "0" + seconds;
		if(hours) {
			if(minutes < 10) minutes = "0" + minutes;
			if(seconds < 10) seconds = "0" + seconds;
		}

		let time = "";
		if(hours) time += hours;
		if(minutes) time += minutes;
		if(seconds) time += seconds;

		return time;
	}


	handleFocus() {
		this.setState(({focus}) => ({
			visible: true, 
			focus: true, 
			isRuning: false
		}))
	}

	handleBlur() {
		this.setState(({focus, timeString}) => ({
			time: this.toSeconds(timeString),
			visible: false,
			focus: false
		}));
	}

	handleChange(event) {
		let timeString = event.target.value;
		let key = event.keyCode || event.charCode;

		if(!isNaN(+timeString.slice(-1)) && timeString.length <= 6 || key == 8 || key == 46) {
			this.setState({timeString})
		}
	}



	render() {
		let {time, focus, isRuning, timeString, visible} = this.state;
		let timeInput = String(focus ? timeString : time || 0);

		return (
			<div className="widget timer">
				<Clock 
				isString={focus}
				time={timeInput}
				focus={focus} 
				onFocus={this.handleFocus}/>

				<Input
				focus={focus}
				visible={visible}
				onChange={this.handleChange} 
				onBlur={this.handleBlur}
				onFocus={this.handleFocus}
				toggle={this.toggle}
				value={timeString}/>

				<Controls 
				isRuning={isRuning}
				toggle={this.toggle}
				reset={this.reset} />
			</div>
		);
	}
}

export default Timer
