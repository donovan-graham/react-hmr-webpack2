import React, { PropTypes } from 'react';
import 'whatwg-fetch';

const NewsItem = ({ title, year, summary, link }) => (
  <section className="news-item">
    <h3>{title} ({year})</h3>
    <p>{summary}</p>
    <a href={link} target={_blank}>read more ...</a>
  </section>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

class FetchNewsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'pending',
      payload: null,
    };
  }

  componentDidMount() {
    const headers = { Accept: 'application/json' };
    fetch(`/api/component/news-item/${this.props.id}`, { headers })
      .then(response => response.json())
      .then(json => this.setState({ status: 'completed', payload: json }))
      .catch(err => this.setState({ status: 'failed', payload: null }));
  }

  render() {
    const { status, payload } = this.state;
    return (
      <div>
        {status === 'completed' && <NewsItem {...payload} />}
        {status === 'pending' && <div>Loading ... </div>}
        {status === 'failed' && <div> Something went wrong </div>}
      </div>
    );
  }
}

export default FetchNewsItem;
