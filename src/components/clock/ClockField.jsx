import React, { Component } from 'react';

class ClockField extends Component {
	render() {
		const {value, label, dots} = this.props;
		const [a, b] = value.split('');

		const fieldContent = (
			<div className="field-content">
				<div className="label">{label}</div>
				<div className="value">
					<span>{a}</span><span>{b}</span>
				</div>
			</div>
		)

		const fieldDots = (
			dots && <div className="field-dots">:</div>
		)

		return (
			<div 
			onClick={this.props.onFocus} 
			className="time-field">
				{fieldContent}
				{fieldDots}
			</div>
		)
	}
}

export default ClockField