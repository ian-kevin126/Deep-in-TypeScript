import UserServiceImpl from './UserServiceImpl';

// 伪接口
export class UserServiceInter {
  static getServiceImplClass() {
    return UserServiceImpl;
  }
}
