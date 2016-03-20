import React from 'react';
import 'normalize.css'
import 'styles/App.css'
import './Main.less'
import store from 'stores/appStore'
import { getSummoner } from 'actions/summoner'

let yeomanImage = require('images/yeoman.png');

let AppComponent = React.createClass({
  componentDidMount() {
    store.dispatch(getSummoner('asdf'))
  },

  render() {
    return (
      <div className="index">
        <h1>Summoner Stats</h1>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
})

export default AppComponent;
