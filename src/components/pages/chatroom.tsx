import { FormikValues, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Button from '../elements/Button';
import TextField from '../elements/TextField';
import { v4 as uuid } from 'uuid'

import { useMessageActions, useMessages } from '../../hooks/useMessage';
import CreateUser from '../widget/CreateUser';
import Messages from '../widget/Messages';


interface FormValues extends FormikValues {
  message: string;
}

// Initialize Messages
const initialValues: FormValues = {
  message: ""
};

// Message form validation
const validationSchema = yup.object({
  message: yup.string().required('Please type a message'),
});

const ChatRoom: React.FC<{}> = () => {


  const [loading, setLoading] = useState<boolean>(false);

  const date = new Date()
  const { setMessage } = useMessageActions()
  const newSession = sessionStorage.getItem('newSession')

  // Initialize Formik
  const { errors, values, touched, handleChange, handleSubmit, resetForm } =
    useFormik<FormValues>({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async values => {
        setLoading(true)

        const userId = sessionStorage.getItem('sessionId')
        const username = sessionStorage.getItem('username')

        console.log(userId)

        const formData = {
          messageId: uuid(), title: values.message, createdAt: date, createdBy: userId as string, createdByName: username as string
        }
        // FIXME: Call the Hook That sends message to store 
        setTimeout(() => {
          setMessage(formData)
          setLoading(false)
          resetForm()
        }, 1500)

      },
    });

  useEffect(() => {
    console.log(newSession)
  }, [newSession])

  return (
    <section className="bottom-0 text-secondary w-full mx-auto">

      {newSession === 'true' || newSession === null && <CreateUser />}

      <section className='p-4'>
        <Messages />
      </section>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <div className='grid grid-cols-5 items-center justify-between bottom-0 fixed w-full'>
          <div className='col-span-4'>
            <TextField placeholder='Enter Message' name="message" value={values.message} onChange={handleChange} />
          </div>
          <div className='col-span-1'>
            <Button className='bg-primary text-white' label='Send' type='submit' loading={loading} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ChatRoom;
