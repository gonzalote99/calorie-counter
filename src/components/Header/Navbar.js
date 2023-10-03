import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='container'>
      <div className='content'>
             <div className='title'>calorie counter</div>
             <div className='foodicon'>
               <input className='image' type='image' src={'https://raw.githubusercontent.com/prashantirs/Calorie-Counter/master/src/components/Images/Calorie_Counter.png'} alt='Calorie Image' />
               </div>
        </div>

      </div>
    </>
  )
}

export default Navbar;