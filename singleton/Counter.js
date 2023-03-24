
let instance;
let counter = 0

class Counter {
  constructor() {
    if(instance) {
      alert('Can only create one instance!')
    }
  }

  getInstance() {
    return this.instance
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter