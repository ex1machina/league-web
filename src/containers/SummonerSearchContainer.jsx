import React from 'react'
import { connect } from 'react-redux'
import { getSummoner, clearSummoner } from 'actions/summoner'
import SummonerSearch from 'components/SummonerSearch/SummonerSearch'

function mapStateToProps(state) {
  return {
    summonerData: state.summoner
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSummoner: (name) => dispatch(getSummoner(name)),
    clearSummoner: () => dispatch(clearSummoner())
  }
}

const SummonerSearchContainer = React.createClass({
  handleSearch(name) {
    this.props.getSummoner(name)
  },

  handleClear() {
    this.props.clearSummoner()
  },

  render() {
    return (
      <SummonerSearch
        isFetching={this.props.summonerData.isFetching}
        summoner={this.props.summonerData.summoner}
        error={this.props.summonerData.error}
        onSearch={this.handleSearch}
        onClear={this.handleClear}
      />
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummonerSearchContainer)
