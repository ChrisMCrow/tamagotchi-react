import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from './TopMenu';
import TamaBody from './TamaBody';
import BottomMenu from './BottomMenu';
import TamaShell from './assets/tamashell.png';

function TamaDetail(props) {
  return(
    <div>
      <style jsx>{`
        #play-container {
          margin: 50px auto;
          width: 500px;
          border: 1
        }
      `}</style>
      <div id='play-container'>
        <TopMenu />
        <TamaBody />
        <BottomMenu />
      </div>

      <ul>
        <li>Name: {props.tamaList[0].name}</li>
        <li>Food Level: {props.tamaList[0].foodLevel}</li>
        <li>Happiness: {props.tamaList[0].happiness}</li>
        <li>Sleep Level: {props.tamaList[0].sleepLevel}</li>
        <li>Age: {props.tamaList[0].age}</li>
      </ul>
    </div>
  );
}

TamaDetail.propTypes = {
  tamaList: PropTypes.array
}

export default TamaDetail;