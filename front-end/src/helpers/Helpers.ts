class Helpers {
  private MIN_PASSWORD_LENGTH: number;
  private MIN_NAME_LENGTH: number;
  private BIRTH_DATE_LENGTH: number;
  private EMAIL_REGEX: RegExp;

  constructor() {
    this.MIN_PASSWORD_LENGTH = 6;
    this.MIN_NAME_LENGTH = 4;
    this.BIRTH_DATE_LENGTH = 10;
    this.EMAIL_REGEX = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  }

  public validateNewUserData(data: IRegister): boolean {
    const { name, email, password, birthDate } = data;
    if (name.length < this.MIN_NAME_LENGTH
      || !this.EMAIL_REGEX.test(email)
      || password.length < this.MIN_PASSWORD_LENGTH
      || !birthDate
      || birthDate.length !== this.BIRTH_DATE_LENGTH) {
      return true;
    }
    return false;
  };

  public validateLoginCredentials(data: ILogin): boolean {
    const { email, password } = data;
    if (!this.EMAIL_REGEX.test(email)
      || password.length < this.MIN_PASSWORD_LENGTH) {
      return true;
    }
    return false;
  };

  public formatDate(date: string): string {
    const [year, month, day] = date.split('-')
    return `${month}-${day}-${year}`;
  }

}

export default new Helpers();
