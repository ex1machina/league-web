import React from 'react';
import 'normalize.css'
import 'styles/App.css'
import './Main.less'
import store from 'stores/appStore'
import SummonerSearchContainer from 'containers/SummonerSearchContainer'

let AppComponent = React.createClass({
  render() {
    return (
      <div className="index">
        <h1>Summoner Stats</h1>
        <SummonerSearchContainer store={store} />
      </div>
    );
  }
})

export default AppComponent;
