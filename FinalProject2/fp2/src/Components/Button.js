import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const styles = ['btn-primary', 'btn-outline']; /* primary - actual, outline - holo */
const sizes = ['btn-med', 'btn-lrg'];

export const CustButton = ({minors, type, onclick, buttonStyle, buttonSize}) => {
	const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles(0);

	const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

	return (
		<Link to = '/about' className='btn-mobile'>

			<button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onclick}
			type = {type}>
				 {minors} 
			</button>


		</Link>
	);
};

export default CustButton;

