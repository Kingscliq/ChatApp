import React from 'react'
import Button from '../elements/Button'
import Card from '../elements/Card'
import TextField from '../elements/TextField'
import Modal from './Modal'

const CreateUser = () => {
    return (
        <Modal>
            <Card>
                <TextField placeholder='Enter Name' />
                <Button className='bg-primary text-white' label='Start Chat' />
            </Card>
        </Modal>
    )
}

export default CreateUser