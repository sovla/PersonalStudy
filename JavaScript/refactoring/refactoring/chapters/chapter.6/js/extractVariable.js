// 변수 추출하기
// 직관적인 임시변수 사용

// example
// function price(order) {
//   // 가격(price) = 기본 가격 - 수량 할인 + 배송비
//   return (
//     order.quantity * order.itemPrice -
//     Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//     Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }

// 로직 파악 및 하나씩 임시변수로 변환
function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
}

// inner Class
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }

  get price() {
    // return (
    //   this.quantity * this.itemPrice -
    //   Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
    //   Math.min(this.quantity * this.itemPrice * 0.1, 100)
    // );
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
}
