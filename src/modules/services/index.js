import APISDK from "/services/APISDK";

export default class NEWS extends APISDK {
  static url = this.BASE_URL;
  static api_key = process.env.NEWS_API_KEY;

  static getNews = async () =>
    this.get(`${this.url}/news?access_key=${api_key}`);
}
