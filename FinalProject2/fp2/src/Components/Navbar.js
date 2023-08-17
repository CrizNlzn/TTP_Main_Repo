import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustButton } from './Button';
import './Navbar.css';


function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false)

const showBTN = () => {
	if(window.innerWidth <= 960) {
		setButton(false);
	} else {
		setButton(true);
	}
};

window.addEventListener('resize', showBTN);

  return (
	<>
	<nav className="navbar">
		<div className='navbar-container'>
			<Link to="/" className="navbar-logo"> {/* navbar logo*/}
				CRIZ <i className='fab fa-typo3' /> {/* says CRIZ next to logo*/ } 
			</Link>

			<div className='menu-icon' onClick={handleClick}> {/*for the menu icon*/ }
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* hamburger menu toggle */}
		</div>

		<ul className={click ? 'nav-menu active' : 'nav-menu' }> {/* makes nav menu disappear when clicked  */}
			<li className='nav-item'>
					<Link to = "/" className ='nav-links' onClick={closeMobileMenu}> {/*closing menu*/ }
						Home
					</Link>
			</li>

			<li className='nav-item'>
					<Link to = '/services' className ='nav-links' onClick={closeMobileMenu}> {/*closing menu*/ }
						Services
					</Link>
			</li>

			<li className='nav-item'>
					<Link to = '/map' className ='nav-links' onClick={closeMobileMenu}> {/*closing menu*/ }
						Map
					</Link>
			</li>

			<li className='nav-item'>
					<Link to = '/about' className ='nav-links' onClick={closeMobileMenu}> {/*closing menu*/ }
						About
					</Link>
			</li>
		</ul>
		{button && <CustButton buttonStyle='btn-outline'> LOOK HERE</CustButton>} {/* in case it chooses the default 0 array in style */}
		
		</div>
	</nav>
	</>
	
  );
}

export default Navbar;