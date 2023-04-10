
class Dog {
  constructor(name) {
    this.name = name
  }
}

const dogFunctionality = {
  bark: () => console.log('Woof'),
  wagTail: () => console.log('Wagging tail'),
  play: () => console.log('Playing!')
}

Object.assign(Dog.prototype, dogFunctionality)

const dog1 = new Dog('Charles')

dog1.bark()