import React from 'react';

import logo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import "../styles/badges.css"
import { Link } from 'react-router-dom';

class Home extends React.Component{
state= {
}

    render(){
        return (
            <React.Fragment>
                <div className="Badges__home">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <img className="Badges_conf-logo" src={logo} alt="Conf Logo"/>
                                <div className="body">
                                    <h1>Print your Badges</h1>
                                    <h2>The easiest way to manage your conference</h2>
                                </div>
                                <div className="Badges__buttons">
                                    <Link to="/badges" className="btn btn-primary">
                                        Start now
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="Badges_conf-logo" src={astronauts} alt="Conf Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home