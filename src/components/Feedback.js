import React from 'react';
import './Feedback.css';

const Feedback = (props) => {
  const styleName = 'text_' + props.background + '_background'

    return(
      <p className={styleName}>
        {props.message}
      </p>
    )
  }


  export default Feedback;
