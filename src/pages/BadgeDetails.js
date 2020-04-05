import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../components/Badge.js'
import api from '../api.js'
import header from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import DeleteBadgeModal from '../components/DeleteBadgeModal.js'

class BadgeDetails extends React.Component{
    state = {
      loading: false,
      error: null,
      modalIsOpen: false,
      form: {
        firstName: "",
        lastName: "",
        email: "",        
        jobTitle: "Software Engineer",
        twitter: ""
      }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        try {
            this.setState({loading:true, error:null})
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading:false, form:data})
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    handleOpenModal = e =>{
        this.setState({modalIsOpen:true})
    }

    handleCloseModal = e =>{
        this.setState({modalIsOpen:false})
    }

    handleDeleteBadge = async e => {
        try {
            this.setState({loading:true, error:null, modalIsOpen:false})
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading:false})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render (){
        if(this.state.loading)
            return <PageLoading/>
        
        if(this.state.error)
            return <PageError error={this.state.error}/>
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="img-fluid" src={header} alt="Logo"/>
                            </div>
                            <div className="col-6">
                                <h1>{this.state.form.firstName} {this.state.form.lastName}</h1>
                            </div>
                        </div>
                    </div>
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
                            />
                        </div>
                        <div className="col-6">
                            <h1>Actions</h1>
                            <div>
                                <Link to={`/badges/${this.state.form.id}/edit`}
                                    className="btn btn-primary mb-4">
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={this.handleOpenModal} className="btn btn-danger mb-4">
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                    modalIsOpen={this.state.modalIsOpen}
                                    onCloseModal={this.handleCloseModal}
                                    onDeleteBadge={this.handleDeleteBadge}
                                >
                                Prueba
                                </DeleteBadgeModal>
                            </div>
                            <div>
                                <Link to={`/badges`}
                                    className="btn btn-primary mb-4">
                                    Badges
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeDetails