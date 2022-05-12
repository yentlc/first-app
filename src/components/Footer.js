export default function Footer() {
  return (
    <div className='icons'>
      <a
        href='https://twitter.com/home'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          className='icon twitter'
          src='/images/Twitter-Icon.png'
          alt='twitter'
        />
      </a>
      <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          className='icon Facebook'
          src='/images/Facebook-Icon.png'
          alt='facebook'
        />
      </a>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          className='icon Instagram'
          src='/images/Instagram-Icon.png'
          alt='instagram'
        />
      </a>
      <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
        <img
          className='icon Github'
          src='/images/Github-Icon.png'
          alt='Github'
        />
      </a>
    </div>
  );
}
