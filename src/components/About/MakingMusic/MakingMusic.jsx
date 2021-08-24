import posterJuanpe from '../../../images/poster-juanpe.jpg';

function MakingMusic() {
	return (
		<section className='making-music'>
			<div className='container'>
				<header className='flow-content'>
					<h2 className='sectionAbout-title'>
						Making music isn’t easy. It takes time, effort, and learning. But
						when you’re in the flow, it’s incredibly rewarding.
					</h2>

					<p className='sectionAbout-para'>
						We feel the same way about making Ableton products. The driving
						force behind Ableton is our passion for what we make, and the people
						we make it for.
					</p>
				</header>

				<div className='videoBackground'>
					<div className='videoBackground__play-icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='40'
							height='40'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path d='M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z' />
						</svg>
					</div>
					<figure>
						<img src={posterJuanpe} alt='poster of Juanpe' />
						<figcaption>
							<span>Why Ableton - Juanpe Balivor</span>
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
}

export default MakingMusic;
