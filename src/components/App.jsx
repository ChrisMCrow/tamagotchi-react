import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './assets/logo.png';
import Home from './Home';
import TamaDetail from './TamaDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTama: 
      {
        name: 'Melagotchi',
        foodLevel: 80,
        sleepLevel: 50,
        isSleeping: false,
        happiness: 50,
        isSick: false,
        poop: false,
        weight: '1 lbs',
        bad: false,
        alert: false,
        age: 0,
        id: 0
      }
    };
    this.handleNewTama = this.handleNewTama.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleHeal = this.handleHeal.bind(this);
  }

  handleNewTama(newTamaName) {
    let newTama = this.state.masterTama;
    newTama.name = newTamaName;
    this.setState({masterTama: newTama});
  }

  handleFeed() {
    let newTama = this.state.masterTama;
    if (newTama.foodLevel < 75) {
      newTama.foodLevel += 25;
    } else if (newTama.foodLevel <= 100) {
      newTama.foodLevel = 100;
    } 
    this.setState({masterTama: newTama});
  }

  handleSleep() {
    let newTama = this.state.masterTama;
    if (!newTama.isSleeping) {
      newTama.isSleeping = true;
      let sleepInterval = setInterval(() => { 
        if (newTama.sleepLevel < 100) {
          newTama.sleepLevel += 1;
          this.setState({masterTama: newTama});
        } else {
          clearInterval(sleepInterval);
          newTama.isSleeping = false;
        }
      }, 1000);
    }
  }

  handlePlay() {
    let newTama = this.state.masterTama;
    if (newTama.happiness < 75) {
      newTama.happiness += 25;
    } else if (newTama.happiness <= 100) {
      newTama.happiness = 100;
    } 
    this.setState({masterTama: newTama});
  }


  handleHeal() {
    let newTama = this.state.masterTama;
    newTama.isSick = false;
    this.setState({masterTama: newTama});
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
          <Route exact path='/' render={() => <Home onNewTama = {this.handleNewTama} tamagotchi={this.state.masterTama}/>} />
          <Route path='/detail' render={() => <TamaDetail 
            tamagotchi={this.state.masterTama}
            onFeed={this.handleFeed}
            onSleep={this.handleSleep}
            onPlay={this.handlePlay}
            onHeal={this.handleHeal}
          />} />
        </Switch>
      </div>
    );
  }
}

export default App;
