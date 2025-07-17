import Inventory from './Inventory.js';

export default class Book {
  constructor(isbn = '', title = '', price = 0, inventory = null) {
    this.isbn = isbn;
    this.title = title;
    this.price = price;
    this.inventory = inventory; // instancia de Inventory
  }

  static fromJson(json) {
    return new Book(
      json.isbn,
      json.title,
      json.price,
      json.inventory ? Inventory.fromJson(json.inventory) : null
    );
  }

  toJson() {
    return {
      isbn: this.isbn,
      title: this.title,
      price: this.price
      // no incluye inventory (se gestiona por separado)
    };
  }
}
