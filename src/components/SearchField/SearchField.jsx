import React, { PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

export default React.createClass({
  propTypes: {
    labelText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func
  },

  handleSubmit() {
    this.props.onSubmit(this.refs.textField.getValue())
  },

  handleClear() {
    this.props.onClear()
  },

  render() {
    return (
      <div>
        <TextField
          ref="textField"
          floatingLabelText={this.props.labelText}
          onEnterKeyDown={this.handleSubmit}
          />
        <RaisedButton style={clearButton} label="Clear" onClick={this.handleClear} />
      </div>
    )
  }
})

const clearButton = {
  margin: 20
}
