let calculator = {
  read: function (a, b) {
    this.c = a;
    this.d = b;
  },
  sum: function () {
    return this.c + this.d
  },
  mul: function () {
    return this.c * this.d
  },
  c: 0,
  d: 0,
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
