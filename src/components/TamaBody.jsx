import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background from './assets/background.png';
import TamaDefault from './assets/tamaDefault.png';
import TamaSleep from './assets/tamaSleep.png';
import Stats from './Stats';
import PoopImg from './assets/poop.png';
import DeadImg from './assets/dead.png';
import SickImg from './assets/sick.png';

function TamaBody(props) {
  const defaultStyle = 
    <style jsx>{`
      .tama-body {
        background-color: #f8f8f8;
        background-image: url("${Background}");
        background-size: 350px;
        background-repeat: no-repeat;
        height: 210px;
      }
      .dead-img {
        width: 200px;
        margin: 40px 0 0 70px;
      }
      .tama-sprite {
        width: 100px;
        margin: 90px 0 0 120px;
      }
      .poop-img {
        width: 100px;
      }
      .sick-img {
        width: 70px;
        position: absolute;
        left: 40px;
        top: 120px;
      }
    
    `}</style>;
  if(props.tamagotchi.displayStats){
    return(
      <div className='tama-body'>
        <Stats tamagotchi={props.tamagotchi}/>
      </div>
    );
  } else if (props.tamagotchi.isDead) {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='dead-img' src={DeadImg}/>
      </div>
    )
  } else if (props.tamagotchi.isSleeping) {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='tama-sprite' src={TamaSleep}/>
        {props.tamagotchi.isPoopy ? (
          <img className='poop-img' src={PoopImg}/>
        ) : (
          <img />
        )}
        {props.tamagotchi.isSick ? (
          <img className='sick-img' src={SickImg}/>
        ) : (
          <img />
        )}
      </div>
    );
  } else {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='tama-sprite' src={TamaDefault} />
        {props.tamagotchi.isPoopy ? (
          <img className='poop-img' src={PoopImg}/>
        ) : (
          <img />
        )}
        {props.tamagotchi.isSick ? (
          <img className='sick-img' src={SickImg}/>
        ) : (
          <img />
        )}
      </div>
    );
  }
}

TamaBody.propTypes = {
  tamagotchi: PropTypes.object
};

export default TamaBody;