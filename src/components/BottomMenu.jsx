import React, { Component } from 'react';
import PropTypes from 'prop-types';

function BottomMenu(props) {

  function handleFlushButton() {
    props.onFlush();
  }

  function handleStatsButton() {
    props.onStats();
  }

  function handleDisciplineButton() {
    props.onDiscipline();
  }

  function handleAlertButton() {
    alert('Your Tamagotchi is crying! Check their stats to find out what\'s wrong!');
  }

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
          cursor: pointer;
        }
        .commandButtons * img:active {
          background-color: yellow;
        }

      `}</style>
      <ul className='commandButtons'>
        <li><img onClick={handleFlushButton} src="https://img.icons8.com/ios/50/000000/toilet-bowl-filled.png" /></li>
        <li><img onClick={handleStatsButton} src="https://img.icons8.com/ios/50/000000/scale-filled.png" /></li>
        <li><img onClick={handleDisciplineButton} src="https://img.icons8.com/material/50/000000/evil.png" /></li>
        <li><img onClick={handleAlertButton} src="https://img.icons8.com/ios/50/000000/error-filled.png" /></li>
      </ul>
    </div>
  );
}

BottomMenu.propTypes = {
  onFlush: PropTypes.func,
  onStats: PropTypes.func,
  onDiscipline: PropTypes.func
}

export default BottomMenu;