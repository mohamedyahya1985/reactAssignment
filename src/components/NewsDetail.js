/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

export default class NewsDetail extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.selectedIndex > -1) {
      return (
        <div>{this.props.contents[this.props.selectedIndex].abstract}</div>
      );
    } else {
      return <div />;
    }
  }
}
