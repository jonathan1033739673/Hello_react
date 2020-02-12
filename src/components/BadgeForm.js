import React from  'react'
import "../styles/badge.css"

class BadgeForm extends React.Component {
    // state = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",        
    //     jobTitle: "Software Engineer",
    //     twitter: ""
    // } //se debe inicializar los estados como un objeto vacio
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    handleClick = (event) => {
        console.log("Boton")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return (
        <div className="">
            <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        onChange={this.props.change} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
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
                        placeholder="@example123"
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
                </div>
            </form>
        </div>
        )
    }
}

export default BadgeForm