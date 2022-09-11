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
    setNewSession: React.Dispatch<React.SetStateAction<string>> | any;
    newSession: boolean
}
const CreateUser: React.FC<UserSession> = ({ setNewSession, newSession }) => {
    interface FormValues extends FormikValues {
        username: string;
    }

    const initialValues: FormValues = {
        username: ""
    };

    const validationSchema = yup.object({
        username: yup.string().required('Please type a Username'),
    });

    // const { setUser } = use
    const { setUser } = useAuthActions()
    const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
        useFormik<FormikValues>({
            initialValues,
            validationSchema: validationSchema,
            onSubmit: async values => {
                const [loading, setLoading] = useState<boolean>(false);
                setLoading(true)

                // console.log(values);
                const formData = {
                    userId: uuid(), username: values.username,
                }

                // console.log(formData)
                setLoading(true);

                // FIXME: Call the Hook That creates a user session
                sessionStorage.setItem("sessionId", formData.userId)
                sessionStorage.setItem("newSession", newSession as unknown as string)

                // Call a hook to add user to store
                setTimeout(() => {
                    setUser(formData)
                    setLoading(false)
                }, 1500)

            },
        });
    return (

        <Modal>
            <form>
                <Card>
                    <TextField placeholder='Enter Name' value={values.username} onChange={handleChange} />
                    <Button className='bg-primary text-white' label='Start Chat' type='submit' />
                </Card>
            </form>
        </Modal>


    )
}

export default CreateUser