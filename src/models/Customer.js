export default class Customer {
  constructor(id = null, name = '', email = '') {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static fromJson(json) {
    return new Customer(json.id, json.name, json.email);
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    };
  }
}
