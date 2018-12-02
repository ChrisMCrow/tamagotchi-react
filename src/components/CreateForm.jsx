import React from 'react';
import PropTypes from 'prop-types';

function CreateForm(props) {
  let _newTamaName = null;

  function handleFormSubmit(event){
    event.preventDefault();

    props.onNewTama(_newTamaName.value);
    _newTamaName.value = '';
  }

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={(input)=>{_newTamaName=input;}}/>
        <button className='btn btn-success' type='submit'>Create New Tamagotchi!</button>
      </form>
    </div>
  );
}

CreateForm.propTypes = {
  onNewTama: PropTypes.func
};

export default CreateForm;