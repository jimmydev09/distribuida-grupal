export default class LineItem {
  constructor(id = null, isbn = '', quantity = 0) {
    this.id = id;
    this.isbn = isbn;
    this.quantity = quantity;
  }

  static fromJson(json) {
    return new LineItem(json.id, json.isbn, json.quantity);
  }

  toJson() {
    return {
      id: this.id,
      isbn: this.isbn,
      quantity: this.quantity
    };
  }
}
