// empty-async-hooks.js
// export a stub AsyncLocalStorage for browser builds
export class AsyncLocalStorage {
  constructor() {}
  run(store, callback, ...args) {
    return callback(...args);
  }
  getStore() {
    return undefined;
  }
}