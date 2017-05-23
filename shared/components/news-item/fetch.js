const apiPath = id => `/component/news-item/${id ? id : ':id'}`;

// https://www.npmjs.com/package/request#requestoptions-callback
const requestOptions = id => {
  return {
    uri: apiPath(id),
    // baseUrl,
    // headers: {},
    json: true,
    method: 'GET',
  };
};

module.exports = {
  apiPath,
  requestOptions,
};
