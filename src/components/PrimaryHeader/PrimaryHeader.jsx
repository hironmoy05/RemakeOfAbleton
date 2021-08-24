import { useState } from 'react';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';
import MegaMenu from './MegaMenu/MegaMenu';
import Navigation from './HeaderLeft/Navigation/Navigation';

function Header() {
	const [addHidden, setAddHidden] = useState('hidden');
	const [logoColor, setLogoColor] = useState('');
	const [menuColor, setMenuColor] = useState('');
	const [showMobileMenu, setShowMobileMenu] = useState('');

	return (
		<header className='primary-header'>
			<div className='primary-header__inner flex'>
				<HeaderLeft
					setAddHidden={setAddHidden}
					addHidden={addHidden}
					setLogoColor={setLogoColor}
					logoColor={logoColor}
					menuColor={menuColor}
					setMenuColor={setMenuColor}
					setShowMobileMenu={setShowMobileMenu}
				/>
				<HeaderRight />
			</div>
			<MegaMenu addHidden={addHidden} />
			<div className={`mobileMenu ${showMobileMenu}`}>
				<Navigation />
				<HeaderRight />
				<MegaMenu />
			</div>
		</header>
	);
}

export default Header;
