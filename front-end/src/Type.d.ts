interface IAppContext {
  todo: ITodo,
  setTodo: React.Dispatch<React.SetStateAction<ITodo>>;
  todos: [] | ITodoRegistred[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoRegistred[]>>;
  register: IRegister;
  setRegister: React.Dispatch<React.SetStateAction<IRegister>>;
  login: ILogin;
  setLogin: React.Dispatch<React.SetStateAction<ILogin>>;
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

interface IRegister {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface ILocalStorage {
  token: string;
}

type onChange = (e: React.ChangeEvent<HTMLInputElement>) => void

type onChangeDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => void
