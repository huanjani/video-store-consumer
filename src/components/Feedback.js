import React from 'react';
import './Feedback.css';

const Feedback = (props) => {

    return(
      <p className='text'>
        {props.message}
      </p>
    )
  }


  export default Feedback;
