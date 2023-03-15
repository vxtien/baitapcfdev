let calculator = {
  read() {
    this.a = +prompt("Nhập vào số a:", 0);
    this.b = +prompt("Nhập vào số b:", 0);
  },

  add() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.add());
console.log(calculator.mul());
