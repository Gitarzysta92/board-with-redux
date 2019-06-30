import React, { useState } from 'react';
import TaskForm from './taskForm'

const Task = ({ title, text, ...meta }) => {
	const [isEdit, editTask] = useState(false);

	const updateHandler = (taskData) => {
		editTask(false);
		meta.update(taskData);
	}
	
	const css = { backgroundColor: meta.color }

	return isEdit 
		? ( <TaskForm 
			onSubmit={updateHandler} 
			edit={true}
			{...{title, text, color: meta.color}} />)

		: (<div className="task col-lg-4 col-md-6 col-sm-12">
				<div className="task-header" style={css}>
					<span>{title}</span>
					<div className="task-controls">
						<button onClick={() => editTask(true)}>Edit</button>
						<button onClick={meta.remove}>Remove</button>
					</div>
				</div>
				<div className="task-content">
					<p>{text}</p>
				</div>
			</div>)
}

export default Task;