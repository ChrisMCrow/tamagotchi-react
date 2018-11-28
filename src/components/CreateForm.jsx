import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CreateForm(props) {
  let _newTamaName = null;

  function handleFormSubmit(event){
    event.preventDefault();

    props.onNewTama({
      name: _newTamaName.value,
      foodLevel: 100,
      happiness: 100,
      sleepLevel: 100,
      age: 0,
      id: v4()
    });
    _newTamaName.value = "";
  }

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={(input)=>{_newTamaName=input}}/>
        <button className='btn btn-success' type='submit'>Create New Tamagotchi!</button>
      </form>
    </div>
  );
}

export default CreateForm;