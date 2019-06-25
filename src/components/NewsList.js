/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import News from "./News";
export default class NewsList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  NewsTapped(indx) {
    this.props.NewsTapped(indx);
  }
  render() {
    return (
      <div>
        {this.props.NewsList.map((oNews, indx) => {
          return (
            <News
              key={"\ud83d\udc4d" + oNews.abstract}
              id={indx}
              News={oNews}
              NewsTapped={this.NewsTapped.bind(this, indx)}
            />
          );
        })}
      </div>
    );
  }
}
