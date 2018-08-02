import "babel-polyfill";
import request from 'request';
import API from './api.js';

export default class TaxlyApi {
  constructor({key, token}) {
    this.baseURL = 'https://api.taxly.pl/';
    this.auth = {
      user: key,
      pass: token
    }

    API.forEach((config) => {
      this[config.name] = (data, callback) => this.sendReqest(config, data, callback);
    });
  }

  sendReqest(options, data, callback) {
    let url = this.baseURL + options.url + '/';
    let props = Object.assign({ auth: this.auth },  options.props);
    if (options.props.method == 'GET') 
      props.qs = data;
    else 
      props.form = data;
    console.log(url, props);
    return new Promise(function (resolve, reject) {
      request(url, props, function (error, response, body) {
        if (error || !response || response.statusCode >= 300)
          reject(error || body);
        else {
          try {
            let json = JSON.parse(body)
            resolve(json); 
          } catch (error) {
            resolve();
          }
        }
      });
    });
  }
}