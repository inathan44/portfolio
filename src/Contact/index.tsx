import Form from './Form';

const Contact = () => {
  return (
    <section className='bg-black py-12 '>
      <div className='mx-6 flex flex-col gap-6'>
        <h5 className='text-2xl font-bold text-white'>Contact Me</h5>
        <p className='text-3xl font-bold text-mainBlue'>
          Interested in working together? Let's talk
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
