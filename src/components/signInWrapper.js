import React from 'react';


const SignInWrapper = props => (
    <main className="welcome-page">
        <div className="container">
            <div className="row justify-content-center align-items-center signin-section">
                <div className="col-lg-5 col-md-6 col-sm-8">
                    <h2>Welcome to <strong>Socket Board</strong></h2>
                    {props.children}      
                </div>
            </div>
        </div>
    </main>
);



export default SignInWrapper;