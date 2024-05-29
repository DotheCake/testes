
function somar (a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    if ((isFinite (a) == false) || (isFinite (b) == false)) {
        return "Caracter invalido"
    }
    return a + b
    
}

module.exports = somar
