import React, { Component } from "react";

export default class SearchControl extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  doSearch(searchText) {
    this.props.doSearch(this.txtSearch.value);
  }
  ShowSearch() {
    document.querySelector("#searchBox").style.display = "block";
    document.querySelector("#searchFunction").style.display = "block";
    document.querySelector("#HeaderText").style.display = "none";
  }
  render() {
    return (
      <div className="d-flex align-items-center p-3">
        <div className="d-flex align-items-center">
          <a href="_#" className="menu-btn">
            <i className="fa fa-bars" aria-hidden="true" />
          </a>
          <h5
            className="main-title m-0 mx-3"
            onClick={this.ShowSearch}
            id="HeaderText"
          >
            NY Times Most Popular
          </h5>
          <span id="searchBox" style={{ display: "none" }}>
            <input
              type="text"
              ref={txtSearch => {
                this.txtSearch = txtSearch;
              }}
              className="form-control"
              placeholder="NY Times Most Popular..."
            />
          </span>
        </div>
        <span
          id="searchFunction"
          style={{ display: "none", cursor: "hand" }}
          onClick={this.doSearch.bind(this, 12)}
        >
          <div className=" d-flex align-items-center ml-auto">
            <i className="fa fa-search mx-2" aria-hidden="true" />
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </span>
      </div>
    );
  }
}
