interface IUser {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

interface IRegisteredUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

interface ITokenData {
  id: string;
  name: string;
  email: string;
  birthDate: string;
}

interface ILoginData {
  email: string;
  password: string;
}
