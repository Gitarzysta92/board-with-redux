
class User {
	constructor({id, name, color}) {
		this._id = id;
		this._name = name || 'No name';
		this._color = color || '#757575';

		return {
			setNewName: this.setNewName.bind(this),
			setNewColor: this.setNewColor.bind(this),
			id: this.id,
			getDetails: this.getDetails.bind(this)
		}
	}

	setNewName(name) {
		this._name = name;
	}

	setNewColor() {
		this._color = color;
	}

	getDetails() {
		return Object.assign({}, {
			id: this.id,
			name: this._name,
			color: this._color
		})
	}	

	get id() {
		return this._id;
	}
}



module.exports = (function() {
	let _users = [];

	const addUser = function(details) {
		const user = new User(details);
		_users.push(user);
		return user;
	}

	const getUser = function(id) {
		const user = _users.find(user => user.id === id );
		return user; 
	}

	const getAllUsers = function() {
		return _users.map(user => user.getDetails());
	}

	const removeUser = function(id) {
		const user = getUser(id);
		_users = _users.filter(user => !(user.id === id));
	}

	return {
		addUser,
		removeUser,
		getUser,
		getAllUsers
	}
})();