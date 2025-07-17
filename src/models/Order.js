import Customer from './Customer.js';
import LineItem from './LineItem.js';

export default class Order {
  constructor(
    id = null,
    customer = null,    // instancia de Customer
    total = 0,
    lineItems = []      // array de LineItem
  ) {
    this.id = id;
    this.customer = customer;
    this.total = total;
    this.lineItems = lineItems;
  }

  static fromJson(json) {
    return new Order(
      json.id,
      json.customer ? Customer.fromJson(json.customer) : null,
      json.total,
      Array.isArray(json.lineItems)
        ? json.lineItems.map(li => LineItem.fromJson(li))
        : []
    );
  }

  toJson() {
    return {
      id: this.id,
      customerId: this.customer?.id,
      lineItems: this.lineItems.map(li => ({
        isbn: li.isbn,
        quantity: li.quantity
      }))
      // total lo calcula el backend
    };
  }
}
