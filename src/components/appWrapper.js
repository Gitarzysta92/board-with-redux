import React from 'react';


const AppWrapper = props => (
    <div>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        {props.children[0]}
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {props.children[1]}
                    </div>
                </div>
            </div>  
        </header>
        <main className="app">
            <div className="container">
                <div className="row justify-content-center align-items-center signin-section">
                    <div className="col-sm-12">
                        {props.children[2]}
                    </div>
                </div>
            </div>
        </main>
    </div>
);



export default AppWrapper;