class TodoApi {
  private url: string;
  private content: string;

  constructor() {
    this.url = 'http://localhost:3001';
    this.content = 'application/json';
  }

  public async saveTodo(newTodo: ITodo) {
    const endpoint = `${this.url}/todos`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public async getTodos() {
    const endpoint = `${this.url}/todos`;
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': this.content,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public async updateTodoStatus(id: string, newInfos: ITodo) {
    const endpoint = `${this.url}/todos/${id}`;
    return fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify(newInfos),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public async deleteTodo(id: string) {
    const endpoint = `${this.url}/todos/${id}`;
    return fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': this.content,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

}

export default new TodoApi();
