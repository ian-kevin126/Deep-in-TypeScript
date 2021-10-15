export default class UserService {
  login(username: string, pwd: string, role: string) {
    console.log('进入service ...Login, username:', username);

    if (username === 'admin' && pwd === '123' && role === 'admin') {
      return true;
    }
    return false;
  }
  register() {
    console.log('userservice...register');
  }
}
