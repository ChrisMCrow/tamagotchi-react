import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background from './assets/background.png';
import TamaDefault from './assets/tamaDefault.png';
import TamaSleep from './assets/tamaSleep.png';
import Stats from './Stats';
import PoopImg from './assets/poop.png';
import DeadImg from './assets/dead.png';
import SickImg from './assets/sick.png';
import TamaSad from './assets/sad.png';
import TamaHungry from './assets/hungry.png';

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
      .tama-sad {
        width: 80px;
        margin: 110px 0 0 130px;
      }
      .tama-hungry {
        width: 90px;
        margin: 90px 0 0 120px;
      }
      .poop-img {
        width: 100px;
        position: absolute;
        top: 120px;
        right: 30px;
      }
      .sick-img {
        width: 60px;
        position: absolute;
        left: 40px;
        top: 150px;
      }
      .sleepy-img {
        font-weight: bold;
        font-size: 20px;
        position: absolute;
        top: 120px;
        right: 120px;
      }
    
    `}</style>;
  const status =
    <div>
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
      {props.tamagotchi.isRestless ? (
        <p className='sleepy-img animated tada infinite'>Zzzz</p>
      ) : (
        <img />
      )}
    </div>

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
      </div>
    );
  } else if (props.tamagotchi.happiness < 25) {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='tama-sad' src={TamaSad}/>
        {status}
      </div>
    );
  } else if (props.tamagotchi.foodLevel < 25) {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='tama-hungry' src={TamaHungry}/>
        {status}
      </div>
    );
  } else {
    return(
      <div className='tama-body'>
        {defaultStyle}
        <img className='tama-sprite animated bounce infinite' src={TamaDefault} />
        {status}
      </div>
    );
  }
}

TamaBody.propTypes = {
  tamagotchi: PropTypes.object
};

export default TamaBody;