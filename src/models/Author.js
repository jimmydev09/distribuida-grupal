export default class Author {
  constructor(id = null, name = '') {
    this.id = id;
    this.name = name;
  }

  static fromJson(json) {
    return new Author(json.id, json.name);
  }

  toJson() {
    return {
      id: this.id,
      name: this.name
    };
  }
}
