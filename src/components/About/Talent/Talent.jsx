import photo8 from '../../../images/photo-8.jpg';

function Talent() {
	return (
		<div>
			<section className='exceptional-talent'>
				<div className='container'>
					<header className='flow-content'>
						<h2 className='sectionAbout-title'>
							We want our employees to love it here. Since we’re looking for
							exceptional talent from around the world, we will do everything we
							can to make your transition as easy as possible.
						</h2>
						<p className='sectionAbout-para'>
							If you're joining us in Berlin, we'll help with relocation and
							paperwork. We’ll even provide you with free German or English
							lessons. Plus, working in Germany means you can expect
							comprehensive health insurance for you and your family, as well as
							generous maternity and paternity leave. Office hours are flexible,
							but it’s not all work; we have several company and team outings
							throughout the year as well as a variety of fun, informal
							small-group activities.
						</p>
					</header>

					<div className='exceptional-talent__display'>
						<figure>
							<div>
								<img src={photo8} alt='photo 8' />
							</div>
							<figcaption className='flow-content'>
								<p>
									We’re really proud of the work we’ve done so far. But there’s
									so much more to come. If you’d like to be a part of it, please
									join us.
								</p>
								<a href='#'>See latest jobs</a>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Talent;
