import OrderDetail from './OrderDetail';

// 订单id 订单日期 顾客地址 顾客名 顾客微信 顾客手机号 客服

class Order {
  constructor(
    public orderId: number,
    public date: Date,
    public custname: string,
    public phone: string,
    public orderDetail: OrderDetail[],
    public aa: string
  ) {
    // this.orderId = orderId;
    // this.date = date;
    // this.custname = custname;
    // this.phone = phone;
    // this.orderDetail = orderDetail;
  }
}

const orderDate = new Date(2021, 8, 3, 11, 50, 23);
const orderDetail = new OrderDetail(0, 'iphone12', 6499, 1);
const orderDetail2 = new OrderDetail(1, 'iphoneX', 6000, 1);
const order = new Order(1001, orderDate, '徐轲', '12345600001', [orderDetail, orderDetail2], 'a');

console.log(order);

export default Order;
