import {apiUrl} from './common.js';
import axios from 'axios';
import base64 from 'base-64';
import {Auth} from './common';
const apiService = {};



const handleErrors = function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

apiService.getService = function(url) {
    const method = 'GET';
    const config = {
        method
    };
    // config.auth = {
    //     username: UserName,
    //     password: Pass
    // };
    config.url = `${apiUrl}${url}`;
    config.headers = {'Content-Type': 'application/json'};
    return new Promise((resolve, reject) => axios(config)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })
    )
};

apiService.updateService = function(url) {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${url}`,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('token') //eslint-disable-line
                }
            })
            .then(handleErrors)
            .then(
                response => {
                    if (response.error) {

                    } else {
                        resolve(response);
                    }
                },
                error => {
                    reject(error);
                });
    });
};

apiService.postService = function(url, data, multi) {
    const request = {};
    let headers = new Headers();

    if (multi) {
        request.header = {
            'x-access-token': sessionStorage.getItem('token') //eslint-disable-line
        };
        request.body = data;
    } else {
        // request.header = {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // };
        headers.set('Content-Type', 'application/json');
        headers.set('Authorization', 'Basic ' + base64.encode(Auth.username + ":" + Auth.password));
        request.body = JSON.stringify(data);
    }

    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${url}`,
            {
                method: 'POST',
                headers: headers,
                body: request.body
            })
            // .then(handleErrors)
            .then(response => {
                    resolve(response);

            }, error => {
                reject(error);
            });
    });
};
export default apiService;
