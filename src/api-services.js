export default class TiketsServise {
  searchId = null;
  async getSearchId() {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search').then((result) => result.json());
      this.searchId = response.searchId;
    } catch (error) {
      console.log(error);
    }
  }
  async getPackTikets() {
    const result = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchId}`);
    if (!result.ok) {
      throw new Error('Код ошибки: ' + result.status);
    }
    return result.json();
  }
}
