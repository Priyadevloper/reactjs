import './Nav.css'

import Ball from './assets/Ball.svg'
import Be from './assets/Be.svg'
import In from './assets/in.svg'
import Home from './pages/Home'

function Nav() {
 
  return (
    <>
      <div className='main'>

        <div className='header'>
          <div className='head-left'>
              <p className='head-me'>PRIYADHARSHINI M</p>
               <div className='button-div'><button className='now-available' >Now Available</button></div>
          </div>
          <div className='head-right'>
            <img className='logo-head' id='be' src={Ball} alt='be'/>
            <img className='logo-head' id='ball' src={Be} alt='ball'/>
            <img className='logo-head' id='in' src={In} alt='in'/>
          </div>
        </div>
        <Home/>
      </div>
      
        
    </>
  )
}

export default Nav
