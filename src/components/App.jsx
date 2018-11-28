import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './assets/logo.png';
import Home from './Home';
import TamaDetail from './TamaDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamaList: [
        {
          name: 'Melagotchi',
          foodLevel: 100,
          happiness: 100,
          sleepLevel: 100,
          age: 0,
          id: 0
        }
      ]
    };
    this.handleNewTama = this.handleNewTama.bind(this);
  }

  handleNewTama(newTama) {
    let newTamaList = this.state.masterTamaList.slice();
    newTamaList.push(newTama);
    this.setState({masterTamaList: newTamaList});
  }
  
  render() {
    return (
      <div className='container'>
        <style jsx>{`
          font-family: Helvetica;

          #logo {
            width: 100%;
          }
        `}</style>
        <img src={logo} id='logo'/>
        <Switch>
          <Route exact path='/' render={() => <Home onNewTama = {this.handleNewTama} tamaList={this.state.masterTamaList}/>} />
          <Route path='/detail' render={() => <TamaDetail tamaList={this.state.masterTamaList}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
