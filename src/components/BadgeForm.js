import React from  'react'
import "../styles/badge.css"
import "../styles/badges.css"
import { Link } from 'react-router-dom'

class BadgeForm extends React.Component {

    handleClick = (event) => {
        console.log("Boton")
    }

    render(){
        return (
        <div className="">
            <h1>New Attendant</h1>
            <form onSubmit={this.props.submit}>
                {this.props.error && 
                (<p className="text-danger">{this.props.error.message}</p>)
                }

                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        placeholder="Your name"
                        value={this.props.formValues.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        placeholder="Your last name"
                        value={this.props.formValues.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="email" 
                        placeholder="example@123.com"
                        name="email"
                        value={this.props.formValues.email}
                    />
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="text" 
                        placeholder="example123"
                        name="twitter"
                        value={this.props.formValues.twitter}
                    />
                </div>
                <div className="form-group">
                    <button 
                        onClick={this.handleClick} 
                        className="btn btn-primary">
                        Save
                    </button>
                    <Link to="/badges" className="btn btn-primary">
                        Back
                    </Link>
                </div>
            </form>
        </div>
        )
    }
}

export default BadgeForm