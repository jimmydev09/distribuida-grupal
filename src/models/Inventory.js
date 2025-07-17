export default class Inventory {
  constructor(isbn = '', sold = 0, supplied = 0) {
    this.isbn = isbn;
    this.sold = sold;
    this.supplied = supplied;
  }

  static fromJson(json) {
    return new Inventory(json.isbn, json.sold, json.supplied);
  }

  toJson() {
    return {
      isbn: this.isbn,
      sold: this.sold,
      supplied: this.supplied
    };
  }
}
