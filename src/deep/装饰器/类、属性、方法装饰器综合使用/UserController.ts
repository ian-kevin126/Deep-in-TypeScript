import UserService from './UserService';
import { Inject } from './injectDecorator';
import { get } from './methodDecorator';
import { Controller } from './ControllerDecorator';
import { InjectContructor } from './injectContructorDecorator';
import collectionInstance from './Collection';

@Controller('/')
export class UserController {
  // @Inject('userService')
  // private userService?: UserService;

  constructor(
    @InjectContructor('userService') private userService?: UserService,
    private count?: string
  ) {}

  @get('/login')
  public login() {
    const peopleServiceInstance = collectionInstance.get('userService');
    new peopleServiceInstance();
  }
}

const controller = new UserController();
controller.login();
