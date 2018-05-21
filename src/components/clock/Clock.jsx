import React, { Component } from 'react';
import ClockField from './ClockField';

class Clock extends Component {
	calculate(input) {
		let sec_num = parseInt(input, 10);
		let hours   = Math.floor(sec_num / 3600);
		let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		let seconds = sec_num - (hours * 3600) - (minutes * 60);

		if (hours   < 10) hours   = "0"+hours;
		if (minutes < 10) minutes = "0"+minutes;
		if (seconds < 10) seconds = "0"+seconds;

		if (hours   > 99) {
			hours   = "99";
			minutes = "60";
		}

		hours = String(hours);
		minutes = String(minutes);
		seconds = String(seconds);

		return {hours, minutes, seconds}
	}

	calculateIfString(input) {
		let time = {hours: "00", minutes: "00", seconds: "00"}
		let seconds = String(input).slice(-2);
		let minutes = String(input).slice(-4, -2);
		let hours = String(input).slice(-6, -4);
		
		if(seconds.length == 1) time.seconds = "0" + seconds;
		else if(seconds.length == 2) time.seconds = seconds;

		if(minutes.length == 1) time.minutes = "0" + minutes;
		else if(minutes.length == 2) time.minutes = minutes;

		if(hours.length == 1) time.hours = "0" + hours;
		else if(hours.length == 2) time.hours = hours;

		return time;
	}

	showTime(input) {
		let time;
		if(!this.props.isString) time = this.calculate(input);
		else time = this.calculateIfString(input);

		return Object
			.entries(time)
			.map(([label, value], i, arr) => {
				return <ClockField 
				onFocus={this.props.onFocus}
				dots={arr[i + 1]}
				value={value} 
				label={label}
				key={label} />
			});
	}

	render() {
		let {time, focus} = this.props;
		let className = "clock";
		if(focus) className += " focus";


		return (
			<div className={className}>
				{this.showTime(time)}
			</div>
		);
	}
}

export default Clock
