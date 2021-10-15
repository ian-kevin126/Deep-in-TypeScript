import Autowired from '../decorator/autowireddecortator';
import Singleton from '../decorator/Singleton';
import UserService from '../service/UserService';
import CollectionInstance from '../collection';
import { UserServiceInter } from '../service/UserServiceInter';
import UserServiceImpl from '../service/UserServiceImpl';

class UserController {
  // @Autowired('userService') // 修改Inject为更专业的Autowired单词
  // private userService!: UserService;

  @Autowired('UserServiceImpl')
  @Singleton(false)
  @Autowired('UserServiceImpl')
  @Autowired('UserServiceImpl')
  @Singleton(true) // 产生一个单例模式 并不会在装饰器执行的时候重复创建
  private userServiceImpl!: UserServiceInter;

  login(): void {
    // const userService: UserService = CollectionInstance.get('userService');
    // userService.register();
    // console.log(this.userService);

    const userServiceImpl: UserServiceImpl = Reflect.getOwnPropertyDescriptor(
      UserController.prototype,
      'userServiceImpl'
    )?.value;
    const userinfoFromDB = userServiceImpl.login('admin', '123');
    if (userinfoFromDB) {
      console.log(userinfoFromDB);
    }
  }
}

let controller = new UserController();
controller.login();

export default void 0;
