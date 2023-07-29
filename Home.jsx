import React from 'react'
import './Home.css'
import Figma from '../assets/figma-logo.png'
import Black from '../assets/black-logo.png'
import Diamont from '../assets/diamond-logo.png'
import MyPhoto from '../assets/my-photo.png'
import Page1 from '../assets/page1.png'
import Page2 from '../assets/page2.png'
import Page3 from '../assets/page3.png'


function Home() {
  return (
    <div>
      <div className='body'>
          <div className='body-left' >
              <div className='Hi-div' >
                <h1 className='hi'>👋 Hi, I’m PRIYADHARSHINI</h1>
              </div>
              <div className='about'>
                <p className='about-para'>
                I’m a <b>Full Stack Developer</b> with a passion for participate in every stage of digital product, from discovery to delivery. Helping to focus the business goals on users.
                </p>
              </div>
              <div className='me' >
                <div className='expert'>
                <p className='expert-p' id='e1' >I’m looking for new opportunities</p>
                <p className='expert-p' id='e2' >Previously I worked at 
                <spam className="expert-spam"> Multiplica Talent Chile</spam></p>
               
                </div>
                <div className='contact'>
                    <p className='contact-p' id='c1'>India</p>
                    <p className='contact-p' id='c2'>pd8575761@gmail.com</p>
                </div>

              </div>
              <div className='project-click' >
                <div className='project-logo' >
                    <p className='para-logo' >👇</p>
                </div>
                <div className='project-click' >
                    <p className='para-click'>
                    Check some projects
                    </p>
                </div>
              </div>

          </div>
          <div className='body-right' >
            <div className='UI-kit' >
                <p className='UI-para'>🎨  UI Kit</p>
            </div>
            
           

            <div className='icons' >
            <p className='icons-para'>🔔  Icons</p>
            </div>

          

            <div className='fonts'>
            <p className='fonts-para'>🔤  Fonts</p>
          </div>

            

           

            

            <div className='profile'>
                <div className='details'>
                <div className='profile-photo' >
                        <img className='my-photo' src={MyPhoto} alt="my-photo-logo" />
                </div>              
              <div className='uxui' >
                <p className='uxui-para'>
                UX/UI
                </p>
              </div>

            <div className='name' >
                <p className='name-para' >PRIYADHARSHINI M</p>
            </div>

            <div className='work' >
                <p >Student</p>
            </div></div>
            </div>
            <div className='diamont'>
              <img className='diamont-logo' src={Diamont} alt="diamont-logo" />
            </div>
            <div className='user-research'>
            <p className='user-research-para'>🔍  User Research</p>
            </div>
            <div className='black' >
                <img className='black-logo' src={Black} alt="black-logo" />
            </div>
            <div className='figma'>
                 <img className='figma-logo' src={Figma} alt="figma-logo" />
            </div>
            <div className='flow-charts'>
            <p className='flow-charts-para'>🔀  Flow charts</p>
            </div>
          </div>
        </div>
        <div className='pages'>
            <div className='page1' >
                <img className='page-photo1' src={Page1}  alt='page1'/>
            </div>
            <div className='page2' >
                <img className='page-photo2' src={Page2}  alt='page2'/>
            </div>
            <div className='page3' >
                <img className='page-photo3' src={Page3}  alt='page3'/>
            </div>
        </div>
    </div>
  )
}

export default Home
