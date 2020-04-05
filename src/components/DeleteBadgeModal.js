import React from 'react'

import Modal from './Modal.js'

function DeleteBadgeModal (props){
    return <Modal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal}>
        <div className="DeleteBadgeModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete a Badge</p>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onCloseModal} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal