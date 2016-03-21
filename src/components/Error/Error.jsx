import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'

export default React.createClass({
  propTypes: {
    error: PropTypes.object.isRequired
  },

  renderNotFound() {
    return (
      <p>Summoner not found</p>
    )
  },

  renderGeneralError() {
    return (
      <div>
        <h2>Oh noes!</h2>
        <p>
          <strong>Message:</strong> {this.props.error.statusText || this.props.error.messsage}
        </p>
        <p>
          <strong>Code:</strong> {this.props.error.status}
        </p>
      </div>
    )
  },

  render() {
    return (
      <Paper style={paperStyle}>
        {this.props.error.status === 404 ?
          this.renderNotFound() : this.renderGeneralError()
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
