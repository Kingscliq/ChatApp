import { FormikValues, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuthActions } from '../../hooks/useAuthActions';
import Button from '../elements/Button';
import TextField from '../elements/TextField';
import { v4 as uuid } from 'uuid'
import Modal from '../widget/Modal';
import Card from '../elements/Card';
import { useMessageActions, useMessages } from '../../hooks/useMessage';

interface FormValues extends FormikValues {
  message: string;
}

const initialValues: FormValues = {
  message: ""
};

const validationSchema = yup.object({
  message: yup.string().required('Please type a message'),
});


const ChatRoom: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const date = new Date()
  const { setMessage } = useMessageActions()
  const { setUser } = useAuthActions();
  const messages = useMessages()

  console.log(messages.messages)
  // Initialize Formik
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<FormValues>({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async values => {
        setLoading(true)
        console.log(values);
        const formData = {
          messageId: uuid(), title: values.message, createdAt: date, createdBy: "username"
        }
        console.log(formData)
        setTimeout(() => {
          setMessage(formData)
          setLoading(false)
        }, 1500)



        setLoading(true);
        // FIXME: Call the Hook That sends message to store 
        // setUser(values);
      },
    });

  return (
    <section className="bottom-0 text-secondary w-full mx-auto">

      <section>
        Chat Area
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