import React, { Component } from 'react'

export default class Picker extends Component {
  handleChange(e) {
    this.props.typeChanged(Number(e.target.value))
  }
  render() {
    console.log(this.props, this.props.options[this.props.selected])
    return (
      <select onChange={this.handleChange.bind(this)} value={this.props.selected}>
        {
          this.props.options.map((item, index) => <option key={item.url} value={index}>{item.label}</option>)
        }
      </select>
    )
  }
}
