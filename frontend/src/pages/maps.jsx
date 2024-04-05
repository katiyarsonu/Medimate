// import React from 'react';

const Maps = () => {
  return (
    <div className='mt-8 mb-8 p-4 border  border-gray-300 rounded-lg shadow-lg'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113876.83983954725!2d75.79531706742598!3d26.882819403959207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712017519769!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: '3' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
