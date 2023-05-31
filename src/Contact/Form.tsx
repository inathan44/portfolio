import UpRightArrow from './UpRightArrow';
import CircleIcon from '../components/CircleIcon';
import React, { useRef, useState, CSSProperties } from 'react';
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';

const serviceId = import.meta.env.VITE_API_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY;

const errorStyles: CSSProperties = {
  border: '#dc2626 3px solid',
};

const Form = () => {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messageError, setMessageError] = useState<boolean>(false);

  const [messageSending, setMessageSending] = useState<boolean>(false);

  const [emailResultOrError, setEmailResultOrError] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) setNameError(true);
    if (!email) setEmailError(true);
    if (!message) setMessageError(true);

    setEmailResultOrError('');

    if (form && form.current && name && email && message) {
      setMessageSending(true);

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          setEmailResultOrError('Message Sent.');
          setMessageSending(false);
          setName('');
          setEmail('');
          setMessage('');
          setMessageError(false);
          setEmailError(false);
          setNameError(false);
        },
        (error) => {
          console.log(error.text);
          setEmailResultOrError(
            'Error sending message, please try again later.'
          );
          setMessageSending(false);
        }
      );
    }
  }

  return (
    <form
      ref={form}
      className='flex flex-col items-center gap-4 rounded md:mx-auto md:inline-block md:max-w-2xl'
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className={`w-full rounded border bg-gray-200 px-2 py-2 placeholder:text-slate-700`}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        name='user_name'
        style={nameError ? errorStyles : {}}
      />
      <input
        className='w-full rounded border bg-gray-200 px-2 py-2 placeholder:text-slate-700 md:my-4'
        type='email'
        value={email}
        name='user_email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        style={emailError ? errorStyles : {}}
      />
      <textarea
        className='h-32 w-full rounded  border bg-gray-200 px-2 py-2 placeholder:text-slate-700'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message'
        name='message'
        style={messageError ? errorStyles : {}}
      />
      <button
        className={`mt-3 flex items-center gap-3 self-start rounded-full bg-mainBlue px-4 ${
          messageSending ? 'py-5' : 'py-2'
        } text-lg`}
      >
        {!messageSending ? (
          <>
            <div>
              <p>Contact</p>
            </div>
            <div className='relative'>
              <CircleIcon size={30} color='black' />
              <UpRightArrow />
            </div>
          </>
        ) : (
          <BarLoader loading={messageSending} />
        )}
      </button>
      <p className='mt-6 text-left text-white'>{emailResultOrError}</p>
    </form>
  );
};

export default Form;
