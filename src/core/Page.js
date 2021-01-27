export class Page {
  constructor(params) {
    this.prams = params
  }

  getRoot() {
    throw new Error("Method 'getRoot' should be implemented")
  }

  afterRender() {}

  destroy() {}
}
