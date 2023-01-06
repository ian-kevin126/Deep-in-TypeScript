class Order {
  // !：表示可能不会赋值，或者赋值为undefined
  public name!: string;
  public age!: number;
  public price!: number;
  public count!: number;

  constructor(name_: string, age_: number, price_: number, count_: number) {
    this.name = name_;
    this.age = age_;
    this.price = price_;
    this.count = count_;
  }

  totalPrice(): number {
    return this.price * this.count;
  }
}

const o = new Order('211', 12, undefined, undefined);
console.log(o.totalPrice()); // 虽然不会报错，但是会输出：NaN

const o2 = new Order('211', 12, 2, 2);
console.log(o2.totalPrice()); // 4

export {};
