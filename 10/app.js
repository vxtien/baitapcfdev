function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value = this.value + +prompt('nhập số', 0);
    };
}
  
let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);