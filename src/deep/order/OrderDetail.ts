export default class OrderDetail {
  public orderDetailId: number;
  public productName: string;
  public price: number;
  public count: number;

  constructor(orderDetailId_: number, productName_: string, price_: number, count_: number) {
    this.orderDetailId = orderDetailId_;
    this.productName = productName_;
    this.price = price_;
    this.count = count_;
  }
}
