import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'

export default React.createClass({
  propTypes: {
    summoner: PropTypes.object.isRequired
  },

  render() {
    return (
      <Paper style={paperStyle} zDepth={1}>
        <pre>{JSON.stringify(this.props.summoner, null, 2)}</pre>
      </Paper>
    )
  }
})

const paperStyle = {
  marginTop: 20,
  padding: 20
}
