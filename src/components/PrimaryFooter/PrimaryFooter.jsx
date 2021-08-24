import abletonHallmark from '../../images/ableton-hallmark.svg';

function PrimaryFooter() {
	return (
		<footer className='primary-footer'>
			<div className='container flow-content'>
				<div className='footer-logo'>
					<img
						src='https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg'
						alt=''
					/>
				</div>

				{/* Footer main */}
				<section className='ft-main flow-content split'>
					<div className='ft-main__item col1'>
						<ul className='ft-list'>
							<li>
								<a href='#' className='ft-link arrow'>
									Register Live or Push
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									About Ableton
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Jobs
								</a>
							</li>
						</ul>
						<ul className='ft-icons'>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 40 40'
										role='img'
										focusable='false'
										className='facebook'
									>
										<title>Facebook</title>
										<path
											d='M33.334 20a13.333 13.333 0 10-15.417 13.167v-9.312h-3.385V20h3.385v-2.933c0-3.342 1.991-5.187 5.036-5.187a20.5 20.5 0 012.985.26v3.277h-1.681a1.927 1.927 0 00-2.173 2.082v2.5h3.7l-.591 3.854h-3.109v9.314A13.337 13.337 0 0033.334 20z'
											fill='#fff'
										></path>
										<path
											d='M25.19 23.854L25.781 20h-3.7v-2.5a1.927 1.927 0 012.173-2.082h1.681v-3.283a20.5 20.5 0 00-2.985-.26c-3.046 0-5.036 1.846-5.036 5.188v2.938h-3.383v3.854h3.385v9.32a13.473 13.473 0 004.167 0v-9.317z'
											fill='#3477f2'
										></path>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'></a>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 40 40'
									role='img'
									focusable='false'
									className='twitter'
								>
									<title>Twitter</title>
									<path
										d='M15.362 30.159a14.5 14.5 0 0014.594-14.594c0-.222 0-.443-.015-.663a10.436 10.436 0 002.559-2.655 10.238 10.238 0 01-2.946.807 5.147 5.147 0 002.255-2.837 10.279 10.279 0 01-3.257 1.245 5.134 5.134 0 00-8.741 4.678A14.562 14.562 0 019.24 10.781a5.133 5.133 0 001.588 6.847 5.091 5.091 0 01-2.328-.642v.065a5.131 5.131 0 004.115 5.028 5.121 5.121 0 01-2.316.088 5.135 5.135 0 004.792 3.562 10.292 10.292 0 01-6.37 2.2 10.441 10.441 0 01-1.221-.074 14.521 14.521 0 007.862 2.3'
										fill='#fff'
									></path>
								</svg>
							</li>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 40 40'
										role='img'
										focusable='false'
										className='youtube'
									>
										<title>Youtube</title>
										<path
											d='M32.776 13.601a3.351 3.351 0 00-2.358-2.373C28.339 10.667 20 10.667 20 10.667s-8.339 0-10.418.561a3.351 3.351 0 00-2.358 2.373 35.146 35.146 0 00-.557 6.46 35.146 35.146 0 00.557 6.46 3.351 3.351 0 002.358 2.373c2.08.561 10.418.561 10.418.561s8.339 0 10.418-.561a3.351 3.351 0 002.358-2.373 35.146 35.146 0 00.557-6.46 35.146 35.146 0 00-.557-6.46z'
											fill='#fff'
										></path>
										<path
											d='M17.273 24.025l6.97-3.961-6.97-3.969z'
											fill='#ff001d'
										></path>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 40 40'
										role='img'
										focusable='false'
										className='instagram'
									>
										<title>Instagram</title>
										<g transform='translate(-336 -285)'>
											<path
												d='M356 294.069c3.56 0 3.982.014 5.388.078a7.38 7.38 0 012.476.459 4.416 4.416 0 012.53 2.53 7.38 7.38 0 01.459 2.476c.064 1.406.078 1.828.078 5.388s-.014 3.982-.078 5.388a7.38 7.38 0 01-.459 2.476 4.416 4.416 0 01-2.53 2.53 7.38 7.38 0 01-2.476.459c-1.406.064-1.827.078-5.388.078s-3.982-.014-5.388-.078a7.38 7.38 0 01-2.476-.459 4.416 4.416 0 01-2.53-2.53 7.38 7.38 0 01-.459-2.476c-.064-1.406-.078-1.828-.078-5.388s.014-3.982.078-5.388a7.38 7.38 0 01.459-2.476 4.416 4.416 0 012.53-2.53 7.38 7.38 0 012.476-.459c1.406-.064 1.828-.078 5.388-.078m0-2.4c-3.621 0-4.075.015-5.5.08a9.787 9.787 0 00-3.237.62 6.818 6.818 0 00-3.9 3.9 9.787 9.787 0 00-.62 3.237c-.065 1.422-.08 1.876-.08 5.5s.015 4.075.08 5.5a9.787 9.787 0 00.62 3.237 6.818 6.818 0 003.9 3.9 9.787 9.787 0 003.237.62c1.422.065 1.876.08 5.5.08s4.075-.015 5.5-.08a9.787 9.787 0 003.237-.62 6.818 6.818 0 003.9-3.9 9.787 9.787 0 00.62-3.237c.065-1.422.08-1.876.08-5.5s-.015-4.075-.08-5.5a9.787 9.787 0 00-.62-3.237 6.818 6.818 0 00-3.9-3.9 9.787 9.787 0 00-3.237-.62c-1.422-.065-1.876-.08-5.5-.08z'
												fill='#fff'
											></path>
											<path
												d='M356 298.153a6.847 6.847 0 106.847 6.847 6.847 6.847 0 00-6.847-6.847zm0 11.291a4.444 4.444 0 114.444-4.444 4.444 4.444 0 01-4.444 4.444z'
												fill='#fff'
											></path>
											<circle
												cx='1.6'
												cy='1.6'
												r='1.6'
												transform='translate(361.517 296.283)'
												fill='#fff'
											></circle>
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</div>

					<div className='ft-main__item col2'>
						<h4 className='ft-title'>Education</h4>
						<ul className='ft-list'>
							<li>
								<a href='#' className='ft-link arrow'>
									Offers for students and teachers
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Ableton for the Classroom
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Ableton for Colleges and Universities
								</a>
							</li>
						</ul>
					</div>

					<div className='ft-main__item col3 re-order__last'>
						<div>
							<h4 className='ft-title'>Sign up to our newslater</h4>
							<p className='ft-para'>
								Enter your email address to stay up to date with the latest
								offers, tutorials, downloads, surveys and more.
							</p>
						</div>
						<form className='ft-form'>
							<input
								type='email'
								className='ft-input'
								placeholder='Email Address'
								className='ft-form__input mt-s'
							/>
							<button type='submit'>Sign up</button>
						</form>
					</div>
				</section>

				{/* Footer Info */}
				<section className='ft-info flow-content split'>
					<div className='ft-info__item col1'>
						<h4 className='ft-title'>Community</h4>
						<ul className='ft-list'>
							<li>
								<a href='#' className='ft-link arrow'>
									Find Ableton User Groups
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Find Certified Training
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Become a Certified Trainer
								</a>
							</li>
						</ul>
					</div>
					<div className='ft-info__item col2'>
						<h4 className='ft-title'>Distibutors</h4>
						<ul className='ft-list'>
							<li>
								<a href='#' className='ft-link arrow'>
									Find Distributors
								</a>
							</li>
							<li>
								<a href='#' className='ft-link arrow'>
									Try Push in-store
								</a>
							</li>
						</ul>
					</div>
					<div className='ft-info__item col3  ft-info__item__select'>
						<h4 className='ft-title'>Language and Location</h4>

						<div className='flex mt-s'>
							<select className='ft-info__select1'>
								<option value='en' selected=''>
									English
								</option>
								<option value='de'>Deutsch</option>
								<option value='fr'>Français</option>
								<option value='ja'>日本語</option>
								<option value='zh-cn'>简体中文</option>
							</select>
							<select className='ft-info__select2'>
								<option value=''>Please choose</option>
								<optgroup label='Common Countries'>
									<option value='us'>United States</option>
									<option value='uk'>United Kingdom</option>
									<option value='fr'>France</option>
									<option value='de'>Germany</option>
									<option value='ca'>Canada</option>
									<option value='jp'>Japan</option>
									<option value='cn'>China</option>
								</optgroup>
								<optgroup label='All Countries/Regions'>
									<option value='af'>Afghanistan</option>
									<option value='ax'>Aland Islands</option>
									<option value='al'>Albania</option>
									<option value='dz'>Algeria</option>
									<option value='as'>American Samoa</option>
									<option value='ad'>Andorra</option>
									<option value='ao'>Angola</option>
									<option value='ai'>Anguilla</option>
									<option value='aq'>Antarctica</option>
									<option value='ag'>Antigua And Barbuda</option>
									<option value='ar'>Argentina</option>
									<option value='am'>Armenia</option>
									<option value='aw'>Aruba</option>
									<option value='au'>Australia</option>
									<option value='at'>Austria</option>
									<option value='az'>Azerbaijan</option>
									<option value='bs'>Bahamas</option>
									<option value='bh'>Bahrain</option>
									<option value='bd'>Bangladesh</option>
									<option value='bb'>Barbados</option>
									<option value='by'>Belarus</option>
									<option value='be'>Belgium</option>
									<option value='bz'>Belize</option>
									<option value='bj'>Benin</option>
									<option value='bm'>Bermuda</option>
									<option value='bt'>Bhutan</option>
									<option value='bo'>Bolivia</option>
									<option value='bq'>Bonaire, Sint Eustatius and Saba</option>
									<option value='ba'>Bosnia And Herzegovina</option>
									<option value='bw'>Botswana</option>
									<option value='bv'>Bouvet Island</option>
									<option value='br'>Brazil</option>
									<option value='io'>British Indian Ocean Territory</option>
									<option value='bn'>Brunei Darussalam</option>
									<option value='bg'>Bulgaria</option>
									<option value='bf'>Burkina Faso</option>
									<option value='bi'>Burundi</option>
									<option value='kh'>Cambodia</option>
									<option value='cm'>Cameroon</option>
									<option value='ca'>Canada</option>
									<option value='cv'>Cape Verde</option>
									<option value='ky'>Cayman Islands</option>
									<option value='cf'>Central African Republic</option>
									<option value='td'>Chad</option>
									<option value='cl'>Chile</option>
									<option value='cn'>China</option>
									<option value='cx'>Christmas Island</option>
									<option value='cc'>Cocos (Keeling) Islands</option>
									<option value='co'>Colombia</option>
									<option value='km'>Comoros</option>
									<option value='cg'>Congo</option>
									<option value='cd'>
										Congo, The Democratic Republic Of The
									</option>
									<option value='ck'>Cook Islands</option>
									<option value='cr'>Costa Rica</option>
									<option value='ci'>Cote D'Ivoire</option>
									<option value='hr'>Croatia</option>
									<option value='cu'>Cuba</option>
									<option value='cw'>Curacao</option>
									<option value='cy'>Cyprus</option>
									<option value='cz'>Czech Republic</option>
									<option value='dk'>Denmark</option>
									<option value='dj'>Djibouti</option>
									<option value='dm'>Dominica</option>
									<option value='do'>Dominican Republic</option>
									<option value='ec'>Ecuador</option>
									<option value='eg'>Egypt</option>
									<option value='sv'>El Salvador</option>
									<option value='gq'>Equatorial Guinea</option>
									<option value='er'>Eritrea</option>
									<option value='ee'>Estonia</option>
									<option value='et'>Ethiopia</option>
									<option value='fk'>Falkland Islands (Malvinas)</option>
									<option value='fo'>Faroe Islands</option>
									<option value='fj'>Fiji</option>
									<option value='fi'>Finland</option>
									<option value='fr'>France</option>
									<option value='gf'>French Guiana</option>
									<option value='pf'>French Polynesia</option>
									<option value='ga'>Gabon</option>
									<option value='gm'>Gambia</option>
									<option value='ge'>Georgia</option>
									<option value='de'>Germany</option>
									<option value='gh'>Ghana</option>
									<option value='gi'>Gibraltar</option>
									<option value='gr'>Greece</option>
									<option value='gl'>Greenland</option>
									<option value='gd'>Grenada</option>
									<option value='gp'>Guadeloupe</option>
									<option value='gu'>Guam</option>
									<option value='gt'>Guatemala</option>
									<option value='gg'>Guernsey</option>
									<option value='gn'>Guinea</option>
									<option value='gw'>Guinea-Bissau</option>
									<option value='gy'>Guyana</option>
									<option value='ht'>Haiti</option>
									<option value='hm'>Heard Island And McDonald Islands</option>
									<option value='hn'>Honduras</option>
									<option value='hk'>Hong Kong SAR, China</option>
									<option value='hu'>Hungary</option>
									<option value='is'>Iceland</option>
									<option value='in' selected=''>
										India
									</option>
									<option value='id'>Indonesia</option>
									<option value='ir'>Iran (Islamic Republic Of)</option>
									<option value='iq'>Iraq</option>
									<option value='ie'>Ireland</option>
									<option value='im'>Isle Of Man</option>
									<option value='il'>Israel</option>
									<option value='it'>Italy</option>
									<option value='jm'>Jamaica</option>
									<option value='jp'>Japan</option>
									<option value='je'>Jersey</option>
									<option value='jo'>Jordan</option>
									<option value='kz'>Kazakhstan</option>
									<option value='ke'>Kenya</option>
									<option value='ki'>Kiribati</option>
									<option value='kp'>
										Korea, Democratic People's Republic
									</option>
									<option value='kr'>Korea, Republic Of</option>
									<option value='kw'>Kuwait</option>
									<option value='kg'>Kyrgyzstan</option>
									<option value='la'>Lao People's Democratic Republic</option>
									<option value='lv'>Latvia</option>
									<option value='lb'>Lebanon</option>
									<option value='ls'>Lesotho</option>
									<option value='lr'>Liberia</option>
									<option value='ly'>Libya</option>
									<option value='li'>Liechtenstein</option>
									<option value='lt'>Lithuania</option>
									<option value='lu'>Luxembourg</option>
									<option value='mo'>Macao SAR, China</option>
									<option value='mk'>Macedonia, Republic of</option>
									<option value='mg'>Madagascar</option>
									<option value='mw'>Malawi</option>
									<option value='my'>Malaysia</option>
									<option value='mv'>Maldives</option>
									<option value='ml'>Mali</option>
									<option value='mt'>Malta</option>
									<option value='mh'>Marshall Islands</option>
									<option value='mq'>Martinique</option>
									<option value='mr'>Mauritania</option>
									<option value='mu'>Mauritius</option>
									<option value='yt'>Mayotte</option>
									<option value='mx'>Mexico</option>
									<option value='fm'>Micronesia, Federated States Of</option>
									<option value='md'>Moldova, Republic Of</option>
									<option value='mc'>Monaco</option>
									<option value='mn'>Mongolia</option>
									<option value='me'>Montenegro</option>
									<option value='ms'>Montserrat</option>
									<option value='ma'>Morocco</option>
									<option value='mz'>Mozambique</option>
									<option value='mm'>Myanmar</option>
									<option value='na'>Namibia</option>
									<option value='nr'>Nauru</option>
									<option value='np'>Nepal</option>
									<option value='nl'>Netherlands</option>
									<option value='nc'>New Caledonia</option>
									<option value='nz'>New Zealand</option>
									<option value='ni'>Nicaragua</option>
									<option value='ne'>Niger</option>
									<option value='ng'>Nigeria</option>
									<option value='nu'>Niue</option>
									<option value='nf'>Norfolk Island</option>
									<option value='mp'>Northern Mariana Islands</option>
									<option value='no'>Norway</option>
									<option value='om'>Oman</option>
									<option value='pk'>Pakistan</option>
									<option value='pw'>Palau</option>
									<option value='ps'>Palestinian Territory, Occupied</option>
									<option value='pa'>Panama</option>
									<option value='pg'>Papua New Guinea</option>
									<option value='py'>Paraguay</option>
									<option value='pe'>Peru</option>
									<option value='ph'>Philippines</option>
									<option value='pn'>Pitcairn</option>
									<option value='pl'>Poland</option>
									<option value='pt'>Portugal</option>
									<option value='pr'>Puerto Rico</option>
									<option value='qa'>Qatar</option>
									<option value='re'>Reunion</option>
									<option value='ro'>Romania</option>
									<option value='ru'>Russian Federation</option>
									<option value='rw'>Rwanda</option>
									<option value='sh'>Saint Helena</option>
									<option value='kn'>Saint Kitts And Nevis</option>
									<option value='lc'>Saint Lucia</option>
									<option value='mf'>Saint Martin (French Part)</option>
									<option value='pm'>Saint Pierre And Miquelon</option>
									<option value='vc'>Saint Vincent And The Grenadines</option>
									<option value='ws'>Samoa</option>
									<option value='sm'>San Marino</option>
									<option value='st'>Sao Tome And Principe</option>
									<option value='sa'>Saudi Arabia</option>
									<option value='sn'>Senegal</option>
									<option value='rs'>Serbia</option>
									<option value='sc'>Seychelles</option>
									<option value='sl'>Sierra Leone</option>
									<option value='sg'>Singapore</option>
									<option value='sx'>Sint Maarten</option>
									<option value='sk'>Slovakia</option>
									<option value='si'>Slovenia</option>
									<option value='sb'>Solomon Islands</option>
									<option value='so'>Somalia</option>
									<option value='za'>South Africa</option>
									<option value='gs'>
										South Georgia And The South Sandwich Islands
									</option>
									<option value='ss'>South Sudan</option>
									<option value='es'>Spain</option>
									<option value='ic'>Canary Islands (Spain)</option>
									<option value='lk'>Sri Lanka</option>
									<option value='sd'>Sudan</option>
									<option value='sr'>Suriname</option>
									<option value='sj'>Svalbard And Jan Mayen</option>
									<option value='sz'>Swaziland</option>
									<option value='se'>Sweden</option>
									<option value='ch'>Switzerland</option>
									<option value='sy'>Syrian Arab Republic</option>
									<option value='tw'>Taiwan</option>
									<option value='tj'>Tajikistan</option>
									<option value='tz'>Tanzania, United Republic Of</option>
									<option value='tf'>
										Territory of the French Southern and Antarctic Lands
									</option>
									<option value='th'>Thailand</option>
									<option value='tl'>Timor-Leste</option>
									<option value='tg'>Togo</option>
									<option value='tk'>Tokelau</option>
									<option value='to'>Tonga</option>
									<option value='tt'>Trinidad And Tobago</option>
									<option value='tn'>Tunisia</option>
									<option value='tr'>Turkey</option>
									<option value='tm'>Turkmenistan</option>
									<option value='tc'>Turks And Caicos Islands</option>
									<option value='tv'>Tuvalu</option>
									<option value='ug'>Uganda</option>
									<option value='ua'>Ukraine</option>
									<option value='ae'>United Arab Emirates</option>
									<option value='uk'>United Kingdom</option>
									<option value='us'>United States</option>
									<option value='um'>
										United States Minor Outlying Islands
									</option>
									<option value='uy'>Uruguay</option>
									<option value='uz'>Uzbekistan</option>
									<option value='vu'>Vanuatu</option>
									<option value='va'>Vatican City State (Holy See)</option>
									<option value='ve'>Venezuela</option>
									<option value='vn'>Viet Nam</option>
									<option value='vg'>Virgin Islands (British)</option>
									<option value='vi'>Virgin Islands (U.S.)</option>
									<option value='wf'>Wallis And Futuna</option>
									<option value='eh'>Western Sahara</option>
									<option value='ye'>Yemen</option>
									<option value='zm'>Zambia</option>
									<option value='zw'>Zimbabwe</option>
								</optgroup>
							</select>
						</div>
					</div>
				</section>

				{/* Footer legar */}
				<section className='ft-legal'>
					<div className='flex flow-content'>
						<div className='ft-left'>
							<ul className='ft-list'>
								<li>
									<a href='#'>Archive</a>
								</li>
								<li>
									<a href='#'>Contact Us</a>
								</li>
								<li>
									<a href='#'>Press Resources</a>
								</li>
								<li>
									<a href='#'>Legal Info</a>
								</li>
								<li>
									<a href='#'>Privacy Policy</a>
								</li>
								<li>
									<a href='#'>Cookie Settings</a>
								</li>
								<li>
									<a href='#'>Imprint</a>
								</li>
							</ul>
						</div>
						<div className='ft-right'>
							<div className='flex'>
								<span>Made in Berlin</span>
								<div className='ft-logo'>
									<img src={abletonHallmark} alt='footer logo' />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
}

export default PrimaryFooter;
