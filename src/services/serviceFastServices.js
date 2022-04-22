import * as ApiCaller from './libs/httpRequests';

export function GetList(
  FilterText = '',
  Page = 1,
  PageSize = 20,
  yyyyMMdd = '',
  isDone = false,
  isUnDone = false,
) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetListV2?FilterText=${FilterText}&Page=${Page}&PageSize=${PageSize}&yyyyMMdd=${yyyyMMdd}&isDone=${isDone}&isUnDone=${isUnDone}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetDetail(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetDetail?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetGeneral(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetGeneral?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetBusinessFees(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetBusinessFees?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetAccessories(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetAccessoriesV2?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetOfferReplacements(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetOfferReplacements?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetAttachment(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetAttachment?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetTimeLine(sttRec = '', yyyyMMdd = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetTimeLine?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetCurrentEmployee() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetCurrentEmployee`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListLoi(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFastLoi/GetList`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListLoiHang(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFastLoiHang/GetList`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListHinhThuc() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListHinhThuc`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListPhanLoai() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListPhanLoai`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListKetQua() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListKetQua`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListDanhGiaLoi() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListDanhGiaLoi`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListCustomer(key = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListCustomer?key=${key}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListModelByMakh(makh = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListModelByMakh?makh=${makh}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetListSerialByModel(makh, mavt) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(
      `ServiceFast/GetListSerialByModel?makh=${makh}&mavt=${mavt}`,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function GetMaBienBan() {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetMaBienBan`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function CreateBusinessFee(data, sttrec, yyyyMM) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/CreateBusinessFee/?sttRec=${sttrec}&yyyyMM=${yyyyMM}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function UpdateBusinessFee(data, sttRec, sttRec0, yyyyMMdd) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/UpdateBusinessFee/?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}&sttRec0=${sttRec0}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetHoSo(key) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetHoSo/?key=${key}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetPXDH(ma_vt, yyyyMMdd) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetPXDH/?ma_vt=${ma_vt}&yyyyMMdd=${yyyyMMdd}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetCongTacPhi(key) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetCongTacPhi/?key=${key}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetLo(ma_vt) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetLo?ma_vt=${ma_vt}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetDvt(ma_vt) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetDvt?ma_vt=${ma_vt}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetSoThe(ma_ks) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetSoThe?ma_ks=${ma_ks}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetCases(key = ''){
  return new Promise((resolve, reject)=>{
    return ApiCaller.httpGet(`ServiceFast/GetCases?key=${key}`).then(result=>{
      return resolve(result);
    }).catch(err=>{
      return reject(err);
    })
  })
}
export function GetListProducts(key = '') {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListProducts?key=${key}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function CreateAccessory(data, sttrec, yyyyMM ) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/CreateAccessory/?sttRec=${sttrec}&yyyyMM=${yyyyMM}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function UpdateAccessory(data, sttRec, sttRec0, yyyyMMdd) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/UpdateAccessory/?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}&sttRec0=${sttRec0}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function CreateOfferReplacement(data, sttrec, yyyyMM) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/CreateOfferReplacement/?sttRec=${sttrec}&yyyyMM=${yyyyMM}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function UpdateOfferReplacement(data, sttRec, sttRec0, yyyyMMdd) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/UpdateOfferReplacement/?sttRec=${sttRec}&yyyyMMdd=${yyyyMMdd}&sttRec0=${sttRec0}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function Create(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFast/Create`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function CreateV2(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFast/CreateV2`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function Update(data, yyyyMMdd, sttrec) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/Update?yyyyMMdd=${yyyyMMdd}&sttrec=${sttrec}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function UpdateV2(data, yyyyMMdd, sttrec) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(
      `ServiceFast/UpdateV2?yyyyMMdd=${yyyyMMdd}&sttrec=${sttrec}`,
      data,
    )
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}
export function GetListImageBase64(sttRec) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpGet(`ServiceFast/GetListImageBase64?sttRec=${sttRec}`)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function InsertFileImage(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFast/InsertFileImage`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function DeleteFileUpload(data) {
  return new Promise((resolve, reject) => {
    return ApiCaller.httpPost(`ServiceFast/DeleteFileUpload`, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

