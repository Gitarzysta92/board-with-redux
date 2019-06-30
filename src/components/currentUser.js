import React from 'react';


const CurrentUser = ({name, color}) => {
    const css = { backgroundColor: color };
    return (
        <div className="current-user">
            <span style={css} className={'circle'}></span><h4>{name}</h4>
        </div>
    )
}

export default CurrentUser;