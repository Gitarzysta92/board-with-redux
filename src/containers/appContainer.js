import React, { Component } from 'react';
import { connect } from 'react-redux';

import TasksBoard from './tasksBoard';
import ActiveUsers from './activeUsers';
import CurrentUser from '../components/currentUser';
import UserForm from '../components/userForm';
import AppWrapper from '../components/appWrapper';
import SignInWrapper from '../components/signInWrapper';


import { registerUser as registerUserAction, unregisterUser } from '../actions';



class App extends Component {
  constructor(props) {
    super(props);
  }

  registerUser = data => {
    const { dispatch, socket } = this.props;
    socket.registerUser(data, function({id}) {
      dispatch(registerUserAction({id, ...data}));
    })
  }

  unregisterUser = () => {

  }


  render() {
    const { user } = this.props
    return user.id 
    ? (<AppWrapper>
        <CurrentUser {...user}/>
        <ActiveUsers user={user} socket={this.props.socket}/>
        <TasksBoard user={user} socket={this.props.socket}/>
      </AppWrapper>)
    : (<SignInWrapper>
        <UserForm onSubmit={this.registerUser}/>
      </SignInWrapper>)
  }
}

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps)(App);
