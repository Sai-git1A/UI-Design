import React from 'react';
import './Body.css';

export default function Body() {
    return (
        <div className='main'>
            {/* Section - 1 */}
            <div className='section-1'>
            <div className='sub-1'>
            <h1 className='title-1'>Making the most of the ever-growing</h1>
            <h1 className='title-2'>Information Technology</h1>
            <p className='sub-text'>Managed by a team of professional experts with extensive experience and impressive track record</p>
            <button className='btn'>Read More</button>
            </div>
            <img className='img-1' src={process.env.PUBLIC_URL + '/Images/img-1.svg'} alt='UI-Design img-1'/>
            </div>

            {/* Section - 2 */}
            <div className='section-2'>
                <img className='img-2' src={process.env.PUBLIC_URL + '/Images/img-2.svg'} alt='UI-Design img-2' />
                <div className='sub-2'>
                    <h1 className='title-3'>Welcome to<span className='title-4'>Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <p className='sub-text-2'>
                    <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{color:'#EE4248', fontWeight:'bold'}}>DSI</span>’s distinct front-end based application concept. </p>
                    Managed by a team of professional experts with extensive experience and impressive track records, <span style={{color:'#EE4248', fontWeight:'bold'}}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>
            </div>

            {/* Section - 3 */}
            <div className='section-3'>
            <h1 className='title-5'>Product and Service</h1>
            <div className='sub-3'>
            <div className='container'>
                <img className='container-img' src={process.env.PUBLIC_URL + '/Images/img-3.png'} alt='UI-Design img-3'/>
                <h2 className='container-title'>Our Product</h2>
                <p className='container-sub-text'>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                <button className='btn-2'>Read More</button>
            </div>
            <div className='container'>
                <img className='container-img' src={process.env.PUBLIC_URL + '/Images/img-4.png'} alt='UI-Design img-4'/>
                <h2 className='container-title'>Our Service</h2>
                <p className='container-sub-text'>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                <button className='btn-2'>Read More</button>
            </div>
            <div className='container'>
                <img className='container-img' src={process.env.PUBLIC_URL + '/Images/img-5.png'} alt='UI-Design img-5'/>
                <h2 className='container-title'>Our Technology</h2>
                <p className='container-sub-text'>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                <button className='btn-2'>Read More</button>
            </div>
            </div>
            </div>

            {/* Section - 4 */}
            <div className='section-4'>
                <h1 className='title-5'>Mobile Specialist</h1>
                <div className='sub-4'>
                <div className='specialist'>
                    <img className='specialist-img' src={process.env.PUBLIC_URL + '/Images/img-6.png'} alt='UI-Design img-6'/>
                    <h3 className='specialist-in'>System Analyst</h3>
                    <h2 className='specialist-name'>Rodney Stratton</h2>
                    <div className='specialist-contact'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='specialist'>
                    <img className='specialist-img' src={process.env.PUBLIC_URL + '/Images/img-7.png'} alt='UI-Design img-7'/>
                    <h3 className='specialist-in'>Programmer</h3>
                    <h2 className='specialist-name'>Mike auston</h2>
                    <div className='specialist-contact'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='specialist'>
                    <img className='specialist-img' src={process.env.PUBLIC_URL + '/Images/img-8.jpg'} alt='UI-Design img-8'/>
                    <h3 className='specialist-in'>UI Designer</h3>
                    <h2 className='specialist-name'>Nancy</h2>
                    <div className='specialist-contact'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='specialist'>
                    <img className='specialist-img' src={process.env.PUBLIC_URL + '/Images/img-9.png'} alt='UI-Design img-9'/>
                    <h3 className='specialist-in'>Bug Specialist</h3>
                    <h2 className='specialist-name'>dwancen</h2>
                    <div className='specialist-contact'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                </div>
            </div>

            {/* Section - 5 */}
            <div className='section-5'>
                <div>
                    <h2 style={{fontWeight:'bold'}}>Contact</h2>
                    <p style={{fontWeight:'bold'}}>PT Dwidasa Samsara Indonesia</p>
                    <p>Ruko Jalur Sutera 29A No. 53</p>
                    <p>Alam Sutera Serpong, Tangerang 15323</p>
                </div>
                <div>
                    <span>
                    <p>Phone : +62.21.5314.1135</p>
                    <p>Fax : +62.21.5314.1135</p>
                    <p>Email : community@dwidasa.com</p>
                    </span>
                </div>
                <div className='s5-images'>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-10.png'} alt='UI-Design img-10'/>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-11.png'} alt='UI-Design img-11'/>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-12.png'} alt='UI-Design img-12'/>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-13.png'} alt='UI-Design img-13'/>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-14.png'} alt='UI-Design img-14'/>
                    <img className='contact-img' src={process.env.PUBLIC_URL + '/Images/img-15.png'} alt='UI-Design img-15'/>
                </div>
            </div>
        </div>
    )
}