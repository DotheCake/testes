const ValidarEmail = require("./email")

test('Validação de email com @gmail.com', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
})

test('Validação de email com @gmail.com.br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true)
})

test('Validação de email com @gmail.com.br.br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
})

test('Validação de email com @gmail.', ()=>{
    expect(ValidarEmail("foo.bar@gmail.")).toBe(false)
})

test('Validação de email com @gmailcom', ()=>{
    expect(ValidarEmail("foo.bar@gmailcom")).toBe(false)
})

test('Validação de email com  gmail.com', ()=>{
    expect(ValidarEmail("foo.bargmail.com")).toBe(false)
})

test('Validação de email só com @gmail.com', ()=>{
    expect(ValidarEmail("@gmail.com")).toBe(false)
})