describe("GCD. Тест с целыми числами", function(){
  it("Если в диапазоне до 1 млн", function(){
    expect(unit.GCD(2,10)).toBe(2);
    expect(unit.GCD(30,40)).toBe(10);
    expect(unit.GCD(3000,4000)).toBe(1000);
    expect(unit.GCD(100,1503)).toBe(1);
    expect(unit.GCD(1000000,4000)).toBe(4000);
  });
  
  it("Если отрицательные числа", function(){
    expect(unit.GCD(-2,8)).toBe(2);
    expect(unit.GCD(-10,-100)).toBe(10);
  });
});

describe("GCD. Тест с дробными числами", function(){
  it("дробные числа", function(){
    expect(unit.GCD(2.1,4)).toBeUndefined();
    expect(unit.GCD(2,4.1)).toBeUndefined();
    expect(unit.GCD(2.4,5.5)).toBeUndefined();
    expect(unit.GCD(2.4,-5.5)).toBeUndefined();
  });
});

describe("GCD. Ввод ноля", function(){
  it("Одно из чисел 0", function(){
    expect(unit.GCD(0, 2)).toEqual(NaN);
    expect(unit.GCD(8, 0)).toEqual(NaN);
  });
    it("Оба числа - ноли", function(){
    expect(unit.GCD(0, 0)).toEqual(NaN);
  });
});

describe("GCD. Ввод не числа", function(){
  it("Ввод строки", function(){
    expect(unit.GCD("a", 2)).toBeUndefined();
  });
  it("Ввод объекта или массива", function(){
    expect(unit.GCD({}, [])).toBeUndefined();
  });
});

describe("factor. Ввод ненатурального числа", function(){
  it("Ввод отрицательноно числа", function(){
    expect(unit.factor(-5)).toBeNull();
  });
  it("Ввод ноля", function(){
    expect(unit.factor(0)).toBeNull();
  });
});

describe("factor. Ввод натурального числа", function(){
  it("10007", function(){
    expect(unit.factor(10007)).toEqual([10007]);
  });
  it("6876454650", function(){
    expect(unit.factor(6876454650)).toEqual([2, 3, 5, 5, 13, 43, 82009]);
  });
});

describe("sort. Ввод разных типов данных", function(){
  it("только Number", function(){
    expect(unit.sort([100, 80, 25, 0.5, -7, -777, 777, 0, 1000])).toEqual([-777, -7, 0, 0.5, 25, 80, 100, 777, 1000]);
  });
  it("только String", function(){
    expect(unit.sort(["abc", "Abc", "ABC", "Fff", "FFF", "яяя","Жжж", "Еее"])).toEqual(["ABC", "Abc", "FFF", "Fff", "abc", "Еее", "Жжж", "яяя"]);
  });
  it("Number вперемешку со String", function(){
    expect(unit.sort(["abc", "Abc", "ABC", "Fff", "FFF", "яяя","Жжж", "Еее", 100, 80, 25, 0.5, -7, -777, 777, 0, 1000])).toEqual(["-7", "-777", "0", "0.5", "100", "1000", "25", "777", "80", "ABC", "Abc", "FFF", "Fff", "abc", "Еее", "Жжж", "яяя"]);
  });


});