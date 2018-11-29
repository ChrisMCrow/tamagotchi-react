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
        isDead: false,
        id: 0
      }
    };
    this.handleNewTama = this.handleNewTama.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleHeal = this.handleHeal.bind(this);
  }

  componentDidMount() {
    this.foodLevelInterval = setInterval(() => this.foodLevelTime(), 800);
    this.sleepLevelInterval = setInterval(() => this.sleepLevelTime(), 500);
    this.playLevellInterval = setInterval(() => this.playLevelTime(), 200);
    this.ageInterval = setInterval(() => this.ageTime(), 10000);
    this.checkDeathInterval = setInterval(() => {
      let newTama = this.state.masterTama;
      if(newTama.foodLevel <= 0 || newTama.happiness <= 0) {
        newTama.isDead = true;
        clearInterval(this.foodLevelInterval);
        clearInterval(this.sleepLevelInterval);
        clearInterval(this.playLevellInterval);
        clearInterval(this.ageInterval);
      }
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.foodLevelInterval);
    clearInterval(this.sleepLevelInterval);
    clearInterval(this.playLevellInterval);
  }

  foodLevelTime() {
    let newTama = this.state.masterTama;
    newTama.foodLevel--;
    this.setState({masterTama: newTama});
  }

  sleepLevelTime() {
    let newTama = this.state.masterTama;
    newTama.sleepLevel--;
    this.setState({masterTama: newTama});
  }

  playLevelTime() {
    let newTama = this.state.masterTama;
    newTama.happiness--;
    this.setState({masterTama: newTama});
  }

  ageTime() {
    let newTama = this.state.masterTama;
    newTama.age++;
    this.setState({masterTama: newTama});
  }

  handleNewTama(newTamaName) {
    let newTama = this.state.masterTama;
    newTama.name = newTamaName;
    this.setState({masterTama: newTama});
  }

  handleFeed() {
    let newTama = this.state.masterTama;
    if (!newTama.isDead) {
      if (newTama.foodLevel < 75) {
        newTama.foodLevel += 25;
      } else if (newTama.foodLevel <= 100) {
        newTama.foodLevel = 100;
      } 
      this.setState({masterTama: newTama});
    }
  }

  handleSleep() {
    let newTama = this.state.masterTama;
    if (!newTama.isDead) {
      if (!newTama.isSleeping) {
        newTama.isSleeping = true;
        clearInterval(this.sleepLevelInterval);
        let sleepingInterval = setInterval(() => { 
          if (newTama.sleepLevel < 100) {
            newTama.sleepLevel += 1;
            this.setState({masterTama: newTama});
          } else {
            clearInterval(sleepingInterval);
            this.sleepLevelInterval = setInterval(() => this.sleepLevelTime(), 500);
            newTama.isSleeping = false;
          }
        }, 1000);
      }
    }
  }

  handlePlay() {
    let newTama = this.state.masterTama;
    if (!newTama.isDead) {
      if (newTama.happiness < 75) {
        newTama.happiness += 25;
      } else if (newTama.happiness <= 100) {
        newTama.happiness = 100;
      } 
      this.setState({masterTama: newTama});
    }
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
