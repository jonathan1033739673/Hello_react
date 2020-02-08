import React from  'react'
import "../styles/badge.css"

class BadgeForm extends React.Component {
    handleChange = (event) => {
        console.log({ 
            name: event.target.name,
            value: event.target.value
        })
    }
    handleClick = (event) => {
        console.log("Boton")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form submit")
    }

    render(){
        return (
        <div className="">
            <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
        )
    }
}

export default BadgeForm