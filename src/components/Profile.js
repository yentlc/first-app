import React from 'react';
export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='profile-img'
        src='/images/Rectangle-90.png'
        alt='profile'
      />
      <div className='profile-title'>
        <h1 className='profile-name'>Laura Smith</h1>
        <p className='profile-job'>Frontend Developer</p>
        <p className='profile-web'>laurasmith.website</p>
      </div>
    </div>
  );
}
