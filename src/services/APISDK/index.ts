import { BASE_URL } from "../../utils/config";

interface Request {
  url: string;
  payload?: any;
  headers?: any;
}

export default class APISDK {
  static BASE_URL = BASE_URL;

  static get(
    url: string,

    headers: any = {
      "Content-Type": "application/json",
    }
  ) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.result) {
            resolve(result.result);
          }
          if (result.error) {
            reject(result.error);
          }
          resolve(result);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }
}
