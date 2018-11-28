import React from "react";
import PropTypes from "prop-types";
import CreateForm from "./CreateForm";
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <CreateForm onNewTama={props.onNewTama} />
      {props.tamaList.map((tama) => (
        <Link to='/detail' key={tama.id}>{tama.name}</Link>
      ))}
    </div>
  );
}

Home.propTypes = {
  onNewTama: PropTypes.func
};

export default Home;
