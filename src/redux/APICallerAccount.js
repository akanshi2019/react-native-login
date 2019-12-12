import fetch from 'cross-fetch';
import {checkStatus, parseJSON} from '../utils/responseHandler';
const queryString = require('query-string');

const headerData = {
  'content-type': 'application/x-www-form-urlencoded',
};

const API_URL = 'https://reqres.in/';

export default (endpoint, method = 'post', body, header = headerData) =>
  fetch(`${API_URL}${endpoint}`, {
    headers: header,
    method,
    body: queryString.stringify(body),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 201) {
        return response.json();
      }

      return response;
    });
