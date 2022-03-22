interface INewTodo {
  order: number;
  todo: string;
  priority: string;
  isDone: boolean;
  userId: string;
}

interface IUpdateTodo {
  order: number;
  todo: string;
  priority: string;
  isDone: boolean;
  userId: string;
}

interface IDeleteReponse {
  acknowledged: boolean;
  deletedCount: number;
}

interface ITokenData {
  id: string;
  name: string;
  email: string;
  birthDate: string;
}

interface IPayload {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  iat: number;
  exp: number;
}
