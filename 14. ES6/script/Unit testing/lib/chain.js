//3.цепочка обязанностей

class Child {
  constructor(next) {
    this.next = next;
  }

  eat(apples) {
    apples = apples - Math.round(Math.random() * 2 + 1);
    if (apples <= 0) {
      console.log("Neener-neener! I am glutton! And now are No apples: ", apples);
    } else if (this.next && apples > 0) {
      this.next.eat(apples);
      console.log(apples);
    }
  }
}

module.exports = Child;
