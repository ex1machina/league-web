import {
  REQUEST_SUMMONER,
  SUMMONER_RECIEVED,
  SUMMONER_REQUEST_FAILED,
  CLEAR_SUMMONER
} from 'actions/summoner'

const defaultState = {
  isFetching: false,
  summoner: null,
  error: null
}

export default function _summoner(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_SUMMONER:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        summoner: null
      })
    case SUMMONER_RECIEVED:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        summoner: action.summoner
      })
    case SUMMONER_REQUEST_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        summoner: null,
        error: action.error
      })
    case CLEAR_SUMMONER:
      return Object.assign({}, state, {
        isFetching: false,
        summoner: null,
        error: null
      })
    default:
      return state
  }
}
