import React, { Component } from 'react';

function BottomMenu() {
  return(
    <div id='bottom-menu-container'>
      <style jsx>{`
        #bottom-menu-container {
          background-color: lightblue;
          border-radius: 0 0 30px 30px;
        }
        .commandButtons {
          margin-bottom: 0;
        }
        .commandButtons li {
          display: inline-block;
          margin: 10px 25px 10px 0;
        }
        .commandButtons * img {
          width: 80%;
        }
      `}</style>
      <ul className='commandButtons'>
        <li><img src="https://img.icons8.com/ios/50/000000/toilet-bowl-filled.png" /></li>
        <li><img src="https://img.icons8.com/ios/50/000000/scale-filled.png" /></li>
        <li><img src="https://img.icons8.com/material/50/000000/evil.png" /></li>
        <li><img src="https://img.icons8.com/ios/50/000000/error-filled.png" /></li>
      </ul>
    </div>
  );
}

export default BottomMenu;