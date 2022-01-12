interface IAppContext {
  todo: ITodo,
  setTodo: React.Dispatch<React.SetStateAction<ITodo>>;
  todos: [] | ITodoRegistred[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoRegistred[]>>;
}

interface ITodo {
  order: number;
  todo: string;
  priority: string;
  isDone: boolean;
}

interface ITodoRegistred {
  _id: string;
  order: number;
  todo: string;
  priority: string;
  isDone: boolean;
}

type onChange = (e: React.ChangeEvent<HTMLInputElement>) => void

type onChangeDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => void
