//This controller is used to fetch news from the NY times news API.
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import KEYS from "../../code/utilities/keys";
const News = {
  getNews: _this => {
    axios.get(`${KEYS.API_URL}`).then(resp => {
      if (_this) {
        _this.setState({ news: resp.data.results });
      }
    });
  }
};
export default News;
