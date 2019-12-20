import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';
// import Delayed from '././react-delayed';

const Feedback = (props) => {
  const styleName = 'text_' + props.background + '_background'

    return(
      // <Delayed mounted={true} unmountAfter={500}>
        <p className={styleName}>
          {props.message}
        </p>
      /* </Delayed> */
    )
  }

  Feedback.propTypes = {
    message: PropTypes.string.isRequired,
  }

  export default Feedback;
