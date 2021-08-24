import React from 'react';

function MegaMenu({ addHidden }) {
	return (
		<div className={`main-nav-more ${addHidden}`}>
			<div className='flow-content'>
				<div className='moreOnAbleton'>
					<h3>More on Ableton.com:</h3>
					<ul className='nav-list'>
						<li className='nav-item'>
							<a href='#'>Blog</a>
						</li>
						<li className='nav-item'>
							<a href='#'>Ableton for the Classroom</a>
						</li>
						<li className='nav-item'>
							<a href='#'>Ableton for Colleges and Universities</a>
						</li>
						<li className='nav-item'>
							<a href='#'>Certified Training</a>
						</li>
						<li className='nav-item'>
							<a href='#'>About Ableton</a>
						</li>
						<li className='nav-item'>
							<a href='#'>Jobs</a>
						</li>
					</ul>
				</div>
				<div className='moreFromAbleton'>
					<h3>More from Ableton</h3>
					<ul className='nav-list'>
						<li className='nav-item'>
							<a href='#'>
								Loop
								<span>
									Watch Talks, Performances and Features from Ableton's Summit
									for Music Makers
								</span>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#'>
								Learning Music
								<span>
									Learn the fundamentals of music making right in your browser.
								</span>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#'>
								Learning Synths
								<span>
									Get started with synthesis using a web-based synth and
									accompanying lessons.
								</span>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#'>
								Making Music
								<span>
									Some tips from 74 Creative Strategies for Electronic
									Producers.
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MegaMenu;
