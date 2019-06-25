/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { Component } from "react";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";
import News from "../code/controllers/News";
import SearchControl from "./SearchControl";
export default class NewsApp extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { Id: -1, news: [], renderNewsTitles: true };
    this.NewsTapped = this.NewsTapped.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }
  componentDidMount() {
    if (this.state.renderNewsTitles) {
      News.getNews(this);
    }
  }
  NewsTapped(indx) {
    this.setState({ Id: indx, renderNewsTitles: false });
  }
  doSearch(txt) {
    if (!txt) {
      News.getNews(this);
    }
    var source = this.state.news;
    var results = [];
    var index;
    var entry;
    txt = txt.toUpperCase();
    for (index = 0; index < source.length; ++index) {
      entry = source[index];
      if (
        entry &&
        entry.title &&
        entry.title.toUpperCase().indexOf(txt) !== -1
      ) {
        results.push(entry);
      }
    }
    if (results.length > 0) {
      this.setState({ news: results, renderNewsTitles: true });
    }
  }
  render() {
    if (this.state.news) {
      if (this.state.news.length > 0) {
        return (
          <span>
            <header>
              <SearchControl doSearch={this.doSearch.bind(this)} />
            </header>
            <div className="container d-flex justify-content-between text-left">
              <div className="row">
                <div className="col-sm-8">
                  <NewsList
                    NewsList={this.state.news}
                    NewsTapped={this.NewsTapped}
                  />
                </div>
                <div className="col-sm-4">
                  <NewsDetail
                    contents={this.state.news}
                    selectedIndex={this.state.Id}
                  />
                </div>
              </div>
            </div>
          </span>
        );
      } else {
        return <div>Loading Data....</div>;
      }
    } else {
      return <div>Loading Data....</div>;
    }
  }
}
