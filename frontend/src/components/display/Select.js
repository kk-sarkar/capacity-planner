import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../styles/Select.css';


const Select = ({ options=[], selected, onSelect }) => {
	
	return (
		<Dropdown>
		  <Dropdown.Toggle variant="secondary">
		     {selected}
		  </Dropdown.Toggle>

		  <Dropdown.Menu>
		  	{
		  		options.map(function(name, index){
                    return <Dropdown.Item key={ name } eventKey={ name } 
                    						onSelect={ key => onSelect(key)}>
                    		{name}
                    	  </Dropdown.Item>;
            })}
		  </Dropdown.Menu>
		</Dropdown>
	);
}

export default Select;

