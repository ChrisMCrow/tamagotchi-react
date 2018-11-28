import React, { Component } from 'react';

function TopMenu() {
  return(
    <div id='top-menu-container'>
      <style jsx>{`
        #top-menu-container {
          background-color: lightblue;
        }
        .commandButtons {
          text-align: center;
        }
        .commandButtons li {
          display: inline-block;
          margin: 30px;
        }
      `}</style>
      <ul className='commandButtons'>
        <li><img src="https://img.icons8.com/metro/50/000000/dining-room.png" /></li>
        <li><img src="https://img.icons8.com/metro/50/000000/idea.png" /></li>
        <li><img src="https://img.icons8.com/ios/50/000000/baseball-filled.png" /></li>
        <li><img src="https://img.icons8.com/ios/50/000000/syringe-filled.png" /></li>
      </ul>
    </div>
  );
}

export default TopMenu;