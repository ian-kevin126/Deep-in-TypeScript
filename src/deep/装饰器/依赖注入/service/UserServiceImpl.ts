import userinfosdb, { Userinfo } from '../entity/UserInfo';
import UserDaoImpl from '../dao/UserDaoImpl';

export default class UserServiceImpl {
  private static instace: UserServiceImpl;
  userinfoDaoImpl: UserDaoImpl = new UserDaoImpl();
  static userServiceImpl: UserServiceImpl;

  constructor() {
    console.log('UserServiceImpl init');
  }

  static getInstance() {
    if (!this.instace) {
      this.instace = new this();
    }
    return this.instace;
  }

  login(username: string, pwd: string): Userinfo | undefined {
    return this.userinfoDaoImpl.findUsrByUsm(username, pwd);
  }
  register() {
    console.log('userservice...register');
  }
}
