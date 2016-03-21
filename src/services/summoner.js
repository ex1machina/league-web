import config from 'config'

class Summoner {
  constructor(response) {
    this.name = response.summoner.name
    this.summonerLevel = response.summoner.summonerLevel

    if (response.summary) {

      this.unranked = response.summary.find(stat => {
        return stat.playerStatSummaryType === 'unranked'
      })

      this.rankedSolo = response.summary.find(stat => {
        return stat.playerStatSummaryType === 'RankedSolo5x5'
      })

    }

    this.response = response
  }
}

export function getSummoner(name) {
  return fetch(`${config.apiHost}/api/summoners/${name}`)
    .then(response => {
      if (!response.ok) {
        throw response
      }
      return response.json()
    })
    .then(jsonResponse => {
      return new Summoner(jsonResponse)
    })
}
