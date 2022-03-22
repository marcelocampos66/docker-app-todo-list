declare namespace jwt {
  export interface Payload {
    id: string;
    name: string;
    email: string;
    birthDate: string;
    iat: number;
    exp: number;
  }
}
