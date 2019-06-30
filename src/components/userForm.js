import React, { Component } from 'react';
import { CirclePicker } from 'react-color';



const colors = [
	"#f44336", "#e91e63", "#9c27b0", "#673ab7", 
	"#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", 
	"#009688", "#4caf50", "#8bc34a", "#cddc39", 
	"#ffeb3b", "#ffc107", "#ff9800", "#ff5722"
]

const nameError = 'You didn\'t provided a valid name';
const colorError = 'You didn\'t pickup a color';


class RegisterUser extends Component {
	constructor(props) {
	  super(props);	
		this.state = {
			name: '',
			color: '',
			alert: false,
			formWidth: 300
		}
		this.form = React.createRef();
		console.log(this.form);
	}
	
	enteringHandler = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	submitHandler = evt => {
		evt.preventDefault();
		const error = this.validateFormData();
		console.log(this.state);
		if (error) {
			this.setState({ alert: error });
			return;
		}
		const {name, color} = this.state;
		this.props.onSubmit({name, color});
		this.setState({ alert: false });
	}

	validateFormData() {
		const { name, color } = this.state;
		const error = [];
		if (name.length == 0) error.push(nameError);
		if (color.length == 0) error.push(colorError);
		
		return error.length > 0 ? error : false;
	}

	showAlert() {
		let key = 0;
		return this.state.alert.map(error => 
			<div key={key++} className={'alert'}>{error}</div>
		);
	}

	colorPickerHandler = (color) => {
		console.log(color);
		this.setState({ color: color.hex })
	}

	resizeHandler = () => {
		this.setState({ formWidth: this.form.current.offsetWidth + 17 })
	}

	componentDidMount() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeHandler)
	}
  
	render() {
		const { formWidth, alert, color } = this.state;
		return (
			<div>
				<form ref={this.form} onSubmit={this.submitHandler}>
					<div className="form-group">
						<label htmlFor="name">Your name:</label>
						<input type="text" name="name" onChange={this.enteringHandler}></input>
					</div>
					<div className="form-group">
						<label>Choose Your color:</label>
						<div className="picker-wrapper">
							<CirclePicker
								color={color}
								colors={colors} 
								width={formWidth}
								onChangeComplete={this.colorPickerHandler}
							/>
						</div>
					</div>
					<button type="submit" >Go to board!</button>
				</form>
				{alert ? <div className="alert-box">{this.showAlert()}</div> : null }
			</div>
		);
	}
  }

export default RegisterUser;