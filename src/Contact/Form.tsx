import { useState } from 'react';
import UpRightArrow from './UpRightArrow';
import CircleIcon from '../components/CircleIcon';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className='flex flex-col items-center gap-4 rounded'
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className={`w-full rounded border px-2 py-2 placeholder:text-slate-700`}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
      />
      <input
        className='w-full rounded border px-2 py-2 placeholder:text-slate-700'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <textarea
        className='h-32 w-full rounded  border px-2 py-2 placeholder:text-slate-700'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message'
      />
      <button className='mt-3 flex items-center gap-3 self-start rounded-full bg-mainBlue px-4 py-2 text-lg'>
        <div>
          <p>Contact</p>
        </div>
        <div className='relative'>
          <CircleIcon size={30} color='black' />
          <UpRightArrow />
        </div>
      </button>
    </form>
  );
};

export default Form;
