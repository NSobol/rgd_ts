const baseData = {
  baseUrl: 'https://netology-trainbooking.netoservices.ru/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const resp = (res) => {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
};

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  getAllProducts() {
    return fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  getRegisteredUser(data) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(resp);
  }
}

export const api = new Api(baseData);
