import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';
// future improvement: use React Delay (already npm installed) to delay erasing (not posting) of these messages

const Feedback = (props) => {
  const styleName = 'text_' + props.background + '_background'

  return(
      <p className={styleName}>
        {props.message}
      </p>
  )
}

Feedback.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Feedback;
