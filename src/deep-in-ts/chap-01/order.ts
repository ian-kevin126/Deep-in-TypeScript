console.log('******** ============ start ============ **********');

/**
 class Order {
  public orderId: number = 0;
  public date: Date = new Date();
  public custname: string = 'nocustname';
  public phone: string = '021122';

  constructor(orderId_: number, date_: Date, custname_: string, phone_: string) {
    this.orderId = orderId_;
    this.date = date_;
    this.custname = custname_;
    this.phone = phone_;
  }
}
// 等价于下面的简写写法
 */

class OrderDetail {
  constructor(
    public orderDetailId: number = 0,
    public productname: string = 'noproductname',
    public price: number = 0,
    public count: number = 0
  ) {
    this.orderDetailId = orderDetailId;
    this.price = price;
    this.productname = productname;
    this.count = count;
  }
}

class Order {
  constructor(
    public orderId: number = 0,
    public date: Date = new Date(),
    public custname: string = '2212121',
    public phone: string = '2wqwqq',
    public orderDetail: Array<OrderDetail> = []
  ) {
    this.orderId = orderId;
    this.date = date;
    this.custname = custname;
    this.phone = phone;
    this.orderDetail = orderDetail;
  }
}

const orderDetail_1 = new OrderDetail(10, 'iphone12', 5000, 2);
const orderDetail_2 = new OrderDetail(3, 'iphone14', 6000, 3);
const orderDetailArr = [orderDetail_1, orderDetail_2];

const orderDate = new Date(2023, 10, 17, 5, 20, 0);
const order = new Order(1, orderDate, 'kevin', '3322', orderDetailArr);

console.log('order: ', order);
/**
{
    "orderId": 1,
    "date": "2023-11-16T21:20:00.000Z",
    "custname": "kevin",
    "phone": "3322",
    "orderDetail": [
        {
            "orderDetailId": 10,
            "productname": "iphone12",
            "price": 5000,
            "count": 2
        },
        {
            "orderDetailId": 3,
            "productname": "iphone14",
            "price": 6000,
            "count": 3
        }
    ]
}
 */

console.log('******** ============ end ============ **********');
export {};
