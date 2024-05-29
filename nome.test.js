// require do arquivo
    const ValidarNome = require("./nome")

// criar o caso de teste
test('Validação do nome com letras', ()=>{
    expect(ValidarNome("João")).toBe(true)
})

test('Validação do nome com letras e numeros', ()=>{
    expect(ValidarNome("João23")).toBe(false)
})
