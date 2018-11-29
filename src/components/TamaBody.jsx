import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background from './assets/background.png';
import TamaDefault from './assets/tamaDefault.png';
import TamaSleep from './assets/tamaSleep.png';

function TamaBody(props) {
  return(
    <div id='tama-body'>
      <style jsx>{`
        #tama-body {
          background-color: #f8f8f8;
          background-image: url("${Background}");
          background-size: 350px;
          background-repeat: no-repeat;
          height: 210px;
          
          text-align: center;
        }
        .tama-sprite {
          width: 100px;
          margin-top: 90px;
        }
      `}</style>
      {props.tamagotchi.isSleeping ? (
        <img className='tama-sprite' src={TamaSleep}/>
      ) : (
        <img className='tama-sprite' src={TamaDefault} />
      )}
    </div>
  );
}

TamaBody.propTypes = {
  tamagotchi: PropTypes.object
}

export default TamaBody;