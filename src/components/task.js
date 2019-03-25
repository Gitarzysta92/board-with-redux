import React from 'react';
//import PropTypes from 'prop-types';

//import TaskUpdates from './taskUpdate.js'


const Task = ({id, name, establishDate}) => (

	<ul>
		<li>{id}</li>
		<li>{name}</li>
		<li>{establishDate}</li>
	</ul>
)


/*
Task.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}
*/

export default Task;