import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'

export default React.createClass({
  propTypes: {
    summoner: PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      jsonVisible: false
    }
  },

  toggleShowJSON() {
    this.setState({
      jsonVisible: !this.state.jsonVisible
    })
  },

  render() {
    return (
      <Paper style={paperStyle} zDepth={1}>
        <h2 style={{textAlign: 'center'}}>
          {`${this.props.summoner.name} - Lvl ${this.props.summoner.summonerLevel}`}
        </h2>
        {this.props.summoner.rankedSolo ?
          <div>
            <p>
              <strong>Wins: </strong>{this.props.summoner.rankedSolo.wins}
            </p>
            <p>
              <strong>Losses: </strong>{this.props.summoner.rankedSolo.losses}
            </p>
            <p>
              <strong>Champions Killed: </strong>{this.props.summoner.rankedSolo.aggregatedStats.totalChampionKills}
            </p>
          </div> :
          <p>No ranked solo data</p>
        }
        <a href="#" onClick={this.toggleShowJSON}>
          {this.state.jsonVisible ? 'Hide' : 'Show'} full JSON
        </a>
        {this.state.jsonVisible ?
          <pre>{JSON.stringify(this.props.summoner, null, 2)}</pre> : null
        }
      </Paper>
    )
  }
})

const paperStyle = {
  marginTop: 20,
  padding: 20,
  width: '100%'
}
