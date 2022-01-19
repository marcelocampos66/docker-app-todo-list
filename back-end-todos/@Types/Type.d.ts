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
