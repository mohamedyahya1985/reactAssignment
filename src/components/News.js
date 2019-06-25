/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../css/style.css";

export default class News extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  NewsTapped(indx) {
    this.props.NewsTapped(indx);
  }

  render() {
    var _title = this.props.News.title;
    var _author = this.props.News.byline;
    var _date = this.props.News.published_date;
    var _newsImage = this.props.News.media[0]["media-metadata"][0].url;
    return (
      <article className="d-flex">
        <a
          className="d-flex pr-3"
          style={{ flex: "1", textDecoration: "none", cursor: "Pointer" }}
          href="_#"
        >
          <div className="article-image">
            <img src={_newsImage} alt="" />
          </div>
          <div className="article-details">
            <h4>{_title}</h4>
            <p>{_author}</p>
            <span>
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {_date}
            </span>
          </div>
        </a>
        <span
          className="article-link"
          onClick={this.NewsTapped.bind(this, this.props.id)}
        >
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </article>
    );
  }
}
