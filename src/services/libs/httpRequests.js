import * as Configure from './urlConfig';


export function httpGet(path, useToken = true) {
    return callApi(path, 'GET', null, useToken, false)
}

export function httpPut(path, body = null, useToken = true) {
    return callApi(path, 'PUT', body, useToken, false)
}

export function httpPost(path, body, useToken = true) {
    return callApi(path, 'POST', body, useToken, false);
}

export function httpPostWithFile(path, body, useToken = true) {
    return callApi(path, 'POST', body, useToken, false, true, false, true);
}

export function httpGetDownload(path, filetype, useToken = true) {
    return Download(path);
}
function callApi(path, method, body = null, useToken = false, https = false, isFormData = false, noloading = false, file = false) {

        return SendServer(path, method, body, false, '', isFormData);
}
function Download(path) {
    let url = Configure.BASE_URL + path;
    const requestHeaders = new Headers(); 

    requestHeaders.set('Content-Type', "text/plain");
    requestHeaders.set('Content-Disposition', 'attachment');
      let requestInfo;

    requestInfo = { method: "GET", headers: requestHeaders };

    return new Promise((resolve, reject) => {
        fetch(url, requestInfo)
            .then(response => {
                    if (response.status !== 200) {                        
                            return response.json().then((obj) => {
                                return reject(obj);
                            })
                        }
                    return resolve(response);
            }).catch(ex => {
                return reject(ex);
            })
    });
}

function SendServer(path, method, body = null, useToken = true, token = '', isFormData = false) {
    let url = Configure.BASE_URL + path;
    const requestHeaders = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    if (useToken) {
        requestHeaders.set('Authorization', 'bearer ' + token);
    }
    let requestInfo;
    switch (method) {
        case 'POST':
        case 'PUT':
            if (isFormData === false) {
                requestInfo = { method: method, headers: requestHeaders, body: JSON.stringify(body) };
            } else {
                requestHeaders.delete('Content-Type');
                requestInfo = { method: method, headers: requestHeaders, body: body };
            }
            break;
        case 'DELETE':
        case 'GET':
            requestInfo = { method: method, headers: requestHeaders };
            break;
        default:
            break;
    }

    return new Promise((resolve, reject) => {
        fetch(url, requestInfo)
            .then(response => {

                return resolve(response.json());
            })
            .catch(ex => {
                console.log(ex);
                return reject(ex);
            })
    });
}