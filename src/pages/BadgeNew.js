import React from 'react'

import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api.js'
import md5 from 'md5'
import "../styles/BadgeNew.css"
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component{
    state = {
        loading: false,
        error: null,
        form:{
          firstName: "",
          lastName: "",
          email: "",        
          jobTitle: "Software Engineer",
          twitter: ""
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

    handleSubmit = async e => {
      e.preventDefault();

      try {
        const hash = md5(this.state.form.email);
        this.state.form = {
            ...this.state.form,
            avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
        }
        this.setState({ loading: true });
        await api.badges.create(this.state.form);
        this.setState({ loading: false });
  
        this.props.history.push('/badges');
      } catch (error) {
        this.setState({ loading: false, error: error });
      }
    };

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }

        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName = {this.state.form.firstName || 'First_Name'}
                            secondName = {this.state.form.lastName || 'Last_Name'}
                            jobTitle = {this.state.form.jobTitle || 'Your Job'}
                            email = {this.state.form.email || 'Email'}
                            twitter = {this.state.form.twitter || 'Twitter'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                change={this.handleChange} 
                                submit={this.handleSubmit} 
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew