import md5 from "md5";
import jwt from 'jsonwebtoken';

class Helpers {
  private secret: jwt.Secret;
  private jwtConfig: jwt.SignOptions;
  private jwtRefreshConfig: jwt.SignOptions;

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
    this.jwtConfig = { expiresIn: '30s', algorithm: 'HS256' };
    this.jwtRefreshConfig = { expiresIn: '1d', algorithm: 'HS256' };
  }

  public formatBirthDate(birthDate: string): string {
    return new Date(birthDate).toLocaleDateString('pt-BR');
  }

  public hashPassword(password: string): string {
    return md5(password);
  }

  public generateToken(data: ITokenData): string {
    return jwt.sign(data, this.secret, this.jwtConfig);
  }

  public generateRefreshToken(data: ITokenData): string {
    return jwt.sign(data, this.secret, this.jwtRefreshConfig);
  }

  public getUserNecessaryData(user: IRegisteredUser): ITokenData {
    return ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
    });
  }

  private nameIsValid(name: string): boolean {
    if (typeof name === 'string' && name.length > 3) {
      return true;
    }
    return false;
  }

  private passwordIsValid(password: string): boolean {
    if (typeof password === 'string' && password.length > 5) {
      return true;
    }
    return false;
  }

  private emailIsValid(email: string): boolean {
    const emailRegex: RegExp = /\S+@\S+\.\S+/;
    if (email.match(emailRegex)) {
      return true;
    }
    return false;
  }

  private dateIsValid(date: string): boolean {
    const dateRegex: RegExp = /^\d{2}[./-]\d{2}[./-]\d{4}$/
    if (date.match(dateRegex)) {
      return true;
    }
    return false;
  }

  public verifyUserInfos(data: IUser) {
    if (this.nameIsValid(data.name)
      && this.passwordIsValid(data.password)
      && this.emailIsValid(data.email)
      && this.dateIsValid(data.birthDate)
    ) {
      return true;
    }
    return false;
  }

  public verifyLoginCredentials(credentials: ILoginData) {
    if (this.emailIsValid(credentials.email)
      && this.passwordIsValid(credentials.password)
    ) {
      return true;
    }
    return false;
  }

}

export default Helpers;
