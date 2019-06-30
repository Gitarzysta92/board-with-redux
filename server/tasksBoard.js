const uuid = require('uuid/v4');

class Task {
	constructor(owner, {title, text, color}) {
        this._content = { 
            title: title || 'Dodaj tytuł do zadania',
            text: text || 'Dodaj swój tekst',
            color: color || '#757575'
        }
        
        this._meta = {
            id: uuid(),
            owner: owner
		}
	

		return {
            getContent: this.getContent.bind(this),
            getMeta: this.getMeta.bind(this),
            updateContent: this.updateContent.bind(this),
            id: this.id
		}
	}

	getContent() {
		return Object.assign({id: this._meta.id}, this._content);
    }
    
    getMeta() {
        return Object.assign({}, this._meta);   
    }

    updateContent(data) {
		this._content = Object.assign(this._content, data);
		return this.getContent();
    }

    get id() {
    	return this._meta.id;
    }
}




module.exports = (function() {
	let _tasks = [];

	const addTask = function(owner, data) {
		const task = new Task(owner, data);
		_tasks.push(task);
		return task.getContent();
	}

	const getTask = function(id) {
		const task = _tasks.find(task => task.id === id);
		return task; 
	}

	const getAllTasks = function() {
		return _tasks.map(task => task.getContent());
	}

	const removeTask = function(id) {
		const task = getTask(id);
		_tasks = _tasks.filter(task => !(task.id === id));
	}

	return {
		addTask,
		removeTask,
		getTask,
		getAllTasks
	}
})();