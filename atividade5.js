//5) Escreva um programa que inverta os caracteres de um string.
function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

let texto = "Meu nome é Estefani";
let stringInvertida = inverterString(texto);
console.log(stringInvertida); 