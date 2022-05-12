import React from 'react';
export default function Contact() {
  return (
    <div className='contact'>
      <button className='btn contact-email'>
        <img className='icon' src='/images/Icon.png' alt='email icon' />
        Email
      </button>
      <button className='btn contact-LinkedIn'>
        <img className='icon' src='/images/Vector.png' alt='linkedin icon' />
        LinkedIn
      </button>
    </div>
  );
}
