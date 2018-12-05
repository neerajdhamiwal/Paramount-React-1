import apiUrl from '../config/config.js';
const apiService = {};

const handleErrors = function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

apiService.getService = function(url) {
    return new Promise((resolve, reject) => fetch(`${apiUrl.url}${url}`, {
        method: 'GET',
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
            }));
};

apiService.updateService = function(url) {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl.url}${url}`,
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
    if (multi) {
        request.header = {
            'x-access-token': sessionStorage.getItem('token') //eslint-disable-line
        };
        request.body = data;
    } else {
        request.header = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': sessionStorage.getItem('token') //eslint-disable-line

        };
        request.body = JSON.stringify(data);
    }

    return new Promise((resolve, reject) => {
        fetch(`${apiUrl.url}${url}`,
            {
                method: 'POST',
                headers: request.header,
                body: request.body
            })
            .then(handleErrors)
            .then(response => {
                if (response.error) {
                    const link = document.createElement('a');
                    link.href = '/error';
                    document.body.appendChild(link);
                    link.click();
                } else {
                    resolve(response);
                }
            }, error => {
                reject(error);
            });
    });
};
export default apiService;
