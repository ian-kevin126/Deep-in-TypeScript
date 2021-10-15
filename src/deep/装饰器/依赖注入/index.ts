import './controller/UserController';

/**
 * @Constructor 控制器装饰器【@Constructor】修饰的类
 *
 * @Service 业务逻辑层类装饰器
 *
 * @Autowired 自动装配，一般是帮助把外部其他数据注入【简单理解为赋值】给当前类属性或方法参数的装饰器，这些数据可以是string，number等基本数据类型，也可以是一个对象。
 *
 * dependencyid: 依赖ID 一个唯一标识符变量，作为 @Autowired 装饰器的实参，使用 @Autowired 为不同类属性或方法参数注入数据时，dependencyid用于区分这些不同的类。
 *
 * singleton: 标注是否是单例注入的参数，可选。
 *
 * target: 表示被注入的目标类。
 */
