import React from 'react';

function Menu({ setLogoColor, setMenuColor, menuColor, setShowMobileMenu }) {
	function changeColor() {
		setLogoColor((prevItem) => (prevItem === '' ? 'logoMenuColor' : ''));
		setMenuColor((prevItem) => (prevItem === '' ? 'makeMenuWhite' : ''));
		setShowMobileMenu((prevItem) =>
			prevItem === '' ? 'mobileMenu--show' : ''
		);
	}

	return (
		<p className={`menu ${menuColor}`}>
			Menu &nbsp;
			<span onClick={changeColor}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='8'
					height='8'
					viewBox='0 0 24 24'
				>
					<path d='M12 21l-12-18h24z' />
				</svg>
			</span>
		</p>
	);
}

export default Menu;
