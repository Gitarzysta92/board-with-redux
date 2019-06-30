import React from 'react';
import Task from './task';

const Tasks = ({tasks}) => tasks.map(task => <Task key={task.id} {...task}/>);


export default Tasks;