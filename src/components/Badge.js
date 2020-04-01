import React from  'react'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar.js'
import "../styles/badge.css"

class Badge extends React.Component {
    render(){
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de Platzi"/>
            </div>
            <div className="Badge__section-name">
                <Gravatar
                    className="Badge__avatar" 
                    email={this.props.email} 
                    alt="Avatar"/>
                <h1>{this.props.firstName} <br/> {this.props.secondName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.email}</h3>
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">
                <p>#Platziconf</p>
            </div>
        </div>
        )
    }
}

export default Badge