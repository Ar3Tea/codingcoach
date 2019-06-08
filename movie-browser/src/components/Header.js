import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="bg-black text-red-800 pb-10 border-b border-yellow-700 font-sans">
            <h1 className="text-4xl text-center">Wookie Movie Browser</h1>
        </div>
    );
  }}

  export default Header;