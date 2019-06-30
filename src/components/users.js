import React from 'react';


const User = ({name, color}) => {
    const css = { backgroundColor: color };
    return (<span style={css} className={'active-user'}>{name}</span>)
} 


const Users = ({users}) => {
    return (
        <div className="users-wrapper">
        {users.map(user => <User key={user.id} {...user}/>)}
        </div>
    )
    
}


export default Users;