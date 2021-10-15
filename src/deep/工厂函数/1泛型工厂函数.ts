class CommercialBank {
  static count: number;
  constructor(public address: string = '北京', public name: string = '李四') {
    // 日志文件 哪一个类被创建
    // console.log('CommercialBank create', this.name);
  }
  loan(): void {}
}

function createInstanceFactory<T>(Constructor: { new (...args: any[]): T }) {
  console.log(`${Constructor.name} 被创建了`);

  return new Constructor();
}

type ConstructorType = new (...args: any[]) => any;

let aa: ConstructorType = CommercialBank;

// let res = new aa('光大银行', '万绿园');
// console.log(res);

console.log(createInstanceFactory(CommercialBank));
console.log(createInstanceFactory(CommercialBank));

export default void 0;
