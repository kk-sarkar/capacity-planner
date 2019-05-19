import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/InlineError.css';

const InlineError = ( { text } ) => (
  <div className="error">
    {
    	text && 
    	<React.Fragment>
    		<FontAwesomeIcon icon="exclamation-circle" />
    		<span>{text}</span>
    	</React.Fragment>
    }
    
  </div>
);

export default InlineError;