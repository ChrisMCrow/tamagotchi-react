import React from 'react';
import Background from './assets/background.png';
import PropTypes from 'prop-types';

function Stats(props) {
  return (
    <div className="tama-body">
      <style jsx>{`   
        .tama-body {
          background-color: #f8f8f8;
          background-image: url("${Background}");
          background-size: 350px;
          background-repeat: no-repeat;
          height: 210px;
          position: relative;
        }
        .stats-container {
          font-family: monospace;
          font-size: 20px;
          position: absolute;
          background-color: #cccccc;
          width: 330px;
          height: 190px;
          overflow-y: scroll;
          list-style: none;
          top: 10px;
          margin: 0 10px;
          padding: 10px;
          border: 5px double gray;
          border-radius: 5px;
        }
      `}</style>
      <ul className="stats-container">
        <li>Name: {props.tamagotchi.name}</li>
        <li>Age: {props.tamagotchi.age}</li>
        <li>Food Level: {props.tamagotchi.foodLevel}</li>
        <li>Happiness: {props.tamagotchi.happiness}</li>
        <li>Sleep Level: {props.tamagotchi.sleepLevel}</li>
        <li>Discipline Level: {props.tamagotchi.disciplineLevel}</li>
      </ul>
    </div>
  );
}

Stats.propTypes = {
  tamagotchi: PropTypes.object
};

export default Stats;
