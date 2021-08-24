function Navigation({ setAddHidden, addHidden }) {
	return (
		<div className='abs'>
			<ul className='navigation__list flex'>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Live
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Push
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Link
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Shop
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Packs
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						Help
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#' className='navigation__link'>
						More
						<span
							className={addHidden === 'hidden' ? 'addSign' : 'minusSign'}
							onClick={() =>
								setAddHidden((prevItem) =>
									prevItem === 'hidden' ? '' : 'hidden'
								)
							}
						>
							&nbsp;
						</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
