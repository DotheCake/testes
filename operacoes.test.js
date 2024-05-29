const somar = require('./operacoes');
 
test('adicionar 3 + 5 igual a 8', () => {
    expect(somar(3, 5)).toBe(8);
})

test('adicionar -3 + -5 igual a -8', () => {
    expect(somar(-3, -5)).toBe(-8);
})

test('adicionar 7 + -2 igual a 5', () => {
    expect(somar(7, -2)).toBe(5);
})


test('adicionar 0 + 9 igual a 9', () => {
    expect(somar(0, 9)).toBe(9);
})

test('adicionar 2.5 + 3.1 igual a 5.6', () => {
    expect(somar(2.5, 3.1)).toBe(5.6);
})

test('adicionar 4 + 2.5 igual a 6.5', () => {
    expect(somar(4, 2.5)).toBe(6.5);
})


test('adicionar a + 3 igual a Caracter invalido', () => {
    expect(somar("a", 3)).toBe("Caracter invalido");
})

test('adicionar 999999999 + 999999999 igual a 1999999998', () => {
    expect(somar(999999999, 999999999)).toBe(1999999998);
})

test('adicionar "1" + "2" igual a 3', () => {
    expect(somar("1", "2")).toBe(3);
})
