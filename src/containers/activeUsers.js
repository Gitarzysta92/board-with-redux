import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersList from '../components/users';

import { addUser, removeUser } from '../actions';


class ActiveUsers extends Component {
	constructor(props) {
		super(props);
	}
	
	addUser = user => {
		const { dispatch } = this.props;
		console.log(user);
		dispatch(addUser(user));
	}

	removeUser = id => {
		const { dispatch } = this.props;
		dispatch(removeUser(id));
	}

	componentDidMount() {
		const { socket, user:current } = this.props;
		socket.rehydrateApp(({users}) => {
			users.forEach(user => user.id !== current.id && this.addUser(user));
		});

		socket.onAddUser(this.addUser);
		socket.onRemoveUser(this.removeUser);
	}

	render() {
		console.log(this.props);
		return (
			<div className="active-users">
				<UsersList users={this.props.users} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users
})

ActiveUsers.propTypes = {
	dispatch: PropTypes.func.isRequired,
	socket: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ActiveUsers);