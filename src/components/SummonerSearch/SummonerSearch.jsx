import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/lib/circular-progress'
import SearchField from 'components/SearchField/SearchField'
import SummonerSearchResults from 'components/SummonerSearchResults/SummonerSearchResults'
import Error from 'components/Error/Error'
import './SummonerSearch.less'

export default React.createClass({
  propTypes: {
    summoner: PropTypes.object,
    isFetching: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    error: PropTypes.object
  },

  handleSubmit(value) {
    this.props.onSearch(value)
  },

  handleClear() {
    this.props.onClear()
  },

  render() {
    return (
      <div className="summoner-search">
        <SearchField
          labelText="Summoner Name (NA)"
          onSubmit={this.handleSubmit}
          onClear={this.handleClear}
          />
        {this.props.summoner ?
          <SummonerSearchResults
            summoner={this.props.summoner}
          /> : null
        }
        {this.props.isFetching ?
          <CircularProgress /> : null
        }
        {this.props.error ?
          <Error
            error={this.props.error}
          /> : null
        }
      </div>
    )
  }
})
