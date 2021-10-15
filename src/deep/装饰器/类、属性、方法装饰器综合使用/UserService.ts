class UserService {
  pname: string = '人民';
  constructor() {
    console.log('UserService create');
  }
  public login() {
    console.log(this.pname + '登录...');
  }
}

export default UserService;
