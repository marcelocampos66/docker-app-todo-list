interface INewTodo {
  order: number;
  todo: string;
  isDone: boolean;
}

interface IUpdateTodo {
  order: number;
  todo: string;
  isDone: boolean;
}

interface IDeleteReponse {
  acknowledged: boolean;
  deletedCount: number;
}
