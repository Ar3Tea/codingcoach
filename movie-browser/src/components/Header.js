import React, { Component } from 'react';
import Chewie from '../styles/chewbacca-512.png';

class Header extends Component {
  render() {
    return (
        <div className="bg-black text-red-800 border-b border-yellow-700 font-sans flex jsutify-center">
          <div className="w-1/6 hide-on-mobile"><img className="wookie-icon float-right" src={Chewie} alt="chewie" /></div>
          <div className="w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6"><h1 className="text-6xl text-center">Wookie Movie Browser</h1></div>
          <div className="w-1/6 hide-on-mobile"><img className="wookie-icon" src={Chewie} alt="chewie" /></div>
        </div>
    );
  }}

  export default Header;