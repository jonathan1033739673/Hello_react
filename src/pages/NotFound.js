import React from 'react'

import imageNotFound from '../images/img404.png'
import { Link } from 'react-router-dom';
import "../styles/badges.css"

function NotFound(){
    return(
        <div className="Badges__home">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="body">
                            <h1>UPSSSS!! Page not found</h1>
                        </div>
                        <div className="Badges__buttons">
                            <Link to="/" className="btn btn-primary">
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src={imageNotFound} alt="Not Found"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NotFound