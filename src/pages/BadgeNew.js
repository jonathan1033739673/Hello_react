import React from 'react'

import header from '../images/badge-header.svg'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import "../styles/BadgeNew.css"

class BadgeNew extends React.Component{
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          form:{
            firstName: "",
            lastName: "",
            email: "",        
            jobTitle: "Software Engineer",
            twitter: ""
          }
      }
    }
    handleChange  = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

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
                            firstName = {this.state.form.firstName}
                            secondName = {this.state.form.lastName}
                            jobTitle = {this.state.form.jobTitle}
                            email = {this.state.form.email}
                            twitter = {this.state.form.twitter}
                            urlAvatar = "https://s.gravatar.com/avatar/47618405ea2342b58fdf0186dec0b751?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                change={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew