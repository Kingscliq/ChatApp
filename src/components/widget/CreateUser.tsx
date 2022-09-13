import { FormikValues, useFormik } from 'formik'
import React, { useState } from 'react'
import Button from '../elements/Button'
import Card from '../elements/Card'
import TextField from '../elements/TextField'
import Modal from './Modal'
import * as yup from 'yup';
import { v4 as uuid } from 'uuid'
import { useAuthActions } from '../../hooks/useAuthActions'


interface UserSession {
    // setNewSession: React.Dispatch<React.SetStateAction<string>> | any;
    // newSession: boolean
}

const CreateUser: React.FC<UserSession> = ({ }) => {
    interface FormValues extends FormikValues {
        username: string;
    }

    const initialValues: FormValues = {
        username: ""
    };

    const validationSchema = yup.object({
        username: yup.string().required('Please type a Username'),
    });

    const [loading, setLoading] = useState<boolean>(false);
    const { setUser } = useAuthActions()
    const resetSession = async () => {
        sessionStorage.setItem("newSession", 'false')
    }

    const { errors, values, touched, handleChange, handleSubmit } =
        useFormik<FormikValues>({
            initialValues,
            validationSchema: validationSchema,
            onSubmit: async values => {
                setLoading(true)
                // console.log(values);
                const formData = {
                    userId: uuid(), username: values.username,
                }
                // console.log(formData)
                setLoading(true);

                // FIXME: Call the Hook That creates a user session
                sessionStorage.setItem("sessionId", formData.userId)
                sessionStorage.setItem("username", formData.username)
                sessionStorage.setItem("username", formData.username)

                // Call a hook to add user to store
                setTimeout(() => {
                    setUser(formData)
                    setLoading(false)
                }, 1500)
                resetSession()
                window.location.reload()
            },
        });
    return (

        <Modal>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <Card>
                    <h3 className='font-medium mb-3 text-lg text-center'>Start Chat Session</h3>
                    <TextField placeholder='Enter Name' name='username' value={values.username} onChange={handleChange} error={!!(errors.username && touched.username)} />
                    <Button className='bg-primary text-white' label='Start Chat' type='submit' loading={loading} />
                </Card>
            </form>
        </Modal>


    )
}

export default CreateUser