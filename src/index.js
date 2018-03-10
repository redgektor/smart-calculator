class SmartCalculator {
  constructor(initialValue) {
  this.result = 0;
  this.str = [initialValue];

  }

  add(number) {
    this.str.push('+');
    this.str.push(number);
    return this;

  }
  
  subtract(number) {
    this.str.push('-');
    this.str.push(number);
    return this;
  }

  multiply(number) {
    this.str.push('*');
    this.str.push(number);
    return this;
  }

  devide(number) {
    this.str.push('/');
    this.str.push(number);
    return this;
  }

  pow(number) {
    this.str.push('^');
    this.str.push(number);
    return this;
  }
  valueOf() {
    var array = this.str;
    var temp = 0;

    for (var i = array.length-2; i >= 1; i--) {
      if (array[i] == '^') {
        temp = Math.pow(+array[i-1], +array[i+1] );
        array[i+1] = temp;
        array.splice(i-1,2);
      }
    }

    for (var i = array.length-2; i >= 1; i--) {
      if (array[i] == '/') {
        temp = +array[i-1] / +array[i+1];
        array[i+1] = temp;
        array.splice(i-1,2);
      }
    }

    for (var i = array.length-2; i >= 1; i--) {
      if (array[i] == '*') {
        temp = +array[i-1] * +array[i+1];
        array[i+1] = temp;
        array.splice(i-1,2);
      }
    }
    for (var i = array.length-2; i >= 0; i--) {
      if (array[i] == '-') {
        if (array[i-2] ==='-') {
          temp = +array[i-1] + +array[i+1];
        } else {
          temp = +array[i-1] - +array[i+1];
        }
        array[i+1] = temp;
        array.splice(i-1,2);
      }
    }

    for (var i = array.length-2; i >= 0; i--) {
      if (array[i] == '+') {
        temp = +array[i-1] + +array[i+1];
        array[i+1] = temp;
        array.splice(i-1,2);
      }
    }

    return array[0];
  }
}
module.exports = SmartCalculator;
