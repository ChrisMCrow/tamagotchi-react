import React from 'react';
import PropTypes from 'prop-types';
import TopMenu from './TopMenu';
import TamaBody from './TamaBody';
import BottomMenu from './BottomMenu';
import TamaShell from './assets/tamashell.png';

function TamaDetail(props) {
  return(
    <div id='tama-detail-container'>
      <style jsx>{`
        #tama-detail-container {
          position: relative;
        }
        #tama-shell {
          margin: 50px 0;
        }
        #play-container {
          margin: 50px auto;
          width: 350px;
          border: 1;
          position: absolute;
          top: 380px;
          left: 260px;
          border: 2px solid black;
          border-radius: 30px;
        }
      `}</style>
      <img id='tama-shell' src={TamaShell} />
      <div id='play-container'>
        <TopMenu 
          onFeed={props.onFeed}
          onSleep={props.onSleep}
          onPlay={props.onPlay}
          onHeal={props.onHeal}
        />
        <TamaBody 
          tamagotchi={props.tamagotchi}
        />
        <BottomMenu 
          onFlush={props.onFlush}
          onStats={props.onStats}
          onDiscipline={props.onDiscipline}
          tamagotchi={props.tamagotchi}
        />
      </div>
    </div>
  );
}

TamaDetail.propTypes = {
  tamagotchi: PropTypes.object,
  onFeed: PropTypes.func,
  onSleep: PropTypes.func,
  onPlay: PropTypes.func,  
  onHeal: PropTypes.func,
  onFlush: PropTypes.func,
  onStats: PropTypes.func,
  onDiscipline: PropTypes.func
};

export default TamaDetail;