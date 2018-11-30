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
        foodLevel: 100,
        sleepLevel: 100,
        isSleeping: false,
        isRestless: false,
        happiness: 100,
        isSick: false,
        isPoopy: false,
        displayStats: false,
        weight: '1 lbs',
        age: 0,
        isBad: false,
        disciplineLevel: 50,
        alert: false,
        isDead: false,
        id: 0
      }
    };
    this.misbehaveTime = 1000 * this.state.masterTama.disciplineLevel;
    this.handleNewTama = this.handleNewTama.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleHeal = this.handleHeal.bind(this);
    this.handleFlush = this.handleFlush.bind(this);
    this.handleStats = this.handleStats.bind(this);
    this.handleDiscipline = this.handleDiscipline.bind(this);
  }

  componentDidMount() {
    this.foodLevelInterval = setInterval(() => this.foodLevelTime(), 1200);
    this.playLevellInterval = setInterval(() => this.playLevelTime(), 1000);
    this.ageInterval = setInterval(() => this.ageTime(), 10000);
    this.checkAlertInterval  = setInterval(() => {
      let tama = this.state.masterTama;
      if(tama.foodLevel < 25 || tama.sleepLevel <= 0 || tama.happiness < 25 || tama.isSick || tama.isPoopy || tama.isBad) {
        tama.alert = true;
      } else {
        tama.alert = false;        
      }
    }, 1000);
    this.checkDeathInterval = setInterval(() => {
      let newTama = this.state.masterTama;
      if(newTama.foodLevel <= 0 || newTama.happiness <= 0 || newTama.isDead) {
        newTama.isDead = true;
        clearInterval(this.foodLevelInterval);
        clearInterval(this.playLevellInterval);
        clearInterval(this.ageInterval);
        clearInterval(this.checkDeathInterval);
        this.setState({masterTama: newTama});
      }
    }, 1000);
    this.badTimeout();
    this.lightsOn();
  }

  badTimeout() {
    setTimeout (() => { 
      console.log('bad interval');
      this.misbehave();
      this.badTimeout();
    }, 1000 * this.state.masterTama.disciplineLevel);
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

  misbehave() {
    console.log('misbehave');
    let newTama = this.state.masterTama;
    newTama.isBad = true;
    this.setState({masterTama: newTama});
  }
  
  handleNewTama(newTamaName) {
    let newTama = this.state.masterTama;
    newTama.name = newTamaName;
    this.setState({masterTama: newTama});
  }

  handleFeed() {
    let newTama = this.state.masterTama;
    if (!newTama.isDead && !newTama.isSleeping && !newTama.isRestless) {
      if (newTama.foodLevel < 50) {
        newTama.foodLevel += 50;
      } else if (newTama.foodLevel <= 100) {
        newTama.foodLevel = 100;
      }
      setTimeout(() => {
        newTama.isPoopy = true;
        this.sickCountdown();
      }, 30000);
      this.setState({masterTama: newTama});
    }
  }

  sickCountdown() {
    let newTama = this.state.masterTama;
    if (newTama.isPoopy) {
      setTimeout(() => {
        if (newTama.isPoopy) {
          newTama.isSick = true;
          setTimeout(() => {
            if (newTama.isSick) 
              newTama.isDead = true;
          }, 60000);
        }
      }, 60000);
    }
  }

  handleSleep() {
    let newTama = this.state.masterTama;
    if (newTama.isSleeping) {
      newTama.isSleeping = false;
      this.setState({masterTama: newTama});
      this.lightsOn();
    } else {
      newTama.isSleeping = true;
      this.setState({masterTama: newTama});
      this.lightsOff();
    }
  }

  lightsOn() {
    let newTama = this.state.masterTama;
    const sleepInterval = setInterval(() => {
      newTama.sleepLevel--;
      this.setState({masterTama: newTama});
      if (newTama.isSleeping) {
        clearInterval(sleepInterval);
      } else if (newTama.sleepLevel <= 0) {
        clearInterval(sleepInterval);
        newTama.sleepLevel = 0;
        newTama.isRestless = true;
        this.setState({masterTama: newTama});
      }
    }, 400);
  }

  lightsOff() {
    let newTama = this.state.masterTama;
    const restInterval = setInterval(() => {
      newTama.isRestless = false;
      newTama.sleepLevel+=1;
      this.setState({masterTama: newTama});
      if (!newTama.isSleeping) {
        clearInterval(restInterval);
      }
      if (newTama.sleepLevel >= 100) {
        clearInterval(restInterval);
        newTama.isSleeping = false;
        this.setState({masterTama: newTama});
        this.lightsOn();
      }
    }, 400);
  }

  handlePlay() {
    let newTama = this.state.masterTama;
    if (!newTama.isDead && !newTama.isSleeping && !newTama.isRestless) {
      if (newTama.happiness < 50) {
        newTama.happiness += 50;
      } else if (newTama.happiness <= 100) {
        newTama.happiness = 100;
      } 
      this.setState({masterTama: newTama});
    }
  }

  handleSick() {
    let newTama = this.state.masterTama;
    newTama.isSick = false;
    this.setState({masterTama: newTama});
  }

  handleHeal() {
    let newTama = this.state.masterTama;
    newTama.isSick = false;
    this.setState({masterTama: newTama});
  }

  handleFlush() {
    let newTama = this.state.masterTama;
    newTama.isPoopy = false;
    this.setState({masterTama: newTama});
  }

  handleStats() {
    let newTama = this.state.masterTama;
    newTama.displayStats ? newTama.displayStats = false : newTama.displayStats = true;
    this.setState({masterTama: newTama});
  }

  handleDiscipline() {
    console.log('discipline button clicked');
    let newTama = this.state.masterTama;
    if (newTama.isBad) {
      newTama.disciplineLevel += 20; 
      newTama.isBad = false;
      this.setState({masterTama: newTama});
    } else {
      newTama.disciplineLevel -= 5;
      this.setState({masterTama: newTama});
    }
  }
  
  render() {
    return (
      <div className='container'>
        <style jsx>{`
          font-family: Helvetica;

          #logo {
            width: 500px;
            margin-left: 40px;
            margin-bottom: -180px;
            z-index: 1;
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
            onFlush={this.handleFlush}
            onStats={this.handleStats}
            onDiscipline={this.handleDiscipline}
          />} />
        </Switch>
      </div>
    );
  }
}

export default App;
