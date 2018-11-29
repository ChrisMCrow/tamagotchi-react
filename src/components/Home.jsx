import React from 'react';
import PropTypes from 'prop-types';
import CreateForm from './CreateForm';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <CreateForm onNewTama={props.onNewTama} />
      <Link to='/detail'>{props.tamagotchi.name}</Link>
    </div>
  );
}

Home.propTypes = {
  tamagotchi: PropTypes.object,
  onNewTama: PropTypes.func
};

export default Home;
