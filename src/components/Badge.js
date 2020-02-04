import React from  'react'
import confLogo from '../images/badge-header.svg'
import "../styles/badge.css"

class Badge extends React.Component {
    render(){
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de Platzi"/>
            </div>
            <div className="Badge__section-name">
                <img
                    className="Badge__avatar" 
                    src="https://s.gravatar.com/avatar/47618405ea2342b58fdf0186dec0b751?s=80" alt="Avatar">
                </img>
                <h1>Jonathan <br/> Gonzalez</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Desarrollador Backend</h3>
                <div>@jonathan2138</div>
            </div>
            <div className="Badge__footer">
                <p>#Platziconf</p>
            </div>
        </div>
        )
    }
}

export default Badge