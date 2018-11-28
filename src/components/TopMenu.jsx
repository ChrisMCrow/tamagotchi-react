import React, { Component } from 'react';
import PropTypes from 'prop-types';

function TopMenu(props) {

  function handleFeedButton() {
    props.onFeed();
  }

  function handleSleepButton() {
    props.onSleep();
  }

  function handlePlayButton() {
    props.onPlay();
  }

  function handleHealButton() {
    props.onHeal();
  }

  return(
    <div id='top-menu-container'>
      <style jsx>{`
        #top-menu-container {
          background-color: lightblue;
          border-radius: 30px 30px 0 0;
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
        <li><img onClick={handleFeedButton} src="https://img.icons8.com/metro/50/000000/dining-room.png" /></li>
        <li><img onClick={handleSleepButton} src="https://img.icons8.com/metro/50/000000/idea.png" /></li>
        <li><img onClick={handlePlayButton} src="https://img.icons8.com/ios/50/000000/baseball-filled.png" /></li>
        <li><img onClick={handleHealButton} src="https://img.icons8.com/ios/50/000000/syringe-filled.png" /></li>
      </ul>
    </div>
  );
}

TopMenu.propTypes = {
  onFeed: PropTypes.func,
  onSleep: PropTypes.func,
  onPlay: PropTypes.func,
  onHeal: PropTypes.func
}

export default TopMenu;