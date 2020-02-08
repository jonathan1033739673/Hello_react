import React from 'react'

import header from '../images/badge-header.svg'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import "../styles/BadgeNew.css"

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName = "Jonathan"
                            secondName = "Gonzalez"
                            jobTitle = "Software Engineer"
                            twitter = "@jonathan2138"
                            urlAvatar = "https://s.gravatar.com/avatar/47618405ea2342b58fdf0186dec0b751?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            firstName = "Jonathan"
                            secondName = "Gonzalez"
                            jobTitle = "Software Engineer"
                            twitter = "@jonathan2138"
                            urlAvatar = "https://s.gravatar.com/avatar/47618405ea2342b58fdf0186dec0b751?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew