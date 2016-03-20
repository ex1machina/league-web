import { getSummoner as get } from 'services/summoner'

export const REQUEST_SUMMONER = 'REQUEST_SUMMONER'
function requestSummoner(name) {
  return {
    type: REQUEST_SUMMONER,
    name
  }
}

export const SUMMONER_RECIEVED = 'SUMMONER_RECIEVED'
function summonerRecieved(summoner) {
  return {
    type: SUMMONER_RECIEVED,
    summoner
  }
}

export const SUMMONER_REQUEST_FAILED = 'SUMMONER_REQUEST_FAILED'
function summonerRequestFailed(error) {
  return {
    type: SUMMONER_REQUEST_FAILED,
    error
  }
}

export function getSummoner(name) {
  return function(dispatch) {
    dispatch(requestSummoner(name))

    get(name)
      .then(summoner => {
        dispatch(summonerRecieved(summoner))
      })
      .catch(err => {
        dispatch(summonerRequestFailed(err))
      })
  }
}
