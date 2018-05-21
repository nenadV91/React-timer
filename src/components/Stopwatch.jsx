import React, { Component } from 'react';
import Clock from './clock/Clock';
import Controls from './controls/Controls';

class Stopwatch extends Component {
	constructor(props) {
		super(props);
		this.state = {time: 0, isRuning: false}
		this.toggle = this.toggle.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		this.clock = setInterval(() => {
			if(this.state.isRuning) {
				this.setState(({time}) => ({
					time: time + 1
				}))
			}
		}, 1000);
	}

	start() {
		this.setState({isRuning: true})
	}

	pause() {
		this.setState({isRuning: false})
	}

	reset() {
		this.setState({time: 0, isRuning: false})
	}

	componentWillUnmount() {
		if(this.clock) {
			this.reset();
			clearInterval(this.clock);
		}
	}

	toggle() {
		const {isRuning} = this.state;
		if(isRuning) this.pause();
		else this.start();
	}

	render() {
		let {time, isRuning} = this.state;

		return (
			<div className="widget stopwatch">
				<Clock time={time} />
				
				<Controls 
				isRuning={isRuning}
				toggle={this.toggle}
				reset={this.reset} />
			</div>
		);
	}
}

export default Stopwatch
