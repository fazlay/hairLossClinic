import React from 'react';

const About = () => {
  return (
    <>
      {' '}
      <div className='container mx-auto px-20'>
        <div className='grid grid-cols-2 pb-36'>
          <div className='pt-10'>
            <h1 className='pt-10 font-bold text-xl py-5'>ABOUT US</h1>
            <p className=' font-normal pt-15'>
              The dedicated team of professionals at Northwest Hair Restoration
              want to help you maintain the hair you have and restore what’s
              been lost. A leader in the treatment of hair loss, Dr. Robert
              Niedbalski is the physician patients turn to as a trusted
              authority in the hair restoration industry. He is committed to
              listening to your unique needs regarding your hair, educating you
              about your treatment options, and achieving your ongoing goals for
              thriving, natural-looking hair. Our position: Northwest Hair
              Restoration is an independent medical practice that offers the
              most innovative solutions and techniques available for hair loss.
              Each patient receives a comprehensive plan that meets his or her
              unique expectations for restoring and maintaining their hair. Our
              promise: We are committed to exceeding our patients’ expectations.
            </p>
          </div>
          <div className='col image'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/parts-of-the-body/48/Human_Anatomy_Parts_of_the_body_Artboard_8-512.png'
              alt='logo'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
