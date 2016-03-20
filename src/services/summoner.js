import config from 'config'

export function getSummoner(name) {
  return fetch(`${config.apiHost}/api/summoners/${name}`)
    .then(response => {
      if (!response.ok) {
        throw response
      }
      return response.json()
    })
}
