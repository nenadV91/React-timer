import React, { Component } from 'react';

class Controls extends Component {
	render() {
		return (
			<div className="controls text-center">
				<button 
				onClick={this.props.toggle} 
				className="btn-control">
				{this.props.isRuning ? 'Pause' : 'Start'}</button>

				<button 
				onClick={this.props.reset} 
				className="btn-control">Reset</button>
			</div>
		);
	}
}

export default Controls
