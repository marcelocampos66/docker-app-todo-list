class UsersApi {
  private url: string;
  private content: string;

  constructor() {
    this.url = process.env.REACT_APP_USERS_API ||'http://0.0.0.0:3002';
    this.content = 'application/json';
  }

  public async register(data: IRegister) {
    const endpoint = `${this.url}/users`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public async login(data: ILogin) {
    const endpoint = `${this.url}/users/login`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

}

export default new UsersApi();
