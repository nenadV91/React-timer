import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidUpdate() {
		if(this.props.focus) {
			this.input.focus();
		}
	}

	handleKeyDown(event) {
		let key = event.keyCode || event.charCode;
		
		if(key == 13) {
			this.input.blur();
			this.props.toggle();
		}
	}

	render() {
		let {
			visible, value, onChange, 
			onBlur, toggle, onFocus
		} = this.props;

		let isVisible = visible ? "show" : "hide";
		let inputClass = "input-wrapper " + isVisible;
		
		return (
			<div className={inputClass}>	
				<input 
					onKeyDown={this.handleKeyDown}
					ref={node => this.input = node} 
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					value={value}
					placeholder="00h 00m 00s"
					className="timer-input"
					type="text" 
					name="time"/>
			</div>
		);
	}
}

export default Input
