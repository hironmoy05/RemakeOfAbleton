import logo from '../../../../images/ableton-hallmark.svg';

function Logo({ logoColor }) {
	return (
		<div className={`logo ${logoColor}`}>
			<a href='#'>
				<img src={logo} alt='header logo' />
			</a>
		</div>
	);
}

export default Logo;
