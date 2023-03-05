import React, { useRef } from 'react';

const EmailMe = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
  }
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




