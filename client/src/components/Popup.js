import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import EditProfile from './EditProfile'

const Popup = (props) =>{
    const { toggle, modal, user } = props
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                       <span className='text-primary'> Edit Profile </span>
                       <span> {user.email} </span>
                </ModalHeader>
                <ModalBody>
                    <EditProfile toggle={toggle}/>
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
} 

export default Popup