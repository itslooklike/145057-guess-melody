import createDOMElement from './modules/createDOMElement';

export default class View {
  get template() {
    throw new Error(`need define view`);
  }

  render() {
    return createDOMElement(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
