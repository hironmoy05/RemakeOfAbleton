import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Menu from './Navigation/Menu';

function HeaderLeft({
	setAddHidden,
	addHidden,
	setLogoColor,
	logoColor,
	menuColor,
	setMenuColor,
	setShowMobileMenu,
}) {
	return (
		<div>
			<div className='primary-header__left'>
				<Logo logoColor={logoColor} />
				<Menu
					setLogoColor={setLogoColor}
					setMenuColor={setMenuColor}
					menuColor={menuColor}
					setShowMobileMenu={setShowMobileMenu}
				/>
				<Navigation setAddHidden={setAddHidden} addHidden={addHidden} />
			</div>
		</div>
	);
}

export default HeaderLeft;
