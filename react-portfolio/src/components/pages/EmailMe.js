import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailMe = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9rvnq7', 'template_mwtvdb5', form.current, '1oRoXqh0YGd5vApp8')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="email">
    <form ref={form} onSubmit={sendEmail}>
      <label>NAME:</label>
      <input className="name" type="text" name="from_name" />
      <label>EMAIL:</label>
      <input className="emailN" type="email" name="email" />
      <div className='text'>
      <label>MESSAGE:</label>
      <textarea className="message" name="message" />
      <input className="send" type="submit" value="SEND" />
      </div>
    </form>
    </div>
  );
};

export default EmailMe;




