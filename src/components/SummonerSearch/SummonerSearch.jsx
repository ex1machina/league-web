import React, { PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import CircularProgress from 'material-ui/lib/circular-progress'
import SummonerSearchResults from 'components/SummonerSearchResults/SummonerSearchResults'

export default React.createClass({
  propTypes: {
    summoner: PropTypes.object,
    isFetching: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    error: PropTypes.object
  },

  handleSubmit() {
    this.props.onSearch(this.refs.textField.getValue())
  },

  handleClear() {
    this.refs.textField.clearValue()
    this.props.onClear()
  },

  render() {
    return (
      <div>
        <div>
          <TextField
            ref="textField"
            floatingLabelText="Summoner Name (NA)"
            onEnterKeyDown={this.handleSubmit}
            onChange={this.handleTextChange}
            />
          <RaisedButton label="Clear" onClick={this.handleClear} />
        </div>
        {this.props.summoner ?
          <SummonerSearchResults
            summoner={this.props.summoner}
          /> : null
        }
        {this.props.isFetching ?
          <CircularProgress /> : null
        }
      </div>
    )
  }
})
