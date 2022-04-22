import * as ApiCaller from './libs/httpRequests';

  export function GetLoginHistory() {
    return new Promise((resolve, reject) => {
      return ApiCaller.httpGet(`Auth/GetLoginHistory`)
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          console.log("err",err);
          return reject(err);
        });
    });
  }

  export function ExportLoginHistory() {
    return new Promise((resolve, reject) => {
      return ApiCaller.httpGetDownload(`Export/exportLoginHistory`)
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }


